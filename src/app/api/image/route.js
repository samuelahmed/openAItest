import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request) {
    
  const { input } = await request.json();

  const image = await openai.images.generate({
    model: "dall-e-2",
    prompt: input,
  });

  console.log("Image Called");
  console.log(image.data);

  return new Response(JSON.stringify({ image }), { status: 200 });
}
