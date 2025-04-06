const shop = {
    name:'pranto engineering workshop',
    work:'making working material for house',
    address:'sadaha, satkania, chattogram'
};

const keys = Object.keys(shop);
console.log(keys);

const values = Object.values(shop);
console.log(values[1]);
console.log(typeof(values[1]));

// Checking any property is available inside the object or not.

const fruit = {
    mango:'From Bangladesh',
    apple:{
        formBangladesh:'there is no apple forest',
        fromIndia:"Yes, kashmir is the biggest apple producer"
    },
    banana:'5000 dozon'
}

const fruitsKey= Object.keys(fruit);
const hasMango = fruitsKey.includes('mango');
console.log(hasMango);