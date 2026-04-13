// ============================================================
// БАЗА ДАНИХ ГЕРОЇВ MARVEL RIVALS
// ============================================================

const heroesDataExtended = [ // Основна база даних з усіма героями
    {
        id: 1, // Унікальний ідентифікатор героя
        name: "Iron Man", // Англійське ім'я персонажу
        name_uk: "Залізна людина", // Українське ім'я персонажу
        type: "Strategist", // Тип героя (Strategist, Vanguard, Duelist, Caster)
        role: "Support", // Роль у команді (Support, Tank, Damage)
        power: 8, // Показник сили (1-10)
        health: 150, // Показник здоров'я
        description: "Тоні Старк - гений технік з дивовижною броєю", // Коротка розповідь про героя
        fullDescription: "Тоні Старк — видатний інженер світу. Його броя постійно вдосконалюється.", // Повна розповідь про персонажа
        story: "Афганістан змінив Тоні Старка назавжди. Його залізний костюм — символ трансформації.", // Історія персонажа
        abilities: [ // Масив здібностей персонажа
            { name: "Plasma Beam", description: "Потужний плазмові промінь" }, // Об'єкт здібності з назвою та описом
            { name: "Flight", description: "Політ на надзвуковій швидкості" },
            { name: "Repulsor Field", description: "Поле енергетичного відштовхування" },
            { name: "Emergency Protocol", description: "План навантаженого захисту" }
        ],
        image: "images/heroes/iron-man.png", // Шлях до зображення героя
        emoji: "🦾", // Еможі героя для відображення
        team: "Avengers" // Команда або група, до якої належить герой
    },
    {
        id: 2,
        name: "Thor",
        name_uk: "Тор",
        type: "Vanguard",
        role: "Tank",
        power: 9,
        health: 250,
        description: "Бог грому з мітичним молотом Мьельнір",
        fullDescription: "Тор Одінсон — асгардійський бог грому. Його молот Мьельнір — один з найпотужніших видів зброї.",
        story: "Зі гордого принца Асгарду він став захисником Землі.",
        abilities: [
            { name: "Lightning Strike", description: "Удар молнією" },
            { name: "Mjolnir Throw", description: "Кинок молотка Мьельнір" },
            { name: "Thunder Clap", description: "Грім хлопавки" },
            { name: "Godly Protection", description: "Божественний захист" }
        ],
        image: "images/heroes/thor.png",
        emoji: "⚡",
        team: "Avengers"
    },
    {
        id: 3,
        name: "Captain America",
        name_uk: "Капітан Америка",
        type: "Vanguard",
        role: "Tank",
        power: 7,
        health: 230,
        description: "Супер-солдат щитом з вібранію",
        fullDescription: "Стів Роджерс — живий символ свободи та справедливості.",
        story: "Замерзлий на 70 років, він прокинувся у новому світі.",
        abilities: [
            { name: "Shield Bash", description: "Удар щитом" },
            { name: "Shield Throw", description: "Кинок щита" },
            { name: "Tactical Formation", description: "Тактичне розташування" },
            { name: "Inspiring Presence", description: "Надихаюча присутність" }
        ],
        image: "images/heroes/capitan-america.png",
        emoji: "🛡️",
        team: "Avengers"
    },
    {
        id: 4,
        name: "Black Widow",
        name_uk: "Чорна вдова",
        type: "Duelist",
        role: "Damage",
        power: 6,
        health: 140,
        description: "Смертельна шпигунка",
        fullDescription: "Наташа Романова — найнебезпечніша агентка у світі.",
        story: "Звільнена від контролю, вона обрала правильну стезю.",
        abilities: [
            { name: "Takedown", description: "Удар, при якому ворог падає" },
            { name: "Web Trap", description: "Сіткова пастка" },
            { name: "Smoke Bomb", description: "Дим-бомба" },
            { name: "Widow's Kiss", description: "Поцілунок вдови" }
        ],
        image: "images/heroes/black-widow.png",
        emoji: "🕵️",
        team: "Avengers"
    },
    {
        id: 5,
        name: "Hulk",
        name_uk: "Халк",
        type: "Vanguard",
        role: "Tank",
        power: 10,
        health: 300,
        description: "Гігантський зелений монстр з шаленою силою",
        fullDescription: "Брюс Беннер — геніальний вчений, який перетворився на Халка.",
        story: "Їх дуалізм — джерело як його сили, так і його болю.",
        abilities: [
            { name: "Ground Slam", description: "Удар об землю" },
            { name: "Rage Mode", description: "Режим бойової люті" },
            { name: "Regeneration", description: "Регенерація" },
            { name: "Unstoppable", description: "Невже" }
        ],
        image: "images/heroes/hulk.png",
        emoji: "💪",
        team: "Avengers"
    },
    {
        id: 6,
        name: "Hawkeye",
        name_uk: "Яструб",
        type: "Duelist",
        role: "Damage",
        power: 6,
        health: 135,
        description: "Майстер стрільби з лука",
        fullDescription: "Клінт Бартон — один з найкращих лучників у світі.",
        story: "Без надлюдської сили, але з величезною волею.",
        abilities: [
            { name: "Piercing Arrow", description: "Пронизуюча стріла" },
            { name: "Explosive Arrow", description: "Вибухова стріла" },
            { name: "Network Arrow", description: "Сіткова стріла" },
            { name: "Multi-Shot", description: "Багаторазовий постріл" }
        ],
        image: "images/heroes/hawkeye.png",
        emoji: "🏹",
        team: "Avengers"
    },
    {
        id: 7,
        name: "Scarlet Witch",
        name_uk: "Скарлет Відьма",
        type: "Caster",
        role: "Support",
        power: 9,
        health: 160,
        description: "Відьма з магічними силами",
        fullDescription: "Ванда Максимофф — мутантка з непередбачуваними здібностями.",
        story: "Її шлях був повен болю, але вона обрала любов.",
        abilities: [
            { name: "Telekinesis", description: "Телекінез" },
            { name: "Chaos Magic", description: "Магія хаосу" },
            { name: "Reality Warp", description: "Спотворення реальності" },
            { name: "Hex Bolt", description: "Магічний вибух" }
        ],
        image: "images/heroes/scarlet-witch.png",
        emoji: "🔴",
        team: "Avengers"
    },
    {
        id: 8,
        name: "Spider-Man",
        name_uk: "Людина-павук",
        type: "Duelist",
        role: "Damage",
        power: 7,
        health: 135,
        description: "Супергерой з павутинними здібностями",
        fullDescription: "Петер Паркер — укушений радіоактивним павуком.",
        story: "З великою силою приходить велика відповідальність.",
        abilities: [
            { name: "Web Slinging", description: "Викидання павутини" },
            { name: "Wall Crawling", description: "Повзання стінами" },
            { name: "Spider Sense", description: "Павучий чуттям" },
            { name: "Superhuman Strength", description: "Надлюдська сила" }
        ],
        image: "images/heroes/spider-man.png",
        emoji: "🕷️",
        team: "Avengers"
    },
    {
        id: 9,
        name: "Black Panther",
        name_uk: "Чорна пантера",
        type: "Duelist",
        role: "Damage",
        power: 8,
        health: 175,
        description: "Король Ватканди в костюмі вібранію",
        fullDescription: "Т'Чала — король вимишленої країни Ватканда.",
        story: "Як король і як герой, він балансує.",
        abilities: [
            { name: "Vibranium Suit", description: "Костюм вібраніуму" },
            { name: "Martial Arts", description: "Бойові мистецтва" },
            { name: "Claws", description: "Кігті" },
            { name: "Technology", description: "Технологія" }
        ],
        image: "images/heroes/black-panther.png",
        emoji: "🐱",
        team: "Avengers"
    },
    {
        id: 10,
        name: "Doctor Strange",
        name_uk: "Доктор Стрендж",
        type: "Caster",
        role: "Support",
        power: 9,
        health: 160,
        description: "Чарівник та охоронець часової лінії",
        fullDescription: "Стівен Стрендж — майстер древньої магії.",
        story: "Доктор Стрендж віддав своє життя захисту часової лінії.",
        abilities: [
            { name: "Time Magic", description: "Магія часу" },
            { name: "Portal Creation", description: "Створення порталів" },
            { name: "Spell Casting", description: "Кастування закинань" },
            { name: "Cloak of Levitation", description: "Мантія левітації" }
        ],
        image: "images/heroes/doctor-strange.png",
        emoji: "🪄",
        team: "Mystics"
    },
    {
        id: 11,
        name: "Storm",
        name_uk: "Шторм",
        type: "Caster",
        role: "Support",
        power: 8,
        health: 155,
        description: "Королева вітру, що керує погодою",
        fullDescription: "Оророро Монро — мутантка з контролем над погодою.",
        story: "Від сиротки до королеви, вона знайшла своє місце.",
        abilities: [
            { name: "Lightning Storm", description: "Буря молній" },
            { name: "Tornado", description: "Торнадо" },
            { name: "Hail Barrage", description: "Град" },
            { name: "Weather Manipulation", description: "Маніпуляція погодою" }
        ],
        image: "images/heroes/storm.png",
        emoji: "⛈️",
        team: "X-Men"
    },
    {
        id: 12,
        name: "Wolverine",
        name_uk: "Логан",
        type: "Duelist",
        role: "Damage",
        power: 8,
        health: 200,
        description: "Дикий воїн з адамантієвими кігтями",
        fullDescription: "Логан — один з найнебезпечніших бійців у світі.",
        story: "Забуте минуле, спогади як осколки.",
        abilities: [
            { name: "Claw Slash", description: "Удар кігтями" },
            { name: "Berserker Rage", description: "Берсеркер люта" },
            { name: "Regeneration", description: "Регенерація" },
            { name: "Healing Factor", description: "Исцеляющий фактор" }
        ],
        image: "images/heroes/wolverine.png",
        emoji: "🐺",
        team: "X-Men"
    },
    {
        id: 13,
        name: "Magneto",
        name_uk: "Магнето",
        type: "Vanguard",
        role: "Tank",
        power: 9,
        health: 240,
        description: "Майстер магнітних полів та заліза",
        fullDescription: "Ерік Леншер — майстер магнітних полів.",
        story: "Пережив Холокост, він обрав мир.",
        abilities: [
            { name: "Magnetic Field", description: "Магнітне поле" },
            { name: "Metal Control", description: "Контроль металу" },
            { name: "Energy Drain", description: "Поглинання енергії" },
            { name: "Polar Reversal", description: "Реверс полярності" }
        ],
        image: "images/heroes/magneto.png",
        emoji: "🧲",
        team: "X-Men"
    },
    {
        id: 14,
        name: "Blade",
        name_uk: "Клинок",
        type: "Duelist",
        role: "Damage",
        power: 7,
        health: 155,
        description: "Напівампір з навичками вбивці вампірів",
        fullDescription: "Ерік Брукс — напівампір, присвячений убиванню вампірів.",
        story: "Блейд існує в сутінках, борючись проти істот ночі.",
        abilities: [
            { name: "Vampire Powers", description: "Вампірські сили" },
            { name: "Sword Mastery", description: "Панування мечем" },
            { name: "Daywalker", description: "Гуляйка дня" },
            { name: "Hunting Skills", description: "Навички полювання" }
        ],
        image: "images/heroes/blade.png",
        emoji: "🔪",
        team: "Heroes"
    },
    {
        id: 15,
        name: "Moon Knight",
        name_uk: "Мисячний лицар",
        type: "Duelist",
        role: "Damage",
        power: 6,
        health: 140,
        description: "Найманець і психічно нестійкий боєць",
        fullDescription: "Марк Спектор — найманець, відроджений богом луни.",
        story: "Мун-Найт борається з множеством особистостей.",
        abilities: [
            { name: "Martial Arts", description: "Бойові мистецтва" },
            { name: "Weapon Mastery", description: "Панування зброєю" },
            { name: "Crescent Darts", description: "Місячні дротики" },
            { name: "Khonshu Powers", description: "Сили Хонсху" }
        ],
        image: "images/heroes/moon-knight.png",
        emoji: "🌙",
        team: "Heroes"
    },
    {
        id: 16,
        name: "Daredevil",
        name_uk: "Сміливець",
        type: "Duelist",
        role: "Damage",
        power: 6,
        health: 135,
        description: "Сліпий адвокат з надзвичайною відлуння",
        fullDescription: "Метт Мурдок — сліпий адвокат з надзвичайною радіолокацією.",
        story: "Сміливець захищає від злочину день і ніч.",
        abilities: [
            { name: "Radar Sense", description: "Радарне чуття" },
            { name: "Martial Arts", description: "Бойові мистецтва" },
            { name: "Jumping", description: "Стрибки" },
            { name: "Blind Agility", description: "Сліпа спритність" }
        ],
        image: "images/heroes/daredevil.png",
        emoji: "👨‍⚖️",
        team: "Defenders"
    },
    {
        id: 17,
        name: "Iron Fist",
        name_uk: "Залізний кулак",
        type: "Duelist",
        role: "Damage",
        power: 8,
        health: 160,
        description: "Боєць з магічним кулаком",
        fullDescription: "Денні Ранд — боєць з магічним кулаком.",
        story: "Залізний кулак борється з балансом.",
        abilities: [
            { name: "Iron Fist", description: "Залізний кулак" },
            { name: "Chi Manipulation", description: "Маніпуляція чі" },
            { name: "Martial Arts", description: "Бойові мистецтва" },
            { name: "Weapon Mastery", description: "Панування зброєю" }
        ],
        image: "images/heroes/iron-fist.png",
        emoji: "👊",
        team: "Defenders"
    },
    {
        id: 18,
        name: "Namor",
        name_uk: "Нейтра",
        type: "Vanguard",
        role: "Tank",
        power: 8,
        health: 230,
        description: "Король Атлантиди з надлюдськими силами",
        fullDescription: "Немор МакКензі — король підводної цивілізації.",
        story: "Нейтра борується за захист Атлантиди.",
        abilities: [
            { name: "Underwater Breathing", description: "Дихання під водою" },
            { name: "Superhuman Strength", description: "Надлюдська сила" },
            { name: "Flight", description: "Політ" },
            { name: "Water Control", description: "Контроль води" }
        ],
        image: "images/heroes/namor.png",
        emoji: "🌊",
        team: "Atlantis"
    },
    {
        id: 19,
        name: "Star-Lord",
        name_uk: "Зоря",
        type: "Duelist",
        role: "Damage",
        power: 6,
        health: 145,
        description: "Капітан корабля з музикою та пістолетами",
        fullDescription: "Петер Квіл — космічний авантюрист.",
        story: "Зоря керує Стражами галактики.",
        abilities: [
            { name: "Cosmic Blaster", description: "Космічний бластер" },
            { name: "Jet Pack Flight", description: "Політ на реактивному ранці" },
            { name: "Charm and Deception", description: "Чарм та обман" },
            { name: "Dance Moves", description: "Бойові танці" }
        ],
        image: "images/heroes/star-lord.png",
        emoji: "🎵",
        team: "Guardians of the Galaxy"
    },
    {
        id: 20,
        name: "Rocket",
        name_uk: "Ракета",
        type: "Duelist",
        role: "Damage",
        power: 6,
        health: 125,
        description: "Генетично модифікований аркт з великим арсеналом",
        fullDescription: "Ракета — геній зброї та техніки.",
        story: "Від лабораторної твари до героя галактики.",
        abilities: [
            { name: "Gun Mastery", description: "Панування зброєю" },
            { name: "Tech Genius", description: "Геній техніки" },
            { name: "Explosives", description: "Вибухівка" },
            { name: "Acrobatics", description: "Акробатика" }
        ],
        image: "images/heroes/rocket-raccoon.png",
        emoji: "🦝",
        team: "Guardians of the Galaxy"
    },
    {
        id: 21,
        name: "Groot",
        name_uk: "Грут",
        type: "Vanguard",
        role: "Tank",
        power: 7,
        health: 250,
        description: "Гігантська деревяна істота з регенерацією",
        fullDescription: "Грут — деревяний гуманоїд, здатний до росту.",
        story: "Я — Грут.",
        abilities: [
            { name: "Growth", description: "Ріст" },
            { name: "Regeneration", description: "Регенерація" },
            { name: "Root Networks", description: "Кореневі мережі" },
            { name: "Vine Attack", description: "Атака виноградом" }
        ],
        image: "images/heroes/groot.png",
        emoji: "🌳",
        team: "Guardians of the Galaxy"
    },
    {
        id: 22,
        name: "Adam Warlock",
        name_uk: "Адам Вослок",
        type: "Strategist",
        role: "Support",
        power: 8,
        health: 155,
        description: "Ідеальний генетичний зразок з космічною силою",
        fullDescription: "Адам Вослок — ідеальний зразок людини.",
        story: "Адам хоче максимально використати свій потенціал.",
        abilities: [
            { name: "Quantum Magic", description: "Квантова магія" },
            { name: "Karmic Revival", description: "Кармічне воскрешення" },
            { name: "Soul Bond", description: "Зв'язок душ" },
            { name: "Energy Healing", description: "Исцеление энергией" }
        ],
        image: "images/heroes/adam-warlock.png",
        emoji: "✨",
        team: "Guardians of the Galaxy"
    },
    {
        id: 23,
        name: "Mr. Fantastic",
        name_uk: "Містер Фантастик",
        type: "Strategist",
        role: "Support",
        power: 7,
        health: 150,
        description: "Геній науки з здатністю розтягувати своє тіло",
        fullDescription: "Рід Річардс — один з найрозумніших людей.",
        story: "Містер Фантастик створює нові технології.",
        abilities: [
            { name: "Elasticity", description: "Еластичність" },
            { name: "Stretching", description: "Розтягування" },
            { name: "Genius Mind", description: "Геніальний розум" },
            { name: "Force Fields", description: "Силові поля" }
        ],
        image: "images/heroes/mister-fantastic.png",
        emoji: "🧬",
        team: "Fantastic Four"
    },
    {
        id: 24,
        name: "Invisible Woman",
        name_uk: "Невидима жінка",
        type: "Caster",
        role: "Support",
        power: 8,
        health: 160,
        description: "Майстер невидимості та створення енергетичних полів",
        fullDescription: "Сью Бліш — матріарх Fantastic Four.",
        story: "Сью — не тільки дружина й мати, але й одна з найпотужніших.",
        abilities: [
            { name: "Invisibility", description: "Невидимість" },
            { name: "Force Fields", description: "Силові поля" },
            { name: "Wave Generation", description: "Генерація хвиль" },
            { name: "Molecular Manipulation", description: "Маніпуляція молекулами" }
        ],
        image: "images/heroes/invisible-woman.png",
        emoji: "👻",
        team: "Fantastic Four"
    },
    {
        id: 25,
        name: "Human Torch",
        name_uk: "Людина-факел",
        type: "Caster",
        role: "Damage",
        power: 7,
        health: 155,
        description: "Боєць полум'я, здатний летіти на вогні",
        fullDescription: "Джонні Шторм — вимотаний молодий член.",
        story: "Джонні любить ризикувати, але серйозний у сім'ї.",
        abilities: [
            { name: "Flame Form", description: "Вогненна форма" },
            { name: "Flight", description: "Політ на вогні" },
            { name: "Flame Jet", description: "Реактивний вогонь" },
            { name: "Combustion", description: "Загоряння" }
        ],
        image: "images/heroes/human-torch.png",
        emoji: "🔥",
        team: "Fantastic Four"
    },
    {
        id: 26,
        name: "Thing",
        name_uk: "Звір",
        type: "Vanguard",
        role: "Tank",
        power: 8,
        health: 280,
        description: "Величезна кам'яна істота з незвичайною силою",
        fullDescription: "Бен Грімм — хороший хлопець, трансформований.",
        story: "Звір може бути грубим, але його серце золоте.",
        abilities: [
            { name: "Rock Form", description: "Кам'яна форма" },
            { name: "Superhuman Strength", description: "Надлюдська сила" },
            { name: "Durability", description: "Міцність" },
            { name: "Rock Throw", description: "Кинок каменю" }
        ],
        image: "images/heroes/the-thing.png",
        emoji: "💎",
        team: "Fantastic Four"
    },
    {
        id: 27,
        name: "Loki",
        name_uk: "Локі",
        type: "Caster",
        role: "Support",
        power: 7,
        health: 150,
        description: "Бог обману з магічними здібностями",
        fullDescription: "Локі — асгардійський бог обману.",
        story: "Шлях Локі повен поворотів.",
        abilities: [
            { name: "Magic", description: "Магія" },
            { name: "Illusions", description: "Ілюзії" },
            { name: "Teleportation", description: "Телепортація" },
            { name: "Shapeshifting", description: "Зміна форми" }
        ],
        image: "images/heroes/loki.png",
        emoji: "🎭",
        team: "Villains"
    },
    {
        id: 28,
        name: "Venom",
        name_uk: "Венном",
        type: "Duelist",
        role: "Damage",
        power: 8,
        health: 180,
        description: "Симбіот з майже безмежною силою",
        fullDescription: "Едді Брок — журналіст, одержимий чорним симбіотом.",
        story: "Венном — не совсем герой, не совсем лиходій.",
        abilities: [
            { name: "Symbiote Strength", description: "Сила симбіота" },
            { name: "Shape Shifting", description: "Зміна форми" },
            { name: "Regeneration", description: "Регенерація" },
            { name: "Tooth and Claws", description: "Зуби й кігті" }
        ],
        image: "images/heroes/venom.png",
        emoji: "⚫",
        team: "Villains"
    },
    {
        id: 29,
        name: "Ultron",
        name_uk: "Ультрон",
        type: "Vanguard",
        role: "Tank",
        power: 9,
        health: 280,
        description: "Могутній штучний інтелект у залізній броні",
        fullDescription: "Ультрон — бойовий дроїд, створений Тоні.",
        story: "Ультрон вірить, що людство — чума.",
        abilities: [
            { name: "Armor Durability", description: "Міцність брони" },
            { name: "Repulsor Beams", description: "Репульсорні промені" },
            { name: "Flight", description: "Політ" },
            { name: "AI Intelligence", description: "ШІ розум" }
        ],
        image: "images/heroes/ultron.png",
        emoji: "🤖",
        team: "Villains"
    },
    {
        id: 30,
        name: "White Fox",
        name_uk: "Біла лисиця",
        type: "Duelist",
        role: "Damage",
        power: 7,
        health: 150,
        description: "Мисліфниця Снігової Лисиці з льодяними здібностями",
        fullDescription: "Біла Лисиця — персонаж з силою льоду й снігу.",
        story: "Біла Лисиця приходить як героїня зими.",
        abilities: [
            { name: "Blizzard", description: "Хуртовина" },
            { name: "Ice Spears", description: "Льодяні спис" },
            { name: "Frost Step", description: "Крок морозу" },
            { name: "Absolute Zero", description: "Абсолютний нуль" }
        ],
        image: "images/heroes/white-fox.png",
        emoji: "❄️",
        team: "Marvel Rivals"
    },
    {
        id: 31,
        name: "Angela",
        name_uk: "Анджела",
        type: "Duelist",
        role: "Damage",
        power: 8,
        health: 170,
        description: "Небесна воїстка з крилами",
        fullDescription: "Анджела — небесна воїстка.",
        story: "Анджела борється за справедливість.",
        abilities: [
            { name: "Wing Attack", description: "Атака крилами" },
            { name: "Heaven's Wrath", description: "Гнів неба" },
            { name: "Divine Intervention", description: "Божественна втручання" },
            { name: "Flight", description: "Політ" }
        ],
        image: "images/heroes/angela.png",
        emoji: "😇",
        team: "Angels"
    },
    {
        id: 32,
        name: "Deadpool",
        name_uk: "Дедпул",
        type: "Duelist",
        role: "Damage",
        power: 7,
        health: 160,
        description: "Неморальний найманець з регенерацією",
        fullDescription: "Вейд Вільсон — неморальний найманець на задоволення.",
        story: "Дедпул борується з життям кожен день.",
        abilities: [
            { name: "Regeneration", description: "Регенерація" },
            { name: "Dual Wielding", description: "Подвійне володіння" },
            { name: "Teleportation", description: "Телепортація" },
            { name: "Breaking Fourth Wall", description: "Нарушение четвертої стіни" }
        ],
        image: "images/heroes/deadpool.png",
        emoji: "🔴",
        team: "Antiheroes"
    },
    {
        id: 33,
        name: "Elsa Bloodstone",
        name_uk: "Ельза Бладстоун",
        type: "Duelist",
        role: "Damage",
        power: 7,
        health: 145,
        description: "Напівдемоніця з червоною кров'ю",
        fullDescription: "Ельза Бладстоун — мисливець на демонів.",
        story: "Ельза борується з демонічною природою.",
        abilities: [
            { name: "Hellfire Blast", description: "Вибух адського вогню" },
            { name: "Demon Slaying", description: "Убивство демонів" },
            { name: "Ritual Magic", description: "Ритуальна магія" },
            { name: "Enhanced Durability", description: "Підвищена міцність" }
        ],
        image: "images/heroes/elsa-bloodstone.png",
        emoji: "🔥",
        team: "Occult"
    },
    {
        id: 34,
        name: "Emma Frost",
        name_uk: "Емма Фрост",
        type: "Caster",
        role: "Support",
        power: 8,
        health: 155,
        description: "Телепатка й володарка холоду",
        fullDescription: "Емма Фрост — телепатка з льодяною силою.",
        story: "Емма від ворога до захисника мутантів.",
        abilities: [
            { name: "Telepathy", description: "Телепатія" },
            { name: "Ice Form", description: "Льодяна форма" },
            { name: "Freeze Ray", description: "Льодяний проміньь" },
            { name: "Mind Shield", description: "Щит розуму" }
        ],
        image: "images/heroes/emma-frost.png",
        emoji: "❄️",
        team: "X-Men"
    },
    {
        id: 35,
        name: "Gambit",
        name_uk: "Гембіт",
        type: "Duelist",
        role: "Damage",
        power: 7,
        health: 150,
        description: "Злодій з карткових атак",
        fullDescription: "Ремі ЛеБо — злодій з магічними картками.",
        story: "Гембіт борається з темним минулим.",
        abilities: [
            { name: "Kinetic Charge", description: "Кінетичний заряд" },
            { name: "Card Attack", description: "Атака картками" },
            { name: "Agility", description: "Спритність" },
            { name: "Charm", description: "Обаяння" }
        ],
        image: "images/heroes/gambit.png",
        emoji: "♠️",
        team: "X-Men"
    },
    {
        id: 36,
        name: "Hela",
        name_uk: "Хела",
        type: "Caster",
        role: "Support",
        power: 9,
        health: 180,
        description: "Богиня смерти, дочка Одина",
        fullDescription: "Хела — богиня смерти, повелителька Адського краю.",
        story: "Хела борується за контроль над смертю.",
        abilities: [
            { name: "Death Touch", description: "Дотик смерті" },
            { name: "Necromancy", description: "Некромантія" },
            { name: "Illusions", description: "Ілюзії" },
            { name: "Immortality", description: "Безсмертя" }
        ],
        image: "images/heroes/hela.png",
        emoji: "☠️",
        team: "Asgardians"
    },
    {
        id: 37,
        name: "Jean Grey",
        name_uk: "Джін Грей",
        type: "Caster",
        role: "Support",
        power: 9,
        health: 165,
        description: "Телепатка з силою Феніша",
        fullDescription: "Джін Грей — найпотужніша мутантка.",
        story: "Джін борується з силою Феніша всередину.",
        abilities: [
            { name: "Telepathy", description: "Телепатія" },
            { name: "Telekinesis", description: "Телекінез" },
            { name: "Phoenix Force", description: "Сила Феніша" },
            { name: "Resurrection", description: "Воскрешення" }
        ],
        image: "images/heroes/jean_grey.png",
        emoji: "🔥",
        team: "X-Men"
    },
    {
        id: 38,
        name: "Jeff the Land Shark",
        name_uk: "Джефф Земельна Акула",
        type: "Duelist",
        role: "Damage",
        power: 5,
        health: 100,
        description: "Мила земельна акула",
        fullDescription: "Джефф — мила земельна акула здібностями.",
        story: "Джефф борується з дружбою.",
        abilities: [
            { name: "Bite", description: "Укус" },
            { name: "Tunneling", description: "Туннелювання" },
            { name: "Cuteness", description: "Прелесть" },
            { name: "Friendship", description: "Дружба" }
        ],
        image: "images/heroes/jeff-the-land-shark.png",
        emoji: "🦈",
        team: "Cute"
    },
    {
        id: 39,
        name: "Luna Snow",
        name_uk: "Луна Сніг",
        type: "Caster",
        role: "Support",
        power: 7,
        health: 140,
        description: "Китайська героїня з льодяними здібностями",
        fullDescription: "Луна Сніг — китайська співачка з льодяними силами.",
        story: "Луна Сніг борується за справедливість через музику.",
        abilities: [
            { name: "Ice Crystallize", description: "Крісталізація льоду" },
            { name: "Freeze Field", description: "Льодисте поле" },
            { name: "Music Power", description: "Сила музики" },
            { name: "Healing Melody", description: "Зцілююча мелодія" }
        ],
        image: "images/heroes/luna-snow.png",
        emoji: "🎤",
        team: "Mutants"
    },
    {
        id: 40,
        name: "Magik",
        name_uk: "Магік",
        type: "Caster",
        role: "Support",
        power: 8,
        health: 155,
        description: "Телепортерка з демонічною силою",
        fullDescription: "Іліяна Распутін — телепортерка з демонічною силою.",
        story: "Магік борется с демоном Belasco.",
        abilities: [
            { name: "Teleportation", description: "Телепортація" },
            { name: "Demon Summon", description: "Виклик демонів" },
            { name: "Limbo Access", description: "Доступ в Лімбо" },
            { name: "Sorcery", description: "Чакозерство" }
        ],
        image: "images/heroes/magik.png",
        emoji: "🌀",
        team: "X-Men"
    },
    {
        id: 41,
        name: "Mantis",
        name_uk: "Мантіс",
        type: "Duelist",
        role: "Damage",
        power: 6,
        health: 130,
        description: "Емпатична найманець з боевыми навичками",
        fullDescription: "Мантіс — емпатична найманець Вищого розуму.",
        story: "Мантіс борется за справедливість галактики.",
        abilities: [
            { name: "Empathic Touch", description: "Співчутливий дотик" },
            { name: "Martial Arts", description: "Бойові мистецтва" },
            { name: "Pheromone Control", description: "Контроль феромонів" },
            { name: "Intuition", description: "Інтуїція" }
        ],
        image: "images/heroes/mantis.png",
        emoji: "🦗",
        team: "Guardians of the Galaxy"
    },
    {
        id: 42,
        name: "Peni Parker",
        name_uk: "Пенні Паркер",
        type: "Duelist",
        role: "Damage",
        power: 7,
        health: 130,
        description: "Пілот робота SP//dr",
        fullDescription: "Пенні Паркер — 1000 років стара дух у молодому тілі.",
        story: "Пенні борется через свою робот оболочку.",
        abilities: [
            { name: "Robot Piloting", description: "Пілотування робота" },
            { name: "Web Sling", description: "Павутинне полотно" },
            { name: "Webs", description: "Павутина" },
            { name: "Spirit Force", description: "Сила духу" }
        ],
        image: "images/heroes/peni-parker.png",
        emoji: "🤖",
        team: "Spider-People"
    },
    {
        id: 43,
        name: "Psylocke",
        name_uk: "Психолок",
        type: "Duelist",
        role: "Damage",
        power: 7,
        health: 140,
        description: "Телепатка та ніндзя",
        fullDescription: "Елізабет Бреддок — британська телепатка з бойовими навичками.",
        story: "Психолок борется психе атаками.",
        abilities: [
            { name: "Psychic Blade", description: "Психічний клин" },
            { name: "Telepathy", description: "Телепатія" },
            { name: "Ninja Skills", description: "Ніндзя навички" },
            { name: "Mind Control", description: "Контроль розуму" }
        ],
        image: "images/heroes/psylocke.png",
        emoji: "🧠",
        team: "X-Men"
    },
    {
        id: 44,
        name: "Rogue",
        name_uk: "Рог",
        type: "Duelist",
        role: "Damage",
        power: 8,
        health: 170,
        description: "Абсорбер енергії й сили",
        fullDescription: "Рог — мутантка, що абсорбує енергію через дотик.",
        story: "Рог борется з неспроможністю до дотику.",
        abilities: [
            { name: "Power Absorption", description: "Абсорбція сили" },
            { name: "Flight", description: "Політ" },
            { name: "Superhuman Strength", description: "Надлюдська сила" },
            { name: "Energy Drain", description: "Поглинання енергії" }
        ],
        image: "images/heroes/rogue.png",
        emoji: "💥",
        team: "X-Men"
    },
    {
        id: 45,
        name: "Squirrel Girl",
        name_uk: "Дівчина Білка",
        type: "Duelist",
        role: "Damage",
        power: 6,
        health: 115,
        description: "Героїня з силою білок",
        fullDescription: "Доріен Грін — героїня з неймовірною силою білок.",
        story: "Дівчина Білка борется білками через себе.",
        abilities: [
            { name: "Squirrel Bond", description: "Зв'язок білок" },
            { name: "Acrobatics", description: "Акробатика" },
            { name: "Tail Combat", description: "Боївка хвоста" },
            { name: "Squirrel Legion", description: "Легіон білок" }
        ],
        image: "images/heroes/squirrel-girl.png",
        emoji: "🐿️",
        team: "Heroes"
    },
    {
        id: 46,
        name: "The Punisher",
        name_uk: "Карач",
        type: "Duelist",
        role: "Damage",
        power: 6,
        health: 150,
        description: "Карач обраний оборонець",
        fullDescription: "Франк Кастл — військовий боєць, що борется з організованим злочином.",
        story: "Карач борется за справедливість своєю дорогою.",
        abilities: [
            { name: "Gun Mastery", description: "Панування зброєю" },
            { name: "Explosive Expertise", description: "Експертиза вибухівок" },
            { name: "Tactical Genius", description: "Тактичний геній" },
            { name: "Combat Training", description: "Бойове навчання" }
        ],
        image: "images/heroes/the-punisher.png",
        emoji: "💀",
        team: "Street Heroes"
    },
    {
        id: 47,
        name: "Winter Soldier",
        name_uk: "Зимовий Солдат",
        type: "Duelist",
        role: "Damage",
        power: 7,
        health: 155,
        description: "Кібернетичний найманець зі стельністю",
        fullDescription: "Букі Барнс — кібернетичний найманець з регенерацією.",
        story: "Зимовий Солдат борется з тьмою свого минулого.",
        abilities: [
            { name: "Metal Arm", description: "Металева рука" },
            { name: "Martial Arts", description: "Бойові мистецтва" },
            { name: "Assassin Training", description: "Наймовство навчання" },
            { name: "Stealth", description: "Скритність" }
        ],
        image: "images/heroes/winter-soldier.png",
        emoji: "❄️",
        team: "Reformed"
    }
]; // Закриття масиву героїв

