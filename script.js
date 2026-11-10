
// ======================================
// TOY STORY – THE TOY BOX ARCHIVE
// ======================================

// FIGUREN-DATENBANK

const characters = {
    woody: {
        name: "Woody",
        emoji: "🤠",
        description: "Woody ist eine klassische Cowboy-Puppe und lange Zeit Andys Lieblingsspielzeug. Er übernimmt gerne Verantwortung und versucht, die anderen Spielzeuge zusammenzuhalten. Obwohl er manchmal eifersüchtig oder unsicher ist, ist er ein treuer Freund.",
        fact: "BESONDERHEIT: Woody besitzt eine Zugleine auf seinem Rücken. Wenn man daran zieht, spielt er einen seiner vorprogrammierten Sprüche."
    },

    buzz: {
        name: "Buzz Lightyear",
        emoji: "🚀",
        description: "Buzz ist eine Weltraum-Actionfigur mit Raumanzug, Flügeln und vielen Knöpfen. Am Anfang hält er sich für einen echten Space Ranger. Später wird er Woodys bester Freund und ein wichtiger Teil der Spielzeuggruppe.",
        fact: "BESONDERHEIT: Sein berühmter Leitspruch lautet sinngemäss: Bis zur Unendlichkeit und noch viel weiter!"
    },

    jessie: {
        name: "Jessie",
        emoji: "🤠",
        description: "Jessie ist ein energiegeladenes Cowgirl aus der alten Spielzeugserie Woody's Roundup. Sie ist mutig, lebhaft und liebt Abenteuer. Ihre Vergangenheit hat sie geprägt, aber sie findet neue Freunde und ein neues Zuhause.",
        fact: "BESONDERHEIT: Jessie hat eine grosse Leidenschaft fürs Rodeo und fürs Jodeln."
    },

    rex: {
        name: "Rex",
        emoji: "🦖",
        description: "Rex ist ein grosser grüner Tyrannosaurus-Rex aus Kunststoff. Obwohl er ziemlich beeindruckend aussieht, ist er oft nervös und unsicher. Er möchte gerne mutiger sein und gehört zu den treuen Freunden von Woody und Buzz.",
        fact: "BESONDERHEIT: Rex ist ein Dinosaurier-Spielzeug, der sich vor vielen Dingen fürchtet."
    },

    hamm: {
        name: "Hamm",
        emoji: "🐷",
        description: "Hamm ist ein rosa Sparschwein mit trockenem Humor. Er ist klug, kommentiert gerne das Geschehen und weiss oft mehr, als man denkt.",
        fact: "BESONDERHEIT: Hamm hat einen Korken als Verschluss auf seinem Rücken."
    },

    slinky: {
        name: "Slinky Dog",
        emoji: "🐕",
        description: "Slinky ist ein Spielzeugdackel mit einem dehnbaren Metallfeder-Körper. Er ist besonders loyal und steht Woody auch dann zur Seite, wenn es schwierig wird.",
        fact: "BESONDERHEIT: Sein Körper besteht aus einer Slinky-Feder zwischen zwei Spielzeughälften."
    },

    bo: {
        name: "Bo Peep",
        emoji: "🐑",
        description: "Bo Peep ist eine Schäferinnen-Figur mit einem Hirtenstab. Sie entwickelt sich im Laufe der Filme weiter und zeigt, dass Spielzeuge auch unabhängig und selbstständig leben können.",
        fact: "BESONDERHEIT: In Toy Story 4 trägt sie ein anderes Outfit als in den ersten Filmen."
    },

    forky: {
        name: "Forky",
        emoji: "🥄",
        description: "Forky wird von Bonnie aus einer Gabel, Bastelmaterialien und weiteren kleinen Dingen hergestellt. Er ist zunächst überzeugt, dass er Müll und kein Spielzeug ist. Seine Begegnung mit Woody verändert seine Sicht auf sich selbst.",
        fact: "BESONDERHEIT: Forky ist kein gekauftes Spielzeug, sondern ein selbst gebasteltes Objekt."
    },

    aliens: {
        name: "Die Aliens",
        emoji: "👽",
        description: "Die kleinen grünen Aliens tragen blaue Raumanzüge und haben drei Augen. Sie begegnen den anderen Spielzeugen immer wieder und sind besonders für ihre Begeisterung bekannt.",
        fact: "BESONDERHEIT: Die Aliens sind grosse Fans des Spielzeug-Kran-Automaten."
    },

    lotso: {
        name: "Lotso",
        emoji: "🧸",
        description: "Lotso ist ein rosa Plüschbär mit Erdbeerduft. Er scheint zunächst freundlich und hilfsbereit, doch hinter seiner netten Fassade steckt eine ganz andere Seite.",
        fact: "BESONDERHEIT: Sein Name ist eine Kurzform von Lots-o'-Huggin' Bear."
    },

    bullseye: {
        name: "Bullseye",
        emoji: "🐎",
        description: "Bullseye ist Woodys treues Spielzeugpferd. Er spricht nicht, kann aber durch seine Mimik und Bewegungen viel ausdrücken. Besonders Jessie ist ihm sehr wichtig.",
        fact: "BESONDERHEIT: Bullseye gehört zur alten Woody's-Roundup-Spielzeuggruppe."
    },

    potato: {
        name: "Mr. Potato Head",
        emoji: "🥔",
        description: "Mr. Potato Head ist eine Kartoffelfigur mit abnehmbaren Gesichtsteilen. Augen, Nase, Mund und andere Teile können immer wieder anders zusammengesetzt werden. Er ist oft ziemlich direkt und hat einen trockenen Humor.",
        fact: "BESONDERHEIT: Seine Gesichtsteile können an verschiedenen Stellen seines Körpers befestigt werden."
    }
};

