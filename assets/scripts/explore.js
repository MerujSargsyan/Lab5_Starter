window.addEventListener('DOMContentLoaded', init);

function init() {
  const selector = document.querySelector("#voice-select");
  const speakButton = document.querySelector("button");
  const faceImage = document.querySelector("[alt='Smiling face']");
  const textContent = document.querySelector("#text-to-speak");

  let voices = [];

  function getVoiceList() {
    voices = window.speechSynthesis.getVoices();

    for (const voice of voices) {
      const option = document.createElement("option");
      option.value = voice.name;
      option.textContent = voice.name;
      selector.appendChild(option);
    }
  }

  speechSynthesis.addEventListener("voiceschanged", getVoiceList);
  getVoiceList();

  speakButton.addEventListener("click", function () {
    window.speechSynthesis.cancel();
    if(selector.value === "select") {
      return;
    }
    const selectedVoice = voices.find(function(voice) {
      return voice.name === selector.value;
    });
    const utterance = new SpeechSynthesisUtterance(textContent.value);
    utterance.voice = selectedVoice;

    utterance.onstart = function () {
      faceImage.src = "assets/images/smiling-open.png";
    };

    utterance.onend = function () {
      faceImage.src = "assets/images/smiling.png";
    };

    window.speechSynthesis.speak(utterance);
  });
}
