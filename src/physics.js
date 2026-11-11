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
