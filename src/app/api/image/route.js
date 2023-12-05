import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request) {
    
  const { input } = await request.json();

  const result = await openai.images.generate({
    model: "dall-e-2",
    prompt: input,
  });

  console.log("Image Called");
  console.log(result.data);

  return new Response(JSON.stringify({ image: result }), { status: 200 });
}
