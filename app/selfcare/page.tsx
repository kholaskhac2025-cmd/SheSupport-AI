export default function SelfCarePage() {

  const tips = [
    {
      emoji: "🩷",
      title: "Personal Hygiene | ذاتی صفائی",
      text: "Take regular showers, wash hands, keep your clothes clean and maintain daily hygiene.",
      urdu: "روزانہ نہانے، ہاتھ دھونے اور صفائی کا خیال رکھیں۔"
    },

    {
      emoji: "🌸",
      title: "Period Hygiene | ماہواری کی صفائی",
      text: "Change sanitary pads every 4-6 hours or whenever needed. Keep yourself comfortable and clean.",
      urdu: "ماہواری کے دوران پیڈ ہر 4 سے 6 گھنٹے بعد تبدیل کریں اور صفائی برقرار رکھیں۔"
    },

    {
      emoji: "💧",
      title: "Hydration | پانی پینا",
      text: "Drink enough water daily to stay energetic and healthy.",
      urdu: "روزانہ مناسب مقدار میں پانی پئیں تاکہ جسم صحت مند رہے۔"
    },

    {
      emoji: "🥗",
      title: "Healthy Diet | صحت مند غذا",
      text: "Eat fruits, vegetables, protein and iron-rich foods.",
      urdu: "پھل، سبزیاں، پروٹین اور آئرن والی غذائیں کھائیں۔"
    },

    {
      emoji: "😴",
      title: "Sleep & Rest | نیند اور آرام",
      text: "Get enough sleep to support your mental and physical health.",
      urdu: "مکمل نیند جسم اور دماغ کو بہتر بناتی ہے۔"
    },

    {
      emoji: "🧘‍♀️",
      title: "Mental Wellness | ذہنی سکون",
      text: "Practice relaxation, deep breathing and positive thinking.",
      urdu: "گہری سانسیں اور مثبت سوچ ذہنی سکون دیتی ہیں۔"
    },

    {
      emoji: "🏃‍♀️",
      title: "Exercise | ورزش",
      text: "Walking and light exercise improve mood and energy.",
      urdu: "ہلکی ورزش موڈ اور صحت بہتر بناتی ہے۔"
    },

    {
      emoji: "🩺",
      title: "Health Awareness | صحت کی آگاہی",
      text: "Seek professional help for unusual pain or health changes.",
      urdu: "غیر معمولی درد یا تبدیلی کی صورت میں ڈاکٹر سے رابطہ کریں۔"
    }
  ];


  return (

    <main className="min-h-screen bg-gradient-to-br from-green-100 via-pink-100 to-purple-100 p-8">

      <div className="max-w-6xl mx-auto">


        <div className="bg-white rounded-3xl shadow-xl p-8 text-center">

          <h1 className="text-5xl font-bold text-green-600">
            🌿 Self Care Tips 🌸
          </h1>

          <p className="mt-4 text-lg text-gray-700">
            Your daily wellness guide for women's health.
          </p>

          <p className="mt-3 text-purple-600">
            خواتین کی صحت اور خود کی دیکھ بھال کے لیے رہنمائی 💖
          </p>

        </div>



        <div className="grid md:grid-cols-2 gap-6 mt-10">


          {tips.map((tip, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-6"
            >

              <h2 className="text-2xl font-bold text-pink-600">
                {tip.emoji} {tip.title}
              </h2>


              <p className="mt-3 text-gray-700">
                {tip.text}
              </p>


              <p className="mt-3 text-purple-600">
                {tip.urdu}
              </p>


            </div>

          ))}


        </div>



        <div className="mt-10 bg-pink-50 rounded-3xl p-8 text-center">

          <h2 className="text-3xl font-bold text-pink-600">
            💕 Take Care of Yourself
          </h2>

          <p className="mt-3 text-gray-700">
            Self-care is a way of showing love and respect to yourself.
          </p>

          <p className="mt-3 text-purple-600">
            اپنی دیکھ بھال کرنا خود سے محبت کا اظہار ہے 🌸
          </p>

        </div>


      </div>

    </main>
  );
}