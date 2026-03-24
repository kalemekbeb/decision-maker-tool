/* 
TODO:
Need basic logic for option comparison.
*/


// Function for adding in the options
function addOption(){
    // TODO: Make sure this is best practice
    const option = document.getElementById("options-container");
    const div = document.createElement("div");
    div.className = "option";

    div.innerHTML= ` 
        <input type="text" class="option-input" name="option" placeholder="Enter one of the options">
        <input type="number" class="option-input" name="cost" placeholder="Enter cost efficency of options (1-5) 5 being cheapest" min="1" max="5">
        <input type="number" class="option-input" name="time" placeholder="Enter time commitment required (1-5) 5 being longest" min="1" max="5">
        <input type="number" class="option-input" name="enjoyment" placeholder="Enter predicted level of enjoyment (1-5) 5 being most" min="1" max="5">
    `;

    option.appendChild(div);
}

// Function for calculating best option based off weights and values
function calculate(){
    /* TODO:
    Need a calculate button
    Need to grab all option blocks from html
    Read values from each option (for loop)
    Create a basic scoring system
    Keep track of the best option

    */

}