# ☕ Ved's ChaiTailwind

> CSS utility classes, apne andaz mein — sirf ek `script.js` file se.

Koi npm nahi. Koi build tool nahi. Koi configuration nahi.  
Bas ek JS file copy karo, classes lagao, aur kaam shuru.

---

## 🚀 Quick Start

**1. `script.js` apni HTML mein add karo:**

```html
<!doctype html>
<html>
  <body>
    <p class="chai-p-2 chai-bg-blue chai-color-white chai-rounded-md">
      Hello ChaiTailwind!
    </p>

    <script src="script.js"></script>
  </body>
</html>
```

Bas itna — styles automatically apply ho jaate hain.

---

## ⚙️ Yeh Kaam Kaise Karta Hai

ChaiTailwind ka engine simple hai:

```
HTML load hota hai
      ↓
DOMContentLoaded fire hota hai
      ↓
script.js saare DOM elements scan karta hai
      ↓
har element ki classList check hoti hai
      ↓
agar class chaiStyles object mein mili
      ↓
element.style[property] = value apply hota hai
```

Code mein dekho:

```js
document.querySelectorAll("*").forEach((element) => {
  element.classList.forEach((cls) => {
    if (cls in chaiStyles) {
      const { property, value } = chaiStyles[cls];
      element.style[property] = value;
    }
  });
});
```

---

## 📦 Total Classes: 140

---

## 🎨 Class Reference

### Padding

| Class       | CSS                    |
| ----------- | ---------------------- |
| `chai-p-0`  | `padding: 0`           |
| `chai-p-1`  | `padding: 8px`         |
| `chai-p-2`  | `padding: 16px`        |
| `chai-p-3`  | `padding: 24px`        |
| `chai-p-4`  | `padding: 32px`        |
| `chai-p-6`  | `padding: 48px`        |
| `chai-px-1` | `padding-inline: 8px`  |
| `chai-px-2` | `padding-inline: 16px` |
| `chai-px-4` | `padding-inline: 32px` |
| `chai-py-1` | `padding-block: 8px`   |
| `chai-py-2` | `padding-block: 16px`  |
| `chai-py-4` | `padding-block: 32px`  |

### Margin

| Class          | CSS                   |
| -------------- | --------------------- |
| `chai-m-0`     | `margin: 0`           |
| `chai-m-1`     | `margin: 8px`         |
| `chai-m-2`     | `margin: 16px`        |
| `chai-m-3`     | `margin: 24px`        |
| `chai-m-4`     | `margin: 32px`        |
| `chai-mx-auto` | `margin: 0 auto`      |
| `chai-mt-1`    | `margin-top: 8px`     |
| `chai-mt-2`    | `margin-top: 16px`    |
| `chai-mb-1`    | `margin-bottom: 8px`  |
| `chai-mb-2`    | `margin-bottom: 16px` |

### Background Colors

| Class               | Color     |
| ------------------- | --------- |
| `chai-bg-black`     | `#000000` |
| `chai-bg-white`     | `#ffffff` |
| `chai-bg-red`       | `#ef4444` |
| `chai-bg-blue`      | `#3b82f6` |
| `chai-bg-green`     | `#22c55e` |
| `chai-bg-yellow`    | `#eab308` |
| `chai-bg-gray`      | `#6b7280` |
| `chai-bg-orange`    | `#f97316` |
| `chai-bg-pink`      | `#ec4899` |
| `chai-bg-purple`    | `#8b5cf6` |
| `chai-bg-darkgray`  | `#1f1f1f` |
| `chai-bg-lightgray` | `#f3f4f6` |

### Text Colors

| Class               | Color     |
| ------------------- | --------- |
| `chai-color-white`  | `#ffffff` |
| `chai-color-black`  | `#000000` |
| `chai-color-red`    | `#ef4444` |
| `chai-color-blue`   | `#3b82f6` |
| `chai-color-green`  | `#22c55e` |
| `chai-color-yellow` | `#eab308` |
| `chai-color-gray`   | `#6b7280` |
| `chai-color-orange` | `#f97316` |
| `chai-color-pink`   | `#ec4899` |
| `chai-color-purple` | `#8b5cf6` |
| `chai-color-muted`  | `#9ca3af` |

### Font Size

| Class           | Size   |
| --------------- | ------ |
| `chai-text-xs`  | `12px` |
| `chai-text-sm`  | `14px` |
| `chai-text-md`  | `18px` |
| `chai-text-lg`  | `24px` |
| `chai-text-xl`  | `32px` |
| `chai-text-2xl` | `40px` |
| `chai-text-3xl` | `52px` |

### Font Weight

| Class                 | Weight |
| --------------------- | ------ |
| `chai-font-thin`      | `100`  |
| `chai-font-light`     | `300`  |
| `chai-font-normal`    | `400`  |
| `chai-font-medium`    | `500`  |
| `chai-font-semibold`  | `600`  |
| `chai-font-bold`      | `700`  |
| `chai-font-extrabold` | `800`  |

