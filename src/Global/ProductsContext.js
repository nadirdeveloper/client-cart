import React,{createContext} from 'react'
import { useState } from 'react';


export const ProductContext = createContext();

export const ProductsContextProvider = (props) => {
  const [products] = useState([

    {id:1,name:'Shoes1',price:300,image:"https://raw.githubusercontent.com/Fiasalhotaky/nr/main/NR%20BLACK%20PRIMARY%20.png",status:'Hot'},
    {id:2,name:'Shoes2',price:600,image:"https://raw.githubusercontent.com/Fiasalhotaky/nr/main/NR%20BLACK%20PRIMARY%20.png",status:'New'},
    {id:3,name:'Shoes3',price:900,image:"https://raw.githubusercontent.com/Fiasalhotaky/nr/main/NR%20BLACK%20PRIMARY%20.png",status:'Hot'},
    {id:4,name:'Shoes4',price:100,image:"https://raw.githubusercontent.com/Fiasalhotaky/nr/main/NR%20BLACK%20PRIMARY%20.png",status:'Hot'},
    {id:5,name:'Shoes5',price:200,image:"https://raw.githubusercontent.com/Fiasalhotaky/nr/main/NR%20BLACK%20PRIMARY%20.png",status:'Hot'},
    {id:6,name:'Shoes6',price:400,image:"https://raw.githubusercontent.com/Fiasalhotaky/nr/main/NR%20BLACK%20PRIMARY%20.png",status:'Hot'},
    {id:7,name:'Shoes7',price:700,image:"https://raw.githubusercontent.com/Fiasalhotaky/nr/main/NR%20BLACK%20PRIMARY%20.png",status:'Hot'},
    {id:8,name:'Shoes8',price:800,image:"https://raw.githubusercontent.com/Fiasalhotaky/nr/main/NR%20BLACK%20PRIMARY%20.png",status:'Hot'},
    {id:9,name:'Shoes9',price:500,image:"https://raw.githubusercontent.com/Fiasalhotaky/nr/main/NR%20BLACK%20PRIMARY%20.png",status:'Hot'},

  ]);
    return (
        <ProductContext.Provider value = {{products:[...products]}}>
        {props.children}
        </ProductContext.Provider>
    )
}