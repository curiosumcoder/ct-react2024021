const showProduct = (id:number, name:string, unitPrice:number) => {
    console.table([id, name, unitPrice])
}

//showProduct('1', 'Laptop', 1500);

export default showProduct;