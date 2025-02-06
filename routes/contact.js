const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.get("/", (req, res) => {
  res.render("contact", { success: req.query.success || false });
});

// ✅ เปลี่ยนจาก `POST /contact` เป็น `POST /` เพราะ server.js ใช้ `app.use("/contact", contactRoutes)`
router.post("/", (req, res) => {
  const { name, email, subject, message } = req.body;

  // 🔍 ตรวจสอบ Email ใน Users ว่ามีอยู่จริงไหม
  db.query("SELECT email FROM users WHERE email = ?", [email], (err, results) => {
    if (err) {
      console.error("❌ ตรวจสอบ Email ล้มเหลว:", err);
      return res.status(500).send("❌ เกิดข้อผิดพลาด");
    }
    if (results.length === 0) {
      return res.status(400).send("❌ Email นี้ไม่มีอยู่ในระบบ");
    }

    // ✅ ถ้ามี Email ใน Users -> บันทึก Contact Message ได้เลย
    db.query(
      "INSERT INTO contact_message (name, email, subject, message) VALUES (?, ?, ?, ?)",
      [name, email, subject, message],
      (err, result) => {
        if (err) {
          console.error("❌ ไม่สามารถส่งข้อความได้:", err);
          return res.status(500).send("❌ ล้มเหลว");
        }
        res.redirect("/contact?success=true"); 
      }
    );
  });
});

module.exports = router;
