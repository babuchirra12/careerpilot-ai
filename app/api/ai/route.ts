import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const action = body?.action;

  const messages: Record<string, string> = {
    briefing: "Prepare with a concise, role-specific interview briefing that highlights the key strengths, talking points, and technical focus areas relevant to your next opportunity.",
    recommendations: "Review these tailored recommendations: emphasize your leadership impact, quantify project outcomes, and align your experience with the employer\'s core priorities to stand out in the hiring process.",
  };

  return NextResponse.json({ message: messages[action] ?? "AI coach service placeholder: select an action to generate guidance." });
}
