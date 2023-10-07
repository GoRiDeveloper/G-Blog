import multer from "multer";

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    debugger;
    cb(null, "./upload");
  },
  filename: (_req, file, cb) => {
    cb(null, `${Date.now()}.${file.mimetype.split("/")[1]}`);
  },
});
export const upload = multer({ storage });