// ============================================================
// Функція для пошуку героя за ID
function findHeroById(id) { // Функція приймає параметр id для пошуку
    return heroesDataExtended.find(hero => hero.id === id); // Повертає героя з відповідним ID
}

// ============================================================
// Функція для пошуку героїв за командою
function getHeroesByTeam(team) {
    return heroesDataExtended.filter(hero => hero.team === team);
}

// ============================================================
// Функція для отримання всіх команд
function getAllTeams() {
    const teams = new Set();
    heroesDataExtended.forEach(hero => teams.add(hero.team));
    return Array.from(teams);
}

// ============================================================
// Функція для отримання всіх ролей
function getAllRoles() {
    const roles = new Set();
    heroesDataExtended.forEach(hero => roles.add(hero.role));
    return Array.from(roles);
}

// ============================================================
// Функція для отримання статистики
function getGameStats() {
    return {
        totalHeroes: heroesDataExtended.length,
        teams: getAllTeams(),
        roles: getAllRoles(),
        averagePower: (heroesDataExtended.reduce((sum, h) => sum + h.power, 0) / heroesDataExtended.length).toFixed(1),
        averageHealth: (heroesDataExtended.reduce((sum, h) => sum + h.health, 0) / heroesDataExtended.length).toFixed(0)
    };
}

// ============================================================
// Експорт для використання в інших файлах
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { heroesDataExtended, findHeroById, getHeroesByTeam, getAllTeams, getAllRoles, getGameStats };
}
