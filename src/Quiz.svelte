<script>
  export let pool = [];
  export let roundSize = 20;

  let quizStarted = false;
  let quizFinished = false;
  let round = [];
  let questionIndex = 0;
  let selectedAnswer = null;
  let score = 0;
  let lastRoundSignature = '';
  let answerStatus = '';

  function shuffle(items) {
    const result = [...items];
    for (let i = result.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }

  function startRound() {
    const groups = [...new Set(pool.map((question) => question.group))];
    const nextSize = Math.min(roundSize, pool.length);
    let nextRound;
    let signature;
    let attempts = 0;

    do {
      const requiredQuestions = shuffle(groups).map((group) =>
        shuffle(pool.filter((question) => question.group === group))[0]
      ).slice(0, nextSize);
      const remainingQuestions = pool.filter((question) => !requiredQuestions.includes(question));
      const selectedQuestions = shuffle([
        ...requiredQuestions,
        ...shuffle(remainingQuestions).slice(0, nextSize - requiredQuestions.length)
      ]);
      nextRound = selectedQuestions.map((question) => ({
        ...question,
        answers: shuffle([question.correct, ...question.wrong])
      }));
      signature = nextRound.map((question) => `${question.id}:${question.answers.join('|')}`).join('~');
      attempts += 1;
    } while (signature === lastRoundSignature && attempts < 20);

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

  function nextQuestion() {
    if (questionIndex === round.length - 1) {
      quizFinished = true;
      return;
    }
    questionIndex += 1;
    selectedAnswer = null;
    answerStatus = '';
  }

  $: questionsInRound = Math.min(roundSize, pool.length);
  $: currentQuestion = round[questionIndex];
  $: progress = round.length ? ((questionIndex + (selectedAnswer !== null ? 1 : 0)) / round.length) * 100 : 0;
</script>

<div class="quiz-panel" aria-live="polite">
  {#if !quizStarted}
    <div class="quiz-welcome">
      <span class="quiz-label">QUIZ ABC · {questionsInRound} PYTAŃ</span>
      <div class="quiz-big-number">{questionsInRound}<span>×</span></div>
      <p>Pytania są losowane z puli {pool.length}, nie powtarzają się, a każda runda obejmuje wszystkie działy.</p>
      <button class="primary-button" onclick={startRound}>Rozpocznij test <span aria-hidden="true">→</span></button>
    </div>
  {:else if quizFinished}
    <div class="quiz-finish">
      <span class="quiz-label">KONIEC RUNDY</span>
      <div class="score-mark">{score}<span>/ {questionsInRound}</span></div>
      <h3>{score >= questionsInRound * 0.8 ? 'Świetna robota.' : score >= questionsInRound * 0.5 ? 'Dobry kierunek.' : 'Warto wrócić do notatek.'}</h3>
      <p>{score >= questionsInRound * 0.8 ? 'Dobrze łączysz fakty z ich kontekstem.' : 'Każda pomyłka to dobry trop do powtórki — pytania pochodzą ze wszystkich tematów.'}</p>
      <button class="primary-button" onclick={startRound}>Losuj nową rundę <span aria-hidden="true">↻</span></button>
    </div>
  {:else if currentQuestion}
    <div class="quiz-topline">
      <span class="quiz-label">PYTANIE {String(questionIndex + 1).padStart(2, '0')} <span>/ {questionsInRound}</span></span>
      <span class="quiz-category">{currentQuestion.group}</span>
    </div>
    <div class="quiz-progress" role="progressbar" aria-label="Postęp quizu" aria-valuemin="0" aria-valuemax={questionsInRound} aria-valuenow={questionIndex + (selectedAnswer !== null ? 1 : 0)}>
      <span style={`width:${progress}%`}></span>
    </div>
    <h3 class="question-title">{currentQuestion.prompt}</h3>
    <div class="answer-list" role="group" aria-label="Wybierz jedną odpowiedź">
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
