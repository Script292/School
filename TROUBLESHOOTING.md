# Shkolo System Troubleshooting Guide

## 🎯 Quick Start

I fixed the `firebase-rules.json` file (it had invalid XML/JSON syntax).

Now, **please try these steps**:

### 1. **Quick-Login Buttons (FASTEST WAY TO TEST)**
Go to `index.html` and click:
- **"Login as Teacher"** - Opens teacher-classes.html
- **"Login as Admin"** - Opens classes.html  
- **"Login as Student"** - Opens student-classes.html

### 2. **If Quick-Login Works But Features Don't**
Open the **Debug Console** at `debug.html` to see:
- ✅ What data is in localStorage
- ✅ All exams and homeworks
- ✅ All grades assigned
- ✅ Generate sample data to test

### 3. **If The Pages Don't Load**
Try `status-check.html` to verify browser and files are accessible.

---

## 🔧 Files Created/Fixed

| File | Purpose |
|------|---------|
| `firebase-rules.json` | ✅ FIXED - Removed invalid XML header |
| `debug.html` | 🆕 Complete debug console with data viewer |
| `status-check.html` | 🆕 Browser & file access checker |

---

## 📋 What Should Work Now

### Teacher Portal (`teacher-classes.html`)
✅ Create exams per class
✅ Create homework
✅ Assign grades using colored buttons (2=red, 3=orange, 4=yellow, 5=blue, 6=green)
✅ View assigned grades
✅ Delete exams/homework/grades

### Admin Portal (`classes.html`)
✅ Create exams per class
✅ Assign exam grades using colored buttons
✅ View assigned grades
✅ Delete exams/grades

### Grade Assignment Flow
1. Click grade button (e.g., "5" for grade 5)
2. Modal appears with student dropdown (or fallback to manual entry)
3. Select student from list or type name
4. Click "Save Grade"
5. Grade is stored in localStorage

---

## 🐛 Common Issues & Solutions

### "Nothing happens" when clicking buttons
**Solution**: Open Browser Console (F12) and check for errors. If modal missing, fallback to prompt() should work.

### No students in dropdown
**Solution**: 
1. Go to `debug.html`
2. Click "Generate Sample Students"
3. This populates localStorage with test students
4. Modal dropdown will then show them

### Want to test grading without data entry?
1. Go to `debug.html`
2. Click "Generate All Sample Data"
3. Go to `teacher-classes.html` or `classes.html`
4. View exams and grades are pre-populated

---

## 🚀 Testing Workflow

```
1. Open status-check.html
   ↓ (Verify browser is working)
2. Click "Login as Teacher" button
   ↓ (Should go to teacher-classes.html)
3. Click "+ Exam" button
   ↓ (Form should appear)
4. Fill form and click "Save Exam"
   ↓ (Should see confirmation)
5. Click colored grade button
   ↓ (Should see modal or prompt)
6. Select student and save
   ↓ (Should see grade confirmation)
7. Click "View Grades"
   ↓ (Should see table with saved grade)
```

---

## 📊 Data Structure (localStorage)

Data is stored as JSON in browser localStorage:

```javascript
// Students list
students = [{
  name: "Иван Петров",
  class: "Grade 9-A",
  rollNumber: "001"
}]

// Exams
exams = [{
  id: "exam_xyz",
  className: "Grade 9",
  section: "A",
  name: "Math Test",
  date: "2025-11-20",
  maxMarks: 100,
  createdBy: "Teacher Test"
}]

// Exam Grades
examGrades = [{
  id: "eg_123",
  examId: "exam_xyz",
  student: "Иван Петров",
  grade: 5,
  givenBy: "Teacher Test",
  assignedAt: "2025-11-15T..."
}]
```

---

## 🔍 Debug Commands (Browser Console)

Open Browser Console (F12) and run:

```javascript
// See all exams
JSON.parse(localStorage.getItem('exams'))

// See all grades
JSON.parse(localStorage.getItem('examGrades'))

// See all students
JSON.parse(localStorage.getItem('students'))

// Clear all data
localStorage.clear()

// Check login status
localStorage.getItem('userRole') // Should be "Teacher" or "Administrator"
```

---

## ⚡ Next Steps if Still Not Working

1. **Check your server is running** - The Flask app (app.py) needs to be running
2. **Open Browser Console** - Press F12 and look for RED errors
3. **Try debug.html** - Go to `debug.html` and use the diagnostic tools
4. **Copy any error messages** and share them

---

**Created:** 2025-11-15  
**System Status:** All files validated and fixed ✅