### Font Family

| Class               | Font                  |
| ------------------- | --------------------- |
| `chai-font-sans`    | `sans-serif`          |
| `chai-font-serif`   | `Georgia, serif`      |
| `chai-font-mono`    | `DM Mono, monospace`  |
| `chai-font-syne`    | `Syne, sans-serif`    |
| `chai-font-poppins` | `Poppins, sans-serif` |
| `chai-font-outfit`  | `Outfit, sans-serif`  |

> **Note:** Google Fonts wale fonts ke liye `<link>` tag HTML mein lagana hoga.

### Line Height

| Class                 | Value |
| --------------------- | ----- |
| `chai-leading-tight`  | `1.2` |
| `chai-leading-normal` | `1.5` |
| `chai-leading-loose`  | `1.8` |

### Letter Spacing

| Class                 | Value    |
| --------------------- | -------- |
| `chai-tracking-tight` | `-0.5px` |
| `chai-tracking-wide`  | `1.5px`  |
| `chai-tracking-wider` | `3px`    |

### Text Align

| Class              | CSS                  |
| ------------------ | -------------------- |
| `chai-text-left`   | `text-align: left`   |
| `chai-text-center` | `text-align: center` |
| `chai-text-right`  | `text-align: right`  |

### Text Transform

| Class             | CSS                          |
| ----------------- | ---------------------------- |
| `chai-uppercase`  | `text-transform: uppercase`  |
| `chai-lowercase`  | `text-transform: lowercase`  |
| `chai-capitalize` | `text-transform: capitalize` |

### Text Decoration

| Class               | CSS                             |
| ------------------- | ------------------------------- |
| `chai-underline`    | `text-decoration: underline`    |
| `chai-line-through` | `text-decoration: line-through` |
| `chai-no-underline` | `text-decoration: none`         |

### Border Radius

| Class               | Value    |
| ------------------- | -------- |
| `chai-rounded-none` | `0`      |
| `chai-rounded-sm`   | `4px`    |
| `chai-rounded-md`   | `8px`    |
| `chai-rounded-lg`   | `16px`   |
| `chai-rounded-xl`   | `24px`   |
| `chai-rounded-full` | `9999px` |

### Border

| Class                | CSS                     |
| -------------------- | ----------------------- |
| `chai-border`        | `1px solid #d1d5db`     |
| `chai-border-2`      | `border-width: 2px`     |
| `chai-border-none`   | `border: none`          |
| `chai-border-red`    | `border-color: #ef4444` |
| `chai-border-blue`   | `border-color: #3b82f6` |
| `chai-border-black`  | `border-color: #000000` |
| `chai-border-white`  | `border-color: #ffffff` |
| `chai-border-yellow` | `border-color: #eab308` |
| `chai-border-gray`   | `border-color: #6b7280` |

### Display

| Class               | CSS                     |
| ------------------- | ----------------------- |
| `chai-block`        | `display: block`        |
| `chai-inline`       | `display: inline`       |
| `chai-inline-block` | `display: inline-block` |
| `chai-flex`         | `display: flex`         |
| `chai-inline-flex`  | `display: inline-flex`  |
| `chai-hidden`       | `display: none`         |

### Flexbox

| Class                  | CSS                              |
| ---------------------- | -------------------------------- |
| `chai-flex-row`        | `flex-direction: row`            |
| `chai-flex-col`        | `flex-direction: column`         |
| `chai-flex-wrap`       | `flex-wrap: wrap`                |
| `chai-flex-nowrap`     | `flex-wrap: nowrap`              |
| `chai-justify-start`   | `justify-content: flex-start`    |
| `chai-justify-center`  | `justify-content: center`        |
| `chai-justify-between` | `justify-content: space-between` |
| `chai-justify-end`     | `justify-content: flex-end`      |
| `chai-items-start`     | `align-items: flex-start`        |
| `chai-items-center`    | `align-items: center`            |
| `chai-items-end`       | `align-items: flex-end`          |
| `chai-gap-1`           | `gap: 8px`                       |
| `chai-gap-2`           | `gap: 16px`                      |
| `chai-gap-4`           | `gap: 32px`                      |

### Width & Height

| Class               | CSS                 |
| ------------------- | ------------------- |
| `chai-w-full`       | `width: 100%`       |
| `chai-w-half`       | `width: 50%`        |
| `chai-w-auto`       | `width: auto`       |
| `chai-h-full`       | `height: 100%`      |
| `chai-h-screen`     | `height: 100vh`     |
| `chai-h-auto`       | `height: auto`      |
| `chai-min-h-screen` | `min-height: 100vh` |

### Opacity

