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
        <input type="text" class="option-input" name="option" placeholder="Enter one of the options"></input>
        <input type="number" class="option-input" name="cost" placeholder="Enter cost efficency of options (1-5) 5 being cheapest"></input>
        <input type="number" class="option-input" name="time" placeholder="Enter time commitment required (1-5) 5 being longest"></input>
        <input type="number" class="option-input" name="time" placeholder="Enter predicted level of enjoyment (1-5) 5 being most"></input>
    `;

    option.appendChild(div);
}

// Function for calculating best option based off weights and values
function calculate(){

}