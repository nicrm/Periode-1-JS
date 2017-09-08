var names = ["Lars","Jan","Peter","Bo","Frederik"];
//1)
//Using the filter method
var shortnames = names.filter(function(name){
    return name.length <= 3;
});
console.log("Navne på under 4 bukstaver", shortnames);

//Using the map method
var uppernames = names.map(function(x){ return x.toUpperCase(); });
console.log("Navne med stort", uppernames);

//2)
//Uden filter(callback)
function myfilter(arr,callback){
    var temp = [];
    for(var i = 0; i < arr.length; i++){
        temp[i] = callback(arr[i]);
    }
    return temp;
}
var sname = myfilter(names,(name) => name.length <= 3);
console.log("Navne på under 4 bukstaver (callback)", sname);


//Uden map(callback)
function mymap(arr,callback){
    var temp = [];
    for(var i = 0; i < arr.length; i++){
        temp[i] = callback(arr[i]);
    }

    return temp;
}
var uname = mymap(names,(name) => name.toUpperCase());
console.log("Navne med stort(Callback)", uname);


//4)
//a)
let myNewListedMap = ((arr, callback) => {
    let returnValue = [];
    let tempArr = [...arr];
    returnValue.push("<ul>");
    tempArr.forEach((name) => {
        returnValue.push(callback(name));
    });
    returnValue.push("</ul>");
    return returnValue;
});

let listingNewMap = (name) => { return "<li>" + name + "</li>"; };
let newListingMap = myNewListedMap(names, listingNewMap);
console.log(newListingMap.join("\n"));

console.log("\nUsing filter , map & join to make a table with 2 seperate collumns from a json-object")
var twoColumnNames = [{ name: "Lars", phone: "1234567" },
{ name: "Peter", phone: "675843" },
{ name: "Jan", phone: "98547" },
{ name: "Bo", phone: "79345" }];

let myNewListedCollumnMap = ((arr, callback) => {
    let returnValue = [];
    let tempArr = [...arr];
    returnValue.push("<table>");
    tempArr.forEach((names) => {
        returnValue.push("<tr>\n" + callback(names.name));
        returnValue.push(callback(names.phone) + "\n</tr>");
    });
    returnValue.push("</table>");
    return returnValue;
});

let listingNewCollumnMap = (names) => { return "<td>" + names + "</td>"; };

let tableJson = myNewListedCollumnMap(twoColumnNames, listingNewCollumnMap);
console.log(tableJson.join("\n"));

//REDUCE ASSIGNMENTS 
console.log("\n\t#reduce\n")
console.log("\na)\tprinting single string with join\n");

console.log(names.join(",") + "\n");
console.log(names.join("#") + "\n");
console.log(names.join(" ") + "\n");

let numbers = [2, 3, 67, 33];

let adder = (arr) => { return arr };

let reducer = (arr) => {
    let returnValue = 0;
    let tempArr = [...arr];
    tempArr.forEach((number) => {
        returnValue += number;
    });
    return returnValue;
}
console.log("b)\tadding all the numbers in an Array\n");
console.log(numbers.join(" + ") + " = " + reducer(numbers));

let members = [
    { name: "Peter", age: 18 },
    { name: "Jan", age: 35 },
    { name: "Janne", age: 25 },
    { name: "Martin", age: 22 },
];

let average = (arr) => {
    return arr;
}

let averageAge = (arr) => {

    let returnValue = 0;
    let tempArr = [...arr];
    let counter = 0;
    tempArr.forEach((mem) => {
        counter++;
        if (isNaN(mem) != false) {
            returnValue += mem.age;
        }
    })

    return returnValue / counter;
}

console.log("\nc)\ttaking the average of the age from an json object\n")
console.log("average age is: " + averageAge(members));

let votes = ["Clinton", "Trump", "Clinton", "Clinton", "Trump", "Trump", "Trump", "None"];

let voteCount = (arr) => {
    let returnObj = { "Clinton": 0, "Trump": 0, "None": 0 };
    let tempArr = [...arr];

    tempArr.forEach((vote) => {
        if (vote === "Clinton") {
            returnObj.Clinton = returnObj.Clinton + 1;
        }
        if (vote === "Trump") {
            returnObj.Trump = returnObj.Trump + 1;
        }
        if (vote === "None") {
            returnObj.None = returnObj.None + 1;
        }
    });
    return returnObj;
};

console.log("\nd)\ttotal votes from 'votes' object :");
console.log(voteCount(votes));


//OBJECTS ASSIGNMENTS
console.log("\n\t#Objects!\n");

console.log("\t1)");
let randomObj =
    { fName: "Michael", lName: "Petersen", age: 50, email: "mp@test.com" };

let iterateObj = (obj) => {
    for (var data in randomObj) {
        if (!randomObj.hasOwnProperty(data)) {

            continue
        }
        console.log(data + " : " + randomObj[data]);
    }
}
console.log("\nIterating over obj")
iterateObj(randomObj);
console.log("\ndeleting age keyword...");
delete randomObj.age;
console.log("\nIterating over obj")
iterateObj(randomObj);

console.log("\n\t2)");
let NewPerson = new Object();

function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

let MJ = new Person("Michael", "Jackson", 500);

console.log(MJ);

NewPerson.firstName = "Michael"
NewPerson.lastName = "FuckingJackson"
NewPerson.age = 1000

NewPerson.getDetails = function () {
    return this.firstName + " " + this.lastName + " is " + this.age + " y.o."
}

let gettingDetails = NewPerson.getDetails
console.log(NewPerson.getDetails())
let boundPerson = gettingDetails.bind(NewPerson);

console.log(boundPerson());



//REUSEABLE MODULES
console.log("\n\t#Reuseable Modules!\n");
console.log("\n\t1)");

var makeCounter = function() {
    var privateCounter = 0
    function changeBy(val) {
        privateCounter += val
    }
    return {
        increment: function() {changeBy(1)},
        decrement: function() {changeBy(-1)},
        value: function() {return privateCounter}
    }
}

var counter1 = makeCounter();
var counter2 = makeCounter();

console.log("\n\t2)");
var makePerson = function(newName, newAge) {
    var age = newAge
    var name = newName

    function setName(aName){
        name = aName
    }
    function setAge(anAge){
        age = anAge
    }
    function getInfo(){
        return name + ',' + age
    }

    return {
        setAge: setAge,
        setName: setName,
        getInfo: getInfo
    }
}

var person1 = makePerson('nicklas', 20)
var person2 = makePerson('julie',24)

console.log(person1.getInfo())
console.log(person2.getInfo())
person1.setAge(21)
console.log(person1.getInfo())