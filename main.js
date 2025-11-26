// מספר השלבים הכולל (לסנכרון עם ה-HTML)
const totalSteps = 5;
let currentStep = 1;

// אלמנטים
const landingSection = document.getElementById("landingSection");
const wizardSection = document.getElementById("wizardSection");
const summarySection = document.getElementById("summarySection");

const progressEl = document.getElementById("progress");
const currentStepLabel = document.getElementById("currentStepLabel");
const totalStepsLabel = document.getElementById("totalStepsLabel");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const startBtn = document.getElementById("startBtn");
const backToFormBtn = document.getElementById("backToFormBtn");
const downloadPdfBtn = document.getElementById("downloadPdfBtn");
const sendEmailBtn = document.getElementById("sendEmailBtn");
const diagnosisForm = document.getElementById("diagnosisForm");
const summaryContent = document.getElementById("summaryContent");

// הגדרת ספירת שלבים בתצוגה
totalStepsLabel.textContent = totalSteps.toString();

// מעבר ממסך בית לוויזארד
startBtn.addEventListener("click", () => {
  landingSection.classList.add("hidden");
  wizardSection.classList.remove("hidden");
  showStep(currentStep);
});

// ניווט שלבים
prevBtn.addEventListener("click", () => {
  if (currentStep > 1) {
    currentStep--;
    showStep(currentStep);
  }
});

nextBtn.addEventListener("click", () => {
  if (currentStep < totalSteps) {
    // כאן אפשר להוסיף ולידציה לשלב לפני מעבר
    currentStep++;
    showStep(currentStep);
  } else {
    // last step → סיכום
    generateSummary();
  }
});

// חזרה מהסיכום לטופס
backToFormBtn.addEventListener("click", () => {
  summarySection.classList.add("hidden");
  wizardSection.classList.remove("hidden");
});

// כפתור דמו ל-PDF
downloadPdfBtn.addEventListener("click", () => {
  alert(
    "בגרסה מתקדמת: כאן נחבר ספריית JS (למשל jsPDF) ליצירת PDF מתוך הסיכום ולהורדה למחשב."
  );
});

// כפתור דמו לשליחת מייל
sendEmailBtn.addEventListener("click", () => {
  alert(
    "בגרסה מתקדמת: כאן נוסיף קריאה ל-API בצד שרת (Netlify / Vercel Function) שיקבל את הנתונים וישלח מייל עם הסיכום."
  );
});

// פונקציה להצגת שלב
function showStep(step) {
  for (let i = 1; i <= totalSteps; i++) {
    const el = document.getElementById("step" + i);
    if (el) {
      el.classList.toggle("hidden", i !== step);
    }
  }

  currentStepLabel.textContent = step.toString();
  prevBtn.disabled = step === 1;
  nextBtn.textContent = step === totalSteps ? "סיום" : "הבא";

  const percent = (step / totalSteps) * 100;
  progressEl.style.width = percent + "%";
}

// יצירת אובייקט נתונים מהטופס
function collectFormData() {
  const formData = new FormData(diagnosisForm);
  const data = {};

  // טיפול ברשימות מרובות (interests)
  const interests = formData.getAll("interests");
  data.interests = interests;

  formData.forEach((value, key) => {
    if (key === "interests") return;
    data[key] = value;
  });

  return data;
}

// סיכום בסיסי (לוגיקה פשוטה, ניתן להחלפה בחיבור ל-AI)
function generateSummary() {
  const data = collectFormData();

  const name = data.fullName || "משתמש/ת";
  const status = mapStatus(data.status);
  const region = data.region || "";
  const futureVision = data.futureVision || "";
  const constraints = data.constraints || "";
  const interestsText =
    (data.interests && data.interests.join(" · ")) || "לא נבחרו תחומים";
  const teamwork = data.teamwork || "—";
  const selfLearning = data.selfLearning || "—";
  const adaptability = data.adaptability || "—";

  summaryContent.innerHTML = `
    <h3>${name} – תמונת מצב ראשונית</h3>

    <p>
      לפי הנתונים שמילאת, אתה נמצא כרגע במצב תעסוקתי: <b>${status}</b>${
    region ? `, באזור <b>${escapeHtml(region)}</b>` : ""
  }.
    </p>

    <p>
      התחומים שמסקרנים אותך כוללים: <b>${escapeHtml(interestsText)}</b>.
    </p>

    <p>
      דירוג החוזקות שלך:
      <br>• עבודה בצוות: <b>${teamwork}/5</b>
      <br>• למידה עצמית: <b>${selfLearning}/5</b>
      <br>• התמודדות עם שינויים: <b>${adaptability}/5</b>
    </p>

    <p>
      החזון שלך ל-3–5 השנים הקרובות:
      <br><i>${escapeHtml(futureVision || "לא נכתב חזון בשלב זה.")}</i>
    </p>

    ${
      constraints
        ? `<p>אילוצים והעדפות שציינת: <br><i>${escapeHtml(constraints)}</i></p>`
        : ""
    }

    <p>
      בשלב הבא של "הנתיב שלך – Your Lane" ניתן יהיה לחבר מודל AI שייצר עבורך
      מסלול למידה ותעסוקה מותאם אישית לפי הנתונים שמילאת, כולל רעיונות לתפקידים,
      ענפי תעסוקה וקורסים מתאימים.
    </p>
  `;

  wizardSection.classList.add("hidden");
  summarySection.classList.remove("hidden");
}

// מיפוי מצב תעסוקתי לטקסט ידידותי
function mapStatus(statusValue) {
  switch (statusValue) {
    case "employed":
      return "שכיר/ה";
    case "self":
      return "עצמאי/ת";
    case "between":
      return "בין עבודות";
    case "student":
      return "סטודנט/ית";
    case "other":
      return "אחר";
    default:
      return "לא צוין";
  }
}

// מניעת XSS בסיסית בסיכום
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
