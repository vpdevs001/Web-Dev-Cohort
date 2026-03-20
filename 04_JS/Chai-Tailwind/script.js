document.addEventListener("DOMContentLoaded", () => {
  const chaiStyles = {
    "chai-p-0": { property: "padding", value: "0" },
    "chai-p-1": { property: "padding", value: "8px" },
    "chai-p-2": { property: "padding", value: "16px" },
    "chai-p-4": { property: "padding", value: "32px" },
    "chai-px-2": { property: "paddingInline", value: "16px" },
    "chai-py-2": { property: "paddingBlock", value: "16px" },

    "chai-m-0": { property: "margin", value: "0" },
    "chai-m-1": { property: "margin", value: "8px" },
    "chai-m-2": { property: "margin", value: "16px" },
    "chai-m-4": { property: "margin", value: "32px" },
    "chai-mx-auto": { property: "margin", value: "0 auto" },

    "chai-bg-black": { property: "backgroundColor", value: "#000000" },
    "chai-bg-white": { property: "backgroundColor", value: "#ffffff" },
    "chai-bg-red": { property: "backgroundColor", value: "#ef4444" },
    "chai-bg-blue": { property: "backgroundColor", value: "#3b82f6" },
    "chai-bg-green": { property: "backgroundColor", value: "#22c55e" },
    "chai-bg-yellow": { property: "backgroundColor", value: "#eab308" },
    "chai-bg-gray": { property: "backgroundColor", value: "#6b7280" },

    "chai-color-red": { property: "color", value: "#ef4444" },
    "chai-color-white": { property: "color", value: "#ffffff" },
    "chai-color-black": { property: "color", value: "#000000" },
    "chai-color-blue": { property: "color", value: "#3b82f6" },
    "chai-color-green": { property: "color", value: "#22c55e" },
    "chai-color-gray": { property: "color", value: "#6b7280" },

    "chai-text-sm": { property: "fontSize", value: "14px" },
    "chai-text-md": { property: "fontSize", value: "18px" },
    "chai-text-lg": { property: "fontSize", value: "24px" },
    "chai-text-xl": { property: "fontSize", value: "32px" },

    "chai-font-bold": { property: "fontWeight", value: "bold" },
    "chai-font-normal": { property: "fontWeight", value: "normal" },

    "chai-text-left": { property: "textAlign", value: "left" },
    "chai-text-center": { property: "textAlign", value: "center" },
    "chai-text-right": { property: "textAlign", value: "right" },

    "chai-uppercase": { property: "textTransform", value: "uppercase" },
    "chai-lowercase": { property: "textTransform", value: "lowercase" },
    "chai-capitalize": { property: "textTransform", value: "capitalize" },

    "chai-rounded-sm": { property: "borderRadius", value: "4px" },
    "chai-rounded-md": { property: "borderRadius", value: "8px" },
    "chai-rounded-lg": { property: "borderRadius", value: "16px" },
    "chai-rounded-full": { property: "borderRadius", value: "9999px" },

    "chai-border": { property: "border", value: "1px solid #d1d5db" },
    "chai-border-2": { property: "borderWidth", value: "2px" },
    "chai-border-red": { property: "borderColor", value: "#ef4444" },
    "chai-border-blue": { property: "borderColor", value: "#3b82f6" },
    "chai-border-black": { property: "borderColor", value: "#000000" },

    "chai-block": { property: "display", value: "block" },
    "chai-inline": { property: "display", value: "inline" },
    "chai-flex": { property: "display", value: "flex" },
    "chai-hidden": { property: "display", value: "none" },

    "chai-flex-row": { property: "flexDirection", value: "row" },
    "chai-flex-col": { property: "flexDirection", value: "column" },
    "chai-justify-center": { property: "justifyContent", value: "center" },
    "chai-justify-between": {
      property: "justifyContent",
      value: "space-between",
    },
    "chai-items-center": { property: "alignItems", value: "center" },
    "chai-gap-2": { property: "gap", value: "16px" },
    "chai-gap-4": { property: "gap", value: "32px" },

    "chai-w-full": { property: "width", value: "100%" },
    "chai-w-half": { property: "width", value: "50%" },
    "chai-h-full": { property: "height", value: "100%" },
    "chai-h-screen": { property: "height", value: "100vh" },

    "chai-opacity-25": { property: "opacity", value: "0.25" },
    "chai-opacity-50": { property: "opacity", value: "0.50" },
    "chai-opacity-75": { property: "opacity", value: "0.75" },
    "chai-opacity-100": { property: "opacity", value: "1" },

    "chai-shadow": {
      property: "boxShadow",
      value: "0 2px 8px rgba(0,0,0,0.15)",
    },
    "chai-shadow-lg": {
      property: "boxShadow",
      value: "0 8px 24px rgba(0,0,0,0.2)",
    },

    "chai-cursor-pointer": { property: "cursor", value: "pointer" },
    "chai-overflow-hidden": { property: "overflow", value: "hidden" },
  };

  const allElements = document.querySelectorAll("*");

  function applyChaiStyles() {
    allElements.forEach((element) => {
      const classes = element.classList;

      classes.forEach((cls) => {
        if (cls in chaiStyles) {
          const { property, value } = chaiStyles[cls];
          element.style[property] = value;
        }
      });
    });
  }
  applyChaiStyles();
});
