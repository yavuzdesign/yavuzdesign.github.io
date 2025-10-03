const POINT_COUNT = 24;
const CHECKERS_PER_PLAYER = 15;
const PLAYER_CONFIG = {
  white: {
    direction: -1,
    homeRange: [0, 5],
    enterMap: (die) => 24 - die,
    name: "Beyaz"
  },
  black: {
    direction: 1,
    homeRange: [18, 23],
    enterMap: (die) => die - 1,
    name: "Siyah"
  }
};

const initialBoard = () => {
  const board = Array.from({ length: POINT_COUNT }, () => ({ count: 0, color: null }));
  const apply = (index, color, count) => {
    board[index] = { count, color };
  };

  apply(23, "white", 2);
  apply(12, "white", 5);
  apply(7, "white", 3);
  apply(5, "white", 5);

  apply(0, "black", 2);
  apply(11, "black", 5);
  apply(16, "black", 3);
  apply(18, "black", 5);
  return board;
};

const state = {
  board: initialBoard(),
  bar: { white: 0, black: 0 },
  off: { white: 0, black: 0 },
  currentPlayer: "white",
  dice: [],
  matchType: "human-human",
  players: {
    white: { name: "Selin", type: "human" },
    black: { name: "Bora", type: "human" }
  },
  matchLength: 3,
  scores: { white: 0, black: 0 },
  rolled: false,
  selected: null,
  validTargets: [],
  moveLog: [],
  suggestions: [],
  gameOver: false
};

const boardElement = document.getElementById("board");
const rollButton = document.getElementById("rollDice");
const endTurnButton = document.getElementById("endTurn");
const statusLine = document.getElementById("statusLine");
const moveLogElement = document.getElementById("moveLog");
const diceDisplay = document.getElementById("diceDisplay");
const turnIndicator = document.getElementById("turnIndicator");
const whiteOff = document.getElementById("whiteOff");
const blackOff = document.getElementById("blackOff");
const suggestionsElement = document.getElementById("suggestions");
const whiteNameDisplay = document.getElementById("whiteNameDisplay");
const blackNameDisplay = document.getElementById("blackNameDisplay");
const whiteTypeDisplay = document.getElementById("whiteTypeDisplay");
const blackTypeDisplay = document.getElementById("blackTypeDisplay");
const whiteProgress = document.getElementById("whiteProgress");
const blackProgress = document.getElementById("blackProgress");
const whiteScore = document.getElementById("whiteScore");
const blackScore = document.getElementById("blackScore");
const matchTarget = document.getElementById("matchTarget");

const setupPanel = document.getElementById("setupPanel");
const gameArea = document.getElementById("gameArea");
const showSettings = document.getElementById("showSettings");
const openTutorial = document.getElementById("openTutorial");
const tutorialModal = document.getElementById("tutorialModal");
const closeTutorial = document.getElementById("closeTutorial");

function resetBoard() {
  state.board = initialBoard();
  state.bar = { white: 0, black: 0 };
  state.off = { white: 0, black: 0 };
  state.currentPlayer = "white";
  state.dice = [];
  state.rolled = false;
  state.selected = null;
  state.validTargets = [];
  state.moveLog = [];
  state.suggestions = [];
  state.gameOver = false;
  render();
}

function renderBoard() {
  boardElement.innerHTML = "";
  const topRow = document.createElement("div");
  topRow.className = "point-row top";
  for (let i = 23; i >= 12; i -= 1) {
    topRow.appendChild(createPointElement(i, "top"));
  }

  const bottomRow = document.createElement("div");
  bottomRow.className = "point-row bottom";
  for (let i = 0; i <= 11; i += 1) {
    bottomRow.appendChild(createPointElement(i, "bottom"));
  }

  boardElement.append(topRow, createMiddleLayer(), bottomRow);
}

