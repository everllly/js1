let price = 10000; 
let range = "month"; 

let transl;

if (range === "month") {
    transl = "месяц";
} else if (range === "day") {
    transl = "день";
} else if (range === "week") {
    transl = "неделя";
} else {
    transl = "Вы не указали период";
}
let result = price + " Руб в " + transl;
console.log(result);