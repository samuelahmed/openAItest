import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request) {
  try {
    const { content } = await request.json();

    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: content }],
      model: "gpt-3.5-turbo",
    });

    console.log("Completion Called");
    return new Response(JSON.stringify(completion), { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
