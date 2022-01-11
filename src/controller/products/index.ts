import axios from 'axios';
import { apiProducts, apiProductsByCategory } from '../../constants/proxy';

export const getAllProducts = async () => {
    const products = await axios.get(
                `${apiProducts}?limit=10`/* ,{headers:{'app-id': APP_ID}} */
              )
    .then(({data}) => {
        return data
    })
    return products;
}

export const getProductsByCategory = async (category:string) => {
    const productsByCategory = await axios.get(
                  `${apiProductsByCategory}/${category}?limit=5`/* ,{headers:{'app-id': APP_ID}} */
                )
    .then(({data}) => {
        return data
    })
    return productsByCategory;
}

