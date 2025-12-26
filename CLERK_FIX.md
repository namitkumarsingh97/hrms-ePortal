# 🔧 Fix Clerk Authentication Error

## The Problem
You're getting: `Clerk: auth() was called but Clerk can't detect usage of clerkMiddleware()`

## Quick Fix (3 Steps)

### Step 1: Check Your Environment Variables

Make sure you have a `.env.local` file in your frontend root with these variables:

```env
# Get these from: https://dashboard.clerk.com
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# URLs
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
```

**Where to get your Clerk keys:**
1. Go to: https://dashboard.clerk.com
2. Select your application (or create one)
3. Click **"API Keys"** in the sidebar
4. Copy both keys to your `.env.local` file

### Step 2: Restart Your Dev Server

This is CRITICAL - middleware changes require a restart:

```bash
# Stop your current dev server (Ctrl+C)
# Then restart:
npm run dev
```

### Step 3: Clear Browser Cache (Optional)

Sometimes Clerk auth state gets cached:
- Open DevTools (F12)
- Right-click the refresh button → "Empty Cache and Hard Reload"
- Or use Incognito/Private mode

---

## If Still Not Working: Update Middleware

Your middleware looks correct, but here's an updated version that works with Clerk v5:

### Option A: Simple Middleware (Recommended)

Replace your `middleware.ts` content with:

```typescript
import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    // Skip Next.js internals and all static files
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
```

### Option B: With Route Protection

If you want to protect specific routes:

```typescript
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)',
  '/api(.*)',
]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
```

---

## Alternative Fix: Use Client-Side Auth

If middleware issues persist, you can use client-side authentication:

Replace `app/dashboard/page.tsx` with:

```typescript
"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import DashboardContent from "@/components/dashboard/DashboardContent";

export default function DashboardPage() {
  const { isLoaded, isSignedIn, user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push("/sign-in");
    }
  }, [isLoaded, isSignedIn, router]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    return null;
  }

  return <DashboardContent />;
}
```

---

## Checklist

✅ 1. `.env.local` file exists with correct Clerk keys  
✅ 2. Clerk keys start with `pk_test_` and `sk_test_`  
✅ 3. Restarted dev server after creating/updating `.env.local`  
✅ 4. `middleware.ts` is in the root (not in `src/` folder)  
✅ 5. Cleared browser cache or using incognito mode  

---

## Still Having Issues?

### Check Clerk Dashboard
1. Go to https://dashboard.clerk.com
2. Make sure your app is created and configured
3. Verify the domain `localhost:3000` is allowed (should be by default)

### Check Console Errors
Open browser DevTools (F12) → Console tab
Look for Clerk-related errors and share them if you need more help

### Verify Package Installation
```bash
npm list @clerk/nextjs
# Should show: @clerk/nextjs@5.0.0 or higher

# If version is old, update:
npm install @clerk/nextjs@latest
```

---

## Working Example

After fixing, your auth flow should be:
1. User not logged in → Redirected to `/sign-in`
2. User logs in with Google → Clerk processes authentication
3. User redirected to `/dashboard` → middleware verifies auth
4. Dashboard page loads successfully

