const express = require("express")
const app = express();
const cors = require("cors");
const userRouter = require("./src/routes/user-route");
const port = process.env.PORT || 3000;

require('dotenv').config()
require("./src/db/mongoose")

app.use(cors())
app.use(express.json());

app.use("/users", userRouter)

app.listen(port, () => console.log("server running on port 8000"))