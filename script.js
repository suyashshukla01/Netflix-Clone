const langSelect = document.querySelector('#lang-select');
const heroH1 = document.querySelector('.hero-content h1');
const heroH2 = document.querySelector('.hero-content h2');
const heroP = document.querySelector('.hero-content p');

langSelect.addEventListener('change', (e) => {
    if (e.target.value === "hindi") {
        heroH1.textContent = "अनलिमिटेड मूवीज, टीवी शो और बहुत कुछ";
        heroH2.textContent = "₹149 से शुरू होता है। कभी भी रद्द करें।";
        heroP.textContent = "क्या देखना शुरू करने के लिए तैयार हैं? अपना ईमेल दर्ज करें।";
    } else {
        heroH1.textContent = "Unlimited movies, TV shows and more";
        heroH2.textContent = "Starts at ₹149. Cancel at any time.";
        heroP.textContent = "Ready to watch? Enter your email to create or restart your membership.";
    }
});

const emailInput = document.querySelector('.email-input');
const getStartedBtn = document.querySelector('.get-started-btn');

getStartedBtn.addEventListener('click', () => {
    const email = emailInput.value.trim();

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
    if (email === "" || !emailPattern.test(email)) {
        alert("Please enter a valid email address.");
    } else {
        alert("Welcome! Let's get started.");
    }
});

const signinBtn = document.querySelector('.signin');
const getStartedBtnHover = document.querySelector('.get-started-btn');

signinBtn.addEventListener('mouseover', () => {
    signinBtn.style.backgroundColor = "#ff4d4d";
    signinBtn.style.transition = "background-color 0.3s ease";
});

signinBtn.addEventListener('mouseout', () => {
    signinBtn.style.backgroundColor = "red";
});

getStartedBtnHover.addEventListener('mouseover', () => {
    getStartedBtnHover.style.backgroundColor = "#ff4d4d";
    getStartedBtnHover.style.transition = "background-color 0.3s ease";
});

getStartedBtnHover.addEventListener('mouseout', () => {
    getStartedBtnHover.style.backgroundColor = "red";
});
