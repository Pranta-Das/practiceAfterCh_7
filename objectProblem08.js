const family = {
    father:{
        name:'kajal Das',
        age: 45,
        profession: 'business'
    },
    mother:{
        name:'Munni Prava Das',
        age: 38,
        profession:'HouseWife'
    }
};
const fatherAge = family.father.age;
const motherAge = family.mother.age;

const addAge = fatherAge + motherAge;

console.log('Father age: ', fatherAge , 'Mother age: ', motherAge, 'Total age: ', addAge);