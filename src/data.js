import solimo from "./resources/img/solimoCoffee.png";
import presto from "./resources/img/presto.png";
import aromistico from "./resources/img/aromistico.png";
import { v4 as uuidv4 } from "uuid";

const data = [
  {
    id: uuidv4(),
    name: "Solimo Coffee Beans 2 kg",
    price: "10.73$",
    src: solimo,
    country: null,
    bestseller: true,
  },
  {
    id: uuidv4(),
    name: "Presto Coffee Beans 1 kg",
    price: "15.99$",
    src: presto,
    country: null,
    bestseller: true,
  },
  {
    id: uuidv4(),
    name: "AROMISTICO Coffee 1 kg",
    price: "6.99$",
    src: aromistico,
    country: "Brazil",
    bestseller: true,
  },
  {
    id: uuidv4(),
    name: "AROMISTICO Coffee 1 kg",
    price: "6.99$",
    src: aromistico,
    country: "Kenya",
    bestseller: false,
  },
  {
    id: uuidv4(),
    name: "AROMISTICO Coffee 1 kg",
    price: "6.99$",
    src: aromistico,
    country: "Columbia",
    bestseller: false,
  },
];

export default data;
