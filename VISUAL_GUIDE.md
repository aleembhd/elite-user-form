# 📸 Visual Step-by-Step Guide

This guide shows you exactly what you'll see on your screen at each step.

---

## 🌐 Step 1: Create Supabase Account

### What to do:
1. Go to: **https://supabase.com**
2. Click **"Start your project"**

### What you'll see:
```
┌─────────────────────────────────────────────┐
│  SUPABASE                                   │
│                                             │
│  Build in a weekend                         │
│  Scale to millions                          │
│                                             │
│  [Start your project]  [Sign In]           │
└─────────────────────────────────────────────┘
```

### Sign up options:
- ✅ Continue with GitHub (recommended)
- ✅ Continue with Email

---

## 🏗️ Step 2: Create New Project

### What to do:
Click **"New Project"** button

### What you'll see:
```
┌─────────────────────────────────────────────┐
│  Create a new project                       │
│                                             │
│  Organization: [Your Organization ▼]       │
│                                             │
│  Name: [elite-gym                    ]     │
│                                             │
│  Database Password:                         │
│  [••••••••••••••••]  [Generate password]   │
│                                             │
│  Region: [East US (North Virginia) ▼]     │
│                                             │
│  Pricing Plan:                              │
│  ○ Free  ○ Pro  ○ Team  ○ Enterprise       │
│                                             │
│  [Create new project]                       │
└─────────────────────────────────────────────┘
```

### Important:
- ⚠️ **SAVE YOUR DATABASE PASSWORD!**
- Choose region closest to your users
- Select **"Free"** plan

---

## 🔑 Step 3: Get API Keys

### What to do:
1. Click **⚙️ Settings** (bottom left)
2. Click **"API"**

### What you'll see:
```
┌─────────────────────────────────────────────┐
│  Settings > API                             │
│                                             │
│  Configuration                              │
│                                             │
│  Project URL                                │
│  https://abcdefghijklmnop.supabase.co      │
│  [📋 Copy]                                  │
│                                             │
│  Project API keys                           │
│                                             │
│  anon public                                │
│  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...   │
│  [📋 Copy]                                  │
│                                             │
│  service_role secret                        │
│  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...   │
│  [📋 Copy]  ⚠️ Never use in frontend!      │
└─────────────────────────────────────────────┘
```

### Copy these two:
1. ✅ **Project URL**
2. ✅ **anon public** key

---

## 🗄️ Step 4: Create Database Table

### What to do:
1. Click **📊 Table Editor** (left sidebar)
2. Click **"Create a new table"**

### What you'll see:
```
┌─────────────────────────────────────────────┐
│  Create a new table                         │
│                                             │
│  Name: [registrations              ]       │
│                                             │
│  Description: [Gym member registrations]   │
│                                             │
│  ☐ Enable Row Level Security (RLS)         │
│     ⚠️ UNCHECK THIS FOR NOW                │
│                                             │
│  Columns:                                   │
│  ┌──────────────────────────────────────┐  │
│  │ id          uuid      [auto]         │  │
│  │ created_at  timestamp [auto]         │  │
│  └──────────────────────────────────────┘  │
│                                             │
│  [+ Add column]                             │
│                                             │
│  [Cancel]  [Save]                           │
└─────────────────────────────────────────────┘
```

### Add these columns:

**Column 1:**
```
┌─────────────────────────────────────────────┐
│  Add column                                 │
│                                             │
│  Name: [name                       ]       │
│  Type: [text                      ▼]       │
│  Default value: [                  ]       │
│                                             │
│  ☐ Primary                                  │
│  ☐ Unique                                   │
│  ☑ Nullable  ← UNCHECK THIS!               │
│                                             │
│  [Cancel]  [Save]                           │
└─────────────────────────────────────────────┘
```

**Column 2:**
```
Name: phone
Type: text
Nullable: ☐ (unchecked)
```

**Column 3:**
```
Name: email
Type: text
Nullable: ☐ (unchecked)
```

---

## 💻 Step 5: Configure Your Project

### What to do:
Open `.env` file in your project

### Before:
```env
VITE_SUPABASE_URL="YOUR_SUPABASE_PROJECT_URL"
VITE_SUPABASE_ANON_KEY="YOUR_SUPABASE_ANON_KEY"
```

### After (with your actual keys):
```env
VITE_SUPABASE_URL="https://abcdefghijklmnop.supabase.co"
VITE_SUPABASE_ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiY2RlZmdoaWprbG1ub3AiLCJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMzQ1Njc4OSwiZXhwIjoxOTM5MDMyNzg5fQ.abc123xyz..."
```

### Where to find this file:
```
your-project/
├── src/
├── node_modules/
├── .env          ← THIS FILE!
├── .env.example
├── package.json
└── README.md
```

---

## 🧪 Step 6: Test Your App

### What to do:
1. Open terminal
2. Run: `npm run dev`
3. Open: http://localhost:3652

