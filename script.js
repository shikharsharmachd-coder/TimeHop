/* =====================================================
   1. INITIALIZATION (PAGE LOAD)
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    loadUser();

});


/* =====================================================
   2. LOGIN / USER SYSTEM
   - Sign in button
   - Create account
   - Load user from localStorage
===================================================== */

let signinBtn, modal, createBtn, profileBox, avatarLetter;

document.addEventListener("DOMContentLoaded", () => {

    signinBtn = document.getElementById("signinBtn");
    modal = document.getElementById("loginModal");
    createBtn = document.getElementById("createAccount");
    profileBox = document.getElementById("profileBox");
    avatarLetter = document.getElementById("avatarLetter");

    loadUser();

    // SIGN IN CLICK
    if(signinBtn){
        signinBtn.onclick = () => {
            if(modal) modal.classList.remove("hidden");
        };
    }

    // CREATE ACCOUNT
    if(createBtn){
        createBtn.onclick = () => {

            const name = document.getElementById("loginName").value;
            const email = document.getElementById("loginEmail").value;
            const gender = document.getElementById("loginGender").value;
            const bio = document.getElementById("loginBio").value;

            if(!name || !email){
                alert("Please enter Name and Email");
                return;
            }

            localStorage.setItem("userName",name);
            localStorage.setItem("userEmail",email);
            localStorage.setItem("userGender",gender);
            localStorage.setItem("userBio",bio);

            if(modal) modal.classList.add("hidden");

            location.reload();
        };
    }

    // PROFILE CLICK
    if(profileBox){
        profileBox.addEventListener("click",function(){
            window.location.href="profile.html";
        });
    }

});


/* ---- Load Existing User ---- */

function loadUser(){

const name = localStorage.getItem("userName");

if(name && signinBtn && profileBox && avatarLetter){

signinBtn.style.display = "none";

profileBox.classList.remove("hidden");

avatarLetter.innerText = name.charAt(0).toUpperCase();

if(modal) modal.classList.add("hidden");

}

}


/* ---- Open Login Modal ---- */

if(signinBtn && modal){

signinBtn.onclick = () => {

modal.classList.remove("hidden");

};

}


/* ---- Create New User ---- */

if(createBtn){

createBtn.onclick = () => {

const name = document.getElementById("loginName").value;
const email = document.getElementById("loginEmail").value;
const gender = document.getElementById("loginGender").value;
const bio = document.getElementById("loginBio").value;

if(!name || !email){

alert("Please enter Name and Email");
return;

}

localStorage.setItem("userName",name);
localStorage.setItem("userEmail",email);
localStorage.setItem("userGender",gender);
localStorage.setItem("userBio",bio);

if(modal) modal.classList.add("hidden");

location.reload();

};

}


/* ---- Redirect to Profile Page ---- */

if(profileBox){

profileBox.addEventListener("click",function(){

window.location.href="profile.html";

});

}


/* =====================================================
   3. COUNTER ANIMATION (Statistics Section)
===================================================== */

const counters = document.querySelectorAll(".counter");

if(counters.length > 0){

counters.forEach(counter => {

const updateCounter = () => {

const target = +counter.getAttribute("data-target");
const current = +counter.innerText;

const increment = target / 100;

if(current < target){

counter.innerText = Math.ceil(current + increment);
setTimeout(updateCounter,20);

}
else{

counter.innerText = target;

}

};

updateCounter();

});

}


/* =====================================================
   4. AI DOMAIN DISPLAY (Present Page)
===================================================== */

