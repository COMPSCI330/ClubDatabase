var clubsDictionary = {
    "Graduate Student Club": "page2.html",
    "graduate student club": "page2.html",
    "Graduate student club": "page2.html",
    "Red Cross Club": "page2.html",
    "Red cross club": "page2.html",
    "red cross club": "page2.html"
};
var route = null;
var userInputString = null;

function lookupClub(){
    userInputString = document.getElementById("club_search_name").value;
    var userSubString = new RegExp(userInputString);
    if(userSubString == ""){
        alert("error, no submission");
        return;
    }
    
    for(var key in clubsDictionary){
        
        if(key == userSubString){
            route = clubsDictionary[key]; //user typed exact club name
        }else if(userSubString.test(key)){
            route = clubsDictionary[key]; //user tryped fraction of club name
        }
    }

    if(route == null){
        alert("club not found :( ");
        window.location.href = "index.html";
        return;
    }else{
        window.location.href = route;
        return;
    }
   
}

