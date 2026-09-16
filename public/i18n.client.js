// Tiny inline i18n for the Learning Hub.
// Hover a translatable element (desktop) or tap it (mobile) to fade into Hebrew.
// The element swaps English <-> Hebrew text with a CSS opacity transition.
//
// Usage in Astro: wrap any text node's parent in <span data-i18n="key">English text</span>.
// The Hebrew value lives in I18N[key]. Add keys as needed.

const I18N = {
  // Home
  "home.title": "לומד כל באופן של שלך",
  "home.subtitle": "מתמטיקה, אנגלית, בינה מכונה ותכנות — בנה מיומנויות בלי להסתכל על השאר, או שולח עם מדריך שממשיך איתך.",
  "home.browse": "סייר בחומרים",
  "home.how": "איך זה עובד",
  "home.two_paths": "שני שברים, יעד אחד",
  "home.self_title": "בקריאת עצמך",
  "home.self_desc": "שיעורים מסודרים, תרגילים ובדיקות שאתה עובר במהירות שלך. חזור על נושאים, דלג על מה שאתה יודע, ובנה למידה אישית.",
  "home.tutor_title": "עם מדריך",
  "home.tutor_desc": "הזמן שיעור, קבע יעד, וסורקו יחד את החומר. מדריך מסתכל על הקצב, עונה בהקשר, ושומר עליך בין שיעורים.",
  "home.subjects_title": "חומרים",
  "home.math_desc": "חשבון, אלגברה, הנדסה, חדו\"א וסטטיסטיקה — מהבסיס ועד לחלקים שפותחים את שאר החומרים באתר.",
  "home.english_desc": "קריאה, כתיבה, דקדוק, מילים ושיחה — לדוברים רשמיים שמחזקים את כישוריהם וללומדים שבונים בוטנה.",
  "home.ai_desc": "למידת מכונה, רשתות נוירונים, נתונים והצד המעשי של עבודה עם בינה מכונה — רעיונות, גישה ויישום מלוו.",
  "home.prog_desc": "מתוכנית ראשונה ועד לפרויקטים ריאליים — פיתון, ג'אווהסקריפט, פיתוח רשת, אלגוריתמים וה습관ים שהופכים קוד לקריא וניתן לתחזוקה.",
  "home.next_title": "השלב הבא",
  "home.next_desc": "תבחר חומר מלמעלה, תבחר ללמוד בעצמך או עם מדריך, ותתחיל באפשרות שלך — לא באשר לומד לא מכונה רשמית.",

  // Math
  "math.title": "מתמטיקה",
  "math.lead": "מספרים, תבליטים והשפה שמתארת את העולם שלנו.",
  "math.self_title": "אפשרויות ללמוד",
  "math.foundations": "יסודות — חשבון, שברים, עשרוניים ותודעת נומרית.",
  "math.algebra": "אלגברה — משוואות, פונקציות, אי-שוויונות והשתייכות בין משתנים.",
  "math.geometry": "הנדסה — צורות, זוויות, שטח, נפח והוכחות.",
  "math.advanced": "מתקדם — טריגונומטריה, חדו\"א וסטטיסטיקה בקצב שלך.",
  "math.self_para": "עבור בשיעורים בסדר או קפוץ למה שאתה צריך. כל נושא עומד בו דוגמאות, תרגילים ובדיקה קצרה שתראה מה נשאר בראש.",
  "math.tutor_title": "מה מדריך עוזר בו",
  "math.gap": "מצא את הפער — אלגברה, הנדסה או חדו\"א כואבים? מדריך חוזר לשלב הראשון של הבסיס של למידה.",
  "math.talk": "דבר את זה לאורך — הסבר את הבעיה בקול, קבל הדרכות במקום להראות רק תשובות.",
  "math.pace": "הישאר קצב — תזמין שיעורים סביב יעד, כמו קורס, מבחן או פרויקט.",
  "math.tutor_para": "הגיע עם נושא, סט בעיות או יעד סמוך והמדריך מסתכל על השיעור לפי למידה האמיתית שלך. בין שיעורים אתה נמשך בעבודה בקצב שלך.",

  // English
  "english.title": "אנגלית",
  "english.lead": "קריאה, כתיבה, דקדוק, מילים ושיחה — לדוברים רשמיים שמחזקים את כשותיהם וללומדים שבונים בוטנה.",
  "english.self_title": "בקריאת עצמך",
  "english.self_desc": "קריאות, תרגילי כתיבה, תרגילי דקדוק ומשקלי מילים המתאימים ככל שאתה מתקדם. סמן מה שאתה יודע, חזור על מה שלא, ובנה דרך המתאימה לשגרה שלך.",
  "english.tutor_title": "עם מדריך",
  "english.tutor_desc": "שיחות, כתיבה מתוקנת ותרגיל שימושי על החלקים שמחשיבים לך — אנגלית אקדמית, תקשורת עסקית או אוריינות יומיומית.",
  "english.self_para": "קריאות, תרגילי כתיבה, תרגילי דקדוק ומשקלי מילים המתאימים ככל שאתה מתקדם. סמן מה שאתה יודע, חזור על מה שלא, ובנה דרך המתאימה לשגרה שלך.",
  "english.tutor_para": "שיחות, כתיבה מתוקנת ותרגיל שימושי על החלקים שמחשיבים לך — אנגלית אקדמית, תקשורת עסקית או אוריינות יומיומית.",

  // AI
  "ai.title": "בינה מכונה",
  "ai.lead": "למידת מכונה, רשתות נוירונים, נתונים והצד המעשי של עבודה עם בינה מכונה — רעיונות, גישה ויישום מלוו.",
  "ai.self_title": "בקריאת עצמך",
  "ai.self_desc": "התחל עם הרעיונות הבסיסיים — מה הם מודלים, איך הם לומדים, ומה הם טובים בו — והמשך לבנות ולהשתמש בהם בעצמך.",
  "ai.tutor_title": "עם מדריך",
  "ai.tutor_desc": "שולח יד לעבוד על פרויקט, לתקן מודל או להבין מאמר. מדריך ממיר קיר של מתמטיקה או ריבוי למשהו שאתה יכול להשתמש בו בפועל.",
  "ai.self_para": "התחל עם הרעיונות הבסיסיים — מה הם מודלים, איך הם לומדים, ומה הם טובים בו — והמשך לבנות ולהשתמש בהם בעצמך.",
  "ai.tutor_para": "שולח יד לעבוד על פרויקט, לתקן מודל או להבין מאמר. מדריך ממיר קיר של מתמטיקה או ריבוי למשהו שאתה יכול להשתמש בו בפועל.",

  // Programming
  "prog.title": "תכנות",
  "prog.lead": "מתוכנית ראשונה ועד לפרויקטים ריאליים — פיתון, ג'אווהסקריפט, פיתוח רשת, אלגוריתמים וה습관ים שהופכים קוד לקריא וניתן לתחזוקה.",
  "prog.self_title": "בקריאת עצמך",
  "prog.self_desc": "שיעורים, תרגילים ופרויקטים קטנים שמאחדים זה את זה. הלכ בקצב שלך, שדרג את החלקים הקשים, וחפש פורטפוליו שלך כשאתה לומד.",
  "prog.tutor_title": "עם מדריך",
  "prog.tutor_desc": "תחרץ מהנקודה האמבולנציה קצר יותר, למד דפוסים מובנים וסקור קוד אמיתי עם מישהו שמסביר למה גישה אחת טובה מאשר שנייה. שימושי מאוד כשמעברים מ\"זה עובד\" ל\"זה טוב\".",
  "prog.self_para": "שיעורים, תרגילים ופרויקטים קטנים שמאחדים זה את זה. הלכ בקצב שלך, שדרג את החלקים הקשים, וחפש פורטפוליו שלך כשאתה לומד.",
  "prog.tutor_para": "תחרץ מהנקודה האמבולנציה קצר יותר, למד דפוסים מובנים וסקור קוד אמיתי עם מישהו שמסביר למה גישה אחת טובה מאשר שנייה. שימושי מאוד כשמעברים מ\"זה עובד\" ל\"זה טוב\".",
};

