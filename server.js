/******************************************
 * This server.js file is the primary file of the 
 * application. It is used to control the project.
 ******************************************/

/* ***********************
 * Require Statements
 *************************/
const express = require("express")
const env = require("dotenv").config()
const app = express()
const path = require("path")
const expressLayouts = require("express-ejs-layouts") // ✅ 加入 layout 模块

/* ***********************
 * View Engine Setup
 *************************/
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))
app.use(expressLayouts) // ✅ 启用 layout 功能
app.set("layout", "./layouts/layout") // ✅ 指定 layout 文件路径（相对于 views 文件夹）

/* ***********************
 * Static Route
 *************************/
app.use(express.static(path.join(__dirname, "public")))

/* ***********************
 * Routes
 *************************/
const staticRoute = require("./routes/static")
app.use("/", staticRoute)

/* ***********************
 * Local Server Information
 *************************/
const port = process.env.PORT || 3000
const host = process.env.HOST || "localhost"

/* ***********************
 * Start Server
 *************************/
app.listen(port, () => {
  console.log(`Server is running on http://${host}:${port}`)
})
