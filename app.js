const portfolioButton = document.querySelector("#return-button");

const speechSynthesis = window.speechSynthesis;
const form = document.querySelector("#form");
const textArea = document.querySelector("#enterText");
const speakButton = document.querySelector("#speakButton");
const chooseVoice = document.querySelector("#choose-voice");

portfolioButton.addEventListener("click", () => {
  window.location.replace("https://maxbungay.com");
});

let allVoices = [];

// Populate the voice selection dropdown:
const populateVoices = () => {
  allVoices = speechSynthesis.getVoices();
  allVoices.forEach((voice) => {
    // Create option element for each voice type:
    const option = document.createElement("option");
    // Fill option with voice and language
    option.textContent = `${voice.name} (${voice.lang})`;

    option.setAttribute("data-lang", voice.lang);
    option.setAttribute("data-name", voice.name);
    chooseVoice.appendChild(option);
  });
};
populateVoices();

if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoices;
}
// const isChrome = !!window.chrome && !!window.chrome.webstore;

// if (isChrome) {
//   if (speechSynthesis.onvoiceschanged !== undefined) {
//     speechSynthesis.onvoiceschanged = populateVoices();
//   }
// }

function speakText(text) {
  const speechText = new SpeechSynthesisUtterance(textArea.value);

  // Select the voice from the options dropdown:
  const selectedVoice =
    chooseVoice.selectedOptions[0].getAttribute("data-name");

  allVoices.forEach((voice) => {
    if (voice.name === selectedVoice) {
      speechText.voice = voice;
    }
  });
  // console.log(speechText);
  speechText.volume = 1;
  speechText.rate = 1;
  speechText.pitch = 1;
  speechSynthesis.speak(speechText);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  speakText();
});
chooseVoice.addEventListener("change", () => speakText());
