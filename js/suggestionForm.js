//key: --> [grad?, volunteer?, sports?, design?, leadership?]
var grad_student_club_array = [1,1,0,0,1];

var valueDict = {
    [1,1,0,0,1]:"Graduate Student Club",
    [1, 1, 0, 0, 0]:"Red Cross Club",
    [0, 0, 1, 0, 1]:"Club Soccer",
    [0, 1, 0, 1, 0]:"Design and Innovate for Social Change",
    [1, 0, 0, 1, 1]:"Developers Student Clubs",
    [0, 0, 0, 0, 1]:"Associated Student Government"
};
var userData = [0,0,0,0,0];
var matchThreshold = 3;
var i = 0;
var counter=0;
var list_of_matches = [];

//populates userData with form responses
function updateData(){
    var form_elements = document.getElementsByName("suggestionForm_").elements
    for(var response in form_elements){
        if(response == 1){ //marked yes, must update userData array to match
            userData[i] = 1;
            i++
        }
    }
    i = 0;
    return;
}

//compares values of userData to values in each array key, if similarities are 3 or more, its a match!
function match_huh(){
    i = 0;
    var j = 0;
    for(var currClub in valueDict){
        while(i < currClub.length){
            if(currClub[i] == userData[i]){
                counter++ //found a commonality, increment counter
                if(counter == matchThreshold){
                    list_of_matches[j] = valueDict[currClub]; //found a match
                    j++;
                }
            }
        }
        i = 0; // reset since we're re-using 'i'
    }

    window.location.href = "suggestedClubsResults.html";
    return;
}

