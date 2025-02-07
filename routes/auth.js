const express = require("express");
const db = require("../config/db");
const router = express.Router();


//API 

router.get("/", (req, res) => {
  res.send("✅ Auth API is working!");
});




//sign in
const crypto = require("crypto");

router.post("/signin", (req, res) => {
  console.log("Recieved Data:", req.body);
  const { email, password, confirm_password } = req.body;

  if (!email || !password || !confirm_password) {
    return res.status(400).send("❌ โปรดกรอกข้อมูลให้ครบถ้วน");
  }

  if (password !== confirm_password) {
    return res.status(400).send("❌ รหัสผ่านไม่ตรงกัน");
  }

  // MD5
  const hashedPassword = crypto.createHash("md5").update(password).digest("hex");

  db.query("INSERT INTO users (email, password) VALUES (?, ?)", [email, hashedPassword], (err) => {
    if (err) {
      if (err.code === "ER_DUP_ENTRY") {
        return res.status(400).send("❌ Email นี้ถูกใช้ไปแล้ว!");
      }
      return res.status(500).send("❌ ไม่สามารถสมัครสมาชิกได้");
    }

    res.cookie("email", email, { maxAge: 3600000, httpOnly: true });
    res.redirect("/");
  });
});


//login
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send("❌ โปรดกรอกข้อมูลให้ครบถ้วน");
  }

  // check md5
  const hashedPassword = crypto.createHash("md5").update(password).digest("hex");

  db.query("SELECT * FROM users WHERE email = ? AND password = ?", [email, hashedPassword], (err, results) => {
    if (err || results.length === 0) {
      return res.status(401).send("❌ อีเมลหรือรหัสผ่านไม่ถูกต้อง");
    }

    res.cookie("email", email, { maxAge: 3600000, httpOnly: true });
    res.redirect("/");
  });
});



//log out

router.get("/logout", (req, res) => {
  res.clearCookie("email");
  res.redirect("/");
});

module.exports = router;
