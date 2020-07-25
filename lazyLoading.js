const images = document.querySelectorAll('[data-src]');

const imagePreloader = (image) => {
    const src = image.getAttribute('data-src');
    image.src = src;
}

const imageUnloader = (image) => {
    image.src = '';
}

const options = {
    threshold: 1,
    rootMargin: '-200px 0px 0px 0px'
}

const imageObserver = new IntersectionObserver((entries, imageObserver) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return;
        }
        else{
            imagePreloader(entry.target);
            imageObserver.unobserve(entry.target);
        }
    })
}, options);

images.forEach(image => {
    imageObserver.observe(image);
})