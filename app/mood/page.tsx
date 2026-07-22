"use client";

import { useState, useEffect } from "react";

export default function MoodPage() {

  const [mood, setMood] = useState("");
  const [note, setNote] = useState("");
  const [history, setHistory] = useState<string[]>([]);


  useEffect(() => {

    const saved = localStorage.getItem("moodHistory");

    if(saved){
      setHistory(JSON.parse(saved));
    }

  }, []);



  const saveMood = () => {

    if(!mood) return;


    const today = new Date().toDateString();


    const newEntry =
    `${today} - ${mood} - ${note}`;


    const updated = [
      ...history,
      newEntry
    ];


    setHistory(updated);


    localStorage.setItem(
      "moodHistory",
      JSON.stringify(updated)
    );


    setNote("");

  };



  const deleteHistory = () => {

    setHistory([]);

    localStorage.removeItem(
      "moodHistory"
    );

  };



  const moods = [

    "😊 Happy / خوش",

    "😢 Sad / اداس",

    "😣 Stressed / پریشان",

    "😴 Tired / تھکی ہوئی",

    "😍 Excited / خوشگوار",

    "😐 Normal / نارمل"

  ];



  return (

<main className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-rose-50 p-8">


<div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8">


<h1 className="text-5xl font-bold text-center text-purple-600">

😊 Mood Tracker 🌸

</h1>


<p className="text-center mt-4 text-gray-600">

Track your emotions and understand yourself.

<br/>

اپنے جذبات کو سمجھیں اور اپنی کیفیت ریکارڈ کریں۔

</p>





<h2 className="text-2xl font-bold mt-8 text-pink-600">

How are you feeling today?

<br/>

آج آپ کیسا محسوس کر رہی ہیں؟

</h2>




<div className="grid md:grid-cols-3 gap-4 mt-5">


{

moods.map((m)=>(

<button

key={m}

onClick={()=>setMood(m)}

className="bg-pink-100 hover:bg-pink-300 p-4 rounded-xl text-lg"

>

{m}

</button>


))

}


</div>






<div className="mt-8">


<h2 className="font-bold text-xl">

📝 Write your thoughts / اپنے خیالات لکھیں

</h2>


<textarea

value={note}

onChange={(e)=>setNote(e.target.value)}

placeholder="Write something about your day..."

className="w-full mt-3 border-2 border-purple-200 rounded-xl p-4 h-32"

/>


</div>







<button

onClick={saveMood}

className="w-full mt-6 bg-purple-600 text-white py-4 rounded-xl text-lg"

>

💖 Save My Mood / محفوظ کریں

</button>







<div className="mt-10 bg-purple-50 p-5 rounded-xl">


<h2 className="text-2xl font-bold text-purple-600">

📊 Mood History / پچھلا ریکارڈ

</h2>


{

history.length===0 ?


<p className="mt-3">

No records yet.

ابھی کوئی ریکارڈ نہیں

</p>


:

<ul className="mt-4 space-y-3">


{

history.map((item,index)=>(


<li

key={index}

className="bg-white p-4 rounded-xl shadow"

>

🌸 {item}

</li>


))


}


</ul>


}





<button

onClick={deleteHistory}

className="mt-5 bg-red-500 text-white px-5 py-2 rounded-xl"

>

🗑 Delete History

</button>



</div>








<div className="mt-10 bg-green-50 p-5 rounded-xl">


<h2 className="text-2xl font-bold text-green-600">

🌿 Self Care Reminder / خود کی دیکھ بھال

</h2>


<ul className="mt-3 space-y-2">

<li>💧 Drink water / پانی پئیں</li>

<li>🌸 Take some rest / آرام کریں</li>

<li>📖 Read something positive / مثبت چیز پڑھیں</li>

<li>🧘 Practice relaxation / سکون کی مشق کریں</li>

</ul>


</div>



</div>


</main>

  );
}