import express from "express"
import cors from "cors"
import multer from "multer";
import router from "./router.js";

const app = express()
app.use(express.json())
app.use(cors())

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

app.use("/clothes", router);

app.listen(8800, () => {
    console.log("Connected to the backend!");
});