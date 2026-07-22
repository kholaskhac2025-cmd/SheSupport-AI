import Link from "next/link";

export default function Home() {

  return (

    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-rose-50 p-8">

      <div className="max-w-5xl mx-auto">


        {/* Header */}

        <div className="bg-white rounded-3xl shadow-xl p-10 text-center">

          <div className="text-5xl mb-4">
            🌸 🌷 💕 🌺
          </div>


          <h1 className="text-5xl font-bold text-pink-600">
            SheSupport AI
          </h1>


          <p className="mt-5 text-xl text-gray-700">
            Your AI wellness companion for women's health,
            emotional support, and self-care.
          </p>


          <p className="mt-3 text-lg text-purple-600">
            خواتین کی صحت، جذبات اور خود کی دیکھ بھال کے لیے
            آپ کی ذاتی AI ساتھی 💖
          </p>


          <div className="mt-5 text-4xl">
            🌸 ✨ 🌷 💗 🌺
          </div>


        </div>





        {/* Features */}

        <div className="grid md:grid-cols-2 gap-6 mt-10">



          {/* AI Chat */}

          <Link href="/chat">

            <div className="bg-purple-500 hover:bg-purple-600 text-white rounded-3xl p-8 shadow-lg cursor-pointer transition">


              <h2 className="text-3xl font-bold">
                🤖 AI Support Chat
              </h2>


              <p className="mt-4 text-lg">

                Talk with your AI wellness friend.

                <br/>

                اپنے جذبات اور مسائل کے بارے میں بات کریں۔

              </p>


            </div>

          </Link>








          {/* Mood Tracker */}

          <Link href="/mood">

            <div className="bg-pink-500 hover:bg-pink-600 text-white rounded-3xl p-8 shadow-lg cursor-pointer transition">


              <h2 className="text-3xl font-bold">
                😊 Mood Tracker
              </h2>


              <p className="mt-4 text-lg">

                Track emotions and daily feelings.

                <br/>

                اپنے روزانہ موڈ کو ریکارڈ کریں۔

              </p>


            </div>

          </Link>








          {/* Period Tracker */}

          <Link href="/period">

            <div className="bg-rose-500 hover:bg-rose-600 text-white rounded-3xl p-8 shadow-lg cursor-pointer transition">


              <h2 className="text-3xl font-bold">
                🌸 Period Tracker
              </h2>


              <p className="mt-4 text-lg">

                Monitor your menstrual health.

                <br/>

                اپنی ماہواری اور صحت کو ٹریک کریں۔

              </p>


            </div>

          </Link>








          {/* Self Care */}

          <Link href="/selfcare">

            <div className="bg-green-500 hover:bg-green-600 text-white rounded-3xl p-8 shadow-lg cursor-pointer transition">


              <h2 className="text-3xl font-bold">
                🌿 Self Care Tips
              </h2>


              <p className="mt-4 text-lg">

                Build healthy daily habits.

                <br/>

                اچھی اور مثبت عادات اپنائیں۔

              </p>


            </div>

          </Link>




        </div>








        {/* Owner Section */}

        <div className="mt-10 bg-white rounded-3xl p-8 text-center shadow-xl">


          <h2 className="text-2xl font-bold text-pink-600">

            🌸 SheSupport AI

          </h2>



          <p className="mt-3 text-gray-700 text-lg">

            💖 You are important. Take care of yourself.

          </p>



          <p className="text-purple-600 mt-2">

            آپ قیمتی ہیں، اپنی دیکھ بھال کریں 🌷

          </p>





          <div className="border-t mt-6 pt-5">


            <p className="text-gray-600">

              Built with 💕 by

            </p>



            <h3 className="text-3xl font-bold text-purple-600 mt-2">

              Khola Saqib

            </h3>



            <p className="text-gray-500 mt-2">

              AI Wellness App Creator 🌸

            </p>


          </div>



        </div>






      </div>


    </main>

  );

}