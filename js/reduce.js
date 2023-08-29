var amount = [10,20,30];

const sum = amount.reduce(function(total,amount){
    console.log(total + amount);
})

console.log(sum);