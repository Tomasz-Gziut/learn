export const physicsTopics = [
  {
    id: 'physics-nucleus',
    number: '01',
    title: 'Atom, jądro i izotopy',
    intro: 'Od rozpraszania cząstek alfa do zapisu składu jądra.',
    sections: [
      {
        heading: 'Z czego zbudowany jest atom?',
        text: 'W środku atomu znajduje się dodatnio naładowane jądro z protonów i neutronów, czyli nukleonów. Wokół niego znajdują się elektrony o ładunku ujemnym. Niemal cała masa atomu jest skupiona w jądrze, a większość objętości atomu stanowi przestrzeń między jądrem a elektronami.',
        formula: 'ładunek protonu: +e  ·  elektronu: −e  ·  neutronu: 0'
      },
      {
        heading: 'Jak czytać zapis jądra?',
        text: 'Liczba atomowa Z określa liczbę protonów i identyfikuje pierwiastek. Liczba masowa A jest sumą protonów i neutronów. Liczbę neutronów N obliczamy jako A − Z. Izotopy tego samego pierwiastka mają jednakowe Z, ale różne N; ich właściwości chemiczne są bardzo podobne.',
        formula: 'zapis: ᴬ_ZX  ·  A = Z + N  ·  N = A − Z  ·  przykład: ¹⁴₆C ma 6 protonów i 8 neutronów'
      },
      {
        heading: 'Doświadczenie Rutherforda',
        text: 'W doświadczeniu cienka złota folia była bombardowana cząstkami alfa. Większość przechodziła prawie bez zmiany kierunku, a nieliczne silnie się odchylały. Wynik pokazał, że dodatni ładunek i prawie cała masa są skupione w małym jądrze, a atom nie jest wypełnioną równomiernie kulą.',
        formula: 'wniosek: atom jest w większości pustą przestrzenią'
      },
      {
        heading: 'Antymateria',
        text: 'Cząstkom mogą odpowiadać antycząstki o tej samej masie i przeciwnym ładunku. Elektronowi odpowiada pozyton. Przy anihilacji pary cząstka–antycząstka ich energia może zostać zamieniona na energię fotonów; para cząstka–antycząstka może też powstać z wysokoenergetycznego promieniowania w obecności obiektu, który pozwala zachować pęd.'
      }
    ]
  },
  {
    id: 'physics-thermal',
    number: '02',
    title: 'Promieniowanie termiczne',
    intro: 'Temperatura ciała wpływa na moc i widmo emitowanego promieniowania.',
    sections: [
      {
        heading: 'Widmo i temperatura',
        text: 'Każde ciało o temperaturze wyższej od zera bezwzględnego emituje promieniowanie. Wraz ze wzrostem temperatury rośnie całkowita moc promieniowania, a maksimum widma przesuwa się ku krótszym falom. Dlatego barwa rozgrzanego obiektu zmienia się od czerwonej ku białej i niebieskawej.',
        formula: 'prawo Wiena: λmax = b / T  ·  b ≈ 2,9·10⁻³ m·K  ·  T w kelwinach'
      },
      {
        heading: 'Ciało doskonale czarne',
        text: 'To model idealnego obiektu, który pochłania całe padające na niego promieniowanie. Dla ciała doskonale czarnego moc wypromieniowana z jednostki powierzchni rośnie jak czwarta potęga temperatury bezwzględnej; przy stałej powierzchni P jest proporcjonalne do T⁴.'
      },
      {
        heading: 'Gdzie to widać?',
        text: 'Maksimum promieniowania Słońca leży w pobliżu zakresu widzialnego, natomiast włókno tradycyjnej żarówki emituje dużą część energii w podczerwieni. Widma termiczne pomagają opisywać temperaturę barwową, działanie termowizji i bilans energii w atmosferze, w tym efekt cieplarniany.',
        formula: 'do porównań używaj temperatury T w kelwinach, nie w stopniach Celsjusza'
      }
    ]
  },
  {
    id: 'physics-photons',
    number: '03',
    title: 'Kwanty i fotony',
    intro: 'Energia światła jest przekazywana w porcjach, a nie w dowolnie małych ilościach.',
    sections: [
      {
        heading: 'Energia fotonu',
        text: 'Foton jest kwantem promieniowania elektromagnetycznego. Jego energia rośnie wraz z częstotliwością i maleje wraz z długością fali. Natężenie światła nie zwiększa energii pojedynczego fotonu — przy tej samej częstotliwości oznacza przede wszystkim większą liczbę fotonów docierających w jednostce czasu.',
        formula: 'E = h·f = h·c/λ  ·  h ≈ 6,63·10⁻³⁴ J·s  ·  c ≈ 3,00·10⁸ m/s'
      },
      {
        heading: 'Pęd fotonu',
        text: 'Foton, mimo że nie ma masy spoczynkowej, przenosi pęd. Może przekazać go materii podczas pochłonięcia lub odbicia. Gdy atom emituje foton, sam uzyskuje przeciwny pęd, podobnie jak ciało odrzuca się przy wyrzuceniu przedmiotu.',
        formula: 'p = E/c = h·f/c = h/λ  ·  jednostka pędu: kg·m/s'
      }
    ]
  },
  {
    id: 'physics-photoelectric',
    number: '04',
    title: 'Zjawisko fotoelektryczne',
    intro: 'Pojedynczy foton może przekazać energię elektronowi w metalu.',
    sections: [
      {
        heading: 'Próg częstotliwości',
        text: 'Elektron opuszcza metal, jeśli energia pochłoniętego fotonu wystarcza na pokonanie pracy wyjścia W. Istnieje częstotliwość graniczna f₀. Poniżej tego progu emisji nie wywoła nawet bardzo intensywne światło; powyżej progu zwiększenie natężenia zwiększa liczbę emitowanych elektronów, a nie maksymalną energię każdego z nich.',
        formula: 'Kmax = h·f − W  ·  f₀ = W/h  ·  równoważnie: λ ≤ h·c/W'
      },
      {
        heading: 'Pomiar energii elektronów',
        text: 'Napięcie hamujące zatrzymuje najszybsze fotoelektrony. Z jego wartości można wyznaczyć ich maksymalną energię kinetyczną. Wygodną jednostką energii w fizyce atomowej jest elektronowolt.',
        formula: 'e·Uh = Kmax  ·  1 eV = 1,60·10⁻¹⁹ J'
      },
      {
        heading: 'Doświadczenie i zastosowania',
        text: 'W fotokomórce można porównać światło o różnych barwach i natężeniach. Wynik pokazuje, że o energii fotoelektronów decyduje częstotliwość, a o liczbie emitowanych elektronów — natężenie. Zjawisko wykorzystują m.in. fotodiody i czujniki światła.'
      }
    ]
  },
  {
    id: 'physics-duality',
    number: '05',
    title: 'Dualizm i fale materii',
    intro: 'Światło i cząstki materii ujawniają zarówno cechy falowe, jak i cząstkowe.',
    sections: [
      {
        heading: 'Hipoteza de Broglie’a',
        text: 'Światło wykazuje interferencję i dyfrakcję, ale w zjawisku fotoelektrycznym zachowuje się jak strumień fotonów. Louis de Broglie zaproponował, że także cząstkom materii można przypisać falę. Dla cząstki nierelatywistycznej jej długość zależy od pędu.',
        formula: 'λ = h/p  ·  dla powolnej cząstki: λ = h/(m·v)'
      },
      {
        heading: 'Dyfrakcja elektronów',
        text: 'Elektrony ulegają dyfrakcji na kryształach. Nawet jeśli wysyła się je pojedynczo, kolejne trafienia stopniowo tworzą obraz interferencyjny. Krótka fala de Broglie’a rozpędzonych elektronów umożliwia uzyskanie dużej zdolności rozdzielczej w mikroskopie elektronowym.',
        formula: 'dla elektronu przyspieszanego napięciem U: e·U ≈ ½·m·v² (przybliżenie nierelatywistyczne)'
      }
    ]
  },
  {
    id: 'physics-spectra',
    number: '06',
    title: 'Widma i poziomy energii',
    intro: 'Widmo pozwala odczytać dyskretną strukturę energii atomów.',
    sections: [
      {
        heading: 'Emisja i absorpcja',
        text: 'Rozrzedzony, wzbudzony gaz emituje widmo liniowe. Gaz pochłania te same częstotliwości, które może emitować, dlatego na tle widma ciągłego mogą pojawiać się ciemne linie absorpcyjne. Rozgrzane ciała dają zwykle widmo ciągłe.',
        formula: 'energia fotonu przy przejściu: |ΔE| = h·f = h·c/λ'
      },
      {
        heading: 'Poziomy wodoru',
        text: 'Elektron w atomie wodoru może mieć tylko określone energie. Przejście na niższy poziom wiąże się z emisją fotonu, a przejście na wyższy — z jego absorpcją. Energia fotonu jest równa różnicy energii poziomów.',
        formula: 'En = −13,6 eV/n²  ·  1/λ = R(1/m² − 1/n²), n > m  ·  R ≈ 1,1·10⁷ m⁻¹'
      },
      {
        heading: 'Serie widmowe i spektroskopia',
        text: 'Serie widmowe porządkuje końcowy poziom przejścia: seria Lymana kończy się na n=1 i leży w nadfiolecie, Balmera na n=2 (linie widzialne), a Paschena na n=3 (podczerwień). Ponieważ każdy pierwiastek ma charakterystyczne widmo, spektroskopia pomaga identyfikować substancje w laboratorium, astrofizyce i kryminalistyce.'
      }
    ]
  },
  {
    id: 'physics-laser',
    number: '07',
    title: 'Emisja wymuszona i lasery',
    intro: 'Wymuszona emisja pozwala wzmacniać światło i tworzyć wiązkę o uporządkowanych własnościach.',
    sections: [
      {
        heading: 'Jak powstaje promieniowanie laserowe?',
        text: 'Foton o odpowiedniej energii może wymusić przejście wzbudzonego atomu na niższy poziom. Emitowany foton jest zgodny z fotonem wymuszającym — ma tę samą częstotliwość, kierunek, fazę i polaryzację. Wielokrotne powtarzanie procesu wzmacnia promieniowanie.',
        formula: 'LASER: wzmocnienie światła przez wymuszoną emisję promieniowania'
      },
      {
        heading: 'Zastosowania',
        text: 'Spójna i kierunkowa wiązka laserowa służy m.in. do precyzyjnych pomiarów i niwelacji, cięcia i spawania, zabiegów medycznych oraz odczytu nośników optycznych.'
      }
    ]
  }
];

