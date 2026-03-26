/* 
TODO:
Add more weights, maybe importance?
Save decisions to localStorage 
Make a way to view previous decisions and rate them
*/

/*
TODO:
default weights is fine but we also need user-defined weight support
*/
const weights = {
    cost: 1,
    time: -1, // more time is worse
    enjoyment: 2
};


// Function for adding in the options
function addOption(){
    const option = document.getElementById("options-container");
    const div = document.createElement("div");
    div.className = "option";

    div.innerHTML= ` 
        <input type="text" name="option" placeholder="Option Name">

        <input type="number" name="cost" placeholder="Cost (1-5)">

        <input type="number" name="time" placeholder="Time (1-5)">
        
        <input type="number"  name="enjoyment" placeholder="Enjoyment (1-5)">
    `;

    option.appendChild(div);
}

// Function for calculating best option based off weights and values
function calculate(){
    // TODO: make a decision object to save

    // Variables for the chart
    const labels = []
    const scores = []

    // Grab the container we're using (this is for display)
    const container = document.getElementById("computation-container");

    // Clear any previous results so they don't stack on repeated clicks
    container.innerHTML = '';

    // Grab all the option divs
    const options = document.querySelectorAll(".option:not(.header")

    // set variables to default
    // bestScore is set to negative infinity instead of 0 because if the scores are negative it wont pick a best (worst) option.
    let bestScore = -Infinity;
    let bestOption = null;

    // for each option div
    options.forEach(option => { 
        // grab the values in each box
        const name = option.querySelector('input[name="option"]').value;
        const cost = Number(option.querySelector('input[name="cost"]').value);
        const time = Number(option.querySelector('input[name="time"]').value);
        const enjoyment = Number(option.querySelector('input[name="enjoyment"]').value);

        // if name, cost, time, enjoyment are not filled in do not continue with calculation.
        if(!name || isNaN(cost) || isNaN(time) || isNaN(enjoyment)){
            return;
        }

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
                        ? "rgba(255, 200, 0, 0.9)" // highlight the winner
                        : "rgb(200, 200, 255)"
                )
            }]
        }
    });

}