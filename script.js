// document.addEventListener("DOMContentLoaded", function () {
//   const ageInput = document.getElementById("ageInput");
//   const ageSubmit = document.getElementById("ageSubmit");

//   // ✅ เปลี่ยน "Click" เป็น "click" (ต้องเป็นตัวพิมพ์เล็ก)
//   ageSubmit.addEventListener("click", function (event) {
//     event.preventDefault(); // ❌ ป้องกันการทำงานของปุ่มชั่วคราว

//     const email = getCookie("email"); // ✅ ตรวจสอบว่า Login หรือยัง

//     if (!email) {
//       alert("⚠️ กรุณา !เข้าสู่ระบบ! ก่อนกรอกอายุ");
//       window.location.href = "/auth/login"; // 🔄 Redirect ไปหน้า Login
//       return;
//     }

//     // ✅ ถ้าล็อกอินแล้ว ให้โชว์อายุที่กรอก
//     alert(`🎉 อายุของคุณคือ: ${ageInput.value}`);
//   });

//   // ✅ ฟังก์ชันสำหรับดึงค่าจาก Cookie
//   function getCookie(name) {
//     const cookies = document.cookie.split("; ");
//     for (let i = 0; i < cookies.length; i++) {
//       const [key, value] = cookies[i].split("=");
//       if (key === name) return value;
//     }
//     return null;
//   }
// });



