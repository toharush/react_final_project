const consoleError = console.error;
const SUPPRESSED_WARNINGS = [
  "A non-serializable value was detected",
  "You provided a `checked` prop to a form field without an `onChange`",
];

const filterWarnings = (msg, ...args) => {
  if (!SUPPRESSED_WARNINGS.some((entry) => msg.includes(entry))) {
    consoleError(msg, ...args);
  }
};


console.error = filterWarnings;