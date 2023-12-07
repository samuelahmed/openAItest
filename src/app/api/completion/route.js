import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const runtime = "edge";

function withTimeout(promise, ms) {
  const timeout = new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Request timed out")), ms)
  );
  return Promise.race([promise, timeout]);
}

export async function POST(request) {
  try {
    const { content } = await request.json();

    const completionPromise = await openai.chat.completions.create({
      messages: [{ role: "system", content: content }],
      model: "gpt-3.5-turbo",
    });

    const completion = await withTimeout(completionPromise, 24000);

    console.log("Completion Called");
    return new Response(JSON.stringify(completion), { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
