const chaiStyles = {
  "chai-p-0": { property: "padding", value: "0" },
  "chai-p-1": { property: "padding", value: "8px" },
  "chai-p-2": { property: "padding", value: "16px" },
  "chai-p-3": { property: "padding", value: "24px" },
  "chai-p-4": { property: "padding", value: "32px" },
  "chai-p-6": { property: "padding", value: "48px" },
  "chai-px-1": { property: "paddingInline", value: "8px" },
  "chai-px-2": { property: "paddingInline", value: "16px" },
  "chai-px-4": { property: "paddingInline", value: "32px" },
  "chai-py-1": { property: "paddingBlock", value: "8px" },
  "chai-py-2": { property: "paddingBlock", value: "16px" },
  "chai-py-4": { property: "paddingBlock", value: "32px" },

  "chai-m-0": { property: "margin", value: "0" },
  "chai-m-1": { property: "margin", value: "8px" },
  "chai-m-2": { property: "margin", value: "16px" },
  "chai-m-3": { property: "margin", value: "24px" },
  "chai-m-4": { property: "margin", value: "32px" },
  "chai-mx-auto": { property: "margin", value: "0 auto" },
  "chai-mt-1": { property: "marginTop", value: "8px" },
  "chai-mt-2": { property: "marginTop", value: "16px" },
  "chai-mb-1": { property: "marginBottom", value: "8px" },
  "chai-mb-2": { property: "marginBottom", value: "16px" },

  "chai-bg-black": { property: "backgroundColor", value: "#000000" },
  "chai-bg-white": { property: "backgroundColor", value: "#ffffff" },
  "chai-bg-red": { property: "backgroundColor", value: "#ef4444" },
  "chai-bg-blue": { property: "backgroundColor", value: "#3b82f6" },
  "chai-bg-green": { property: "backgroundColor", value: "#22c55e" },
  "chai-bg-yellow": { property: "backgroundColor", value: "#eab308" },
  "chai-bg-gray": { property: "backgroundColor", value: "#6b7280" },
  "chai-bg-orange": { property: "backgroundColor", value: "#f97316" },
  "chai-bg-pink": { property: "backgroundColor", value: "#ec4899" },
  "chai-bg-purple": { property: "backgroundColor", value: "#8b5cf6" },
  "chai-bg-darkgray": { property: "backgroundColor", value: "#1f1f1f" },
  "chai-bg-lightgray": { property: "backgroundColor", value: "#f3f4f6" },

  "chai-color-red": { property: "color", value: "#ef4444" },
  "chai-color-white": { property: "color", value: "#ffffff" },
  "chai-color-black": { property: "color", value: "#000000" },
  "chai-color-blue": { property: "color", value: "#3b82f6" },
  "chai-color-green": { property: "color", value: "#22c55e" },
  "chai-color-gray": { property: "color", value: "#6b7280" },
  "chai-color-orange": { property: "color", value: "#f97316" },
  "chai-color-pink": { property: "color", value: "#ec4899" },
  "chai-color-purple": { property: "color", value: "#8b5cf6" },
  "chai-color-yellow": { property: "color", value: "#eab308" },
  "chai-color-muted": { property: "color", value: "#9ca3af" },

  "chai-text-xs": { property: "fontSize", value: "12px" },
  "chai-text-sm": { property: "fontSize", value: "14px" },
  "chai-text-md": { property: "fontSize", value: "18px" },
  "chai-text-lg": { property: "fontSize", value: "24px" },
  "chai-text-xl": { property: "fontSize", value: "32px" },
  "chai-text-2xl": { property: "fontSize", value: "40px" },
  "chai-text-3xl": { property: "fontSize", value: "52px" },

  "chai-font-thin": { property: "fontWeight", value: "100" },
  "chai-font-light": { property: "fontWeight", value: "300" },
  "chai-font-normal": { property: "fontWeight", value: "400" },
  "chai-font-medium": { property: "fontWeight", value: "500" },
  "chai-font-semibold": { property: "fontWeight", value: "600" },
  "chai-font-bold": { property: "fontWeight", value: "700" },
  "chai-font-extrabold": { property: "fontWeight", value: "800" },

  "chai-font-sans": { property: "fontFamily", value: "sans-serif" },
  "chai-font-serif": { property: "fontFamily", value: "Georgia, serif" },
  "chai-font-mono": { property: "fontFamily", value: "'DM Mono', monospace" },
  "chai-font-syne": { property: "fontFamily", value: "'Syne', sans-serif" },
  "chai-font-poppins": {
    property: "fontFamily",
    value: "'Poppins', sans-serif",
  },
  "chai-font-outfit": {
    property: "fontFamily",
    value: "'Outfit', sans-serif",
  },

  "chai-leading-tight": { property: "lineHeight", value: "1.2" },
  "chai-leading-normal": { property: "lineHeight", value: "1.5" },
  "chai-leading-loose": { property: "lineHeight", value: "1.8" },

  "chai-tracking-tight": { property: "letterSpacing", value: "-0.5px" },
  "chai-tracking-wide": { property: "letterSpacing", value: "1.5px" },
  "chai-tracking-wider": { property: "letterSpacing", value: "3px" },

  "chai-text-left": { property: "textAlign", value: "left" },
  "chai-text-center": { property: "textAlign", value: "center" },
  "chai-text-right": { property: "textAlign", value: "right" },

  "chai-uppercase": { property: "textTransform", value: "uppercase" },
  "chai-lowercase": { property: "textTransform", value: "lowercase" },
  "chai-capitalize": { property: "textTransform", value: "capitalize" },

  "chai-underline": { property: "textDecoration", value: "underline" },
  "chai-line-through": { property: "textDecoration", value: "line-through" },
  "chai-no-underline": { property: "textDecoration", value: "none" },

  "chai-rounded-none": { property: "borderRadius", value: "0" },
  "chai-rounded-sm": { property: "borderRadius", value: "4px" },
  "chai-rounded-md": { property: "borderRadius", value: "8px" },
  "chai-rounded-lg": { property: "borderRadius", value: "16px" },
  "chai-rounded-xl": { property: "borderRadius", value: "24px" },
  "chai-rounded-full": { property: "borderRadius", value: "9999px" },

  "chai-border": { property: "border", value: "1px solid #d1d5db" },
  "chai-border-2": { property: "borderWidth", value: "2px" },
  "chai-border-none": { property: "border", value: "none" },
  "chai-border-red": { property: "borderColor", value: "#ef4444" },
  "chai-border-blue": { property: "borderColor", value: "#3b82f6" },
  "chai-border-black": { property: "borderColor", value: "#000000" },
  "chai-border-white": { property: "borderColor", value: "#ffffff" },
  "chai-border-yellow": { property: "borderColor", value: "#eab308" },
  "chai-border-gray": { property: "borderColor", value: "#6b7280" },

  "chai-block": { property: "display", value: "block" },
  "chai-inline": { property: "display", value: "inline" },
  "chai-inline-block": { property: "display", value: "inline-block" },
  "chai-flex": { property: "display", value: "flex" },
  "chai-inline-flex": { property: "display", value: "inline-flex" },
  "chai-hidden": { property: "display", value: "none" },

  "chai-flex-row": { property: "flexDirection", value: "row" },
  "chai-flex-col": { property: "flexDirection", value: "column" },
  "chai-flex-wrap": { property: "flexWrap", value: "wrap" },
  "chai-flex-nowrap": { property: "flexWrap", value: "nowrap" },
  "chai-justify-center": { property: "justifyContent", value: "center" },
  "chai-justify-between": {
    property: "justifyContent",
    value: "space-between",
  },
  "chai-justify-end": { property: "justifyContent", value: "flex-end" },
  "chai-justify-start": { property: "justifyContent", value: "flex-start" },
  "chai-items-center": { property: "alignItems", value: "center" },
  "chai-items-start": { property: "alignItems", value: "flex-start" },
  "chai-items-end": { property: "alignItems", value: "flex-end" },
  "chai-gap-1": { property: "gap", value: "8px" },
  "chai-gap-2": { property: "gap", value: "16px" },
  "chai-gap-4": { property: "gap", value: "32px" },

  "chai-w-full": { property: "width", value: "100%" },
  "chai-w-half": { property: "width", value: "50%" },
  "chai-w-auto": { property: "width", value: "auto" },
  "chai-h-full": { property: "height", value: "100%" },
  "chai-h-screen": { property: "height", value: "100vh" },
  "chai-h-auto": { property: "height", value: "auto" },
  "chai-min-h-screen": { property: "minHeight", value: "100vh" },

  "chai-opacity-0": { property: "opacity", value: "0" },
  "chai-opacity-25": { property: "opacity", value: "0.25" },
  "chai-opacity-50": { property: "opacity", value: "0.50" },
  "chai-opacity-75": { property: "opacity", value: "0.75" },
  "chai-opacity-100": { property: "opacity", value: "1" },

  "chai-shadow-none": { property: "boxShadow", value: "none" },
  "chai-shadow": {
    property: "boxShadow",
    value: "0 2px 8px rgba(0,0,0,0.15)",
  },
  "chai-shadow-lg": {
    property: "boxShadow",
    value: "0 8px 24px rgba(0,0,0,0.2)",
  },

  "chai-cursor-pointer": { property: "cursor", value: "pointer" },
  "chai-cursor-default": { property: "cursor", value: "default" },
  "chai-cursor-not-allowed": { property: "cursor", value: "not-allowed" },
  "chai-overflow-hidden": { property: "overflow", value: "hidden" },
  "chai-overflow-auto": { property: "overflow", value: "auto" },
  "chai-select-none": { property: "userSelect", value: "none" },
  "chai-italic": { property: "fontStyle", value: "italic" },
  "chai-not-italic": { property: "fontStyle", value: "normal" },
  "chai-list-none": { property: "listStyle", value: "none" },
  "chai-pointer-events-none": { property: "pointerEvents", value: "none" },
};

function applyChaiStyles() {
  document.querySelectorAll("*").forEach((element) => {
    element.classList.forEach((cls) => {
      if (cls in chaiStyles) {
        const { property, value } = chaiStyles[cls];
        element.style[property] = value;
      }
    });
  });
}

if (typeof window !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", applyChaiStyles);
  } else {
    applyChaiStyles()
  }
}

export { chaiStyles, applyChaiStyles };
export default applyChaiStyles;