function createMiddleLayer() {
  const layer = document.createElement("div");
  layer.className = "point-row middle";

  const barArea = document.createElement("div");
  barArea.className = "bar-area";

  ["white", "black"].forEach((color) => {
    const slot = document.createElement("div");
    slot.className = "bar-slot";
    slot.dataset.type = "bar";
    slot.dataset.color = color;

    const indicator = document.createElement("span");
    indicator.innerHTML = color === "white" ? "Beyaz Bar" : "Siyah Bar";

    const count = document.createElement("div");
    count.className = "bar-count";
    count.textContent = state.bar[color];

    if (state.bar[color] > 0 && state.currentPlayer === color) {
      slot.classList.add("valid");
    }
    if (state.selected === "bar" && state.currentPlayer === color) {
      slot.classList.add("selected");
    }

    slot.append(indicator, count);
    slot.addEventListener("click", () => handleBarClick(color));
    barArea.appendChild(slot);
  });

  const whiteHome = document.createElement("div");
  whiteHome.className = "home-area white";
  whiteHome.dataset.type = "home";
  whiteHome.dataset.color = "white";
  whiteHome.innerHTML = `<span>Beyaz Ev</span><strong>${state.off.white}</strong>`;
  if (state.currentPlayer === "white" && state.validTargets.includes("home")) {
    whiteHome.classList.add("valid");
  }
  whiteHome.addEventListener("click", () => handleHomeClick("white"));

  const blackHome = document.createElement("div");
  blackHome.className = "home-area black";
  blackHome.dataset.type = "home";
  blackHome.dataset.color = "black";
  blackHome.innerHTML = `<span>Siyah Ev</span><strong>${state.off.black}</strong>`;
  if (state.currentPlayer === "black" && state.validTargets.includes("home")) {
    blackHome.classList.add("valid");
  }
  blackHome.addEventListener("click", () => handleHomeClick("black"));

  layer.append(whiteHome, barArea, blackHome);
  return layer;
}

function createPointElement(index, rowClass) {
  const point = document.createElement("div");
  point.className = `point ${rowClass} ${index % 2 === 0 ? "" : "alt"}`.trim();
  point.dataset.index = index;

  const { count, color } = state.board[index];
  if (state.selected === index) {
    point.classList.add("selected");
  }

  if (state.validTargets.includes(index)) {
    point.classList.add("valid");
  }

  if (count > 0) {
    for (let i = 0; i < count; i += 1) {
      const checker = document.createElement("div");
      checker.className = `checker ${color}`;
      point.appendChild(checker);
    }
  }

  point.addEventListener("click", () => handlePointClick(index));
  return point;
}

function renderMeta() {
  whiteOff.textContent = state.off.white;
  blackOff.textContent = state.off.black;
  whiteNameDisplay.textContent = state.players.white.name;
  blackNameDisplay.textContent = state.players.black.name;
  whiteTypeDisplay.textContent = state.players.white.type === "human" ? "İnsan oyuncu" : "Yapay zeka";
  blackTypeDisplay.textContent = state.players.black.type === "human" ? "İnsan oyuncu" : "Yapay zeka";
  whiteScore.textContent = state.scores.white;
  blackScore.textContent = state.scores.black;
  matchTarget.textContent = `${state.matchLength} puanlık seri`;

  const whiteRatio = (state.scores.white / state.matchLength) * 100;
  const blackRatio = (state.scores.black / state.matchLength) * 100;
  whiteProgress.style.width = `${Math.min(100, whiteRatio)}%`;
  blackProgress.style.width = `${Math.min(100, blackRatio)}%`;

  const activeName = state.currentPlayer === "white" ? state.players.white.name : state.players.black.name;
  turnIndicator.textContent = state.gameOver
    ? "Oyun tamamlandı"
    : `Hamle sırası: ${activeName}`;
  rollButton.disabled = state.rolled || !isHumanTurn() || state.gameOver;
  endTurnButton.disabled = !state.rolled || state.dice.length > 0 || state.gameOver;
}

function renderDice() {
  diceDisplay.innerHTML = "";
  state.dice.forEach((value) => {
    const die = document.createElement("div");
    die.className = "dice";
    die.textContent = value;
    diceDisplay.appendChild(die);
  });
}

