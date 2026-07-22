"use client";

import { useState } from "react";

export default function ChatPage() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");

  const sendMessage = async () => {
    if (!message.trim()) return;

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: message,
        }),
      });

      const data = await res.json();

      setReply(data.reply);
      setMessage("");
    } catch (error) {
      setReply("⚠️ Sorry, something went wrong. Please try again.");
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-pink-50 p-10">

      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-8">

        <h1 className="text-5xl font-bold text-center text-pink-600">
          🌸🤖 SheSupport AI 🌸
        </h1>

        <p className="text-center mt-4 text-gray-700 text-lg">
          Your AI companion for women's emotional wellbeing.
        </p>

        <p className="text-center text-gray-500 mt-2">
          💖 English | 🇵🇰 اردو | 🌍 Simple Support
        </p>

        <div className="mt-8 border rounded-2xl p-6 bg-pink-50 min-h-[180px]">

          {reply || (
            <div className="text-gray-500">
              👋 Welcome to SheSupport AI 🌸<br /><br />

              You can ask about:
              <br />
              💖 Stress
              <br />
              🌸 Anxiety
              <br />
              😊 Mood
              <br />
              🌼 Self-care
              <br />
              🌙 Sleep
              <br />
              🌷 Women's wellbeing
            </div>
          )}

          {reply}
        </div>

        <div className="flex gap-3 mt-6">

          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type in English or Urdu..."
            className="flex-1 border-2 border-pink-300 p-4 rounded-xl focus:outline-none"
          />

          <button
            onClick={sendMessage}
            className="bg-pink-600 hover:bg-pink-700 text-white px-8 rounded-xl"
          >
            Send 💌
          </button>

        </div>

        <div className="mt-8 text-center text-gray-500 text-sm">
          🌸 Your conversations are private.
          <br />
          💖 SheSupport AI is designed to encourage wellbeing and is not a replacement for professional medical or mental health care.
        </div>

      </div>

    </main>
  );
}