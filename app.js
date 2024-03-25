let firstName ="Raja";
let lastName = " Akash";
let city ="New Delhi";

let fullName = firstName.concat(lastName); 
// console.log(fullName.length)
console.log(`My name is ${fullName} and I am from ${city}.`);

console.log(fullName.length);

console.log(city[0]);
console.log(city [city.length -1]);

console.log(firstName[firstName.length - 1]);
console.log(lastName[lastName.length -1]);


    let str ="programming";
    console.log(str.substring(3,7))
    console.log(str.slice(3,7))


    let num = 123;
    let numTo= num.toString();
    console.log(numTo);


    let word1 = "raja";
    let word2 = "rajaAkash";
    console.log("word1=word2", word1 === word2);
console.log(word1.toUpperCase());
console.log(word1.toLowerCase());   

    let sentense = "this is a javascript";
    let check = sentense.includes("javascript");
    console.log(check)


    let input = " raja ";
    let output = input.trim();
    console.log(output);
    
    let input1 = "raja";
    let output1= input1.split('');
    let o2 = output1.reverse('');
    let o3 =o2.join('');
    console.log(o3);


let sentence = "the quick brown fox";

function toTitleCase(str) {
    return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}
console.log(toTitleCase(sentence));

let string = "programming";
let out= string.slice(3,7);
console.log(out);


let word3 ="raja";
let word4 ="raja";

let comparo = word3.split("").sort().join("") === word4.split("").sort().join("");
console.log(comparo);