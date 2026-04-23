# saidtex Back-End

This is the Back-End API for **saidtex**, a platform to manage partners, and users.  
It is built with **Node.js**, **Express.js**, and **MongoDB**, and provides authentication, partner management, and user handling.

---

## Features

- User authentication with JWT  
- Partner management APIs  
- User management APIs  
- Middleware for authentication & authorization  
- CORS support  
- MongoDB & Mongoose integration  

---

## Project Structure

```
Back-End/
├── controllers/        # Handles business logic (login, partners)
│   ├── loginController.js
│   └── partnerController.js
│
├── middlewares/        # Middleware (auth, validation, etc.)
│   ├── auth.js
│   └── middleware.js
│
├── models/             # Mongoose models (schemas)
│   ├── partner.js
│   └── user.js
│
├── routes/             # API routes
│   ├── loginRoutes.js
│   └── partnerRoutes.js
│       
├── app.js              # Express app configuration
├── package.json        # Dependencies & scripts
├── vercel.json         # Vercel deployment config
└── .gitignore
```

---

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/saidtexofficial/Back-End.git
   cd Back-End
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**  
   Create a `.env` file in the root directory:

   ```env
   port=5000
   url=your_mongodb_connection_string
   ```

---

## Running the Project

### Development
```bash
npm start
```

This will run the Back-End at [http://localhost:5000](http://localhost:5000).

---

## API Endpoints

### Auth
- `POST /login` → User login & token generation  

### Partners
- `GET /partners` → Fetch all partners  
- `POST /partners` → Add a new partner  
- `DELETE /partners/:id` → Remove a partner  

---

## Tech Stack

- **Node.js**  
- **Express.js**  
- **MongoDB + Mongoose**  
- **JWT Authentication**  
- **Vercel** (for deployment)  

---

## License

This project is licensed under the [MIT License](LICENSE).
---
Copyright© Aymane Mehdi
