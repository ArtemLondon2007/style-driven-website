// BEM JS — селекторы только по БЛОКАМ!
document.addEventListener("DOMContentLoaded", function () {
  console.log("✅ BEM карточки загружены!");

  // БЛОК cards
  const cardsContainer = document.querySelector(".cards");

  // БЛОКИ card (массив)
  const cards = document.querySelectorAll(".card");

  // Обработчики для КАЖДОГО блока card
  cards.forEach((card, index) => {
    card.addEventListener("click", function () {
      // BEM data-атрибуты для тем
      const theme = card.classList[1] || "без-темы"; // card_theme_orange
      alert(`🟠 Клик по карточке ${index + 1} — тема: ${theme}`);
    });

    // Hover эффект (дополнение CSS)
    card.addEventListener("mouseenter", function () {
      card.classList.add("card_hovered");
    });

    card.addEventListener("mouseleave", function () {
      card.classList.remove("card_hovered");
    });
  });

  // БЛОК header — клик по заголовку
  const headerTitle = document.querySelector(".header__title");
  headerTitle.addEventListener("click", function () {
    document.body.classList.toggle("page_theme_dark");
    console.log("🌙 Переключена тема страницы");
  });
});
