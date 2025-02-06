const express = require("express");
const router = express.Router();
const db = require("../config/db");


router.get("/:page", (req, res, next) => {
  if(monthMap.hasOwnProperty(req.params.page)) {
    return next();
  }
  res.render(`subRoutes/${req.params.page}`);
});

router.get("/", (req, res) => {
  db.query("SELECT * FROM activities ORDER BY date ASC", (err, results) => {
    if (err) {
      console.error("❌ ดึงข้อมูลกิจกรรมล้มเหลว:", err);
      return res.status(500).send("❌ ดึงข้อมูลกิจกรรมไม่สำเร็จ");
    }

    console.log("✅ Activities Data:", results); // ✅ ตรวจสอบข้อมูลที่ได้จากฐานข้อมูล

    res.render("activities", { activities: results.length ? results : [] });
  });
});


const monthMap = {
  "1Jan":1 , "2Feb": 2, "3March": 3,
  "4April": 4, "5May":5 , "6June": 6,
  "7July": 7, "8August": 8, "9September": 9,
  "10October": 10, "11November": 11, "12December": 12
};

// ✅ Route ดึงกิจกรรมของแต่ละเดือน
router.get("/:month", (req, res) => {
  const month = req.params.month; // ✅ รับค่าจาก URL เช่น `2Feb`

  console.log("✅ Requested month:", month); // ✅ Debugging

  if (!monthMap.hasOwnProperty(month)) {
    return res.status(400).send("❌ Invalid month selected.");
  }

  const monthNumber = monthMap[month]; // ✅ แปลงชื่อเดือนเป็นตัวเลข

  // ✅ ดึงข้อมูลกิจกรรมของเดือนที่เลือก
  db.query("SELECT * FROM activities WHERE MONTH(date) = ?", [monthNumber], (err, results) => {
    if (err) {
      console.error("❌ ดึงข้อมูลกิจกรรมล้มเหลว:", err);
      return res.status(500).send("❌ ดึงข้อมูลกิจกรรมไม่สำเร็จ");
    }

    console.log(`✅ Activities for ${month}:`, results); // ✅ Debugging

    res.render(`subRoutes/${month}`, { activities: results.length ? results : [] });
  });
});



module.exports = router;
