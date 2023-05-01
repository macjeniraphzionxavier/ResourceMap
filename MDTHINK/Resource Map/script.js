//Variables
var mapClick = document.querySelector("body");
const Teams = ["Covid Transition", "CTU", "Data Platform Enhancements", "E&E Hospice MD Daycare", 
"LTSS", "MADAP", "MCHP Modernization", "MDH-Cloud Migration", "MMT-DATA Warehouse", "MMT-MES", 
"MMT-PMM", "PHS-BCK", "PHS-DORM", "PHS-OCME", "PHS-SFRD", "Finance", "Data", "Data - SDP", "OCM",
"CSMS", "AWS Infrastructure", "GovSec", "HR & Logics", "E&E", "CJAMS", "DHS Application"]

var pageWrap = document.getElementsByClassName("boxes")[0];

//Checkbox Fucntion
function creatingcheckbox(){

  //Creates the checkbox and label
  var checkbox;
  var label;

  //Location of the Div in the HTML file via quesryselector
  

  //Creates a div to put the checkbox in
  
  // checkboxDiv.setAttribute("class", "checkbox");

  //Creates label for Each Checkbox
  var label = document.createElement("Label");
  label.htmlFor = "id";

  //Loop to Input the checkbox (Note The Appending for this could be off with looping)
  for (let i = 0; i < Teams.length; i++){
    var checkboxDiv =document.createElement("div");
    //Initialize Checkbox and sets values.
    label = document.createElement("label");
    checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "Checkboxes";
    checkbox.value = "value";

    //Places the checkbox insuide a label
    label.appendChild(checkbox);

    //checkboxDiv.appendChild(label);
    checkboxDiv.appendChild(checkbox);

    //create Text Node
    label.appendChild(document.createTextNode(Teams[i]));

    //Add Label to Checbox Div
    checkboxDiv.appendChild(label);
    pageWrap.appendChild(checkboxDiv);
  }
  
  //Add Checkbox Div to Boxes Div
 
}

//Function for when the user clicks
function addEventListAfterClick(){
  creatingcheckbox();
}
//EventListner for Checkbox (NEEDS TO BE CHANGED! Each state reference)
// mapClick.addEventListener("click",addEventListAfterClick);

document.addEventListener("click", function(e){
  if(e.target.tagName =='path'){
    creatingcheckbox();
  }
});