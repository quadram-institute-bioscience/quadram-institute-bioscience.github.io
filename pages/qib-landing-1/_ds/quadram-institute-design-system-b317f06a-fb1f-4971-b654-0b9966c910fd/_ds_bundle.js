/* @ds-bundle: {"format":4,"namespace":"QuadramInstituteDesignSystem_b317f0","components":[{"name":"DiamondMark","sourcePath":"components/brand/DiamondMark.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Stat","sourcePath":"components/core/Stat.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/Radio.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/brand/DiamondMark.jsx":"e9b1f22e51fc","components/core/Badge.jsx":"f92475657ec7","components/core/Card.jsx":"cf2136976ab4","components/core/Stat.jsx":"2bb0f9ea36e2","components/core/Tag.jsx":"f6225e8f7191","components/feedback/Dialog.jsx":"2ac92f016ac4","components/feedback/Tooltip.jsx":"1efa6c6b274a","components/forms/Button.jsx":"985f8a54f044","components/forms/Checkbox.jsx":"638e6493b3b1","components/forms/IconButton.jsx":"1cd5754d0ae6","components/forms/Input.jsx":"de93d8fa7b69","components/forms/Radio.jsx":"265f94f24a01","components/forms/Select.jsx":"356020b16f6f","components/forms/Switch.jsx":"f5c983138ec7","components/navigation/Tabs.jsx":"897970b9ae20"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.QuadramInstituteDesignSystem_b317f0 = window.QuadramInstituteDesignSystem_b317f0 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/DiamondMark.jsx
try { (() => {
/** The Quadram diamond motif — a tilted square. Use as a bullet, accent or loader. */
function DiamondMark({
  size = 24,
  color = "var(--qi-diamond-teal)",
  filled = true,
  style = {}
}) {
  const s = typeof size === "number" ? size + "px" : size;
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      display: "inline-block",
      width: s,
      height: s,
      background: filled ? color : "transparent",
      border: filled ? "none" : `3px solid ${color}`,
      transform: "rotate(12deg)",
      borderRadius: "2px",
      flex: "0 0 auto",
      ...style
    }
  });
}
Object.assign(__ds_scope, { DiamondMark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/DiamondMark.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
/** Small status/label pill. tone: neutral | accent | impact | success | warning | danger | info */
function Badge({
  children,
  tone = "neutral",
  size = "md",
  style = {}
}) {
  const tones = {
    neutral: {
      background: "var(--qi-neutral-100)",
      color: "var(--qi-charcoal)"
    },
    accent: {
      background: "var(--qi-dark-green-tint)",
      color: "var(--qi-dark-green)"
    },
    impact: {
      background: "var(--qi-acid-green)",
      color: "var(--qi-charcoal)"
    },
    success: {
      background: "#E4F0E3",
      color: "var(--qi-grass-green)"
    },
    warning: {
      background: "var(--qi-orange-tint)",
      color: "#B8590F"
    },
    danger: {
      background: "var(--qi-orange-tint)",
      color: "var(--qi-dark-orange)"
    },
    info: {
      background: "var(--qi-cerulean-tint)",
      color: "var(--qi-cerulean)"
    }
  };
  const sizes = {
    sm: {
      fontSize: "0.6875rem",
      padding: "0.15rem 0.5rem"
    },
    md: {
      fontSize: "0.75rem",
      padding: "0.22rem 0.6rem"
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "0.06em",
      borderRadius: "var(--radius-sm)",
      lineHeight: 1.2,
      ...sizes[size],
      ...tones[tone],
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Surface container. variant: plain | outlined | elevated | inverse | accent-top */
function Card({
  children,
  variant = "elevated",
  padding = "1.5rem",
  style = {},
  onClick,
  ...rest
}) {
  const variants = {
    plain: {
      background: "#fff",
      border: "1px solid transparent"
    },
    outlined: {
      background: "#fff",
      border: "1px solid var(--border-subtle)"
    },
    elevated: {
      background: "#fff",
      border: "1px solid var(--qi-neutral-100)",
      boxShadow: "var(--shadow-md)"
    },
    inverse: {
      background: "var(--qi-charcoal)",
      border: "1px solid var(--qi-charcoal)",
      color: "var(--qi-antiflash-white)"
    },
    "accent-top": {
      background: "#fff",
      border: "1px solid var(--qi-neutral-100)",
      boxShadow: "var(--shadow-sm)",
      borderTop: "4px solid var(--qi-dark-green)"
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    style: {
      borderRadius: "var(--radius-md)",
      padding,
      fontFamily: "var(--font-body)",
      color: variant === "inverse" ? "var(--qi-antiflash-white)" : "var(--qi-charcoal)",
      cursor: onClick ? "pointer" : "default",
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Stat.jsx
try { (() => {
/** Headline data point. The brand leans on bold numbers for impact. */
function Stat({
  value,
  label,
  sublabel,
  accent = "dark-green",
  align = "left",
  style = {}
}) {
  const colors = {
    "dark-green": "var(--qi-dark-green)",
    "acid-green": "var(--qi-acid-green)",
    charcoal: "var(--qi-charcoal)",
    cerulean: "var(--qi-cerulean)",
    orange: "var(--qi-dark-orange)"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: align,
      fontFamily: "var(--font-body)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "3.25rem",
      lineHeight: 0.95,
      letterSpacing: "-0.01em",
      color: colors[accent]
    }
  }, value), label && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "0.5rem",
      fontWeight: 700,
      fontSize: "0.95rem",
      color: "var(--qi-charcoal)"
    }
  }, label), sublabel && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "0.15rem",
      fontSize: "0.8125rem",
      color: "var(--text-muted)"
    }
  }, sublabel));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stat.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
/** Removable / selectable tag for filters and keywords. */
function Tag({
  children,
  selected = false,
  onRemove,
  onClick,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.4rem",
      fontFamily: "var(--font-body)",
      fontSize: "0.8125rem",
      fontWeight: 500,
      lineHeight: 1,
      padding: "0.35rem 0.7rem",
      borderRadius: "var(--radius-pill)",
      cursor: onClick ? "pointer" : "default",
      background: selected ? "var(--qi-dark-green)" : "#fff",
      color: selected ? "#fff" : "var(--qi-charcoal)",
      border: `1.5px solid ${selected ? "var(--qi-dark-green)" : "var(--border-subtle)"}`,
      transition: "all var(--duration-fast) var(--ease-standard)",
      ...style
    }
  }, children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Remove",
    onClick: e => {
      e.stopPropagation();
      onRemove();
    },
    style: {
      border: "none",
      background: "none",
      cursor: "pointer",
      color: "inherit",
      fontSize: "0.9rem",
      lineHeight: 1,
      padding: 0,
      display: "inline-flex"
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
/** Modal dialog with overlay. Controlled via open/onClose. */
function Dialog({
  open,
  onClose,
  title,
  children,
  footer,
  width = 480,
  style = {}
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 1000,
      background: "rgba(27,37,43,0.55)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "1.5rem"
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      background: "#fff",
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-lg)",
      width: "100%",
      maxWidth: width,
      fontFamily: "var(--font-body)",
      overflow: "hidden",
      borderTop: "4px solid var(--qi-dark-green)",
      ...style
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: "1rem",
      padding: "1.25rem 1.5rem 0.75rem"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "1.35rem",
      color: "var(--qi-charcoal)"
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Close",
    onClick: onClose,
    style: {
      border: "none",
      background: "none",
      cursor: "pointer",
      fontSize: "1.35rem",
      lineHeight: 1,
      color: "var(--text-muted)",
      padding: 0
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0.5rem 1.5rem 1.25rem",
      fontSize: "0.95rem",
      lineHeight: 1.55,
      color: "var(--qi-charcoal)"
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: "0.6rem",
      padding: "0.75rem 1.5rem 1.25rem",
      borderTop: "1px solid var(--border-subtle)"
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
/** Hover tooltip. Wraps a single child trigger. */
function Tooltip({
  label,
  placement = "top",
  children,
  style = {}
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    bottom: {
      top: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    left: {
      right: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    },
    right: {
      left: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, children, show && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      zIndex: 900,
      whiteSpace: "nowrap",
      background: "var(--qi-charcoal)",
      color: "var(--qi-antiflash-white)",
      fontFamily: "var(--font-body)",
      fontSize: "0.75rem",
      fontWeight: 500,
      padding: "0.35rem 0.6rem",
      borderRadius: "var(--radius-sm)",
      boxShadow: "var(--shadow-md)",
      pointerEvents: "none",
      ...pos[placement]
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Quadram Institute Button.
 * Variants map to the brand's usage rules:
 *  - primary  : Dark Green fill, white text (the default CTA)
 *  - impact   : Acid Green fill, Charcoal text (high-impact, use sparingly)
 *  - secondary: Charcoal outline on transparent
 *  - ghost    : text-only, Dark Green
 *  - inverse  : for use on Charcoal / dark surfaces
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  iconLeft = null,
  iconRight = null,
  type = "button",
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      fontSize: "0.8125rem",
      padding: "0.4rem 0.85rem",
      gap: "0.4rem"
    },
    md: {
      fontSize: "0.9375rem",
      padding: "0.62rem 1.25rem",
      gap: "0.5rem"
    },
    lg: {
      fontSize: "1.0625rem",
      padding: "0.82rem 1.6rem",
      gap: "0.6rem"
    }
  };
  const variants = {
    primary: {
      background: "var(--qi-dark-green)",
      color: "#fff",
      border: "2px solid var(--qi-dark-green)"
    },
    impact: {
      background: "var(--qi-acid-green)",
      color: "var(--qi-charcoal)",
      border: "2px solid var(--qi-acid-green)"
    },
    secondary: {
      background: "transparent",
      color: "var(--qi-charcoal)",
      border: "2px solid var(--qi-charcoal)"
    },
    ghost: {
      background: "transparent",
      color: "var(--qi-dark-green)",
      border: "2px solid transparent"
    },
    inverse: {
      background: "#fff",
      color: "var(--qi-charcoal)",
      border: "2px solid #fff"
    }
  };
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "var(--font-body)",
    fontWeight: 700,
    lineHeight: 1,
    letterSpacing: "0.01em",
    borderRadius: "var(--radius-sm)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    transition: "background var(--duration-fast) var(--ease-standard), color var(--duration-fast) var(--ease-standard), transform var(--duration-fast) var(--ease-standard), filter var(--duration-fast) var(--ease-standard)",
    whiteSpace: "nowrap",
    ...sizes[size],
    ...variants[variant],
    ...style
  };
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const hoverStyle = !disabled && hover ? {
    filter: "brightness(0.93)",
    ...(variant === "secondary" ? {
      background: "var(--qi-charcoal)",
      color: "#fff"
    } : {}),
    ...(variant === "ghost" ? {
      background: "var(--qi-dark-green-tint)"
    } : {})
  } : {};
  const activeStyle = !disabled && active ? {
    transform: "translateY(1px)"
  } : {};
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      ...base,
      ...hoverStyle,
      ...activeStyle
    }
  }, rest), iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex"
    }
  }, iconLeft), children, iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex"
    }
  }, iconRight));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Checkbox with label. Dark Green when checked. */
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  id,
  style = {},
  ...rest
}) {
  const cbId = id || (label ? "cb-" + String(label).replace(/\s+/g, "-").toLowerCase() : undefined);
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;
  const toggle = e => {
    if (disabled) return;
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: cbId,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.6rem",
      fontFamily: "var(--font-body)",
      fontSize: "0.9375rem",
      color: "var(--qi-charcoal)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flex: "0 0 auto"
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: cbId,
    type: "checkbox",
    checked: on,
    onChange: toggle,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: "100%",
      height: "100%",
      margin: 0,
      cursor: "inherit"
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      position: "absolute",
      inset: 0,
      border: `2px solid ${on ? "var(--qi-dark-green)" : "var(--qi-neutral-400)"}`,
      background: on ? "var(--qi-dark-green)" : "#fff",
      borderRadius: "var(--radius-sm)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "background var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)"
    }
  }, on && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 6.2 L4.6 9 L10 3"
  })))), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Square icon-only button. Pass a single icon node as children. */
