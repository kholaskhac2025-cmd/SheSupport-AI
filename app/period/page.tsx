"use client";

import { useState } from "react";

export default function PeriodPage() {

  const [lastPeriod, setLastPeriod] = useState("");
  const [cycleLength, setCycleLength] = useState(28);
  const [duration, setDuration] = useState(5);
  const [result, setResult] = useState("");

  const [symptoms, setSymptoms] = useState<string[]>([]);
  const [mood, setMood] = useState("");

  const calculateCycle = () => {

    if (!lastPeriod) {
      setResult("⚠️ Please select your last period date / اپنی آخری ماہواری کی تاریخ منتخب کریں");
      return;
    }

    const periodDate = new Date(lastPeriod);

    const nextPeriod = new Date(periodDate);
    nextPeriod.setDate(
      periodDate.getDate() + Number(cycleLength)
    );


    const ovulation = new Date(nextPeriod);
    ovulation.setDate(
      nextPeriod.getDate() - 14
    );


    const fertileStart = new Date(ovulation);
    fertileStart.setDate(
      ovulation.getDate() - 5
    );


    const fertileEnd = new Date(ovulation);
    fertileEnd.setDate(
      ovulation.getDate() + 1
    );


    setResult(`
🌸 Next Period / اگلی ماہواری:
${nextPeriod.toDateString()}

🥚 Ovulation Day / اوولیشن دن:
${ovulation.toDateString()}

🌱 Fertile Window / زرخیز دن:
${fertileStart.toDateString()} 
to
${fertileEnd.toDateString()}

🩷 Cycle Status:
${cycleLength}-Day Cycle
`);
  };


  const symptomList = [
    "Cramps درد",
    "Headache سر درد",
    "Mood Swings موڈ تبدیلی",
    "Back Pain کمر درد",
    "Fatigue تھکن",
    "Acne دانے"
  ];


  return (

    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-rose-50 p-8">

      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8">


        <h1 className="text-5xl font-bold text-center text-pink-600">
          🌸 Period Tracker 🌸
        </h1>


        <p className="text-center mt-4 text-gray-600 text-lg">
          Track your menstrual health easily.
          <br/>
          اپنی ماہواری اور صحت کو آسانی سے ٹریک کریں۔
        </p>



        <div className="mt-8 grid gap-5">


          <div>
            <label className="font-bold">
              📅 Last Period Date / آخری ماہواری کی تاریخ
            </label>

            <input
              type="date"
              value={lastPeriod}
              onChange={(e)=>setLastPeriod(e.target.value)}
              className="w-full mt-2 border-2 border-pink-300 rounded-xl p-3"
            />
          </div>



          <div>

            <label className="font-bold">
              🔄 Cycle Length / سائیکل کے دن
            </label>

            <input
              type="number"
              value={cycleLength}
              onChange={(e)=>setCycleLength(Number(e.target.value))}
              className="w-full mt-2 border-2 border-pink-300 rounded-xl p-3"
            />

          </div>



          <div>

            <label className="font-bold">
              🩸 Period Duration / ماہواری کا دورانیہ
            </label>

            <input
              type="number"
              value={duration}
              onChange={(e)=>setDuration(Number(e.target.value))}
              className="w-full mt-2 border-2 border-pink-300 rounded-xl p-3"
            />

          </div>



        </div>



        <button

          onClick={calculateCycle}

          className="w-full mt-8 bg-pink-600 text-white py-4 rounded-xl text-xl hover:bg-pink-700"

        >
          💖 Calculate My Cycle / میرا سائیکل معلوم کریں

        </button>



        {result && (

          <div className="mt-8 bg-pink-50 border border-pink-300 rounded-2xl p-5 whitespace-pre-line text-gray-700">

            {result}

          </div>

        )}




        <div className="mt-10">

          <h2 className="text-2xl font-bold text-purple-600">
            🌸 Symptoms Tracker / علامات
          </h2>


          <div className="grid md:grid-cols-2 gap-3 mt-4">

          {symptomList.map((item)=>(

            <label
              key={item}
              className="bg-purple-50 p-3 rounded-xl"
            >

            <input

              type="checkbox"

              onChange={(e)=>{

                if(e.target.checked){

                  setSymptoms([...symptoms,item])

                }

                else{

                  setSymptoms(
                    symptoms.filter(
                      (x)=>x!==item
                    )
                  )

                }

              }}

            />

            <span className="ml-2">
              {item}
            </span>

            </label>

          ))}

          </div>

        </div>




        <div className="mt-10">

          <h2 className="text-2xl font-bold text-pink-600">
            😊 Mood / موڈ
          </h2>


          <div className="flex gap-3 mt-4 flex-wrap">

          {
            ["😊 Happy خوش","😐 Normal نارمل","😢 Sad اداس","😣 Irritated چڑچڑا"].map((m)=>(

              <button

              key={m}

              onClick={()=>setMood(m)}

              className="bg-pink-100 px-4 py-3 rounded-xl"

              >

              {m}

              </button>

            ))
          }

          </div>

        </div>




        <div className="mt-10 bg-green-50 rounded-xl p-5">

          <h2 className="text-2xl font-bold text-green-600">
            🌿 Health Tips / صحت کے مشورے
          </h2>

          <ul className="mt-3 list-disc ml-5 space-y-2">

            <li>💧 Drink water / پانی زیادہ پئیں</li>

            <li>🥗 Eat healthy food / اچھی غذا کھائیں</li>

            <li>😴 Take proper rest / مکمل آرام کریں</li>

            <li>🏃 Light exercise / ہلکی ورزش کریں</li>

          </ul>

        </div>


      </div>

    </main>

  );
}