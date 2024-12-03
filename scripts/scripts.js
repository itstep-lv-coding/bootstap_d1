
document.getElementById('b1').onclick = function(event) {
    event.preventDefault();
    document.body.style.backgroundColor = 'gray';
    
    const cards = document.querySelectorAll('.card');
    cards.forEach(function(card) {
        card.style.backgroundColor = 'lightgray';
    });

};