export const physicsConcepts = [
  ['Nukleon', 'Wspólna nazwa protonu i neutronu, czyli składników jądra atomowego.'],
  ['Liczba atomowa Z', 'Liczba protonów w jądrze; określa, jakim pierwiastkiem jest atom.'],
  ['Liczba masowa A', 'Łączna liczba protonów i neutronów w jądrze.'],
  ['Izotopy', 'Odmiany tego samego pierwiastka o jednakowej liczbie protonów, lecz różnej liczbie neutronów.'],
  ['Cząstka alfa', 'Jądro helu zawierające dwa protony i dwa neutrony, emitowane m.in. w rozpadach promieniotwórczych.'],
  ['Ciało doskonale czarne', 'Idealny model ciała całkowicie pochłaniającego padające promieniowanie.'],
  ['Prawo Wiena', 'Zależność mówiąca, że maksimum widma termicznego przesuwa się ku krótszym falom, gdy rośnie temperatura.'],
  ['Kwant', 'Najmniejsza porcja energii przekazywana w danym procesie.'],
  ['Foton', 'Kwant promieniowania elektromagnetycznego o energii E = h·f i pędzie p = h/λ.'],
  ['Zjawisko fotoelektryczne', 'Emisja elektronów z materiału po pochłonięciu fotonów o częstotliwości co najmniej granicznej.'],
  ['Praca wyjścia W', 'Minimalna energia potrzebna do uwolnienia elektronu z powierzchni materiału.'],
  ['Elektronowolt (eV)', 'Jednostka energii: 1 eV = 1,60·10⁻¹⁹ J.'],
  ['Długość fali de Broglie’a', 'Długość fali przypisana cząstce o pędzie p: λ = h/p.'],
  ['Widmo emisyjne', 'Zestaw częstotliwości promieniowania emitowanych przez źródło; rozrzedzony gaz daje widmo liniowe.'],
  ['Widmo absorpcyjne', 'Ciemne linie częstotliwości pochłoniętych przez substancję na tle widma ciągłego.'],
  ['Poziom energetyczny', 'Jedna z dozwolonych energii elektronu w atomie; przejściu między poziomami towarzyszy foton.'],
  ['Spektroskopia', 'Badanie widm promieniowania w celu rozpoznawania składu i własności materii.'],
  ['Emisja wymuszona', 'Proces, w którym foton wywołuje emisję drugiego, zgodnego z nim fotonu przez wzbudzony atom.'],
  ['Laser', 'Źródło światła wzmacnianego przez emisję wymuszoną; wiązka jest kierunkowa i spójna.']
];

