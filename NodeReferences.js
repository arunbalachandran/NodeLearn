var TestDict = {
    myFirstPerson: function() {
        console.log("\nI am the first person!");
        console.log(this === TestDict);
    }
}

TestDict.myFirstPerson();

function doSomethingWorthwhile() {
    console.log("\nI am the worthwhile operator");
    console.log("What is my context? Is it global?");
    console.log(this === global);
}

doSomethingWorthwhile();