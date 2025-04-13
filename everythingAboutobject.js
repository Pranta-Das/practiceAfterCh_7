const prompt = require('prompt-sync')({sigint:true});

const person = {
    name:"pranto",
    age: 10,
    hight: 175
};

const entries = Object.entries(person);
console.log(entries);

for(const key in person){
    // console.log(key);
    const value = person[key];
    console.log(key,"=", value);
}