function renderLog() {
  moveLogElement.innerHTML = "";
  state.moveLog.slice(-10).forEach((entry) => {
    const li = document.createElement("li");
    li.textContent = entry;
    moveLogElement.appendChild(li);
  });
}

function renderSuggestions() {
  suggestionsElement.textContent = state.suggestions.length
    ? state.suggestions.join(" • ")
    : "Zar atıldığında öneriler burada belirecek.";
}

function renderStatus(message, type = "") {
  statusLine.textContent = message;
  statusLine.className = `status-line ${type}`.trim();
}

function render() {
  renderBoard();
  renderMeta();
  renderDice();
  renderLog();
  renderSuggestions();
}

function isHumanTurn() {
  return state.players[state.currentPlayer].type === "human";
}

function rollDice() {
  if (state.rolled || state.gameOver) return;
  state.dice = [randomDie(), randomDie()];
  if (state.dice[0] === state.dice[1]) {
    state.dice = Array(4).fill(state.dice[0]);
  }
  state.rolled = true;
  renderDice();
  updateSuggestions();
  renderStatus(`${PLAYER_CONFIG[state.currentPlayer].name} oyuncusu ${state.dice.join("-")} attı.`);
  if (!hasAnyValidMove(state.currentPlayer)) {
    renderStatus("Geçerli hamle yok, sıra rakibe geçiyor.", "error");
    endTurn();
  } else if (!isHumanTurn()) {
    setTimeout(runAiTurn, 550);
  }
  renderMeta();
}

function randomDie() {
  return Math.floor(Math.random() * 6) + 1;
}

function handlePointClick(index) {
  if (!state.rolled || !isHumanTurn() || state.gameOver) return;
  const point = state.board[index];
  const current = state.currentPlayer;

  if (state.bar[current] > 0 && state.selected !== "bar") {
    renderStatus("Önce bardaki pulları oyuna sokmalısın.", "error");
    return;
  }

  if (point.color === current && point.count > 0) {
    state.selected = index;
    state.validTargets = computeValidTargetsFromPoint(index);
  } else if (state.selected !== null && state.validTargets.includes(index)) {
    moveChecker(state.selected, index);
    state.selected = null;
    state.validTargets = [];
    afterMove();
  } else {
    state.selected = null;
    state.validTargets = [];
  }
  renderBoard();
}

function handleBarClick(color) {
  if (!state.rolled || !isHumanTurn() || state.gameOver) return;
  if (color !== state.currentPlayer) return;
  if (state.bar[color] === 0) return;
  state.selected = "bar";
  state.validTargets = computeValidTargetsFromBar(color);
  renderBoard();
}

function handleHomeClick(color) {
  if (!state.rolled || !isHumanTurn() || state.gameOver) return;
  if (color !== state.currentPlayer) return;
  if (state.selected !== null && state.validTargets.includes("home")) {
    bearOff(state.selected);
    state.selected = null;
    state.validTargets = [];
    afterMove();
  }
}

function computeValidTargetsFromPoint(index) {
  const current = state.currentPlayer;
  const dice = [...state.dice];
  const targets = [];

  dice.forEach((die) => {
    const targetIndex = index + die * PLAYER_CONFIG[current].direction;
    if (isValidLanding(index, targetIndex, die)) {
      targets.push(targetIndex);
    } else if (canBearOffFrom(index, die)) {
      targets.push("home");
    }
  });

  return Array.from(new Set(targets));
}

function computeValidTargetsFromBar(color) {
  const dice = [...state.dice];
  const targets = [];

  dice.forEach((die) => {
    const targetIndex = PLAYER_CONFIG[color].enterMap(die);
    if (isValidLanding("bar", targetIndex, die, color)) {
      targets.push(targetIndex);
    }
  });

  return Array.from(new Set(targets));
}

