# Shkolo - School Management System

A comprehensive school management system with Firebase backend for real-time data synchronization across all devices and browsers.

## Features

- ✅ Multi-school support with unique registration codes
- ✅ Role-based access control (Administrator, Teacher, Student)
- ✅ Student, Teacher, and Class management
- ✅ Attendance tracking
- ✅ Grade management with auto-calculation
- ✅ Timetable and marking periods
- ✅ Excel data import
- ✅ Real-time synchronization via Firebase
- ✅ School signing/authentication

## Quick Start

### Prerequisites
- GitHub account (for deployment)
- Firebase project (already set up)
- Vercel account (free tier at vercel.com)

### Deployment to Vercel (5 minutes)

1. **Push to GitHub:**
   ```bash
   cd c:\Users\ivayl\shkolo_website\static
   git init
   git add .
   git commit -m "Initial commit: Shkolo with Firebase"
   git branch -M main
   git remote add origin https://github.com/ivayloongame-lab/shkolo-school-management.git
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Go to https://vercel.com
   - Click "New Project"
   - Import your GitHub repo: `shkolo-school-management`
   - Leave build settings as default (static site)
   - Click "Deploy"
   - Your live URL will be: `https://shkolo-school-management.vercel.app`

3. **Configure Firebase Rules** (Important!)
   - Go to Firebase Console → Realtime Database → Rules
   - Replace with the following (for public access during development):
   ```json
   {
     "rules": {
       ".read": true,
       ".write": true
     }
   }
   ```
   - Click "Publish"

### Access Your Site

Visit: **https://shkolo-school-management.vercel.app** from any browser, device, or country!

## User Accounts

### First Time Setup
1. Open the live URL
2. Click "Access Management System"
3. Setup page will appear
4. Fill in school info and admin credentials
5. You'll get a unique school code to share with teachers/students

### Demo Login (After Setup)
- Use credentials you created in setup.html

### Adding More Admins
1. Login as Administrator
2. Go to School Settings
3. Click "+ Add Administrator"
4. Fill in details and save

## File Structure

```
static/
├── index.html                 # Home page
├── setup.html                # Initial school setup
├── login.html                # Login page
├── register.html             # Registration with school code
├── dashboard.html            # Admin/Role-based dashboard
├── students.html             # Student management
├── teachers.html             # Teacher management
├── classes.html              # Class management
├── attendance.html           # Attendance tracking
├── import.html               # Excel data import
├── school-settings.html      # School admin & signing
├── timetable.html            # Timetable & marking periods
├── teacher-dashboard.html    # Teacher portal
├── teacher-classes.html      # Teacher class view
├── teacher-attendance.html   # Mark attendance
├── teacher-grades.html       # Enter grades
├── student-dashboard.html    # Student portal
├── student-classes.html      # Student enrolled classes
├── student-attendance.html   # Student attendance view
├── student-grades.html       # Student grades view
├── style.css                 # Main stylesheet
├── firebase-db.js            # Firebase initialization & wrapper
├── contact.html              # Contact page
├── package.json              # Dependencies
└── .gitignore               # Git ignore rules
```

## Firebase Database Structure

```
{
  "school": { /* school info */ },
  "setupComplete": true/false,
  "schoolCode": "ABC123XY",
  "registeredUsers": [ /* array of user objects */ ],
  "timetables": { /* timetables per class */ },
  "markingPeriods": [ /* marking periods */ ],
  "studentsData": [ /* students */ ],
  "teachersData": [ /* teachers */ ],
  "classesData": [ /* classes */ ]
}
```

## Common Issues & Solutions

### Issue: Data not syncing across browsers
- **Solution**: Make sure you're using the deployed Vercel URL, not localhost
- Firebase requires HTTPS for production

### Issue: "Permission denied" errors
- **Solution**: Check Firebase Rules are set correctly (see above)

### Issue: Setup page redirects to login
- **Solution**: Setup hasn't been completed yet. Go to `/setup.html` first

## Development (Local Testing)

To test locally before deploying:

```bash
# Start a local server
npx serve

# Open http://localhost:3000
```

## Future Enhancements

- [ ] User authentication with Firebase Auth
- [ ] Encrypted passwords
- [ ] Backup/restore functionality
- [ ] PDF report generation
- [ ] Email notifications
- [ ] Mobile app
- [ ] Video conferencing integration

## Support

For issues or questions, create a GitHub issue at:
https://github.com/ivayloongame-lab/shkolo-school-management/issues

## License

MIT License - feel free to use and modify!

---

**Live URL**: https://shkolo-school-management.vercel.app  
**GitHub Repo**: https://github.com/ivayloongame-lab/shkolo-school-management

Last Updated: November 15, 2025
