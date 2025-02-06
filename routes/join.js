const express = require("express");
const router = express.Router();
const db = require("../config/db"); // ใช้ database connection

// ✅ Route สำหรับให้ผู้ใช้ Join Activity
router.post("/join-activity", (req, res) => {
    const { email, activity_id } = req.body;

    if (!email || !activity_id) {
        return res.status(400).send("❌ โปรดกรอกข้อมูลให้ครบ");
    }

    // ✅ บันทึกข้อมูลลง database
    db.query("INSERT INTO user_activities (email, activity_id, joined_at) VALUES (?, ?, NOW())",
        [email, activity_id], (err) => {
            if (err) {
                console.error("❌ ไม่สามารถบันทึกข้อมูลได้:", err);
                return res.status(500).send("❌ บันทึกการเข้าร่วมล้มเหลว");
            }

            console.log(`✅ ${email} joined activity ${activity_id}`);
            res.redirect(`/useractive?success=1`); // Redirect กลับไปที่หน้าเดิม
    });
});

module.exports = router;