// FIGUREN-POPUPS

const characterCards = document.querySelectorAll(".character-card");
const characterModal = document.getElementById("character-modal");

characterCards.forEach(card => {
    card.addEventListener("click", () => {
        const key = card.dataset.character;
        const character = characters[key];

        if (!character) return;

        document.getElementById("modal-name").textContent = character.name;
        document.getElementById("modal-emoji").textContent = character.emoji;
        document.getElementById("modal-description").textContent =
            character.description;
        document.getElementById("modal-fact").textContent = character.fact;

        characterModal.classList.add("show");
    });
});

function closeCharacterModal() {
    characterModal.classList.remove("show");
}

document.getElementById("modal-close").addEventListener(
    "click",
    closeCharacterModal
);

characterModal.addEventListener("click", event => {
    if (event.target === characterModal) {
        closeCharacterModal();
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        closeCharacterModal();
    }
});

// ======================================
// SPIELZEUG-MODUS
// ======================================

const toyButton = document.getElementById("toy-button");

toyButton.addEventListener("click", () => {
    document.body.classList.toggle("toy-mode");

    if (document.body.classList.contains("toy-mode")) {
        toyButton.textContent = "✨ MODUS AN";
        toyButton.style.background = "#ff9a75";
    } else {
        toyButton.textContent = "🎲 SPIELZEUG-MODUS";
        toyButton.style.background = "";
    }
});

// ======================================
// GEHEIME SPIELZEUGKISTE
// ======================================

const box = document.querySelector(".toybox");
const boxButton = document.getElementById("open-box");
const boxMessage = document.getElementById("box-message");

let boxClicks = 0;

const boxMessages = [
    "Pssst ... da bewegt sich etwas! 👀",
    "Ein Cowboy hat sich versteckt! 🤠",
    "Buzz meldet sich zum Dienst! 🚀",
    "Die Aliens haben die Kiste entdeckt! 👽",
    "DU HAST DAS GEHEIME SPIELZEUG-LEVEL FREIGESCHALTET! ⭐"
];

boxButton.addEventListener("click", () => {
    boxClicks++;

    box.classList.add("open");

    const messageIndex = Math.min(
        boxClicks - 1,
        boxMessages.length - 1
    );

    boxMessage.textContent = boxMessages[messageIndex];

    if (boxClicks >= 5) {
        boxButton.textContent = "⭐ GEHEIMNIS ENTDECKT!";
        boxMessage.textContent =
            "TO INFINITY AND BEYOND! Du bist ein echter Toy-Story-Entdecker!";
    }
});

// ======================================
// QUIZ
// ======================================

