// ============================================================
// БАЗА ДАНИХ ГЕРОЇВ MARVEL RIVALS
// ============================================================

// Масив героїв з їхніми характеристиками
const heroesData = [ // Основна константа масиву героїв
    {
        id: 1, // Унікальний ID героя
        name: "Iron Man", // Англійське ім'я
        type: "Superhero", // Тип персонажу
        power: 8, // Рівень сили
        description: "Тоні Старк - гений технік, якого врятувала його розумна установка. Носить дивовижне обладнання.", // Опис
        fullDescription: "Тоні Старк, знаний як Iron Man, - один з найбільших інноваторів в світі. Він розробив зовнішній скелет, який дає йому надзвичайну силу.", // Повна розповідь
        abilities: [ // Масив здібностей
            { name: "Plasma Cannon", description: "Потужна плазмова гармата" }, // Об'єкт здібності
            { name: "Flight", description: "Політ на надзвичайній швидкості" },
            { name: "Armor Durability", description: "Фантастична міцність броні" }
        ],
        emoji: "🦾" // Еможі персонажа
    }
];

// ============================================================
// ГЛОБАЛЬНІ ЗМІННІ
// ============================================================

let favoriteHeroes = []; // Глобальний масив для улюблених героїв
let voteData = {}; // Глобальний об'єкт для даних голосування
let visibleHeroes = [...heroesDataExtended]; // Копія масиву героїв через spread оператор

// ============================================================
// ФУНКЦІЇ ІНІЦІАЛІЗАЦІЇ
// ============================================================

// Ініціалізація при завантаженні сторінки
document.addEventListener('DOMContentLoaded', function() { // Event listener для DOMContentLoaded
    console.log("✅ Сторінка завантажена, ініціалізація..."); // Console.log для відладки
    console.log(`📊 Завантажено ${heroesDataExtended.length} героїв`); // Template string
    
    // Завантажити улюблені з localStorage
    loadFavoritesFromStorage(); // Виклик функції
    
    // Завантажити дані голосування
    loadVoteDataFromStorage();
    
    // Зберегти хіроїв за замовчуванням
    initializeVoteData();
    
    // Відобразити героїв
    displayHeroes(heroesDataExtended);
    
    // Заповнити селекти
    populateSelectOptions();
    
    // Оновити статистику
    updateStats();
    
    // Оновити улюблені
    updateFavoritesList();
    
    // Встановити активний навігаційний елемент
    setupNavigation();
});

// Ініціалізація даних голосування
function initializeVoteData() {
    Object.keys(voteData).length === 0 && heroesDataExtended.forEach(hero => {
        if (!voteData[hero.id]) {
            voteData[hero.id] = { name: hero.name, votes: 0 };
        }
    });
}

// Налаштування навігації
function setupNavigation() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// ============================================================
// ФУНКЦІЇ ВІДОБРАЖЕННЯ ГЕРОЇВ
// ============================================================

// Основна функція для відображення героїв
function displayHeroes(heroes) {
    const heroesGrid = document.getElementById('heroesGrid');
    
    if (heroes.length === 0) {
        heroesGrid.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; padding: 2rem; color: rgba(255,255,255,0.6);">✗ Жодного героя не знайдено</p>';
        return;
    }
    
    heroesGrid.innerHTML = heroes.map(hero => createHeroCard(hero)).join('');
    
    // Додати обробники подій до карток
    document.querySelectorAll('.hero-card').forEach(card => {
        card.addEventListener('click', function() {
            showHeroModal(this.dataset.heroId);
        });
    });
    
    // Обробники для кнопок
    document.querySelectorAll('.btn-details').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            // Відкрити детальну сторінку
            window.location.href = `hero-details.html?id=${this.dataset.heroId}`;
        });
    });
    
    document.querySelectorAll('.btn-favorite').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleFavorite(this.dataset.heroId);
            this.classList.toggle('active');
        });
    });
}

