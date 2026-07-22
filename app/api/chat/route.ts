import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const text = message.toLowerCase();

    let reply =
      "I'm here with you 💙 Tell me more about what you are feeling. I'm listening.";

    if (
      text.includes("hello") ||
      text.includes("hi") ||
      text.includes("hey")
    ) {
      reply =
        "Hello 🌸 I'm SheSupport AI, your emotional wellness companion. How are you feeling today?";
    }

    else if (
      text.includes("sad") ||
      text.includes("unhappy") ||
      text.includes("cry")
    ) {
      reply =
        "I'm sorry you are feeling sad 💙. Remember that difficult emotions are temporary. Try being gentle with yourself and share your feelings with someone you trust.";
    }

    else if (
      text.includes("stress") ||
      text.includes("stressed") ||
      text.includes("pressure")
    ) {
      reply =
        "It sounds like you are feeling stressed 🌿. Take a slow breath, pause for a moment, and focus on one small thing you can manage right now.";
    }

    else if (
      text.includes("anxious") ||
      text.includes("anxiety") ||
      text.includes("worried")
    ) {
      reply =
        "Feeling anxious can be overwhelming 💙. Try grounding yourself by noticing your surroundings and taking slow, deep breaths.";
    }

    else if (
      text.includes("lonely") ||
      text.includes("alone")
    ) {
      reply =
        "Feeling lonely can be difficult 🌷. Remember you are not alone. Reaching out to supportive people can help you feel connected.";
    }

    else if (
      text.includes("happy") ||
      text.includes("good") ||
      text.includes("great")
    ) {
      reply =
        "I'm happy to hear that 🌸. Keep appreciating these positive moments and take care of your wellbeing.";
    }

    else if (
      text.includes("sleep") ||
      text.includes("tired")
    ) {
      reply =
        "Rest is important 🌙. Try creating a calm environment and giving your mind some time to relax.";
    }

    else if (text.includes("thank")) {
      reply =
        "You're welcome 💙. I'm always here whenever you want to share your thoughts.";
    }

    return NextResponse.json({
      reply,
    });

  } catch (error) {
    console.error("CHAT ERROR:", error);

    return NextResponse.json(
      {
        reply: "Sorry, something went wrong.",
      },
      { status: 500 }
    );
  }
}