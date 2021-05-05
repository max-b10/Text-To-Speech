console.log("app.js running");

const speechSynthesis = window.speechSynthesis;
const textArea = document.querySelector("#enterText");
const speakButton = document.querySelector("#speakButton");

speakButton.addEventListener("click", (e) => {
  e.preventDefault();
  speakText(textArea.value);
});

function speakText(text) {
  const speech = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(speech);
}
