import { NextResponse } from "next/server";

const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";
const MODEL = "llama-3.1-8b-instant";

export async function POST(request) {
  try {
    const body = await request.json();
    const messages = Array.isArray(body?.messages) ? body.messages : [];

    if (!messages.length) {
      return NextResponse.json({ error: "Messages are required." }, { status: 400 });
    }

    if (!process.env.GROQ_API_KEY) {
      return NextResponse.json(
        {
          reply:
            "Groq is not configured yet. Please add GROQ_API_KEY to .env.local and restart npm run dev. Example: GROQ_API_KEY=gsk_...",
          configured: false,
        },
        { status: 200 },
      );
    }

    const systemPrompt = {
      role: "system",
      content:
        "You are an enterprise learning assistant for Accredian. Keep responses concise, practical, and business-focused.",
    };

    const response = await fetch(GROQ_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: MODEL,
        temperature: 0.5,
        max_tokens: 400,
        messages: [systemPrompt, ...messages],
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        { error: `Groq API error: ${response.status} ${errorText}` },
        { status: 500 },
      );
    }

    const data = await response.json();
    const content = data?.choices?.[0]?.message?.content?.trim();

    return NextResponse.json({ reply: content || "I could not generate a response.", configured: true });
  } catch (error) {
    return NextResponse.json(
      { error: error?.message || "Unexpected server error." },
      { status: 500 },
    );
  }
}
