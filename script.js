document.getElementById('addProductBtn').addEventListener('click', function () {
    const form = document.getElementById('addProductForm');
    form.classList.toggle('hidden');
});

document.getElementById('searchBtn').addEventListener('click', function () {


    const query = document.getElementById('searchInput').value.toLowerCase();
    console.log(query);

    const products = document.querySelectorAll('#product-list article');

    products.forEach(function (product) {
        const nameElement = product.querySelector('h2'); // Lấy thẻ h2
        const productName = nameElement ? nameElement.textContent.toLowerCase() : '';

        if (productName.includes(query)) {
            product.style.display = '';  // Hiện
        } else {
            product.style.display = 'none'; // Ẩn
        }
    });
});

document.getElementById("addProductForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Ngăn reload trang

    // Lấy giá trị từ form
    const image = document.getElementById("productImage").value.trim();
    const name = document.getElementById("productName").value.trim();
    const desc = document.getElementById("productDesc").value.trim();
    const price = document.getElementById("productPrice").value.trim();

    // Tạo phần tử article
    const article = document.createElement("article");
    article.classList.add("product-item");

    article.innerHTML = `
        <img src="${image}" alt="${name}">
        <h2>${name}</h2>
        <p>Mô tả: ${desc}</p>
        <p>Giá: ${Number(price).toLocaleString("vi-VN")} VND</p>
    `;

    // Thêm vào danh sách sản phẩm
    const productList = document.getElementById("product-list");
    productList.appendChild(article);

    this.reset();
    this.classList.add("hidden");
});