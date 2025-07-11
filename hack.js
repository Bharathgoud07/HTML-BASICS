const questions = [
  {
    question: "What is the full form of html?",
    options: ["hyper text markup language", "hyper text makeup language", "both are correct", "none of the above"],
    answer: 0
  },
  {
    question: "in css C stands for'?",
    options: ["center", "cascading", "core", "cinema"],
    answer: 1
  },
    {
    question: "which one is the frontend frame work?",
    options: ["django", "dsa", "reactjs", "database"],
    answer: 2
  },
    {
    question: "who invented html?",
    options: ["dhoni", "sachin", "kohli", "none of the above"],
    answer: 3
  },
    {
    question: "full form of js in web devolpment'?",
    options: ["java script", "justify search", "both", "none of the above"],
    answer: 0
  },
];

let current = 0, score = 0, timer, timeLeft = 10, selected = false;


function showQuestion() {
  selected = false;
  document.getElementById('next-btn');
  const q = questions[current];
  document.getElementById('question').textContent = q.question;
  const optionsDiv = document.getElementById('options');
  optionsDiv.innerHTML = '';
  q.options.forEach((opt, idx) => {
    const label = document.createElement('label');
    label.className = 'option';
    label.innerHTML = `<input type="radio" name="option" value="${idx}"> ${opt}`;
    optionsDiv.appendChild(label);
    label.onclick = () => selectOption(idx, label);
  });

  updateProgress();
  startTimer();
}


function selectOption(idx, label) {
  if (selected) return;
  selected = true;
  stopTimer();
  const correct = questions[current].answer;
  const options = document.querySelectorAll('.option');
  options.forEach((opt, i) => {
    opt.classList.remove('correct', 'incorrect');
    if (i === correct) opt.classList.add('correct');
    else if (i === idx) opt.classList.add('incorrect');
  });
  if (idx === correct) score++;
  document.getElementById('next-btn').style.display = 'inline-block';
}





function startTimer() {
  timeLeft = 10;
  document.getElementById('timer').textContent = `Time: ${timeLeft}s`;
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById('timer').textContent = `Time: ${timeLeft}s`;
    if (timeLeft <= 0) {
      stopTimer();
      selectOption(-1, null);
    }
  }, 1000);
}




function stopTimer() {
  clearInterval(timer);
}

function updateProgress() {
  let progress = ((current + 1) / questions.length) * 100;
  let bar = document.getElementById('progress-bar');
  bar.innerHTML = `<div class="progress-bar-inner" style="width:${progress}%"></div>`;
}

document.getElementById('next-btn').onclick = () => {
  current++;
  if (current < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
};

function showResult() {
  document.getElementById('quiz').style.display = 'none';
  document.getElementById('result-modal').style.display = 'flex';
  document.getElementById('score').textContent = `${score} / ${questions.length}`;
  showStars();
  saveScore();
  showLeaderboard();
}

function showStars() {
  const total = questions.length;
  let stars = Math.round((score / total) * 5);
  let starHTML = '';
  for (let i = 0; i < 5; i++) {
    starHTML += i < stars ? '★' : '☆';
  }
  document.getElementById('star-rating').innerHTML = starHTML;
}

function saveScore() {
  topScores.push({score, date: new Date().toLocaleString()});
  topScores.sort((a,b) => b.score - a.score);
  topScores = topScores.slice(0,5);
  localStorage.setItem('topScores', JSON.stringify(topScores));
}



document.getElementById('close-modal').onclick = () => {
  document.getElementById('result-modal').style.display = 'none';
};

window.onload = showQuestion;
