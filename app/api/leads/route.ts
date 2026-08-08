import { NextRequest, NextResponse } from "next/server";

// NOTE: This is a mock/demo backend. It keeps leads in memory for the
// lifetime of the serverless function, which is fine for local `next dev`
// but will NOT persist across requests on Vercel's serverless runtime
// (each invocation can spin up a fresh instance). For a production
// deployment, swap this out for a real datastore (Postgres, Supabase,
// Airtable) or a form service (Formspree, Resend) — see README.
const leads: Record<string, unknown>[] = [];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, teamSize } = body ?? {};

    if (!name || !email || !company || !teamSize) {
      return NextResponse.json(
        { error: "Name, email, company, and team size are required." },
        { status: 400 }
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const lead = {
      ...body,
      id: crypto.randomUUID(),
      submittedAt: new Date().toISOString(),
    };

    leads.push(lead);

    // Simulate a small network delay so the loading state is visible.
    await new Promise((resolve) => setTimeout(resolve, 400));

    return NextResponse.json({ ok: true, lead }, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { error: "Could not process the request." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ count: leads.length, leads });
}