# HRMS Setup Instructions

## Quick Start Guide

This HRMS application has been fixed and is ready for demo. Follow these steps to get it running.

## Prerequisites

1. **Node.js** (v18 or higher)
2. **MongoDB** (local or cloud like MongoDB Atlas)

## Backend Setup (Port 5000)

### 1. Navigate to backend directory
```bash
cd E:\Projects\HRMS\HRMS\hrms-backend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Create `.env` file
Create a `.env` file in the backend root with:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/hrms
# OR use MongoDB Atlas:
# MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/hrms
```

### 4. Start MongoDB
- **Local MongoDB**: Make sure MongoDB service is running
- **MongoDB Atlas**: Use the connection string in `.env`

### 5. Start backend server
```bash
node server.js
```

You should see: `Server running on port 5000`

## Frontend Setup (Port 3000)

### 1. Navigate to frontend directory
```bash
cd E:\Projects\HRMS\HRMS\agency-hrms-starter
```

### 2. Install dependencies
```bash
npm install
```

### 3. Create `.env.local` file (Optional)
Create `.env.local` in the frontend root:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

If not provided, it defaults to `http://localhost:5000`

### 4. Start frontend server
```bash
npm run dev
```

You should see: `Ready on http://localhost:3000`

## Testing the Application

### Default Login Credentials

The backend uses MongoDB, so you'll need to create a user in the database. You can do this via MongoDB shell or add a script.

**Example user document:**
```json
{
  "employeeId": "EMP0001",
  "name": "Admin User",
  "role": "admin",
  "password": "admin@123"
}
```

### Login Flow

1. Open http://localhost:3000
2. Click "Get Started" or "Sign In"
3. You'll be redirected to `/login`
4. Enter credentials:
   - Employee ID: `EMP0001`
   - Password: `admin@123`
   - Role: `Admin / HR`
5. Click "Login"
6. You'll be redirected to `/dashboard`

## Features

✅ Simple authentication (no Clerk)
✅ Clean Tailwind CSS design
✅ Responsive layout
✅ Dashboard with stats cards
✅ Logout functionality

## Troubleshooting

### "Cannot connect to MongoDB"
- Make sure MongoDB is running
- Check your `MONGO_URI` in backend `.env`
- If using MongoDB Atlas, ensure IP is whitelisted

### "Cannot connect to server" (Frontend error)
- Make sure backend is running on port 5000
- Check `NEXT_PUBLIC_API_URL` in frontend `.env.local`
- Check browser console for CORS errors

### "404 Not Found" on login
- Verify backend route: `POST /api/auth/login`
- Check backend console for errors
- Ensure user exists in MongoDB

### Login page not loading
- Make sure frontend is running: `npm run dev`
- Check if port 3000 is available
- Clear browser cache

## Project Structure

```
agency-hrms-starter/
├── app/
│   ├── login/page.tsx          # Login page
│   ├── dashboard/page.tsx      # Dashboard (protected)
│   ├── page.tsx                # Home page
│   └── layout.tsx              # Root layout
├── components/
│   └── dashboard/
│       └── DashboardContent.tsx
└── package.json

hrms-backend/
├── server.js                   # Express server
├── routes/
│   └── authRoutes.js           # Auth routes
├── controllers/
│   └── authController.js       # Login logic
├── models/
│   └── User.js                 # User model (MongoDB)
└── config/
    └── db.js                   # MongoDB connection
```

## Next Steps for Demo

1. ✅ Backend running on port 5000
2. ✅ Frontend running on port 3000
3. ✅ Create at least one user in MongoDB
4. ✅ Test login flow
5. ✅ Test dashboard access
6. ✅ Verify responsive design on mobile

## Notes

- This is a simplified version for demo purposes
- Authentication uses localStorage (suitable for demo)
- No Clerk or complex auth setup
- Simple, clean UI using Tailwind CSS
- Responsive design for mobile and desktop

