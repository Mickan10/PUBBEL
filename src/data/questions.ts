export type Question = {
  q: string
  options: [string, string, string, string]
  answer: number
}

export type Difficulty = 'lätt' | 'mellan' | 'svårt'

export const difficultyMeta: Record<Difficulty, { label: string }> = {
  'lätt':   { label: 'Uppvärmning' },
  'mellan': { label: 'Pubnivå' },
  'svårt':  { label: 'Quizmästare' },
}

export type JeopardyClue = {
  answer: string   // shown to players — de svarar med en fråga
  question: string // rätt formulering (visas för quizmaster)
}

export type JeopardyCategory = {
  name: string
  clues: JeopardyClue[] // index 0 = 100p, 1 = 200p, 2 = 300p, 3 = 400p, 4 = 500p
}

export type QuizPack = {
  id: string
  title: string
  desc: string
  type: 'quiz'
  difficulty?: Difficulty
  questions: Question[]
}

export type JeopardyPack = {
  id: string
  title: string
  desc: string
  type: 'jeopardy'
  points: [number, number, number, number, number]
  categories: JeopardyCategory[]
}

export type SongMystery = {
  line: string
  song: string
  artist: string
}

export type SongPack = {
  id: string
  title: string
  desc: string
  type: 'sangfallan'
  difficulty?: Difficulty
  songs: SongMystery[]
}

export type Pack = QuizPack | JeopardyPack | SongPack

// ─────────────────────────────────────────────────────────────
// CATEGORY META
// ─────────────────────────────────────────────────────────────
export const categoryMeta: Record<string, { label: string; color: string; bg?: string; textColor: string }> = {
  schlatta:  { label: 'Schlätta',    color: '#5c8a3c', textColor: '#fff' },
  genz:      { label: 'Gen Z vs Mil', color: '#8B5CF6', textColor: '#fff' },
  disney:    { label: 'Disney',      color: '#FF006E', textColor: '#fff' },
  rock:      { label: 'Rock',        color: '#FFD60A', bg: '#111', textColor: '#fff' },
  country:   { label: 'Country',     color: '#FFD60A', textColor: '#111' },
  varlden:   { label: 'Världen',     color: '#0055FF', textColor: '#fff' },
  film:      { label: 'Film & TV',   color: '#6B21A8', textColor: '#fff' },
  sport:     { label: 'Sport',       color: '#00C49A', textColor: '#111' },
  historia:  { label: 'Historia',    color: '#FF6B35', textColor: '#fff' },
  musik:     { label: 'Musik',       color: '#E60026', textColor: '#fff' },
  mat:       { label: 'Mat & Dryck', color: '#FF9500', textColor: '#111' },
  vetenskap: { label: 'Vetenskap',   color: '#00CCDD', textColor: '#111' },
  natur:     { label: 'Natur',       color: '#00C49A', textColor: '#111' },
  teknik:    { label: 'Teknik',      color: '#a855f7', textColor: '#fff' },
  retro:     { label: '80- & 90-tal', color: '#00F5FF', bg: '#4a0035', textColor: '#fff' },
}

