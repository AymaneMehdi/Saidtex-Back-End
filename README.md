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
Saidtex-Back-End/
├── controllers/        
│   ├── loginController.js
│   └── partnerController.js
│
├── middlewares/        
│   ├── auth.js
│   └── middleware.js
│
├── models/             
│   ├── partner.js
│   └── user.js
│
├── routes/             
│   ├── loginRoutes.js
│   └── partnerRoutes.js
│       
├── app.js
├── SECURITY.md
├── LICENSE             
├── package.json
├── package-lock.json        
├── vercel.json        
└── .gitignore
```

---

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AymaneMehdi/Saidtex-Back-End.git
   cd Saidtex-Back-End
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
   JWT_SECRET=your_secret_code_here
   JWT_EXPIRES_IN=2h
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

## Deployment

The easiest way to deploy your app is using [Vercel Platform](https://vercel.com) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

---

## Security

Please review our [Security Policy](SECURITY.md) for information about reporting vulnerabilities.

## License

This project is licensed under the [MIT License](LICENSE).

---

**Copyright © Aymane Mehdi**
