"use client";

export default function SelfCarePage() {

  const tips = [
    "🌸 Take time for yourself",
    "🚶 Go for a short walk",
    "📖 Read something you enjoy",
    "💧 Drink enough water",
    "😴 Get proper sleep",
    "🧘 Practice deep breathing",
    "🎵 Listen to relaxing music",
    "✍️ Write your thoughts in a journal"
  ];


  return (

    <main className="min-h-screen bg-gradient-to-br from-green-100 via-pink-100 to-purple-100 p-8">

      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-8">


        <h1 className="text-5xl font-bold text-center text-green-600">
          🌿 Self Care 🌿
        </h1>


        <p className="text-center mt-4 text-gray-600 text-lg">
          Take care of your mind and body 💖
        </p>


        <div className="mt-8 grid gap-4">

          {tips.map((tip,index)=>(

            <div
              key={index}
              className="bg-green-50 p-4 rounded-xl text-lg"
            >
              {tip}
            </div>

          ))}

        </div>


      </div>

    </main>

  );
}