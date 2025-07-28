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
const expressLayouts = require("express-ejs-layouts")

/* ***********************
 * View Engine Setup
 *************************/
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))
app.use(expressLayouts)
app.set("layout", "./layouts/layout")

/* ***********************
 * Static Route
 *************************/
app.use(express.static(path.join(__dirname, "public")))

/* ***********************
 * Routes
 *************************/
const staticRoute = require("./routes/static")
app.use("/", staticRoute)

// Add inventory route
const inventoryRoute = require("./routes/inventoryRoute")
app.use("/inventory", inventoryRoute)

// Optional: error route to trigger 500
const errorRoute = require("./routes/errorRoute")
app.use("/", errorRoute)

/* ***********************
 * Error Handling
 *************************/
// Handle 404 - Page Not Found
app.use((req, res, next) => {
  res.status(404).render("error/404", { title: "404 Error" });
});

// Handle 500 - Server Errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).render("error/500", { title: "500 Error" });
});

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
