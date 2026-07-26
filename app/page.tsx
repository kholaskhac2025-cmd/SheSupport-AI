"use client";

import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";


export default function Home() {

  const router = useRouter();

  const [user, setUser] = useState<any>(null);



  useEffect(() => {

    const unsubscribe = onAuthStateChanged(
      auth,
      (currentUser) => {
        setUser(currentUser);
      }
    );


    return () => unsubscribe();


  }, []);



  const logout = async () => {

    await signOut(auth);

    router.push("/");


  };



  return (

    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-pink-50 p-6">


      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-8">



        <h1 className="text-5xl font-bold text-center text-pink-600">

          🌸 SheSupport AI 🌸

        </h1>



        <p className="text-center mt-4 text-gray-600 text-lg">

          Your AI wellness companion for women's health,
          emotional support and self-care 💖

        </p>




        {user ? (


          <div className="mt-8 bg-pink-50 rounded-3xl p-6 text-center">


            <h2 className="text-3xl font-bold text-pink-600">

              Welcome back 🌸

            </h2>


            <p className="mt-3 text-gray-700">

              📧 {user.email}

            </p>



            <div className="flex justify-center gap-4 mt-6">


              <button

                onClick={()=>router.push("/chat")}

                className="bg-pink-600 text-white px-8 py-3 rounded-xl"

              >

                Chat Now 🤖

              </button>



              <button

                onClick={logout}

                className="bg-red-500 text-white px-8 py-3 rounded-xl"

              >

                Logout 🚪

              </button>


            </div>


          </div>



        ) : (



          <div className="flex justify-center gap-4 mt-8">


            <button

              onClick={()=>router.push("/signup")}

              className="bg-pink-600 text-white px-8 py-3 rounded-xl"

            >

              Signup 🌸

            </button>



            <button

              onClick={()=>router.push("/login")}

              className="border-2 border-pink-600 text-pink-600 px-8 py-3 rounded-xl"

            >

              Login 💖

            </button>


          </div>



        )}




        <div className="grid md:grid-cols-3 gap-6 mt-12">



          <div className="bg-pink-50 p-6 rounded-3xl text-center">

            <div className="text-4xl">🤖</div>

            <h3 className="font-bold text-xl mt-3">

              AI Support Chat

            </h3>

            <p className="text-gray-600 mt-2">

              Talk about emotions and wellbeing.

            </p>

          </div>




          <div className="bg-purple-50 p-6 rounded-3xl text-center">

            <div className="text-4xl">🌸</div>

            <h3 className="font-bold text-xl mt-3">

              Period Care

            </h3>

            <p className="text-gray-600 mt-2">

              Health awareness and self-care tips.

            </p>

          </div>




          <div className="bg-green-50 p-6 rounded-3xl text-center">

            <div className="text-4xl">🌿</div>

            <h3 className="font-bold text-xl mt-3">

              Self Care

            </h3>

            <p className="text-gray-600 mt-2">

              Build positive daily habits.

            </p>

          </div>



        </div>



      </div>


    </main>

  );

}