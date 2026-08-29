const homeInfo = document.getElementById("home-info");

const questions = [

    {
        question: "What is Joel’s full name in Love and Monsters?",
        answers: [
            ["Joel Dawson", 1],
            ["Joel Harrison", 0],
            ["Joel Parker", 0],
            ["Joel Anderson", 0]
        ]
    },

    {
        question: "What was the name of the dog Joel met during his journey?",
        answers: [
            ["Buddy", 0],
            ["Boy", 1],
            ["Max", 0],
            ["Dog", 0]
        ]
    },

    {
        question: "What caused cold-blooded creatures to mutate into giant monsters?",
        answers: [
            ["A biological virus carried by the asteroid", 0],
            ["Toxic chemicals released from underground bunkers", 0],
            ["Chemical compounds from the rockets used to destroy the asteroid", 1],
            ["Radiation released directly from the asteroid", 0]
        ]
    },

    {
        question: "What was the destination of Clyde and Minnow?",
        answers: [
            ["Snow Mountain Wilderness", 1],
            ["A survivor colony on the California coast", 0],
            ["An underground bunker in the southern mountains", 0],
            ["A fortified settlement near the desert", 0]
        ]
    },

    {
        question: "What was Joel’s lucky charm?",
        answers: [
            ["Crocodile Charlie", 0],
            ["Alligator Andy", 0],
            ["Turtle Tom", 0],
            ["Crocodile Carl", 1]
        ]
    },

    {
        question: "How much of the human population was lost during the first year of the monster apocalypse?",
        answers: [
            ["95%", 1],
            ["75%", 0],
            ["99%", 0],
            ["85%", 0]
        ]
    },

    {
        question: "What type of ham radio did Joel need a power source for?",
        answers: [
            ["SK-12", 0],
            ["SK-31", 0],
            ["SK-21", 1],
            ["SK-41", 0]
        ]
    },

    {
        question: "Who did Joel kiss when he first arrived at Aimee’s colony?",
        answers: [
            ["Clyde", 0],
            ["Janice", 0],
            ["Old Pete", 1],
            ["Aimee", 0]
        ]
    },

    {
        question: "What did Joel use to kill the Queen Sandgobbler?",
        answers: [
            ["A flamethrower", 0],
            ["A hand grenade", 1],
            ["A crossbow", 0],
            ["A bomb", 0]
        ]
    },

    {
        question: "Where was Aimee’s colony located?",
        answers: [
            ["Venice Beach", 0],
            ["Malibu Beach", 0],
            ["Newport Beach", 0],
            ["Jenner Beach", 1]
        ]
    },

    {
        question: "What was the name of the cow that died after eating laundry detergent?",
        answers: [
            ["Carol", 1],
            ["Molly", 0],
            ["Gertie", 0],
            ["Daisy", 0]
        ]
    },

    {
        question: "What does Clyde call the large monster that is following them?",
        answers: [
            ["The Mantis", 0],
            ["The Chumbler", 1],
            ["The Queen", 0],
            ["The Giant", 0]
        ]
    },

    {
        question: "What present did Aimee give Joel before the apocalypse?",
        answers: [
            ["A sketchbook", 0],
            ["A handmade necklace", 0],
            ["Colored pencils", 1],
            ["A set of paintbrushes", 0]
        ]
    },

    {
        question: "What was the first giant monster Joel encountered during his journey?",
        answers: [
            ["Giant crab", 0],
            ["Giant worm", 0],
            ["Giant centipede", 0],
            ["Giant frog", 1]
        ]
    },

    {
        question: "What was the name of the yacht’s captain?",
        answers: [
            ["Brooks Wilkinson", 1],
            ["James Wilkinson", 0],
            ["Robert Brooks", 0],
            ["Brooks Anderson", 0]
        ]
    },

{
        question: "How is the name of the robot written in Love and Monsters?",
        answers: [
            ["MAVI5", 0],
            ["MAV1S", 1],
            ["M4VIS", 0],
            ["MAVIS", 0]
        ]
    },

    {
        question: "What happens to Joel after he is bitten by a monster?",
        answers: [
            ["He becomes immune to the monsters", 0],
            ["He loses his memory", 0],
            ["He becomes extremely sick and hallucinates", 1],
            ["He becomes temporarily paralyzed", 0]
        ]
    },

    {
        question: "Where was Joel originally from?",
        answers: [
            ["Oakland, California", 0],
            ["Fairfield, California", 1],
            ["San Diego, California", 0],
            ["Sacramento, California", 0]
        ]
    },

    {
        question: "What was moving the yacht?",
        answers: [
            ["A giant octopus", 0],
            ["A giant sea crab", 1],
            ["A giant squid", 0],
            ["A giant sea turtle", 0]
        ]
    },

    {
        question: "How old is Minnow?",
        answers: [
            ["8 years old", 1],
            ["12 years old", 0],
            ["6 years old", 0],
            ["10 years old", 0]
        ]
    },

    {
        question: "Approximately how far was Aimee’s colony from Joel’s colony?",
        answers: [
            ["75 miles", 0],
            ["95 miles", 0],
            ["65 miles", 0],
            ["85 miles", 1]
        ]
    },

    {
        question: "What weapon does Joel use during his journey?",
        answers: [
            ["A shotgun", 0],
            ["A spear", 0],
            ["A crossbow", 1],
            ["A machete", 0]
        ]
    },

    {
        question: "What happened to Joel’s parents during the apocalypse?",
        answers: [
            ["They remained in Joel’s colony", 0],
            ["They disappeared while traveling", 0],
            ["They moved to another colony", 0],
            ["They were killed by monsters", 1]
        ]
    },

{
        question: "Which song does Mav1s play for Joel?",
        answers: [
            ["Stand by Me", 1],
            ["Sweet Child o’ Mine", 0],
            ["I Want to Know What Love Is", 0],
            ["Keep the Car Running", 0]
        ]
    },

    {
        question: "What was the call sign of Aimee’s colony?",
        answers: [
            ["3022", 1],
            ["3052", 0],
            ["3002", 0],
            ["3042", 0]
        ]
    },

    {
        question: "What was the name of Clyde’s son?",
        answers: [
            ["Evan", 0],
            ["Elliot", 1],
            ["Ethan", 0],
            ["Eric", 0]
        ]
    },

    {
        question: "How can a Queen Sandgobbler be identified?",
        answers: [
            ["By a loud roar coming from underground", 0],
            ["By large footprints appearing on the surface", 0],
            ["By the fin moving through the soil", 1],
            ["By the ground glowing beneath it", 0]
        ]
    },

    {
        question: "What does Clyde teach Joel about monsters?",
        answers: [
            ["How to communicate with them", 0],
            ["How to capture them", 0],
            ["How to tame them", 0],
            ["How to identify and avoid dangerous monsters", 1]
        ]
    },

    {
        question: "Where did Clyde and Minnow live when Elliot was killed?",
        answers: [
            ["An abandoned subway station", 1],
            ["A deserted airport terminal", 0],
            ["An underground shopping mall", 0],
            ["An abandoned train station", 0]
        ]
    },

    {
        question: "What is the name of the asteroid that causes the catastrophe?",
        answers: [
            ["Agatha 611", 0],
            ["Agatha 666", 0],
            ["Agatha 616", 1],
            ["Agatha 617", 0]
        ]
    }

];


