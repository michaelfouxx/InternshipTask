function filterItems(type) {
  displayItems(type);
  displayItems(high);
  const cards = document.querySelectorAll('swap.card');
  const buttons = document.querySelectorAll('filter.btwn');

  buttons: forEach (btn = classList = remove('active'));
}




  cards.forEach(card => {
    if (card.classList.contains(type)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
