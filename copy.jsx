// Bilingual copy. Placeholders are intentional — fill in next round.
// To replace: edit the matching key under both `en` and `ru`.

const COPY = {
  en: {
    nav: {
      about: "About",
      values: "Why invest",
      approach: "Approach",
      services: "Work with me",
      cases: "Track record",
      contact: "Consultation",
      cta: "Book a call",
    },
    hero: {
      eyebrow: "Real estate investment advisor",
      h1_a: "Capital that",
      h1_b: "quietly works",
      h1_c: " for you.",
      sub: "I help private investors build international real estate portfolios — from strategy to handing over the keys. The focus isn't on square meters; it's on the investor's actual goals.",
      cta_primary: "Book a free consultation",
      cta_secondary: "See my approach",
      portrait_label: "editorial portrait • 3:4",
    },
    press: {
      eyebrow: "As featured in",
      items: ["Forbes", "Bloomberg", "RBC", "Tatler", "Vogue Business", "Property Week"],
    },
    about: {
      eyebrow: "About me",
      hi: "Hi, I'm Liza.",
      h2: "I help private investors turn savings into international real estate that actually works.",
      facts: [
        ["My base", "Canada"],
        ["Education", "Applied Mathematics, B.Sc. · Business Analytics, M.Sc."],
        ["Experience", "8 years in international IT corporations"],
        ["Investment advisor", "since 2024"],
      ],
      pull: "They were selling square meters — I was looking for a solution.",
      paragraphs: [
        "Eight years in IT, employed. The whole time I was looking for one answer: how to stop depending on an employer. I tried different instruments.",
        "When I was looking for a long-horizon apartment for my family, I kept running into the same thing: agents sold square meters, not a solution.",
        "So I learned it myself — apartments, land, commercial, then markets in other countries. I studied the numbers and built partnerships in every jurisdiction I entered. I started investing on my own — and saw I wasn't alone: many people want to build capital without changing careers.",
        "Since 2024 this is my practice. I work in the investor's interest — because I'm in this for the long term. I only recommend what fits you.",
      ],
      signature_meta: "",
      cta: "Book a consultation",
      portrait_label: "founder portrait · 4:5",
    },
    services: {
      eyebrow: "Work with me",
      h2: "Three ways to get started.",
      sub: "Pick the depth of engagement that fits where you are right now.",
      items: [
        { num: "01", title: "Free consultation", body: "A 45-minute call to map your starting position, goals, and one or two directions worth exploring. No pitch, no follow-up sales call.", bullets: ["Situation audit on the call", "Right-fit strategies", "Specific market suggestions"], cta: "Book a call" },
        { num: "02", title: "Investment tour", body: "Join an author-led tour in the country that interests you — see properties, meet developers, underwrite live deals on the ground.", bullets: ["First-hand experience of locations", "Live deal underwriting", "Group of vetted investors"], cta: "See tour dates" },
        { num: "03", title: "Private advisory", body: "Long-form engagement for investors building a real portfolio — thesis, sourcing, deal-by-deal underwriting, and quarterly stewardship.", bullets: ["Aligned with the investor", "Location & property sourcing", "Quarterly portfolio review"], cta: "Discuss advisory" },
      ],
    },
    preCta: {
      eyebrow: "Let's talk",
      h2: "The next step is an analysis of your situation — in a simple conversation.",
      sub: "Forty-five minutes, your context, my honest read. Use the form below.",
      portrait_label: "wide editorial • 16:9",
    },
    marquee: [
      "Residential",
      "Commercial",
      "Off-plan",
      "Short-let",
      "Cross-border structuring",
      "Portfolio review",
      "Yield + appreciation",
      "Risk mapping",
    ],
    stats: {
      eyebrow: "By the numbers",
      items: [
        { num: "12", sup: "yrs", label: "In the market" },
        { num: "180", sup: "+", label: "Deals advised" },
        { num: "$240", sup: "M", label: "Assets under guidance" },
        { num: "9", sup: "★", label: "Markets covered" },
      ],
    },
    problems: {
      eyebrow: "01 / Context",
      h2_a: "Most investors buy ",
      h2_em: "square meters",
      h2_b: ", not income.",
      h2_c: "That's where the typical mistakes start.",
      items: [
        { num: "01", title: "Buying on emotion", body: "Fell in love with the balcony view — forgot about the tourist tax, vacancy periods and a property manager who'll eat 30% of the yield." },
        { num: "02", title: "Ignoring taxes & structure", body: "The same property held through a sole prop, an LLC or in your personal name can differ by 3–7% per annum. Nobody mentions that at the developer's presentation." },
        { num: "03", title: "No exit strategy", body: "You bought it — now what? In 5 years, in 10? Who do you sell to, in which currency do you crystallise, how do you take the money out and what do you do with it next?" },
      ],
    },

    strategies: {
      eyebrow: "02 / Goals",
      h2_a: "“Buying an apartment abroad”",
      h2_b: " isn't the goal. The goal is ",
      h2_em: "one of these",
      h2_c: ".",
      items: [
        { icon: "€", goal: "Goal · Passive income", title: "Cash flow in multiple currencies", body: "A small portfolio of 2–4 properties across jurisdictions, producing predictable monthly income in different currencies. Run by a professional management company.", bullets: ["Long-let: Lisbon, Athens, Valencia", "Short-let: Bali, Dubai, Tbilisi", "Target yield: 6–10% net per year"] },
        { icon: "↑", goal: "Goal · Resilience", title: "Diversifying the instruments you use", body: "Real estate isn't just buying a flat. Off-plan, REITs, private funds, debt notes, mixed-use — a portfolio that uses several instruments at once is more resilient and grows faster than a single asset.", bullets: ["Off-plan + completed properties", "Direct ownership + REITs / funds", "Residential, commercial, mixed-use"] },
        { icon: "⌂", goal: "Goal · Residency / passport", title: "Residency through investment", body: "A single property that produces income and qualifies you and your family for a Golden Visa or residency permit. Some routes even lead to a second passport. Real estate isn't just income — it's the creation of new opportunities and freedoms.", bullets: ["Greece (€250k), Portugal D7/D8, Spain (€500k)", "UAE Golden Visa from AED 2M", "Cyprus PR, Türkiye CBI from $400k"] },
        { icon: "∞", goal: "Goal · Preserve and transfer", title: "Capital for the next generation", body: "A 15–25 year portfolio: prime locations, low risk, protection against inflation and currency shocks. Inheritance built into the structure from day one.", bullets: ["Prime London, Switzerland, premium Dubai", "Trusts, holding structures", "Target: 3–5% real return above inflation"] },
      ],
    },

    values: {
      eyebrow: "Why real estate",
      h2: "The case for building wealth with bricks and patience.",
      sub: "Four reasons private investors keep returning to property — and what makes it different from every other asset class on your shortlist.",
      items: [
        { idx: "01", glyph: "R", title: "Real asset", body: "An asset you can walk into. Covers basic human needs, anchored against inflation, harder to evaporate, easier to underwrite than most alternatives." },
        { idx: "02", glyph: "C", title: "Cash flow + upside", body: "Rental income today and appreciation over time — two engines compounding side by side instead of trading off." },
        { idx: "03", glyph: "L", title: "Leverage that works for you", body: "Debt structured well is a multiplier. Done badly, it's a cliff edge. The difference is the underwriting discipline." },
        { idx: "04", glyph: "D", title: "Diversification", body: "Geographies, asset types and currencies — built into a portfolio that doesn't move in lockstep with the public markets." },
      ],
    },
    journey: {
      eyebrow: "My approach",
      h2_a: "Understand the person first —",
      h2_b: " then choose the property.",
      intro: "Most investment mistakes don't come from bad markets — they come from a strategy that doesn't fit the person. Some need predictability, some growth, some a second residency and the option to move. That's why we start with a conversation about you, not with a catalogue.",
      a: {
        tag: "Point A · where you are now",
        big: "A",
        title: "Your starting position",
        bullets: [
          "Capital and free cash flow",
          "Investment experience and market knowledge",
          "Personal attitude to risk",
          "Lifestyle, family, tax residency",
        ],
      },
      b: {
        tag: "Point B · where we're going",
        big: "B",
        title: "What you want to feel",
        bullets: [
          "Peace of mind about tomorrow",
          "Freedom to choose where and how to live",
          "Confidence that the capital is working",
          "A foundation for your family and the next generation",
        ],
      },
    },

    approach: {
      eyebrow: "Process",
      h2: "A four-step process — slow on the front end, decisive over the long term.",
      sub: "No off-the-shelf product list. Every engagement starts with the same question: what do you actually need the money for?",
      steps: [
        { num: "01", title: "Discovery", body: "We map your goals, timeline, currency exposure and risk appetite. The output is a written investment thesis you choose before buying the first property." },
        { num: "02", title: "Market & deal sourcing", body: "Off-market and on-market opportunities filtered against your strategy. You see the long list, the shortlist, and the math behind each cut." },
        { num: "03", title: "Underwriting & structuring", body: "Yield modelling, scenario stress-tests, financing, ownership structure, tax." },
        { num: "04", title: "Close & stewardship", body: "Negotiation, transaction, handover — and a quarterly portfolio review so the strategy actually gets implemented after the deal goes through." },
      ],
    },
    portfolio: {
      eyebrow: "Selected work",
      h2: "A few recent engagements.",
      sub: "Details are illustrative until you brief me on which case studies to feature.",
      cases: [
        { name: "Coastal residential — Lisbon", img: "case 01 • exterior", rows: [["Type", "2-asset bundle"], ["Hold", "5 yrs"], ["Outcome", "IRR 14.2%"]] },
        { name: "Mixed-use — Dubai Marina", img: "case 02 • interior", rows: [["Type", "Off-plan"], ["Hold", "3 yrs"], ["Outcome", "+38% on equity"]] },
        { name: "Boutique commercial — Tbilisi", img: "case 03 • facade", rows: [["Type", "Yield play"], ["Hold", "Ongoing"], ["Outcome", "9.6% net"]] },
      ],
    },
    testimonials: {
      eyebrow: "Words from clients",
      h2: "What working together actually feels like.",
      sub: "Placeholder quotes — to be replaced with real testimonials.",
      items: [
        { body: "She talked us out of two deals before she found us the right one. That's the part nobody else does.", name: "[Client name]", role: "Private investor • Family office" },
        { body: "The portfolio review every quarter changed how I think about real estate. It became a strategy, not a collection.", name: "[Client name]", role: "Entrepreneur • Repeat client" },
      ],
    },
    cta: {
      eyebrow: "Free consultation",
      h2: "45 minutes — a conversation about you.",
      bullets: [
        "We walk through your current portfolio or your starting position.",
        "I share two or three directions I'd explore in your situation.",
        "You leave with a clearer view of your situation and possible directions to develop. Anything further — only on your initiative.",
      ],
      form: {
        name: "Your name",
        email: "Email",
        phone: "Phone",
        country: "Country of residence",
        contact: "Preferred channel",
        contact_options: ["WhatsApp", "Telegram", "Email"],
        budget: "Capital range",
        budget_options: ["Under $50k", "$50k – $100k", "$100k – $250k", "$250k – $1M", "$1M +"],
        message: "Briefly — what are you exploring?",
        submit: "Request consultation",
      },
    },
    footer: {
      tag: "An independent advisor for investors who treat real estate as a long game.",
      cols: [
        { h: "Navigate", links: [
          { label: "About", href: "#about" },
          { label: "Why invest", href: "#values" },
          { label: "Approach", href: "#journey" },
          { label: "Work with me", href: "#services" },
          { label: "Consultation", href: "#contact" },
        ] },
        { h: "Contact", links: [
          { label: "elizash.work@gmail.com", href: "mailto:elizash.work@gmail.com" },
          { label: "Telegram @liza_shilova_invest", href: "https://t.me/liza_shilova_invest" },
        ] },
        { h: "Elsewhere", links: [
          { label: "LinkedIn", href: "https://www.linkedin.com/in/elizaveta-shilova/" },
          { label: "Instagram", href: "https://www.instagram.com/liz.a.shi/" },
          { label: "YouTube", href: "https://www.youtube.com/@shiretec" },
        ] },
      ],
      fine_left: "© 2026 ShiREstate — Liza Shilova. All rights reserved.",
      fine_right: "",
    },
    draft: "Draft structure",
  },

  ru: {
    nav: {
      about: "Обо мне",
      values: "Зачем инвестировать",
      approach: "Подход",
      services: "Форматы",
      cases: "Кейсы",
      contact: "Консультация",
      cta: "Записаться",
    },
    hero: {
      eyebrow: "Эксперт по инвестициям в недвижимость",
      h1_a: "Капитал, который",
      h1_b: "тихо работает",
      h1_c: " на тебя.",
      sub: "Помогаю частным инвесторам собирать портфель международной недвижимости — от стратегии до получения ключей. Главное — не квадратные метры, а реальные задачи инвестора.",
      cta_primary: "Бесплатная консультация",
      cta_secondary: "Посмотреть подход",
      portrait_label: "редакционный портрет • 3:4",
    },
    press: {
      eyebrow: "Обо мне писали",
      items: ["Forbes", "Bloomberg", "РБК", "Tatler", "Ведомости", "The Bell"],
    },
    about: {
      eyebrow: "Обо мне",
      hi: "Привет, я Елизавета.",
      h2: "Помогаю частным инвесторам превращать накопления в международную недвижимость, которая реально работает.",
      facts: [
        ["Моя локация", "Канада"],
        ["Образование", "Прикладная математика, B.Sc. · Бизнес-аналитика, M.Sc."],
        ["Опыт", "8 лет корпоративной работы в международных IT компаниях"],
        ["Инвест консультант", "с 2024"],
      ],
      pull: "Мне продавали квадратные метры — а я искала решение.",
      paragraphs: [
        "Восемь лет работала в найме в IT. Всё это время искала один ответ: как перестать зависеть от работодателя. Пробовала разные инструменты.",
        "Когда искала семье квартиру с долгим горизонтом, везде видела одно и то же: риелторы продавали квадратные метры, а не решение.",
        "Стала разбираться сама — квартиры, земля, коммерция, рынки других стран. Изучала цифры и заводила партнёров в каждой юрисдикции. Начала инвестировать — и увидела, что таких как я много: людей, которые хотят создать капитал, не меняя профессию.",
        "С 2024 года это моя практика. Действую в интересах инвестора — потому что нацелена на долгую работу. Рекомендую только то, что подходит вам.",
      ],
      signature_meta: "",
      cta: "Записаться на консультацию",
      portrait_label: "портрет основателя • 4:5",
    },
    services: {
      eyebrow: "Форматы работы",
      h2: "Три способа начать.",
      sub: "Выберите глубину сопровождения, которая подходит вам сейчас.",
      items: [
        { num: "01", title: "Бесплатная консультация", body: "45 минут разговора: разбираем стартовую позицию, цели и 1–2 направления, которые стоит рассмотреть. Без презентаций и продаж.", bullets: ["Аудит ситуации на звонке", "Подходящие стратегии", "Конкретные рынки для входа"], cta: "Записаться" },
        { num: "02", title: "Инвест-тур", body: "Участие в авторском инвест-туре в интересующей стране, где я работаю — объекты, встречи с застройщиками, разбор реальных сделок на месте.", bullets: ["Изучение локаций на собственном опыте", "Разбор сделок «вживую»", "Группа отобранных инвесторов"], cta: "Даты туров" },
        { num: "03", title: "Личное сопровождение", body: "Долгосрочная работа для инвесторов, которые собирают портфель — гипотеза, поиск сделок, андеррайтинг и квартальный обзор.", bullets: ["Работа в интересах инвестора", "Подбор локаций и объектов", "Квартальный обзор портфеля"], cta: "Обсудить сопровождение" },
      ],
    },
    preCta: {
      eyebrow: "Поговорим",
      h2: "Следующий шаг — анализ вашей ситуации в простом разговоре.",
      sub: "45 минут, ваш контекст, мой честный взгляд. Заполните форму ниже.",
      portrait_label: "широкий редакционный кадр • 16:9",
    },
    marquee: [
      "Жильё",
      "Коммерция",
      "Off-plan",
      "Краткосрочная аренда",
      "Кросс-юрисдикция",
      "Аудит портфеля",
      "Доходность + рост",
      "Карта рисков",
    ],
    stats: {
      eyebrow: "В цифрах",
      items: [
        { num: "12", sup: "лет", label: "На рынке" },
        { num: "180", sup: "+", label: "Сделок сопровождено" },
        { num: "$240", sup: "M", label: "Активов под управлением" },
        { num: "9", sup: "★", label: "Рынков" },
      ],
    },
    problems: {
      eyebrow: "01 / Контекст",
      h2_a: "Большинство инвесторов покупают ",
      h2_em: "квадратные метры",
      h2_b: ", а не доход.",
      h2_c: "Отсюда — типовые ошибки.",
      items: [
        { num: "01", title: "Покупка «на эмоциях»", body: "Влюбился в вид с балкона — забыл про туристический налог, простои и управляющую компанию, которая съест 30% дохода." },
        { num: "02", title: "Игнор налогов и структур", body: "Один и тот же объект через ИП, LLC или на физлицо даёт разницу в 3–7% годовых. Об этом редко говорят на презентациях застройщика." },
        { num: "03", title: "Нет стратегии выхода", body: "Объект куплен — а что дальше? Через 5 лет, через 10? Кому продавать, в какой валюте фиксировать, как выводить деньги, как их использовать дальше?" },
      ],
    },

    strategies: {
      eyebrow: "02 / Стратегии",
      h2_a: "«Купить квартиру за границей»",
      h2_b: " — не цель. Цель — ",
      h2_em: "вот это",
      h2_c: ".",
      items: [
        { icon: "€", goal: "Цель · Пассивный доход", title: "Кэш-флоу в разной валюте", body: "Собираем 2–4 объекта в разных юрисдикциях, которые дают предсказуемый ежемесячный доход в разных валютах. Управление — на профессиональной УК.", bullets: ["Долгосрочная аренда: Лиссабон, Афины, Валенсия", "Краткосрочная: Бали, Дубай, Тбилиси", "Целевая доходность: 6–10% net годовых"] },
        { icon: "↑", goal: "Цель · Устойчивость", title: "Диверсификация используемых инструментов", body: "Недвижимость — это не только «купить квартиру». Off-plan, REITs, частные фонды, долговые бумаги, mixed-use — портфель из нескольких инструментов устойчивее и растёт быстрее одного объекта.", bullets: ["Off-plan + готовые объекты", "Прямое владение + REITs / фонды", "Жильё, коммерция, mixed-use"] },
        { icon: "⌂", goal: "Цель · ВНЖ / ПМЖ / паспорт", title: "Резидентство через инвестицию", body: "Подбираем объект, который одновременно даёт доход и квалифицирует на «золотую визу» или ВНЖ для всей семьи. Существуют даже решения с последующим получением паспорта. Недвижимость — это не только доход, но и создание новых возможностей и свобод.", bullets: ["Греция (€250k), Португалия D7/D8, Испания (€500k)", "ОАЭ Golden Visa от AED 2M", "Кипр PR, Турция CBI от $400k"] },
        { icon: "∞", goal: "Цель · Сохранить и передать", title: "Капитал для детей", body: "Долгосрочный портфель на 15–25 лет: премиальные локации, низкий риск, защита от инфляции и валютных рисков. Структура с учётом наследования.", bullets: ["Лондон prime, Швейцария, премиум Дубая", "Трасты, холдинговые структуры", "Цель: реальный рост 3–5% сверх инфляции"] },
      ],
    },

    values: {
      eyebrow: "Почему недвижимость",
      h2: "Богатство, собранное из стен и терпения.",
      sub: "Четыре причины, по которым частные инвесторы возвращаются в недвижимость — и чем она отличается от всего остального в вашем шорт-листе.",
      items: [
        { idx: "01", glyph: "Р", title: "Реальный актив", body: "В него можно войти. Закрывает базовые потребности человека, защищён от инфляции, его сложнее «обнулить», а оценка прозрачнее, чем у большинства альтернатив." },
        { idx: "02", glyph: "Д", title: "Доход + рост", body: "Арендный поток сегодня и переоценка завтра — два двигателя, которые работают параллельно, а не вместо друг друга." },
        { idx: "03", glyph: "К", title: "Кредитное плечо", body: "Грамотно структурированный долг — это множитель доходности. Неграмотный — обрыв. Разница в дисциплине андеррайтинга." },
        { idx: "04", glyph: "Д", title: "Диверсификация", body: "Разные страны, типы объектов и валюты — портфель, который не двигается в такт публичным рынкам." },
      ],
    },
    journey: {
      eyebrow: "Мой подход",
      h2_a: "Сначала понять человека,",
      h2_b: " потом подбирать объекты.",
      intro: "Большинство ошибок в инвестициях случается не из-за плохих рынков, а из-за того, что стратегия не совпала с человеком. Кому-то нужна предсказуемость, кому-то — рост, кому-то — резидентство и возможность переехать. Поэтому мы начинаем не с каталога, а с разговора о вас.",
      a: {
        tag: "Точка А · где вы сейчас",
        big: "А",
        title: "Ваша вводная",
        bullets: [
          "Накопления и свободный денежный поток",
          "Опыт инвестирования и знания о рынках",
          "Личное отношение к риску",
          "Образ жизни, семья, налоговое резидентство",
        ],
      },
      b: {
        tag: "Точка Б · куда идём",
        big: "Б",
        title: "Что вы хотите чувствовать",
        bullets: [
          "Спокойствие за завтрашний день",
          "Свободу выбора места и ритма жизни",
          "Уверенность, что капитал работает",
          "Опору для семьи и для будущего детей",
        ],
      },
    },

    approach: {
      eyebrow: "Процесс",
      h2: "Четыре шага — медленно на старте, чётко в долгосрочной перспективе.",
      sub: "Никаких готовых «продуктов». Любая работа начинается с одного вопроса: для чего нужны деньги именно вам?",
      steps: [
        { num: "01", title: "Discovery", body: "Карта целей, горизонта, валютных рисков и аппетита к риску. Итог — письменная инвестиционная гипотеза, которую вы выбираете до покупки первого объекта." },
        { num: "02", title: "Поиск рынка и сделки", body: "Off-market и открытые сделки, отфильтрованные под вашу стратегию. Вы видите длинный список, шорт-лист и математику каждого отсева." },
        { num: "03", title: "Андеррайтинг и структура", body: "Модель доходности, стресс-сценарии, финансирование, форма владения, налоги." },
        { num: "04", title: "Сделка и сопровождение", body: "Переговоры, транзакция, приёмка — и квартальный пересмотр портфеля, чтобы стратегия реально реализовывалась после проведения сделки." },
      ],
    },
    portfolio: {
      eyebrow: "Избранные кейсы",
      h2: "Несколько недавних проектов.",
      sub: "Детали условные — заменим после брифа по реальным кейсам.",
      cases: [
        { name: "Жильё у моря — Лиссабон", img: "кейс 01 • экстерьер", rows: [["Тип", "Бандл из 2 объектов"], ["Срок", "5 лет"], ["Итог", "IRR 14,2%"]] },
        { name: "Mixed-use — Dubai Marina", img: "кейс 02 • интерьер", rows: [["Тип", "Off-plan"], ["Срок", "3 года"], ["Итог", "+38% на капитал"]] },
        { name: "Бутик-коммерция — Тбилиси", img: "кейс 03 • фасад", rows: [["Тип", "Доходная"], ["Срок", "В работе"], ["Итог", "9,6% net"]] },
      ],
    },
    testimonials: {
      eyebrow: "Слова клиентов",
      h2: "Как ощущается работа со мной.",
      sub: "Плейсхолдеры — заменим на реальные отзывы.",
      items: [
        { body: "Она отговорила нас от двух сделок до того, как нашла нужную. Этого не делает почти никто.", name: "[Имя клиента]", role: "Частный инвестор • Family office" },
        { body: "Квартальный обзор портфеля поменял для меня саму суть инвестиций в недвижимость. Это стало стратегией, а не коллекцией.", name: "[Имя клиента]", role: "Предприниматель • Постоянный клиент" },
      ],
    },
    cta: {
      eyebrow: "Бесплатная консультация",
      h2: "45 минут разговора о вас.",
      bullets: [
        "Разбираем ваш текущий портфель или стартовую позицию.",
        "Я показываю 2–3 направления, которые сама бы изучала на вашем месте.",
        "Вы уходите с пониманием своей ситуации и возможными направлениями развития. Дальше — только по вашей инициативе.",
      ],
      form: {
        name: "Имя",
        email: "Email",
        phone: "Телефон",
        country: "Страна проживания",
        contact: "Предпочтительный канал связи",
        contact_options: ["WhatsApp", "Telegram", "Email"],
        budget: "Размер капитала",
        budget_options: ["До $50k", "$50k – $100k", "$100k – $250k", "$250k – $1M", "$1M +"],
        message: "Коротко — что хотите обсудить?",
        submit: "Записаться на консультацию",
      },
    },
    footer: {
      tag: "Независимый советник для тех, кто относится к недвижимости как к долгой игре.",
      cols: [
        { h: "Навигация", links: [
          { label: "Обо мне", href: "#about" },
          { label: "Зачем инвестировать", href: "#values" },
          { label: "Подход", href: "#journey" },
          { label: "Форматы", href: "#services" },
          { label: "Консультация", href: "#contact" },
        ] },
        { h: "Контакты", links: [
          { label: "elizash.work@gmail.com", href: "mailto:elizash.work@gmail.com" },
          { label: "Telegram @liza_shilova_invest", href: "https://t.me/liza_shilova_invest" },
        ] },
        { h: "Соцсети", links: [
          { label: "LinkedIn", href: "https://www.linkedin.com/in/elizaveta-shilova/" },
          { label: "Instagram", href: "https://www.instagram.com/liz.a.shi/" },
          { label: "YouTube", href: "https://www.youtube.com/@shiretec" },
        ] },
      ],
      fine_left: "© 2026 ShiREstate — Елизавета Шилова. Все права защищены.",
      fine_right: "",
    },
    draft: "Черновик структуры",
  },
};

window.COPY = COPY;
