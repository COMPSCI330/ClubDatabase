var clubsDictionary = {
    "Graduate Student Club": "page2.html",
    "graduate student club": "page2.html"
};
var route = null;
var userInputString = null;

function lookupClub(){
    userInputString = document.getElementById("club_search_name").value;
    if(userInputString == ""){
        alert("error, no submission");
        return;
    }
    for(var key in clubsDictionary){
        if(key == userInputString){
            route = clubsDictionary[key];
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
