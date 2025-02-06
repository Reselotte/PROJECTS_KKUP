const express = require("express");
const router = express.Router();
const db = require("../config/db");  // ✅ Import Database Connection

// ✅ Router GET (Main Pages)
router.get("/", (req, res) => res.render("home", { email: req.cookies.email || null }));
router.get("/activity", (req, res) => res.render("activity", { email: req.cookies.email || null }));
router.get("/about", (req, res) => res.render("about", { email: req.cookies.email || null }));
router.get("/contact", (req, res) => res.render("contact", { email: req.cookies.email || null }));
router.get("/login", (req, res) => res.render("login", { email: req.cookies.email || null }));
router.get("/signin", (req, res) => res.render("signin", { email: req.cookies.email || null }));

// ✅ Route "/useractive"
router.get("/useractive", (req, res) => {
    const email = req.cookies.email;

    if (!email) {
        return res.redirect("/login");
    }

    db.query(
        `SELECT activities.id, activities.name, activities.description, activities.date, 
                user_activities.joined_at, user_activities.status
         FROM user_activities 
         JOIN activities ON user_activities.activity_id = activities.id 
         WHERE user_activities.email = ? 
         ORDER BY user_activities.joined_at DESC`, 
        [email], 
        (err, results) => {
            if (err) {
                console.error("❌ ดึงข้อมูลกิจกรรมล้มเหลว:", err);
                return res.status(500).send("❌ ไม่สามารถดึงข้อมูลกิจกรรมได้");
            }

            results.forEach(activity => {
                activity.joined_at = activity.joined_at ? new Date(activity.joined_at) : null;
            });

            console.log("✅ กิจกรรมที่เข้าร่วม:", results);
            res.render("useractive", { email, activities: results });
        }
    );
});

// ✅ Checkbox Update Status
router.post("/update-status", (req, res) => {
    const { activity_id, status } = req.body;
    const email = req.cookies.email || req.body.email;

    if (!activity_id || !email) {
        return res.status(400).send("❌ Missing activity_id or email.");
    }

    const newStatus = status === "on" ? "completed" : "pending";

    db.query(
        "UPDATE user_activities SET status = ? WHERE activity_id = ? AND email = ?",
        [newStatus, activity_id, email],
        (err, result) => {
            if (err) {
                console.error("❌ อัปเดตสถานะล้มเหลว:", err);
                return res.status(500).send("❌ ไม่สามารถอัปเดตสถานะได้");
            }
            console.log(`✅ อัปเดตสำเร็จ: ${activity_id} -> ${newStatus}`);
            res.redirect("/useractive");
        }
    );
});

//health
router.get("/health", (req, res) => {
    db.query("SELECT * FROM health_blog ORDER BY published_date DESC", (err, results) => {
      if (err) {
        console.error("❌ ดึงข้อมูลบทความสุขภาพล้มเหลว:", err);
        return res.status(500).send("❌ ไม่สามารถดึงข้อมูลบทความได้");
      }
  
      console.log("✅ บทความสุขภาพที่ดึงมา:", results);
      
      // ✅ ส่ง blogs ไปยัง `health.ejs`
      res.render("health", { email: req.cookies.email || null, blogs: results });
    });
  });
  
  
module.exports = router;