function IconButton({
  children,
  variant = "secondary",
  size = "md",
  disabled = false,
  "aria-label": ariaLabel,
  onClick,
  style = {},
  ...rest
}) {
  const dims = {
    sm: 32,
    md: 40,
    lg: 48
  };
  const d = dims[size];
  const variants = {
    primary: {
      background: "var(--qi-dark-green)",
      color: "#fff",
      border: "2px solid var(--qi-dark-green)"
    },
    impact: {
      background: "var(--qi-acid-green)",
      color: "var(--qi-charcoal)",
      border: "2px solid var(--qi-acid-green)"
    },
    secondary: {
      background: "transparent",
      color: "var(--qi-charcoal)",
      border: "2px solid var(--border-subtle)"
    },
    ghost: {
      background: "transparent",
      color: "var(--qi-charcoal)",
      border: "2px solid transparent"
    }
  };
  const [hover, setHover] = React.useState(false);
  const hoverStyle = !disabled && hover ? variant === "secondary" || variant === "ghost" ? {
    background: "var(--qi-dark-green-tint)",
    color: "var(--qi-dark-green)",
    borderColor: "transparent"
  } : {
    filter: "brightness(0.93)"
  } : {};
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": ariaLabel,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: d,
      height: d,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-sm)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      transition: "background var(--duration-fast) var(--ease-standard), color var(--duration-fast) var(--ease-standard), filter var(--duration-fast) var(--ease-standard)",
      ...variants[variant],
      ...hoverStyle,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Text input with optional label, helper text and error / leading icon. */
