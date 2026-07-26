"use client";

import { useState, useEffect, useRef } from "react";

export default function ChatPage() {

  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState<
    { sender: "user" | "ai"; text: string }[]
  >([]);

  const [isTyping, setIsTyping] = useState(false);

  const chatEndRef = useRef<HTMLDivElement>(null);


  useEffect(() => {

    chatEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });

  }, [messages, isTyping]);



  const sendMessage = async () => {

    if (!message.trim()) return;


    const userMessage = message;


    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: userMessage,
      },
    ]);


    setMessage("");

    setIsTyping(true);



    try {

      const res = await fetch("/api/chat", {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          message: userMessage,
        }),

      });



      const data = await res.json();


      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: data.reply,
        },
      ]);



    } catch (error) {


      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "Sorry 🌸 kuch problem aa gayi. Dobara try karein.",
        },
      ]);


    }


    setIsTyping(false);

  };



  return (

    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-pink-50 p-5">


      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-6">


        <h1 className="text-4xl md:text-5xl font-bold text-center text-pink-600">
          🌸🤖 SheSupport AI
        </h1>


        <p className="text-center mt-3 text-gray-600">
          Your AI wellness companion for emotional support 💖
        </p>



        <div className="mt-6 border rounded-2xl p-5 bg-pink-50 min-h-[400px] space-y-4">


          {messages.length === 0 && (

            <div className="text-center text-gray-500">

              🌸 Hello, I am SheSupport AI

              <br /><br />

              Aap mujhse baat kar sakti hain:

              <br />
              💖 Stress & emotions

              <br />
              🌸 Anxiety

              <br />
              🌿 Self-care

              <br />
              🌙 Sleep

              <br />
              🩷 Period care


            </div>

          )}



          {messages.map((msg, index) => (

            <div
              key={index}
              className={
                msg.sender === "user"
                  ? "flex justify-end"
                  : "flex justify-start"
              }
            >


              <div
                className={
                  msg.sender === "user"
                    ? "bg-pink-600 text-white px-5 py-3 rounded-3xl max-w-[80%]"
                    : "bg-white border px-5 py-3 rounded-3xl max-w-[80%] shadow text-gray-700"
                }
              >

                {msg.sender === "ai" && "🌸 "}

                {msg.text}

              </div>


            </div>

          ))}




          {isTyping && (

            <div className="flex justify-start">

              <div className="bg-white border px-5 py-3 rounded-3xl shadow text-gray-500">

                🌸 SheSupport AI is thinking...

              </div>

            </div>

          )}



          <div ref={chatEndRef}></div>


        </div>





        <div className="flex gap-3 mt-5">


          <input

            value={message}

            onChange={(e) => setMessage(e.target.value)}

            onKeyDown={(e) => {

              if (e.key === "Enter") {

                sendMessage();

              }

            }}

            placeholder="Type your feelings..."

            className="flex-1 border-2 border-pink-300 p-4 rounded-xl focus:outline-none"

          />



          <button

            onClick={sendMessage}

            className="bg-pink-600 hover:bg-pink-700 text-white px-6 rounded-xl"

          >

            Send 💌

          </button>


        </div>




        <p className="text-center text-gray-500 text-sm mt-6">

          🌸 Your conversations are private.

          <br />

          💖 SheSupport AI encourages wellbeing and self-care.

        </p>



      </div>


    </main>

  );

}