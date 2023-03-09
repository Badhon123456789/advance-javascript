const age = 0;

if(age){
    console.log("Condition is true");
}
else{
    console.log("Condition is false");
}

const age1 = 0;

if(age || age == 0){
    console.log("Condition is true");
}
else{
    console.log("Condition is false");
}


//Falsy:
// 0;
// "";
// undefined;
// Null;
// NaN;
// False

//Truthy:
// "0";
// " ";
// [];
// {};
// true;
