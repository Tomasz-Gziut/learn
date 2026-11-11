<script>
  import { topics, glossary } from './data.js';
  import { quizPool } from './quiz.js';
  import { physicsConcepts, physicsFormulaInfo, physicsQuizPool, physicsTopics, physicsTutorials } from './physics.js';
  import Quiz from './Quiz.svelte';
  import FormulaCard from './FormulaCard.svelte';
  import WorkedExample from './WorkedExample.svelte';

  const hubHref = window.location.pathname;
  const subjectHref = (subject) => `${hubHref}?subject=${encodeURIComponent(subject)}`;

  const timeline = [
    {year:'1945',label:'Koniec wojny · niepodległość ogłoszona w Indonezji',href:'#azja',world:true},
    {year:'1946',label:'Churchill w Fulton: „żelazna kurtyna”',href:'#europa'},
    {year:'1946–49',label:'Wojna domowa w Grecji',href:'#europa'},
    {year:'1947',label:'Doktryna Trumana · Indie i Pakistan',href:'#azja',world:true},
    {year:'1948',label:'Blokada Berlina · powstanie Izraela',href:'#bliski-wschod',world:true},
    {year:'1949',label:'NATO · RFN, NRD · ChRL',href:'#europa'},
    {year:'1952',label:'Początek działalności EWWiS',href:'#zachod'},
    {year:'1953',label:'Rozejm kończy walki w Korei',href:'#azja',world:true},
    {year:'1955',label:'Układ Warszawski · konferencja w Bandungu',href:'#azja',world:true},
    {year:'1956',label:'Powstanie węgierskie · kryzys sueski',href:'#zimna-wojna'},
    {year:'1957',label:'Traktaty rzymskie · Sputnik',href:'#zachod'},
    {year:'1960',label:'„Rok Afryki”',href:'#bliski-wschod',world:true},
    {year:'1961',label:'Mur berliński · lot Gagarina',href:'#zimna-wojna'},
    {year:'1962',label:'Kryzys kubański · początek Soboru Watykańskiego II',href:'#zimna-wojna',world:true},
    {year:'1963–64',label:'Marsz na Waszyngton · Nobel dla Kinga',href:'#zachod',world:true},
    {year:'1965',label:'Koniec Soboru Watykańskiego II',href:'#zimna-wojna'},
    {year:'1967',label:'Wojna sześciodniowa',href:'#bliski-wschod',world:true},
    {year:'1968',label:'Praska Wiosna',href:'#zimna-wojna'},
    {year:'1969',label:'Apollo 11 na Księżycu',href:'#zimna-wojna',world:true},
    {year:'1973',label:'Wojna Jom Kipur',href:'#bliski-wschod',world:true},
    {year:'1975–76',label:'Sajgon · Apollo–Sojuz · zjednoczenie Wietnamu',href:'#azja',world:true},
    {year:'1978–79',label:'Camp David · traktat egipsko-izraelski',href:'#bliski-wschod',world:true},
    {year:'1979',label:'Rewolucja islamska w Iranie',href:'#bliski-wschod',world:true},
    {year:'1989',label:'Upadek muru berlińskiego',href:'#europa'},
    {year:'1993',label:'Porozumienia z Oslo',href:'#bliski-wschod',world:true},
    {year:'1994',label:'Wybory demokratyczne w RPA · prezydentura Mandeli',href:'#bliski-wschod',world:true}
  ];

  let search = '';
  let filteredTopics = topics;
  let filteredGlossary = glossary;
  function viewFromUrl() {
    const subject = new URLSearchParams(window.location.search).get('subject');
    return subject === 'history' || subject === 'physics' ? subject : 'hub';
  }

  let currentView = viewFromUrl();

  function normalizeSearchText(value) {
    return value
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLocaleLowerCase('pl-PL')
      .replace(/ł/g, 'l');
  }

  function filterContent(value) {
    search = value;
    const query = normalizeSearchText(value.trim());

    if (!query) {
      filteredTopics = topics;
      filteredGlossary = glossary;
      return;
    }

    filteredTopics = topics.flatMap((topic) => {
      const topicMatches = normalizeSearchText(`${topic.title} ${topic.intro}`).includes(query);
      const events = topicMatches
        ? topic.events
        : topic.events.filter((event) =>
            normalizeSearchText(
              `${event.date} ${event.title} ${event.actors} ${event.cause} ${event.course} ${event.result}`
            ).includes(query)
          );

      return topicMatches || events.length ? [{ ...topic, events }] : [];
    });
    filteredGlossary = glossary.filter(([term, definition]) =>
      normalizeSearchText(`${term} ${definition}`).includes(query)
    );
  }

  function handleShortcut(event) {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      document.getElementById('topic-search')?.focus();
    }
  }

  $: displayedEventCount = filteredTopics.reduce((count, topic) => count + topic.events.length, 0);
