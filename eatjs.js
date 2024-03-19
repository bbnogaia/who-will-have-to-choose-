function eat(){

    const sleep = (ms) =>
    new Promise(resolve => setTimeout(resolve, ms));

    var girlfriendName = document.getElementById("gf").value;
    var boyfriendName = document.getElementById("bf").value;

    // Generate a random number (0 or 1)
    var randomNum = Math.floor(Math.random() * 2);

    // Decide based on the random number
    var decision = (randomNum === 0) ? girlfriendName : boyfriendName;

    // Display the decision in the "finaldecision" paragraph
    document.getElementById('prologue').innerText = "The dreadful decision-maker is...";

    result = decision.bold();
    setTimeout(() => document.getElementById("finaldecision").innerHTML += result, 1000)
}

let count = 0;

document.addEventListener('DOMContentLoaded', () => {
    const buttonAdd = document.getElementById('add');
    const lists = document.getElementById('lists');
    const textInput = document.querySelector('.textInput');

    buttonAdd.addEventListener('click', generateList);

    function generateList(event) {
        event.preventDefault();

    if (textInput.value === '') return;

    const li =  document.createElement('li');
    lists.appendChild(li);    
    li.appendChild(document.createTextNode(textInput.value));
    count++;
    
    const buttonDelete = document.createElement('button');
    buttonDelete.className = 'delete';
    buttonDelete.appendChild(document.createTextNode('delete'));    
    li.appendChild(buttonDelete);
    
    textInput.value = '';

    // Assegna un colore diverso al segmento della ruota
    const hue = Math.floor(Math.random() * 360); // Genera un valore casuale per l'HSL
    li.style.backgroundColor = `hsl(${hue}, 70%, 80%)`;
    
    buttonDelete.addEventListener('click', (event) =>{
        const parentNodeEl = event.target.parentNode;
        setTimeout(() =>{
            parentNodeEl.remove();
            count--;
            updateWheelColors();
        }, 500)
        
    });
    updateWheelColors();
    }
});


function spinWheel() {
    var wheel = document.getElementById('wheel');
    var segments = count;
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
    var segments_list = lists.querySelectorAll('li'); // Use querySelectorAll to get all li elements
    segments_list.forEach(li => {
        var deletebutton = li.querySelector(".delete");
        if (deletebutton){
            deletebutton.remove();
        }
    })
    var segments = Array.from(segments_list);
    document.getElementById("prologue2").innerHTML = "the place i choose for you is..." 
    setTimeout(() => resultElement.innerHTML += "<b>" + segments[segmentIndex].textContent + "</b>", 1000)// Access textContent of the selected li
}


function updateWheelColors() {
    const colorSections = document.querySelectorAll('.color-section');
    colorSections.forEach((section, index) => {
        const hue = (360 / count) * index;
        section.style.backgroundColor = `hsl(${hue}, 70%, 80%)`;
    });
}