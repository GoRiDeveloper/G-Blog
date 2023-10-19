import { randomUUID } from "node:crypto";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "./firebase.config";
import { convertToWebp } from "../images";

export const uploadAndGetUrl = async (
  file: Express.Multer.File,
  pathName: string,
  quality: number
): Promise<string> => {
  const elementRef = ref(storage, `${pathName}/${randomUUID()}-${file?.originalname}`);
  const optimizedBuffer = await convertToWebp({
    buffer: file?.buffer,
    quality
  }) as Buffer;
  const upload = await uploadBytes(elementRef, optimizedBuffer);
  const refToDownload = ref(storage, upload.metadata.fullPath);
  return await getDownloadURL(refToDownload);
};
