import { randomUUID } from "node:crypto";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "./firebase.config";

export const uploadAndGetUrl = async (
  file: Express.Multer.File,
  pathName: string
): Promise<string> => {
  const elementRef = ref(
    storage,
    `${pathName}/${randomUUID()}-${file.originalname}`
  );
  const upload = await uploadBytes(elementRef, file.buffer);
  const refToDownload = ref(storage, upload.metadata.fullPath);
  return await getDownloadURL(refToDownload);
};
