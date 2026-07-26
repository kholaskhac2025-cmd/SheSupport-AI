"use client";

import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  const [user, setUser] = useState<any>(null);


  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();

  }, []);



  const logout = async () => {

    await signOut(auth);

    router.push("/login");

  };



  return (

    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-pink-50 p-8">


      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8">


        <h1 className="text-5xl font-bold text-center text-pink-600">
          🌸 SheSupport AI 🌸
        </h1>


        <p className="text-center mt-4 text-gray-600 text-lg">
          Your AI wellness companion for women's health,
          emotional support and self-care 💖
        </p>



        {user ? (

          <div className="mt-8 bg-pink-50 rounded-2xl p-6">

            <h2 className="text-2xl font-bold text-pink-600">
              Welcome Back 🌸
            </h2>


            <p className="mt-3 text-gray-700">
              📧 {user.email}
            </p>


            <button
              onClick={logout}
              className="mt-5 bg-red-500 text-white px-6 py-3 rounded-xl"
            >
              Logout 🚪
            </button>

          </div>


        ) : (


          <div className="flex justify-center gap-4 mt-8">


            <button
              onClick={() => router.push("/signup")}
              className="bg-pink-600 text-white px-8 py-3 rounded-xl"
            >
              Signup 🌸
            </button>


            <button
              onClick={() => router.push("/login")}
              className="border border-pink-600 text-pink-600 px-8 py-3 rounded-xl"
            >
              Login 💖
            </button>


          </div>

        )}





        <div className="grid md:grid-cols-3 gap-5 mt-10">


          <div
            onClick={() => router.push("/chat")}
            className="bg-pink-50 p-5 rounded-2xl text-center cursor-pointer hover:shadow-lg"
          >

            🤖

            <h3 className="font-bold mt-2">
              AI Support Chat
            </h3>

          </div>





          <div
            onClick={() => router.push("/period")}
            className="bg-purple-50 p-5 rounded-2xl text-center cursor-pointer hover:shadow-lg"
          >

            🌸

            <h3 className="font-bold mt-2">
              Period Tracker
            </h3>

          </div>






          <div
            onClick={() => router.push("/hygiene")}
            className="bg-green-50 p-5 rounded-2xl text-center cursor-pointer hover:shadow-lg"
          >

            🌿

            <h3 className="font-bold mt-2">
              Hygiene Tips
            </h3>

          </div>



        </div>




        <div className="mt-10 bg-pink-50 rounded-2xl p-6">


          <h2 className="text-2xl font-bold text-pink-600">
            🌸 About SheSupport AI
          </h2>


          <p className="mt-3 text-gray-700">

            SheSupport AI provides emotional support,
            self-care guidance, period awareness and
            wellbeing resources for women.

          </p>


        </div>



      </div>


    </main>

  );

}