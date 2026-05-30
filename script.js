const now = new Date();

document.getElementById("year").textContent = now.getFullYear();

const careerStart = new Date(2012, 4, 1); // May 2012
const yearsExp = Math.floor((now - careerStart) / (365.25 * 24 * 60 * 60 * 1000));
document.getElementById("years-exp").textContent = yearsExp;
