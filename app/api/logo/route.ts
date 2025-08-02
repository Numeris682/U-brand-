
import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

export async function POST(req: Request) {
  const { sector, keywords } = await req.json();
  const prompt = `Propose 15 noms créatifs et courts pour une entreprise dans le secteur "${sector}" avec les mots-clés "${keywords}". Donne uniquement les noms en liste simple.`;

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
  });

  const names = completion.choices[0].message.content?.split("\n").filter(Boolean) || [];
  return NextResponse.json({ names });
}
