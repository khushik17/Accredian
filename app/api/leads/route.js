import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Lead from "@/models/Lead";

export async function GET() {
  try {
    await connectToDatabase();

    const docs = await Lead.find({}).sort({ createdAt: -1 }).lean();
    const leads = docs.map((doc) => ({
      id: String(doc._id),
      name: doc.name,
      email: doc.email,
      company: doc.company,
      phone: doc.phone || "",
      interest: doc.interest || "",
      message: doc.message || "",
      createdAt: doc.createdAt,
    }));

    return NextResponse.json({ leads, count: leads.length });
  } catch (error) {
    return NextResponse.json(
      { error: error?.message || "Failed to fetch leads." },
      { status: 500 },
    );
  }
}

export async function POST(request) {
  try {
    await connectToDatabase();

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

    const createdLead = await Lead.create({
      name,
      email,
      company,
      phone,
      interest,
      message,
    });

    const lead = {
      id: String(createdLead._id),
      name: createdLead.name,
      email: createdLead.email,
      company: createdLead.company,
      phone: createdLead.phone || "",
      interest: createdLead.interest || "",
      message: createdLead.message || "",
      createdAt: createdLead.createdAt,
    };

    return NextResponse.json({ lead }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: error?.message || "Unexpected server error." },
      { status: 500 },
    );
  }
}
