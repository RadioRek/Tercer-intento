document.getElementById('productForm').addEventListener('click', function (event) {
    if (event.target.classList.contains('deleteBtn')) {
        event.preventDefault();

        var deleteBtn = event.target;
        var productId = deleteBtn.getAttribute('data-product-id');

        if (confirm('Are you sure you want to delete this product?')) {
            var deleteInput = document.createElement('input');
            deleteInput.setAttribute('type', 'hidden');
            deleteInput.setAttribute('name', 'delete');
            deleteInput.setAttribute('value', productId);
            document.getElementById('productForm').appendChild(deleteInput);
            document.getElementById('productForm').submit();
        }
    } else if (event.target.classList.contains('editBtn')) {
        if (confirm('Are you sure you want to edit this product?')) {
            document.getElementById('productForm').submit();
        }
    }
});