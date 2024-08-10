document.getElementById('dish-prev').addEventListener('click', function() {
    document.querySelector('.dishimg').scrollBy({
        left: -200,
        behavior: 'smooth'
    });
});

document.getElementById('dish-next').addEventListener('click', function() {
    document.querySelector('.dishimg').scrollBy({
        left: 200,
        behavior: 'smooth'
    });
});

document.getElementById('res-prev').addEventListener('click', function() {
    document.querySelector('.resimg').scrollBy({
        left: -200,
        behavior: 'smooth'
    });
});

document.getElementById('res-next').addEventListener('click', function() {
    document.querySelector('.resimg').scrollBy({
        left: 200,
        behavior: 'smooth'
    });
});