function Input({
  label,
  id,
  type = "text",
  placeholder,
  value,
  defaultValue,
  onChange,
  helperText,
  error = false,
  disabled = false,
  iconLeft = null,
  style = {},
  ...rest
}) {
  const inputId = id || (label ? "in-" + label.replace(/\s+/g, "-").toLowerCase() : undefined);
  const [focus, setFocus] = React.useState(false);
  const borderColor = error ? "var(--qi-dark-orange)" : focus ? "var(--qi-dark-green)" : "var(--border-subtle)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "0.35rem",
      fontFamily: "var(--font-body)",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: "0.8125rem",
      fontWeight: 700,
      color: "var(--qi-charcoal)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      background: disabled ? "var(--qi-neutral-100)" : "#fff",
      border: `1.5px solid ${borderColor}`,
      borderRadius: "var(--radius-sm)",
      padding: "0 0.75rem",
      boxShadow: focus && !error ? "0 0 0 3px var(--qi-dark-green-tint)" : "none",
      transition: "border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)"
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      color: "var(--text-muted)"
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      border: "none",
      outline: "none",
      background: "transparent",
      fontFamily: "var(--font-body)",
      fontSize: "0.9375rem",
      color: "var(--qi-charcoal)",
      padding: "0.6rem 0"
    }
  }, rest))), helperText && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.75rem",
      color: error ? "var(--qi-dark-orange)" : "var(--text-muted)"
    }
  }, helperText));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
