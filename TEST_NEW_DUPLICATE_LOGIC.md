# 🧪 Testing the New Duplicate Logic

## 🎯 Quick Test Plan

### Setup:
1. Stop dev server (Ctrl+C)
2. Clear browser cache (Ctrl+Shift+R or use Incognito)
3. Restart: `npm run dev`
4. Open: `http://localhost:3652`
5. Open Console (F12)

---

## Test 1: First Registration (Should Work ✅)

**Fill form:**
- Name: `John Doe`
- Phone: `1234567890`
- Email: `john@example.com`

**Click:** "GET STARTED NOW"

**Expected:**
- ✅ Console: "No duplicate found"
- ✅ Console: "Successfully saved to Supabase"
- ✅ Success message appears
- ✅ Check Supabase: 1 entry

---

## Test 2: Exact Duplicate (Should Block ❌)

**Fill form with EXACT same data:**
- Name: `John Doe` (same)
- Phone: `1234567890` (same)
- Email: `john@example.com` (same)

**Click:** "GET STARTED NOW"

**Expected:**
- ⚠️ Console: "Duplicate entry found! All three fields match"
- ⚠️ Yellow warning box appears
- ❌ NO success message
- ❌ Check Supabase: Still only 1 entry (no duplicate!)

---

## Test 3: Same Email, Different Name (Should Allow ✅)

**Fill form:**
- Name: `Jane Doe` (DIFFERENT)
- Phone: `1234567890` (same)
- Email: `john@example.com` (same)

**Click:** "GET STARTED NOW"

**Expected:**
- ✅ Console: "No duplicate found"
- ✅ Console: "Successfully saved to Supabase"
- ✅ Success message appears
- ✅ Check Supabase: 2 entries now

---

## Test 4: Same Name & Phone, Different Email (Should Allow ✅)

**Fill form:**
- Name: `John Doe` (same)
- Phone: `1234567890` (same)
- Email: `john2@example.com` (DIFFERENT)

**Click:** "GET STARTED NOW"

**Expected:**
- ✅ Console: "No duplicate found"
- ✅ Console: "Successfully saved to Supabase"
- ✅ Success message appears
- ✅ Check Supabase: 3 entries now

---

## Test 5: Same Name & Email, Different Phone (Should Allow ✅)

**Fill form:**
- Name: `John Doe` (same)
- Phone: `9999999999` (DIFFERENT)
- Email: `john@example.com` (same)

**Click:** "GET STARTED NOW"

**Expected:**
- ✅ Console: "No duplicate found"
- ✅ Console: "Successfully saved to Supabase"
- ✅ Success message appears
- ✅ Check Supabase: 4 entries now

---

## Test 6: Warning Clears When Field Changes

**Step 1:** Submit exact duplicate (see warning)
- Name: `John Doe`
- Phone: `1234567890`
- Email: `john@example.com`
- Result: ⚠️ Warning appears

**Step 2:** Change ANY field
- Change name to: `Jane Doe`

**Expected:**
- ✅ Warning disappears immediately

**Step 3:** Submit
- ✅ Should save successfully

---

## 📊 Expected Database State

After all tests, your Supabase table should look like:

```
┌────┬──────────┬──────────────┬──────────────────────┐
│ id │   name   │    phone     │        email         │
├────┼──────────┼──────────────┼──────────────────────┤
│ 1  │ John Doe │ 1234567890   │ john@example.com     │
│ 2  │ Jane Doe │ 1234567890   │ john@example.com     │
│ 3  │ John Doe │ 1234567890   │ john2@example.com    │
│ 4  │ John Doe │ 9999999999   │ john@example.com     │
└────┴──────────┴──────────────┴──────────────────────┘
```

**Notice:**
- Row 1: Original entry
- Row 2: Different name (allowed)
- Row 3: Different email (allowed)
- Row 4: Different phone (allowed)
- NO exact duplicates!

---

## ✅ Success Criteria

You'll know it's working when:

1. ✅ Exact duplicate shows warning
2. ✅ Same email + different name = allowed
3. ✅ Same name + different phone = allowed
4. ✅ Same phone + different email = allowed
5. ✅ Warning clears when any field changes
6. ✅ Console shows correct messages
7. ✅ No exact duplicates in database

---

## 🔍 Console Messages to Look For

### Checking:
```
🔍 Checking for duplicates... {name: "...", phone: "...", email: "...", found: ...}
```

### Duplicate Found:
```
⚠️ Duplicate entry found! All three fields (name, phone, email) match an existing record.
```

### No Duplicate:
```
✅ No duplicate found (all three fields are unique combination), proceeding with save...
✅ Successfully saved to Supabase: [...]
📤 Sending data to webhook...
✅ Webhook triggered successfully
```

---

## 🆘 If Tests Fail

### Clear Everything:
```bash
# Stop server
Ctrl+C

# Clear cache
npm cache clean --force

# Restart
npm run dev
```

### Hard Refresh Browser:
- Windows: `Ctrl + Shift + R`
- Mac: `Cmd + Shift + R`
- Or use Incognito window

### Verify Code:
```bash
# Check if new code is in file
grep -n "All three fields" src/App.tsx
```

Should show the line with the new console log.

---

**Ready to test! Follow the tests in order.** 🚀