function showInfo(type){

const aiData = {

healthcare:{
title:"Healthcare AI",
text:`AI is transforming healthcare by improving diagnosis, treatment planning, and patient monitoring.

• AI analyzes medical images like X-rays and MRIs to detect diseases early.
• Hospitals use predictive analytics to anticipate patient risks.
• Robotic surgery systems assist doctors with precision.

Key AI Models: * Med-PaLM 3 / Med-Gemini: Specialized Large Language Models (LLMs) that can pass medical licensing exams and provide highly accurate clinical advice.

AlphaFold 3 (Google DeepMind): A model that predicts the 3D structures of proteins and DNA.

Deeper Detail: In 2026, healthcare has moved to Agentic AI. These aren't just chatbots; they are "Agents" that autonomously summarize your entire medical history for a doctor or cross-reference your symptoms with millions of medical papers in seconds.

Why it Matters: AlphaFold has cut the time to discover new drugs from years to months, meaning cures for rare diseases are being found faster than ever before.
`,
image:"healthcare.jpg"
},

finance:{
title:"Finance AI",
text:`AI is revolutionizing finance.

• Fraud detection systems monitor transactions.
• Algorithmic trading automates investments.
• Banks use AI chatbots for support.

Key AI Models: * Collatio (Scry AI): Used for automating complex document processing and detecting deep financial anomalies.

Kensho: An AI used by major banks to analyze global market events and predict their impact on investments.

Deeper Detail: Finance is moving toward Hyper-Personalization. AI now uses "Life Event Modeling"—it can predict you might need a home loan weeks before you even start looking based on your spending patterns.

Why it Matters: AI models are now so fast they catch "Micro-frauds" (tiny $1 transactions) that used to go unnoticed but add up to billions in theft annually.
`,
image:"finance.jpg"
},

transport:{
title:"Transportation AI",
text:`AI powers self-driving vehicles and traffic optimization.


Key AI Models: * Tesla FSD (Full Self-Driving) v13: Uses "End-to-End Neural Networks" where the AI learns to drive by watching millions of human videos rather than following code.

Waymo Driver: The leading autonomous "Robotaxi" model operating in major global cities without any human backup.

Optibus: An AI platform used by cities to predict bus occupancy and dynamically change routes to avoid traffic.

Deeper Detail: Transportation is becoming Connected Infrastructure. In 2026, AI doesn't just live in the car; it lives in the traffic lights and the roads. Cars "talk" to each other (V2V communication) to prevent accidents before they happen, allowing for higher speeds with zero collisions.

Why it Matters: It is turning travel time into "productive time." When the car drives itself, your commute becomes a mobile office or a relaxation space, while also slashing carbon emissions through perfectly efficient driving.

Examples:
Tesla Autopilot and Waymo autonomous cars.`,
image:"transportAi.jpg"
},

generative:{
title:"Generative AI",
text:`Generative AI creates content like text, images and video.

Key AI Models: * GPT-5 (OpenAI): The next leap in reasoning, capable of handling complex, multi-step projects (like writing a whole app from a single prompt).

Google Gemini 2.0: A truly multimodal model that can watch a video, listen to a song, and read a document simultaneously to provide a unified answer.

Sora / Veo: High-fidelity video generation models that can create movie-quality clips from text.

Deeper Detail: GenAI has evolved into Agentic AI. It no longer just "writes text"; it "takes action." You can give it a goal (e.g., "Organize a 3-day conference for 50 people"), and it will autonomously email vendors, book venues, and create the schedules.

Why it Matters: It democratizes creativity. Someone with no coding or design skills can now build software or create high-end films, shifting the focus from "how to build" to "what to imagine."

Examples:
ChatGPT, Midjourney and DALL-E.`,
image:"generative.jpg"
},

robotics:{
title:"Robotics AI",
text:`Robots powered by AI automate factories and assist humans.

Key AI Models: * NVIDIA Isaac / NIM: Physical AI models that allow robots to simulate physics and learn tasks in a digital world before doing them in reality.

Tesla Optimus Gen 3: A humanoid model designed for general-purpose labor (folding laundry, moving boxes).

Figure 02: A robot integrated with OpenAI’s vision-language models, allowing it to "talk" and "think" while performing manual tasks.

Deeper Detail: We have moved into the era of Physical AI. Unlike old robots that followed a strict script, 2026 robots use Foundation Models for Action. This means if you tell a robot "clean up the spill," it understands what a spill is, what a towel is, and how to use it without being pre-programmed for that specific mess.

Why it Matters: Robotics is solving the "Automation Gap" in manufacturing and elder care, taking over dangerous or repetitive jobs so humans can focus on creative and emotional roles.


Examples:
Boston Dynamics robots.`,
image:"robot.jpg"
},

cyber:{
title:"Cybersecurity AI",
text:`AI detects threats instantly and prevents cyber attacks.

Key AI Models: * Singularity XDR (SentinelOne): An autonomous cybersecurity model that detects and kills malware the millisecond it tries to run.

Darktrace HEAL: A model that doesn't just block attacks but "heals" the broken code in a system after a breach.

Deeper Detail: We are seeing the rise of AI Red Teaming. This is where "good" AI models constantly attack their own company's security to find weak spots before a "bad" AI does.

Why it Matters: As hackers use AI to create "Deepfake" voices to scan people, these security models analyze the "tone" and "intent" of a call to warn you if the person on the phone is a robot.
`,
image:"cybersecurity.jpg"
},

education:{
title:"Education AI",
text:`AI personalizes learning and powers AI tutors.

Key AI Models: * Khanmigo (Khan Academy): A personalized AI tutor that acts as a guide rather than just giving answers.

Duolingo Max: Uses GPT-4 level models to explain why you made a mistake in a language, not just that you were wrong.

Deeper Detail: Dynamic Scaffolding is the big trend. If you struggle with a math problem, the AI doesn't give the answer; it identifies the specific "gap" in your 5th-grade knowledge and teaches you that first.

Why it Matters: It eliminates "Administrative Burnout." AI now handles 70% of grading and lesson planning, letting teachers focus on mentoring students emotionally.
`,
image:"education.jpg"
},

agriculture:{
title:"Agriculture AI",
text:`AI helps monitor crops and optimize farming.

Key AI Models: * Farm Again AI: An Indian-developed model that uses solar sensors to automate irrigation and fertilization.

Blue River See & Spray: A computer vision model that identifies individual weeds and sprays them with pesticide, leaving the crop untouched.

Deeper Detail: Edge AI is crucial here. Drones don't need the internet; they have "brains" (chips) on board that process images of leaves to spot fungus or pests in real-time.

Why it Matters: It has led to a 30% reduction in water waste and significantly higher crop yields, which is essential for feeding a growing global population.
`,
image:"agriculture.jpg"
},

retail:{
title:"Retail AI",
text:`AI recommends products and predicts inventory.

Key AI Models: * Menura AI: An "Agentic Commerce" model that can actually go and buy things for you based on your budget and preferences.

Walmart’s GenAI Search: Integrated with ChatGPT to allow for "Lifestyle Search" (e.g., "Help me plan a 5-year-old's birthday party").

Deeper Detail: Retailers are using "Phygital" models. While you walk through a store, AI-powered "Smart Shelves" detect if a product is out of stock and automatically order more from the warehouse.

Why it Matters: It moves us toward a "Zero-Click" world where your AI knows you're out of milk and has it delivered before you even check the fridge.

`,
image:"retailAI.jpg"
},

space:{
title:"Space & Defense AI",
text:`AI helps analyze satellite data and power autonomous spacecraft.

Key AI Models: * NASA’s GRX-810: An AI-designed alloy model used to create 3D-printed materials that are 1,000 times more durable in extreme heat.

CIMON (Crew Interactive Mobile Companion): A flying AI head on the International Space Station that assists astronauts with complex repairs.

Deeper Detail: Terrain-Relative Navigation (TRN) allows spacecraft to land on Mars in areas previously thought too "dangerous" because the AI can see and avoid rocks in microseconds.

Why it Matters: In defence, AI helps with Hypersonic Vehicle tracking—identifying objects moving five times the speed of sound—which is impossible for human radar operators to track alone.
`,
image:"images/space.jpg"
}

};

const selected = aiData[type];

if(!selected) return;

const title = document.getElementById("ai-title");
const text = document.getElementById("info-text");
const img = document.getElementById("ai-image");

if(title) title.innerText = selected.title;
if(text) text.innerText = selected.text;

if(img){
img.src = selected.image;
img.style.display = "block";
}

}


