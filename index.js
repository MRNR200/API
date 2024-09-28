const express = require('express');
const app = express();
const port = 3333;

// Middleware برای خواندن داده‌های JSON از درخواست‌ها
app.use(express.json());

// Middleware برای خواندن داده‌های URL-encoded از درخواست‌ها
app.use(express.urlencoded({ extended: true })); // تنظیم گزینه extended به true

// Endpoint برای درخواست POST
app.post('/', (req, res) => {
    const { name, email, password } = req.body;
    
    // بازگرداندن نام، ایمیل و پسورد در پاسخ
    res.send(`Name: ${name}, Email: ${email}, Password: ${password}`);
});

// Endpoint جدید برای درخواست GET
app.get('/', (req, res) => {
    const { name, email, password } = req.query;

    // بازگرداندن نام، ایمیل و پسورد در پاسخ
    res.send(`Name: ${name}, Email: ${email}, Password: ${password}`);
});

// راه‌اندازی سرور
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
