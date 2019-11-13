var clubsDictionary = {
    "Graduate Student Club": "page2.html",
    "graduate student club": "page2.html"
};
var route = null;
var userInputString = null;

function lookupClub(){
    userInputString = document.getElementById("club_search_name").value;
    if(userInputString == ""){
        document.write("error, no submission");
    }
    for(var key in clubsDictionary){
        if(key == userInputString){
            route = clubsDictionary[key];
        }
    }

    if(route == null){
        document.write("club not found :( ");
    }
    window.location.href = route;
}
