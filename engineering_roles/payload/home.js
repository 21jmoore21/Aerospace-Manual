function filterCards() {
    const searchInput = document.getElementById('searchBar').value.toLowerCase();
    const cardContainer = document.getElementById('cardContainer');
    const cards = cardContainer.getElementsByClassName('card');

    for (const card of cards) {
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        if (title.includes(searchInput)) {
            card.style.display = ''; // Show the card
        } else {
            card.style.display = 'none'; // Hide the card
        }
    }
}