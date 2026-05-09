<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# 🏋️ Elite Gym Registration App

A modern, animated gym registration form built with React, TypeScript, and Supabase. Users can register by providing their name, phone number, and email address. All data is securely stored in Supabase.

## ✨ Features

- 🎨 Beautiful, modern UI with animations (Framer Motion)
- 📱 Fully responsive design
- 💾 Real-time data storage with Supabase
- ✅ Form validation
- 🎉 Success animations
- 🔒 Secure data handling

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- A Supabase account (free)

### 🎯 **NEW TO SUPABASE? START HERE!**

👉 **Read [`START_HERE.md`](START_HERE.md) first!** 👈

It will guide you to the right documentation based on your experience level.

### Installation

1. **Clone and install dependencies:**
   ```bash
   npm install
   ```

2. **Set up Supabase:**
   
   📚 **Complete guides available:**
   - **[START_HERE.md](START_HERE.md)** - Choose your learning path
   - **[QUICK_START.md](QUICK_START.md)** - 5-minute setup (experienced users)
   - **[SUPABASE_SETUP_GUIDE.md](SUPABASE_SETUP_GUIDE.md)** - Complete beginner's guide
   - **[VISUAL_GUIDE.md](VISUAL_GUIDE.md)** - Visual step-by-step with mockups
   - **[SETUP_CHECKLIST.md](SETUP_CHECKLIST.md)** - Track your progress
   - **[HOW_IT_WORKS.md](HOW_IT_WORKS.md)** - Technical explanation

3. **Configure environment variables:**
   - Copy `.env.example` to `.env` (already done!)
   - Add your Supabase credentials to `.env`:
     ```env
     VITE_SUPABASE_URL="your_supabase_project_url"
     VITE_SUPABASE_ANON_KEY="your_supabase_anon_key"
     ```

4. **Run the app:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   ```
   http://localhost:3652
   ```

## 📁 Project Structure

```
├── src/
│   ├── App.tsx              # Main form component
│   ├── main.tsx             # App entry point
│   ├── supabaseClient.ts    # Supabase configuration
│   └── index.css            # Global styles
├── .env                     # Your API keys (DO NOT COMMIT)
├── .env.example             # Template for environment variables
├── QUICK_START.md           # 5-minute setup guide
├── SUPABASE_SETUP_GUIDE.md  # Complete beginner's guide
├── SETUP_CHECKLIST.md       # Step-by-step checklist
└── HOW_IT_WORKS.md          # Technical explanation
```

## 🗄️ Database Schema

The app uses a single Supabase table called `registrations`:

| Column | Type | Description |
|--------|------|-------------|
| `id` | uuid | Auto-generated unique ID |
| `created_at` | timestamp | Auto-generated timestamp |
| `name` | text | User's full name |
| `phone` | text | User's phone number |
| `email` | text | User's email address |

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Database**: Supabase (PostgreSQL)
- **Build Tool**: Vite
- **Icons**: Lucide React

## 📚 Documentation

- **[QUICK_START.md](QUICK_START.md)** - Get up and running in 5 minutes
- **[SUPABASE_SETUP_GUIDE.md](SUPABASE_SETUP_GUIDE.md)** - Complete setup guide for beginners
- **[SETUP_CHECKLIST.md](SETUP_CHECKLIST.md)** - Track your setup progress
- **[HOW_IT_WORKS.md](HOW_IT_WORKS.md)** - Understand the data flow and code

## 🔒 Security Notes

- Never commit your `.env` file (it's in `.gitignore`)
- The `anon` key is safe to use in frontend code
- Consider enabling Row Level Security (RLS) in production
- See the security section in `SUPABASE_SETUP_GUIDE.md`

## 🆘 Troubleshooting

**Form not submitting?**
- Check browser console (F12) for errors
- Verify your API keys in `.env` are correct
- Make sure the Supabase table is named `registrations`
- Disable Row Level Security for testing

**Data not appearing in Supabase?**
- Check if RLS is enabled (disable it temporarily)
- Verify column names match: `name`, `phone`, `email`
- Check Supabase project status

See [`SUPABASE_SETUP_GUIDE.md`](SUPABASE_SETUP_GUIDE.md) for more troubleshooting tips.

## 📊 Viewing Your Data

1. Go to [Supabase Dashboard](https://supabase.com)
2. Open your project
3. Click "Table Editor" 📊
4. Click "registrations" table
5. View all submissions in a spreadsheet-like interface

## 🎯 Next Steps

- Add email notifications when users register
- Create an admin dashboard to manage registrations
- Add more fields (membership type, preferences, etc.)
- Enable Row Level Security for production
- Export data to CSV for analysis

## 📞 Support

- **Supabase Docs**: https://supabase.com/docs
- **Supabase Discord**: https://discord.supabase.com
- **React Docs**: https://react.dev

## 📄 License

This project is open source and available under the Apache 2.0 License.

---

**Built with ❤️ for Elite Gym** 💪
