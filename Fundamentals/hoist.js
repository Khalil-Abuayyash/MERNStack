

/////ONE//////

//GIVEN
console.log(hello);                                   
var hello = 'world';  

//AFTER HOISTING BY THE INTERPRETER
// var hello;
// console.log(hello); // logs undefined
// hello = "world";

//++++++++++++++++++++++++++++++++++++//++++++++++++++++++++++++++++++++++++//++++++++++++++++++++++++++++++++++++
/////TWO//////

//GIVEN
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

//AFTER HOISTING BY THE INTERPRETER
// var needle;
//define test;
// needle = 'magnet';
// test(); // var needle;  -witihn function scope- // needle = 'magnet'; // logs magnet


//++++++++++++++++++++++++++++++++++++//++++++++++++++++++++++++++++++++++++//++++++++++++++++++++++++++++++++++++
/////THREE//////

//GIVEN
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);


//AFTER HOISTING BY THE INTERPRETER
// var brendan;
//define print;
//brendan = 'super cool';
// logs super cool


//++++++++++++++++++++++++++++++++++++//++++++++++++++++++++++++++++++++++++//++++++++++++++++++++++++++++++++++++
/////FOUR//////

//GIVEN
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}


//AFTER HOISTING BY THE INTERPRETER
// var food;
// define eat;
//food = chicken;
//console.log(food); // logs chicken
//eat(); // food = half-chicken; // logs half-chicken // food = 'gone;



//++++++++++++++++++++++++++++++++++++//++++++++++++++++++++++++++++++++++++//++++++++++++++++++++++++++++++++++++
/////FIVE//////

//GIVEN
/*
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
*/

//AFTER HOISTING BY THE INTERPRETER
// var mean;
//mean(); //mean is not a function



//++++++++++++++++++++++++++++++++++++//++++++++++++++++++++++++++++++++++++//++++++++++++++++++++++++++++++++++++
/////SIX//////

//GIVEN
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

//AFTER HOISTING BY THE INTERPRETER
// var genre;
//define rewind 
//console.log(genre); // logs undefined
// genre = "disco";
// rewind(); // var genre; // genre = "rock"; // logs rock // genre = "r&b"; // logs r&b
// console.log(genre); // logs disco



//++++++++++++++++++++++++++++++++++++//++++++++++++++++++++++++++++++++++++//++++++++++++++++++++++++++++++++++++
/////SEVEN//////

//GIVEN
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

//AFTER HOISTING BY THE INTERPRETER
// var dojo;
//define learn;
//dojo = "san jose";
// console.log(dojo); // logs san jose
// learn(); // var dojo; //dojo = "seattle"; // logs seattle // dojo = "burbank"; // logs burbank
// console.log(dojo);  //logs san jose 


//++++++++++++++++++++++++++++++++++++//++++++++++++++++++++++++++++++++++++//++++++++++++++++++++++++++++++++++++
/////EIGHT//////

//GIVEN
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

//AFTER HOISTING BY THE INTERPRETER
//define makeDojo
//console.log(makeDojo("Chicago", 65)); // const dojo; //dojo = {};// dojo = {name: "Chicago", students:65, hiring: true}
// console.log(makeDojo("Berkeley", 0));  //  dojo = "closed for now"; // error of assigning to a constant varible;