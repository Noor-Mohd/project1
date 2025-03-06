// Sample Data (Replace with actual data from a database or API)
let leaderboardData = [
    { name: "User A", score: 1200, avatar: "https://via.placeholder.com/50" },
    { name: "User B", score: 1150, avatar: "https://via.placeholder.com/50" },
    { name: "User C", score: 1100, avatar: "https://via.placeholder.com/50" },
    { name: "User D", score: 1050, avatar: "https://via.placeholder.com/50" },
    { name: "User E", score: 1000, avatar: "https://via.placeholder.com/50" },
  ];
  
  // Function to update the leaderboard
  function updateLeaderboard(data) {
    const leaderboardList = document.getElementById("leaderboard-list");
    leaderboardList.innerHTML = ""; // Clear existing entries
  
    // Sort data by score (descending order)
    data.sort((a, b) => b.score - a.score);
  
    // Add entries to the leaderboard
    data.forEach((user, index) => {
      const entry = document.createElement("div");
      entry.classList.add("leaderboard-entry");
  
      entry.innerHTML = `
        <span class="rank">${index + 1}</span>
        <img src="${user.avatar}" alt="${user.name}" class="avatar">
        <span class="name">${user.name}</span>
        <span class="points">${user.score} Points</span>
      `;
      leaderboardList.appendChild(entry);
    });
  }
  
  // Function to handle search
  function handleSearch() {
    const searchInput = document.getElementById("search-input").value.toLowerCase();
    const filteredData = leaderboardData.filter((user) =>
      user.name.toLowerCase().includes(searchInput)
    );
    updateLeaderboard(filteredData);
  }
  
  // Event Listeners
  document.getElementById("search-btn").addEventListener("click", handleSearch);
  document.getElementById("search-input").addEventListener("input", handleSearch);
  
  // Initialize Leaderboard
  updateLeaderboard(leaderboardData);