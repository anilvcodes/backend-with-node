# Node.js Middleware Project

This is a basic backend project using Node.js and Express.

## 📌 Description

It uses a middleware function to check user age before allowing access to routes.

---

## ⚙️ Installation

```bash
npm install
```

---

## ▶️ Run Server

```bash
node app.js
```

Server runs on:
http://localhost:3000

---

## 🔐 Middleware

The middleware checks if age > 14 using query params.

Example:

```
/ride1?age=18
```

---

## 📡 Routes

* `/ride1`
* `/ride2`
* `/ride3`

All routes require age > 14.

---

## ❌ If Age is Less

Response:

```json
{
  "msg": "sorry your age is not yet"
}
```

---

## 🛠 Tech

* Node.js
* Express.js
