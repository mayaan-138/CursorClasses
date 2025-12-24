function scrollToGames() {
  const gamesSection = document.getElementById("games");
  if (!gamesSection) return;
  gamesSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function showToast(message) {
  const toast = document.getElementById("toast");
  const textSpan = toast?.querySelector(".toast-text");
  if (!toast || !textSpan) return;

  textSpan.textContent = message;
  toast.classList.add("show");

  window.clearTimeout(showToast._timeoutId);
  showToast._timeoutId = window.setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}

function openTicTacToe() {
  // Open in a new tab/window to feel like a separate game screen
  window.open("tic-tac-toe.html", "_blank");
}

function openChess() {
  window.open("chess.html", "_blank");
}

document.addEventListener("DOMContentLoaded", () => {
  const gameButtons = document.querySelectorAll("[data-game]");

  gameButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const gameId = button.getAttribute("data-game");
      if (!gameId) return;

      if (gameId === "tic-tac-toe") {
        openTicTacToe();
      } else if (gameId === "chess") {
        openChess();
      } else {
        showToast("New game slot — we’ll connect this to a mini game soon.");
      }
    });
  });

  const suggestButton = document.querySelector(".placeholder .btn.outline");
  if (suggestButton) {
    suggestButton.addEventListener("click", () => {
      showToast("Idea noted! We can turn this into a game request form later.");
    });
  }

  const navCta = document.querySelector(".nav-cta");
  if (navCta) {
    navCta.addEventListener("click", () => scrollToGames());
  }

  const heroTicTacToe = document.getElementById("hero-tic-tac-toe");
  if (heroTicTacToe) {
    heroTicTacToe.style.cursor = "pointer";
    heroTicTacToe.addEventListener("click", () => openTicTacToe());
  }

  const heroChess = document.getElementById("hero-chess");
  if (heroChess) {
    heroChess.style.cursor = "pointer";
    heroChess.addEventListener("click", () => openChess());
  }
});