export const physicsQuizPool = [
  { id: 'p01', group: 'Jądro', prompt: 'Jądro izotopu ¹⁴₆C zawiera ile neutronów?', correct: '8', wrong: ['6', '14'], why: 'Liczbę neutronów obliczamy jako N = A − Z, więc 14 − 6 = 8.' },
  { id: 'p02', group: 'Jądro', prompt: 'Co wykazało doświadczenie Rutherforda z folią złotą?', correct: 'Dodatni ładunek i prawie cała masa atomu są skupione w małym jądrze', wrong: ['Elektrony są nieruchome wewnątrz jednorodnej kuli', 'Atom jest wypełniony równomiernie dodatnim ładunkiem'], why: 'Większość cząstek alfa przechodziła przez folię, a nieliczne silnie się odchylały.' },
  { id: 'p03', group: 'Promieniowanie termiczne', prompt: 'Co dzieje się z długością fali odpowiadającą maksimum widma, gdy temperatura ciała rośnie?', correct: 'Maleje', wrong: ['Rośnie', 'Pozostaje zawsze taka sama'], why: 'Z prawa Wiena λmax = b/T wynika odwrotna zależność od temperatury bezwzględnej.' },
  { id: 'p04', group: 'Promieniowanie termiczne', prompt: 'W jakiej skali należy podać temperaturę w prawie Wiena?', correct: 'W kelwinach', wrong: ['W stopniach Celsjusza', 'W stopniach Fahrenheita'], why: 'Prawo Wiena wykorzystuje temperaturę bezwzględną T wyrażoną w kelwinach.' },
  { id: 'p05', group: 'Fotony', prompt: 'Jak zmieni się energia fotonu, jeśli jego częstotliwość wzrośnie dwukrotnie?', correct: 'Wzrośnie dwukrotnie', wrong: ['Zmniejszy się dwukrotnie', 'Nie zmieni się'], why: 'Zależność E = h·f jest wprost proporcjonalna do częstotliwości.' },
  { id: 'p06', group: 'Fotony', prompt: 'Co oznacza większe natężenie światła o tej samej częstotliwości?', correct: 'Większą liczbę fotonów, a nie większą energię każdego z nich', wrong: ['Większą energię pojedynczego fotonu', 'Mniejszą częstotliwość fotonów'], why: 'Energię fotonu określa częstotliwość; natężenie wiąże się przede wszystkim z liczbą fotonów.' },
  { id: 'p07', group: 'Fotoefekt', prompt: 'Czy bardzo intensywne światło poniżej częstotliwości granicznej wybije elektrony z metalu?', correct: 'Nie', wrong: ['Tak, jeśli natężenie będzie dostatecznie duże', 'Tak, ale dopiero po długim czasie'], why: 'Pojedynczy foton musi mieć energię co najmniej równą pracy wyjścia.' },
  { id: 'p08', group: 'Fotoefekt', prompt: 'Jak z napięcia hamowania Uh oblicza się maksymalną energię fotoelektronu?', correct: 'Kmax = e·Uh', wrong: ['Kmax = h/Uh', 'Kmax = c·Uh'], why: 'Ładunek elektronu przemnożony przez napięcie hamowania odpowiada maksymalnej energii kinetycznej.' },
  { id: 'p09', group: 'Fale materii', prompt: 'Jak zależy długość fali de Broglie’a od pędu cząstki?', correct: 'λ = h/p', wrong: ['λ = h·p', 'λ = p/h'], why: 'Długość fali maleje, gdy rośnie pęd cząstki.' },
  { id: 'p10', group: 'Widma', prompt: 'Jakie widmo emituje zwykle rozrzedzony, wzbudzony gaz?', correct: 'Liniowe', wrong: ['Zawsze ciągłe', 'Nie emituje promieniowania'], why: 'Dozwolone przejścia między poziomami energii odpowiadają określonym częstotliwościom.' },
  { id: 'p11', group: 'Widma', prompt: 'Do której serii wodoru należą linie widzialne?', correct: 'Do serii Balmera, której przejścia kończą się na n = 2', wrong: ['Do serii Lymana, kończącej się na n = 1', 'Do serii Paschena, kończącej się na n = 3'], why: 'Seria Balmera leży w zakresie widzialnym; Lymana w nadfiolecie, a Paschena w podczerwieni.' },
  { id: 'p12', group: 'Lasery', prompt: 'Co wyróżnia foton powstały w emisji wymuszonej?', correct: 'Jest zgodny z fotonem wymuszającym: ma tę samą częstotliwość, fazę i kierunek', wrong: ['Zawsze ma mniejszą energię i losowy kierunek', 'Nie przenosi pędu'], why: 'Zgodność emitowanych fotonów umożliwia wzmacnianie spójnej wiązki laserowej.' }
];

