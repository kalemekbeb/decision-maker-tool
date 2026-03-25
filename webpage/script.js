/* 
TODO:
Add more weights, maybe importance?
*/

const weights = {
    cost: 1,
    time: -1, // more time is worse
    enjoyment: 2
};


// Function for adding in the options
function addOption(){
    // TODO: Make sure this is best practice
    const option = document.getElementById("options-container");
    const div = document.createElement("div");
    div.className = "option";

    div.innerHTML= ` 
        <label for="option">Option:</label>
        <input type="text" class="option-input" name="option" placeholder="Enter one of the options" min="1" max="5">
        <label for="cost">Cost (1-5):</label>
        <input type="number" class="option-input" name="cost" placeholder="Enter cost efficency of options (1-5) 5 being cheapest" min="1" max="5">
        <label for="time">Time Commitment(1-5):</label>
        <input type="number" class="option-input" name="time" placeholder="Enter time commitment required (1-5) 5 being longest" min="1" max="5">
        <label for="enjoyment">Enjoyment (1-5):</label>
        <input type="number" class="option-input" name="enjoyment" placeholder="Enter predicted level of enjoyment (1-5) 5 being most" min="1" max="5">
    `;

    option.appendChild(div);
}

// Function for calculating best option based off weights and values
function calculate(){
    /*
    TODO: 
    Clear past decision 
    Make the output a little more pretty
    */

    // Variables for the chart
    const labels = []
    const scores = []

    // Grab the container we're using (this is for display)
    const container = document.getElementById("computation-container");

    // Clear any previous results so they don't stack on repeated clicks
    container.innerHTML = '';

    // Grab all the option divs
    const options = document.querySelectorAll(".option")

    // set variables to default
    let bestScore = 0;
    let bestOption = null;

    // for each option div
    options.forEach(option => { 
        // grab the values in each box
        const name = option.querySelector('input[name="option"]').value;
        const cost = option.querySelector('input[name="cost"]').value;
        const time = option.querySelector('input[name="time"]').value;
        const enjoyment = option.querySelector('input[name="enjoyment"]').value;

        // calculate the score
        const score = (cost * weights.cost) + (time * weights.time) + (enjoyment * weights.enjoyment);

        // add score and name to the array
        labels.push(name);
        scores.push(score);

        // if this score is better than the best score, make it the new best and keep track of name
        if(score > bestScore){
            bestScore = score;
            bestOption = name;
        }
        
    });

    // build the result box div element
    const resultBox = document.createElement("div");

    // add an id to result box so it can be used in CSS formatting
    resultBox.id = "result-box";

    // display the best options name and it's score
    resultBox.innerHTML = `
    <h3>Best Option: <em>${bestOption}</em></h3>
    <p>Score: <strong>${bestScore}</strong></p>
`;

    container.appendChild(resultBox);

    // call the display graph method 
    displayGraph(scores, labels, bestOption);  
}

function displayGraph(scores, labels, winner){
    // making chart
    const chart = document.getElementById('chart').getContext('2d');

    // if chart already exists delete it
    if(window.newChart){
        window.newChart.destroy();
    }

    // make the bar chart
    // TODO: Add a label to show yellow means winner
    window.newChart = new Chart(chart, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: "Score",
                data: scores,
                backgroundColor: labels.map(label =>
                    label === winner
                        ? "rgba(255, 200, 0, 0.8)" // highlight the winner
                        : "rgb(49, 43, 67)"
                )
            }]
        }
    });

}