</script>

<svelte:window onkeydown={handleShortcut} />

<svelte:head>
  <title>{currentView === 'history' ? 'Świat po II wojnie światowej — historia' : currentView === 'physics' ? 'Fizyka atomowa i kwanty — wzory, tutoriale i quiz' : 'Ucz się po swojemu — katalog przedmiotów'}</title>
  <meta name="description" content={currentView === 'history' ? 'Czytelne notatki, chronologia i losowany quiz ABC z historii świata po II wojnie światowej.' : currentView === 'physics' ? 'Notatki, wzory, tutoriale krok po kroku i losowany quiz ABC z fizyki atomowej i kwantów.' : 'Wybierz przedmiot i dział, aby uczyć się po swojemu.'} />
</svelte:head>

<a class="skip-link" href="#main">Przejdź do treści</a>
{#if currentView === 'hub'}
<header class="site-header hub-header">
  <a class="wordmark" href="#top" aria-label="Ucz się po swojemu — strona główna"><span class="mark">U.</span><span>ATLAS NAUKI <small>KATALOG PRZEDMIOTÓW</small></span></a>
  <a class="hub-header-link" href="#subjects">Przedmioty <span aria-hidden="true">↓</span></a>
</header>
<main id="main" class="hub-main">
  <section class="hub-hero" id="top" aria-labelledby="page-title">
    <div class="hub-hero-copy">
      <p class="eyebrow"><span class="eyebrow-line"></span> TWOJE MIEJSCE DO POWTÓREK</p>
      <h1 id="page-title">Ucz się<br /><em>po swojemu.</em></h1>
      <p class="hub-deck">Wybierz przedmiot, znajdź swój dział i wracaj do nauki wtedy, kiedy tego potrzebujesz.</p>
      <a class="text-link" href="#subjects">Odkryj przedmioty <span aria-hidden="true">↓</span></a>
    </div>
    <aside class="hub-aside" aria-label="Jak korzystać z atlasu nauki">
      <div class="hub-atlas-mark" aria-hidden="true"><span>ATLAS</span><strong>01</strong><i></i><b>WIEDZY</b></div>
      <p class="aside-caption">Twoja nauka,<br />ułożona w rozdziały.</p>
      <p class="aside-note">Każdy przedmiot prowadzi do działów, a każdy dział — do materiałów, które pomagają zrozumieć więcej.</p>
    </aside>
  </section>
  <section class="subject-section" id="subjects" aria-labelledby="subjects-title">
    <div class="section-heading">
      <div><p class="eyebrow"><span class="section-no">01</span> KATALOG PRZEDMIOTÓW</p><h2 id="subjects-title">Znajdź swój <br /><em>następny temat.</em></h2></div>
      <p class="section-intro">Wybierz przedmiot i otwórz dział, który chcesz powtórzyć.</p>
    </div>
    <div class="subject-grid">
      <article class="subject-card history-card">
        <div class="subject-card-top"><span class="subject-index">01 / PRZEDMIOT</span><span class="subject-symbol" aria-hidden="true">H.</span></div>
        <p class="subject-label">NAUKI HUMANISTYCZNE</p>
        <h3>Historia</h3>
        <p class="subject-description">Poznaj wydarzenia, które ukształtowały powojenny świat — od podziału Europy po przemiany społeczne.</p>
        <div class="department-heading"><span>DZIAŁ</span><i></i></div>
        <a class="department-link" href={subjectHref('history')} aria-label="Otwórz dział Świat po II wojnie światowej">
          <span><small>01</small> Świat po II wojnie światowej</span><b aria-hidden="true">↗</b>
        </a>
      </article>
      <article class="subject-card physics-card">
        <div class="subject-card-top"><span class="subject-index">02 / PRZEDMIOT</span><span class="subject-symbol" aria-hidden="true">Φ.</span></div>
        <p class="subject-label">NAUKI ŚCISŁE</p>
        <h3>Fizyka</h3>
        <p class="subject-description">Odkrywaj zjawiska i prawa, które opisują świat — od najmniejszych cząstek po energię promieniowania.</p>
        <div class="department-heading"><span>DZIAŁ</span><i></i></div>
        <a class="department-link" href={subjectHref('physics')} aria-label="Otwórz dział Fizyka atomowa i kwanty promieniowania elektromagnetycznego">
          <span><small>01</small> Fizyka atomowa i kwanty promieniowania elektromagnetycznego</span><b aria-hidden="true">↗</b>
        </a>
      </article>
    </div>
  </section>
</main>
<footer class="site-footer"><span class="footer-mark" aria-hidden="true">U.</span><span>Atlas nauki <i>·</i> ucz się po swojemu</span><a href="#top">Wróć na górę ↑</a></footer>
{:else if currentView === 'physics'}
<header class="site-header physics-header">
  <a class="wordmark" href={hubHref} aria-label="Powrót do katalogu przedmiotów"><span class="mark">Φ.</span><span>FIZYKA <small>← KATALOG PRZEDMIOTÓW</small></span></a>
  <nav aria-label="Nawigacja główna"><a href="#notatki">Notatki</a><a href="#tutoriale">Tutoriale</a><a href="#pojecia">Pojęcia</a><a href="#test">Test</a><a href="#zrodla">Źródła</a></nav>
</header>
<main id="main" class="physics-content">
  <section class="hero" id="top" aria-labelledby="physics-title">
    <div class="hero-copy">
      <p class="eyebrow"><span class="eyebrow-line"></span> POWTÓRKA · FIZYKA ATOMOWA</p>
      <h1 id="physics-title">Świat<br /><em>atomów</em><br />i kwantów</h1>
      <p class="hero-deck">Od budowy jądra po fotony i lasery — połącz prawa, wzory i doświadczenia, które opisują świat w najmniejszej skali.</p>
      <a class="text-link" href="#sciezka">Zobacz ścieżkę nauki <span aria-hidden="true">↓</span></a>
    </div>
    <aside class="hero-aside" aria-label="Tematy działu fizyki atomowej">
      <div class="hero-years"><span>ATOM</span><i></i><span>LASER</span></div>
      <p class="aside-caption">Siedem tematów,<br />jeden wspólny język</p>
      <ol class="process-list"><li><span>01</span><div><b>Składniki</b><small>jądro, izotopy i atom</small></div></li><li><span>02</span><div><b>Promieniowanie</b><small>fale, fotony i widma</small></div></li><li><span>03</span><div><b>Oddziaływania</b><small>materia, światło i lasery</small></div></li></ol>
      <p class="aside-note">Zacznij od modelu, sprawdź zależności we wzorach, a potem zobacz, jak łączą się w doświadczeniach.</p>
    </aside>
  </section>
  <section class="timeline-section physics-path" id="sciezka" aria-labelledby="path-title">
    <div class="section-heading timeline-heading"><div><p class="eyebrow"><span class="section-no">A</span> ŚCIEŻKA NAUKI</p><h2 id="path-title">Od jądra.<br /><em>Do światła.</em></h2></div><p class="section-intro">Przejdź przez siedem powiązanych tematów. Każdy punkt prowadzi bezpośrednio do notatek i wzorów.</p></div>
    <div class="timeline-legend"><span><i class="dot"></i> Kolejność tematów</span><span class="scroll-hint">Wybierz temat <span aria-hidden="true">→</span></span></div>
    <div class="timeline-scroll" role="region" aria-label="Ścieżka nauki: siedem tematów fizyki atomowej">
      <ol class="timeline-track physics-path-track">
        {#each physicsTopics as topic}
          <li><a href={`#${topic.id}`} aria-label={`${topic.number}: ${topic.title}`}><span class="timeline-year">{topic.number}</span><span class="timeline-node" aria-hidden="true"></span><span class="timeline-label">{topic.title}</span></a></li>
        {/each}
      </ol>
    </div>
    <p class="timeline-caption"><span>01</span> SKŁADNIKI ATOMU <span class="caption-rule"></span> <span>07</span> EMISJA WYMUSZONA</p>
  </section>
  <section class="notes-section" id="notatki" aria-labelledby="physics-notes-title">
    <div class="section-heading notes-heading">
      <div><p class="eyebrow"><span class="section-no">B</span> NOTATKI TEMATYCZNE</p><h2 id="physics-notes-title">Odkrywaj.<br /><em>Rozumiej.</em></h2></div>
      <p class="section-intro">Siedem lekcji prowadzi od składu atomu przez naturę światła i materii aż po emisję laserową. Rozwiń temat, by przeczytać objaśnienia i powtórzyć wzory.</p>
    </div>
    <div class="notes-layout">
      <aside class="notes-index" aria-label="Tematy notatek z fizyki">
        <span class="index-label">W TYM ROZDZIALE</span>
        {#each physicsTopics as topic}<a href={`#${topic.id}`}><span>{topic.number}</span>{topic.title}</a>{/each}
        <div class="index-rule"></div><p>Łącz <strong>model</strong>, wzór i wynik doświadczenia.</p>
      </aside>
      <div class="topic-list">
        {#each physicsTopics as topic}
          <details class="topic" id={topic.id} open={topic.number === '01'}>
            <summary><span class="topic-number">{topic.number}</span><span class="topic-title-wrap"><span class="topic-tag">FIZYKA ATOMOWA</span><span class="topic-title">{topic.title}</span><span class="topic-intro">{topic.intro}</span></span><span class="expand-mark" aria-hidden="true">+</span></summary>
            <div class="topic-events">
              {#each topic.sections as section, i}
                <article class="event physics-event">
                  <div class="event-date">{topic.number}.{String(i + 1).padStart(2, '0')}</div>
                  <div class="event-body"><h3>{section.heading}</h3><p>{section.text}</p>{#if section.formula}<FormulaCard formula={section.formula} info={physicsFormulaInfo[`${topic.id}:${i}`] ?? {}} />{/if}</div>
                </article>
              {/each}
            </div>
          </details>
        {/each}
      </div>
    </div>
  </section>
  <section class="tutorial-section" id="tutoriale" aria-labelledby="physics-tutorial-title">
    <div class="section-heading tutorial-heading">
      <div><p class="eyebrow"><span class="section-no">C</span> PRACUJ Z DANYMI</p><h2 id="physics-tutorial-title">Policz.<br /><em>Sprawdź.</em></h2></div>
      <div class="tutorial-heading-copy"><p class="section-intro">Zobacz, jak przejść od danych i jednostek do uzasadnionego wyniku. Rozwijaj etapy po kolei albo wracaj do wybranego kroku.</p><a class="text-link" href="#notatki">Wróć do wzorów <span aria-hidden="true">↑</span></a></div>
    </div>
    <div class="tutorial-list">
      {#each physicsTutorials as example, i}
        <WorkedExample {example} index={i} />
      {/each}
    </div>
    <p class="tutorial-footnote">Wartości stałych są zaokrąglone; ostatnia metoda pokazuje dodatkowe zastosowanie okresu połowicznego zaniku.</p>
  </section>
  <section class="glossary-section" id="pojecia" aria-labelledby="physics-glossary-title">
    <div class="glossary-side"><p class="eyebrow"><span class="section-no">D</span> SŁOWNICZEK</p><h2 id="physics-glossary-title">Pojęcia,<br /><em>które warto<br />znać.</em></h2><p>Wielkości, prawa i zjawiska, do których wracają notatki z całego działu.</p><span class="glossary-count">{physicsConcepts.length.toString().padStart(2, '0')} HASŁA</span></div>
    <dl class="glossary-list">{#each physicsConcepts as [term, definition], i}<div class="glossary-entry"><dt><span>{String(i + 1).padStart(2, '0')}</span>{term}</dt><dd>{definition}</dd></div>{/each}</dl>
  </section>
  <section class="quiz-section" id="test" aria-labelledby="physics-quiz-title">
    <div class="quiz-intro">
      <p class="eyebrow"><span class="section-no">E</span> SPRAWDŹ SIĘ</p>
      <h2 id="physics-quiz-title">Sprawdź,<br /><em>co pamiętasz.</em></h2>
      <p>W każdej rundzie odpowiadasz na 10 losowych pytań z całego działu. Po każdej odpowiedzi od razu poznajesz wynik i wyjaśnienie.</p>
      <a class="text-link" href="#notatki">Wróć do notatek <span aria-hidden="true">↑</span></a>
    </div>
    <Quiz pool={physicsQuizPool} roundSize={10} />
  </section>
  <section class="sources-section" id="zrodla" aria-labelledby="physics-sources-title">
    <div class="sources-heading"><p class="eyebrow"><span class="section-no">F</span> DO DALSZEJ LEKTURY</p><h2 id="physics-sources-title">Źródła<br /><em>i kontekst.</em></h2></div>
    <div class="sources-copy">
      <p class="source-note"><span>01</span><b>Materiały do powtórki</b><br />Punktem wyjścia są dostarczone materiały do działu: siedem lekcji o budowie atomu, promieniowaniu termicznym, fotonach, fotoefekcie, falach materii, widmach i laserach oraz zestaw pytań kontrolnych. Notatki i wyjaśnienia są autorskim opracowaniem; wzory zapisano skrótowo, bez przepisywania fragmentów podręcznika.</p>
      <p class="source-note"><span>02</span><b>Stałe i dalsza lektura</b><br />Wartości stałych fizycznych podano w przybliżeniu. Dokładne wartości i dodatkowe wyjaśnienia znajdziesz w poniższych źródłach.</p>
      <ul class="source-links">
        <li><a href="https://physics.nist.gov/cuu/Constants/index.html" target="_blank" rel="noopener noreferrer">NIST — wartości stałych fizycznych <span aria-hidden="true">↗</span></a></li>
        <li><a href="https://openstax.org/details/books/university-physics-volume-3" target="_blank" rel="noopener noreferrer">OpenStax — University Physics, tom 3 <span aria-hidden="true">↗</span></a></li>
      </ul>
    </div>
  </section>
</main>
<footer class="site-footer"><a class="footer-mark" href="#top" aria-label="Wróć na górę">Φ.</a><span>Fizyka atomowa <i>·</i> powtórka</span><a href="#top">Wróć na górę ↑</a></footer>
{:else}
<header class="site-header">
  <a class="wordmark" href={hubHref} aria-label="Powrót do katalogu przedmiotów"><span class="mark">H.</span><span>HISTORIA <small>← KATALOG PRZEDMIOTÓW</small></span></a>
  <nav aria-label="Nawigacja główna"><a href="#notatki">Notatki</a><a href="#pojecia">Pojęcia</a><a href="#test">Test</a><a href="#zrodla">Źródła</a></nav>
</header>
<main id="main">
  <section class="hero" id="top" aria-labelledby="page-title">
    <div class="hero-copy"><p class="eyebrow"><span class="eyebrow-line"></span> POWTÓRKA · HISTORIA POWSZECHNA</p><h1 id="page-title">Świat po<br /><em>II wojnie</em><br />światowej</h1><p class="hero-deck">Od podziału Europy po przemiany społeczne — najważniejsze daty, decyzje i ich konsekwencje zebrane w jednym miejscu.</p><a class="text-link" href="#chronologia">Zobacz chronologię <span aria-hidden="true">↓</span></a></div>
    <aside class="hero-aside" aria-label="Główne procesy po 1945 roku"><div class="hero-years"><span>1945</span><i></i><span>1994</span></div><p class="aside-caption">Trzy procesy, które<br />zmieniły powojenny świat</p><ol class="process-list"><li><span>01</span><div><b>Podział</b><small>rywalizacja dwóch bloków</small></div></li><li><span>02</span><div><b>Niepodległość</b><small>koniec imperiów kolonialnych</small></div></li><li><span>03</span><div><b>Przemiana</b><small>nowe prawa i społeczeństwa</small></div></li></ol><p class="aside-note">Czytaj daty razem z przyczynami i skutkami. To one łączą wydarzenia w historię.</p></aside>
  </section>
  <section class="timeline-section" id="chronologia" aria-labelledby="timeline-title">
    <div class="section-heading timeline-heading"><div><p class="eyebrow"><span class="section-no">A</span> MAPA CZASU</p><h2 id="timeline-title">Jedna oś.<br /><em>Wiele historii.</em></h2></div><p class="section-intro">Przesuwaj chronologię, by połączyć wydarzenia w Europie, Azji, Afryce i obu Amerykach. Każdy punkt prowadzi do powiązanych notatek.</p></div>
    <div class="timeline-legend" aria-label="Legenda chronologii"><span><i class="dot europe"></i> Europa</span><span><i class="dot world"></i> Świat</span><span class="scroll-hint">Przewiń w bok <span aria-hidden="true">→</span></span></div>
    <div class="timeline-scroll" role="region" aria-label="Chronologia wydarzeń od 1945 do 1994 roku; przewijana poziomo"><ol class="timeline-track">{#each timeline as item}<li class:world-item={item.world}><a href={item.href} aria-label={`${item.year}: ${item.label}`}><span class="timeline-year">{item.year}</span><span class="timeline-node" aria-hidden="true"></span><span class="timeline-label">{item.label}</span></a></li>{/each}</ol></div>
    <p class="timeline-caption"><span>1945</span> · KONIEC WOJNY <span class="caption-rule"></span> <span>1994</span> · PIERWSZE WOLNE WYBORY W RPA</p>
  </section>
  <section class="notes-section" id="notatki" aria-labelledby="notes-title">
    <div class="section-heading notes-heading"><div><p class="eyebrow"><span class="section-no">B</span> NOTATKI TEMATYCZNE</p><h2 id="notes-title">Porządkuj.<br /><em>Rozumiej.</em></h2></div><div class="search-wrap"><label for="topic-search">Szukaj w notatkach i pojęciach</label><div class="search-field"><span aria-hidden="true">⌕</span><input id="topic-search" type="search" bind:value={search} oninput={(event) => filterContent(event.currentTarget.value)} placeholder="np. Berlin, apartheid, 1961" /><kbd>⌘ / Ctrl K</kbd></div><p>Wpisz datę, nazwisko albo termin.</p>{#if search.trim()}<p class="search-results" role="status">Wyniki: {filteredTopics.length} działów · {displayedEventCount} wyświetlanych wydarzeń · {filteredGlossary.length} pojęć</p>{/if}</div></div>
    <div class="notes-layout"><aside class="notes-index" aria-label="Tematy notatek"><span class="index-label">W TYM ROZDZIALE</span>{#each filteredTopics as topic}<a href={`#${topic.id}`}><span>{topic.number}</span>{topic.title}</a>{/each}<div class="index-rule"></div><p>Najpierw <strong>kontekst</strong>, potem przyczyny, przebieg i skutki.</p></aside><div class="topic-list">
      {#if filteredTopics.length}{#each filteredTopics as topic}<details class="topic" id={topic.id} open={search.trim().length > 0}><summary><span class="topic-number">{topic.number}</span><span class="topic-title-wrap"><span class="topic-tag">{topic.tag}</span><span class="topic-title">{topic.title}</span><span class="topic-intro">{topic.intro}</span></span><span class="expand-mark" aria-hidden="true">+</span></summary><div class="topic-events">{#each topic.events as event}<article class="event"><div class="event-date">{event.date}</div><div class="event-body"><h3>{event.title}</h3><dl><div><dt>KTO</dt><dd>{event.actors}</dd></div><div><dt>DLACZEGO</dt><dd>{event.cause}</dd></div><div><dt>PRZEBIEG</dt><dd>{event.course}</dd></div><div class="event-result"><dt>SKUTEK</dt><dd>{event.result}</dd></div></dl></div></article>{/each}</div></details>{/each}{:else}<div class="empty-state"><span>—</span><h3>Brak pasujących wydarzeń</h3><p>Pasujące pojęcia znajdziesz w słowniczku poniżej. Spróbuj też innej daty lub nazwiska.</p><button class="quiet-button" onclick={() => filterContent('')}>Wyczyść wyszukiwanie</button></div>{/if}
    </div></div>
  </section>
  <section class="glossary-section" id="pojecia" aria-labelledby="glossary-title"><div class="glossary-side"><p class="eyebrow"><span class="section-no">C</span> SŁOWNICZEK</p><h2 id="glossary-title">Pojęcia,<br /><em>które warto<br />znać.</em></h2><p>Krótko i konkretnie — definicje do powtórzenia przed sprawdzianem.</p><span class="glossary-count">{filteredGlossary.length.toString().padStart(2,'0')} / {glossary.length.toString().padStart(2,'0')} HASEŁ</span></div>{#if filteredGlossary.length}<dl class="glossary-list">{#each filteredGlossary as [term, definition], i}<div class="glossary-entry"><dt><span>{String(i + 1).padStart(2,'0')}</span>{term}</dt><dd>{definition}</dd></div>{/each}</dl>{:else}<div class="empty-state glossary-empty"><h3>Brak pasujących pojęć</h3><p>Zmień zapytanie, by zobaczyć słowniczek.</p></div>{/if}</section>
  <section class="quiz-section" id="test" aria-labelledby="quiz-title">
    <div class="quiz-intro">
      <p class="eyebrow"><span class="section-no">D</span> SPRAWDŹ SIĘ</p>
      <h2 id="quiz-title">Sprawdź,<br /><em>co pamiętasz.</em></h2>
      <p>W każdej rundzie odpowiadasz na 20 losowych pytań z całego rozdziału. Po każdej odpowiedzi od razu poznajesz wynik.</p>
      <a class="text-link" href="#notatki">Wróć do notatek <span aria-hidden="true">↑</span></a>
    </div>
    <Quiz pool={quizPool} roundSize={20} />
  </section>
  <section class="sources-section" id="zrodla" aria-labelledby="sources-title"><div class="sources-heading"><p class="eyebrow"><span class="section-no">E</span> DO DALSZEJ LEKTURY</p><h2 id="sources-title">Źródła<br /><em>i kontekst.</em></h2></div><div class="sources-copy"><p class="source-note"><span>01</span><b>Punkt wyjścia</b><br />Zakres tematów i podstawowe hasła pochodzą z podręcznikowych stron 48–49 oraz karty powtórzeniowej (s. 21–22) dostarczonych do zadania. Notatki porządkują materiał i uzupełniają go o kontekst — nie zastępują podręcznika.</p><p class="source-note"><span>02</span><b>Weryfikacja faktów</b><br />Daty i niuanse dotyczące polityki powojennej, dekolonizacji, wojen i misji kosmicznych sprawdzaj w poniższych materiałach historycznych i instytucjonalnych.</p><ul class="source-links">
    <li><a href="https://history.state.gov/milestones/1945-1952/truman-doctrine" target="_blank" rel="noopener noreferrer">U.S. Office of the Historian — doktryna Trumana <span aria-hidden="true">↗</span></a></li>
    <li><a href="https://history.state.gov/milestones/1937-1945/potsdam-conf" target="_blank" rel="noopener noreferrer">U.S. Office of the Historian — konferencja poczdamska <span aria-hidden="true">↗</span></a></li>
    <li><a href="https://history.state.gov/milestones/1945-1952/marshall-plan" target="_blank" rel="noopener noreferrer">U.S. Office of the Historian — plan Marshalla <span aria-hidden="true">↗</span></a></li>
    <li><a href="https://history.state.gov/milestones/1945-1952/berlin-airlift" target="_blank" rel="noopener noreferrer">U.S. Office of the Historian — most powietrzny do Berlina <span aria-hidden="true">↗</span></a></li>
    <li><a href="https://history.state.gov/milestones/1945-1952/nato" target="_blank" rel="noopener noreferrer">U.S. Office of the Historian — powstanie NATO <span aria-hidden="true">↗</span></a></li>
    <li><a href="https://history.state.gov/milestones/1945-1952/creation-israel" target="_blank" rel="noopener noreferrer">U.S. Office of the Historian — powstanie Izraela <span aria-hidden="true">↗</span></a></li>
    <li><a href="https://history.state.gov/milestones/1945-1952/asia-and-africa" target="_blank" rel="noopener noreferrer">U.S. Office of the Historian — dekolonizacja Azji i Afryki <span aria-hidden="true">↗</span></a></li>
    <li><a href="https://history.state.gov/milestones/1953-1960/dien-bien-phu" target="_blank" rel="noopener noreferrer">U.S. Office of the Historian — Indochiny i konferencja genewska <span aria-hidden="true">↗</span></a></li>
    <li><a href="https://www.britannica.com/event/Partition-of-India" target="_blank" rel="noopener noreferrer">Encyclopaedia Britannica — podział Indii w 1947 r. <span aria-hidden="true">↗</span></a></li>
    <li><a href="https://history.state.gov/milestones/1945-1952/korean-war" target="_blank" rel="noopener noreferrer">U.S. Office of the Historian — wojna koreańska <span aria-hidden="true">↗</span></a></li>
    <li><a href="https://history.state.gov/milestones/1953-1960/suez" target="_blank" rel="noopener noreferrer">U.S. Office of the Historian — kryzys sueski <span aria-hidden="true">↗</span></a></li>
    <li><a href="https://history.state.gov/milestones/1961-1968/cuban-missile-crisis" target="_blank" rel="noopener noreferrer">U.S. Office of the Historian — kryzys kubański <span aria-hidden="true">↗</span></a></li>
    <li><a href="https://history.state.gov/milestones/1977-1980/camp-david" target="_blank" rel="noopener noreferrer">U.S. Office of the Historian — porozumienia Camp David <span aria-hidden="true">↗</span></a></li>
    <li><a href="https://history.state.gov/milestones/1953-1960/warsaw-treaty" target="_blank" rel="noopener noreferrer">U.S. Office of the Historian — Układ Warszawski <span aria-hidden="true">↗</span></a></li>
    <li><a href="https://www.nasa.gov/history/dawn-of-the-space-age/" target="_blank" rel="noopener noreferrer">NASA — Sputnik i początek ery kosmicznej <span aria-hidden="true">↗</span></a></li>
    <li><a href="https://www.nasa.gov/mission/apollo-11/" target="_blank" rel="noopener noreferrer">NASA — misja Apollo 11 <span aria-hidden="true">↗</span></a></li>
    <li><a href="https://european-union.europa.eu/principles-countries-history/history-eu/1945-59_en" target="_blank" rel="noopener noreferrer">Unia Europejska — początki integracji i traktaty rzymskie <span aria-hidden="true">↗</span></a></li>
    <li><a href="https://www.britannica.com/event/Great-Leap-Forward" target="_blank" rel="noopener noreferrer">Encyclopaedia Britannica — Wielki Skok Naprzód <span aria-hidden="true">↗</span></a></li>
    <li><a href="https://www.britannica.com/event/Cultural-Revolution" target="_blank" rel="noopener noreferrer">Encyclopaedia Britannica — Rewolucja Kulturalna <span aria-hidden="true">↗</span></a></li>
    <li><a href="https://www.vatican.va/archive/hist_councils/ii_vatican_council/index.htm" target="_blank" rel="noopener noreferrer">Stolica Apostolska — dokumenty Soboru Watykańskiego II <span aria-hidden="true">↗</span></a></li>
    <li><a href="https://www.nelsonmandela.org/biography" target="_blank" rel="noopener noreferrer">Nelson Mandela Foundation — biografia Mandeli <span aria-hidden="true">↗</span></a></li>
    <li><a href="https://www.britannica.com/event/Austrian-State-Treaty" target="_blank" rel="noopener noreferrer">Encyclopaedia Britannica — traktat państwowy Austrii z 1955 r. <span aria-hidden="true">↗</span></a></li>
    <li><a href="https://www.britannica.com/event/Iranian-Revolution" target="_blank" rel="noopener noreferrer">Encyclopaedia Britannica — rewolucja islamska w Iranie <span aria-hidden="true">↗</span></a></li>
    <li><a href="https://www.un.org/en/about-us/history-of-the-un" target="_blank" rel="noopener noreferrer">ONZ — historia Organizacji Narodów Zjednoczonych <span aria-hidden="true">↗</span></a></li>
    <li><a href="https://www.archives.gov/milestone-documents/civil-rights-act" target="_blank" rel="noopener noreferrer">U.S. National Archives — Civil Rights Act z 1964 r. <span aria-hidden="true">↗</span></a></li>
    <li><a href="https://www.archives.gov/milestone-documents/voting-rights-act" target="_blank" rel="noopener noreferrer">U.S. National Archives — Voting Rights Act z 1965 r. <span aria-hidden="true">↗</span></a></li>
    <li><a href="https://www.nobelprize.org/prizes/peace/1964/king/facts/" target="_blank" rel="noopener noreferrer">Fundacja Noblowska — Martin Luther King Jr. i Pokojowa Nagroda Nobla <span aria-hidden="true">↗</span></a></li>
    <li><a href="https://www.un.org/unispal/document/auto-insert-185393/" target="_blank" rel="noopener noreferrer">ONZ — rezolucja ZO nr 181 (II) <span aria-hidden="true">↗</span></a></li>
  </ul></div></section>
</main>
<footer class="site-footer"><a class="footer-mark" href="#top">H.</a><span>Historia powszechna <i>·</i> powtórka po 1945</span><a href="#top">Wróć na górę ↑</a></footer>
{/if}


