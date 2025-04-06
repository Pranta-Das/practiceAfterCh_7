const fruit = {
    mango:'From Bangladesh',
    apple:{
        formBangladesh:'there is no apple forest',
        fromIndia:"Yes, kashmir is the biggest apple producer"
    },
    banana:'5000 dozon',
    lemon: '10000000 carrot'
}

if('lemon' in fruit){
    console.log('there is lemon');
}else{
    console.log('take some lemon');
}

//hasOwnProperty method.


if(fruit.hasOwnProperty('mango')){
    console.log('yes,it is.');
}else{
    console.log("no, it's not the fruit property");
}

//check the value

if(fruit.mango === 'From Bangladesh'){
    console.log('value matched');
}else{
    console.log('value not matched');
}