function isValidLanding(from, to, die, colorOverride) {
  const player = colorOverride || state.currentPlayer;
  if (typeof to !== "number" || to < 0 || to >= POINT_COUNT) {
    return false;
  }
  const targetPoint = state.board[to];
  if (targetPoint.color && targetPoint.color !== player && targetPoint.count > 1) {
    return false;
  }

  const direction = PLAYER_CONFIG[player].direction;
  if (player === "white" && ((from !== "bar" && to >= from) || direction !== -1)) {
    if (from !== "bar" && to >= from) return false;
  }
  if (player === "black" && ((from !== "bar" && to <= from) || direction !== 1)) {
    if (from !== "bar" && to <= from) return false;
  }

  if (!state.dice.includes(die)) {
    return false;
  }

  if (from !== "bar" && !canUseDieForMove(from, to, die, player)) {
    return false;
  }

  return true;
}

function canUseDieForMove(from, to, die, player) {
  const direction = PLAYER_CONFIG[player].direction;
  const distance = Math.abs(to - from);
  return distance === die && Math.sign(to - from) === direction;
}

function canBearOffFrom(index, die) {
  const player = state.currentPlayer;
  if (!allCheckersInHome(player)) return false;
  if (!state.dice.includes(die)) return false;

  const homeRange = PLAYER_CONFIG[player].homeRange;
  if (index < homeRange[0] || index > homeRange[1]) return false;

  if (player === "white") {
    const target = index - die;
    if (target === -1) return true;
    if (target < -1) {
      const hasHigher = state.board.slice(index + 1, homeRange[1] + 1)
        .some((point) => point.color === player && point.count > 0);
      return !hasHigher;
    }
    return false;
  }

  const target = index + die;
  if (target === 24) return true;
  if (target > 24) {
    const hasHigher = state.board.slice(homeRange[0], index)
      .some((point) => point.color === player && point.count > 0);
    return !hasHigher;
  }
  return false;
}

function moveChecker(from, to) {
  const player = state.currentPlayer;
  let dieUsed = Math.abs((typeof to === "number" ? to : 0) - (typeof from === "number" ? from : 0));

  if (from === "bar") {
    state.bar[player] -= 1;
    dieUsed = Math.abs(PLAYER_CONFIG[player].enterMap(0) - to);
  } else {
    state.board[from].count -= 1;
    if (state.board[from].count === 0) {
      state.board[from].color = null;
    }
  }

  if (typeof to === "number") {
    const targetPoint = state.board[to];
    if (targetPoint.color && targetPoint.color !== player) {
      // Hit opponent checker
      state.bar[targetPoint.color] += 1;
      targetPoint.count = 0;
      targetPoint.color = null;
    }
    if (targetPoint.color === player || targetPoint.count === 0) {
      targetPoint.color = player;
      targetPoint.count += 1;
    }
  }

  consumeDie(Math.abs(from === "bar" ? computeDieFromBar(to, player) : dieUsed));

  const dieValue = Math.abs(from === "bar" ? computeDieFromBar(to, player) : dieUsed);
  logMove(`${state.players[player].name} ${fromLabel(from)} → ${toLabel(to)} (${dieValue})`);
}

function computeDieFromBar(to, player) {
  const entryIndex = to;
  if (player === "white") {
    return 24 - entryIndex;
  }
  return entryIndex + 1;
}

function bearOff(from) {
  const player = state.currentPlayer;
  state.board[from].count -= 1;
  if (state.board[from].count === 0) {
    state.board[from].color = null;
  }
  state.off[player] += 1;

  const die = computeBearOffDie(from, player);
  consumeDie(die);
  logMove(`${state.players[player].name} ${fromLabel(from)} → Ev (${die})`);
  checkVictory();
}

function consumeDie(value) {
  const index = state.dice.indexOf(value);
  if (index > -1) {
    state.dice.splice(index, 1);
  } else {
    // allow using higher die during bear off
    const largerIndex = state.dice.findIndex((die) => die > value);
    if (largerIndex > -1) {
      state.dice.splice(largerIndex, 1);
    }
  }
  renderDice();
}

function afterMove() {
  if (state.gameOver) return;
  renderBoard();
  renderMeta();
  renderDice();
  updateSuggestions();
  if (state.dice.length === 0) {
    endTurnButton.disabled = false;
  }
  if (!hasAnyValidMove(state.currentPlayer)) {
    renderStatus("Kalan zarlarla hamle yapılamıyor.", "error");
    endTurn();
  }
}

