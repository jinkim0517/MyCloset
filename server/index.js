import express from "express"
import cors from "cors"
import multer from "multer";
import clothesRouter from "./routers/clothes.js";
import setRouter from "./routers/sets.js";
import authRouter from "./routers/auth.js";
import cookieParser from "cookie-parser";

const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser());

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "../client/public/upload")
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname)
    },
});
  
const upload = multer({ storage: storage })

app.post("/upload", upload.single('file'), function (req, res) {
    const file = req.file;
    res.status(200).json(file.filename);
});

app.use("/clothes", clothesRouter);
app.use("/sets", setRouter);
app.use("/auth", authRouter);

app.listen(8800, () => {
    console.log("Connected to the backend!");
});