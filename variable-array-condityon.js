var botliColor = "yellow";
var waterQuantiy  = 1;
var isFull =  false;

// array
var items = ['bottle', 'mug', 'paper', 'pen'];
items.push('logens');
items.push('watch');
var item = items.indexOf("paper");
// console.log(items);

// conditionls
if(items.length >= 4){
    console.log('you Have too many stuff on your dask.')
}
else if(items.length == 4) {
    console.log('you only have one jall items.')
}
else{
    console.log('WoW you have a clean dekh')
}