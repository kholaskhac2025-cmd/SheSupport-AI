import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD6uA8YdonoIg2H55RCPpx_W-dxno49cBI",
  authDomain: "shesupport-ai.firebaseapp.com",
  projectId: "shesupport-ai",
  storageBucket: "shesupport-ai.firebasestorage.app",
  messagingSenderId: "763994473218",
  appId: "1:763994473218:web:26474b7fe32c0f1209781b"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);