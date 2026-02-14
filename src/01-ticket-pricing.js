/**
 * 🎬 The Starlight Cinema
 *
 * You've just been hired at Starlight Cinema! Your first task is to build
 * the automated ticket pricing system. The manager hands you a sticky note
 * with the pricing rules scribbled on it:
 *
 * Age Groups:
 *   - Children (0–12): $8
 *   - Teens (13–17): $12
 *   - Adults (18–59): $15
 *   - Seniors (60+): $10
 *
 * Weekend Surcharge:
 *   - Add $3 on weekends (when isWeekend is true)
 *
 * Rules:
 *   - If age is negative or not a number, return -1
 *   - isWeekend is a boolean
 *
 * @param {number} age - The customer's age
 * @param {boolean} isWeekend - Whether it's a weekend
 * @returns {number} The ticket price, or -1 for invalid input
 */
export function getTicketPrice(age, isWeekend) {
  let childcondition = age >= 0 && age <= 12
  let teencondition = !childcondition && age <= 17
  let adultcondition = !teencondition && age <= 59
  let seniorcondition = age >= 60
  let negativecondition = age<0

  if(age<0){
    return -1
  }
  else if (childcondition) {
    if (isWeekend) {
      return 11
    }
    else {
      return 8
    }
  }
  else if (teencondition) {
    if (isWeekend) {
      return 15
    }
    else {
      return 12
    }
  }
  else if (adultcondition) {
    if (isWeekend) {
      return 18
    }
    else {
      return 15
    }
  }
  else if (seniorcondition) {
    if (isWeekend) {
      return 13
    }
    else {
      return 10
    }
  }

}
