const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// ใช้เส้นทางของโฟลเดอร์ปัจจุบัน (โปรเจ็กต์ Gyms)
// app.use(express.static(path.resolve(__dirname))); // ชี้ไปที่โฟลเดอร์นี้โดยตรง

// // ตั้งค่าให้เซิร์ฟเวอร์ทำงานที่ localhost:3000
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '/home.html'));  // เรียกใช้ index.html จากโฟลเดอร์เดียวกัน
// });

// app.get('/about', (req, res) => {
//   res.sendFile(path.join(__dirname, '/about.html'));  // เรียกใช้ about.html จากโฟลเดอร์เดียวกัน
// });

// app.get('/contact', (req, res) => {
//   res.sendFile(path.join(__dirname, '/contact.html'));  // เรียกใช้ contact.html จากโฟลเดอร์เดียวกัน
// });

// app.get('/health', (req, res) => {
//   res.sendFile(path.join(__dirname, '/health.html'));  // เรียกใช้ contact.html จากโฟลเดอร์เดียวกัน
// });

// app.get('/activity.html', (req, res) => { 
//   res.sendFile(path.join(__dirname, '/activity.html'));  // เรียกใช้ activity.html จากโฟลเดอร์เดียวกัน
// });

// app.get('/login.html', (req, res) => { 
//   res.sendFile(path.join(__dirname, '/login.html'));  // เรียกใช้ login.html จากโฟลเดอร์เดียวกัน
// });


app.use(express.static(path.join(__dirname))); // static คือการเรียกใช้ไฟล์จากโฟลเดอร์เดียวกัน โดยไม่ต้องใช้ path.join

 app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/home.html`);
 });