let currentQuestion = 0;
let score = 0;


const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const startButton = document.getElementById("start-btn");
const restartButton = document.getElementById("restart-btn");
const shareButton = document.getElementById("share-btn");
const challengeButton = document.getElementById("challenge-btn");

const questionNumber = document.getElementById("question-number");
const questionText = document.getElementById("question");
const answersContainer = document.getElementById("answers");
const progressBar = document.getElementById("progress-bar");


startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);
shareButton.addEventListener("click", shareResult);
challengeButton.addEventListener("click", shareResult);


function startQuiz() {

    homeInfo.classList.add("hidden");

    currentQuestion = 0;
    score = 0;

    startScreen.classList.add("hidden");
    resultScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");

    showQuestion();
}


function showQuestion() {

    const current = questions[currentQuestion];

    questionNumber.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    questionText.textContent = current.question;

    answersContainer.innerHTML = "";

    const progress =
        ((currentQuestion + 1) / questions.length) * 100;

    progressBar.style.width = `${progress}%`;


    current.answers.forEach((answer) => {

        const button = document.createElement("button");

        button.className = "answer";

        button.textContent = answer[0];

        button.addEventListener("click", () => {
            selectAnswer(answer[1]);
        });

        answersContainer.appendChild(button);

    });
}


function selectAnswer(points) {

    score += points;

    currentQuestion++;

    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        showResult();

    }
}


