/*
TODO:
Set up storage system
Save the decision data
Display past decisions
Add ability to delete a past decision
View specific decisions
make sure all variables are stored with weights and timestamp
User should be able to rate the decisions either 0-1 or 1-5
Add ability to name past decisions
*/

const STORAGE_KEY = "decisionMakerData";

export function getAllDecisions(){
    const data = localStorage.getItem(STORAGE_KEY);
    // if there's data, parse it, else return an empty array
    return data ? JSON.parse(data) : []
}


export function getDecision(id){
    const data = getAllDecisions().filter(d => d.id == id);
    return data;
}

export function saveDecision(decision){
    const data = getAllDecisions();
    data.push(decision);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function deleteDecision(id){
    const data = getAllDecisions().filter(d => d.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); 
}

