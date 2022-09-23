import {Container} from "./containers/Container";

const ProductContainer = new Container("productos");

ProductContainer.getAll()
.then((data) => console.log({ data }))
.catch((error) => console.log({ error }));