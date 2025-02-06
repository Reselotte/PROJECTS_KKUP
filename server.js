const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const app = express();
const subRoutes = require("./routes/subRoutes");
const pageRoutes = require("./routes/pages");
const authRoutes = require("./routes/auth");
const contactRoutes = require("./routes/contact");
const db = require("./config/db"); 
const joinRoutes = require("./routes/join"); 

require("dotenv").config(); // ✅ โหลด .env 

const port = 3000;

// ✅ Middleware
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use(cookieParser());

// ✅ กำหนด email ไว้ใช้ในทุกหน้า
app.use((req, res, next) => {
  res.locals.email = req.cookies.email || null;
  next();
});

// ✅ View engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// ✅ Static files (เช่น CSS, JS, รูปภาพ)
app.use(express.static(path.join(__dirname, "public")));

// ✅ Routes
app.use("/subRoutes", subRoutes);
app.use("/", pageRoutes);
app.use("/contact", contactRoutes);
app.use("/auth", authRoutes);
app.use("/", joinRoutes);

// ✅ Start Server
app.listen(port, () => {
  console.log(`✅ Server is running on http://localhost:${port}`);
});
