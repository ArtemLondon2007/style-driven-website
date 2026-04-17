/**
 * 🔥 script.js — Управление витриной через массив данных
 * Методология: БЭМ + Data-driven (управление через данные)
 */
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("cardsContainer");
    const themeBtn = document.getElementById("themeToggle");

    /**
     * 📦 ДАННЫЕ КАРТОЧЕК
     * Это твоя "Панель управления" в коде. 
     * Изменяй текст, добавляй или удаляй объекты здесь.
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
     * 🔄 Функция отрисовки (Render)
     * Берет массив выше и "рисует" его в HTML по БЭМ-стандарту
     */
    const render = () => {
        if (!container) return;
        
        container.innerHTML = ""; // Очищаем контейнер перед наполнением
        
        cardsData.forEach(data => {
            const template = document.getElementById("card-template");
            if (!template) return;

            const clone = template.content.cloneNode(true).querySelector(".card");

            // Наполняем элементы данными (БЭМ-элементы блока card)
            const titleElem = clone.querySelector(".card__title");
            const textElem = clone.querySelector(".card__text");

            if (titleElem) titleElem.textContent = data.title;
            if (textElem) textElem.textContent = data.text;
            
            // Навешиваем БЭМ-модификатор темы (card_theme_название)
            if (data.theme) {
                clone.classList.add(`card_theme_${data.theme}`);
            }

            container.appendChild(clone);
        });
    };

    /**
     * 🌓 Логика смены темы страницы (Светлая / Темная)
     */
    if (themeBtn) {
        themeBtn.addEventListener("click", () => {
            document.body.classList.toggle("page_theme_dark");
            
            // Меняем иконку в зависимости от текущего состояния
            const isDark = document.body.classList.contains("page_theme_dark");
            themeBtn.textContent = isDark ? "☀️" : "🌙";
        });
    }

    // Запускаем процесс формирования витрины
    render();
});
