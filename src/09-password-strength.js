/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
  let uppercaseCount = 0;
  let lowercaseCount = 0;
  let numberCount = 0;
  let symbolCount = 0;
  let criteriaCount = 0;

  if (typeof password !== "string" || password.length === 0) {
    return "weak"
  }

  for (let char of password) {
    if (char === char.toUpperCase() && char !== char.toLowerCase()) {
      uppercaseCount++;
    }
  }
  for (let char of password) {
    if (char === char.toLowerCase() && char !== char.toUpperCase()) {
      lowercaseCount++;
    }
  }
  for (let char of password) {
    if (!isNaN(char) && char !== " ") {
      numberCount++;
    }
  }
  for (let char of password) {
    if ("!@#$%^&*()_+-=[]{}|;:,.<>?".includes(char)) {
      symbolCount++;
    }
  }
  const criterias = {
    1: password.length >= 8,
    2: uppercaseCount >= 1,
    3: lowercaseCount >= 1,
    4: numberCount >= 1,
    5: symbolCount >= 1
  }

  for (let i = 1; i <= 5; i++) {
    if (criterias[i] === true) {
      criteriaCount++;
    }
  }

  if (criteriaCount == 0 || criteriaCount == 1) {
    return "weak"
  }
  else if (criteriaCount == 2 || criteriaCount == 3) {
    return "medium"
  }
  else if (criteriaCount == 4) {
    return "strong"
  }
  else {
    return "very strong"
  }

}


