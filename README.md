# הנתיב שלך – Your Lane

שאלון אבחון קריירה בסיסי בעברית, מוכן לפריסה כאתר סטטי על Vercel / Netlify / GitHub Pages.

## מה יש בפרויקט

- `index.html` – דף בית + ויזארד שאלון (5 שלבים) + עמוד סיכום.
- `styles.css` – עיצוב RTL, מותאם למותג "הנתיב שלך – Your Lane".
- `main.js` – ניווט בין שלבי השאלון, יצירת סיכום דינמי, כפתורי דמו ל-PDF/מייל.
- `assets/image.jpg` – לוגו (יש להעלות קובץ בפועל בשם זהה).
- `favicon.ico` – אייקון בסיסי לדפדפן (ניתן להחליף בלוגו ממותג).
- `netlify.toml` – קובץ הגדרות מינימלי ל-Netlify (לא חובה ל-Vercel).

## פריסה ב-Vercel (מומלץ)

1. צור מאגר GitHub חדש והעלה אליו את כל הקבצים (כולל תיקיית `assets`).
2. ב-Vercel לחץ על **Add New Project** ובחר את הריפו.
3. השאר הגדרות ברירת מחדל (Static Site). אין צורך בבילד.
4. לאחר הדיפלוי, הוסף דומיין מותאם (לדוגמה `yourlaneai.com`) במסך Domains.

## פריסה כ-ZIP ב-Vercel

1. ארוז את תכולת התיקייה (index.html, styles.css, main.js, README.md, favicon.ico, netlify.toml, תיקיית assets).
2. ב-Vercel → Add New → **Import → Drag & Drop** והעלה את ה-ZIP.
3. בסיום הפריסה תקבל כתובת זמנית ותוכל להוסיף דומיין פרטי.

## חיבור עתידי ל-AI / PDF / מייל

- PDF: ניתן להוסיף ספריית jsPDF בצד לקוח, ולייצר PDF מתוך `#summaryContent`.
- מייל: מומלץ להשתמש ב-API צד שרת (Netlify Functions / Vercel Serverless Functions) שיקבל JSON מהטופס וישלח מייל דרך שירות כמו SendGrid / Resend.
- AI: אפשר לשלוח את הנתונים ל-API (למשל OpenAI) בצד שרת, לקבל טקסט תובנות, ולהציגו במקום הסיכום הבסיסי.

כרגע הקוד מדגים את הזרימה וה-UX, בלי חיבור אמיתי לשרת.
