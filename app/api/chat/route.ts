import { NextResponse } from "next/server";


const responses = {

  roman: {

    greeting: [
      "Hey 🌸 acha laga aap yahan hain. Aaj ka din kaisa raha?",
      "Hi 🌷 main yahan hoon aapki baat sunne ke liye. Aap kaisa feel kar rahi hain?",
      "Hello 💙 pehle apna khayal rakhein. Batayein aaj mood kaisa hai?",
    ],


    stress: [
      "Mujhe afsos hai ke aap stress feel kar rahi hain 🌿. Thora deep breath lein aur ek waqt mein ek choti cheez par focus karein. Kya aap batana chahti hain stress kis wajah se hai?",
      "Stress kabhi kabhi bohat heavy lag sakta hai 💙. Thora break lein, pani piyen aur apne aap par narmi karein.",
    ],


    sad: [
      "Mujhe afsos hai ke aap udaas feel kar rahi hain 💙. Aapki feelings important hain. Agar comfortable hain to share karein kya hua?",
      "Mushkil waqt hamesha nahi rehta 🌸. Main aapki baat sunne ke liye yahan hoon.",
    ],


    anxiety: [
      "Anxiety bohat overwhelming lag sakti hai 🌿. Deep breathing try karein aur apne surroundings par focus karein.",
      "Agar thoughts zyada ho rahe hain to thora pause lein 💙. Aap ek step ek waqt mein handle kar sakti hain.",
    ],


    hygiene: [
      "Personal hygiene bohat zaroori hai 🌸. Rozana safai ka khayal rakhein, haath wash karein, nails clean rakhein, oral hygiene maintain karein aur fresh clothes pehnein.",
      "Apni body ka khayal rakhna self-love ka hissa hai 🌿. Choti healthy habits bohat difference la sakti hain.",
    ],


    periods: [
      "Periods ke dino mein apna khayal rakhein 🌸. Pads time par change karein, cleanliness maintain karein, pani zyada piyen aur proper rest lein.",
      "Period cramps uncomfortable ho sakte hain 💙. Warm water bottle, halka stretching aur rest help kar sakta hai. Agar pain bohat zyada ho to doctor se mashwara karein.",
      "Periods ek natural process hain 🌷. Apne body ko listen karein aur healthy routine follow karein.",
    ],


    sleep: [
      "Achhi neend mental health ke liye bohat zaroori hai 🌙. Sone ka routine banayein aur bedtime se pehle relax karein.",
      "Aapka mind aur body rest deserve karta hai 💙. Apne liye waqt nikalein.",
    ],


    selfcare: [
      "Apna khayal rakhna bohat zaroori hai 🌸. Walk, journaling, reading ya koi pasand ka kaam try karein.",
      "Self-care selfish nahi hota 💙. Choti healthy habits aapki wellbeing improve kar sakti hain.",
    ],


    default: [
      "Main aapki baat sunne ke liye yahan hoon 🌸. Aap thora aur share kar sakti hain?",
      "Aapki feelings important hain 💙. Mujhe batayein aap kya feel kar rahi hain.",
    ],

  }

};



let lastReply = "";


function randomReply(array:string[]) {

  let reply;

  do {

    reply = array[Math.floor(Math.random()*array.length)];

  } while(reply === lastReply && array.length > 1);


  lastReply = reply;

  return reply;

}



function detectLanguage(text:string){

  const romanWords = [
    "mujhe",
    "mera",
    "meri",
    "mein",
    "hai",
    "ho",
    "rahi",
    "raha",
    "bohat",
    "acha",
    "udaas",
    "stress",
    "tension"
  ];


  return romanWords.some(word => text.includes(word));

}




export async function POST(req:Request){

  try{


    const {message}=await req.json();


    const text = message.toLowerCase();


    const data = responses.roman;


    let reply=randomReply(data.default);



    if(
      text.includes("hello") ||
      text.includes("hi") ||
      text.includes("hey")
    ){

      reply=randomReply(data.greeting);

    }


    else if(
      text.includes("stress") ||
      text.includes("tension") ||
      text.includes("pressure") ||
      text.includes("exam")
    ){

      reply=randomReply(data.stress);

    }


    else if(
      text.includes("sad") ||
      text.includes("udaas") ||
      text.includes("cry")
    ){

      reply=randomReply(data.sad);

    }


    else if(
      text.includes("anxiety") ||
      text.includes("worried")
    ){

      reply=randomReply(data.anxiety);

    }


    else if(
      text.includes("hygiene") ||
      text.includes("clean") ||
      text.includes("safai")
    ){

      reply=randomReply(data.hygiene);

    }


    else if(
      text.includes("period") ||
      text.includes("pads") ||
      text.includes("cramp")
    ){

      reply=randomReply(data.periods);

    }


    else if(
      text.includes("sleep") ||
      text.includes("neend") ||
      text.includes("tired")
    ){

      reply=randomReply(data.sleep);

    }


    else if(
      text.includes("self care") ||
      text.includes("selfcare") ||
      text.includes("care")
    ){

      reply=randomReply(data.selfcare);

    }



    return NextResponse.json({
      reply
    });


  }catch(error){


    return NextResponse.json(
      {
        reply:"Sorry 🌸 kuch problem aa gayi. Dobara try karein."
      },
      {
        status:500
      }
    );


  }

}