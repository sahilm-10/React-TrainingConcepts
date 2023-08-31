let fruits = ["Apple","Mango","Orange","Orange","Orange"];

const filteredItems = fruits.filter((fruit)=>{
    const itemSet = fruit !== "Orange"
    console.log(itemSet);
})