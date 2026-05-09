# ⚡ Quick Start - Supabase Integration

## 🎯 What You Need to Do (5 Steps)

### 1️⃣ Create Supabase Account
- Go to: https://supabase.com
- Sign up with GitHub or Email
- Verify your email

### 2️⃣ Create Project
- Click "New Project"
- Name: `elite-gym`
- Choose region closest to you
- Select "Free" plan
- Wait 2-3 minutes

### 3️⃣ Get Your Keys
- Go to: Settings ⚙️ > API
- Copy **Project URL** (looks like: `https://xxxxx.supabase.co`)
- Copy **anon public** key (long string starting with `eyJ...`)

### 4️⃣ Create Database Table
- Go to: Table Editor 📊
- Click "Create a new table"
- Name: `registrations`
- **Uncheck** "Enable Row Level Security"
- Add 3 columns:
  - `name` (text, not nullable)
  - `phone` (text, not nullable)
  - `email` (text, not nullable)
- Click "Save"

### 5️⃣ Add Keys to Your Project
- Open the `.env` file in your project
- Replace these lines with your actual keys:
  ```env
  VITE_SUPABASE_URL="paste_your_project_url_here"
  VITE_SUPABASE_ANON_KEY="paste_your_anon_key_here"
  ```
- Save the file
- Restart your dev server: `npm run dev`

## ✅ Test It!
1. Open: http://localhost:3652
2. Fill out the form
3. Click "GET STARTED NOW"
4. Check Supabase Table Editor to see your data!

---

## 📍 Where to Find Things

| What | Where in Supabase Dashboard |
|------|----------------------------|
| API Keys | Settings ⚙️ > API |
| View Data | Table Editor 📊 > registrations |
| Create Tables | Table Editor 📊 > Create new table |
| Database Password | Settings ⚙️ > Database |

---

## 🔧 Files Modified in Your Project

- ✅ `src/supabaseClient.ts` - NEW (Supabase connection)
- ✅ `src/App.tsx` - MODIFIED (now saves to Supabase)
- ✅ `.env` - NEW (your API keys go here)
- ✅ `package.json` - MODIFIED (added Supabase library)

---

## 🆘 Quick Troubleshooting

**Error: "Missing Supabase credentials"**
→ Add your keys to `.env` file and restart server

**Form submits but no data in Supabase**
→ Disable Row Level Security on the table

**Can't find .env file**
→ It's in the root folder (same level as package.json)

---

**Need detailed help?** Read `SUPABASE_SETUP_GUIDE.md` 📖
