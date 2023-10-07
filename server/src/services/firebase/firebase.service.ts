import { randomUUID } from "node:crypto";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "./firebase.config";
import { UploadedFile } from "express-fileupload";

export const uploadAndGetUrl = async (
  file: UploadedFile,
  pathName: string
): Promise<string> => {
  const elementRef = ref(storage, `${pathName}/${randomUUID()}-${file.name}`);
  const upload = await uploadBytes(elementRef, file.data);
  const refToDownload = ref(storage, upload.metadata.fullPath);
  return await getDownloadURL(refToDownload);
};
