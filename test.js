let temp = 26;
let weather = "clear";

let activity;

if(temp >=25 && weather == "clear"){
    activity="football";    
}else if ((temp >= 10 && temp <=24) || weather == "cloudy"){
    activity="computer_games";
}else{
    activity = "waching_TV"
}

console.log(activity);