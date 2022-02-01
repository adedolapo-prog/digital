const express = require("express")
const createError = require("http-errors")
const morgan = require("morgan")
require("dotenv").config()
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan("dev"))

app.get("/", async (req, res, next) => {
  res.send({ message: "Awesome it works 🐻" })
})

//Mongo connection
mongoose
  .connect(process.env.MONGO_URI)
  .then((data) => console.log("Database Connected"))
  .catch((err) => {
    console.log("err", err)
    process.exit(1)
  })

//Api route
app.use("/api", require("./routes"))

app.use((req, res, next) => {
  next(createError.NotFound())
})

app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.send({
    status: err.status || 500,
    message: err.message,
  })
})

const PORT = process.env.PORT || 8000
app.listen(PORT, () =>
  console.log(`Server connected @ http://localhost:${PORT}`)
)
