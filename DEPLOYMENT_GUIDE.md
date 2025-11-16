# Shkolo Deployment Guide

## Step-by-Step Deployment to Vercel

### Step 1: Initialize Git Repository

Open PowerShell in your project folder and run:

```powershell
cd c:\Users\ivayl\shkolo_website\static
git init
git config user.name "Your Name"
git config user.email "your.email@gmail.com"
git add .
git commit -m "Initial commit: Shkolo School Management System with Firebase"
git branch -M main
```

### Step 2: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `shkolo-school-management`
3. Description: "School Management System with Firebase"
4. Choose "Public" (so Vercel can access it)
5. Click "Create repository"

### Step 3: Push Code to GitHub

After creating the GitHub repo, you'll see instructions. Run these in PowerShell:

```powershell
git remote add origin https://github.com/ivayloongame-lab/shkolo-school-management.git
git push -u origin main
```

This will ask for your GitHub credentials. If it fails:
- Generate a Personal Access Token: https://github.com/settings/tokens
- Use token as password when prompted

### Step 4: Deploy to Vercel

1. Go to https://vercel.com
2. Sign in with GitHub (click "Continue with GitHub")
3. Click "New Project"
4. Find and import `shkolo-school-management`
5. Framework Preset: Leave blank (static site)
6. Root Directory: Leave blank
7. Click "Deploy"
8. Wait 2-3 minutes for deployment
9. You'll get a URL like: **https://shkolo-school-management.vercel.app**

### Step 5: Configure Firebase Realtime Database Rules

**IMPORTANT: Do this to allow your app to read/write data**

1. Go to https://console.firebase.google.com
2. Select project: `school-ba050`
3. Go to "Realtime Database"
4. Click "Rules" tab
5. Replace everything with:

```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

6. Click "Publish"

⚠️ **Note**: This rule is public (anyone can read/write). For production, add authentication:

```json
{
  "rules": {
    ".read": "auth != null",
    ".write": "auth != null"
  }
}
```

### Step 6: Test Your Live Site

1. Open: https://shkolo-school-management.vercel.app
2. Click "Access Management System"
3. You should see the Setup page
4. Create a school and admin account
5. Login and verify everything works

### Step 7: Access from Other Browsers/Devices

1. Open the live URL in Chrome, Edge, Safari, etc.
2. Data syncs automatically via Firebase
3. No more browser-specific localStorage issues!

---

## Updating Your Site

Whenever you make changes locally:

```powershell
git add .
git commit -m "Description of changes"
git push
```

Vercel automatically redeploys your site when you push to GitHub!

---

## Troubleshooting

### Issue: "Firebase SDK not loaded"
- **Solution**: Make sure `firebase-db.js` is in the same folder as HTML files

### Issue: "Permission denied" errors in browser console
- **Solution**: Update Firebase Rules (Step 5 above)

### Issue: Changes not showing on live site
- **Solution**: Wait 30 seconds for Vercel to redeploy, then hard-refresh (Ctrl+Shift+R)

### Issue: Can't push to GitHub
- **Solution**: 
  - Make sure you created the GitHub repo first
  - Check you're using the correct repo URL
  - Use Personal Access Token instead of password

---

## Your Live URL

**https://shkolo-school-management.vercel.app**

Share this with teachers and students!

---

## Next Steps

After deployment, you can:
- Add more administrators in School Settings
- Import students/teachers via Excel
- Create timetables and marking periods
- Teachers can mark attendance and enter grades
- Students can view their classes, attendance, and grades

**Everything is now online and accessible from anywhere!** 🎉
