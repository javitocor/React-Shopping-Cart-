const products = [
  {
    id:1,
    name:"Nike shoes",
    price: 139, 
    image:"https://images.unsplash.com/photo-1579828898622-446b9d65ff73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",   
  },
  {
    id:2,
    name:"Facial Cream",
    price: 99,
    image:"https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",   
  },
  {
    id:3,
    name:"Sunglasses",
    price: 199,
    image:"https://images.unsplash.com/photo-1563891217861-7924b471afb3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",   
  },
  {
    id:4,
    name:"Mermelade",
    price: 49,
    image:"https://images.unsplash.com/photo-1493236272120-200db0da1927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",   
  },
  {
    id:5,
    name:"Tra da",
    price:20,
    image:"https://images.unsplash.com/photo-1570569962804-5377da5be035?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",   
  },
  {
    id:6,
    name:"Prada Handbag",
    price: 399,
    image:"https://images.unsplash.com/photo-1591348278900-019a8a2a8b1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",   
  },
  {
    id:7,
    name:"Gold Watch",
    price: 599,
    image:"https://images.unsplash.com/photo-1587304189289-8701c98d53bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",   
  },
  {
    id:8,
    name:"coca cola",
    price:0.99,
    image:"https://images.unsplash.com/photo-1575835522375-5244b1b87f00?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",   
  },
  {
    id:9,
    name:"Boat",
    price:1359,
    image:"https://images.unsplash.com/photo-1575433736372-b51ccade0fb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",   
  },
  {
    id:10,
    name:"Camera",
    price:799, 
    image:"https://images.unsplash.com/photo-1589198336418-4c2334f60af7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",  
  },
  {
    id:11,
    name:"Perfume Channel",
    price:35,
    image:"https://images.unsplash.com/photo-1593087130576-389402bc050a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",   
  },
  {
    id:12,
    name:"Phone",
    price:459, 
    image:"https://images.unsplash.com/photo-1591348069658-fcd93ea2afb8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",  
  },
  {
    id:13,
    name:"Porsche",
    price:1596325,
    image:"https://images.unsplash.com/photo-1586457684461-0e8ec4e3b873?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",   
  },
  {
    id:14,
    name:"Ba Lo",
    price:39,
    image:"https://images.unsplash.com/photo-1597800811795-5eb7440c15dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",   
  },
  {
    id:15,
    name:"Mountain bike",
    price:1564, 
    image:"https://images.unsplash.com/photo-1594151549300-c5c65b7dbfa0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",  
  },
  {
    id:16,
    name:"Tomatoes",
    price:0.95, 
    image:"https://images.unsplash.com/photo-1571905577201-ababc1f8d7d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",  
  },
  {
    id:17,
    name:"cool watch",
    price:1578, 
    image:"https://images.unsplash.com/photo-1600003014637-ff82a275e191?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",  
  },
  {
    id:18,
    name:"coffee",
    price:1.25,
    image:"https://images.unsplash.com/photo-1591348445405-d960e9d7ef45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",   
  },
  {
    id:19,
    name:"oat",
    price:0.35, 
    image:"https://images.unsplash.com/photo-1587790032594-babe1292cede?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",  
  },
  {
    id:20,
    name:"Edgar Allan Poe book",
    price:7.99, 
    image:"https://images.unsplash.com/photo-1589782190940-d0b5c72ee541?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",  
  },

];

export default products;