/** Radio group. Pass options=[{value,label}]. */
function RadioGroup({
  name,
  options = [],
  value,
  defaultValue,
  onChange,
  disabled = false,
  style = {}
}) {
  const [internal, setInternal] = React.useState(defaultValue);
  const isControlled = value !== undefined;
  const current = isControlled ? value : internal;
  const pick = v => {
    if (disabled) return;
    if (!isControlled) setInternal(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "0.65rem",
      fontFamily: "var(--font-body)",
      ...style
    }
  }, options.map(o => {
    const on = current === o.value;
    return /*#__PURE__*/React.createElement("label", {
      key: o.value,
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: "0.6rem",
        fontSize: "0.9375rem",
        color: "var(--qi-charcoal)",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: "relative",
        width: 20,
        height: 20,
        flex: "0 0 auto"
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: name,
      checked: on,
      onChange: () => pick(o.value),
      disabled: disabled,
      style: {
        position: "absolute",
        opacity: 0,
        width: "100%",
        height: "100%",
        margin: 0,
        cursor: "inherit"
      }
    }), /*#__PURE__*/React.createElement("span", {
      "aria-hidden": true,
      style: {
        position: "absolute",
        inset: 0,
        borderRadius: "50%",
        border: `2px solid ${on ? "var(--qi-dark-green)" : "var(--qi-neutral-400)"}`,
        background: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "border-color var(--duration-fast) var(--ease-standard)"
      }
    }, on && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 10,
        height: 10,
        borderRadius: "50%",
        background: "var(--qi-dark-green)"
      }
    }))), o.label);
  }));
}

