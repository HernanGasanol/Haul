
// users

import user1 from './public/images/user1.jpg'
import user2 from './public/images/user2.jpg'
import user3 from './public/images/user3.jpg'
import user4 from './public/images/user4.jpg'
import undefineduser from './public/images/undefineduser.jpg'





//header wallpapers
import headerWallpaper1 from './public/images/headerWallpaper1.jpg'
import headerWallpaper2 from './public/images/headerWallpaper2.jpg'
import modelseis from './public/images/modelseis.jpg'
import modelsiete from './public/images/modelsiete.jpg'
import modelcinco from './public/images/modelcinco.jpg'
import harry from './public/images/harry.jpg'


//category images
import categoryimage1 from './public/images/categoryimage1.jpg'
import categoryimage2 from './public/images/categoryimage2.jpg'
import categoryimage3 from './public/images/categoryimage3.jpg'



//product home
import jacket from './public/images/jacket.jpg'
import shoes1 from './public/images/shoes1.jpg'
import shoes1sinfondo from './public/images/shoes1sinfondo.png'
import shoes2 from './public/images/shoes2.jpg'
import cream from './public/images/cream.jpg'
import perfum1 from './public/images/perfum1.jpg'
import collar from './public/images/collar.jpg'
import gorra from './public/images/gorra.jpg'


//popular Products
import perfum2 from './public/images/perfum2.jpg'


//slider three 
import natalie1 from './public/images/natalie1.jpg'
import natalie2 from './public/images/natalie2.jpg'


export const SliderItems = [
  {
    id: 1,
    img: headerWallpaper1,
    color: "black",
  

  },

  {
    id: 2,
    img:headerWallpaper2,
   color: "white",
    title: "25% off",
 

  },

  {
    id: 3,
    img:modelsiete,
    img2:modelcinco,
    img3:modelseis,
    color: "white",
    title: "#new ",
    description: "",

  },
];

export const categories = [
  {
    id: 1,
    img: categoryimage1,
    title: "SHIRTS",
  },
  {
    id: 2,
    img: categoryimage2,
    title: "SWEATERS",
  },
  {
    id: 3,
    img: categoryimage3,
    title: "COATS",
  },
];





export const SliderItems2 = [
  {
    id: 1,
    img: headerWallpaper1,
    color: "white",
    title: "New Season",
    description: "",
   
  },

  {
    id: 2,
    img: harry,
    color: "white",
    title: "NEW COLLECTION",
    description: "",
   
  },

  {
    id: 3,
    img: modelseis,
    color: "white",
    title: "REL EXCLUSIVE BRAND",
    description: "",

  },
];

export const SliderItems3 = [
  {
    id: 1,
    img: headerWallpaper1,
    color: "black",
  

  },

  {
    id: 2,
    img:natalie1,
    color: "white",
    title: "",
 

  },

  {
    id: 3,
    img:natalie2,
    color: "white",
    title: " ",
    description: "",

  },
];


export const popularProducts = [
  {
    id: 1,
    img: shoes1,
  },
  {
    id: 2,
    img: shoes2,
  },
  {
    id: 3,
    img: perfum2,
  },
  {
    id: 4,
    img: gorra,
  },
  {
    id: 5,
    img: collar,
  },
  {
    id: 6,
    img: shoes1,
  },
  {
    id: 7,
    img: shoes2,
  },
  {
    id: 8,
    img: shoes1,
  },
];
export const productsHome = [
  {
    id: 1,
    image:jacket,
  },
  {
    id: 2,
    image: shoes1,
  },
  {
    id: 3,
    image: shoes2,
  },
  {
    id: 4,
    image:shoes2 ,
  },
];




export const productsSearchModal = [
  {
    id: 1,
    image:jacket,
    title:'SPECIAL PRICE',
    description:'JACKET CLASSIC',
    Price:'$ 3.500'

  },
  {
    id: 2,
    image: shoes1,
    title:'NEW!',
    description:'WHITE SHOE',
    Price:'$ 2.500'
  },
  {
    id: 3,
    image: shoes2,
    title:'VIEW ALL',
    description:'CLASSIC SHOE',
    Price:'$ 1.500'
  },
  {
    id: 4,
    image:perfum1 ,
    title:'SPECIAL PRICE',
    description:'PERFUM ',
    Price:'$ 500'
  },
  {
    id: 5,
    image:jacket,
    title:'SPECIAL PRICE',
    description:'JACKET CLASSIC',
    Price:'$ 3.500'

  },
  {
    id: 6,
    image:gorra,
    title:'NEW!',
    description:'BLACK CAP',
    Price:'$ 300'
  },
  {
    id: 7,
    image: collar,
    title:'SPECIAL PRICE',
    description:'NECKLACE',
    Price:'$ 800'
  },

];



export const comment=[
  {
    id:1,
    name:'Bren',
    date:'20-3-22',
    user:undefineduser,
    comment:'Excelentes. Las compré por la opinión de otro usuario y sinceramente no me arrepiento para nada, son estéticamente hermosas, impecables, super suaves, se amoldaron al pie en el mismo instante en que me las puse, super acolchadas y livianas. Las recomiendo 100%.'
  },
  {
    id:2,
    name:'Dai',
    date:'12-2-22',
    user:undefineduser,
    comment:'Las zapatillas son muy lindas y muuuy livianas. Comodas y facil de poner y sacar. Tengo pie estrecho y estas zapatillas son de horma ancha por lo que no me toman bien el pie. Estan bien para un uso normal, no para largas caminatas (yo hago entre 4 y 7 km por dia y no me resultan) las dejo para andar por casa.'
  },
  {
    id:3,
    name:'Herni',
    date:'3-1-22',
    user:undefineduser,
    comment:'Me encantaron, aunque pedí el número que me indicaban en la tabla de talles y me queda un poco grande, no las voy a cambiar porque las compré para irme de viaje y no me da el tiempo. De todas maneras me encantaron!!!!!! son súper livianas. Muy lindas.'
  },
  {
    id:4,
    name:'User529',
    date:'20-4-21',
    user:undefineduser,
    comment:'Las zapatillas son muy lindas. Y el precio es bueno. Pero para padel y tenis a mi criterio son un poco blandas en la estructura. No contiene tan bien como otras. Para caminar van muy bien.'
  },
]