var dollar = 9433;
var euro = 10354;
var ticket = 500;
var hotel = 250;
var travel = 120;

var budget = (prompt('How much money do you have?'));

if(((ticket + hotel)*dollar) + (travel*euro) <= budget ){
    alert('You have enough money, you can travel!')
} else{
    alert('You dont have enough money to travel, try next time!' )
};