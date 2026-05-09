# 🚀 Complete Supabase Setup Guide for Elite Gym

This guide will walk you through setting up Supabase from scratch and integrating it with your gym registration form.

---

## 📝 Part 1: Create Your Supabase Account

### Step 1: Sign Up for Supabase
1. Open your browser and go to: **https://supabase.com**
2. Click the **"Start your project"** button (top right)
3. Choose your sign-up method:
   - **Option A (Recommended)**: Click "Continue with GitHub"
   - **Option B**: Enter your email and create a password
4. If you used email, check your inbox and verify your email address

---

## 🏗️ Part 2: Create Your First Project

### Step 2: Create a New Project
1. After logging in, you'll see the Supabase dashboard
2. Click the **"New Project"** button
3. Fill in the project details:

   **Organization**: Select your organization (or create one if this is your first time)
   
   **Project Name**: `elite-gym` (or any name you prefer)
   
   **Database Password**: 
   - Click "Generate a password" OR create your own strong password
   - ⚠️ **IMPORTANT**: Copy this password and save it somewhere safe!
   - You'll need this if you ever want to connect directly to the database
   
   **Region**: 
   - Choose the region closest to your users
   - Examples: `East US`, `West Europe`, `Southeast Asia`
   
   **Pricing Plan**: 
   - Select **"Free"** (includes 500MB database, 1GB file storage, 50MB file uploads)

4. Click **"Create new project"**
5. ⏳ Wait 2-3 minutes while Supabase sets up your project

---

## 🔑 Part 3: Get Your API Keys

### Step 3: Find Your API Credentials
1. Once your project is ready, look at the left sidebar
2. Click on the **⚙️ Settings** icon (gear icon at the bottom)
3. In the Settings menu, click **"API"**
4. You'll see a page with important information:

   **Project URL** (looks like this):
   ```
   https://abcdefghijklmnop.supabase.co
   ```
   
   **API Keys** section shows two keys:
   - `anon` `public` - This is your **public key** (safe to use in frontend)
   - `service_role` `secret` - ⚠️ **Never use this in frontend!** (only for backend)

5. **Copy these two values:**
   - Copy the **Project URL**
   - Copy the **anon public** key (click the copy icon)

---

## 🗄️ Part 4: Create Your Database Table