export const physicsFormulaInfo = {
  'physics-nucleus:0': {
    label: 'Ładunki składników atomu',
    symbols: [
      { symbol: 'e', meaning: 'ładunek elementarny', unit: 'C' }
    ],
    constants: ['e ≈ 1,60·10⁻¹⁹ C — wartość bezwzględna ładunku protonu i elektronu'],
    notes: ['Proton i elektron mają ładunki o tej samej wartości bezwzględnej i przeciwnych znakach.']
  },
  'physics-nucleus:1': {
    label: 'Skład jądra i zapis izotopu',
    symbols: [
      { symbol: 'A', meaning: 'liczba masowa', unit: 'bezwymiarowa' },
      { symbol: 'Z', meaning: 'liczba protonów (liczba atomowa)', unit: 'bezwymiarowa' },
      { symbol: 'N', meaning: 'liczba neutronów', unit: 'bezwymiarowa' }
    ],
    notes: ['Izotopy jednego pierwiastka mają takie samo Z, lecz różne A i N.']
  },
  'physics-nucleus:2': {
    label: 'Wniosek z doświadczenia',
    kind: 'note',
    notes: ['To wynik obserwacji rozpraszania cząstek alfa, a nie równanie obliczeniowe.']
  },
  'physics-thermal:0': {
    label: 'Prawo przesunięć Wiena',
    symbols: [
      { symbol: 'λmax', meaning: 'długość fali przy maksimum widma', unit: 'm' },
      { symbol: 'T', meaning: 'temperatura bezwzględna', unit: 'K' }
    ],
    constants: ['b ≈ 2,9·10⁻³ m·K — stała Wiena'],
    notes: ['Temperaturę podstawiaj w kelwinach.']
  },
  'physics-thermal:2': {
    label: 'Wskazówka do prawa Wiena',
    kind: 'note',
    notes: ['Przed podstawieniem zamień temperaturę ze stopni Celsjusza na kelwiny.']
  },
  'physics-photons:0': {
    label: 'Energia fotonu',
    symbols: [
      { symbol: 'E', meaning: 'energia fotonu', unit: 'J' },
      { symbol: 'f', meaning: 'częstotliwość', unit: 'Hz' },
      { symbol: 'λ', meaning: 'długość fali', unit: 'm' }
    ],
    constants: ['h ≈ 6,63·10⁻³⁴ J·s — stała Plancka', 'c ≈ 3,00·10⁸ m/s — prędkość światła w próżni']
  },
  'physics-photons:1': {
    label: 'Pęd fotonu',
    symbols: [
      { symbol: 'p', meaning: 'pęd fotonu', unit: 'kg·m/s' },
      { symbol: 'E', meaning: 'energia fotonu', unit: 'J' },
      { symbol: 'λ', meaning: 'długość fali', unit: 'm' }
    ],
    constants: ['h — stała Plancka', 'c — prędkość światła w próżni']
  },
  'physics-photoelectric:0': {
    label: 'Równanie fotoefektu',
    symbols: [
      { symbol: 'Kmax', meaning: 'maksymalna energia kinetyczna elektronu', unit: 'J lub eV' },
      { symbol: 'f', meaning: 'częstotliwość światła', unit: 'Hz' },
      { symbol: 'W', meaning: 'praca wyjścia metalu', unit: 'J lub eV' },
      { symbol: 'f₀', meaning: 'częstotliwość graniczna', unit: 'Hz' },
      { symbol: 'λ', meaning: 'graniczna długość fali', unit: 'm' }
    ],
    constants: ['h ≈ 6,63·10⁻³⁴ J·s — stała Plancka'],
    notes: ['Fotoemisja zachodzi, gdy f ≥ f₀; natężenie nie zastąpi zbyt małej energii fotonu.']
  },
  'physics-photoelectric:1': {
    label: 'Napięcie hamujące',
    symbols: [
      { symbol: 'Uh', meaning: 'napięcie hamujące', unit: 'V' },
      { symbol: 'Kmax', meaning: 'maksymalna energia kinetyczna elektronu', unit: 'J' },
      { symbol: 'e', meaning: 'wartość ładunku elektronu', unit: 'C' }
    ],
    constants: ['1 eV = 1,60·10⁻¹⁹ J']
  },
  'physics-duality:0': {
    label: 'Fala de Broglie’a',
    symbols: [
      { symbol: 'λ', meaning: 'długość fali cząstki', unit: 'm' },
      { symbol: 'p', meaning: 'pęd cząstki', unit: 'kg·m/s' },
      { symbol: 'm', meaning: 'masa cząstki', unit: 'kg' },
      { symbol: 'v', meaning: 'prędkość cząstki', unit: 'm/s' }
    ],
    constants: ['h ≈ 6,63·10⁻³⁴ J·s — stała Plancka'],
    notes: ['Zależność λ = h/(m·v) stosujemy dla cząstki nierelatywistycznej.']
  },
  'physics-duality:1': {
    label: 'Elektron przyspieszony napięciem',
    symbols: [
      { symbol: 'U', meaning: 'napięcie przyspieszające', unit: 'V' },
      { symbol: 'e', meaning: 'wartość ładunku elektronu', unit: 'C' },
      { symbol: 'm', meaning: 'masa elektronu', unit: 'kg' },
      { symbol: 'v', meaning: 'prędkość elektronu', unit: 'm/s' }
    ],
    notes: ['Przybliżenie klasyczne jest dobre, gdy prędkość elektronu jest dużo mniejsza od c.']
  },
  'physics-spectra:0': {
    label: 'Energia fotonu przy przejściu',
    symbols: [
      { symbol: 'ΔE', meaning: 'różnica energii poziomów atomu', unit: 'J' },
      { symbol: 'f', meaning: 'częstotliwość fotonu', unit: 'Hz' },
      { symbol: 'λ', meaning: 'długość fali fotonu', unit: 'm' }
    ],
    constants: ['h — stała Plancka', 'c — prędkość światła w próżni']
  },
  'physics-spectra:1': {
    label: 'Poziomy wodoru i wzór Rydberga',
    symbols: [
      { symbol: 'En', meaning: 'energia elektronu na poziomie n', unit: 'eV' },
      { symbol: 'n', meaning: 'główny numer poziomu początkowego', unit: 'bezwymiarowa' },
      { symbol: 'm', meaning: 'główny numer poziomu końcowego', unit: 'bezwymiarowa' },
      { symbol: 'λ', meaning: 'długość fali fotonu', unit: 'm' }
    ],
    constants: ['R ≈ 1,1·10⁷ m⁻¹ — stała Rydberga'],
    notes: ['W równaniu energii En = −13,6 eV/n² indeks n oznacza poziom wodoru.']
  },
  'physics-laser:0': {
    label: 'Co oznacza skrót LASER?',
    kind: 'note',
    symbols: [],
    notes: ['To rozwinięcie nazwy zjawiska, a nie równanie obliczeniowe.']
  }
};

