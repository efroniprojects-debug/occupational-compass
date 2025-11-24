# המצפן התעסוקתי 🧭

**שירות חברתי חינמי לאבחון קריירה מבוסס AI**

## 📋 תיאור

המצפן התעסוקתי הוא כלי אבחון תעסוקתי מתקדם המשתמש בבינה מלאכותית כדי לספק המלצות קריירה מותאמות אישית. השירות ניתן **חינמית לחלוטין** כתרומה לקהילה.

## ✨ תכונות

- 🎯 **אבחון תעסוקתי מקיף** - 9 שלבים של שאלות מעמיקות
- 🧠 **ניתוח יכולות קוגניטיביות** - הערכת חשיבה כמותית, מילולית, חזותית וטכנית
- 💼 **Holland RIASEC** - זיהוי נטיות תעסוקתיות
- 🎮 **Hobby-to-Career** - המרת תחביבים לקריירה
- 📊 **דו"ח מקצועי מפורט** - עם ציונים, נימוקים והמלצות
- 🎓 **המלצות הכשרה** - קורסים ומסלולי לימוד מותאמים
- 📋 **תוכנית פעולה** - צעדים קונקרטיים להצלחה
- 💾 **הורדת דו"ח** - שמירת התוצאות כקובץ HTML

## 🚀 טכנולוגיות

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Backend**: Netlify Functions (Serverless)
- **AI**: OpenAI GPT-3.5-turbo
- **Hosting**: Netlify (חינמי)

## 📦 מבנה הפרויקט

```
occupational-compass/
├── index.html              # דף ראשי
├── netlify.toml           # הגדרות Netlify
├── package.json           # תלויות Node.js
└── netlify/
    └── functions/
        └── openai.js      # Backend function
```

## ⚙️ הגדרה והתקנה

### דרישות מוקדמות
- חשבון GitHub (חינמי)
- חשבון Netlify (חינמי)
- API Key של OpenAI

### שלבי התקנה

1. **Fork את ה-Repository**
   ```bash
   git clone https://github.com/YOUR-USERNAME/occupational-compass.git
   cd occupational-compass
   ```

2. **חבר ל-Netlify**
   - היכנס ל-https://app.netlify.com
   - "Add new site" → "Import from Git"
   - בחר את ה-Repository שלך

3. **הגדר Environment Variables**
   - Site settings → Build & deploy → Environment
   - הוסף משתנה:
     - **Key**: `OPENAI_API_KEY`
     - **Value**: `sk-proj-YOUR-API-KEY`

4. **Deploy!**
   - Netlify יבנה ויפרוס אוטומטית
   - האתר יהיה זמין ב-`https://YOUR-SITE-NAME.netlify.app`

## 🔒 אבטחה

- ה-API Key מוסתר ב-Environment Variables
- אין חשיפה של מפתחות בקוד
- HTTPS מוצפן בכל התקשורת
- אין איסוף מידע אישי

## 💙 תרומה קהילתית

פרויקט זה ניתן **חינמית לחלוטין** כשירות לקהילה. אנחנו מאמינים שייעוץ תעסוקתי איכותי צריך להיות נגיש לכולם.

## 📝 רישיון

MIT License - חופשי לשימוש, שינוי והפצה

## 🤝 תרומה לפרויקט

אנו מזמינים תרומות! אם יש לך רעיונות, באגים או שיפורים:
1. פתח Issue
2. צור Pull Request
3. שתף את הפרויקט עם אחרים

## 📧 יצירת קשר

לשאלות, הצעות או תמיכה: [יצירת קשר](mailto:info@occupational-compass.com)

---

**נבנה באהבה עבור הקהילה הישראלית** 💙🇮🇱