### Step 4: Set Up the Registrations Table
1. Click on **📊 Table Editor** in the left sidebar
2. Click **"Create a new table"** button
3. Configure your table:

   **Name**: `registrations`
   
   **Description**: `Gym member registrations`
   
   **Enable Row Level Security (RLS)**: ❌ **UNCHECK THIS** for now
   - (We'll enable security later once everything works)

4. **Add Custom Columns** (Supabase auto-creates `id` and `created_at`):

   Click **"Add column"** and add these three columns:

   **Column 1 - Name:**
   - Name: `name`
   - Type: `text`
   - Default value: (leave empty)
   - Primary: ❌ No
   - Unique: ❌ No
   - Nullable: ❌ **UNCHECK** (make it required)
   
   **Column 2 - Phone:**
   - Name: `phone`
   - Type: `text`
   - Default value: (leave empty)
   - Primary: ❌ No
   - Unique: ❌ No
   - Nullable: ❌ **UNCHECK** (make it required)
   
   **Column 3 - Email:**
   - Name: `email`
   - Type: `text`
   - Default value: (leave empty)
   - Primary: ❌ No
   - Unique: ❌ No
   - Nullable: ❌ **UNCHECK** (make it required)

5. Click **"Save"** to create the table
6. Your table is now ready! 🎉

---

## 💻 Part 5: Configure Your Project

### Step 5: Add Your API Keys to the Project

1. **Open your project folder** in VS Code (or your code editor)

2. **Find the `.env` file** in the root of your project
   - If you don't see it, make sure "Show hidden files" is enabled

3. **Open the `.env` file** and you'll see:
   ```env
   VITE_SUPABASE_URL="YOUR_SUPABASE_PROJECT_URL"
   VITE_SUPABASE_ANON_KEY="YOUR_SUPABASE_ANON_KEY"
   ```

4. **Replace the placeholder values** with your actual keys:
   
   **Before:**
   ```env
   VITE_SUPABASE_URL="YOUR_SUPABASE_PROJECT_URL"
   VITE_SUPABASE_ANON_KEY="YOUR_SUPABASE_ANON_KEY"
   ```
   
   **After (example):**
   ```env
   VITE_SUPABASE_URL="https://abcdefghijklmnop.supabase.co"
   VITE_SUPABASE_ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiY2RlZmdoaWprbG1ub3AiLCJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMzQ1Njc4OSwiZXhwIjoxOTM5MDMyNzg5fQ.abc123xyz..."
   ```

5. **Save the file** (Ctrl+S or Cmd+S)

---

## 🧪 Part 6: Test Your Integration

### Step 6: Run Your Application

1. **Open your terminal** in the project folder

2. **Install dependencies** (if you haven't already):
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and go to:
   ```
   http://localhost:3652
   ```

5. **Test the form:**
   - Fill in the Name field: `John Doe`
   - Fill in the Phone field: `+1234567890`
   - Fill in the Email field: `john@example.com`
   - Click **"GET STARTED NOW"**

6. **Check if it worked:**
   - You should see the success message
   - Open your browser console (F12) and look for: `✅ Successfully saved to Supabase`

---

## ✅ Part 7: Verify Data in Supabase

### Step 7: Check Your Database

1. Go back to **Supabase Dashboard**
2. Click **📊 Table Editor** in the left sidebar
3. Click on the **`registrations`** table
4. You should see your test data:
   - Name: John Doe
   - Phone: +1234567890
   - Email: john@example.com
   - Plus auto-generated `id` and `created_at` fields

🎉 **Congratulations!** Your form is now saving data to Supabase!

---

## 📂 What Changed in Your Project?

Here's what was added/modified:

### 1. **New File: `src/supabaseClient.ts`**
   - Creates the Supabase connection
   - Loads your API keys from environment variables
   - Exports the `supabase` client for use in your app

### 2. **Modified: `src/App.tsx`**
   - Imported the Supabase client
   - Changed `handleSubmit` function to save data to Supabase instead of n8n webhook
   - Now uses `supabase.from('registrations').insert()` to save form data

### 3. **New File: `.env`**
   - Stores your Supabase credentials securely
   - Not committed to Git (protected by `.gitignore`)

### 4. **Modified: `package.json`**
   - Added `@supabase/supabase-js` dependency

---

## 🔒 Part 8: Security (Optional but Recommended)

### Enable Row Level Security (RLS)

Once everything is working, you should enable security:

1. Go to **Supabase Dashboard** > **Table Editor**
2. Click on the **`registrations`** table
3. Click the **shield icon** or go to **Authentication** > **Policies**
4. Click **"Enable RLS"** for the `registrations` table
5. Click **"New Policy"**
6. Choose **"Enable insert access for all users"**
7. This allows anyone to INSERT data but not read/update/delete

---

## 🆘 Troubleshooting

### Problem: "Missing Supabase credentials" error
**Solution**: Make sure you've added your keys to the `.env` file and restarted the dev server

### Problem: "Failed to submit form"
**Solution**: 
- Check browser console for specific error
- Verify your API keys are correct
- Make sure the `registrations` table exists
- Disable RLS temporarily to test

### Problem: Data not appearing in Supabase
**Solution**:
- Check if RLS is enabled (disable it for testing)
- Verify table name is exactly `registrations`
- Check column names match: `name`, `phone`, `email`

---

## 📚 Next Steps

Now that your integration is working, you can:

1. **View your data**: Go to Table Editor to see all registrations
2. **Export data**: Click "Export" in Table Editor to download as CSV
3. **Add more fields**: Add columns like `membership_type`, `preferred_time`, etc.
4. **Set up email notifications**: Use Supabase Edge Functions to send emails when someone registers
5. **Create a dashboard**: Build an admin panel to view and manage registrations

---

## 🎓 Learning Resources

- **Supabase Docs**: https://supabase.com/docs
- **JavaScript Client**: https://supabase.com/docs/reference/javascript
- **Video Tutorials**: https://www.youtube.com/c/Supabase

---

## 📞 Need Help?

If you get stuck:
1. Check the browser console for error messages
2. Visit Supabase Discord: https://discord.supabase.com
3. Check Supabase documentation: https://supabase.com/docs

---

**Happy coding! 💪🏋️‍♂️**
