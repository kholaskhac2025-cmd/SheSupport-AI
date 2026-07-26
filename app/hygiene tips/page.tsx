"use client";

export default function HygienePage() {

  const tips = [
    {
      icon: "🧼",
      title: "Personal Cleanliness | ذاتی صفائی",
      text:
        "Maintain daily cleanliness by taking regular baths, washing your hands, keeping your nails clean, and wearing fresh clothes. | روزانہ صفائی کا خیال رکھیں، باقاعدگی سے نہائیں، ہاتھ دھوئیں، ناخن صاف رکھیں اور صاف کپڑے پہنیں۔"
    },

    {
      icon: "🦷",
      title: "Oral Hygiene | منہ کی صفائی",
      text:
        "Brush your teeth twice a day, clean your tongue, and maintain good oral health. | دن میں دو بار دانت صاف کریں، زبان کی صفائی کریں اور منہ کی صحت کا خیال رکھیں۔"
    },

    {
      icon: "👐",
      title: "Hand Hygiene | ہاتھوں کی صفائی",
      text:
        "Wash your hands before eating, after using the washroom, and whenever needed to prevent infections. | کھانے سے پہلے، واش روم استعمال کرنے کے بعد اور ضرورت کے وقت ہاتھ ضرور دھوئیں تاکہ بیماریوں سے بچا جا سکے۔"
    },

    {
      icon: "🌸",
      title: "Period Hygiene | ماہواری کی صفائی",
      text:
        "Change pads regularly, maintain cleanliness, wash hands before and after changing pads, and stay comfortable during periods. | پیریڈز کے دوران پیڈز باقاعدگی سے تبدیل کریں، صفائی کا خیال رکھیں، پیڈ تبدیل کرنے سے پہلے اور بعد میں ہاتھ دھوئیں۔"
    },

    {
      icon: "💧",
      title: "Healthy Habits | صحت مند عادات",
      text:
        "Drink enough water, eat healthy food, get proper sleep, and follow a balanced routine. | زیادہ پانی پئیں، صحت مند غذا کھائیں، مکمل نیند لیں اور متوازن روٹین اپنائیں۔"
    },

    {
      icon: "🌿",
      title: "Self Care | اپنا خیال رکھنا",
      text:
        "Take time for yourself, manage stress, relax, and practice activities that improve your wellbeing. | اپنے لیے وقت نکالیں، ذہنی دباؤ کم کریں، آرام کریں اور ایسی سرگرمیاں کریں جو آپ کی صحت بہتر کریں۔"
    },

  ];


  return (

    <main className="min-h-screen bg-gradient-to-br from-green-100 via-pink-100 to-purple-50 p-8">


      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8">


        <h1 className="text-5xl font-bold text-center text-green-600">
          🌿 Hygiene Tips 🌿
        </h1>


        <p className="text-center mt-4 text-gray-600 text-lg">

          Personal hygiene and healthy lifestyle guidance.

          <br />

          ذاتی صفائی اور صحت مند زندگی کے لیے آسان مشورے۔

        </p>




        <div className="mt-10 grid gap-6">


          {tips.map((tip, index) => (

            <div
              key={index}
              className="bg-green-50 rounded-2xl p-6 shadow hover:shadow-lg transition"
            >


              <h2 className="text-2xl font-bold text-green-700">

                {tip.icon} {tip.title}

              </h2>



              <p className="mt-3 text-gray-700 leading-relaxed">

                {tip.text}

              </p>


            </div>

          ))}


        </div>





        <div className="mt-10 bg-pink-50 rounded-2xl p-6 text-center">


          <h2 className="text-xl font-bold text-pink-600">

            🌸 Remember | یاد رکھیں

          </h2>


          <p className="mt-3 text-gray-700">

            Good hygiene improves confidence, health, and wellbeing.

            <br />

            اچھی صفائی صحت، اعتماد اور بہتر زندگی میں مدد دیتی ہے۔

          </p>


        </div>




        <div className="mt-8 bg-purple-50 rounded-2xl p-6">


          <h2 className="text-xl font-bold text-purple-600">

            ⚠️ Important Note | ضروری بات

          </h2>


          <p className="mt-3 text-gray-700">

            Hygiene tips are for general awareness. If you have any serious health concern, consult a healthcare professional.

            <br /><br />

            یہ معلومات عام آگاہی کے لیے ہیں۔ اگر صحت کا کوئی سنجیدہ مسئلہ ہو تو ڈاکٹر سے مشورہ کریں۔

          </p>


        </div>



      </div>


    </main>

  );

}