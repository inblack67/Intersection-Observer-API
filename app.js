const sectionOne = document.querySelector('#section-1');
const sections = document.querySelectorAll('section');

const options = {
    // root: null // viewport - default - null

    // 0 - any little piece on the page, it will fire,
    // 1 - all of it has to be there
    threshhold: 1,  // 0-1 scale - default - 0

    rootMargin: '-150px'    // extra margin after which we need to render something
    // px or % 'top down bottom left'
};

const observer = new IntersectionObserver((entries, observer) => {
    // true or false depending if it's on the page or not
    entries.forEach(entry => {
        // console.log(entry.target, entry.isIntersecting);
        if(entry.isIntersecting){
            return;
        }
        entry.target.classList.toggle('bg-dark');
        observer.unobserve(entry.target);   // oberver is dead after observing (keep the state intact while doing infinite scroll images)
    })
}, options);

// observer.observe(sectionOne);
sections.forEach(section => {
    observer.observe(section);
})