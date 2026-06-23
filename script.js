// Whiskers & Wonders

let clicks = 0;

const adoptButtons = document.querySelectorAll(".adopt");
const footer = document.querySelector("footer");
const title = document.querySelector("h1");
const subtitle = document.querySelector(".subtitle");
const kittens = document.querySelectorAll(".kitten");
const safeMode = document.getElementById("safeMode");

let safe = true;

safeMode.addEventListener("click", () => {

    safe = !safe;

    if (safe) {
        document.body.classList.remove("glitch");
        safeMode.textContent = "🌸 Safe Mode";
    } else {
        document.body.classList.add("glitch");
        safeMode.textContent = "👁 Safe Mode Off";
    }

});

adoptButtons.forEach((button) => {

    button.addEventListener("click", () => {

        clicks++;

        button.textContent = "💖 Adoption Pending";

        // Stage 1
        if (clicks >= 5) {

            footer.textContent = "Made with l0ve ♡";

        }

        // Stage 2
        if (clicks >= 10) {

            title.textContent = "🐈 Whiskers & W0nders 🩷";

            subtitle.textContent =
                "Every kitten deserves a forever h0me.";

        }

        // Stage 3
        if (clicks >= 15) {

            document.body.classList.add("glitch");

            kittens[0].querySelector("p").textContent =
                "Loves waiting by the window every night.";

        }

        // Stage 4
        if (clicks >= 20) {

            kittens[1].querySelector("p").textContent =
                "Professional nap expert. Hasn't slept since Tuesday.";

            footer.textContent =
                "Made with love ♡ please don't refresh.";

        }

        // Stage 5
        if (clicks >= 25) {

            title.textContent =
                "👁 Whispers & Wanderers";

            subtitle.textContent =
                "Every visitor deserves a forever home.";

        }

        // Final Stage
        if (clicks >= 30) {

            footer.innerHTML =
                "You adopted them.<br><br>They adopted you.";

            kittens.forEach((kitten) => {

                kitten.style.transform =
                    "rotate(" + (Math.random() * 6 - 3) + "deg)";

            });

        }

    });

});

// Tiny random glitches

setInterval(() => {

    if (clicks > 10 && !safe) {

        const randomKitten =
            kittens[Math.floor(Math.random() * kittens.length)];

        randomKitten.classList.add("glitch");

        setTimeout(() => {

            randomKitten.classList.remove("glitch");

        }, 300);

    }

}, 4000);
let clicks = 0;

document.querySelectorAll("button").forEach(button => {

button.addEventListener("click",()=>{

clicks++;

if(clicks==5){

document.querySelector(".subtitle").textContent=
"Every kitten deserves a forever hmoe.";

}

if(clicks==15){

document.querySelector("h1").textContent=
"Whispers & Wonders 💗";

}

if(clicks==30){

document.body.style.filter="grayscale(setTimeout(()=>{

const popup=document.getElementById("popup");

popup.style.opacity=1;

},45000);
}

});

});
console.log(

`

██████╗

WHISKERS & WONDERS

Employee Login

Status: ACTIVE

Current kittens: 6

Expected kittens: 6

Detected kittens: 7

`

);
let moonClicks=0;

document.getElementById("moon").onclick=()=>{

moonClicks++;

if(moonClicks==7){

window.location="lost.html";

}

};
document.getElementById("a1").innerHTML="✅ First Visitor";

setTimeout(()=>{

document.getElementById("a4").innerHTML="✅ Stayed 60 Seconds";

showToast("🏆 Achievement Unlocked!");

},60000);

if(clicks>=10){

document.getElementById("a2").innerHTML="✅ Clicked 10 Times";

}
const whispers=[

"She's sleeping.",

"Don't refresh.",

"Did Luna move?",

"Someone adopted you.",

"Don't trust the visitor count.",

"Count the paw prints."

];

setInterval(()=>{

const box=document.getElementById("whisper");

box.innerHTML=whispers[Math.floor(Math.random()*whispers.length)];

box.style.opacity=.7;

setTimeout(()=>{

box.style.opacity=0;

},3000);

},25000);
let visitors=18421;

let adopted=18420;

setInterval(()=>{

visitors++;

if(Math.random()>.75){

adopted+=2;

}else{

adopted++;

}

document.getElementById("counter").innerHTML=

"Visitors: "+visitors+

"<br>Cats Adopted: "+adopted;

},8000);
let moon=0;

document.getElementById("moon").onclick=()=>{

moon++;

if(moon==3){

showToast("🌙 The moon smiles back.");

}

if(moon==7){

window.location="lost.html";

}

};
window.onload=()=>{

setTimeout(()=>{

document.getElementById("loading").style.opacity=0;

setTimeout(()=>{

document.getElementById("loading").remove();

},1000);

},1500);

}
