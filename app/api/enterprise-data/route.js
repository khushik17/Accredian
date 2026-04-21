import { NextResponse } from "next/server";

export async function GET() {
  const payload = {
    partners: ["Reliance", "HCL", "IBM", "L&T", "ADP", "BAYER"],
  };

  return NextResponse.json(payload);
}
