const product = {
    lable: 'Volume 1',
    price: 10,
    stock: 34
}
const {lable:productLabel, price, rating = 2.3} = product
// console.log(productLabel)
// console.log(price)
// console.log(rating)

 const makeOrder = (type, product) =>{
    console.log(type)
    // console.log(product)
 }

 const order = (type, {lable, price, stock}) =>{
    console.log(lable, stock, price)
 }

 makeOrder('Sale', product)
 order('New', product)