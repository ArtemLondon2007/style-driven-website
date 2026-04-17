// Пока что пустой файл для JavaScript
// Можно добавить интерактивность карточек в будущем

document.addEventListener("DOMContentLoaded", function () {
  console.log("Карточки загружены!");

  // Блок карточек (cards)
  const cards = document.querySelectorAll(".card");

  cards.forEach((card, index) => {
    card.addEventListener("click", function () {
      // Логика поведения блока card
      alert(`Вы кликнули на карточку ${index + 1}`);
    });
  });
});
