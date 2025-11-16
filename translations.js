/**
 * Multi-language translations for @School@
 * Supports: English (en) and Bulgarian (bg)
 */

const translations = {
  en: {
    // Navigation
    home: "Home",
    managementSystem: "Management System",
    contact: "Contact",
    logout: "Logout",
    language: "Language",
    bulgarian: "Български",
    english: "English",

  // Index
  welcomeToShkolo: "Welcome to @School@",
    yourLearningDestination: "Your learning destination",
    aboutThisWebsite: "About This Website",
    createdBy: "Created by Ivaylo Terziev",
  comprehensiveSchoolManagement: "Welcome to @School@ - A comprehensive School Management System",
    accessManagementSystem: "Access Management System",
    signSchool: "Sign School",

    // Setup
    initialSetup: "Initial Setup",
    welcomeFirstTime: "Welcome! This is your first time. Please create your first school and admin account.",
    schoolInformation: "School Information",
    schoolName: "School Name",
    enterSchoolName: "Enter school name",
    schoolAddress: "School Address",
    enterSchoolAddress: "Enter school address",
    schoolPhone: "School Phone",
    enterSchoolPhone: "Enter school phone number",
    schoolEmail: "School Email",
    enterSchoolEmail: "Enter school email",
    adminAccount: "Admin Account",
    firstName: "First Name",
    enterFirstName: "Enter first name",
    lastName: "Last Name",
    enterLastName: "Enter last name",
    email: "Email",
    enterEmail: "Enter your email",
    username: "Username",
    chooseAdminUsername: "Choose admin username",
    minimumCharacters: "Minimum",
    characters: "characters",
    password: "Password",
    createStrongPassword: "Create a strong password",
    completeSetup: "Complete Setup",
    setupComplete: "Setup Complete!",
    schoolCreatedSuccessfully: "Your school has been created successfully!",
    shareCodeWithTeachers: "Share this code with teachers and staff to register in your school.",
    schoolCode: "School Code",
    copy: "Copy",
    schoolCodeInfo: "School Code",
    codeAllowsNewUsers: "This code allows new users to register and join your school",
    eachUserWithCode: "Each user with this code will be associated with your school",
    youCanGenerateNewCode: "You can generate a new code anytime (old code will become invalid)",
    yourAdminAccount: "Your Admin Account",
    passwordSavedSecurely: "Password: (saved securely)",
    goToLogin: "Go to Login",

    // Login
    login: "Login",
    enterUsername: "Enter username",
    enterPassword: "Enter password",
    rememberMe: "Remember me",
    forgotPassword: "Forgot password?",
    loginButton: "Login",
    noAccount: "No account?",
    registerHere: "Register here",
    invalidCredentials: "Invalid username or password",

    // Register
    register: "Register",
    registerNewAccount: "Register New Account",
    enterSchoolCode: "Enter school code",
    invalidSchoolCode: "Invalid school code",
    createAccount: "Create Account",
    alreadyHaveAccount: "Already have an account?",
    loginHere: "Login here",

    // Dashboard
    schoolManagementSystem: "School Management System",
    welcomeToPortal: "Welcome to your school administration portal",
    totalStudents: "Total Students",
    viewAll: "View All",
    totalTeachers: "Total Teachers",
    totalClasses: "Total Classes",
    attendanceRate: "Attendance Rate",
    details: "Details",
    quickActions: "Quick Actions",
    addNewStudent: "Add New Student",
    addNewTeacher: "Add New Teacher",
    addNewClass: "Add New Class",
    markAttendance: "Mark Attendance",
    openSetup: "Open Setup",
    recentActivities: "Recent Activities",
    newStudentRegistered: "New student registered:",
    attendanceMarked: "Attendance marked for",
    newTeacherAdded: "New teacher added:",
    newClassCreated: "New class created:",
    hoursAgo: "hours ago",
    daysAgo: "days ago",
    schoolStatistics: "School Statistics",
    genderDistribution: "Gender Distribution",
    classDistribution: "Class Distribution",
    teacherSubjects: "Teacher Subjects",

    // Students Management
    studentsManagement: "Students Management",
    addNewStudentForm: "Add New Student",
    studentId: "Student ID",
    studentClass: "Student Class",
    dateOfBirth: "Date of Birth",
    gender: "Gender",
    male: "Male",
    female: "Female",
    addStudent: "Add Student",
    edit: "Edit",
    delete: "Delete",
    save: "Save",
    cancel: "Cancel",

    // Teachers Management
    teachersManagement: "Teachers Management",
    addNewTeacherForm: "Add New Teacher",
    subject: "Subject",
    qualification: "Qualification",
    experience: "Experience (Years)",
    addTeacher: "Add Teacher",

    // Classes Management
    classesManagement: "Classes Management",
    addNewClassForm: "Add New Class",
    className: "Class Name",
    classTeacher: "Class Teacher",
    capacity: "Capacity",
    schedule: "Schedule",
    addClass: "Add Class",

    // Attendance
    attendanceManagement: "Attendance Management",
    markAttendanceForm: "Mark Attendance",
    selectDate: "Select Date",
    selectClass: "Select Class",
    attendanceRecords: "Attendance Records",
    present: "Present",
    absent: "Absent",
    markButton: "Mark Attendance",

    // School Settings
    schoolSettings: "School Settings",
    manageSchoolInformation: "Manage your school information and registration code",
    editSchoolInfo: "Edit School Info",
    registrationCode: "Registration Code",
    shareCodeMessage: "Share this code with teachers and staff so they can register in your school",
    adminUsers: "Admin Users",
    usersWithAdminAccess: "Users with administrator access in your school",
    addAdministrator: "Add Administrator",
    registeredDate: "Registered Date",
    allRegisteredUsers: "All Registered Users",
    totalUsersRegistered: "Total users registered in your school:",
    role: "Role",
    actions: "Actions",
    remove: "Remove",
    editSchoolInformation: "Edit School Information",
    saveChanges: "Save Changes",
    generateNewCode: "Generate New Code",
    updateSuccessfully: "School information updated!",
    userRemoved: "User removed",
    confirmRemoveUser: "Are you sure you want to remove this user?",
    signedStatus: "Signed",
    notSigned: "Not signed",
    signedBy: "Signed by",

    // Timetable
    timetableMarkingPeriods: "Timetable & Marking Periods",
    definePeriodsForClass: "Define daily periods for each class and configure marking/reporting periods (terms).",
    classTimetable: "Class Timetable",
    selectClass: "Select Class",
    loadTimetable: "Load Timetable",
    addPeriod: "Add Period",
    periodName: "Period Name",
    startTime: "Start Time",
    endTime: "End Time",
    day: "Day",
    monday: "Monday",
    tuesday: "Tuesday",
    wednesday: "Wednesday",
    thursday: "Thursday",
    friday: "Friday",
    saturday: "Saturday",
    periodsFor: "Periods for",
    noPeriodsDefined: "No periods defined yet.",
    saveTimetable: "Save Timetable",
    clearTimetable: "Clear Timetable",
    markingPeriods: "Marking Periods (Terms)",
    name: "Name",
    startDate: "Start Date",
    endDate: "End Date",
    weight: "Weight (%)",
    addMarkingPeriod: "Add Marking Period",
    configuredMarkingPeriods: "Configured Marking Periods",
    noMarkingPeriods: "No marking periods configured.",

    // Teacher Portal
    teacherPortal: "Teacher Portal",
    myClasses: "My Classes",
    myStudents: "My Students",
    todaysAttendance: "Today's Attendance",
    grades: "Grades",
    myGrades: "My Grades",
    attendance: "Attendance",
    myAttendance: "My Attendance",

    // Student Portal
    studentPortal: "Student Portal",
    enrolledClasses: "Enrolled Classes",
    overallGrade: "Overall Grade",
    performance: "Performance",
    viewDetails: "View Details",
    assessmentScores: "Assessment Scores",
    assessmentType: "Assessment Type",
    quiz: "Quiz",
    midTerm: "Mid Term",
    finalExam: "Final Exam",
    project: "Project",
    score: "Score",
    grade: "Grade",

    // Common messages
    areSureLogout: "Are you sure you want to logout?",
    successfullyImported: "Successfully imported",
    items: "items!",
    required: "required",
    allRightsReserved: "All rights reserved!",
    contactUs: "Contact Us",

    // Errors
    pleaseLoginFirst: "Please login first",
    accessDenied: "Access denied",
    onlyAdministrators: "Only administrators can access this page",
    invalidEmail: "Please enter a valid email address",
    passwordAtLeast: "Password must be at least",
    usernameAtLeast: "Username must be at least",
  },

  bg: {
    // Навигация
    home: "Начало",
    managementSystem: "Система за управление",
    contact: "Контакт",
    logout: "Изход",
    language: "Язык",
    bulgarian: "Български",
    english: "English",

    // Начало
  welcomeToShkolo: "Добро пожаловать в @School@",
    yourLearningDestination: "Вашата дестинация за обучение",
    aboutThisWebsite: "За този уебсайт",
    createdBy: "Създано от Ivaylo Terziev",
  comprehensiveSchoolManagement: "Добро пожаловать в @School@ - Комплексна система за управление на училище",
    accessManagementSystem: "Достъп до системата за управление",
    signSchool: "Подпишете училище",

    // Първоначална настройка
    initialSetup: "Първоначална настройка",
    welcomeFirstTime: "Добро пожаловать! Това е първи път. Моля, създайте първото училище и администраторския профил.",
    schoolInformation: "Информация за училище",
    schoolName: "Име на училище",
    enterSchoolName: "Въведете име на училище",
    schoolAddress: "Адрес на училище",
    enterSchoolAddress: "Въведете адрес на училище",
    schoolPhone: "Телефон на училище",
    enterSchoolPhone: "Въведете телефонния номер на училище",
    schoolEmail: "Имейл на училище",
    enterSchoolEmail: "Въведете имейл на училище",
    adminAccount: "Администраторски профил",
    firstName: "Име",
    enterFirstName: "Въведете име",
    lastName: "Фамилия",
    enterLastName: "Въведете фамилия",
    email: "Имейл",
    enterEmail: "Въведете вашия имейл",
    username: "Потребителско име",
    chooseAdminUsername: "Изберете администраторското потребителско име",
    minimumCharacters: "Минимум",
    characters: "символи",
    password: "Пароля",
    createStrongPassword: "Създайте силна пароля",
    completeSetup: "Завършете настройката",
    setupComplete: "Настройката завършена!",
    schoolCreatedSuccessfully: "Вашето училище е създадено успешно!",
    shareCodeWithTeachers: "Споделете този код с учители и персонал, за да се регистрират в вашето училище.",
    schoolCode: "Код на училище",
    copy: "Копиране",
    schoolCodeInfo: "Код на училище",
    codeAllowsNewUsers: "Този код позволява на новите потребители да се регистрират и присъединят към вашето училище",
    eachUserWithCode: "Всеки потребител с този код ще бъде свързан с вашето училище",
    youCanGenerateNewCode: "Можете да генерирате нов код по всяко време (старият код ще стане невалиден)",
    yourAdminAccount: "Вашият администраторски профил",
    passwordSavedSecurely: "Пароля: (запазена безопасно)",
    goToLogin: "Отворете входа",

    // Вход
    login: "Вход",
    enterUsername: "Въведете потребителско име",
    enterPassword: "Въведете пароля",
    rememberMe: "Запомни ме",
    forgotPassword: "Забравихте пароля?",
    loginButton: "Вход",
    noAccount: "Нямате профил?",
    registerHere: "Регистрирайте се тук",
    invalidCredentials: "Невалидно потребителско име или пароля",

    // Регистрация
    register: "Регистрация",
    registerNewAccount: "Регистрирайте нов профил",
    enterSchoolCode: "Въведете код на училище",
    invalidSchoolCode: "Невалиден код на училище",
    createAccount: "Създайте профил",
    alreadyHaveAccount: "Вече имате профил?",
    loginHere: "Влезте тук",

    // Табло
    schoolManagementSystem: "Система за управление на училище",
    welcomeToPortal: "Добро пожаловать в вашия администраторски портал",
    totalStudents: "Всички ученици",
    viewAll: "Преглед на всички",
    totalTeachers: "Всички учители",
    totalClasses: "Всички класове",
    attendanceRate: "Процент на присъствие",
    details: "Подробности",
    quickActions: "Бързи действия",
    addNewStudent: "Добавить нов ученик",
    addNewTeacher: "Добавить нов учител",
    addNewClass: "Добавить нов клас",
    markAttendance: "Отбелязване на присъствие",
    openSetup: "Отворете настройката",
    recentActivities: "Скорошни действия",
    newStudentRegistered: "Регистриран е нов ученик:",
    attendanceMarked: "Отбелязано присъствие за",
    newTeacherAdded: "Добавлен е нов учител:",
    newClassCreated: "Създаден е нов клас:",
    hoursAgo: "преди часове",
    daysAgo: "преди дни",
    schoolStatistics: "Статистика на училище",
    genderDistribution: "Разпределение по пол",
    classDistribution: "Разпределение на класове",
    teacherSubjects: "Предмети на учители",

    // Управление на ученици
    studentsManagement: "Управление на ученици",
    addNewStudentForm: "Добавить нов ученик",
    studentId: "ID на ученик",
    studentClass: "Клас на ученик",
    dateOfBirth: "Дата на раждане",
    gender: "Пол",
    male: "Мъж",
    female: "Жена",
    addStudent: "Добавить ученик",
    edit: "Редактирај",
    delete: "Изтри",
    save: "Запази",
    cancel: "Отмени",

    // Управление на учители
    teachersManagement: "Управление на учители",
    addNewTeacherForm: "Добавить нов учител",
    subject: "Предмет",
    qualification: "Квалификация",
    experience: "Опит (години)",
    addTeacher: "Добавить учител",

    // Управление на класове
    classesManagement: "Управление на класове",
    addNewClassForm: "Добавить нов клас",
    className: "Име на клас",
    classTeacher: "Учител на клас",
    capacity: "Капацитет",
    schedule: "Разпоред",
    addClass: "Добавить клас",

    // Присъствие
    attendanceManagement: "Управление на присъствие",
    markAttendanceForm: "Отбелязване на присъствие",
    selectDate: "Изберете дата",
    selectClass: "Изберете клас",
    attendanceRecords: "Записи на присъствие",
    present: "Присъствува",
    absent: "Отсъствува",
    markButton: "Отбелязване на присъствие",

    // Настройки на училище
    schoolSettings: "Настройки на училище",
    manageSchoolInformation: "Управление информацията на вашето училище и кода за регистрация",
    editSchoolInfo: "Редактирај информация на училище",
    registrationCode: "Код за регистрация",
    shareCodeMessage: "Споделете този код с учители и персонал, за да се регистрират в вашето училище",
    adminUsers: "Администраторски потребители",
    usersWithAdminAccess: "Потребители с администраторски достъп в вашето училище",
    addAdministrator: "Добавить администратор",
    registeredDate: "Дата на регистрация",
    allRegisteredUsers: "Всички регистрирани потребители",
    totalUsersRegistered: "Всички потребители, регистрирани в вашето училище:",
    role: "Роля",
    actions: "Действия",
    remove: "Премахна",
    editSchoolInformation: "Редактирај информация на училище",
    saveChanges: "Запази промени",
    generateNewCode: "Генерирай нов код",
    updateSuccessfully: "Информацията на училище е актуализирана!",
    userRemoved: "Потребителят е премахнат",
    confirmRemoveUser: "Сигурни ли сте, че искате да премахнете този потребител?",
    signedStatus: "Подписано",
    notSigned: "Не е подписано",
    signedBy: "Подписано от",

    // Разписание
    timetableMarkingPeriods: "Разписание и периоди на оценяване",
    definePeriodsForClass: "Дефинирайте дневните периоди за всеки клас и конфигурирайте периодите на маркиране (терминове).",
    classTimetable: "Разписание на клас",
    selectClass: "Изберете клас",
    loadTimetable: "Завантажить разписание",
    addPeriod: "Добавить период",
    periodName: "Име на период",
    startTime: "Време на начало",
    endTime: "Време на завършване",
    day: "Ден",
    monday: "Понеделник",
    tuesday: "Вторник",
    wednesday: "Сряда",
    thursday: "Четвъртък",
    friday: "Петък",
    saturday: "Събота",
    periodsFor: "Периоди за",
    noPeriodsDefined: "Няма дефинирани периоди.",
    saveTimetable: "Запази разписание",
    clearTimetable: "Изчисти разписание",
    markingPeriods: "Периоди на оценяване",
    name: "Име",
    startDate: "Дата на начало",
    endDate: "Дата на завършване",
    weight: "Тегло (%)",
    addMarkingPeriod: "Добавить период на оценяване",
    configuredMarkingPeriods: "Конфигурирани периоди на оценяване",
    noMarkingPeriods: "Няма конфигурирани периоди на оценяване.",

    // Портал за учители
    teacherPortal: "Портал за учители",
    myClasses: "Мои класове",
    myStudents: "Мои ученици",
    todaysAttendance: "Днешното присъствие",
    grades: "Оценки",
    myGrades: "Мои оценки",
    attendance: "Присъствие",
    myAttendance: "Мое присъствие",

    // Портал за ученици
    studentPortal: "Портал за ученици",
    enrolledClasses: "Записани класове",
    overallGrade: "Обща оценка",
    performance: "Представяне",
    viewDetails: "Преглед на подробности",
    assessmentScores: "Оценки на оценяване",
    assessmentType: "Тип оценяване",
    quiz: "Викторина",
    midTerm: "Средносрочен тест",
    finalExam: "Финален изпит",
    project: "Проект",
    score: "Резултат",
    grade: "Оценка",

    // Общи съобщения
    areSureLogout: "Сигурни ли сте, че искате да излезете?",
    successfullyImported: "Успешно импортирано",
    items: "елемента!",
    required: "задължително",
    allRightsReserved: "Всички права запазени!",
    contactUs: "Свържете се с нас",

    // Грешки
    pleaseLoginFirst: "Моля, влезте първо",
    accessDenied: "Достъпът е отказан",
    onlyAdministrators: "Само администраторите могат да получат достъп до тази страница",
    invalidEmail: "Моля, въведете валиден имейл адрес",
    passwordAtLeast: "Паролата трябва да бъде поне",
    usernameAtLeast: "Потребителското име трябва да бъде поне",
  }
};

/**
 * Get current language from localStorage or browser
 */
function getCurrentLanguage() {
  let lang = localStorage.getItem('language');
  if (!lang) {
    lang = navigator.language.startsWith('bg') ? 'bg' : 'en';
    localStorage.setItem('language', lang);
  }
  return lang;
}

/**
 * Set language and reload page
 */
function setLanguage(lang) {
  if (translations[lang]) {
    localStorage.setItem('language', lang);
    location.reload();
  }
}

/**
 * Get translated text
 */
function t(key) {
  const lang = getCurrentLanguage();
  return translations[lang] && translations[lang][key] ? translations[lang][key] : key;
}

// Make functions available globally
window.getCurrentLanguage = getCurrentLanguage;
window.setLanguage = setLanguage;
window.t = t;