function endTurn() {
  if (state.gameOver) return;
  state.dice = [];
  state.rolled = false;
  state.selected = null;
  state.validTargets = [];
  state.currentPlayer = state.currentPlayer === "white" ? "black" : "white";
  render();
  updateSuggestions();
  renderStatus(`${state.players[state.currentPlayer].name} zar atabilir.`);
  if (!isHumanTurn()) {
    setTimeout(runAiTurn, 600);
  }
}

function logMove(text) {
  state.moveLog.push(text);
  renderLog();
}

function fromLabel(from) {
  if (from === "bar") return "Bar";
  return `${from + 1}`;
}

function toLabel(to) {
  if (to === "home") return "Ev";
  return `${(to ?? 0) + 1}`;
}

function hasAnyValidMove(player) {
  if (!state.rolled) return true;
  if (state.bar[player] > 0) {
    return computeValidTargetsFromBar(player).length > 0;
  }

  for (let i = 0; i < POINT_COUNT; i += 1) {
    if (state.board[i].color === player && state.board[i].count > 0) {
      const targets = computeValidTargetsFromPoint(i);
      if (targets.length > 0) return true;
    }
  }
  return false;
}

function allCheckersInHome(player) {
  const homeRange = PLAYER_CONFIG[player].homeRange;
  for (let i = 0; i < POINT_COUNT; i += 1) {
    const point = state.board[i];
    if (point.color === player) {
      if (player === "white" && i > homeRange[1]) return false;
      if (player === "black" && i < homeRange[0]) return false;
    }
  }
  return state.bar[player] === 0;
}

function updateSuggestions() {
  if (!state.rolled) {
    state.suggestions = [];
    renderSuggestions();
    return;
  }

  const moves = enumeratePossibleMoves(state.currentPlayer);
  if (moves.length === 0) {
    state.suggestions = ["Hamle yapılamıyor"];
  } else {
    state.suggestions = moves.slice(0, 3).map((move) => move.description);
  }
  renderSuggestions();
}

function enumeratePossibleMoves(player) {
  const result = [];
  const dice = [...state.dice];
  if (!dice.length) return result;

  if (state.bar[player] > 0) {
    dice.forEach((die) => {
      const target = PLAYER_CONFIG[player].enterMap(die);
      if (isValidLanding("bar", target, die, player)) {
        result.push({ description: `Bardan ${target + 1}. haneye giriş (${die})` });
      }
    });
    return result;
  }

  state.board.forEach((point, index) => {
    if (point.color === player && point.count > 0) {
      dice.forEach((die) => {
        const target = index + die * PLAYER_CONFIG[player].direction;
        if (isValidLanding(index, target, die, player)) {
          result.push({ description: `${index + 1} → ${target + 1} (${die})` });
        } else if (canBearOffFrom(index, die)) {
          result.push({ description: `${index + 1} → Ev (${die})` });
        }
      });
    }
  });

  return result;
}

function runAiTurn() {
  if (state.gameOver) return;
  if (isHumanTurn()) return;
  if (!state.rolled) {
    rollDice();
    return;
  }

  const player = state.currentPlayer;
  const possibleMoves = () => {
    const moves = [];
    if (state.bar[player] > 0) {
      state.dice.forEach((die) => {
        const target = PLAYER_CONFIG[player].enterMap(die);
        if (isValidLanding("bar", target, die, player)) {
          moves.push({ from: "bar", to: target, die });
        }
      });
      return moves;
    }

    state.board.forEach((point, index) => {
      if (point.color === player && point.count > 0) {
        state.dice.forEach((die) => {
          const target = index + die * PLAYER_CONFIG[player].direction;
          if (isValidLanding(index, target, die, player)) {
            moves.push({ from: index, to: target, die });
          } else if (canBearOffFrom(index, die)) {
            moves.push({ from: index, to: "home", die });
          }
        });
      }
    });
    return moves;
  };

  const moves = possibleMoves();
  if (!moves.length) {
    renderStatus("Yapay zeka hamle yapamadı.", "error");
    endTurn();
    return;
  }

  const chosen = chooseAiMove(moves);
  if (state.gameOver) return;
  if (chosen.from === "bar") {
    state.bar[player] -= 1;
    const targetPoint = state.board[chosen.to];
    if (targetPoint.color && targetPoint.color !== player) {
      state.bar[targetPoint.color] += 1;
      targetPoint.count = 0;
      targetPoint.color = null;
    }
    targetPoint.color = player;
    targetPoint.count += 1;
    consumeDie(chosen.die);
    logMove(`${state.players[player].name} (YZ) Bar → ${chosen.to + 1} (${chosen.die})`);
  } else if (chosen.to === "home") {
    bearOff(chosen.from);
  } else {
    moveChecker(chosen.from, chosen.to);
  }

  if (state.gameOver) return;
  render();

  if (state.dice.length > 0) {
    setTimeout(runAiTurn, 600);
  } else {
    endTurn();
  }
}

