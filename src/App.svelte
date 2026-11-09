<script>
  import { topics, glossary } from './data.js';
  import { quizPool } from './quiz.js';

  const questionsPerRound = 20;

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
  let quizStarted = false;
  let quizFinished = false;
  let round = [];
  let questionIndex = 0;
  let selectedAnswer = null;
  let score = 0;
  let lastRoundSignature = '';
  let answerStatus = '';

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

  function shuffle(items) {
    const result = [...items];
    for (let i = result.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }

  function startRound() {
    let nextRound;
    let signature;
    do {
      const groups = [...new Set(quizPool.map((question) => question.group))];
      const requiredQuestions = groups.map((group) => shuffle(quizPool.filter((question) => question.group === group))[0]);
      const remainingQuestions = quizPool.filter((question) => !requiredQuestions.includes(question));
      const selectedQuestions = shuffle([
        ...requiredQuestions,
        ...shuffle(remainingQuestions).slice(0, questionsPerRound - requiredQuestions.length)
      ]);
      nextRound = selectedQuestions.map((question) => ({...question, answers:shuffle([question.correct, ...question.wrong])}));
      signature = nextRound.map((question) => `${question.id}:${question.answers.join('|')}`).join('~');
    } while (signature === lastRoundSignature);
    lastRoundSignature = signature;
    round = nextRound;
    questionIndex = 0;
    selectedAnswer = null;
    score = 0;
    answerStatus = '';
    quizStarted = true;
    quizFinished = false;
  }

  function chooseAnswer(answer) {
    if (selectedAnswer !== null || !round[questionIndex]) return;
    selectedAnswer = answer;
    answerStatus = answer === round[questionIndex].correct ? 'correct' : 'incorrect';
    if (answerStatus === 'correct') score += 1;
  }

  function handleShortcut(event) {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      document.getElementById('topic-search')?.focus();
    }
  }

  function nextQuestion() {
    if (questionIndex === round.length - 1) {
      quizFinished = true;
      return;
    }
    questionIndex += 1;
    selectedAnswer = null;
    answerStatus = '';
  }

  $: currentQuestion = round[questionIndex];
  $: progress = round.length ? ((questionIndex + (selectedAnswer !== null ? 1 : 0)) / round.length) * 100 : 0;
  $: displayedEventCount = filteredTopics.reduce((count, topic) => count + topic.events.length, 0);
</script>

<svelte:window onkeydown={handleShortcut} />

<svelte:head>
  <title>Świat po II wojnie światowej — powtórka</title>
  <meta name="description" content="Czytelne notatki, chronologia i losowany quiz ABC z historii świata po II wojnie światowej." />
</svelte:head>

<a class="skip-link" href="#main">Przejdź do treści</a>
<header class="site-header">
  <a class="wordmark" href="#top" aria-label="Historia — strona główna"><span class="mark">H.</span><span>HISTORIA <small>zeszyt powtórkowy / 01</small></span></a>
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
      <p>W każdej rundzie odpowiadasz na {questionsPerRound} losowych pytań z całego rozdziału. Po każdej odpowiedzi od razu poznajesz wynik.</p>
      <a class="text-link" href="#notatki">Wróć do notatek <span aria-hidden="true">↑</span></a>
    </div>
    <div class="quiz-panel" aria-live="polite">
      {#if !quizStarted}
        <div class="quiz-welcome">
          <span class="quiz-label">QUIZ ABC · {questionsPerRound} PYTAŃ</span>
          <div class="quiz-big-number">{questionsPerRound}<span>×</span></div>
          <p>Pytania są losowane z puli {quizPool.length}, nie powtarzają się, a każda runda obejmuje wszystkie działy.</p>
          <button class="primary-button" onclick={startRound}>Rozpocznij test <span aria-hidden="true">→</span></button>
        </div>
      {:else if quizFinished}
        <div class="quiz-finish">
          <span class="quiz-label">KONIEC RUNDY</span>
          <div class="score-mark">{score}<span>/ {questionsPerRound}</span></div>
          <h3>{score >= questionsPerRound * 0.8 ? 'Świetna robota.' : score >= questionsPerRound * 0.5 ? 'Dobry kierunek.' : 'Warto wrócić do notatek.'}</h3>
          <p>{score >= questionsPerRound * 0.8 ? 'Dobrze łączysz fakty z ich kontekstem.' : 'Każda pomyłka to dobry trop do powtórki — pytania pochodzą ze wszystkich tematów.'}</p>
          <button class="primary-button" onclick={startRound}>Losuj nową rundę <span aria-hidden="true">↻</span></button>
        </div>
      {:else if currentQuestion}
        <div class="quiz-topline">
          <span class="quiz-label">PYTANIE {String(questionIndex + 1).padStart(2,'0')} <span>/ {questionsPerRound}</span></span>
          <span class="quiz-category">{currentQuestion.group}</span>
        </div>
        <div class="quiz-progress" role="progressbar" aria-label="Postęp quizu" aria-valuemin="0" aria-valuemax={questionsPerRound} aria-valuenow={questionIndex + (selectedAnswer !== null ? 1 : 0)}>
          <span style={`width:${progress}%`}></span>
        </div>
        <h3 class="question-title">{currentQuestion.prompt}</h3>
        <div class="answer-list" aria-label="Wybierz jedną odpowiedź">
          {#each currentQuestion.answers as answer, i}
            <button class="answer-option" class:selected={selectedAnswer === answer} class:answer-correct={selectedAnswer !== null && answer === currentQuestion.correct} class:answer-wrong={selectedAnswer === answer && answer !== currentQuestion.correct} onclick={() => chooseAnswer(answer)} disabled={selectedAnswer !== null} aria-pressed={selectedAnswer === answer}>
              <span class="answer-letter">{String.fromCharCode(65 + i)}</span><span>{answer}</span>
              <span class="answer-check" aria-hidden="true">{selectedAnswer !== null && answer === currentQuestion.correct ? '✓' : selectedAnswer === answer ? '×' : ''}</span>
            </button>
          {/each}
        </div>
        {#if selectedAnswer !== null}
          <div class="answer-feedback" class:feedback-correct={answerStatus === 'correct'} class:feedback-wrong={answerStatus === 'incorrect'} role="status">
            <strong>{answerStatus === 'correct' ? 'Dobrze!' : 'Jeszcze nie.'}</strong><p>{currentQuestion.why}</p>
          </div>
          <button class="primary-button next-button" onclick={nextQuestion}>{questionIndex === round.length - 1 ? 'Zobacz wynik' : 'Następne pytanie'} <span aria-hidden="true">→</span></button>
        {/if}
      {/if}
    </div>
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



