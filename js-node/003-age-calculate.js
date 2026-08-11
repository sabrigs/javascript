// Global variable
const currentYear = 2026;

// Functions
function calculateAge(birthYear) {
    const age = currentYear - birthYear;
    return age;
}

// Execute
const result = calculateAge(1997);

// Output
console.log(result);