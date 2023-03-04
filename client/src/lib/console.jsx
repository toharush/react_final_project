const consoleError = console.error;
const consoleWarn = console.warn;

const SUPPRESSED_ERRORS = [
  "A non-serializable value was detected",
  "You provided a `checked` prop to a form field without an `onChange`",
  "Warning: `value` prop on `input`",
];

const SUPPRESSED_WARNINGS = [
  "MUI: You have provided an out-of-range value `null` for the select component.",
  "Warning: `value` prop on `input`",
];

const filterErrors = (msg, ...args) => {
  if (!SUPPRESSED_ERRORS.some((entry) => msg.includes(entry))) {
    // consoleError(msg, ...args);
  }
};

const filterWraning = (msg, ...args) => {
  if (!SUPPRESSED_WARNINGS.some((entry) => msg.includes(entry))) {
    consoleWarn(msg, ...args);
  }
};

console.error = filterErrors;
console.warn = filterWraning;