export const physicsTutorials = [
  {
    id: 'isotope',
    title: 'Ile neutronów ma izotop węgla-14?',
    category: 'Jądro i izotopy',
    task: 'Dla izotopu ¹⁴₆C wyznacz liczbę protonów i neutronów w jądrze.',
    formula: 'A = Z + N  ·  N = A − Z',
    formulaInfo: physicsFormulaInfo['physics-nucleus:1'],
    steps: [
      { title: 'Wypisz dane i szukane', text: 'Z zapisu ¹⁴₆C odczytujemy A = 14 i Z = 6. Szukamy liczby neutronów N.' },
      { title: 'Wybierz zależność', text: 'Liczba masowa jest sumą protonów i neutronów, więc N = A − Z.' },
      { title: 'Podstaw i oblicz', text: 'N = 14 − 6 = 8 neutronów. Liczba protonów wynosi Z = 6.' },
      { title: 'Sprawdź wynik', text: '6 protonów + 8 neutronów = 14 nukleonów, czyli zgadza się z liczbą masową A.' }
    ]
  },
  {
    id: 'wien',
    title: 'Maksimum widma rozgrzanego metalu',
    category: 'Promieniowanie termiczne',
    task: 'Ciało ma temperaturę 1500°C. Oszacuj długość fali λmax, przyjmując b = 2,90·10⁻³ m·K.',
    formula: 'λmax = b / T',
    formulaInfo: physicsFormulaInfo['physics-thermal:0'],
    steps: [
      { title: 'Wypisz dane i zamień jednostkę', text: 'T = 1500°C. Prawo Wiena wymaga kelwinów: T = 1500 + 273 = 1773 K. Szukamy λmax.' },
      { title: 'Wybierz prawo Wiena', text: 'Maksimum widma wyznacza zależność λmax = b/T; stała b ma jednostkę m·K.' },
      { title: 'Podstaw i oblicz', text: 'λmax = (2,90·10⁻³ m·K)/(1773 K) ≈ 1,64·10⁻⁶ m.' },
      { title: 'Podaj wynik i sprawdź', text: 'λmax ≈ 1,64 μm. Kelwiny skracają się, więc wynik ma jednostkę metra; fala leży w podczerwieni.' }
    ]
  },
  {
    id: 'photon',
    title: 'Energia zielonego światła',
    category: 'Fotony',
    task: 'Oblicz energię fotonu o długości fali 500 nm. Podaj wynik w dżulach i elektronowoltach.',
    formula: 'E = h·c/λ',
    formulaInfo: physicsFormulaInfo['physics-photons:0'],
    steps: [
      { title: 'Wypisz dane i zamień długość fali', text: 'λ = 500 nm = 500·10⁻⁹ m = 5,00·10⁻⁷ m. Szukamy E.' },
      { title: 'Wybierz równanie', text: 'Długość fali jest podana bezpośrednio, więc używamy E = h·c/λ.' },
      { title: 'Podstaw stałe i oblicz', text: 'E = (6,626·10⁻³⁴ J·s)(2,998·10⁸ m/s)/(5,00·10⁻⁷ m) ≈ 3,97·10⁻¹⁹ J.' },
      { title: 'Przelicz i sprawdź', text: 'E ≈ (3,97·10⁻¹⁹ J)/(1,602·10⁻¹⁹ J/eV) ≈ 2,48 eV. Krótsza fala oznacza większą energię fotonu.' }
    ]
  },
  {
    id: 'photoelectric',
    title: 'Energia fotoelektronu i napięcie hamujące',
    category: 'Zjawisko fotoelektryczne',
    task: 'Światło o częstotliwości 1,00·10¹⁵ Hz pada na metal o pracy wyjścia W = 3,00 eV. Oblicz Kmax i napięcie hamujące Uh.',
    formula: 'Kmax = h·f − W  ·  e·Uh = Kmax',
    formulaInfo: {
      label: 'Fotoefekt i napięcie hamujące',
      symbols: [
        { symbol: 'Kmax', meaning: 'maksymalna energia kinetyczna elektronu', unit: 'J' },
        { symbol: 'f', meaning: 'częstotliwość światła', unit: 'Hz' },
        { symbol: 'W', meaning: 'praca wyjścia metalu', unit: 'J' },
        { symbol: 'Uh', meaning: 'napięcie hamujące', unit: 'V' },
        { symbol: 'e', meaning: 'wartość ładunku elektronu', unit: 'C' }
      ],
      constants: ['h ≈ 6,63·10⁻³⁴ J·s — stała Plancka'],
      notes: ['Najpierw sprawdź, czy h·f ≥ W; do równania energii używaj zgodnych jednostek.']
    },
    steps: [
      { title: 'Wypisz dane i ujednolić jednostki', text: 'f = 1,00·10¹⁵ Hz. Przelicz pracę wyjścia: W = 3,00 eV·1,60·10⁻¹⁹ J/eV = 4,80·10⁻¹⁹ J.' },
      { title: 'Wybierz równanie i sprawdź próg', text: 'Kmax = h·f − W. Energia fotonu h·f ≈ 6,63·10⁻¹⁹ J jest większa od W, więc fotoemisja zachodzi.' },
      { title: 'Podstaw i oblicz energię', text: 'Kmax = 6,63·10⁻¹⁹ J − 4,80·10⁻¹⁹ J = 1,83·10⁻¹⁹ J ≈ 1,14 eV.' },
      { title: 'Wyznacz napięcie i sprawdź', text: 'Uh = Kmax/e = (1,83·10⁻¹⁹ J)/(1,60·10⁻¹⁹ C) ≈ 1,14 V. Jednostka J/C to wolt.' }
    ]
  },
  {
    id: 'debroglie',
    title: 'Fala de Broglie’a elektronu',
    category: 'Fale materii',
    task: 'Elektron porusza się z prędkością 2,00·10⁶ m/s. Oszacuj długość jego fali de Broglie’a.',
    formula: 'λ = h/(m·v)',
    formulaInfo: physicsFormulaInfo['physics-duality:0'],
    steps: [
      { title: 'Wypisz dane i stałe', text: 'v = 2,00·10⁶ m/s, mₑ = 9,11·10⁻³¹ kg, h = 6,626·10⁻³⁴ J·s. Szukamy λ.' },
      { title: 'Wybierz model', text: 'Dla cząstki nierelatywistycznej p = m·v, zatem λ = h/(m·v). Prędkość jest znacznie mniejsza od prędkości światła.' },
      { title: 'Podstaw i oblicz', text: 'λ = (6,626·10⁻³⁴ J·s)/(9,11·10⁻³¹ kg·2,00·10⁶ m/s) ≈ 3,64·10⁻¹⁰ m.' },
      { title: 'Zapisz wynik z wygodną jednostką', text: 'λ ≈ 0,364 nm. Jednostki J·s/(kg·m/s) upraszczają się do metra.' }
    ]
  },
  {
    id: 'spectrum',
    title: 'Linia widmowa wodoru: przejście 3 → 2',
    category: 'Widma i poziomy energii',
    task: 'Oblicz długość fali fotonu emitowanego podczas przejścia elektronu w atomie wodoru z poziomu n = 3 na m = 2. Przyjmij R = 1,097·10⁷ m⁻¹.',
    formula: '1/λ = R(1/m² − 1/n²),  n > m',
    formulaInfo: physicsFormulaInfo['physics-spectra:1'],
    steps: [
      { title: 'Wypisz poziomy i szukaną', text: 'Przejście 3 → 2 oznacza n = 3 (poziom początkowy) oraz m = 2 (końcowy). Szukamy λ.' },
      { title: 'Wybierz wzór Rydberga', text: 'Dla emisji przejście prowadzi na niższy poziom, n > m; używamy 1/λ = R(1/m² − 1/n²).' },
      { title: 'Podstaw i oblicz', text: '1/λ = (1,097·10⁷ m⁻¹)(1/2² − 1/3²) = (1,097·10⁷)(5/36) m⁻¹ ≈ 1,524·10⁶ m⁻¹. Stąd λ ≈ 6,56·10⁻⁷ m.' },
      { title: 'Zinterpretuj i sprawdź', text: 'λ ≈ 656 nm — widzialna czerwona linia serii Balmera. Odwrotność m⁻¹ daje metry.' }
    ]
  },
  {
    id: 'decay',
    title: 'Ile substancji pozostanie po trzech okresach połowicznego zaniku?',
    category: 'Rozpad promieniotwórczy · dodatkowa metoda',
    task: 'Próbka ma początkowo masę 80 mg, a okres połowicznego zaniku wynosi 6 h. Oblicz masę po 18 h.',
    formula: 'm(t) = m₀·(1/2)^(t/T₁/₂)',
    formulaInfo: {
      label: 'Prawo połowicznego zaniku',
      symbols: [
        { symbol: 'm(t)', meaning: 'masa pozostałej substancji po czasie t', unit: 'np. mg' },
        { symbol: 'm₀', meaning: 'masa początkowa', unit: 'np. mg' },
        { symbol: 't', meaning: 'czas, który upłynął', unit: 'np. h' },
        { symbol: 'T₁/₂', meaning: 'okres połowicznego zaniku', unit: 'ta sama jednostka czasu co t' }
      ],
      notes: ['Wykładnik t/T₁/₂ jest bezwymiarowy; wzór dotyczy średniej liczby jąder w próbce.']
    },
    steps: [
      { title: 'Wypisz dane i szukaną', text: 'm₀ = 80 mg, T₁/₂ = 6 h, t = 18 h. Szukamy m(t). Jednostki czasu są już zgodne.' },
      { title: 'Wybierz prawo zaniku', text: 'Po każdym okresie połowicznego zaniku pozostaje połowa początkowej ilości: m(t) = m₀·(1/2)^(t/T₁/₂).' },
      { title: 'Oblicz liczbę okresów i podstaw', text: 't/T₁/₂ = 18 h / 6 h = 3. Zatem m(18 h) = 80 mg·(1/2)³ = 80 mg/8 = 10 mg.' },
      { title: 'Sprawdź wynik', text: 'Kolejne połowienia dają: 80 mg → 40 mg → 20 mg → 10 mg. Po trzech okresach pozostaje 1/8 próbki.' }
    ]
  }
];
