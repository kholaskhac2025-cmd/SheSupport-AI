"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";


export default function LoginPage() {

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");



  const login = async () => {

    try {

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );


      router.push("/chat");


    } catch (err) {

      setError("Invalid email or password 🌸");

    }

  };



  return (

    <main className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center p-5">


      <div className="bg-white shadow-xl rounded-3xl p-8 w-full max-w-md">


        <h1 className="text-4xl font-bold text-center text-pink-600">
          🌸 Welcome Back
        </h1>


        <p className="text-center text-gray-500 mt-2">
          Login to your SheSupport AI account 💖
        </p>



        <input

          type="email"

          placeholder="Email address"

          value={email}

          onChange={(e)=>setEmail(e.target.value)}

          className="w-full mt-6 border-2 border-pink-300 p-3 rounded-xl focus:outline-none"

        />



        <input

          type="password"

          placeholder="Password"

          value={password}

          onChange={(e)=>setPassword(e.target.value)}

          className="w-full mt-4 border-2 border-pink-300 p-3 rounded-xl focus:outline-none"

        />



        {error && (

          <p className="text-red-500 mt-4 text-center">
            {error}
          </p>

        )}



        <button

          onClick={login}

          className="w-full mt-6 bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-xl"

        >

          Login 💌

        </button>



      </div>


    </main>

  );

}