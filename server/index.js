import express from "express"
import mysql from "mysql"

const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"kimj0517",
    database:"clothes"

})

app.get("/", (req, res) => {
    res.json("Hello")
})

app.get("/clothes", (req, res) => {
    re
})

app.listen(8800, () => {
    console.log("Connected to the backend!")
})