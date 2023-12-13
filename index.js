//function that add 2 nums
function add(num1,num2){
    return num1+num2;
}
//function that multiples 2 nums
function multiply(num1,num2){
    return num1*num2;
}
//function that takes as input another function that calls the add or multiple function as the case may be
function calculate(num1,num2,operation){
    return operation(num1,num2);
}
calculate(2,3,add);