/** Alias — the radio primitive is exposed as `Radio`. */
const Radio = RadioGroup;
Object.assign(__ds_scope, { RadioGroup, Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Styled native select. Pass options as [{value,label}] or children <option>s. */
function Select({
  label,
  id,
  options = [],
  value,
  defaultValue,
  onChange,
  disabled = false,
  placeholder,
  style = {},
  children,
  ...rest
}) {
  const selId = id || (label ? "sel-" + label.replace(/\s+/g, "-").toLowerCase() : undefined);
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "0.35rem",
      fontFamily: "var(--font-body)",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: selId,
    style: {
      fontSize: "0.8125rem",
      fontWeight: 700,
      color: "var(--qi-charcoal)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selId,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: "none",
      WebkitAppearance: "none",
      width: "100%",
      fontFamily: "var(--font-body)",
      fontSize: "0.9375rem",
      color: "var(--qi-charcoal)",
      background: disabled ? "var(--qi-neutral-100)" : "#fff",
      border: `1.5px solid ${focus ? "var(--qi-dark-green)" : "var(--border-subtle)"}`,
      borderRadius: "var(--radius-sm)",
      padding: "0.62rem 2.25rem 0.62rem 0.75rem",
      cursor: disabled ? "not-allowed" : "pointer",
      boxShadow: focus ? "0 0 0 3px var(--qi-dark-green-tint)" : "none",
      transition: "border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)"
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label)), children), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      position: "absolute",
      right: "0.75rem",
      top: "50%",
      transform: "translateY(-50%)",
      pointerEvents: "none",
      color: "var(--qi-dark-green)",
      fontSize: "0.7rem"
    }
  }, "\u25BC")));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
/** Toggle switch. Dark Green when on. */
function Switch({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  style = {}
}) {
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;
  const toggle = () => {
    if (disabled) return;
    const next = !on;
    if (!isControlled) setInternal(next);
    onChange && onChange(next);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.65rem",
      fontFamily: "var(--font-body)",
      fontSize: "0.9375rem",
      color: "var(--qi-charcoal)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "switch",
    "aria-checked": on,
    onClick: toggle,
    disabled: disabled,
    style: {
      width: 44,
      height: 24,
      borderRadius: 999,
      border: "none",
      position: "relative",
      flex: "0 0 auto",
      background: on ? "var(--qi-dark-green)" : "var(--qi-neutral-300)",
      cursor: "inherit",
      transition: "background var(--duration-base) var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      position: "absolute",
      top: 3,
      left: on ? 23 : 3,
      width: 18,
      height: 18,
      borderRadius: "50%",
      background: "#fff",
      boxShadow: "var(--shadow-sm)",
      transition: "left var(--duration-base) var(--ease-standard)"
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/** Underline tab bar. tabs=[{id,label}]. */
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  style = {}
}) {
  const [internal, setInternal] = React.useState(defaultValue ?? (tabs[0] && tabs[0].id));
  const isControlled = value !== undefined;
  const current = isControlled ? value : internal;
  const pick = id => {
    if (!isControlled) setInternal(id);
    onChange && onChange(id);
  };
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: "flex",
      gap: "0.25rem",
      borderBottom: "2px solid var(--border-subtle)",
      fontFamily: "var(--font-body)",
      ...style
    }
  }, tabs.map(t => {
    const on = current === t.id;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      role: "tab",
      "aria-selected": on,
      onClick: () => pick(t.id),
      style: {
        border: "none",
        background: "none",
        cursor: "pointer",
        fontFamily: "var(--font-body)",
        fontWeight: 700,
        fontSize: "0.9375rem",
        padding: "0.7rem 1rem",
        marginBottom: "-2px",
        color: on ? "var(--qi-dark-green)" : "var(--text-muted)",
        borderBottom: `3px solid ${on ? "var(--qi-dark-green)" : "transparent"}`,
        transition: "color var(--duration-fast) var(--ease-standard)"
      }
    }, t.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

__ds_ns.DiamondMark = __ds_scope.DiamondMark;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