| Class              | Value  |
| ------------------ | ------ |
| `chai-opacity-0`   | `0`    |
| `chai-opacity-25`  | `0.25` |
| `chai-opacity-50`  | `0.50` |
| `chai-opacity-75`  | `0.75` |
| `chai-opacity-100` | `1`    |

### Shadow

| Class              | CSS                          |
| ------------------ | ---------------------------- |
| `chai-shadow-none` | `box-shadow: none`           |
| `chai-shadow`      | `0 2px 8px rgba(0,0,0,0.15)` |
| `chai-shadow-lg`   | `0 8px 24px rgba(0,0,0,0.2)` |

### Misc

| Class                      | CSS                    |
| -------------------------- | ---------------------- |
| `chai-cursor-pointer`      | `cursor: pointer`      |
| `chai-cursor-default`      | `cursor: default`      |
| `chai-cursor-not-allowed`  | `cursor: not-allowed`  |
| `chai-overflow-hidden`     | `overflow: hidden`     |
| `chai-overflow-auto`       | `overflow: auto`       |
| `chai-select-none`         | `user-select: none`    |
| `chai-italic`              | `font-style: italic`   |
| `chai-not-italic`          | `font-style: normal`   |
| `chai-list-none`           | `list-style: none`     |
| `chai-pointer-events-none` | `pointer-events: none` |

---

## 💡 Usage Examples

### Simple Card

```html
<div class="chai-bg-white chai-p-3 chai-rounded-lg chai-shadow-lg">
  <h2 class="chai-font-bold chai-text-lg chai-color-black chai-mb-1">
    Card Title
  </h2>
  <p class="chai-text-sm chai-color-gray chai-leading-loose">
    Yeh ek simple card hai sirf chai classes se.
  </p>
</div>
```

### Navbar

```html
<nav
  class="chai-flex chai-items-center chai-justify-between chai-px-4 chai-py-2 chai-bg-black"
>
  <span class="chai-font-bold chai-text-md chai-color-white">MyApp</span>
  <div class="chai-flex chai-gap-2">
    <span class="chai-color-gray chai-text-sm chai-cursor-pointer">Home</span>
    <span class="chai-color-gray chai-text-sm chai-cursor-pointer">About</span>
    <span
      class="chai-bg-blue chai-color-white chai-px-2 chai-py-1 chai-rounded-md chai-text-sm"
      >Login</span
    >
  </div>
</nav>
```

### Button Group

```html
<div class="chai-flex chai-gap-2">
  <button
    class="chai-bg-blue chai-color-white chai-px-2 chai-py-1 chai-rounded-md chai-font-bold chai-cursor-pointer"
  >
    Primary
  </button>
  <button
    class="chai-border chai-border-gray chai-color-gray chai-px-2 chai-py-1 chai-rounded-md chai-cursor-pointer"
  >
    Secondary
  </button>
  <button
    class="chai-bg-red chai-color-white chai-px-2 chai-py-1 chai-rounded-full chai-cursor-pointer"
  >
    Danger
  </button>
</div>
```

### Centered Hero

```html
<div
  class="chai-flex chai-flex-col chai-items-center chai-text-center chai-p-6 chai-min-h-screen chai-bg-black"
>
  <h1
    class="chai-font-extrabold chai-text-3xl chai-color-white chai-leading-tight"
  >
    Apna Project
  </h1>
  <p class="chai-text-md chai-color-muted chai-leading-loose chai-mt-2">
    Ek line mein tagline.
  </p>
  <span
    class="chai-bg-yellow chai-color-black chai-px-4 chai-py-2 chai-rounded-full chai-font-bold chai-mt-2 chai-cursor-pointer"
  >
    Get Started →
  </span>
</div>
```

---

## 🔧 Naye Classes Kaise Add Karein

`script.js` mein `chaiStyles` object mein naya entry add karo:

```js
// Format:
"class-name": { property: "cssProperty", value: "cssValue" },

// Example — naya background color add karna:
"chai-bg-teal": { property: "backgroundColor", value: "#14b8a6" },

// Example — naya font size:
"chai-text-4xl": { property: "fontSize", value: "64px" },
```

---

## 📁 File Structure

```
project/
├── index.html     ← tumhari HTML file
└── script.js      ← ChaiTailwind ka engine
```

---

## ⚠️ Limitations

- **Runtime pe kaam karta hai** — real Tailwind se thoda slow ho sakta hai bade pages pe
- **No responsive classes** — abhi `sm:`, `md:`, `lg:` breakpoints nahi hain
- **No hover/focus** — yeh is version mein nahi hain
- **Dynamic elements** — agar JS se baad mein elements add karo toh `applyChaiStyles()` dobara call karna hoga

---

## 👨‍💻 Author

**Ved** — Yeh project ek learning experiment ke taur pe banaya gaya tha, yeh samajhne ke liye ki Tailwind CSS ke andar actually kya hota hai.

---

_☕ Chai piyo, code karo._
