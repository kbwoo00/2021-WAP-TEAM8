import { ProductInformation } from "./productinfo.js";
import { Navbar } from "./navbar.js";

const body = document.querySelector("body");
const products = document.querySelector(".products");

Navbar(body);

let informationJson;

function insertInfo() {
  informationJson.map((information, index) => {
    const product = new ProductInformation(information);
    product.attachTo(products, product.insertToHTMl());
    product.element
      .querySelector(".participateBtn")
      .addEventListener("click", function () {
        console.log(information);
        product.participateTo(product.element.querySelector(".participant"));
        information.participant++;
      });
  });
}

function init() {
  fetch("/oproduct")
    .then((res) => res.status(200))
    .then((res) => (informationJson = res), insertInfo)
    .catch((err) => console.log(err));
}

init();