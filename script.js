
// Open the birthday surprise

function openSurprise() {

    const welcome = document.getElementById("welcomeScreen");
    const music = document.getElementById("backgroundMusic");

    welcome.classList.add("hide");

    // Music starts after the visitor clicks
    music.play().catch(() => {
        console.log("Music playback needs user interaction.");
    });

}


// Birthday Countdown

function updateCountdown() {

    // December 21, 2026 at midnight
    const birthday = new Date(2026, 11, 21, 0, 0, 0).getTime();

    const now = new Date().getTime();

    const difference = birthday - now;

    if (difference <= 0) {

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        document.getElementById("countdownMessage").textContent =
            "It's your special day! Happy Birthday, BUBU! ❤️";

        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (difference % (1000 * 60)) / 1000
    );

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

}


// Start countdown
updateCountdown();

setInterval(updateCountdown, 1000);


// Love Letter Typing Animation

const letter =
`Happy Birthday, my dear Aun BUBU! ❤️

I just want you to know how special you are to me.

Every memory we create is something I want to treasure.
Your smile, your happiness and the little moments
we share mean so much to me.

On your special day, I wish you endless happiness,
success, good health and all the beautiful things
you deserve.

Keep smiling and keep shining.

You will always have a special place in my heart.

Happy Birthday once again! ❤️`;

let letterIndex = 0;
let letterStarted = false;

function typeLetter() {

    if (letterIndex < letter.length) {

        document.getElementById("loveLetter").textContent +=
            letter.charAt(letterIndex);

        letterIndex++;

        setTimeout(typeLetter, 35);

    }

}


// Start letter animation when the section appears

const letterSection = document.getElementById("letter");

const letterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting && !letterStarted) {

            letterStarted = true;
            typeLetter();

        }

    });

}, { threshold: 0.3 });

letterObserver.observe(letterSection);


// Final Birthday Surprise

function showBirthdayWish() {

    const message = document.getElementById("finalMessage");

    message.innerHTML =
        "🎉 HAPPY BIRTHDAY AUN BUBU! 🎉<br><br>" +
        "You are one of the most beautiful parts of my world. ❤️<br>" +
        "May all your dreams come true! 🌸";

    // Create confetti

    for (let i = 0; i < 100; i++) {

        const confetti = document.createElement("div");

        confetti.innerHTML = ["❤️", "💕", "🌸", "✨", "💗"][
            Math.floor(Math.random() * 5)
        ];

        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-30px";
        confetti.style.fontSize = "20px";
        confetti.style.zIndex = "2000";
        confetti.style.pointerEvents = "none";

        document.body.appendChild(confetti);

        const animation = confetti.animate(
            [
                { transform: "translateY(0) rotate(0deg)", opacity: 1 },
                {
                    transform:
                        `translateY(${window.innerHeight + 50}px) rotate(720deg)`,
                    opacity: 0
                }
            ],
            {
                duration: 2500 + Math.random() * 2000,
                easing: "ease-in"
            }
        );

        animation.onfinish = () => confetti.remove();

    }

}
