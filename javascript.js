
function myFunction() {
    // Trova tutti gli elementi di tipo radio con name="scelta"
    var radioButtons = document.getElementsByName('scelta');

    // Itera attraverso gli elementi radioButtons
    for (var i = 0; i < radioButtons.length; i++) {
        // Verifica se l'elemento radio è selezionato
        if (radioButtons[i].checked) {
            if(radioButtons[i].id == "rd1"){
                window.location.href = "film.html";
            }
            if(radioButtons[i].id == "rd2"){
                window.location.href = "eat.html";
            }
            if(radioButtons[i].id == "rd3"){
                window.location.href = "todo.html";
            }
            break;  // Esci dal ciclo poiché hai trovato l'elemento selezionato
        }
    }
}

function spinWheel() {
    var wheel = document.getElementById('wheel');
    var segments = 6; // Number of segments
    var degreesPerSegment = 360 / segments;

    // Calculate a random degree within a segment
    var randomDegree = Math.floor(Math.random() * degreesPerSegment);

    // Calculate the rotation for landing on a specific segment
    var rotation = 360 * 5 + randomDegree + Math.floor(Math.random() * 360); // 5 full rotations + random degree

    wheel.style.transform = 'rotate(' + rotation + 'deg)';

    // Determine the segment based on the rotation
    var segmentIndex = Math.floor((rotation % 360) / degreesPerSegment);
    displayResult(segmentIndex);
}

function displayResult(segmentIndex) {
    var resultElement = document.getElementById('result');
    var segments = ["Red", "Blue", "Green", "Yellow", "Purple", "Cyan"];
    resultElement.innerText = "The wheel stopped in the " + segments[segmentIndex] + " segment!";
}

