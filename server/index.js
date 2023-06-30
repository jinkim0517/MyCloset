import express from "express"
import mysql from "mysql2"
import cors from "cors"
import multer from "multer";

const app = express()
app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"kimj0517",
    database:"clothes"
})

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "../client/public/upload")
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname)
    },
})
  
const upload = multer({ storage });


app.get("/clothes", (req, res) => {
    const q = "SELECT * FROM clothes"
    db.query(q, (err, data) => {
        if (err) {
            console.log(err)
            return res.json(err)
        }
        return res.json(data)
    })
})

app.post("/clothes", (req, res) => {
    const q = "INSERT INTO clothes(`name`, `desc`, `type`, `img`, `wears`) VALUES (?)"
  
    const values = [
      req.body.name,
      req.body.desc,
      req.body.type,
      req.body.img,
      req.body.wears
    ];
  
    db.query(q, [values], (err, data) => {
      if (err) return res.send(err)
      return res.json(data)
    });
  }
)

app.post("/server/upload", upload.single("file"), function (req, res) {
    const file = req.file;
    res.status(200).json(file.filename);
});

app.listen(8800, () => {
    console.log("Connected to the backend!")
})