const questions = [
    {
        question: "Wie heisst Woodys Weltraum-Freund?",
        answers: ["Rex", "Buzz Lightyear", "Hamm", "Slinky"],
        correct: 1
    },
    {
        question: "Wie heisst das Cowgirl aus Toy Story 2?",
        answers: ["Bo Peep", "Jessie", "Bonnie", "Emily"],
        correct: 1
    },
    {
        question: "Welche Figur ist ein grüner Dinosaurier?",
        answers: ["Rex", "Lotso", "Forky", "Hamm"],
        correct: 0
    },
    {
        question: "Wie heisst das selbst gebastelte Spielzeug aus Toy Story 4?",
        answers: ["Bunny", "Ducky", "Forky", "Bullseye"],
        correct: 2
    },
    {
        question: "Wie heisst die Spielzeug-Kindertagesstätte in Toy Story 3?",
        answers: ["Sunny Garden", "Sunnyside", "Toyland", "Play Palace"],
        correct: 1
    },
    {
        question: "Wie heisst das technische Gerät in Toy Story 5?",
        answers: ["Lilypad", "Star Command", "Toy Phone", "Robo Rex"],
        correct: 0
    }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

const quizQuestion = document.getElementById("quiz-question");
const quizAnswers = document.getElementById("quiz-answers");
const quizFeedback = document.getElementById("quiz-feedback");
const quizProgress = document.getElementById("quiz-progress");
const quizNext = document.getElementById("quiz-next");

function showQuestion() {
    answered = false;

    const question = questions[currentQuestion];

    quizQuestion.textContent = question.question;

    quizProgress.textContent =
        `FRAGE ${currentQuestion + 1} / ${questions.length}`;

    quizAnswers.innerHTML = "";
    quizFeedback.textContent = "";
    quizNext.hidden = true;

    question.answers.forEach((answer, index) => {
        const button = document.createElement("button");

        button.className = "quiz-answer";
        button.textContent = answer;

        button.addEventListener("click", () => checkAnswer(index));

        quizAnswers.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    if (answered) return;

    answered = true;

    const question = questions[currentQuestion];
    const buttons = quizAnswers.querySelectorAll("button");

    buttons.forEach((button, index) => {
        button.disabled = true;

        if (index === question.correct) {
            button.classList.add("correct");
        }

        if (index === selectedIndex && index !== question.correct) {
            button.classList.add("wrong");
        }
    });

    if (selectedIndex === question.correct) {
        score++;
        quizFeedback.textContent = "Richtig! Du kennst die Spielzeuge! ⭐";
    } else {
        quizFeedback.textContent =
            "Fast! Die richtige Antwort ist: " +
            question.answers[question.correct];
    }

    quizNext.hidden = false;

    quizNext.textContent =
        currentQuestion === questions.length - 1
            ? "ERGEBNIS ANZEIGEN"
            : "WEITER →";
}

function showResult() {
    quizProgress.textContent = "MISSION ABGESCHLOSSEN";
    quizQuestion.textContent = "DEIN TOY-STORY-ERGEBNIS";
    quizAnswers.innerHTML = "";

    let message;

    if (score === 6) {
        message = "Unglaublich! Du bist ein echter Toy-Story-Profi! 🚀";
    } else if (score >= 4) {
        message = "Super! Du kennst die Spielzeug-Crew richtig gut!";
    } else if (score >= 2) {
        message = "Gut gemacht! Es gibt noch viel zu entdecken.";
    } else {
        message = "Zeit für einen kleinen Toy-Story-Filmmarathon!";
    }

    quizFeedback.textContent =
        `Du hast ${score} von 6 Punkten erreicht. ${message}`;

    quizNext.textContent = "NOCH EINMAL SPIELEN";
    quizNext.hidden = false;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    showQuestion();
}

quizNext.addEventListener("click", () => {
    if (currentQuestion < questions.length - 1 && answered) {
        currentQuestion++;
        showQuestion();
    } else if (currentQuestion === questions.length - 1 && answered) {
        showResult();
        answered = false;
    } else if (quizQuestion.textContent === "DEIN TOY-STORY-ERGEBNIS") {
        restartQuiz();
    }
});

showQuestion();

// ======================================
// LOGO-EASTER-EGG
// ======================================

let logoClicks = 0;

document.getElementById("brand").addEventListener("click", event => {
    logoClicks++;

    if (logoClicks === 5) {
        event.preventDefault();

        alert("👽 DIE ALIENS HABEN DICH GEFUNDEN! THE CLAW!");

        logoClicks = 0;
    }
});
