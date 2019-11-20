var clubsDictionary = {
    "Graduate Student Club": "page2.html",
    "graduate student club": "page2.html",
    "Graduate student club": "page2.html",
    "Red Cross Club": "redcrossresult.html",
    "Red cross club": "redcrossresult.html",
    "red cross club": "redcrossresult.html"
};
var route = null;
var userInputString = null;
var dstList = []; //will store list of all search results hit
var i = 0; 
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
            dstList[i] = key; //add to list of destinations
            i++;
            route = clubsDictionary[key]; //user tryped fraction of club name
        }
    }

    if(dstList.length == 0){
        alert("club not found :( ");
        window.location.href = "index.html";
        return;
    }else{
        window.location.href = route;
        return;
    }
}


