import { config } from "dotenv";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

config();

const ENV = process.env;
const firebaseApp = initializeApp({
  apiKey: ENV.FIREBASE_API_KEY,
  projectId: ENV.FIREBASE_PROJECT_ID,
  storageBucket: ENV.FIREBASE_STORAGE,
  appId: ENV.FIREBASE_API_ID,
});
export const storage = getStorage(firebaseApp);
