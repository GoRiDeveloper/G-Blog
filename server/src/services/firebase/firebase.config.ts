import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { firebaseConfig } from "../../config/config";

const firebaseApp = initializeApp(firebaseConfig);
export const storage = getStorage(firebaseApp);
