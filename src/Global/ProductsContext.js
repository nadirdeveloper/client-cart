import React, { createContext } from 'react'
import { useState } from 'react';


export const ProductContext = createContext();

export const ProductsContextProvider = (props) => {
    const [products] = useState({
        lajeans: [
            {
                name: "LA Jeans",
                cost: 150.00,
                id: '1',
                colors: ["Black", "Blue"],
                image:"https://raw.githubusercontent.com/Fiasalhotaky/nr/main/la%20jeans.JPG"
            }
        ],
        ny: [
            {
                name: "LA Jeans",
                cost: 150.00,
                id: '1',
                colors: ["Black", "Blue"],
                image:"https://raw.githubusercontent.com/Fiasalhotaky/nr/main/nr%20jeans%20blk.JPG"
            }

        ],
        hoodie: [
            {
                name: ' MYB Hoodie Black',
                cost: 100.00,
                id: '3',
                colors: ["Black", "Green"],
                image:"https://raw.githubusercontent.com/Fiasalhotaky/nr/main/myb%20hoodie.JPG"

            }
        ]
    });
    return (
        <ProductContext.Provider value={{ products: {...products} }}>
            { props.children }
        </ProductContext.Provider >
    )
}