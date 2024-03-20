function searchProducts() {
    var searchTerm = document.getElementById('searchInput').value.toLowerCase();
    var productItems = document.querySelectorAll('.product-item');

    productItems.forEach(function(item) {
        var productCode = item.querySelector('h3').textContent.toLowerCase();

        if (productCode.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}
document.getElementById('searchInput').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        searchProducts();
    }
});