function showResult() {

    homeInfo.classList.remove("hidden");

    quizScreen.classList.add("hidden");

    resultScreen.classList.remove("hidden");

    document.getElementById("final-score").textContent = score;


    let title;
    let description;
    let knowledge;
    let icon;


    if (score <= 6) {

        title = "🐸 Monster Bait";

        description =
            "The monsters may know more about Love and Monsters than you do! Time for another watch.";

        knowledge = "Casual Viewer";

        icon = "🐸";

    } else if (score <= 12) {

        title = "🏚️ Bunker Survivor";

        description =
            "You remember some of the movie, but quite a few details were lost somewhere along the journey.";

        knowledge = "Casual Fan";

        icon = "🏚️";

    } else if (score <= 18) {

        title = "🎒 Monster Survivor";

        description =
            "Not bad! You remember the major characters, monsters and events, but some details escaped you.";

        knowledge = "Good Fan";

        icon = "🎒";

    } else if (score <= 24) {

        title = "🏹 Seasoned Survivor";

        description =
            "Impressive! You know your monsters, colonies and characters pretty well.";

        knowledge = "Dedicated Fan";

        icon = "🏹";

    } else if (score <= 29) {

        title = "🐕 Monster Expert";

        description =
            "Excellent! You remember most of the details that make Love and Monsters memorable.";

        knowledge = "Expert Fan";

        icon = "🐕";

    } else {

        title = "🧠 Love and Monsters Encyclopedia";

        description =
            "Perfect score! You remember practically every detail of Joel’s journey through the monster apocalypse.";

        knowledge = "Ultimate Fan";

        icon = "🧠";
    }


    document.getElementById("result-title").textContent = title;

    document.getElementById("result-description").textContent =
        description;

    document.getElementById("knowledge-level").textContent =
        knowledge;

    document.getElementById("result-icon").textContent =
        icon;

    progressBar.style.width = "100%";
}


function restartQuiz() {

    resultScreen.classList.add("hidden");

    startScreen.classList.remove("hidden");

    homeInfo.classList.remove("hidden");

}


async function shareResult() {

    const title =
        document.getElementById("result-title").textContent;

    const knowledge =
        document.getElementById("knowledge-level").textContent;

    const finalScore =
        document.getElementById("final-score").textContent;


    const shareText =
        `🐸 I scored ${finalScore}/30 on the Love and Monsters Quiz!\n\n` +
        `${title}\n` +
        `Knowledge level: ${knowledge}\n\n` +
        `How well do YOU know Love and Monsters?`;


    const shareData = {

        title: "Love and Monsters Quiz",

        text: shareText,

        url: "https://apocalypsequizzes.com/love-and-monsters-quiz/"

    };


    try {

        if (navigator.share) {

            await navigator.share(shareData);

        } else {

            await navigator.clipboard.writeText(
                shareText +
                "\n\nhttps://apocalypsequizzes.com/love-and-monsters-quiz/"
            );

            alert(
                "Your result has been copied! You can paste it anywhere."
            );

        }

    } catch (error) {

        console.log("Sharing cancelled.");

    }

}