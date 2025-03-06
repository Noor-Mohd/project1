// Data Storage
let users = JSON.parse(localStorage.getItem("users")) || [];
let challenges = JSON.parse(localStorage.getItem("challenges")) || [
  { id: 1, title: "Walk 10,000 Steps", points: 100 },
  { id: 2, title: "Attend a Workshop", points: 200 },
  { id: 3, title: "Recycle 5 Items", points: 150 },
];

let currentUser = null;

// DOM Elements
const authSection = document.getElementById("auth-section");
const challengesSection = document.getElementById("challenges-section");
const leaderboardSection = document.getElementById("leaderboard-section");
const challengesList = document.getElementById("challenges-list");
const leaderboardList = document.getElementById("leaderboard-list");

// Register User
function register() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (!username || !password) {
    alert("Please fill in all fields.");
    return;
  }

  const userExists = users.some((user) => user.username === username);
  if (userExists) {
    alert("Username already exists.");
    return;
  }

  const newUser = { username, password, points: 0, badges: [] };
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  alert("Registration successful. Please login.");
}

// Login User
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const user = users.find((u) => u.username === username && u.password === password);
  if (!user) {
    alert("Invalid username or password.");
    return;
  }

  currentUser = user;
  authSection.classList.add("hidden");
  challengesSection.classList.remove("hidden");
  leaderboardSection.classList.remove("hidden");
  loadChallenges();
  loadLeaderboard();
}

// Load Challenges
function loadChallenges() {
  challengesList.innerHTML = challenges
    .map(
      (challenge) => `
      <li>
        <strong>${challenge.title}</strong> - ${challenge.points} points
        <button onclick="completeChallenge(${challenge.id})">Complete</button>
      </li>
    `
    )
    .join("");
}

// Complete Challenge
function completeChallenge(challengeId) {
  const challenge = challenges.find((c) => c.id === challengeId);
  if (!challenge) return;

  currentUser.points += challenge.points;
  localStorage.setItem("users", JSON.stringify(users));
  alert(You earned ${challenge.points} points!);
  loadLeaderboard();
}

// Load Leaderboard
function loadLeaderboard() {
  const sortedUsers = users.sort((a, b) => b.points - a.points);
  leaderboardList.innerHTML = sortedUsers
    .map(
      (user, index) => `
      <li>
        ${index + 1}. ${user.username} - ${user.points} points
      </li>
    `
    )
    .join("");