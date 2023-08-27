const seeMoreLinks = document.querySelectorAll('.see-more');


seeMoreLinks.forEach(link => {
    link.addEventListener('click', function() {
        const boxContent = this.parentNode;
        const productDetails = boxContent.querySelector('.box-details');

        productDetails.classList.toggle('visible');
    });
});
