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