// Seleção de elementos de linguagem
const langEl = document.querySelector(".langWrap");
const links = document.querySelectorAll("a");

// Seleção de elementos de texto
const elements = {
  titleString: document.getElementById("titleString"),
  rulesButtonString: document.getElementById("rulesButtonString"),
  rulesTitleString: document.getElementById("rulesTitleString"),
  rulesDescriptionString: document.getElementById("rulesDescriptionString"),
  chooseString: document.getElementById("chooseString"),
  resultString: document.getElementById("resultString"),
  playerString: document.getElementById("playerString"),
  computerString: document.getElementById("computerString"),
  tieString: document.getElementById("tieString"),
  playerScoreString: document.getElementById("playerScoreString"),
  computerScoreString: document.getElementById("computerScoreString"),
};

// Configuração dos idiomas
const data = {
  ptbr: {
    titleString: "Pedra Papel Tesoura Lagarto Spock",
    rulesButtonString: "Regras",
    rulesTitleString: "Regras do Jogo",
    rulesDescriptionString: `
Tesoura corta papel;
Papel cobre pedra;
Pedra esmaga lagarto;
Lagarto envenena Spock;
Spock esmaga tesoura;
Tesoura decapita lagarto;
Lagarto come papel;
Papel refuta Spock;
Spock vaporiza pedra;
(e como sempre);
Pedra esmaga tesoura;
`,
    chooseString: "Escolha: ",
    resultString: "Resultado: ",
    playerString: "Escolha do Jogador: ",
    computerString: "Escolha do Computador: ",
    tieString: "Empates: ",
    playerScoreString: "Pontuação do Jogador: ",
    computerScoreString: "Pontuação do Computador: ",
  },
  enus: {
    titleString: "Rock Paper Scissors Lizard Spock",
    rulesButtonString: "Rules",
    rulesTitleString: "Rules of the Game",
    rulesDescriptionString: `
Scissors cuts Paper;
Paper covers Rock;
Rock crushes Lizard;
Lizard poisons Spock;
Spock smashes Scissors;
Scissors decapitates Lizard;
Lizard eats Paper;
Paper disproves Spock;
Spock vaporizes Rock;
(and as it always has);
Rock crushes Scissors`,
    chooseString: "Choose!: ",
    resultString: "Result: ",
    playerString: "Player Choice: ",
    computerString: "Computer Choice: ",
    tieString: "Ties: ",
    playerScoreString: "Score Player: ",
    computerScoreString: "Score Computer: ",
  },
  es: {
    titleString: "Piedra Papel Tijeras Lagarto Spock",
    rulesButtonString: "Normas",
    rulesTitleString: "Reglas del juego",
    rulesDescriptionString: `
Tijeras cortan papel;
Papel cubre piedra;
Piedra aplasta lagarto;
Lagarto envenena a Spock;
Spock destroza a Tijeras;
Tijeras decapita a lagarto;
Lagarto come papel;
Papel desmiente a Spock;
Spock vaporiza piedra;
(y como siempre ha sucedido);
Piedra aplasta a Tijeras`,
    chooseString: "¡Elección!: ",
    resultString: "Resultado: ",
    playerString: "Elección del jugador: ",
    computerString: "Elección de computadora: ",
    tieString: "Sorteos: ",
    playerScoreString: "Calificación del jugador: ",
    computerScoreString: "Puntuación de la computadora: ",
  },
  fr: {
    titleString: "Roche Papier Ciseaux Lézard Spock",
    rulesButtonString: "Règles",
    rulesTitleString: "Regles du jeu",
    rulesDescriptionString: `
Les ciseaux coupent le papier;
Le papier recouvre la roche;
La roche écrase le lézard;
Le lézard empoisonne Spock;
Spock écrase les ciseaux;
Les ciseaux décapitent le lézard;
Le lézard mange le papier;
Le papier réfute Spock;
Spock vaporise la roche;
(et comme toujours);
La roche écrase les ciseaux`,
    chooseString: "Choix!: ",
    resultString: "Résultat: ",
    playerString: "Choix du joueur: ",
    computerString: "Choix de l'ordinateur: ",
    tieString: "Tirages: ",
    playerScoreString: "Note du joueur: ",
    computerScoreString: "Score informatique: ",
  },
  hindi: {
    titleString: "पत्थर कागज़ कैंची छिपकली स्पॉक",
    rulesButtonString: "नियम",
    rulesTitleString: "खेल के नियमों",
    rulesDescriptionString: `
कैंची ने कागज को काटा;
कागज ने चट्टान को ढक दिया;
चट्टान ने छिपकली को कुचल दिया;
छिपकली ने स्पॉक को जहर दे दिया;
स्पॉक ने कैंची को तोड़ दिया;
कैंची ने छिपकली का सिर काट दिया;
छिपकली ने कागज खा लिया;
कागज ने स्पॉक को गलत साबित कर दिया;
स्पॉक ने चट्टान को वाष्पीकृत कर दिया;
(और जैसा कि हमेशा होता है); 
चट्टान ने कैंची को कुचल दिया`,
    chooseString: "पसंद!: ",
    resultString: "परिणाम: ",
    playerString: "खिलाड़ी का चयन: ",
    computerString: "कंप्यूटर चयन: ",
    tieString: "खींचता: ",
    playerScoreString: "खिलाड़ी रेटिंग: ",
    computerScoreString: "कंप्यूटर स्कोर: ",
  },
};
// Outros idiomas aqui

