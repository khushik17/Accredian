import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const leadsFilePath = path.join(process.cwd(), "data", "leads.json");

async function readLeads() {
  try {
    const fileContents = await fs.readFile(leadsFilePath, "utf8");
    const parsed = JSON.parse(fileContents);

    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

async function writeLeads(leads) {
  const directory = path.dirname(leadsFilePath);
  await fs.mkdir(directory, { recursive: true });
  await fs.writeFile(leadsFilePath, JSON.stringify(leads, null, 2), "utf8");
}

export async function GET() {
  const leads = await readLeads();
  return NextResponse.json({ leads, count: leads.length });
}

export async function POST(request) {
  try {
    const body = await request.json();
    const name = String(body?.name || "").trim();
    const email = String(body?.email || "").trim();
    const company = String(body?.company || "").trim();
    const phone = String(body?.phone || "").trim();
    const interest = String(body?.interest || "").trim();
    const message = String(body?.message || "").trim();

    if (!name || !email || !company) {
      return NextResponse.json(
        { error: "Name, email, and company are required." },
        { status: 400 },
      );
    }

    const leads = await readLeads();
    const lead = {
      id: crypto.randomUUID(),
      name,
      email,
      company,
      phone,
      interest,
      message,
      createdAt: new Date().toISOString(),
    };

    leads.unshift(lead);
    await writeLeads(leads);

    return NextResponse.json({ lead }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: error?.message || "Unexpected server error." },
      { status: 500 },
    );
  }
}
