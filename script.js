//targeting shop id in html
let shop = document.getElementById('shop');

let shopItemsData = [
  {
    id: "myid1",
    name: "Afrcan fabrics",
    price: 1000,
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
  }
];

/*create a function tha prints all cards automatically
let generateShop = () => {
  return (shop.innerHTML = `
<div class="item">
      <img width="220" src="shopping-cart/img-5.png" alt="">
      <div class="details">
        <h3>Afrcan fabrics</h3>
        <p><em>Ikoyi, Lagos, Nigeria</em></p>
        <div class="price-quantity">
          <h2>$ 10-1000</h2>
          <div class="buttons">
            <i class="bi bi-dash"></i>
            <div class="quantity">0</div>
            <i class="bi bi-plus"></i>
          </div>
        </div>
      </div>
</div>
`);
};
*/

let basket = [];

let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((x) => {
      let { id, name, price, desc, img } = x; //destructuring
      return `<div id=product-id-${id} class="item">
       <img width="220" src=${img} alt="">
       <div class="details">
         <h3>${name}</h3>
         <p>${desc}</p>
         <div class="price-quantity">
         <h2>$ ${price}</h2>
         <div class="buttons">
           <i onclick ="decrement(${id})" class="bi bi-dash"></i>
           <div id=${id} class="quantity">0</div>
           <i onclick="increment(${id})" class="bi bi-plus"></i>
         </div>
         </div>
         </div>
       </div>
`;
    })
    .join(""));
};
generateShop();

let increment = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if  (search === undefined) {
    basket.push({
    id: selectedItem.id,
    item: 1
  });
  } else {
    search.item += 1;
  } 
  //console.log(basket);
  update(selectedItem.id);
};

let decrement = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);
  
  if  (search.item === 0) return;
     else {
    search.item -= 1;
  }
  //console.log(basket);
  update(selectedItem.id);
};

let update = (id) => {
  let search = basket.find((x) => x.id === id);
  console.log(search.item);
  document.getElementById(id).innerHTML = search.item;
};

