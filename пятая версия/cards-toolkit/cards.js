// script.js — Управление витриной через массив данных
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("cardsContainer");
    const themeBtn = document.getElementById("themeToggle");

    /**
     * 1. МАССИВ ДАННЫХ — Твоя база карточек
     * Чтобы УДАЛИТЬ: просто удали объект из списка.
     * Чтобы ИЗМЕНИТЬ: поменяй текст в кавычках.
     */
    const cardsData = [
        { title: "Синяя карточка", text: "Глубокий океанический синий", theme: "blue" },
        { title: "Золотая тема", text: "Премиальный солнечный оттенок", theme: "gold" },
        { title: "Яркий неон", text: "Современный электрический стиль", theme: "neon" },
        { title: "Зеленый лес", text: "Спокойствие натуральной природы", theme: "green" },
        { title: "Красная страсть", text: "Яркий акцент и энергия", theme: "red" },
        { title: "Фиолетовый закат", text: "Атмосфера уюта и магии", theme: "purple" }
    ];

    /**
     * 2. РЕНДЕРИНГ (Отрисовка карточек по БЭМ)
     */
    const render = () => {
        if (!container) return;
        container.innerHTML = ""; // Очистка контейнера

        cardsData.forEach(data => {
            const template = document.getElementById("card-template");
            if (!template) return;

            const clone = template.content.cloneNode(true).querySelector(".card");
            
            // Наполнение элементами (БЭМ-элементы блока card)
            clone.querySelector(".card__title").textContent = data.title;
            clone.querySelector(".card__text").textContent = data.text;
            
            // Добавление БЭМ-модификатора темы (card_theme_название)
            if (data.theme) {
                clone.classList.add(`card_theme_${data.theme}`);
            }

            container.appendChild(clone);
        });
    };

    /**
     * 3. ЛОГИКА ТЕМЫ (Светлая / Темная)
     */
    if (themeBtn) {
        themeBtn.addEventListener("click", () => {
            document.body.classList.toggle("page_theme_dark");
            
            // Смена иконки в зависимости от состояния страницы
            const isDark = document.body.classList.contains("page_theme_dark");
            themeBtn.textContent = isDark ? "☀️" : "🌙";
        });
    }

    // Запуск формирования витрины
    render();
});