// Создание карточки героя
function createHeroCard(hero) {
    const isFavorite = favoriteHeroes.some(fav => fav.id === hero.id);
    const powerPercentage = (hero.power / 10) * 100;
    

    const imageHtml = hero.image ? 
        `<img src="${hero.image}" alt="${hero.name}" style="width: 100%; height: 100%; object-fit: cover;">` :
        hero.emoji;
    
    return `
        <div class="hero-card" data-hero-id="${hero.id}">
            <div class="hero-image">${imageHtml}</div>
            <div class="hero-info">
                <h3 class="hero-name">${hero.name}</h3>
                <span class="hero-type">${hero.role || hero.type}</span>
                <p class="hero-description">${hero.description}</p>
                
                <div class="hero-bottom">
                    <div class="hero-stats">
                        <div class="stat">
                            <div class="stat-label">Сила</div>
                            <div class="stat-value">${hero.power}/10</div>
                        </div>
                        <div class="stat">
                            <div class="stat-label">ХП</div>
                            <div class="stat-value">${hero.health}</div>
                        </div>
                    </div>
                    
                    <div class="power-bar">
                        <div class="power-fill" style="width: ${powerPercentage}%"></div>
                    </div>
                    
                    <div class="hero-actions">
                        <button class="btn-details" data-hero-id="${hero.id}"> Детальніше</button>
                        <button class="btn-favorite ${isFavorite ? 'active' : ''}" data-hero-id="${hero.id}" aria-label="Кохаю">❤️</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// ============================================================
// ФУНКЦІЇ ПОШУКУ ТА ФІЛЬТРАЦІЇ
// ============================================================

// Функція пошуку героїв
function searchHeroes() {
    const searchValue = document.getElementById('searchInput').value.toLowerCase();
    
    visibleHeroes = heroesData.filter(hero =>
        hero.name.toLowerCase().includes(searchValue)
    );
    
    filterHeroes();
}

// Функція фільтрації героїв
function filterHeroes() {
    const typeFilter = document.getElementById('typeFilter').value;
    const powerFilter = document.getElementById('powerFilter').value;
    const searchValue = document.getElementById('searchInput').value.toLowerCase();
    
    let filtered = heroesDataExtended.filter(hero => {
        // Фільтр за пошуком
        const matchesSearch = hero.name.toLowerCase().includes(searchValue) || 
                             (hero.name_uk && hero.name_uk.toLowerCase().includes(searchValue));
        
        // Фільтр за типом
        const matchesType = typeFilter === '' || hero.type === typeFilter;
        
        // Фільтр за силою
        let matchesPower = true;
        if (powerFilter !== '') {
            switch(powerFilter) {
            case '1':
                matchesPower = hero.power <= 2;
                break;
            case '2':
                matchesPower = hero.power >= 3 && hero.power <= 5;
                break;
            case '3':
                matchesPower = hero.power >= 6 && hero.power <= 8;
                break;
            case '4':
                matchesPower = hero.power >= 9;
                break;
            }
        }
        
        return matchesSearch && matchesType && matchesPower;
    });
    
    visibleHeroes = filtered;
    displayHeroes(filtered);
    updateStats();
}

// ============================================================
// ФУНКЦІЇ УЛЮБЛЕНИХ
// ============================================================

// Додавання/видалення з улюблених
function toggleFavorite(heroId) {
    const hero = heroesDataExtended.find(h => h.id == heroId);
    const index = favoriteHeroes.findIndex(fav => fav.id == heroId);
    
    if (index > -1) {
        favoriteHeroes.splice(index, 1);
        console.log(`❌ ${hero.name} видалено з улюблених`);
    } else {
        favoriteHeroes.push(hero);
        console.log(`✅ ${hero.name} додано до улюблених`);
    }
    
    saveFavoritesToStorage();
    updateFavoritesList();
    updateStats();
}

// Оновлення списку улюблених
function updateFavoritesList() {
    const favoritesList = document.getElementById('favoritesList');
    
    if (favoriteHeroes.length === 0) {
        favoritesList.innerHTML = '<p class="empty-message">Ви ще не додали улюблених героїв</p>';
        return;
    }
    
    favoritesList.innerHTML = favoriteHeroes.map(hero => `
        <div class="favorite-item">
            <div style="font-size: 2rem; margin-bottom: 0.5rem;">${hero.emoji}</div>
            <h3>${hero.name}</h3>
            <p style="color: rgba(255, 255, 255, 0.8); margin: 0.5rem 0;">
                Тип: <strong>${hero.type}</strong><br>
                Сила: <strong>${hero.power}/10</strong>
            </p>
            <button class="remove-favorite" onclick="removeFavorite(${hero.id})">✕ Видалити</button>
        </div>
    `).join('');
}

// Видалення з улюблених
function removeFavorite(heroId) {
    const hero = heroesDataExtended.find(h => h.id === heroId);
    favoriteHeroes = favoriteHeroes.filter(fav => fav.id !== heroId);
    saveFavoritesToStorage();
    updateFavoritesList();
    updateStats();
    displayHeroes(visibleHeroes);
    console.log(`❌ ${hero.name} видалено з улюблених`);
}

// ============================================================
// ФУНКЦІЇ МОДАЛЬНОГО ВІКНА
// ============================================================

// Показати деталі героя в модальному вікні
function showHeroModal(heroId) {
    const hero = heroesDataExtended.find(h => h.id == heroId);
    const modal = document.getElementById('heroModal');
    const heroDetail = document.getElementById('heroDetail');
    
    if (!hero) return;
    
    const abilitiesHTML = hero.abilities.map(ability => `
        <div class="ability">
            <span class="ability-name">⚡ ${ability.name}:</span> ${ability.description}
        </div>
    `).join('');
    
    heroDetail.innerHTML = `
        <h2>${hero.emoji} ${hero.name}</h2>
        <p><strong>Тип:</strong> ${hero.type}</p>
        <p><strong>Опис:</strong> ${hero.fullDescription}</p>
        
        <div class="detail-abilities">
            <h3>Здібності</h3>
            ${abilitiesHTML}
        </div>
        
        <p><strong>Рівень сили:</strong> ${hero.power}/10</p>
        
        <div class="power-bar">
            <div class="power-fill" style="width: ${hero.power * 10}%"></div>
        </div>
    `;
    
    modal.style.display = 'block';
}

// Закрити модальне вікно
function closeModal() {
    document.getElementById('heroModal').style.display = 'none';
}

// Закрити модальне вікно при кліку на фон
window.onclick = function(event) {
    const modal = document.getElementById('heroModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// ============================================================
// ФУНКЦІЇ СТАТИСТИКИ ТА ПОРІВНЯННЯ
// ============================================================

// Оновлення статистики
function updateStats() {
    // Загальна кількість героїв
    document.getElementById('totalHeroes').textContent = visibleHeroes.length;
    
    // Кількість улюблених
    document.getElementById('favoritesCount').textContent = favoriteHeroes.length;
    
    // Найпопулярніший герой (з найбільшою силою)
    if (visibleHeroes.length > 0) {
        const mostPowerful = visibleHeroes.reduce((max, hero) => 
            hero.power > max.power ? hero : max
        );
        document.getElementById('mostPopular').textContent = `${mostPowerful.emoji} ${mostPowerful.name}`;
    }
}

// Порівняння двох героїв
function compareHeroes() {
    const hero1Id = document.getElementById('hero1Select').value;
    const hero2Id = document.getElementById('hero2Select').value;
    
    if (!hero1Id || !hero2Id) {
        document.getElementById('comparisonResult').innerHTML = 
            '<p style="grid-column: 1 / -1; text-align: center; color: var(--primary-color);">⚠️ Виберіть двох героїв для порівняння</p>';
        return;
    }
    
    const hero1 = heroesDataExtended.find(h => h.id == hero1Id);
    const hero2 = heroesDataExtended.find(h => h.id == hero2Id);
    
    const comparisonResult = document.getElementById('comparisonResult');
    comparisonResult.innerHTML = `
        <div class="comparison-hero">
            <h4>${hero1.emoji} ${hero1.name}</h4>
            
            <div class="comparison-stat">
                <span class="comparison-stat-label">Тип:</span>
                <span class="comparison-stat-value">${hero1.type}</span>
            </div>
            
            <div class="comparison-stat">
                <span class="comparison-stat-label">Сила:</span>
                <span class="comparison-stat-value">${hero1.power}/10</span>
            </div>
            
            <div class="comparison-stat">
                <span class="comparison-stat-label">Кількість здібностей:</span>
                <span class="comparison-stat-value">${hero1.abilities.length}</span>
            </div>
            
            <div style="background-color: rgba(255, 255, 255, 0.1); padding: 1rem; border-radius: 5px; margin-top: 1rem;">
                <strong>Здібності:</strong>
                <ul style="margin-top: 0.5rem; padding-left: 1.5rem;">
                    ${hero1.abilities.map(a => `<li>${a.name}</li>`).join('')}
                </ul>
            </div>
        </div>
        
        <div class="comparison-hero">
            <h4>${hero2.emoji} ${hero2.name}</h4>
            
            <div class="comparison-stat">
                <span class="comparison-stat-label">Тип:</span>
                <span class="comparison-stat-value">${hero2.type}</span>
            </div>
            
            <div class="comparison-stat">
                <span class="comparison-stat-label">Сила:</span>
                <span class="comparison-stat-value">${hero2.power}/10</span>
            </div>
            
            <div class="comparison-stat">
                <span class="comparison-stat-label">Кількість здібностей:</span>
                <span class="comparison-stat-value">${hero2.abilities.length}</span>
            </div>
            
            <div style="background-color: rgba(255, 255, 255, 0.1); padding: 1rem; border-radius: 5px; margin-top: 1rem;">
                <strong>Здібності:</strong>
                <ul style="margin-top: 0.5rem; padding-left: 1.5rem;">
                    ${hero2.abilities.map(a => `<li>${a.name}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
}

// ============================================================
// ФУНКЦІЇ ГОЛОСУВАННЯ
// ============================================================

// Голосування за героя
function voteFavorite() {
    const heroId = document.getElementById('voteHero').value;
    
    if (!heroId) {
        document.getElementById('voteMessage').textContent = '⚠️ Будь ласка, виберіть героя';
        document.getElementById('voteMessage').style.color = 'var(--primary-color)';
        return;
    }
    
    const hero = heroesDataExtended.find(h => h.id == heroId);
    
    if (voteData[heroId]) {
        voteData[heroId].votes++;
    } else {
        voteData[heroId] = { name: hero.name, votes: 1 };
    }
    
    saveVoteDataToStorage();
    
    document.getElementById('voteMessage').textContent = `✅ Ви проголосували за ${hero.name}! (Голосів: ${voteData[heroId].votes})`;
    document.getElementById('voteMessage').style.color = 'var(--accent-color)';
    
    // Очистити селект
    document.getElementById('voteHero').value = '';
}

// ============================================================
// ФУНКЦІЇ ЗАПОВНЕННЯ СЕЛЕКТІВ
// ============================================================

// Заповнити селекти героями
function populateSelectOptions() {
    const hero1Select = document.getElementById('hero1Select');
    const hero2Select = document.getElementById('hero2Select');
    const voteSelect = document.getElementById('voteHero');
    const typeFilter = document.getElementById('typeFilter');

    const optionsHTML = heroesDataExtended.map(hero => 
        `<option value="${hero.id}">${hero.emoji} ${hero.name}</option>`
    ).join('');

    const uniqueTypes = [...new Set(heroesDataExtended.map(hero => hero.type))];
    const typeOptions = uniqueTypes
        .map(type => `<option value="${type}">${type}</option>`)
        .join('');

    hero1Select.innerHTML += optionsHTML;
    hero2Select.innerHTML += optionsHTML;
    voteSelect.innerHTML += optionsHTML;
    if (typeFilter) {
        typeFilter.innerHTML = `<option value="">Всі типи</option>${typeOptions}`;
    }
}

// ============================================================
// ФУНКЦІЇ НАВІГАЦІЇ
// ============================================================

// Прокрутка до секції
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// ============================================================
// ФУНКЦІЇ ЗБЕРІГАННЯ В LOCALSTORAGE
// ============================================================

// Зберегти улюблені в localStorage
function saveFavoritesToStorage() {
    localStorage.setItem('favoriteHeroes', JSON.stringify(favoriteHeroes));
    console.log("💾 Улюблені збережені");
}

// Завантажити улюблені з localStorage
function loadFavoritesFromStorage() {
    const stored = localStorage.getItem('favoriteHeroes');
    if (stored) {
        favoriteHeroes = JSON.parse(stored);
        console.log(`📂 Завантажено ${favoriteHeroes.length} улюблених`);
    }
}

// Зберегти дані голосування в localStorage
function saveVoteDataToStorage() {
    localStorage.setItem('voteData', JSON.stringify(voteData));
    console.log("💾 Дані голосування збережені");
}

// Завантажити дані голосування з localStorage
function loadVoteDataFromStorage() {
    const stored = localStorage.getItem('voteData');
    if (stored) {
        voteData = JSON.parse(stored);
        console.log("📂 Дані голосування завантажені");
    }
}

// ============================================================
// DEBUG ФУНКЦІЇ
// ============================================================

// Функція для вивантаження даних з localStorage (для тестування)
function clearAllData() {
    localStorage.clear();
    favoriteHeroes = [];
    voteData = {};
    location.reload();
    console.log("🧹 Усі дані очищені");
}

// Функція для вивантаження статистики голосування
function showVoteStats() {
    console.table(voteData);
}
