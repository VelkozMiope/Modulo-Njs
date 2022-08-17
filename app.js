function fizzbuzz(){
    for(let c = 1; c <= 20; c++) {
        if (c % 3 === 0 && c % 5 === 0){
            console.log("Fizz buzz");
        }
        else if (c % 3 === 0){
            console.log("Fizz");
        }
        else if (c % 5 === 0){
            console.log("Buzz");
        }
        else{
            console.log(c)
        };
    };
};

fizzbuzz()