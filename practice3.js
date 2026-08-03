let price = [100, 200, 300, 400, 500];
let index= 0 ;
for( let val of price){
    console.log(`Price at index ${index} is ${val}`);
    let offer = val / 10 ;
    price[index] = offer;
    console.log(`value after offer = ${price[index]}`);
    index++;
}
