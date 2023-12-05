import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function GET() {

const completion = await openai.chat.completions.create({
  messages: [
    { role: "system", content: "You are a helpful assistant. Meow" },
  ],
  model: "gpt-3.5-turbo",
  model: "text-embedding-ada-002",
});


  return new Response(JSON.stringify(completion), { status: 200 });
}

