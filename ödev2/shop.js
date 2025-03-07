const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('click', () => {
        const productDetails = box.querySelector('.product-details');
        
        if (!productDetails.classList.contains('show')) {
            productDetails.classList.add('show'); 
        } else {
            productDetails.classList.remove('show'); 
        }
    });

    const productDetails = box.querySelector('.product-details');
    productDetails.addEventListener('click', (e) => {
        e.stopPropagation();  
        productDetails.classList.remove('show');  
    });
});