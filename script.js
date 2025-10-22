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