// Пока что пустой файл для JavaScript
// Можно добавить интерактивность карточек в будущем

document.addEventListener("DOMContentLoaded", function () {
  console.log("Карточки загружены!");

  // Пример: добавление клика по карточкам
  const cards = document.querySelectorAll(".card");
  cards.forEach((card, index) => {
    card.addEventListener("click", function () {
      alert(`Вы кликнули на карточку ${index + 1}`);
    });
  });
});
