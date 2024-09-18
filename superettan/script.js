// Uppdatera månadsinsättning och total resebudget
function updateContribution() {
    const monthlyContribution = document.getElementById("monthlyContribution").value;
    const yearlyTotal = monthlyContribution * 12;

    document.getElementById("selectedAmount").innerText = `${monthlyContribution} kr`;
    document.getElementById("totalAmount").innerText = `${yearlyTotal} kr`;
}

// Nedräkning till resan
function countdown() {
    const targetDate = new Date("2025-09-18T00:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerText = `${days} dagar, ${hours} timmar, ${minutes} minuter, ${seconds} sekunder`;

    if (timeLeft < 0) {
        document.getElementById("countdown").innerText = "Resan har börjat!";
    }
}

// Uppdatera nedräkningen varje sekund
setInterval(countdown, 1000);

// Anmälda deltagare array
let participants = [];

// Funktion för att anmäla sig
function registerParticipant() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const contribution = document.getElementById("contribution").value;

    if (firstName && lastName && email && contribution) {
        const participant = {
            name: `${firstName} ${lastName}`,
            email: email,
            contribution: contribution
        };

        participants.push(participant);
        updateParticipantList();
        clearForm();
    }
}

// Uppdatera deltagarlistan
function updateParticipantList() {
    const participantList = document.getElementById("participantList");
    const participantCount = document.getElementById("participantCount");

    participantList.innerHTML = "";
    participants.forEach(participant => {
        const li = document.createElement("li");
        li.textContent = `${participant.name} - Månadsinsättning: ${participant.contribution} kr`;
        participantList.appendChild(li);
    });

    participantCount.innerText = participants.length;
}

// Rensa formuläret efter anmälning
function clearForm() {
    document.getElementById("signupForm").reset();
}
