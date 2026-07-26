"use client";

import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function SignupPage() {

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async () => {

    if (!email || !password || !gender) {
      setError("Please fill all fields 🌸");
      return;
    }

    try {

      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      router.push("/chat");

    } catch (error) {

      setError("Account create nahi hua. Dobara try karein.");

    }

  };


  return (

    <main className="min-h-screen bg-pink-50 flex items-center justify-center p-6">

      <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-md">

        <h1 className="text-3xl font-bold text-center text-pink-600">
          🌸 Join SheSupport AI
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Create your wellness account 💖
        </p>


        <input
          className="w-full border p-3 rounded-xl mt-6"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />


        <input
          className="w-full border p-3 rounded-xl mt-4"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />


        <select
          className="w-full border p-3 rounded-xl mt-4"
          value={gender}
          onChange={(e)=>setGender(e.target.value)}
        >

          <option value="">
            Select Gender
          </option>

          <option value="Female">
            Female 🌸
          </option>

          <option value="Male">
            Male
          </option>

          <option value="Other">
            Other
          </option>

        </select>


        {error && (
          <p className="text-red-500 mt-3">
            {error}
          </p>
        )}


        <button
          onClick={handleSignup}
          className="w-full mt-6 bg-pink-600 text-white p-3 rounded-xl"
        >
          Create Account 🌷
        </button>


      </div>

    </main>

  );
}