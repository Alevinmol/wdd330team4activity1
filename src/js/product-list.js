import productList from "./productList.mjs";

// Get the category from the URL query parameter
const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");


productList(category, ".product-list");