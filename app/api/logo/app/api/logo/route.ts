
import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

export async function POST(req: Request) {
  const { name } = await req.json();
  const logo = await openai.images.generate({
    model: "gpt-image-1",
    prompt: `Logo minimaliste et moderne pour la marque "${name}", fond noir, style futuriste.`,
    size: "512x512",
  });
  return NextResponse.json({ url: logo.data[0].url });
    }
