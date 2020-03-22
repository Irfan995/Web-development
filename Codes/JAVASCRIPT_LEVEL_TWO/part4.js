var roster = [];

function addNew(){
  var newName = prompt("What name do you want to add?");
  roster.push(newName);
}

function removeStudent(){
  var revName = prompt("What name do you want to remove?");
  var index = roster.indexOf(revName);
  roster.splice(index, 1);
}

function displayRoster(){
  console.log(roster);
}

var start = prompt("Would you like to start the roaster web app? y/n");
var request = "empty";

if (start === "y") {
  while (request !== "quit") {
    request = prompt("Please select an action: add, remove, display, or quit.")
    if (request === "add") {
      addNew();
    }else if (request === "remove") {
      removeStudent();
    }else if (request === "display") {
      displayRoster();
    }
  }
}

alert("Thanks for using the Web App! Please refresh the page to start over.")