// We use a simple heuristic: elements with data-i18n hold the English text.
// On hover (mouseenter) or tap (pointerdown / touch), we fade to Hebrew.
// On mouseleave / pointerup, we fade back to English. We track state so
// simultaneous enter/leave doesn't fight.

(function () {
  const els = [];
  const map = new Map();

  function init () {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      const en = el.textContent.trim();
      const he = I18N[key] || '';
      if (!he) return;            // nothing to translate
      map.set(el, { en: en, he: he, key: key });
      els.push(el);
      // CSS: the element gets the transition from the stylesheet.
      // We toggle a class to trigger the fade.
    });
  }

  function setLanguage (el, lang, immediate) {
    const entry = map.get(el);
    if (!entry) return;
    if (lang === 'he' && entry.he === '') return;
    const text = lang === 'he' ? entry.he : entry.en;
    if (el.textContent.trim() === text) return;
    if (immediate) {
      el.textContent = text;
      el.classList.add('i18n-faded');
    } else {
      el.classList.add('i18n-fade');
      // The actual swap happens after the fade-out in the CSS.
      // We use a tiny transition: first opacity to 0, then swap text, then opacity to 1.
      const oldText = el.textContent;
      el.style.transition = 'opacity 0.35s ease';
      el.style.opacity = '0';
      setTimeout(function () {
        el.textContent = text;
        el.style.opacity = '1';
      }, 330);
    }
  }

  function enter (el) {
    setLanguage(el, 'he', false);
  }

  function leave (el) {
    setLanguage(el, 'en', false);
  }

  // Bind events.
  function bind (el) {
    // Desktop: hover
    el.addEventListener('mouseenter', function () { enter(el); });
    el.addEventListener('mouseleave', function () { leave(el); });
    // Mobile / any pointer: tap toggles (touchstart + touchend so that a tap
    // that ends outside doesn't leave it translated forever).
    let tapped = false;
    el.addEventListener('pointerdown', function (e) {
      if (e.pointerType === 'touch' || e.pointerType === 'pen') {
        tapped = true;
        enter(el);
      }
    });
    el.addEventListener('pointerup', function (e) {
      if (e.pointerType === 'touch' || e.pointerType === 'pen') {
        if (tapped) {
          tapped = false;
          // Keep it in Hebrew while pressed; revert when pointer leaves element.
        }
      }
    });
    el.addEventListener('pointerleave', function (e) {
      if (e.pointerType === 'touch' || e.pointerType === 'pen') {
        // If finger leaves the element, snap back to English.
        leave(el);
      }
    });
    // Also: if the tap was brief (no pointerleave fired because pointer left
    // the element boundaries), we still want to go back to English on the next
    // tap – but a simple tap-to-toggle is nicer on mobile.
    // We implement tap-to-toggle via a click handler that fires after pointer
    // sequences complete.
    let downX = 0, downY = 0;
    el.addEventListener('pointerdown', function (e) {
      downX = e.clientX;
      downY = e.clientY;
    });
    el.addEventListener('click', function (e) {
      const dx = Math.abs(e.clientX - downX);
      const dy = Math.abs(e.clientY - downY);
      if (dx < 10 && dy < 10) {
        // It was a tap, not a drag. Toggle language.
        const entry = map.get(el);
        if (!entry) return;
        const current = el.textContent.trim();
        const nextLang = current === entry.en ? 'he' : 'en';
        setLanguage(el, nextLang, true);
      }
    });
  }

  init();
  els.forEach(bind);
})();
