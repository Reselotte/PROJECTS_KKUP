const express = require("express");
const db = require("../config/db");
const router = express.Router();
const mysql = require("mysql2");
const cookieParser = require("cookie-parser");

// ✅ GET: ดึงข้อมูลกิจกรรมทั้งหมด (รวมรูปภาพ)
router.get("/", (req, res) => {
  db.query("SELECT * FROM activities ORDER BY date ASC", (err, results) => {
    if (err) {
      return res.status(500).send("❌ ดึงข้อมูลกิจกรรมไม่สำเร็จ");
    }
    res.render("activities", { activities: results });
  });
});


module.exports = router;