// ─────────────────────────────────────────────────────────────
// PACKS
// ─────────────────────────────────────────────────────────────
export const packs: Record<string, Pack[]> = {

  // ══════════════════════════════════════════════════════════
  // DISNEY
  // ══════════════════════════════════════════════════════════
  disney: [
    {
      id: 'klassiker',
      title: 'Klassiker',
      desc: 'Walt Disneys tidiga mästerverk — från Snövit till Lejonkungen',
      type: 'quiz',
      difficulty: 'lätt',
      questions: [
        { q: 'Vilket år kom Disneys första långfilm "Snövit och de sju dvärgarna"?', options: ['1937','1941','1934','1945'], answer: 0 },
        { q: 'Vad heter Ariels far i Den lille sjöjungfrun?', options: ['Poseidon','Triton','Neptune','Oceanus'], answer: 1 },
        { q: 'I vilken film sjunger man "Hakuna Matata"?', options: ['Aladdin','Lejonkungen','Djungelboken','Bambi'], answer: 1 },
        { q: 'Vad heter prinsessan i Törnrosa?', options: ['Aurora','Cinderella','Ariel','Bella'], answer: 0 },
        { q: 'Vilket land utspelar sig Mulan i?', options: ['Japan','Korea','Kina','Thailand'], answer: 2 },
        { q: 'Vad heter de två systrarna i Frozen?', options: ['Anna och Elsa','Elsa och Emma','Anna och Emma','Maja och Elsa'], answer: 0 },
        { q: 'Vilket djur är Dumbo?', options: ['Giraff','Häst','Elefant','Noshörning'], answer: 2 },
        { q: 'Vem är Mickeymus bästa vän?', options: ['Kalle Anka','Pluto','Långben','Snobben'], answer: 2 },
        { q: 'I vilken stad utspelar sig Ratatouille?', options: ['Rom','Madrid','Paris','London'], answer: 2 },
        { q: 'Vad är Simba i Lejonkungen?', options: ['Gepard','Tiger','Lejon','Panter'], answer: 2 },
      ],
    },
    {
      id: 'nyare',
      title: 'Nyare filmer',
      desc: 'Frozen, Moana, Coco och moderna hits',
      type: 'quiz',
      difficulty: 'mellan',
      questions: [
        { q: 'Vilket år kom Frozen?', options: ['2012','2013','2014','2015'], answer: 1 },
        { q: 'Vad heter Rapunzels kameleont i Trassel?', options: ['Max','Pascal','Flynn','Eugene'], answer: 1 },
        { q: 'I Coco, vad är Miguels stora dröm?', options: ['Dansa','Måla','Spela musik','Laga mat'], answer: 2 },
        { q: 'Vilket djur är Nick Wilde i Zootopia?', options: ['Kanin','Björn','Räv','Varg'], answer: 2 },
        { q: 'I Inside Out, vad heter glädje-känslan?', options: ['Glädje/Joy','Sadness','Riley','Anger'], answer: 0 },
        { q: 'Vad heter den gamle mannen i Upp?', options: ['Kevin','Russell','Carl','Doug'], answer: 2 },
        { q: 'Vad heter häxan i Trassel?', options: ['Gothel','Ursula','Maleficent','Gaston'], answer: 0 },
        { q: 'I Encanto, vilken gåva har Luisa?', options: ['Se framtiden','Prata med djur','Superstyrka','Hela sjuka'], answer: 2 },
        { q: 'Vad heter reindeer i Frozen?', options: ['Sven','Olaf','Hans','Kristoff'], answer: 0 },
        { q: 'I filmen Upp, vad heter pojkscouten?', options: ['Kevin','Russell','Carl','Doug'], answer: 1 },
      ],
    },
    {
      id: 'experter',
      title: 'Disney-experten',
      desc: 'För dig som kan repliker, kompositörer och bortglömda detaljer',
      type: 'quiz',
      difficulty: 'svårt',
      questions: [
        { q: 'Vem komponerade musiken till "Lejonkungen" (score, ej sånger)?', options: ['Alan Menken','Hans Zimmer','John Williams','Randy Newman'], answer: 1 },
        { q: 'Vad heter studion som gjorde de flesta Disneys tidiga klassiska animerade filmer?', options: ['Pixar','Walt Disney Feature Animation','DreamWorks','Illumination'], answer: 1 },
        { q: 'I "Pinocchio", vad heter syrsan som fungerar som Pinocchios samvete?', options: ['Jiminy Cricket','Timothy','Cri-Kee','Flit'], answer: 0 },
        { q: 'Vilken Disneyfilm var den första att helt göras med datoranimation (CGI)?', options: ['Shrek','Toy Story','Antz','Monsters, Inc.'], answer: 1 },
        { q: 'Vad heter kungariket i "Frozen"?', options: ['Corona','Arendelle','Agrabah','DunBroch'], answer: 1 },
        { q: 'Vem gav rösten åt Woody i originalversionen av Toy Story?', options: ['Tim Allen','Billy Crystal','Tom Hanks','John Ratzenberger'], answer: 2 },
        { q: 'I "Skönheten och Odjuret", vad heter kandelabern?', options: ['Cogsworth','Lumière','Chip','Maurice'], answer: 1 },
        { q: 'Vilket år köpte Disney upp Pixar?', options: ['2003','2006','2009','2012'], answer: 1 },
        { q: 'Vad heter kungariket i "Modet" (Brave)?', options: ['DunBroch','Arendelle','Corona','Agrabah'], answer: 0 },
        { q: 'Vem regisserade originalfilmen "Lejonkungen" (1994)?', options: ['John Lasseter','Roger Allers och Rob Minkoff','Ron Clements','Chris Buck'], answer: 1 },
      ],
    },
    {
      id: 'svaret-ar',
      title: 'Svaret är!',
      desc: 'Kategorier: Prinsessor · Skurkar · Låtar · Djur · Filmer',
      type: 'jeopardy',
      points: [100, 200, 300, 400, 500],
      categories: [
        {
          name: 'Prinsessor',
          clues: [
            { answer: 'Hon sjunger "Del av din värld" under havsytan', question: 'Vem är Ariel?' },
            { answer: 'Hon föll i sömn av ett förgiftat äpple', question: 'Vem är Snövit?' },
            { answer: 'Hon klädde ut sig till man för att rädda Kina', question: 'Vem är Mulan?' },
            { answer: 'Hennes klänning förvandlades av trollfeen vid midnatt', question: 'Vem är Askungen?' },
            { answer: 'Prinsessa av Corona med magiskt hår i Trassel', question: 'Vem är Rapunzel?' },
          ],
        },
        {
          name: 'Skurkar',
          clues: [
            { answer: 'Hon ville ha 101 hundar för en päls', question: 'Vem är Cruella de Vil?' },
            { answer: 'Han är Mufasas bror och vill ha Prideland', question: 'Vem är Scar?' },
            { answer: 'Hon förvandlade Ariel till människa mot hennes röst', question: 'Vem är Ursula?' },
            { answer: 'Han ville ha Aladins magiska lampa för att bli sultan', question: 'Vem är Jafar?' },
            { answer: 'Den gröna häxan som döde Aurora med en spindel', question: 'Vem är Maleficent?' },
          ],
        },
        {
          name: 'Låtar',
          clues: [
            { answer: 'Timon och Pumba sjunger detta om inga bekymmer', question: 'Vad är Hakuna Matata?' },
            { answer: 'Elsa sjunger detta när hon bygger sitt isslott', question: 'Vad är Släpp det fritt / Let It Go?' },
            { answer: 'Ariel sjunger om att vilja tillhöra den mänskliga världen', question: 'Vad är Del av din värld?' },
            { answer: 'Aladdin och Jasmine flyger på en matta till denna sång', question: 'Vad är En hel ny värld?' },
            { answer: 'Phil Collins framförde musiken till denna film om ett apbarn', question: 'Vad är Tarzan?' },
          ],
        },
        {
          name: 'Djur',
          clues: [
            { answer: 'Simbas djurart', question: 'Vad är lejon?' },
            { answer: 'Flounder i Den lille sjöjungfruns djurart', question: 'Vad är fisk (tropisk fisk)?' },
            { answer: 'Timons djurart i Lejonkungen', question: 'Vad är surikat?' },
            { answer: 'Merridas häst i Brave heter detta', question: 'Vad är Angus?' },
            { answer: 'Pascals djurart i Trassel', question: 'Vad är kameleont?' },
          ],
        },
        {
          name: 'Filmer',
          clues: [
            { answer: 'Disneys allra första animerade långfilm', question: 'Vad är Snövit och de sju dvärgarna?' },
            { answer: 'Pixars första film om leksaker som lever', question: 'Vad är Toy Story?' },
            { answer: 'Filmen om en råtta som vill bli kock i Paris', question: 'Vad är Ratatouille?' },
            { answer: 'Filmen om ett hus som lyfter med ballonger', question: 'Vad är Upp?' },
            { answer: 'Brad Birds film om superhjältar som gömmer sina krafter', question: 'Vad är Superhjältarna / The Incredibles?' },
          ],
        },
      ],
    },
    {
      id: 'sangfallan',
      title: 'Sångfällan',
      desc: 'Fem rutor döljer en textrad ord för ord — gissa Disneylåten innan raden avslöjas helt!',
      type: 'sangfallan',
      songs: [
        { line: 'Hakuna Matata, what a wonderful phrase', song: 'Hakuna Matata', artist: 'Lejonkungen' },
        { line: 'Let it go, let it go', song: 'Let It Go', artist: 'Frozen' },
        { line: "You've got a friend in me", song: "You've Got a Friend in Me", artist: 'Toy Story' },
        { line: 'A whole new world', song: 'A Whole New World', artist: 'Aladdin' },
        { line: 'Tale as old as time', song: 'Beauty and the Beast', artist: 'Skönheten och Odjuret' },
        { line: 'When you wish upon a star', song: 'When You Wish Upon a Star', artist: 'Pinocchio' },
        { line: "How far I'll go", song: "How Far I'll Go", artist: 'Moana' },
        { line: "It's the circle of life", song: 'Circle of Life', artist: 'Lejonkungen' },
      ],
    },
  ],

  // ══════════════════════════════════════════════════════════
  // ROCK
  // ══════════════════════════════════════════════════════════
  rock: [
    {
      id: 'legender',
      title: 'Legender',
      desc: 'De stora banden som formade rockhistorien',
      type: 'quiz',
      difficulty: 'lätt',
      questions: [
        { q: 'Vilket band sjunger "Bohemian Rhapsody"?', options: ['The Beatles','Led Zeppelin','Queen','Bon Jovi'], answer: 2 },
        { q: 'Vad heter gitarristen i Rolling Stones?', options: ['Mick Jagger','Keith Richards','Ronnie Wood','Charlie Watts'], answer: 1 },
        { q: 'Vilket år bildades Led Zeppelin?', options: ['1965','1968','1972','1970'], answer: 1 },
        { q: 'Vad heter Kurt Cobains band?', options: ['Pearl Jam','Soundgarden','Nirvana','Alice in Chains'], answer: 2 },
        { q: 'Från vilket land kommer AC/DC?', options: ['England','USA','Australien','Kanada'], answer: 2 },
        { q: 'Vad heter sångaren i Metallica?', options: ['Lars Ulrich','Kirk Hammett','Jason Newsted','James Hetfield'], answer: 3 },
        { q: 'Vilket band sjunger "Smells Like Teen Spirit"?', options: ['Pearl Jam','Nirvana','Foo Fighters','Soundgarden'], answer: 1 },
        { q: 'Vilket år upplöstes The Beatles?', options: ['1968','1970','1972','1975'], answer: 1 },
        { q: 'Vilket band har albumet "Back in Black"?', options: ["Guns N' Roses",'AC/DC','Aerosmith','Kiss'], answer: 1 },
        { q: 'Vilket band sjunger "Sweet Home Alabama"?', options: ['The Eagles','Lynyrd Skynyrd','ZZ Top','Creedence'], answer: 1 },
      ],
    },
    {
      id: 'modern',
      title: 'Modern Rock',
      desc: '90-tal till idag — Foo Fighters, U2, Guns N\' Roses och mer',
      type: 'quiz',
      difficulty: 'mellan',
      questions: [
        { q: 'Vad heter sångaren i U2?', options: ['Bono','The Edge','Adam Clayton','Larry'], answer: 0 },
        { q: 'Vilket år kom Guns N\' Roses "Appetite for Destruction"?', options: ['1985','1987','1989','1991'], answer: 1 },
        { q: 'Vad heter gitarristen i Guns N\' Roses?', options: ['Axl Rose','Duff McKagan','Slash','Izzy Stradlin'], answer: 2 },
        { q: 'Vem kallas "The Boss" inom rock?', options: ['Bob Dylan','Bruce Springsteen','Tom Petty','John Mellencamp'], answer: 1 },
        { q: 'Vilket band sjunger "Don\'t Stop Believin\'"?', options: ['Bon Jovi','Journey','Foreigner','REO Speedwagon'], answer: 1 },
        { q: 'Från vilket land kommer Iron Maiden?', options: ['USA','Australien','England','Kanada'], answer: 2 },
        { q: 'Vilket år bildades Metallica?', options: ['1979','1981','1983','1985'], answer: 1 },
        { q: 'Vad heter Dave Grohls band efter Nirvana?', options: ['Pearl Jam','Stone Temple Pilots','Foo Fighters','Audioslave'], answer: 2 },
        { q: 'Vilket band sjunger "With or Without You"?', options: ['Coldplay','U2','R.E.M.','The Police'], answer: 1 },
        { q: 'Från vilket land kommer Rammstein?', options: ['Österrike','Schweiz','Tyskland','Holland'], answer: 2 },
      ],
    },
    {
      id: 'expert',
      title: 'Rock-experten',
      desc: 'Djupa cuts, bandmedlemmar och rockhistoriens finstilta',
      type: 'quiz',
      difficulty: 'svårt',
      questions: [
        { q: 'Vad hette Black Sabbaths originalsångare innan Ronnie James Dio?', options: ['Ian Gillan','Ozzy Osbourne','David Coverdale','Glenn Hughes'], answer: 1 },
        { q: 'Vilket album inledde Pink Floyds "The Dark Side of the Moon"-era?', options: ['The Wall','Wish You Were Here','The Dark Side of the Moon','Animals'], answer: 2 },
        { q: 'Vem var trummis i Led Zeppelin?', options: ['Jason Bonham','John Bonham','Cozy Powell','Ian Paice'], answer: 1 },
        { q: 'Vilket band gav ut albumet "Master of Reality"?', options: ['Deep Purple','Black Sabbath','Judas Priest','Motörhead'], answer: 1 },
        { q: 'Vad hette Guns N\' Roses originaltrummis?', options: ['Matt Sorum','Steven Adler','Frank Ferrer','Josh Freese'], answer: 1 },
        { q: 'Vilken stad bildades Metallica i?', options: ['Los Angeles','San Francisco','Seattle','New York'], answer: 1 },
        { q: 'Vem skrev basgången till "Money" av Pink Floyd?', options: ['David Gilmour','Roger Waters','Nick Mason','Richard Wright'], answer: 1 },
        { q: 'Vilket år släppte Nirvana albumet "In Utero"?', options: ['1991','1992','1993','1994'], answer: 2 },
        { q: 'Vad hette Queens basist?', options: ['Brian May','John Deacon','Roger Taylor','Freddie Mercury'], answer: 1 },
        { q: 'Vilket band spelade in "Paranoid" 1970?', options: ['Deep Purple','Led Zeppelin','Black Sabbath','Uriah Heep'], answer: 2 },
      ],
    },
    {
      id: 'svaret-ar',
      title: 'Svaret är!',
      desc: 'Kategorier: Band · Sångare · Album · Gitarrister · Länder',
      type: 'jeopardy',
      points: [100, 200, 300, 400, 500],
      categories: [
        {
          name: 'Band',
          clues: [
            { answer: 'Bandet bakom "Bohemian Rhapsody"', question: 'Vad är Queen?' },
            { answer: 'Bandet bakom "Smells Like Teen Spirit"', question: 'Vad är Nirvana?' },
            { answer: 'Australienskt hårdrocksband — "Highway to Hell"', question: 'Vad är AC/DC?' },
            { answer: 'Bandet bakom "Master of Puppets" och "Enter Sandman"', question: 'Vad är Metallica?' },
            { answer: 'Dave Grohls band efter Nirvana', question: 'Vad är Foo Fighters?' },
          ],
        },
        {
          name: 'Sångare',
          clues: [
            { answer: 'Sångaren i Rolling Stones', question: 'Vem är Mick Jagger?' },
            { answer: 'Sångaren i Metallica', question: 'Vem är James Hetfield?' },
            { answer: 'Sångare i U2, känd för sina solglasögon', question: 'Vem är Bono?' },
            { answer: 'Kurt Cobains sångröst representerade detta band', question: 'Vad är Nirvana?' },
            { answer: 'Sångaren i Led Zeppelin', question: 'Vem är Robert Plant?' },
          ],
        },
        {
          name: 'Album',
          clues: [
            { answer: 'AC/DCs album med låten "Hells Bells"', question: 'Vad är Back in Black?' },
            { answer: 'Nirvanas genombrottsalbum 1991', question: 'Vad är Nevermind?' },
            { answer: 'The Beatles sista inspelade album', question: 'Vad är Abbey Road?' },
            { answer: "Guns N' Roses debutalbum 1987", question: "Vad är Appetite for Destruction?" },
            { answer: 'Pink Floyds konceptalbum om väggar och isolering', question: 'Vad är The Wall?' },
          ],
        },
        {
          name: 'Gitarrister',
          clues: [
            { answer: 'Gitarrist i Rolling Stones', question: 'Vem är Keith Richards?' },
            { answer: 'Känd för sin cylinderhatt — gitarrist i Guns N\' Roses', question: 'Vem är Slash?' },
            { answer: 'U2:s gitarrist som aldrig tar av sig sin hatt', question: 'Vem är The Edge?' },
            { answer: 'Jimmy Page spelade i detta band', question: 'Vad är Led Zeppelin?' },
            { answer: 'Döde 1970 — känd för att tända sin gitarr i brand', question: 'Vem är Jimi Hendrix?' },
          ],
        },
        {
          name: 'Länder',
          clues: [
            { answer: 'AC/DCs hemland', question: 'Vad är Australien?' },
            { answer: 'The Beatles hemland', question: 'Vad är England?' },
            { answer: 'Iron Maidens hemland', question: 'Vad är England?' },
            { answer: 'Rammsteins hemland', question: 'Vad är Tyskland?' },
            { answer: 'Rush hemland', question: 'Vad är Kanada?' },
          ],
        },
      ],
    },
    {
      id: 'sangfallan',
      title: 'Sångfällan',
      desc: 'Fem rutor döljer en textrad ord för ord — gissa rocklåten innan raden avslöjas helt!',
      type: 'sangfallan',
      songs: [
        { line: 'We will, we will rock you', song: 'We Will Rock You', artist: 'Queen' },
        { line: "It's the eye of the tiger", song: 'Eye of the Tiger', artist: 'Survivor' },
        { line: "Oh, we're halfway there", song: "Livin' on a Prayer", artist: 'Bon Jovi' },
        { line: "Don't stop believin'", song: "Don't Stop Believin'", artist: 'Journey' },
        { line: "I'm on the highway to hell", song: 'Highway to Hell', artist: 'AC/DC' },
        { line: "We're not gonna take it", song: "We're Not Gonna Take It", artist: 'Twisted Sister' },
        { line: 'Here we are now, entertain us', song: 'Smells Like Teen Spirit', artist: 'Nirvana' },
        { line: "Sweet child o' mine", song: "Sweet Child O' Mine", artist: "Guns N' Roses" },
      ],
    },
  ],

  // ══════════════════════════════════════════════════════════
  // COUNTRY
  // ══════════════════════════════════════════════════════════
  country: [
    {
      id: 'klassiker',
      title: 'Country-klassiker',
      desc: 'Dolly, Johnny Cash, Garth Brooks och countryns rötter',
      type: 'quiz',
      difficulty: 'lätt',
      questions: [
        { q: 'Vem sjunger originalversionen av "I Will Always Love You"?', options: ['Whitney Houston','Dolly Parton','Shania Twain','Carrie Underwood'], answer: 1 },
        { q: 'Vem kallas "The Man in Black"?', options: ['Merle Haggard','Waylon Jennings','Willie Nelson','Johnny Cash'], answer: 3 },
        { q: 'Vad heter Shania Twains mest kända album?', options: ['Come On Over','The Woman in Me','Up!','Now'], answer: 0 },
        { q: 'Vilket instrument är mest typiskt för country?', options: ['Banjo','Saxofon','Trummor','Piano'], answer: 0 },
        { q: 'Vem sjunger "Friends in Low Places"?', options: ['Alan Jackson','Tim McGraw','Garth Brooks','Kenny Rogers'], answer: 2 },
        { q: 'Vem sjunger "Jolene"?', options: ['Tammy Wynette','Loretta Lynn','Dolly Parton','June Carter'], answer: 2 },
        { q: 'Vilken delstat kallas "countrymusikens hemstad"?', options: ['Texas','California','Tennessee','Florida'], answer: 2 },
        { q: 'Vem sjunger "Take Me Home, Country Roads"?', options: ['Glen Campbell','John Denver','Kenny Rogers','Hank Williams'], answer: 1 },
        { q: 'Vad heter den berömda scenen i Nashville?', options: ['The Forum','Grand Ole Opry','Country Palace','The Barn'], answer: 1 },
        { q: 'Vem sjunger "Crazy"?', options: ['Tammy Wynette','Patsy Cline','Loretta Lynn','June Carter Cash'], answer: 1 },
      ],
    },
    {
      id: 'modern',
      title: 'Modern Country',
      desc: 'Taylor Swift, Carrie Underwood, Luke Bryan och nutida hits',
      type: 'quiz',
      difficulty: 'mellan',
      questions: [
        { q: 'Vad heter Dolly Partons nöjespark?', options: ['Dollyworld','Dollywood','Country World','Parton Park'], answer: 1 },
        { q: 'Vem sjunger "Man! I Feel Like a Woman!"?', options: ['Faith Hill','Martina McBride','Shania Twain','Reba McEntire'], answer: 2 },
        { q: 'Från vilket land kommer Keith Urban?', options: ['USA','Kanada','England','Australien'], answer: 3 },
        { q: 'Vem sjunger "The Gambler"?', options: ['Willie Nelson','Merle Haggard','Kenny Rogers','Glen Campbell'], answer: 2 },
        { q: 'Vad heter Taylor Swifts debutalbum?', options: ['Fearless','Speak Now','Taylor Swift','1989'], answer: 2 },
        { q: 'Vilket år vann Carrie Underwood American Idol?', options: ['2003','2004','2005','2006'], answer: 2 },
        { q: 'Vilket år dog Patsy Cline i en flygolycka?', options: ['1959','1961','1963','1965'], answer: 2 },
        { q: 'Vem sjunger "Before He Cheats"?', options: ['Miranda Lambert','Kelly Clarkson','Carrie Underwood','Taylor Swift'], answer: 2 },
        { q: 'Vad heter Brad Paisleys komiska hitlåt om internet?', options: ['Mud on the Tires','Whiskey Lullaby','She\'s Everything','Online'], answer: 3 },
        { q: 'Vilket år kom Lil Nas X "Old Town Road"?', options: ['2017','2018','2019','2020'], answer: 2 },
      ],
    },
    {
      id: 'expert',
      title: 'Country-experten',
      desc: 'För riktiga kännare — outlaws, songwriters och Nashville-historia',
      type: 'quiz',
      difficulty: 'svårt',
      questions: [
        { q: 'Vilka tre artister ingick i countrytrion "The Highwaymen" tillsammans med Johnny Cash och Willie Nelson?', options: ['Kris Kristofferson och Waylon Jennings','George Strait och Merle Haggard','Kenny Rogers och Glen Campbell','Randy Travis och Alan Jackson'], answer: 0 },
        { q: 'Vem skrev originalversionen av "I Will Always Love You" som Dolly Parton framförde?', options: ['Loretta Lynn','Dolly Parton själv','Patsy Cline','Tammy Wynette'], answer: 1 },
        { q: 'Vilket år grundades Grand Ole Opry i Nashville?', options: ['1905','1925','1945','1955'], answer: 1 },
        { q: 'Vad kallas countrymusikens hedersgalleri i Nashville?', options: ['Country Music Hall of Fame','Nashville Legends Hall','The Opry House','Music Row Museum'], answer: 0 },
        { q: 'Vem kallas "The First Lady of Country Music"?', options: ['Loretta Lynn','Tammy Wynette','Patsy Cline','Reba McEntire'], answer: 0 },
        { q: 'Vilket album räknas som countrys första miljonsäljare (1960-talet)?', options: ["Patsy Clines Showcase","Johnny Cashs Ring of Fire","Merle Haggards Okie from Muskogee","Glen Campbells Wichita Lineman"], answer: 0 },
        { q: 'Vem skrev klassikern "He Stopped Loving Her Today"?', options: ['George Jones själv','Bobby Braddock och Curly Putman','Merle Haggard','Willie Nelson'], answer: 1 },
        { q: 'Vilken stad räknas som countrymusikens "andra huvudstad" efter Nashville?', options: ['Austin, Texas','Memphis, Tennessee','Bakersfield, Kalifornien','Branson, Missouri'], answer: 2 },
        { q: 'Var spelades Johnny Cashs klassiska fängelsekonsert 1968 in?', options: ['San Quentin','Folsom Prison','Sing Sing','Alcatraz'], answer: 1 },
        { q: 'Vilken genre-kombination kallas "countryrock" och populariserades av The Eagles?', options: ['Country blandat med rock','Country blandat med jazz','Country blandat med punk','Country blandat med disco'], answer: 0 },
      ],
    },
    {
      id: 'sangfallan',
      title: 'Sångfällan',
      desc: 'Fem rutor döljer en textrad ord för ord — gissa countrylåten innan raden avslöjas helt!',
      type: 'sangfallan',
      songs: [
        { line: 'Country roads, take me home', song: 'Take Me Home, Country Roads', artist: 'John Denver' },
        { line: 'Jolene, Jolene, Jolene, Jolene', song: 'Jolene', artist: 'Dolly Parton' },
        { line: 'I fell into a burning ring of fire', song: 'Ring of Fire', artist: 'Johnny Cash' },
        { line: "I've got friends in low places", song: 'Friends in Low Places', artist: 'Garth Brooks' },
        { line: "You've got to know when to hold 'em", song: 'The Gambler', artist: 'Kenny Rogers' },
        { line: 'Man, I feel like a woman', song: 'Man! I Feel Like a Woman!', artist: 'Shania Twain' },
        { line: 'On the road again', song: 'On the Road Again', artist: 'Willie Nelson' },
        { line: "Crazy, I'm crazy for feeling so lonely", song: 'Crazy', artist: 'Patsy Cline' },
      ],
    },
  ],

  // ══════════════════════════════════════════════════════════
  // VÄRLDEN
  // ══════════════════════════════════════════════════════════
  varlden: [
    {
      id: 'geografi',
      title: 'Geografi',
      desc: 'Huvudstäder, berg, hav och länder',
      type: 'quiz',
      difficulty: 'lätt',
      questions: [
        { q: 'Vad är huvudstaden i Australien?', options: ['Sydney','Melbourne','Perth','Canberra'], answer: 3 },
        { q: 'Vilket land har flest invånare?', options: ['Indien','USA','Kina','Indonesien'], answer: 0 },
        { q: 'I vilket land finns Machu Picchu?', options: ['Mexico','Peru','Brasilien','Colombia'], answer: 1 },
        { q: 'Vilket land är störst till ytan?', options: ['Kanada','USA','Kina','Ryssland'], answer: 3 },
        { q: 'Hur många länder finns det i Afrika?', options: ['42','54','67','38'], answer: 1 },
        { q: 'Vad heter Japans högsta berg?', options: ['Mount Fuji','Mount Aso','Mount Kita','Mount Tate'], answer: 0 },
        { q: 'Vilket hav är störst?', options: ['Atlantiska','Indiska','Arktiska','Stilla havet'], answer: 3 },
        { q: 'Vad är huvudstaden i Kanada?', options: ['Toronto','Vancouver','Ottawa','Montreal'], answer: 2 },
        { q: 'I vilket land finns Galapagosöarna?', options: ['Peru','Colombia','Ecuador','Venezuela'], answer: 2 },
        { q: 'Vilket land har störst befolkning i Afrika?', options: ['Etiopien','Egypten','Nigeria','DRC'], answer: 2 },
      ],
    },
    {
      id: 'kulturer',
      title: 'Kulturer & fakta',
      desc: 'Valutor, språk, rekord och kuriosa från hela världen',
      type: 'quiz',
      difficulty: 'mellan',
      questions: [
        { q: 'Vad är valutan i Japan?', options: ['Won','Yen','Yuan','Baht'], answer: 1 },
        { q: 'Hur många officiella språk har Sydafrika?', options: ['8','10','11','14'], answer: 2 },
        { q: 'I vilket land ligger Angkor Wat?', options: ['Thailand','Cambodja','Vietnam','Myanmar'], answer: 1 },
        { q: 'Vilken är Europas längsta flod?', options: ['Rhen','Donau','Volga','Thames'], answer: 2 },
        { q: 'Vad heter världens minsta stat?', options: ['Monaco','San Marino','Vatikanstaten','Liechtenstein'], answer: 2 },
        { q: 'I vilket land finns Kilimanjaro?', options: ['Kenya','Uganda','Etiopien','Tanzania'], answer: 3 },
        { q: 'Vad kallas invånarna i Nya Zeeland vardagligt?', options: ['Kiwis','Aussies','Maoris','Islanders'], answer: 0 },
        { q: 'I vilket land finns Galapagosöarna?', options: ['Peru','Colombia','Ecuador','Venezuela'], answer: 2 },
        { q: 'Vilket land har flest öar totalt?', options: ['Norge','Sverige','Finland','Indonesien'], answer: 3 },
        { q: 'Hur många procent av jordens yta täcks av vatten?', options: ['51%','61%','71%','81%'], answer: 2 },
      ],
    },
    {
      id: 'expert',
      title: 'Världsexperten',
      desc: 'Obskyra huvudstäder, gränser och geopolitik för riktiga nördar',
      type: 'quiz',
      difficulty: 'svårt',
      questions: [
        { q: 'Vad är huvudstaden i Kazakstan?', options: ['Almaty','Astana','Bisjkek','Tasjkent'], answer: 1 },
        { q: 'Vilket land gränsar till flest andra länder?', options: ['Ryssland','Kina','Brasilien','Ryssland och Kina delar förstaplatsen'], answer: 3 },
        { q: 'Vad heter världens minsta land till ytan efter Vatikanstaten?', options: ['Monaco','San Marino','Liechtenstein','Nauru'], answer: 0 },
        { q: 'Vilket lands officiella huvudstad är Yamoussoukro, trots att Abidjan är landets största stad?', options: ['Ghana','Elfenbenskusten','Senegal','Nigeria'], answer: 1 },
        { q: 'Vilka två länder delar den längsta landgränsen i världen?', options: ['USA och Kanada','Ryssland och Kina','Kazakstan och Ryssland','Chile och Argentina'], answer: 0 },
        { q: 'Vad heter huvudstaden i Myanmar (sedan 2006)?', options: ['Yangon','Naypyidaw','Mandalay','Bagan'], answer: 1 },
        { q: 'Vilket afrikanskt land har flest grannländer (flest landgränser)?', options: ['Egypten','Sudan','Demokratiska republiken Kongo','Algeriet'], answer: 2 },
        { q: 'Hur många tidszoner har Ryssland?', options: ['7','9','11','13'], answer: 2 },
        { q: 'Vilket land omges helt av Sydafrika?', options: ['Swaziland/Eswatini','Lesotho','Botswana','Zimbabwe'], answer: 1 },
        { q: 'Vad heter världens längsta flod om man räknar Nilen och Amazonfloden mot varandra — vilken är längst?', options: ['Amazonfloden','Nilen','De är exakt lika långa','Yangtzefloden'], answer: 1 },
      ],
    },
  ],

  // ══════════════════════════════════════════════════════════
  // FILM & TV
  // ══════════════════════════════════════════════════════════
  film: [
    {
      id: 'klassiker',
      title: 'Film-klassiker',
      desc: 'Titanic, Terminator, James Bond och odödliga repliker',
      type: 'quiz',
      difficulty: 'lätt',
      questions: [
        { q: 'Vem spelar James Bond i "Casino Royale" (2006)?', options: ['Pierce Brosnan','Roger Moore','Daniel Craig','Timothy Dalton'], answer: 2 },
        { q: 'I vilken TV-serie medverkar Walter White?', options: ['Breaking Bad','Dexter','The Wire','Better Call Saul'], answer: 0 },
        { q: 'Vem regisserade "Inception"?', options: ['Steven Spielberg','Christopher Nolan','James Cameron','Ridley Scott'], answer: 1 },
        { q: 'Vilken skådespelerska spelar Katniss i "The Hunger Games"?', options: ['Emma Watson','Jennifer Lawrence','Shailene Woodley','Anna Kendrick'], answer: 1 },
        { q: 'Vilket år kom "Titanic"?', options: ['1995','1996','1997','1998'], answer: 2 },
        { q: 'Vad heter draken i GoT som Daenerys rider?', options: ['Rhaegal','Drogon','Viserion','Balerion'], answer: 1 },
        { q: 'Vilken film innehåller repliken "I\'ll be back"?', options: ['Die Hard','Lethal Weapon','The Terminator','RoboCop'], answer: 2 },
        { q: 'Vem spelar Iron Man i MCU?', options: ['Chris Evans','Chris Hemsworth','Robert Downey Jr.','Mark Ruffalo'], answer: 2 },
        { q: 'Vem regisserade Schindler\'s List?', options: ['Coppola','Steven Spielberg','Scorsese','Ridley Scott'], answer: 1 },
        { q: 'Vilket år kom "The Dark Knight"?', options: ['2006','2007','2008','2009'], answer: 2 },
      ],
    },
    {
      id: 'modern',
      title: 'Modern Film & TV',
      desc: 'MCU, HBO-serier och 2000-talets hits',
      type: 'quiz',
      difficulty: 'mellan',
      questions: [
        { q: 'Vem spelar Joker i filmen från 2019?', options: ['Heath Ledger','Jack Nicholson','Joaquin Phoenix','Jared Leto'], answer: 2 },
        { q: 'Vilket år kom Avengers: Endgame?', options: ['2017','2018','2019','2020'], answer: 2 },
        { q: 'Vem regisserade Pulp Fiction?', options: ['Scorsese','Quentin Tarantino','Coen Brothers','David Fincher'], answer: 1 },
        { q: 'Vilken skådespelare spelar Forrest Gump?', options: ['Tom Hanks','Kevin Costner','Matt Damon','John Travolta'], answer: 0 },
        { q: 'Vem spelar Batman i "The Dark Knight"?', options: ['Ben Affleck','Christian Bale','Michael Keaton','Val Kilmer'], answer: 1 },
        { q: 'Vem spelar Hermione i Harry Potter?', options: ['Emma Stone','Emma Roberts','Emma Watson','Emma Thompson'], answer: 2 },
        { q: 'I vilken serie bor familjen Soprano?', options: ['New York','New Jersey','Chicago','Boston'], answer: 1 },
        { q: 'Vilket år kom Netflix-serien Stranger Things?', options: ['2014','2015','2016','2017'], answer: 2 },
        { q: 'Vilken film vann Oscar för Bästa Film 2020?', options: ['1917','Joker','Parasite','Marriage Story'], answer: 2 },
        { q: 'Vad heter karaktären Ryan Reynolds spelar i Deadpool?', options: ['Logan','Wade Wilson','Scott Summers','Tony Stark'], answer: 1 },
      ],
    },
    {
      id: 'expert',
      title: 'Film-experten',
      desc: 'Oscars, regissörer och detaljer bara nördar kan',
      type: 'quiz',
      difficulty: 'svårt',
      questions: [
        { q: 'Vilken film vann flest Oscars genom tiderna (delar rekordet)?', options: ['Titanic','Ben-Hur','Herr av ringen: Konungens återkomst','Alla tre delar rekordet med 11 Oscars'], answer: 3 },
        { q: 'Vem regisserade "2001: A Space Odyssey"?', options: ['Stanley Kubrick','Ridley Scott','Steven Spielberg','George Lucas'], answer: 0 },
        { q: 'Vilken skådespelare har flest Oscar-nomineringar för Bästa Skådespelare/Skådespelerska genom tiderna?', options: ['Jack Nicholson','Meryl Streep','Katharine Hepburn','Daniel Day-Lewis'], answer: 1 },
        { q: 'Vad heter produktionsbolaget som Steven Spielberg grundade tillsammans med Jeffrey Katzenberg och David Geffen?', options: ['Amblin Entertainment','DreamWorks','Legendary Pictures','Lucasfilm'], answer: 1 },
        { q: 'Vilken var den första animerade filmen att nomineras till Oscar för Bästa Film?', options: ['Toy Story','Skönheten och Odjuret','Shrek','Uppdrag: Upp'], answer: 1 },
        { q: 'Vem spelade huvudrollen i originalfilmen "Psycho" (1960) som Norman Bates?', options: ['Alfred Hitchcock','Anthony Perkins','James Stewart','Cary Grant'], answer: 1 },
        { q: 'Vilket år grundades filmbolaget Warner Bros.?', options: ['1903','1918','1923','1935'], answer: 2 },
        { q: 'Vad heter Quentin Tarantinos debutfilm som regissör?', options: ['Pulp Fiction','Reservoir Dogs','Kill Bill','Jackie Brown'], answer: 1 },
        { q: 'Vilken skådespelare har vunnit flest Oscars för Bästa Manliga Huvudroll?', options: ['Jack Nicholson','Daniel Day-Lewis','Marlon Brando','Tom Hanks'], answer: 1 },
        { q: 'I vilken stad grundades den första permanenta Hollywood-filmstudion?', options: ['New York','Chicago','Los Angeles','San Francisco'], answer: 2 },
      ],
    },
    {
      id: 'svaret-ar',
      title: 'Svaret är!',
      desc: 'Kategorier: Regissörer · Skådespelare · Serier · Repliker · År',
      type: 'jeopardy',
      points: [100, 200, 300, 400, 500],
      categories: [
        {
          name: 'Regissörer',
          clues: [
            { answer: 'Han regisserade Jurassic Park och Jaws', question: 'Vem är Steven Spielberg?' },
            { answer: 'Han regisserade The Dark Knight-trilogin och Inception', question: 'Vem är Christopher Nolan?' },
            { answer: 'Han regisserade Pulp Fiction och Kill Bill', question: 'Vem är Quentin Tarantino?' },
            { answer: 'Han regisserade Titanic och Avatar', question: 'Vem är James Cameron?' },
            { answer: 'Han regisserade Alien, Gladiator och Blade Runner', question: 'Vem är Ridley Scott?' },
          ],
        },
        {
          name: 'Skådespelare',
          clues: [
            { answer: 'Spelar Iron Man i MCU', question: 'Vem är Robert Downey Jr.?' },
            { answer: 'Spelade Joker i The Dark Knight (vann postumt Oscar)', question: 'Vem är Heath Ledger?' },
            { answer: 'Spelar Forrest Gump', question: 'Vem är Tom Hanks?' },
            { answer: 'Spelar Hermione Granger', question: 'Vem är Emma Watson?' },
            { answer: 'Spelar Katniss Everdeen i Hunger Games', question: 'Vem är Jennifer Lawrence?' },
          ],
        },
        {
          name: 'TV-Serier',
          clues: [
            { answer: 'Serien om Walter White som lagar metamfetamin', question: 'Vad är Breaking Bad?' },
            { answer: 'HBO-serien om en familj i Westeros med drakar', question: 'Vad är Game of Thrones?' },
            { answer: 'Netflix-serie om barn i Hawkins med övernaturliga krafter', question: 'Vad är Stranger Things?' },
            { answer: 'HBO-serie om en maffiafamilj i New Jersey', question: 'Vad är The Sopranos?' },
            { answer: 'Serie om en advokat som hittar på sina meriter — spinoff till Breaking Bad', question: 'Vad är Better Call Saul?' },
          ],
        },
        {
          name: 'Repliker',
          clues: [
            { answer: '"I\'ll be back"', question: 'Vad är repliken från The Terminator?' },
            { answer: '"May the Force be with you"', question: 'Vad är repliken från Star Wars?' },
            { answer: '"You can\'t handle the truth!"', question: 'Vad är repliken från A Few Good Men?' },
            { answer: '"Why so serious?"', question: 'Vad är repliken från The Dark Knight (Joker)?' },
            { answer: '"I am your father"', question: 'Vad är repliken från Star Wars: The Empire Strikes Back?' },
          ],
        },
        {
          name: 'Vilket år?',
          clues: [
            { answer: 'Titanic kom ut detta år', question: 'Vad är 1997?' },
            { answer: 'The Dark Knight kom ut detta år', question: 'Vad är 2008?' },
            { answer: 'Avengers: Endgame kom ut detta år', question: 'Vad är 2019?' },
            { answer: 'Pulp Fiction kom ut detta år', question: 'Vad är 1994?' },
            { answer: 'The Godfather kom ut detta år', question: 'Vad är 1972?' },
          ],
        },
      ],
    },
  ],

  // ══════════════════════════════════════════════════════════
  // SPORT
  // ══════════════════════════════════════════════════════════
  sport: [
    {
      id: 'klassiker',
      title: 'Sport-klassiker',
      desc: 'Fotboll, OS, tennis och de stora rekorden',
      type: 'quiz',
      difficulty: 'lätt',
      questions: [
        { q: 'Hur många spelare finns det i ett fotbollslag?', options: ['10','11','12','9'], answer: 1 },
        { q: 'Vilket land har vunnit flest fotbolls-VM?', options: ['Argentina','Tyskland','Brasilien','Italien'], answer: 2 },
        { q: 'I vilken stad hölls de första moderna OS 1896?', options: ['Paris','London','Aten','Rom'], answer: 2 },
        { q: 'Hur lång är ett maraton?', options: ['38 km','40 km','42,195 km','44 km'], answer: 2 },
        { q: 'Vilket land har vunnit flest OS-guld totalt?', options: ['Sovjet','Kina','USA','Tyskland'], answer: 2 },
        { q: 'Vilken tennisturnering spelas på gräs i London?', options: ['Roland Garros','US Open','Australian Open','Wimbledon'], answer: 3 },
        { q: 'Vilket land arrangerade fotbolls-VM 2018?', options: ['Brasilien','Frankrike','Ryssland','Qatar'], answer: 2 },
        { q: 'I vilken sport används termen "birdie"?', options: ['Tennis','Golf','Badminton','Cricket'], answer: 1 },
        { q: 'Vilket land kommer Usain Bolt från?', options: ['Nigeria','Jamaica','USA','Trinidad'], answer: 1 },
        { q: 'Vilken golfare kallas "The Golden Bear"?', options: ['Tiger Woods','Jack Nicklaus','Arnold Palmer','Phil Mickelson'], answer: 1 },
      ],
    },
    {
      id: 'regler',
      title: 'Regler & rekord',
      desc: 'Poängsystem, rekord och sportkuriosa',
      type: 'quiz',
      difficulty: 'mellan',
      questions: [
        { q: 'Hur många poäng ger en "three-pointer" i basket?', options: ['2','3','4','1'], answer: 1 },
        { q: 'Hur många lag tävlar i Premier League?', options: ['16','18','20','22'], answer: 2 },
        { q: 'I vilket land grundades rugby?', options: ['Australien','Nya Zeeland','England','Wales'], answer: 2 },
        { q: 'Hur många spelare är det i ett rugbylag?', options: ['11','13','15','18'], answer: 2 },
        { q: 'Hur ofta spelas Fotbolls-VM?', options: ['Vart 2:a år','Vart 3:e år','Vart 4:e år','Vart 5:e år'], answer: 2 },
        { q: 'Hur många set spelar man max i herr-tennis i Grand Slam?', options: ['3','4','5','6'], answer: 2 },
        { q: 'Vilket lag har vunnit flest World Series i baseball?', options: ['Boston Red Sox','New York Yankees','LA Dodgers','Chicago Cubs'], answer: 1 },
        { q: 'Hur långt är ett 50-metersbassängslopp i kortaste simtävling?', options: ['25m','50m','100m','200m'], answer: 1 },
        { q: 'I vilken sport ger ett "try" 5 poäng?', options: ['Amerikansk fotboll','Rugby','Australisk fotboll','Gaelic football'], answer: 1 },
        { q: 'Hur stor är en fotbollsplan som minst (längd)?', options: ['80m','90m','100m','110m'], answer: 1 },
      ],
    },
    {
      id: 'expert',
      title: 'Sport-experten',
      desc: 'Rekord, historia och detaljer för de riktiga sportnördarna',
      type: 'quiz',
      difficulty: 'svårt',
      questions: [
        { q: 'Vem har flest Ballon d\'Or-priser genom tiderna?', options: ['Cristiano Ronaldo','Lionel Messi','Michel Platini','Johan Cruyff'], answer: 1 },
        { q: 'Vilket land vann den allra första fotbolls-VM 1930?', options: ['Brasilien','Argentina','Uruguay','Italien'], answer: 2 },
        { q: 'Hur många Grand Slam-titlar i singel har Serena Williams vunnit?', options: ['19','21','23','25'], answer: 2 },
        { q: 'Vilket lag har flest Champions League-titlar?', options: ['AC Milan','Bayern München','Liverpool','Real Madrid'], answer: 3 },
        { q: 'Vem innehar världsrekordet på 100 meter herrar?', options: ['Tyson Gay','Yohan Blake','Usain Bolt','Justin Gatlin'], answer: 2 },
        { q: 'Vilken stad höll de olympiska sommarspelen tre gånger (senast 2012)?', options: ['Paris','London','Los Angeles','Aten'], answer: 1 },
        { q: 'Vilket år spelade Sverige VM-final i fotboll (herrar) senast?', options: ['1958','1974','1994','2006'], answer: 0 },
        { q: 'Hur många ringar finns det i den olympiska logotypen?', options: ['4','5','6','7'], answer: 1 },
        { q: 'Vem har flest Formel 1-VM-titlar genom tiderna (delar rekordet)?', options: ['Ayrton Senna','Michael Schumacher och Lewis Hamilton','Sebastian Vettel','Alain Prost'], answer: 1 },
        { q: 'Vilken sport spelas Ryder Cup i?', options: ['Tennis','Golf','Segling','Ridsport'], answer: 1 },
      ],
    },
  ],

  // ══════════════════════════════════════════════════════════
  // HISTORIA
  // ══════════════════════════════════════════════════════════
  historia: [
    {
      id: 'varldshistoria',
      title: 'Världshistoria',
      desc: 'Krig, revolutioner, uppfinnare och stora händelser',
      type: 'quiz',
      difficulty: 'lätt',
      questions: [
        { q: 'Vilket år föll Berlinmuren?', options: ['1987','1989','1991','1985'], answer: 1 },
        { q: 'Vem var den första presidenten i USA?', options: ['Abraham Lincoln','Thomas Jefferson','Benjamin Franklin','George Washington'], answer: 3 },
        { q: 'Vilket år startade andra världskriget?', options: ['1936','1938','1939','1941'], answer: 2 },
        { q: 'Vem målade Mona Lisa?', options: ['Michelangelo','Raphael','Leonardo da Vinci','Caravaggio'], answer: 2 },
        { q: 'Vilket år landade människan på månen?', options: ['1967','1968','1969','1970'], answer: 2 },
        { q: 'Under vilket krig stred Jeanne d\'Arc?', options: ['Hundraårskriget','Trettioåriga kriget','Napoleonkrigen','Nordiska kriget'], answer: 0 },
        { q: 'Vilket imperium var störst i historien (sammanhängande)?', options: ['Romarriket','Brittiska imperiet','Mongoliska imperiet','Osmanska imperiet'], answer: 2 },
        { q: 'Vem ledde den ryska revolutionen 1917?', options: ['Stalin','Trotskij','Lenin','Rasputin'], answer: 2 },
        { q: 'Vilket år byggdes Berlinmuren?', options: ['1956','1959','1961','1963'], answer: 2 },
        { q: 'Vem uppfann telefonen?', options: ['Thomas Edison','Nikola Tesla','Alexander Graham Bell','Marconi'], answer: 2 },
      ],
    },
    {
      id: 'modern',
      title: 'Modern Historia',
      desc: '1900-tal till idag — krig, politik och upptäckter',
      type: 'quiz',
      difficulty: 'mellan',
      questions: [
        { q: 'Vilket år grundades USA?', options: ['1774','1776','1778','1780'], answer: 1 },
        { q: 'Vad heter det skepp som sjönk på sin jungfrufärd 1912?', options: ['Lusitania','Britannic','Titanic','Olympic'], answer: 2 },
        { q: 'Vilket krig kallas "Det stora kriget"?', options: ['Första världskriget','Andra världskriget','Napoleonkrigen','Trettioåriga kriget'], answer: 0 },
        { q: 'Vilket år avskaffades slaveriet i USA?', options: ['1855','1863','1865','1870'], answer: 2 },
        { q: 'Vad heter det berömda antika biblioteket i Egypten?', options: ['Alexandrias bibliotek','Kairos bibliotek','Memfis bibliotek','Luxors bibliotek'], answer: 0 },
        { q: 'Vilket år avslutades Koreakriget?', options: ['1950','1951','1953','1955'], answer: 2 },
        { q: 'Vad startade den franska revolutionen symboliskt?', options: ['Stormningen av Versailles','Stormningen av Bastiljen','Girondisternas revolt','Jakobinernas revolt'], answer: 1 },
        { q: 'Vilket år grundades Förenta Nationerna?', options: ['1943','1945','1947','1950'], answer: 1 },
        { q: 'Vem var Sydafrikas förste demokratiskt valda president?', options: ['Desmond Tutu','Steve Biko','F.W. de Klerk','Nelson Mandela'], answer: 3 },
        { q: 'Vilket år hölls Berlin-OS (de kontroversielle)?', options: ['1932','1934','1936','1938'], answer: 2 },
      ],
    },
    {
      id: 'expert',
      title: 'Historie-experten',
      desc: 'Årtal, fördrag och detaljer för de riktigt historieintresserade',
      type: 'quiz',
      difficulty: 'svårt',
      questions: [
        { q: 'Vilket år undertecknades Westfaliska freden som avslutade Trettioåriga kriget?', options: ['1618','1648','1678','1715'], answer: 1 },
        { q: 'Vem var Frankrikes kejsare vid slaget vid Waterloo 1815?', options: ['Ludvig XVI','Napoleon Bonaparte','Napoleon III','Karl X'], answer: 1 },
        { q: 'Vilket år delades Tyskland i Öst- och Västtyskland?', options: ['1945','1949','1955','1961'], answer: 1 },
        { q: 'Vem var Sveriges regent under stormaktstiden och slaget vid Poltava?', options: ['Gustav II Adolf','Karl X Gustav','Karl XII','Karl XI'], answer: 2 },
        { q: 'Vilket imperium besegrade Konstantinopel 1453?', options: ['Osmanska riket','Mongoliska riket','Persiska riket','Ryska riket'], answer: 0 },
        { q: 'Vilket år bröt Vietnamkriget officiellt ut mellan USA och Nordvietnam?', options: ['1955','1961','1965','1968'], answer: 2 },
        { q: 'Vem myrdades i Sarajevo 1914 och utlöste första världskriget?', options: ['Tsar Nikolaj II','Ärkehertig Franz Ferdinand','Kejsar Wilhelm II','Kung Peter I'], answer: 1 },
        { q: 'Vilket forntida underverk stod i Alexandria?', options: ['Hängande trädgårdarna','Colossus av Rhodos','Fyrtornet i Alexandria','Zeusstatyn i Olympia'], answer: 2 },
        { q: 'Vilket år föll Romarriket (västra delen)?', options: ['376 e.Kr.','410 e.Kr.','476 e.Kr.','527 e.Kr.'], answer: 2 },
        { q: 'Vem ledde Sovjetunionen under Kubakrisen 1962?', options: ['Josef Stalin','Nikita Chrusjtjov','Leonid Brezjnev','Michail Gorbatjov'], answer: 1 },
      ],
    },
  ],

  // ══════════════════════════════════════════════════════════
  // MUSIK
  // ══════════════════════════════════════════════════════════
  musik: [
    {
      id: 'klassiker',
      title: 'Musik-klassiker',
      desc: 'ABBA, Michael Jackson, Beatles och odödliga artister',
      type: 'quiz',
      difficulty: 'lätt',
      questions: [
        { q: 'Vem kallas "The King of Pop"?', options: ['Prince','Michael Jackson','Elvis Presley','David Bowie'], answer: 1 },
        { q: 'Vilket år kom Beatles till USA för första gången?', options: ['1962','1963','1964','1965'], answer: 2 },
        { q: 'Från vilket land kommer ABBA?', options: ['Norge','Finland','Danmark','Sverige'], answer: 3 },
        { q: 'Vilket instrument är Elton John mest känd för?', options: ['Gitarr','Trummor','Piano','Saxofon'], answer: 2 },
        { q: 'Vem sjunger "Rolling in the Deep"?', options: ['Taylor Swift','Rihanna','Adele','Lady Gaga'], answer: 2 },
        { q: 'Vad heter Beyoncés verkliga efternamn?', options: ['Carter','Knowles','Johnson','Williams'], answer: 1 },
        { q: 'Vilket år vann ABBA Eurovision?', options: ['1972','1974','1976','1978'], answer: 1 },
        { q: 'Vem sjunger "Shape of You"?', options: ['Justin Bieber','Sam Smith','Ed Sheeran','Harry Styles'], answer: 2 },
        { q: 'Vad kallas en grupp på fyra musiker?', options: ['Trio','Kvartet','Kvintett','Duett'], answer: 1 },
        { q: 'Hur många strängar har en standard fiol?', options: ['3','4','5','6'], answer: 1 },
      ],
    },
    {
      id: 'modern',
      title: 'Modern Musik',
      desc: 'Från 80-talets synth till dagens hits',
      type: 'quiz',
      difficulty: 'mellan',
      questions: [
        { q: 'Vilket år kom Michael Jacksons album "Thriller"?', options: ['1980','1982','1984','1986'], answer: 1 },
        { q: 'Vem sjunger "Someone Like You"?', options: ['Amy Winehouse','Duffy','Adele','Lana Del Rey'], answer: 2 },
        { q: 'Vad heter Lady Gagas verkliga namn?', options: ['Stefani Germanotta','Cynthia Lauper','Alecia Moore','Robyn Fenty'], answer: 0 },
        { q: 'Vilket land kommer Coldplay från?', options: ['Australien','Irland','England','Kanada'], answer: 2 },
        { q: 'Vem sjunger "Purple Rain"?', options: ['David Bowie','Prince','Jimi Hendrix','Stevie Wonder'], answer: 1 },
        { q: 'Från vilket land kommer Bob Marley?', options: ['Trinidad','Barbados','Jamaica','Haiti'], answer: 2 },
        { q: 'Vilket instrument spelar Billy Joel?', options: ['Gitarr','Trummor','Piano','Bas'], answer: 2 },
        { q: 'Vilket år upplöstes Daft Punk?', options: ['2019','2020','2021','2022'], answer: 2 },
        { q: 'Vad heter Daft Punks sista album?', options: ['Discovery','Homework','Human After All','Random Access Memories'], answer: 3 },
        { q: 'Vem sjunger "Blinding Lights"?', options: ['Drake','The Weeknd','Post Malone','Khalid'], answer: 1 },
      ],
    },
    {
      id: 'expert',
      title: 'Musik-experten',
      desc: 'Skivbolag, årtal och musikhistoriens finstilta',
      type: 'quiz',
      difficulty: 'svårt',
      questions: [
        { q: 'Vilket skivbolag grundade Berry Gordy 1959 i Detroit?', options: ['Atlantic Records','Motown','Stax Records','Columbia Records'], answer: 1 },
        { q: 'Vem producerade merparten av Michael Jacksons album "Thriller"?', options: ['Berry Gordy','Quincy Jones','Rick Rubin','Nile Rodgers'], answer: 1 },
        { q: 'Vilket år bildades Spotify?', options: ['2004','2006','2008','2010'], answer: 1 },
        { q: 'Vem skrev de flesta av ABBAs låtar tillsammans?', options: ['Agnetha och Frida','Benny och Björn','Stikkan Anderson ensam','Björn och Agnetha'], answer: 1 },
        { q: 'Vilken artist har sålt flest skivor genom tiderna enligt de flesta uppskattningar?', options: ['Michael Jackson','The Beatles','Elvis Presley','Madonna'], answer: 1 },
        { q: 'Vad hette Freddie Mercury i verkliga livet?', options: ['Farrokh Bulsara','Fredrik Mercurius','Frederick Bulsara','Farokh Mercury'], answer: 0 },
        { q: 'Vilket år dog Elvis Presley?', options: ['1975','1977','1979','1981'], answer: 1 },
        { q: 'Vilket instrument spelade Jimi Hendrix "upp och ner" fast strängad för högerhänta?', options: ['Bas','Gitarr','Trummor','Klaviatur'], answer: 1 },
        { q: 'Vem grundade skivbolaget Def Jam Recordings?', options: ['Dr. Dre och Snoop Dogg','Rick Rubin och Russell Simmons','Jay-Z och Kanye West','Puff Daddy'], answer: 1 },
        { q: 'Vilket år uppträdde Beatles för sista gången offentligt tillsammans (taklandet)?', options: ['1966','1967','1969','1970'], answer: 2 },
      ],
    },
    {
      id: 'svaret-ar',
      title: 'Svaret är!',
      desc: 'Kategorier: ABBA · Popkungar · Hitlåtar · Instrument · Länder',
      type: 'jeopardy',
      points: [100, 200, 300, 400, 500],
      categories: [
        {
          name: 'ABBA',
          clues: [
            { answer: 'ABBA-låten som vann Eurovision 1974', question: 'Vad är Waterloo?' },
            { answer: 'Männens namn i ABBA', question: 'Vad är Benny och Björn?' },
            { answer: 'Filmen baserad på ABBAs musik', question: 'Vad är Mamma Mia?' },
            { answer: 'Vilket år återförenades ABBA med albumet Voyage?', question: 'Vad är 2021?' },
            { answer: 'ABBAs sista studioalbum innan uppehållet 1982', question: 'Vad är The Visitors?' },
          ],
        },
        {
          name: 'Popkungar',
          clues: [
            { answer: 'Musikern kallad "The King of Pop"', question: 'Vem är Michael Jackson?' },
            { answer: 'Hans mest sålda album genom tiderna', question: 'Vad är Thriller?' },
            { answer: 'Dansrörelse MJ var känd för', question: 'Vad är Moonwalken?' },
            { answer: 'Hans nöjesgods hette detta', question: 'Vad är Neverland?' },
            { answer: 'Vilket år dog Michael Jackson?', question: 'Vad är 2009?' },
          ],
        },
        {
          name: 'Hitlåtar',
          clues: [
            { answer: 'Adeles hitlåt om att rulla i djupet', question: 'Vad är Rolling in the Deep?' },
            { answer: 'Elsas låt i Frozen', question: 'Vad är Let It Go / Släpp det fritt?' },
            { answer: 'Ed Sheerans form-låt', question: 'Vad är Shape of You?' },
            { answer: 'The Weeknds blinda ljus', question: 'Vad är Blinding Lights?' },
            { answer: 'Dolly Partons låt om en kvinna med ett oemotståndligt namn', question: 'Vad är Jolene?' },
          ],
        },
        {
          name: 'Instrument',
          clues: [
            { answer: 'Elton John spelar detta', question: 'Vad är piano?' },
            { answer: 'Antal strängar på en fiol', question: 'Vad är fyra?' },
            { answer: 'Instrument typiskt för country', question: 'Vad är banjo?' },
            { answer: 'Jimi Hendrix spelade detta instrument vänsterhänt', question: 'Vad är gitarr?' },
            { answer: 'Instrument med 88 tangenter', question: 'Vad är piano?' },
          ],
        },
        {
          name: 'Länder',
          clues: [
            { answer: 'ABBAs hemland', question: 'Vad är Sverige?' },
            { answer: 'Bob Marleys hemland', question: 'Vad är Jamaica?' },
            { answer: 'The Beatles hemland', question: 'Vad är England?' },
            { answer: 'Coldplays hemland', question: 'Vad är England?' },
            { answer: 'BTS hemland', question: 'Vad är Sydkorea?' },
          ],
        },
      ],
    },
    {
      id: 'sangfallan',
      title: 'Sångfällan',
      desc: 'Fem rutor döljer en textrad ord för ord — gissa poplåten innan raden avslöjas helt!',
      type: 'sangfallan',
      songs: [
        { line: 'You are the dancing queen', song: 'Dancing Queen', artist: 'ABBA' },
        { line: 'Is this the real life', song: 'Bohemian Rhapsody', artist: 'Queen' },
        { line: 'Billie Jean is not my lover', song: 'Billie Jean', artist: 'Michael Jackson' },
        { line: "Hey Jude, don't make it bad", song: 'Hey Jude', artist: 'The Beatles' },
        { line: 'And I will always love you', song: 'I Will Always Love You', artist: 'Whitney Houston' },
        { line: 'You can stand under my umbrella', song: 'Umbrella', artist: 'Rihanna' },
        { line: 'We could have had it all', song: 'Rolling in the Deep', artist: 'Adele' },
        { line: "I'm in love with the shape of you", song: 'Shape of You', artist: 'Ed Sheeran' },
      ],
    },
  ],

  // ══════════════════════════════════════════════════════════
  // MAT & DRYCK
  // ══════════════════════════════════════════════════════════
  mat: [
    {
      id: 'klassiker',
      title: 'Mat-klassiker',
      desc: 'Ursprung, råvaror och kökshemligheter',
      type: 'quiz',
      difficulty: 'lätt',
      questions: [
        { q: 'Vilket land är ursprungslandet för pizza?', options: ['Frankrike','Spanien','Grekland','Italien'], answer: 3 },
        { q: 'Vad är sushi inrullat i?', options: ['Risapper','Nori (tång)','Rispapper','Bambu'], answer: 1 },
        { q: 'Vilket land producerar mest kaffe?', options: ['Colombia','Etiopien','Vietnam','Brasilien'], answer: 3 },
        { q: 'Vad är huvudingrediensen i hummus?', options: ['Linser','Kikärtor','Bönor','Ärtor'], answer: 1 },
        { q: 'Från vilket land kommer Camembert-osten?', options: ['Schweiz','Holland','Frankrike','Italien'], answer: 2 },
        { q: 'Vad heter den japanska alkoholdrycken gjord på ris?', options: ['Soju','Sake','Baijiu','Mirin'], answer: 1 },
        { q: 'Vilken grönsak innehåller mest C-vitamin per 100g?', options: ['Citron','Apelsin','Paprika','Jordgubbe'], answer: 2 },
        { q: 'Vad är en "roux" i matlagning?', options: ['En sås','En kryddblandning','Smör och mjöl','En marinad'], answer: 2 },
        { q: 'Vilken ost är känd för sina hål?', options: ['Cheddar','Brie','Emmentaler','Gouda'], answer: 2 },
        { q: 'Vad är wasabi gjort av?', options: ['Peppar','Pepparrot/wasabiplanta','Ingefära','Chili'], answer: 1 },
      ],
    },
    {
      id: 'varldsmat',
      title: 'Världens kök',
      desc: 'Rätter och drycker från hela världen',
      type: 'quiz',
      difficulty: 'mellan',
      questions: [
        { q: 'Vilket land uppfann champagne?', options: ['Italien','Spanien','Frankrike','Portugal'], answer: 2 },
        { q: 'Vad heter den spanska risrätten med skaldjur?', options: ['Paella','Risotto','Pilaf','Biriyani'], answer: 0 },
        { q: 'Från vilket land kommer Feta-osten?', options: ['Turkiet','Bulgarien','Grekland','Cypern'], answer: 2 },
        { q: 'Vad heter den mexikanska dippsåsen gjord på avokado?', options: ['Salsa','Guacamole','Queso','Pico de gallo'], answer: 1 },
        { q: 'Vilken pasta är formad som fjärilar?', options: ['Penne','Rigatoni','Farfalle','Fusilli'], answer: 2 },
        { q: 'Vad heter den tunisiska heta chilipasta?', options: ['Harissa','Sambal','Sriracha','Gochujang'], answer: 0 },
        { q: 'Från vilket land kommer Pad Thai?', options: ['Vietnam','Kina','Thailand','Indonesien'], answer: 2 },
        { q: 'Vad heter den indiska rätten gjord på linser?', options: ['Tikka Masala','Dal','Biryani','Saag'], answer: 1 },
        { q: 'Vilket land uppfann sushi som vi känner det idag?', options: ['Korea','Kina','Japan','Thailand'], answer: 2 },
        { q: 'Vad heter den portugisiska äggkräm-tarteletten?', options: ['Churros','Pastel de nata','Flan','Crème brûlée'], answer: 1 },
      ],
    },
    {
      id: 'expert',
      title: 'Mat-experten',
      desc: 'Michelin, tekniker och råvaror för de riktiga matnördarna',
      type: 'quiz',
      difficulty: 'svårt',
      questions: [
        { q: 'Vilket land gav ut den första Michelin-guiden?', options: ['Italien','Frankrike','Spanien','Belgien'], answer: 1 },
        { q: 'Vad kallas tekniken att laga mat i vakuumförpackning i lågt och jämnt vattenbad?', options: ['Confit','Sous vide','Braisering','Blanchering'], answer: 1 },
        { q: 'Vilken svamp är en av världens dyraste råvaror och skördas ofta i Piemonte?', options: ['Kantarell','Vit tryffel','Karljohansvamp','Shiitake'], answer: 1 },
        { q: 'Vad heter processen där kött mörnas genom att hänga i kylt, kontrollerat klimat?', options: ['Dry aging','Curing','Brining','Smoking'], answer: 0 },
        { q: 'Vilket land är ursprungslandet för sojasås?', options: ['Japan','Thailand','Kina','Korea'], answer: 2 },
        { q: 'Vad kallas den femte grundsmaken utöver sött, salt, surt och beskt?', options: ['Umami','Metallisk','Fett','Astringent'], answer: 0 },
        { q: 'Vilken stad räknas som champagnedistriktets huvudort i Frankrike?', options: ['Bordeaux','Reims','Lyon','Dijon'], answer: 1 },
        { q: 'Vad är "roux" gjort av i klassiskt förhållande?', options: ['Lika delar smör och mjöl','Mest mjöl, lite smör','Mest smör, lite mjöl','Smör, mjöl och grädde'], answer: 0 },
        { q: 'Vilket land anses vara currygrytans (curry) ursprung?', options: ['Thailand','Indien','Pakistan','Bangladesh'], answer: 1 },
        { q: 'Vad kallas den japanska tekniken att skära rå fisk i tunna skivor?', options: ['Sashimi','Nigiri','Tempura','Teriyaki'], answer: 0 },
      ],
    },
  ],

  // ══════════════════════════════════════════════════════════
  // VETENSKAP
  // ══════════════════════════════════════════════════════════
  vetenskap: [
    {
      id: 'klassiker',
      title: 'Vetenskap-klassiker',
      desc: 'Kemi, fysik, biologi och de stora upptäckterna',
      type: 'quiz',
      difficulty: 'lätt',
      questions: [
        { q: 'Vad är det kemiska tecknet för guld?', options: ['Gu','Go','Au','Ag'], answer: 2 },
        { q: 'Hur många ben har en spindel?', options: ['6','8','10','12'], answer: 1 },
        { q: 'Vilket är det hårdaste naturliga materialet?', options: ['Granit','Rubin','Diamant','Safir'], answer: 2 },
        { q: 'Vad kallas processen där växter omvandlar solljus?', options: ['Fotosyntes','Respiration','Metabolism','Osmos'], answer: 0 },
        { q: 'Hur lång tid tar ljuset från solen till jordens yta?', options: ['1 sekund','8 minuter','1 timme','24 timmar'], answer: 1 },
        { q: 'Vilket element har atomnummer 1?', options: ['Helium','Litium','Väte','Syre'], answer: 2 },
        { q: 'Vad kallas det när ett ben bryts?', options: ['Luxation','Fraktur','Stukad','Ruptur'], answer: 1 },
        { q: 'Hur många kromosompar har en människa?', options: ['21 par','23 par','25 par','46 par'], answer: 1 },
        { q: 'Vem formulerade relativitetsteorin?', options: ['Newton','Bohr','Einstein','Curie'], answer: 2 },
        { q: 'Vad är vatten kemiska formel?', options: ['CO2','H2O2','H2O','HO'], answer: 2 },
      ],
    },
    {
      id: 'avancerat',
      title: 'Avancerad vetenskap',
      desc: 'Astronomi, kemi och biologins hemligheter',
      type: 'quiz',
      difficulty: 'mellan',
      questions: [
        { q: 'Vad är det tyngsta elementet som finns naturligt?', options: ['Bly','Uran','Guld','Kvicksilver'], answer: 1 },
        { q: 'Hur många planeter finns i solsystemet?', options: ['7','8','9','10'], answer: 1 },
        { q: 'Vad är DNA förkortning för?', options: ['Deoxyribo Nucleic Acid','Dynamic Nucleic Anatomy','Digital Nucleus Array','Double Nucleic Acid'], answer: 0 },
        { q: 'Vilket grundämne är flytande vid rumstemperatur (förutom kvicksilver)?', options: ['Gallium','Brom','Cesium','Francium'], answer: 1 },
        { q: 'Hur snabb är ljusets hastighet (ungefär)?', options: ['100 000 km/s','200 000 km/s','300 000 km/s','400 000 km/s'], answer: 2 },
        { q: 'Vad kallas processen när ett ämne går direkt från fast till gas?', options: ['Kondensation','Sublimering','Smältning','Avdunstning'], answer: 1 },
        { q: 'Vilken gas är vanligast i jordens atmosfär?', options: ['Syre','Koldioxid','Argon','Kväve'], answer: 3 },
        { q: 'Vad kallas ett ljusår?', options: ['Ljusets hastighet per sekund','Avståndet ljuset färdas på ett år','Ljusets intensitet per år','Ljuspartikelns livslängd'], answer: 1 },
        { q: 'Hur många hjärnhalvor har en människa?', options: ['1','2','3','4'], answer: 1 },
        { q: 'Vilket organ producerar insulin?', options: ['Lever','Njure','Bukspottkörtel','Mjälte'], answer: 2 },
      ],
    },
    {
      id: 'expert',
      title: 'Vetenskaps-experten',
      desc: 'Kvantfysik, kemi och biologi på riktigt nördnivå',
      type: 'quiz',
      difficulty: 'svårt',
      questions: [
        { q: 'Vad heter partikeln som ger andra partiklar massa, bekräftad 2012 av CERN?', options: ['Foton','Higgsbosonen','Neutrino','Kvark'], answer: 1 },
        { q: 'Vilket grundämne har det kemiska tecknet "Fe"?', options: ['Fluor','Fosfor','Järn','Franium'], answer: 2 },
        { q: 'Vad kallas teorin om att universum expanderat från en extremt het och tät punkt?', options: ['Stringteorin','Big Bang-teorin','Multiversumteorin','Inflationsteorin'], answer: 1 },
        { q: 'Hur många par kromosomer har en normal mänsklig kroppscell?', options: ['22','23','24','46'], answer: 1 },
        { q: 'Vad kallas processen där celler delar sig till identiska dotterceller?', options: ['Meios','Mitos','Fotosyntes','Osmos'], answer: 1 },
        { q: 'Vilken forskare formulerade evolutionsteorin genom naturligt urval?', options: ['Gregor Mendel','Charles Darwin','Louis Pasteur','Alfred Wallace'], answer: 1 },
        { q: 'Vad är pH-värdet för rent vatten vid 25°C?', options: ['5','6','7','8'], answer: 2 },
        { q: 'Vilken partikel har negativ laddning i en atom?', options: ['Proton','Neutron','Elektron','Foton'], answer: 2 },
        { q: 'Vad kallas avståndet som motsvarar den sträcka ljus färdas på ett år?', options: ['Ljuskilometer','Ljusår','Parsek','Astronomisk enhet'], answer: 1 },
        { q: 'Vilket element har flest protoner av alla naturligt förekommande grundämnen?', options: ['Guld','Uran','Bly','Plutonium'], answer: 1 },
      ],
    },
  ],

  // ══════════════════════════════════════════════════════════
  // NATUR
  // ══════════════════════════════════════════════════════════
  natur: [
    {
      id: 'djur',
      title: 'Djurens värld',
      desc: 'Rekord, beteenden och märkliga fakta från djurriket',
      type: 'quiz',
      difficulty: 'lätt',
      questions: [
        { q: 'Vilket är det största djuret på land?', options: ['Noshörning','Flodhäst','Elefant','Giraff'], answer: 2 },
        { q: 'Vilket är det snabbaste landdjuret?', options: ['Lejon','Gepard','Antilop','Häst'], answer: 1 },
        { q: 'Hur många hjärtan har en bläckfisk?', options: ['1','2','3','4'], answer: 2 },
        { q: 'Vad äter en koala för det mesta?', options: ['Bambu','Eukalyptus','Akacia','Löv'], answer: 1 },
        { q: 'Hur länge kan en Grönlandshaj leva?', options: ['50 år','100 år','200 år','Över 400 år'], answer: 3 },
        { q: 'Vilket träd är känt för att leva längst?', options: ['Ek','Baobab','Sekvoja','Borst-tall'], answer: 3 },
        { q: 'Vad kallas en grupp vargar?', options: ['Flock','Pack','Kull','Hord'], answer: 1 },
        { q: 'Hur många ben har en insekt?', options: ['4','6','8','10'], answer: 1 },
        { q: 'Vilket djur kan sova stående?', options: ['Ko','Häst','Båda','Ingen av dem'], answer: 2 },
        { q: 'Vilket djur är närmast besläktat med blåvalen?', options: ['Hajarna','Flodhästen','Elefanten','Delfinen'], answer: 1 },
      ],
    },
    {
      id: 'natur',
      title: 'Naturen & klimatet',
      desc: 'Växter, ekosystem, hav och jordens krafter',
      type: 'quiz',
      difficulty: 'mellan',
      questions: [
        { q: 'Hur många procent av jordens yta täcks av vatten?', options: ['51%','61%','71%','81%'], answer: 2 },
        { q: 'Vad kallas det triangelformade området där en flod mynnar ut?', options: ['Estuarium','Fjord','Delta','Sund'], answer: 2 },
        { q: 'Hur länge kan en björn sova under vintern?', options: ['2-3 månader','4-5 månader','6-7 månader','8-9 månader'], answer: 1 },
        { q: 'Vilket träd producerar kork?', options: ['Ek','Korkek','Björk','Tall'], answer: 1 },
        { q: 'Vilket är det giftigaste landdjuret?', options: ['Kobra','Giftpilgroda','Mamba','Spindel'], answer: 1 },
        { q: 'Hur lång tid tar en plastpåse att brytas ner?', options: ['50 år','200 år','500 år','1000 år'], answer: 2 },
        { q: 'Vilket djur har störst hjärna i förhållande till kroppen?', options: ['Delfin','Människa','Spermvalsval','Schimpans'], answer: 1 },
        { q: 'Hur många arter bin finns det ungefär i världen?', options: ['500','2 000','20 000','100 000'], answer: 2 },
        { q: 'Vad är jordens varmaste kontinent i genomsnitt?', options: ['Sydamerika','Asien','Afrika','Australien'], answer: 2 },
        { q: 'Hur djupt är Marianergraven (ungefär)?', options: ['6 km','9 km','11 km','14 km'], answer: 2 },
      ],
    },
    {
      id: 'expert',
      title: 'Natur-experten',
      desc: 'Ekosystem, arter och naturfenomen för de riktiga naturnördarna',
      type: 'quiz',
      difficulty: 'svårt',
      questions: [
        { q: 'Vad kallas fenomenet där ett djur eller en växtart är den enda i sitt slag på en viss plats i världen?', options: ['Endemisk','Invasiv','Symbiotisk','Migrerande'], answer: 0 },
        { q: 'Vilket är det största regnskogsområdet i världen till ytan?', options: ['Kongoregnskogen','Amazonas regnskog','Sydostasiens regnskogar','Daintree'], answer: 1 },
        { q: 'Vad kallas processen där ett ekosystem gradvis förändras över tid, t.ex. en sjö som blir till skog?', options: ['Succession','Symbios','Predation','Adaption'], answer: 0 },
        { q: 'Vilket hav är det saltaste i världen?', options: ['Döda havet','Röda havet','Medelhavet','Persiska viken'], answer: 0 },
        { q: 'Vad kallas ett djur som äter både växter och kött?', options: ['Herbivor','Karnivor','Omnivor','Detritivor'], answer: 2 },
        { q: 'Vilket land har världens största regnskogsområde inom sina gränser?', options: ['Brasilien','Peru','Indonesien','Colombia'], answer: 0 },
        { q: 'Vad kallas det naturliga fenomenet norrsken vetenskapligt?', options: ['Aurora Borealis','Aurora Polaris','Aurora Lumen','Aurora Nordis'], answer: 0 },
        { q: 'Vilken av dessa är inte en av jordens klimatzoner?', options: ['Tropisk','Tempererad','Polär','Vulkanisk'], answer: 3 },
        { q: 'Vad kallas relationen där båda arter gynnas av varandra, t.ex. bin och blommor?', options: ['Parasitism','Mutualism','Kommensalism','Konkurrens'], answer: 1 },
        { q: 'Vilket träd är känt för att vara jordens högsta trädart?', options: ['Douglasgran','Kustsekvoja','Eukalyptus','Mammutträd'], answer: 1 },
      ],
    },
  ],

  // ══════════════════════════════════════════════════════════
  // GEN Z VS MILLENNIALS
  // ══════════════════════════════════════════════════════════
  genz: [
    {
      id: 'slang',
      title: 'Slang & vibes',
      desc: 'Gen Z möter Millennials — vem förstår vad?',
      type: 'quiz',
      difficulty: 'lätt',
      questions: [
        { q: 'Vad betyder "no cap"?', options: ['Man har keps på sig', 'Utan lögn / på riktigt', 'Ingen aning', 'Stoppa det där'], answer: 1 },
        { q: 'Vilket av dessa är klassisk millennial-slang?', options: ['Rizz', 'Slay', 'On fleek', 'Bussin'], answer: 2 },
        { q: 'Vad betyder "rizz"?', options: ['Att vara arg', 'Charm — förmågan att imponera på någon', 'Att vara trött', 'Att festa hårt'], answer: 1 },
        { q: '"YOLO" stod för?', options: ['You Only Live Once', 'You Obviously Love Others', 'Your Old Life Over', 'Yo Our Life\'s Okay'], answer: 0 },
        { q: 'Vad menar Gen Z när de säger att något är "bussin"?', options: ['Att det luktar illa', 'Att det är sjukt bra / gott', 'Att det är tråkigt', 'Att det är konstigt'], answer: 1 },
        { q: 'Vilket är ett Gen Z-uttryck?', options: ['Swag', 'On fleek', 'Totes adorbs', 'It\'s giving'], answer: 3 },
        { q: 'Vad betyder millennial-ordet "bae"?', options: ['Barn', 'Kille/tjej man gillar', 'Bästa kompis', 'Fiende'], answer: 1 },
        { q: 'Gen Z säger "understood the assignment" — vad menar de?', options: ['Att man förstår sin läxa', 'Att man levde upp till förväntningarna perfekt', 'Att man är skoltrött', 'Att man kopierat någon'], answer: 1 },
        { q: 'Vilket uttryck är INTE Gen Z?', options: ['Slay', 'Rizz', 'No cap', 'YOLO'], answer: 3 },
        { q: 'Vad betyder "on fleek"?', options: ['På flykt', 'Perfekt / felfritt', 'Helt slut / trött', 'Förvirrad'], answer: 1 },
      ],
    },
    {
      id: 'kultur',
      title: 'Kultur & referenser',
      desc: 'Vem minns vad — TikTok, MSN, Vine och mer',
      type: 'quiz',
      difficulty: 'mellan',
      questions: [
        { q: 'Vilken app är mest associerad med Gen Z?', options: ['MSN Messenger', 'MySpace', 'TikTok', 'Facebook'], answer: 2 },
        { q: 'Vad är "Vine"?', options: ['En Gen Z-app som finns idag', 'En kortvideoapp som lades ner 2017', 'En Spotify-funktion', 'En typ av filter på Instagram'], answer: 1 },
        { q: 'Vad betyder "lowkey"?', options: ['Lågt i volym', 'Lite grand / i hemlighet', 'Helt lugnt', 'Väldigt högt'], answer: 1 },
        { q: 'Vad är "side-eye Chloe"?', options: ['En TikTok-dansare', 'En känd meme med ett skeptiskt barn', 'En influencer', 'En Netflix-serie'], answer: 1 },
        { q: 'Millennial-kod: Vad var "MSN" för något?', options: ['Ett TV-program', 'En chattapp för datorer', 'En musiksida', 'En spelplattform'], answer: 1 },
        { q: 'Vad betyder Gen Z:s "rent free"?', options: ['Gratis hyra', 'Något man inte kan sluta tänka på', 'Att man är hemlös', 'Att man inte betalar för streamingtjänster'], answer: 1 },
        { q: 'Vad menar en millennial med "I can\'t even"?', options: ['Jag kan inte räkna jämna tal', 'Jag är så överväldigad att jag inte vet vad jag ska säga', 'Jag kan inte vara med', 'Jag förstår inte matte'], answer: 1 },
        { q: 'Vad är "NPC behaviour" enligt Gen Z?', options: ['Att spela TV-spel', 'Att bete sig robotaktigt / utan personlighet', 'Att vara sjukt bra på något', 'Att vara en influencer'], answer: 1 },
        { q: 'Vilket av dessa var en millennial-grej?', options: ['BeReal', 'Low-rise jeans på 00-talet', 'TikTok transitions', 'E-girl makeup'], answer: 1 },
        { q: 'Vad betyder "slay" enligt Gen Z?', options: ['Att döda något', 'Att prestera fantastiskt / se grym ut', 'Att vara trött', 'Att ligga och sova'], answer: 1 },
      ],
    },
    {
      id: 'expert',
      title: 'Djupdykaren',
      desc: 'Riktigt nischade referenser — bara för de mest uppkopplade',
      type: 'quiz',
      difficulty: 'svårt',
      questions: [
        { q: 'Vad betyder "gyat" i Gen Alpha/Z-slang?', options: ['Ett utrop om en stor bakdel', 'En hälsning', 'Ett avsked', 'En typ av dans'], answer: 0 },
        { q: 'Vad står förkortningen "IYKYK" för?', options: ['If You Know You Know', 'It\'s Your Kall, You Keep it', 'I Yield, Katie, You Know', 'In Your Keeping, You Know'], answer: 0 },
        { q: 'Vad betyder "delulu" i internetslang?', options: ['Väldigt glad', 'Att leva i en fantasivärld / vara i förnekelse', 'Extremt trött', 'Att vara sen till något'], answer: 1 },
        { q: 'Millennial-referens: vad var "Tamagotchi"?', options: ['En handhållen digital husdjursleksak', 'Ett tidigt MMO-spel', 'En chattapp', 'En musikspelare'], answer: 0 },
        { q: 'Vad betyder "mid" i Gen Z-slang?', options: ['Medelmåttigt / inte imponerande', 'Fantastiskt', 'Halvvägs klar', 'Mitt på dagen'], answer: 0 },
        { q: 'Vad var "MySpace Tom"?', options: ['En musikartist', 'MySpace-grundarens profil som blev allas första "vän"', 'En meme-katt', 'En tidig influencer'], answer: 1 },
        { q: 'Vad betyder "based" i internetslang?', options: ['Att stå för sina åsikter utan att bry sig om andras gillande', 'Att vara osäker', 'Att kopiera någon annan', 'Att vara ny på internet'], answer: 0 },
        { q: 'Hur långa var videoklippen på appen Vine som mest?', options: ['3 sekunder', '6 sekunder', '15 sekunder', '30 sekunder'], answer: 1 },
        { q: 'Vad betyder "npc" som slangterm om en person?', options: ['En person som agerar utan egen personlighet, som en spelfigur', 'En expert på TV-spel', 'En influencer', 'En ny medlem i en grupp'], answer: 0 },
        { q: 'Vad var poängen med appen "Yik Yak" som var populär bland millennials/tidig Gen Z?', options: ['Anonyma inlägg baserat på plats', 'Bildredigering', 'Videosamtal', 'Musikdelning'], answer: 0 },
      ],
    },
  ],

  // ══════════════════════════════════════════════════════════
  // SCHLÄTTA
  // ══════════════════════════════════════════════════════════
  schlatta: [
    {
      id: 'lokalquiz',
      title: 'Schlätta — lokalquizet',
      desc: 'För dig som vet var Schlätta är. Och för alla andra som snart får reda på det.',
      type: 'quiz',
      difficulty: 'mellan',
      questions: [
        { q: 'Vilken stad ligger Schlätta närmast?', options: ['Tidaholm', 'Skövde', 'Falköping', 'Mariestad'], answer: 1 },
        { q: 'I vilket landskap ligger Schlätta?', options: ['Småland', 'Östergötland', 'Västergötland', 'Bohuslän'], answer: 2 },
        { q: 'Vilket stort fordonsföretag har motorfabrik i Skövde?', options: ['Saab', 'Scania', 'Volvo', 'MAN'], answer: 2 },
        { q: 'Vilken av dessa sjöar ligger närmast Skövde?', options: ['Vänern', 'Vättern', 'Mälaren', 'Hjälmaren'], answer: 1 },
        { q: 'Hur många invånare har Skövde tätort ungefär?', options: ['15 000', '25 000', '36 000', '55 000'], answer: 2 },
        { q: 'Vad är Schlätta troligen mest känt för?', options: ['Nattlivet', 'Pariserhjulet', 'Lugnet och lantlivet', 'Internationella flygplatsen'], answer: 2 },
        { q: 'Vilket år fick Skövde stadsrättigheter?', options: ['1361', '1461', '1561', '1661'], answer: 2 },
        { q: 'Hur tar man sig snabbast från Schlätta till Skövde centrum?', options: ['Tunnelbana', 'Spårvagn', 'Bil', 'Gondolbana'], answer: 2 },
        { q: 'Vad finns det troligen fler av än människor i Schlätta?', options: ['Köpcentrum', 'Kor', 'Kryssningsfartyg', 'Trebeddsvillor med pool'], answer: 1 },
        { q: 'Vad heter kommunen som Schlätta tillhör?', options: ['Falköpings kommun', 'Tidaholms kommun', 'Skövde kommun', 'Götene kommun'], answer: 2 },
      ],
    },
    {
      id: 'akta-schlattabo',
      title: 'Äkta Schlättabo',
      desc: 'Bara för de som faktiskt växt upp på Schlätta-nivå av lantlighet',
      type: 'quiz',
      difficulty: 'svårt',
      questions: [
        { q: 'Vad heter det stora sjukhuset i Skövde?', options: ['Kärnsjukhuset', 'Sahlgrenska', 'Länssjukhuset', 'Sankt Görans'], answer: 0 },
        { q: 'Vilket berg/platå ligger precis norr om Skövde och är ett populärt utflyktsmål?', options: ['Kinnekulle', 'Billingen', 'Halleberg', 'Hunneberg'], answer: 1 },
        { q: 'Vad heter Skövdes stora köpcentrum i centrala stan?', options: ['Kompassen', 'Skövde Galleria', 'Norrmalm', 'Regementet'], answer: 0 },
        { q: 'Vilken myndighet/skola inom försvaret finns i Skövde?', options: ['Försvarshögskolan', 'Livgardet', 'Markstridsskolan', 'Sjökrigsskolan'], answer: 2 },
        { q: 'Om du säger att något är "en bit ut på landet" från Skövde, hur långt menar en äkta Schlättabo troligen?', options: ['Under 5 minuter', '10-20 minuter', 'En hel dagsresa', 'Utomlands'], answer: 1 },
        { q: 'Vad är troligast att man möter fler av på en landsväg vid Schlätta en vardagskväll?', options: ['Taxibilar', 'Rådjur', 'Elsparkcyklar', 'Turistbussar'], answer: 1 },
        { q: 'Vilket väder är mest "typiskt västgötskt" enligt lokal klyscha?', options: ['Ihållande snö', 'Ombytligt — sol och regn samma dag', 'Ökenvärme', 'Orkanvindar'], answer: 1 },
        { q: 'Vad gör man troligtvis om grannen på Schlätta hör av sig oanmäld?', options: ['Låtsas inte vara hemma', 'Bjuder in på kaffe', 'Ringer polisen', 'Flyttar'], answer: 1 },
        { q: 'Vad är den snabbaste vägen att beskriva var Schlätta ligger för någon som aldrig hört talas om det?', options: ['"Nära Stockholm"', '"Strax utanför Skövde"', '"I norra Norrland"', '"På en ö"'], answer: 1 },
        { q: 'Vad krävs troligen mest av allt för att överleva en vinter på Schlätta?', options: ['Tålamod och bra vinterdäck', 'Palmer', 'Ett gym-kort', 'Ett pass'], answer: 0 },
      ],
    },
  ],

  // ══════════════════════════════════════════════════════════
  // TEKNIK
  // ══════════════════════════════════════════════════════════
  teknik: [
    {
      id: 'klassiker',
      title: 'Teknik-klassiker',
      desc: 'Apple, Google, Windows och teknikhistoriens milstolpar',
      type: 'quiz',
      difficulty: 'lätt',
      questions: [
        { q: 'Vilket år grundades Apple?', options: ['1974','1976','1980','1984'], answer: 1 },
        { q: 'Vad står "HTML" för?', options: ['HyperText Markup Language','HighText Machine Language','HyperText Media Language','HyperTransfer Markup Language'], answer: 0 },
        { q: 'Vilket år lanserades den första iPhone?', options: ['2005','2006','2007','2008'], answer: 2 },
        { q: 'Vad heter Elon Musks rymdbolag?', options: ['Blue Origin','Virgin Galactic','Boeing','SpaceX'], answer: 3 },
        { q: 'Vad är en "bug" i datorsammanhang?', options: ['Ett virus','Ett programmeringsfel','En hårdvaruskada','En lösenordsstöld'], answer: 1 },
        { q: 'Vilket programmeringsspråk uppfanns av Guido van Rossum?', options: ['Java','C++','Python','Ruby'], answer: 2 },
        { q: 'Vilket år lanserades Google?', options: ['1996','1998','2000','2002'], answer: 1 },
        { q: 'Vilket företag skapade Windows?', options: ['Apple','IBM','Microsoft','Intel'], answer: 2 },
        { q: 'Vad är ett LAN?', options: ['Lokalt nätverk','Globalt nätverk','Trådlöst nätverk','Molnnätverk'], answer: 0 },
        { q: 'Vad kallas ett program som skriver sig självt in i andra program?', options: ['Trojan','Mask','Virus','Spyware'], answer: 2 },
      ],
    },
    {
      id: 'modern',
      title: 'Modern Teknik',
      desc: 'AI, sociala medier och framtidens teknologi',
      type: 'quiz',
      difficulty: 'mellan',
      questions: [
        { q: 'Vad är det binära talsystemets bas?', options: ['2','8','10','16'], answer: 0 },
        { q: 'Vilket år lanserades Twitter?', options: ['2004','2006','2008','2010'], answer: 1 },
        { q: 'Vilket år grundades Facebook?', options: ['2002','2003','2004','2005'], answer: 2 },
        { q: 'Vad kallas Moore\'s lag om?', options: ['Processorn fördubblas varje år','Transistorer fördubblas var 18-24 månad','Minnespriset halveras/år','Internet dubbleras var 3:e år'], answer: 1 },
        { q: 'Vilket programmeringsspråk används mest på klientsidan av webben?', options: ['Python','Java','JavaScript','PHP'], answer: 2 },
        { q: 'Vad står "AI" för?', options: ['Automatic Intelligence','Artificial Intelligence','Advanced Interface','Algorithmic Input'], answer: 1 },
        { q: 'Vilket land grundade TikTok?', options: ['Japan','Sydkorea','USA','Kina'], answer: 3 },
        { q: 'Vad kallas en miljarddels sekund inom datorer?', options: ['Mikrosekund','Millisekund','Nanosekund','Pikosekund'], answer: 2 },
        { q: 'Vem grundade Tesla?', options: ['Enbart Elon Musk','Martin Eberhard och Marc Tarpenning','Jeff Bezos','Bill Gates'], answer: 1 },
        { q: 'Vilket år kom ChatGPT?', options: ['2020','2021','2022','2023'], answer: 2 },
      ],
    },
    {
      id: 'expert',
      title: 'Teknik-experten',
      desc: 'Grundare, protokoll och detaljer för de riktiga tech-nördarna',
      type: 'quiz',
      difficulty: 'svårt',
      questions: [
        { q: 'Vad står förkortningen "HTTP" för?', options: ['HyperText Transfer Protocol', 'High Transfer Text Protocol', 'HyperText Transmission Process', 'Home Tool Transfer Protocol'], answer: 0 },
        { q: 'Vem grundade Linux-kärnan?', options: ['Bill Gates', 'Linus Torvalds', 'Dennis Ritchie', 'Richard Stallman'], answer: 1 },
        { q: 'Vilket år grundades Amazon?', options: ['1993', '1994', '1995', '1996'], answer: 1 },
        { q: 'Vad kallas den första allmänt kända datorn som räknas som en av de första elektroniska datorerna (1940-talet)?', options: ['UNIVAC', 'ENIAC', 'Colossus', 'Z3'], answer: 1 },
        { q: 'Vad står "GPU" för?', options: ['General Processing Unit', 'Graphics Processing Unit', 'Global Program Utility', 'Graphic Program Unit'], answer: 1 },
        { q: 'Vem grundade Microsoft tillsammans med Bill Gates?', options: ['Steve Jobs', 'Paul Allen', 'Steve Ballmer', 'Larry Ellison'], answer: 1 },
        { q: 'Vilket år lanserade Apple den första Macintosh-datorn?', options: ['1981', '1984', '1987', '1990'], answer: 1 },
        { q: 'Vad kallas praxisen att lura användare att lämna ut känslig information via falska mejl/sidor?', options: ['Spoofing', 'Phishing', 'Hacking', 'Cracking'], answer: 1 },
        { q: 'Vilket företag utvecklade programmeringsspråket Java?', options: ['Microsoft', 'IBM', 'Sun Microsystems', 'Oracle'], answer: 2 },
        { q: 'Vad betyder förkortningen "URL"?', options: ['Universal Resource Locator', 'Uniform Resource Locator', 'Unified Reference Link', 'Universal Reference Locator'], answer: 1 },
      ],
    },
  ],

  // ══════════════════════════════════════════════════════════
  // 80- & 90-TAL
  // ══════════════════════════════════════════════════════════
  retro: [
    {
      id: 'klassiker',
      title: '80- och 90-talsklassiker',
      desc: 'Musik, filmer och prylar alla känner igen',
      type: 'quiz',
      difficulty: 'lätt',
      questions: [
        { q: 'Vilket företag lanserade spelkonsolen NES 1985?', options: ['Sega', 'Nintendo', 'Atari', 'Sony'], answer: 1 },
        { q: 'Vem gav ut albumet "Thriller"?', options: ['Prince', 'Michael Jackson', 'Stevie Wonder', 'Lionel Richie'], answer: 1 },
        { q: 'Vilken Spielberg-film om dinosaurier kom 1993?', options: ['Jurassic Park', 'King Kong', 'Godzilla', 'The Lost World'], answer: 0 },
        { q: 'Vilken sitcom om sex vänner i New York hade premiär 1994?', options: ['Seinfeld', 'Friends', 'Frasier', 'Cheers'], answer: 1 },
        { q: 'Vilket företag lanserade Game Boy 1989?', options: ['Sega', 'Sony', 'Nintendo', 'Atari'], answer: 2 },
        { q: 'Vilken filmserie om tidsresor med en DeLorean-bil startade 1985?', options: ['Tillbaka till framtiden', 'Terminator', 'Matrix', 'Men in Black'], answer: 0 },
        { q: 'Vilket svenskt band hade stora hits internationellt på 90-talet med bland annat "All That She Wants"?', options: ['Roxette', 'Ace of Base', 'Europe', 'The Cardigans'], answer: 1 },
        { q: 'Vilken tv-serie med Will Smith handlar om en kille från Philadelphia som flyttar till en rik familj?', options: ['The Fresh Prince of Bel-Air', 'Full House', 'Family Matters', 'Saved by the Bell'], answer: 0 },
        { q: 'Vilken tecknad TV-serie om familjen Simpson hade premiär 1989?', options: ['Familjen Flinta', 'Simpsons', 'South Park', 'King of the Hill'], answer: 1 },
        { q: 'Vilket pusselspel i kubform blev en stor trend på 80-talet?', options: ["Rubik's kub", 'Tetris', 'Jenga', 'Puzzle Ball'], answer: 0 },
      ],
    },
    {
      id: 'nostalgi',
      title: 'Nittiotalsnostalgi',
      desc: 'Prylar, artister och tv-serier från en svunnen tid',
      type: 'quiz',
      difficulty: 'mellan',
      questions: [
        { q: 'Vilken bärbar kassettspelare från Sony blev en symbol för 80-talet?', options: ['Discman', 'Walkman', 'Boombox', 'MiniDisc'], answer: 1 },
        { q: 'Vilket år hade Simpsons premiär som egen serie?', options: ['1987', '1989', '1991', '1993'], answer: 1 },
        { q: 'Vilken Tom Cruise-film om jaktflygare kom 1986?', options: ['Top Gun', 'Days of Thunder', 'A Few Good Men', 'Rain Man'], answer: 0 },
        { q: 'Från vilket land kommer leksaken/appen Tamagotchi?', options: ['Kina', 'Sydkorea', 'Japan', 'USA'], answer: 2 },
        { q: 'Vem sjunger "Like a Virgin"?', options: ['Cyndi Lauper', 'Madonna', 'Whitney Houston', 'Tina Turner'], answer: 1 },
        { q: 'Vilket år kom filmen Titanic med Leonardo DiCaprio och Kate Winslet?', options: ['1995', '1996', '1997', '1998'], answer: 2 },
        { q: 'Vilken TV-serie handlar om FBI-agenterna Mulder och Scully som utreder övernaturliga fall?', options: ['Arkiv X', 'Twin Peaks', 'Millennium', 'Akte X'], answer: 0 },
        { q: 'Vilket spelbolag skapade Super Mario?', options: ['Sega', 'Capcom', 'Nintendo', 'Konami'], answer: 2 },
        { q: 'Vilket år blev World Wide Web tillgängligt för allmänheten?', options: ['1989', '1991', '1993', '1995'], answer: 1 },
        { q: 'Vilken grön ninja-sköldpaddsgäng med förkärlek för pizza var enormt populärt på 90-talet?', options: ['Teenage Mutant Ninja Turtles', 'Biker Mice from Mars', 'Street Sharks', 'Extreme Dinosaurs'], answer: 0 },
      ],
    },
    {
      id: 'experten',
      title: 'Retro-experten',
      desc: 'Årtal, prylar och detaljer för de riktiga 80/90-talsnördarna',
      type: 'quiz',
      difficulty: 'svårt',
      questions: [
        { q: 'Vilket år grundades musikkanalen MTV?', options: ['1979', '1981', '1983', '1985'], answer: 1 },
        { q: 'Vilken var den första kommersiellt tillgängliga mobiltelefonen, lanserad 1983?', options: ['Nokia Cityman', 'Motorola DynaTAC', 'Ericsson Hotline', 'Motorola StarTAC'], answer: 1 },
        { q: 'Vilket arkadspel med en gul figur som äter prickar och undviker spöken lanserades 1980?', options: ['Donkey Kong', 'Pac-Man', 'Space Invaders', 'Frogger'], answer: 1 },
        { q: 'Vilket år upplöstes Sovjetunionen?', options: ['1989', '1990', '1991', '1992'], answer: 2 },
        { q: 'Vilket skomärke blev ikoniskt på 80-talet tack vare Michael Jordan?', options: ['Air Jordan (Nike)', 'Reebok Pump', 'Adidas Torsion', 'Puma Suede'], answer: 0 },
        { q: 'Vilket spel följde med i lådan när den första Game Boyn lanserades 1989?', options: ['Super Mario Land', 'Tetris', 'Pokémon Red', 'Dr. Mario'], answer: 1 },
        { q: 'Vilken var en av de första allmänt kända webbläsarna på 90-talet?', options: ['Internet Explorer', 'Netscape Navigator', 'Mosaic Pro', 'Opera'], answer: 1 },
        { q: 'Vilket år arrangerades de första "Extreme Games" (senare X Games)?', options: ['1993', '1995', '1997', '1999'], answer: 1 },
        { q: 'Vilket svenskt rockband låg bakom hitlåten "The Final Countdown" (1986)?', options: ['Roxette', 'Europe', 'Ace of Base', 'Yngwie Malmsteen'], answer: 1 },
        { q: 'Vad hette Nirvana-albumet från 1991 som blev grunge-genombrottet?', options: ['In Utero', 'Bleach', 'Nevermind', 'MTV Unplugged in New York'], answer: 2 },
      ],
    },
  ],
}
