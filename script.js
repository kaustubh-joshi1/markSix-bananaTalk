var inputText = document.querySelector("#usertext");
var outputText = document.querySelector("#translation");
var translateButton = document.querySelector("#btn-translate");
var APICall = "https://api.funtranslations.com/translate/minion.json";

function handleError(error){
    console.log("An error occured", error);
};

function translate(){
    var userSpeak = inputText.value;

    fetch(`${APICall}?text=${userSpeak}`)
        .then(response => response.json())
        .then(response => {
            var translation = response.contents.translated;
            outputText.innerHTML = translation;
        })
        .catch(handleError);
};

translateButton.addEventListener("click", translate);