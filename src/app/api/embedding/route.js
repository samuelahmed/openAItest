import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function GET() {

  const input = "The quick brown fox jumped over the lazy dog";

  const embedding = await openai.embeddings.create({
    model: "text-embedding-ada-002",
    input: input,
    encoding_format: "float",
  });

  console.log('Embedding Called');
  return new Response(JSON.stringify({ input, embedding }), { status: 200 });
}

