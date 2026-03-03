function filterItems(type) {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    if (card.classList.contains(type)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