/* =====================================================
   5. TOOL PAGE NAVIGATION
===================================================== */

function openTool(tool){

window.location.href = `tool.html?tool=${tool}`;

}


/* =====================================================
   6. CONTACT FORM HANDLING
   - Validation
   - Store messages in localStorage
===================================================== */

document.querySelector(".btn")?.addEventListener("click", function(){

const name = document.querySelector('input[type="text"]').value;
const email = document.querySelector('input[type="email"]').value;
const message = document.querySelector("textarea").value;

if(!name || !email || !message){
alert("Please fill all fields");
return;
}

let messages = JSON.parse(localStorage.getItem("messages")) || [];

messages.push({
name:name,
email:email,
message:message,
date:new Date().toLocaleString()
});

localStorage.setItem("messages", JSON.stringify(messages));

alert("Message Sent!");

document.querySelector('input[type="text"]').value="";
document.querySelector('input[type="email"]').value="";
document.querySelector("textarea").value="";

});


/* =====================================================
   7. NAVBAR SCROLL EFFECT
===================================================== */

let lastScrollTop = 0;

window.addEventListener("scroll", function(){

const navbar = document.querySelector("nav");

if(!navbar) return;

let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

if(scrollTop > lastScrollTop){

navbar.style.top = "-110px";

}else{

navbar.style.top = "0";

}

lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;

});