// Mudança de idioma
links.forEach((link) => {
  link.addEventListener("click", () => {
    langEl.querySelector(".active").classList.remove("active");
    link.classList.add("active");

    const attr = link.getAttribute("language");
    Object.keys(elements).forEach((key) => {
      elements[key].textContent = data[attr][key];
    });

    setLanguage(attr);
  });
});

// Variáveis dinâmicas
const resultNumber = document.getElementById("resultNumber");
const playerNumber = document.getElementById("playerNumber");
const computerNumber = document.getElementById("computerNumber");
const tieNumber = document.getElementById("tieNumber");
const playerScoreNumber = document.getElementById("playerScoreNumber");
const computerScoreNumber = document.getElementById("computerScoreNumber");

let tieCounter = 0;
let playerScoreCounter = 0;
let computerScoreCounter = 0;

// Configuração de idioma dinâmico
let rock, paper, scissors, lizard, spock, win, lose, tie;

function setLanguage(lang) {
  const translations = {
    ptbr: {
      rock: "Pedra",
      paper: "Papel",
      scissors: "Tesoura",
      lizard: "Lagarto",
      spock: "Spock",
      win: "Ganhou!",
      lose: "Perdeu!",
      tie: "Empatou!",
    },
    enus: {
      rock: "Rock",
      paper: "Paper",
      scissors: "Scissors",
      lizard: "Lizard",
      spock: "Spock",
      win: "You Win!",
      lose: "You Lose!",
      tie: "It is a Tie!",
    },
    es: {
      rock: "Piedra",
      paper: "Papel",
      scissors: "Tijeras",
      lizard: "Lagarto",
      spock: "Spock",
      win: "¡Ganó!",
      lose: "¡Perdió!",
      tie: "¡Es un empate!",
    },
    fr: {
      rock: "Roche",
      paper: "Papier",
      scissors: "Ciseaux",
      lizard: "Lézard",
      spock: "Spock",
      win: "Il a gagné!",
      lose: "C'est perdu !",
      tie: "C'est un match nul!",
    },
    hindi: {
      rock: "पत्थर",
      paper: "कागज़",
      scissors: "कैंची",
      lizard: "छिपकली",
      spock: "स्पॉक",
      win: "यह जीता गया!",
      lose: "यह हार गया!",
      tie: "यह ड्रॉ है!",
    },
    // Outros idiomas
  };

  const translation = translations[lang];
  rock = translation.rock;
  paper = translation.paper;
  scissors = translation.scissors;
  lizard = translation.lizard;
  spock = translation.spock;
  win = translation.win;
  lose = translation.lose;
  tie = translation.tie;
}

// Função principal do jogo
function play(playerChoice) {
  const choices = [rock, paper, scissors, lizard, spock];
  const computerChoice = choices[Math.floor(Math.random() * 5)];
  let result = "";

  if (playerChoice === computerChoice) {
    result = tie;
    tieCounter++;
    tieNumber.textContent = tieCounter;
  } else if (
    (playerChoice === scissors && computerChoice === paper) ||
    (playerChoice === paper && computerChoice === rock) ||
    (playerChoice === rock && computerChoice === lizard) ||
    (playerChoice === lizard && computerChoice === spock) ||
    (playerChoice === spock && computerChoice === scissors) ||
    (playerChoice === scissors && computerChoice === lizard) ||
    (playerChoice === lizard && computerChoice === paper) ||
    (playerChoice === paper && computerChoice === spock) ||
    (playerChoice === spock && computerChoice === rock) ||
    (playerChoice === rock && computerChoice === scissors)
  ) {
    result = win;
    playerScoreCounter++;
    playerScoreNumber.textContent = playerScoreCounter;
  } else {
    result = lose;
    computerScoreCounter++;
    computerScoreNumber.textContent = computerScoreCounter;
  }
  resultNumber.textContent = result;
  playerNumber.textContent = playerChoice;
  computerNumber.textContent = computerChoice;
}

// Lógica de abertura do modal
const openModalButton = document.querySelector(".open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
};

[openModalButton, closeModalButton, fade].forEach((el) => {
  el.addEventListener("click", () => toggleModal());
});

// Definir idioma padrão para pt-br
document.addEventListener("DOMContentLoaded", () => {
  const defaultLang = "ptbr";
  setLanguage(defaultLang);
  Object.keys(elements).forEach((key) => {
    elements[key].textContent = data[defaultLang][key];
  });
  document.querySelector(`[language=${defaultLang}]`).classList.add("active");
});
