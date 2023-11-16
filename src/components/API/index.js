export function addToCart(id){

    return (
        fetch('https://dummyjson.com/carts/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    userId: 1,
    products: [
      {
        id: 1,
        quantity: 1,
      }
    ]
  })
})
.then(res => res.json())
    )

    }
    

export function getProductsByCategory(category){

    return (fetch(`https://dummyjson.com/products/category/${category}`)
    .then(res=>res.json()))

}