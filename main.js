let shop = document.getElementById('shop')

let shopItemsData = [{
  id: "myid1",
  name: "Afrcan fabrics",
  price: 10-1000,
  desc: "Ikoyi, Lagos, Nigeria",
  img: "shopping-cart/img-5.png"
}, 
{
  id: "myid2",
  name: "Male fabrics",
  price: 45,
  desc: "made from African fabrics",
  img: "shopping-cart/img-3.png"
},
{
  id: "myid3",
  name: "Ghanian fabrics",
  price: 50,
  desc: "made from African fabrics",
  img: "shopping-cart/img-1.png"
}, 
{
  id: "myid4",
  name: "Female fabrics with necklace",
  price: 75,
  desc: "made from African fabrics",
  img: "shopping-cart/img-4.png"
}, 
{
  id: "myid5",
  name: "Fabricated footwares",
  price: 45,
  desc: "Ikoyi, Lagos, Nigeria",
  img: "shopping-cart/img-2.png"
},]; 

let generateShop = () => {
  return (shop.innerHTML = shopItemsData.map((x) => {
    let {id, name, price, desc, img} = x //destructuring
    return `<div id=product-id-${id} class="item">
       <img width="220" src=${img} alt="">
       <div class="details">
         <h3>${name}</h3>
         <p>${desc}</p>
         <div class="price-quantity">
         <h2>$ ${price}</h2>
         <div class="buttons">
           <i class="bi bi-dash"></i>
           <div id=${id} class="quantity">0</div>
           <i class="bi bi-plus"></i>
         </div>
         </div>
         </div>
       </div>
`;
  }).join(""));
};
generateShop ();