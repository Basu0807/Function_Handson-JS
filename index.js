// question-1
var a= 10

function call(){
    console.log(a)
}

call()

// question-2
function add(x,y,z){
let a= 3;
let b= 4;
let c=a+b
console.log(`Sum of ${a},${b} is ${c}`)
}

add()
 
// question-3

const multiply =()=>{
    let a=10
    let b=20
    console.log(a*b)
}

multiply()

// question-4

var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();

// question-5
var x = 21;
girl ();
console.log(x)
function girl() {
    console.log(x);
    var x = 20;
};


// question-6

var x = 21;
ab();
ba();

  function ab() {
    
   x = 20;
  console.log(x);
};
 function ba() {
    
    x = 40;
   console.log(x);
};

console.log(x);

// Day-2 question-1

function FindSum(a, b){
    return a + b;
}

function DisplayData(data, batch){
    console.log(`i am from ${data} and My batch is EA${batch}`)
}

DisplayData("PrepBytes", FindSum(10, 9));

// Day-2 question-2

const Abc = function() {
    let value = 20;
    console.log(value);
  };
  
  Abc();
// Day-2 question-3
        
var a = 10;
        (function (){
            console.log(a);
            var a = 20;
        })();
        
// Day-2 question-4
        const greet =  function(name){
            return function(m){
            
                console.log(`Hi!! ${name}, ${m}`);
            }
        }
          
        const greet_message = greet('EA19');
        greet_message("Welcome To PrepBytes")