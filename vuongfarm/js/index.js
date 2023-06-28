if (localStorage.getItem("token") !== null) {
  document
    .querySelector(".right_product_list")
    .addEventListener("load", fetchData());

  async function fetchDataSingle(id) {
    const product = await fetch(`https://fakestoreapi.com/products/${id}`).then(
      (res) => res.json()
    );

    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    console.log(urlParams);
    // const id = urlParams.get("id");
    const productsDiv = document.querySelector(".product_list");
    console.log(product);
    // for (let item of products) {
    productsDiv.innerHTML += `
    <div class="product_card" onclick="goToDetail(${product.id})">
        <img src="${product.image}" alt="" />
        <div class="detail_product_card">
            <h3>${product.title}</h3>
            <span>${product.price}</span>
        </div>
    </div>
    `;
    // }
  }

  async function fetchData() {
    const products = await fetch("https://fakestoreapi.com/products").then(
      (res) => res.json()
    );

    const productsDiv = document.querySelector(".right_product_list");
    for (let item of products) {
      productsDiv.innerHTML += `
    <div class="product_card" onclick="goToDetail(${item.id})">
        <img src="${item.image}" alt="" />
        <div class="detail_product_card">
            <h3>${item.title}</h3>
            <span>${item.price}</span>
        </div>
    </div>
    `;
    }
  }

  function goToDetail(id) {
    console.log("click");
    console.log(id);
    document
      .querySelector(".product_list")
      .addEventListener("load", fetchDataSingle(id));
    window.location.replace(`detail_product.html?id=${id}`);
  }

  function logout() {
    window.localStorage.removeItem("token");
    window.location.replace("../detail_product.html");
  }
} else {
  window.location.replace("./login.html");
}
