const tips = [
    "Tip 1: Always comment your code.",
    "Tip 2: Use meaningful variable names.",
    "Tip 3: Keep functions short and focused.",
    "Tip 4: Regularly commit your code to version control.",
    "Tip 5: Write unit tests for your functions.",
    "Tip 6: Keep your code DRY (Don't Repeat Yourself).",
    "Tip 7: Use a linter to catch errors early.",
    "Tip 8: Refactor your code regularly to improve readability.",
    "Tip 9: Learn and follow the coding standards of your language.",
    "Tip 10: Optimize your code for performance.",
    "Tip 11: Use descriptive commit messages.",
    "Tip 12: Break down complex problems into smaller parts.",
    "Tip 13: Stay updated with the latest developments in your technology stack.",
    "Tip 14: Practice pair programming to improve your skills.",
    "Tip 15: Always back up your work."
];

const today = new Date();
const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
const tipIndex = dayOfYear % tips.length;

document.getElementById('tip').textContent = tips[tipIndex];