function chooseAiMove(moves) {
  const prioritized = moves.sort((a, b) => b.die - a.die);
  return prioritized[0];
}

function computeBearOffDie(from, player) {
  if (player === "white") {
    const distance = from + 1;
    const exact = state.dice.find((d) => d === distance);
    if (exact) return exact;
    const higher = state.dice.filter((d) => d > distance);
    return higher.length ? Math.min(...higher) : Math.max(...state.dice);
  }
  const distance = 24 - from;
  const exact = state.dice.find((d) => d === distance);
  if (exact) return exact;
  const higher = state.dice.filter((d) => d > distance);
  return higher.length ? Math.min(...higher) : Math.max(...state.dice);
}

function checkVictory() {
  if (state.off.white === CHECKERS_PER_PLAYER) {
    state.scores.white += 1;
    state.gameOver = true;
    renderStatus(`${state.players.white.name} oyunu kazandı!`, "success");
    endGame();
  } else if (state.off.black === CHECKERS_PER_PLAYER) {
    state.scores.black += 1;
    state.gameOver = true;
    renderStatus(`${state.players.black.name} oyunu kazandı!`, "success");
    endGame();
  }
}

function endGame() {
  state.suggestions = ["Oyun tamamlandı. Yeni oyun oluşturabilirsiniz."];
  render();
  rollButton.disabled = true;
  endTurnButton.disabled = true;
}

rollButton.addEventListener("click", () => {
  if (state.rolled) return;
  rollDice();
});

endTurnButton.addEventListener("click", () => {
  if (!state.rolled) return;
  endTurn();
});

showSettings.addEventListener("click", () => {
  gameArea.classList.add("hidden");
  setupPanel.classList.remove("hidden");
});

openTutorial.addEventListener("click", () => {
  tutorialModal.showModal();
});

closeTutorial.addEventListener("click", () => {
  tutorialModal.close();
});

tutorialModal.addEventListener("click", (event) => {
  const rect = tutorialModal.getBoundingClientRect();
  if (
    event.clientX < rect.left ||
    event.clientX > rect.right ||
    event.clientY < rect.top ||
    event.clientY > rect.bottom
  ) {
    tutorialModal.close();
  }
});

const setupForm = document.getElementById("gameSetup");
setupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(setupForm);
  state.matchType = data.get("matchType");
  state.players.white.name = document.getElementById("whiteName").value || "Beyaz";
  state.players.black.name = document.getElementById("blackName").value || "Siyah";
  state.players.white.type = state.matchType === "ai-ai" ? "ai" : "human";
  state.players.black.type = state.matchType === "human-human" ? "human" : "ai";
  state.matchLength = Number(data.get("matchLength"));
  state.scores = { white: 0, black: 0 };
  resetBoard();
  renderStatus("Yeni oyun hazır, beyaz başlıyor.", "success");
  setupPanel.classList.add("hidden");
  gameArea.classList.remove("hidden");
  if (!isHumanTurn()) {
    setTimeout(runAiTurn, 600);
  }
});

render();
renderStatus("Oyuna hazır.");
