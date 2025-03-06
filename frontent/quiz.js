// Quiz Questions
const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      question: "What is the largest mammal in the world?",
      options: ["Elephant", "Blue Whale", "Giraffe", "Shark"],
      answer: "Blue Whale",
    },
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      options: ["Harper Lee", "Mark Twain", "J.K. Rowling", "Stephen King"],
      answer: "Harper Lee",
    },
  ];
  
  // Shuffle Questions and Options
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  const shuffledQuestions = shuffle(questions);
  
  // Display Quiz
  const quizContainer = document.getElementById("quiz-container");
  shuffledQuestions.forEach((q, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");
  
    const questionHTML = `
      <h3>${index + 1}. ${q.question}</h3>
      <div class="options">
        ${q.options
          .map(
            (option) => `
          <label class="option">
            <input type="radio" name="question${index}" value="${option}">
            ${option}
          </label>
        `
          )
          .join("")}
      </div>
    `;
    questionDiv.innerHTML = questionHTML;
    quizContainer.appendChild(questionDiv);
  });
  
  // Submit Quiz
  document.getElementById("submit-btn").addEventListener("click", () => {
    let score = 0;
    shuffledQuestions.forEach((q, index) => {
      const selectedOption = document.querySelector(
        `input[name="question${index}"]:checked`
      );
      if (selectedOption && selectedOption.value === q.answer) {
        score++;
      }
    });
  
    // Display Result
    const resultDiv = document.getElementById("result");
    const scoreSpan = document.getElementById("score");
    const feedback = document.getElementById("feedback");
  
    scoreSpan.textContent = `${score}/${shuffledQuestions.length}`;
    feedback.textContent =
      score === shuffledQuestions.length
        ? "Congratulations! You aced the quiz!"
        : "Good effort! Keep practicing!";
    resultDiv.classList.remove("hidden");
  });