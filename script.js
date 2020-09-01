var curiosityEl = document.querySelector("#curiosity");
var opportunityEl =  document.querySelector("#opportunity");
var spiritEl = document.querySelector("#spirit");


function  validation() {
    if(!curiosityEl  ===  true || !opportunityEl === ture || !spiritEl === true){
        return "Please select one check box"
    }
}