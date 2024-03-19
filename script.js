document.addEventListener("DOMContentLoaded", function() {
    const exerciseForm = document.getElementById("exerciseForm");
    const exerciseResults = document.getElementById("exerciseResults");

    exerciseForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Clear previous results
        exerciseResults.innerHTML = "";

        // Get user input
        const operation = document.getElementById("operation").value;
        const min = parseInt(document.getElementById("min").value);
        const max = parseInt(document.getElementById("max").value);
        const numExercises = parseInt(document.getElementById("exercises").value);

        // Generate and display exercises
        for (let i = 0; i < numExercises; i++) {
            const num1 = getRandomNumber(min, max);
            const num2 = getRandomNumber(min, max);
            let exercise;
            let answer;

            switch (operation) {
                case "addition":
                    exercise = `${num1} + ${num2}`;
                    answer = num1 + num2;
                    break;
                case "subtraction":
                    exercise = `${num1} - ${num2}`;
                    answer = num1 - num2;
                    break;
                case "multiplication":
                    exercise = `${num1} × ${num2}`;
                    answer = num1 * num2;
                    break;
                case "division":
                    if (num2 === 0) {
                        exercise = "Cannot divide by zero";
                        answer = "";
                    } else {
                        exercise = `${num1} ÷ ${num2}`;
                        answer = num1 / num2;
                    }
                    break;
                default:
                    exercise = "Invalid operation";
                    answer = "";
            }

            const exerciseElement = document.createElement("p");
            exerciseElement.textContent = `${exercise} = `;
            const answerElement = document.createElement("span");
            answerElement.textContent = answer;
            exerciseElement.appendChild(answerElement);
            exerciseResults.appendChild(exerciseElement);
        }
    });

    // Function to generate a random number between min (inclusive) and max (inclusive)
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
});