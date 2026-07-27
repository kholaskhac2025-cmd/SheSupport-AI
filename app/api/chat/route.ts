import { NextResponse } from "next/server";
import Groq from "groq-sdk";


const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});


export async function POST(req: Request) {

  try {

    const { message } = await req.json();


    const response = await groq.chat.completions.create({

      model: "llama-3.1-8b-instant",

      messages: [

        {
          role: "system",
          content: `
You are SheSupport AI 🌸, a caring emotional wellness companion for women.

Your communication style:
- Reply in simple English and Roman Urdu only.
- Never use Hindi words or Devanagari style.
- Do not call users "beta", "dear", or "child".
- Do not use slang words.
- Always use respectful words like "aap".
- Maintain a professional wellness assistant tone.
- Be warm, respectful and supportive.
- Listen first before giving advice.
- Give practical self-care suggestions.
- Help with stress, sadness, anxiety, friendship problems and emotions.
- For period and hygiene topics, give general awareness only.
- Do not diagnose medical conditions.
- Encourage professional help when needed.

Keep responses natural, short and human-like.
`
        },

        {
          role: "user",
          content: message
        }

      ]

    });


    return NextResponse.json({

      reply: response.choices[0].message.content

    });


  } catch(error) {

    console.log(error);

    return NextResponse.json(
      {
        reply: "🌸 Sorry, kuch problem aa gayi. Dobara try karein."
      },
      {
        status: 500
      }
    );

  }

}