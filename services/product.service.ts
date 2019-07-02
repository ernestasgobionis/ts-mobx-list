import {decorate, observable} from "mobx"

const generateProducts = (count: number): Array<Product> => {
    const products = [];
    for (let i = 0; i < count; i++) {
        products.push({name: `Name${i}`, price: 123, image: 'https://via.placeholder.com/150'})
    }
    return products
};

export const fetchProducts = (count: number): Promise<Array<Product>> => {
    return new Promise(resolve => {
        setTimeout(() => resolve(generateProducts(count)), 1000);
    });
};


export class Products {
    fetchProducts: Function = async (count: number) => {
        this.loading = true;
        this.items = await fetchProducts(count);
        this.loading = false;
    };
    items: Array<Product> = [];
    loading: boolean = false;
}

decorate(Products, {
    items: observable,
    loading: observable
});
