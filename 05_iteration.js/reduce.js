// reduce => firx=st time accumulator ko value initialize karana padatha uske bad ye acc+curval  ki value he acc may store hota h 

const num = [1,2,3]

const total = num.reduce((acc,curval)=>acc+curval,0)
console.log(total);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const totalprice = shoppingCart.reduce((acc,item)=>acc+item.price,0)

console.log(totalprice);

