import {Container} from "./containers/Container";

const ProductContainer = new Container("productos");

ProductContainer.save({
    title: "Producto 1",
    price:300,
    thumbnail:"httpsdasdadajfa",
})
    

ProductContainer.getAll()
.then((data) => console.log({ data }))
.catch((error) => console.log({ error }));