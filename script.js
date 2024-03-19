document.addEventListener("DOMContentLoaded", function() {
    const exerciseForm = document.getElementById("exerciseForm");
    const exerciseResults = document.getElementById("exerciseResults");
    const toggleAnswersBtn = document.getElementById("toggleAnswers");

    exerciseForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Clear previous results
        exerciseResults.innerHTML = "";

        // Get user input
        const operation = document.getElementById("operation").value;
        const upperLength = parseInt(document.getElementById("upper").value);
        const lowerLength = parseInt(document.getElementById("lower").value);
        const numSums = parseInt(document.getElementById("numSums").value);

        // Generate and display exercises
        for (let i = 0; i < numSums; i++) {
            const num1 = generateNumber(upperLength);
            const num2 = generateNumber(lowerLength);
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
            answerElement.classList.add("answer");
            exerciseElement.appendChild(answerElement);
            exerciseResults.appendChild(exerciseElement);
        }
    });

    toggleAnswersBtn.addEventListener("click", function() {
        const answers = document.querySelectorAll(".answer");
        answers.forEach(answer => answer.classList.toggle("show"));
    });

    // Function to generate a random number with a specified length
    function generateNumber(length) {
        return Math.floor(Math.random() * (Math.pow(10, length)));
    }
});