// FUTURE 


/* =========================
   FUTURE DATA (AI ENGINE)
========================= */

const careers = {
  ai: {
    titles: [
      "AI Engineer Path 🚀",
      "Future AI Architect 🤖",
      "Machine Intelligence Specialist 🧠"
    ],

    greetings: [
      "Interesting choice...",
      "You’re stepping into something big.",
      "This path suits analytical thinkers.",
      "You’re entering the core of future tech."
    ],

    roles: [
      ["AI Engineer", "ML Engineer", "Deep Learning Expert"],
      ["AI Researcher", "Data Scientist", "NLP Engineer"]
    ],

    pros: [
      "High salary and demand",
      "Work on cutting-edge technology",
      "Global opportunities"
    ],

    cons: [
      "Requires strong math foundation",
      "Continuous learning needed",
      "Highly competitive field"
    ]
  }
};


function getRandom(arr){
  return arr[Math.floor(Math.random() * arr.length)];
}
document.querySelectorAll(".future-card").forEach(card => {

  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = (y / rect.height - 0.5) * 10;
    const rotateY = (x / rect.width - 0.5) * -10;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0) scale(1)";
  });

});


document.querySelectorAll(".future-card").forEach(card => {

  card.addEventListener("click", function(e) {
    const circle = document.createElement("span");
    circle.classList.add("ripple");

    const rect = card.getBoundingClientRect();
    circle.style.left = `${e.clientX - rect.left}px`;
    circle.style.top = `${e.clientY - rect.top}px`;

    card.appendChild(circle);

    setTimeout(() => circle.remove(), 600);
  });

});

//past - fixed selector
document.querySelectorAll(".ai-card-past").forEach(card => {
  card.addEventListener("click", function(e){

    const circle = document.createElement("span");
    circle.classList.add("ripple");

    const rect = card.getBoundingClientRect();
    circle.style.left = `${e.clientX - rect.left}px`;
    circle.style.top = `${e.clientY - rect.top}px`;

    card.appendChild(circle);

    setTimeout(()=>circle.remove(),600);
  });
});



// document.querySelectorAll(".past-card").forEach(card => {

//   card.addEventListener("click", () => {

//     const topic = card.getAttribute("data-topic");

//     window.location.href = `detail.html?topic=${topic}`;

//   });

// });

document.querySelectorAll(".ai-card-past").forEach(card => {

  card.addEventListener("click", () => {

    const topic = card.getAttribute("data-topic");

    window.location.href = `detail.html?topic=${topic}`;

  });

});

document.querySelectorAll(".tool-card").forEach(card => {

  card.addEventListener("click", function(e){

    const circle = document.createElement("span");
    circle.classList.add("ripple");

    const rect = card.getBoundingClientRect();
    circle.style.left = `${e.clientX - rect.left}px`;
    circle.style.top = `${e.clientY - rect.top}px`;

    card.appendChild(circle);

    setTimeout(()=>circle.remove(),600);
  });

});





const track = document.getElementById("toolsTrack");

function slideCards(){

  // move left
  track.style.transform = "translateX(-290px)";

  setTimeout(() => {

    // move first card to end
    track.appendChild(track.children[0]);

    // reset position instantly (invisible)
    track.style.transition = "none";
    track.style.transform = "translateX(0)";

    // re-enable transition
    setTimeout(() => {
      track.style.transition = "transform 0.8s ease";
    }, 50);

  }, 800);

}

setInterval(slideCards, 2500);


const grid = document.querySelector(".tools-grid");

function rotateCards(){

  const cards = Array.from(grid.children);

  // add fade effect
  cards.forEach(card => card.classList.add("fade-move"));

  setTimeout(() => {

    // move last to first (clockwise feel)
    grid.insertBefore(cards[cards.length - 1], cards[0]);

    // remove fade
    cards.forEach(card => card.classList.remove("fade-move"));

  }, 300);

}

setInterval(rotateCards, 2500);



document.addEventListener("mousemove", (e) => {
  const card = document.querySelector(".spiral-notebook");
  const x = e.clientX;
  const y = e.clientY;

  card.style.background = `
    radial-gradient(circle at ${x}px ${y}px, rgba(0,195,255,0.15), transparent 40%),
    rgba(15, 23, 42, 0.65)
  `;
});