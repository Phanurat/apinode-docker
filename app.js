const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3001;

app.use(express.json());

// สร้างการเชื่อมต่อฐานข้อมูล
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// เชื่อมต่อฐานข้อมูล
db.connect((err) => {
  if (err) throw err;
  console.log('Connected to database');
});

// สร้าง endpoint ตัวอย่าง
app.get('/api/data', (req, res) => {
  db.query('SELECT * FROM your_table', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// เริ่ม server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