### What you'll see in terminal:
```bash
$ npm run dev

> react-example@0.0.0 dev
> vite --port=3652 --host=0.0.0.0

  VITE v6.2.0  ready in 234 ms

  ➜  Local:   http://localhost:3652/
  ➜  Network: http://192.168.1.100:3652/
```

### What you'll see in browser:
```
┌─────────────────────────────────────────────┐
│  💪 ELITE GYM                               │
│  START YOUR FITNESS JOURNEY                 │
│                                             │
│  Join ELITE GYM                             │
│  Register your details below...             │
│                                             │
│  👤 [Full Name                    ]        │
│                                             │
│  📱 [Phone Number                 ]        │
│                                             │
│  ✉️  [Email Address                ]        │
│                                             │
│  [GET STARTED NOW →]                        │
│                                             │
│  We'll only use this information to send    │
│  you gym updates or diet plans.             │
└─────────────────────────────────────────────┘
```

### Fill in test data:
```
Name:  John Doe
Phone: +1234567890
Email: john@example.com
```

### Click "GET STARTED NOW"

### Success screen:
```
┌─────────────────────────────────────────────┐
│                                             │
│              ✅                             │
│                                             │
│     REGISTRATION COMPLETE                   │
│                                             │
│  Welcome to the family. Check your inbox    │
│  for updates on the latest diet plans       │
│  and gym news.                              │
│                                             │
│  [Back to form]                             │
│                                             │
└─────────────────────────────────────────────┘
```

---

## ✅ Step 7: Verify in Supabase

### What to do:
1. Go back to Supabase Dashboard
2. Click **📊 Table Editor**
3. Click **"registrations"** table

### What you'll see:
```
┌─────────────────────────────────────────────────────────────────────┐
│  registrations                                          [+ Insert row]│
│                                                                       │
│  Filters: [All]                                                      │
│                                                                       │
│  ┌────┬──────────┬──────────────┬──────────────────┬──────────────┐ │
│  │ id │   name   │    phone     │      email       │ created_at   │ │
│  ├────┼──────────┼──────────────┼──────────────────┼──────────────┤ │
│  │ 1  │ John Doe │ +1234567890  │ john@example.com │ 2026-05-07...│ │
│  └────┴──────────┴──────────────┴──────────────────┴──────────────┘ │
│                                                                       │
│  Showing 1 of 1 rows                                                 │
└─────────────────────────────────────────────────────────────────────┘
```

### ✅ Success indicators:
- Your test data appears in the table
- `id` is auto-generated
- `created_at` shows current timestamp
- All three fields (name, phone, email) are filled

---

## 🎉 You're Done!

### What you've accomplished:
✅ Created a Supabase account
✅ Created a project
✅ Got your API keys
✅ Created a database table
✅ Configured your app
✅ Tested the integration
✅ Verified data is saving

---

## 🔍 Browser Console Check

### Open browser console (F12) and look for:

**Success message:**
```
✅ Successfully saved to Supabase: 
[{
  id: 1,
  created_at: "2026-05-07T10:30:00.000Z",
  name: "John Doe",
  phone: "+1234567890",
  email: "john@example.com"
}]
```

**If you see errors:**
```
❌ Error saving to Supabase: {message: "..."}
```
→ Check your API keys in `.env` file
→ Make sure dev server was restarted
→ Verify table name is `registrations`

---

## 📱 Mobile View

The form is fully responsive! Test on mobile:

```
┌─────────────────┐
│  💪 ELITE GYM   │
│  START YOUR...  │
│                 │
│  Join ELITE GYM │
│                 │
│  👤 [Name    ]  │
│                 │
│  📱 [Phone   ]  │
│                 │
│  ✉️  [Email   ]  │
│                 │
│  [GET STARTED]  │
│                 │
└─────────────────┘
```

---

## 🎯 Quick Reference

| What | Where |
|------|-------|
| **View data** | Supabase > Table Editor > registrations |
| **Get API keys** | Supabase > Settings > API |
| **Edit table** | Supabase > Table Editor > registrations > Edit |
| **Export data** | Supabase > Table Editor > Export button |
| **View logs** | Supabase > Logs |
| **Check usage** | Supabase > Settings > Usage |

---

## 🆘 Common Issues (Visual)

### Issue: Can't find .env file

**Solution:** Enable hidden files in your editor

**VS Code:**
```
File > Preferences > Settings
Search: "files.exclude"
Remove ".env" from the list
```

### Issue: Keys not working

**Check this:**
```env
❌ WRONG:
VITE_SUPABASE_URL=https://xxx.supabase.co
(missing quotes)

✅ CORRECT:
VITE_SUPABASE_URL="https://xxx.supabase.co"
(with quotes)
```

### Issue: Table not found

**Check spelling:**
```
❌ WRONG: Registration, registration, Registrations
✅ CORRECT: registrations (lowercase, plural)
```

---

**Need more help?** Check the other guide files! 📚
