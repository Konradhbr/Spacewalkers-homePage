$(document).ready(function () {
  //=============================
  //  [Hero-carrousel]
  //=============================
  var $carousel = $('.main-carousel').flickity({
    contain: true,
    pageDots: false,
    prevNextButtons: false,
    // groupCells: true,
    // groupCells: 2,
    pageDots: false,
    prevNextButtons: false,
  });

  $('.button-group').on('click', '.button-carrousel', function () {
    var index = $(this).index();
    $carousel.flickity('select', index);
  });

  //=============================
  //  [button animation]
  //=============================
  $('.button').mouseover(function () {
    $('#shape-arrow').removeClass('hide');
    $('#shape').addClass('hide');
  });

  //=============================
  //  [open mobile menu]
  //=============================
  var menuButton = $('#menu__toggle'),
    mobileMenu = $('.menu__mobile'),
    nav = $('.nav'),
    mobileMenuLink = $('.menu-link');

  $(menuButton).click(function () {
    if (!$(mobileMenu).hasClass('menu__mobile--active')) {
      $(mobileMenu).addClass('menu__mobile--active');
      $(nav).addClass('nav--active');
    } else {
      $(mobileMenu).removeClass('menu__mobile--active');
      $(nav).removeClass('nav--active');
    }
  });
  $(mobileMenuLink).click(function () {
    $(mobileMenu).removeClass('menu__mobile--active');
    $(nav).removeClass('nav--active');
  });

  //=============================
  //  [team members]
  //=============================
  const photoURL = '/assets/images/jpg/team/';
  const members = [
    {
      name: 'Tomasz',
      surname: 'Wacławek',
      profession: 'CEO, Creative Director',
      plProfession: 'CEO, Dyrektor Generalny',
      description:
        'Making games for fun and profit! Designer and coder with extensive industry experience gained in well-known studios like Devolver Digital and Flying Wild Hog. Tomasz navigates our space ship and leads the way in everyday’s work at Spacewalkers. He is an expert in the indie gaming genre. Developed such titles as Ronin, Immortal Planet and Door in the Woods.',
      plDescription:
        'Głównodowodzący naszego kosmicznego statku. Specjalista od kodu z wieloletnim doświadczeniem w branży, które zbierał w takich studio jak Devolver Digital, czy Flying Wild Hog. Nadaje właściwy kierunek wszystkim zadaniom w Spacewalkers. Od lat tworzy gry dla zabawy i zarobku! Pracował nad wieloma świetnie przyjętymi grami z gatunku Indie, między innymi: Ronin, Immortal Planet, Door in the Woods.',
    },
    {
      name: 'Patryk',
      surname: 'Karwat',
      profession: 'Audio Production',
      plProfession: 'Produkcja Audio',
      description:
        'Composer and Sound Designer with focus on games and animations. Great watermelon enjoyer. His career was forged on the passion for percussion instruments. He gained experience as a music composer, and later as a sound effects creator working on games, trailers and animations for: Succubus, Arboria, Helltaker, Tormentor, Paranoid, Succubus Prologue, Daystone Episode Three, We the Revolution, Agony, Daystone, Immortal Planet and Galaxy of Freaks.',
      plDescription:
        'Kompozytor i dźwiękowiec skupiający się na grach i animacjach. Fan i smakosz arbuzów, które wykorzystuje przy pracy nad produkcją dźwięków. Jego zawodowa ścieżka rozpoczęła się od pasji do instrumentów perkusyjnych. Nabierał doświadczenia jako kompozytor oraz twórca efektów dźwiękowych przy pracy nad grami, trailerami oraz animacjami dla: Succubus, Arboria, Helltaker, Tormentor, Paranoid, Succubus Prologue, Daystone Episode Three, We the Revolution, Agony, Daystone, Immortal Planet and Galaxy of Freaks.',
    },
    {
      name: 'Mateusz',
      surname: 'Stolarczyk',
      profession: 'Level Artist',
      plProfession: 'Projektant Poziomów',
      description:
        'Geek, guitarist and saber fencer. Responsible for level design and environment art. Before joining Spacewalkers he was working as a Quality Assurance Specialist and Game Tester for such titles as Going Under and One Shell Straight to Hell. He also co-created mod to the Witcher 3: Wild Hunt: Farewell of the White Wolf.',
      plDescription:
        'Geek, gitarzysta i szermierz. Odpowiada za tworzenie poziomów i kreowanie krajobrazu w naszych grach. Pracował jako Game Tester oraz Quality Assurance Specialist przy takich produkcjach jak Going Under oraz One Shell Straight to Hell. Współtworzył moda Pożegnania Białego Wilka do gry Wiedźmin 3: Dziki Gon.',
    },
    {
      name: 'Maksymilian',
      surname: 'Strzelecki',
      profession: 'Senior Programmer',
      plProfession: 'Starszy Programista',
      description:
        'Makes sure the AI doesn’t kill us all (yet). Huge nerd, loves playing League of Legends in his spare time. Founder of the Ancient Forge Studio, which published such games as The Tenants and Glorious Companions.',
      plDescription:
        'Na co dzień upewnia się, że sztuczna inteligencja nie planuje się nas wszystkich pozbyć. Nerd komputerowy, w wolnych chwilach gra w League of Legends. Założyciel Ancient Forge Studio, które wydało takie gry jak The Tenants i Glorious Companions.',
    },
    {
      name: 'Maciej',
      surname: 'Szajkowski',
      profession: '2D/3D Graphic Designer',
      plProfession: 'Grafik 2D/3D',
      description:
        "Concept artist, illustrator and aspiring 3D artist. A man who never gives up. He participated in such projects as: The House of Fables, Eventide 2: Sorcerer's Mirror, Eventide 3: Legacy of Legends, Chronicles of Magic: Divided Kingdoms, Dreamwalker: Never Fall Asleep, Trains VR, Wrath of Loki, Fields of Glory, Potion Master, Belly Rumble, Depths of Atlantis, The Knights of Unity, Tools up! - Garden Party.",
      plDescription:
        "Ilustrator i artysta specjalizujący się w modelowaniu 3D. Nigdy się nie poddaje. Brał udział w takich projektach jak: The House of Fables, Eventide 2: Sorcerer's Mirror, Eventide 3: Legacy of Legends, Chronicles of Magic: Divided Kingdoms, Dreamwalker: Never Fall Asleep, Trains VR, Wrath of Loki, Fields of Glory, Potion Master, Belly Rumble, Depths of Atlantis, The Knights of Unity, Tools up! - Garden Party.",
    },
    {
      name: 'Kamil',
      surname: 'Błaszkiewicz',
      profession: 'Marketing Manager',
      plProfession: 'Kierownik ds. marketingu',
      description:
        'Responsible for content creation, social media, and marketing related operations. Gamer, streamer and a cat dad. Rock music addict. Made a transition from a corporate job to game development to make a living off his biggest passion. Previously worked as a Project Manager and was responsible for processes optimization. Also was working on the projects for Amazon’s clients.',
      plDescription:
        'Odpowiedzialny za tworzenie treści, media społecznościowe i szeroko pojęty marketing. Gracz, streamer i koci tata. Uzależniony od muzyki rockowej. Trafił do gamedevu żeby zamienić swoją największą pasję w sposób na życie. Wcześniej zajmował się optymalizacją procesów w organizacji oraz realizował projekty dla klientów Amazon.',
    },
    {
      name: 'Joseph',
      surname: 'Hartman',
      profession: 'Story Writer',
      plProfession: 'Autor opowieści',
      description: 'Writes the story and the dialogue in our games. Pretty fun stuff!',
      plDescription: 'Tworzy fabułę i dialogi w naszych grach. Pisarz z lekkim piórem i wielkim poczuciem humoru.',
    },
    {
      name: 'Jarosław',
      surname: 'Ksybek',
      profession: 'Lead Programmer',
      plProfession: 'Główny Programista',
      description:
        'Experienced coder with a calm attitude. Enjoys seeing his creations come to life. He published games both independently and working for well established studios in the industry. You can check his work while playing: Ben The Exorcist, Guns & Notes, Space Camp, Desert Dream, Bartender VR Simulator, Horror Bar VR, czy MonsterSoft.',
      plDescription:
        'Doświadczony programista i oaza spokoju. Największą przyjemność sprawia mu, kiedy jego kod ożywa i możemy zobaczyć efekty naszej pracy. Wydawał gry zarówno niezależnie, jak i współpracując z obecnymi na rynku studio. Jego prace można zobaczyć grając w: Ben The Exorcist, Guns & Notes, Space Camp, Desert Dream, Bartender VR Simulator, Horror Bar VR, czy MonsterSoft.',
    },
    {
      name: 'Jarosław',
      surname: 'Jaźwiecki',
      profession: 'Programmer',
      plProfession: 'Programista',
      description:
        'Creates Machine Learning models, makes sure the AI will take our jobs. In his free time plays football and makes music. Previously he was working for Aptiv to create 3D Gesture Recognition for BMW.',
      plDescription:
        'Odpowiada za machine learning i dba o to, żeby sztuczna inteligencja wygryzła nas z czasem z pracy. Fan piłki nożnej i tworzenia muzyki. Wcześniej pracował dla Aptiv przy tworzeniu 3D Gesture Recognition do samochodów BMW.',
    },
    {
      name: 'Jakub',
      surname: 'Lang',
      profession: 'Junior Programmer',
      plProfession: 'Młodszy Programista',
      description: 'Ambitious, junior programmer, who abandoned biotechnology for gamedev.',
      plDescription: 'Młody, ambitny programista, który porzucił biotechnologię dla pasji - pracy w branży gier.',
    },
    {
      name: 'Hubert',
      surname: 'Popławski',
      profession: 'Gameplay Designer',
      plProfession: 'Projektant rozgrywki',
      description:
        'Passionate about creating immersive in-game solutions and PC hardware. In his spare time busy developing his own game projects and cooking. He created The Before Darkness Falls which was showcased at the BlizzConline event in the User Generated Content Section in 2021. When working on projects, he follows the rule to create games that he would like to play himself.',
      plDescription:
        'Zna się na tworzeniu immersji w grach. W wolnym czasie zajmuje go przygotowywanie własnych projektów, gotowanie i komputerowy hardware. Stworzył Before Darkness Falls, które zostało pokazane na BlizzConline w sekcji kontentu przygotowanego przez użytkowników w 2021 roku. Kiedy nad czymś pracuje zawsze kieruje się zasadą, żeby robić gry, w które sam chciałby zagrać.',
    },
    {
      name: 'Artur',
      surname: 'Kulczycki',
      profession: 'Art Director',
      plProfession: 'Kierownik ds. Artystycznych/Scenografii',
      description:
        'Artist with many years of experience in the industry. People person, a man with a big heart! He was working for many established companies, such as Drago Entertainment, Techland, Plot Twist, Awesome Industries and Tate Interactive. He took part in production of the following titles: Lucky Luke, My Horse and Me 2, Lanfeust, Dying Light, Dying Light 2, Dying Light Bad Blood, Drift Zone 2, The Last Case of Benedict Fox.',
      plDescription:
        'Artysta z wieloletnim doświadczeniem w branży gamingowej. Towarzyski człowiek z wielkim sercem, podchodzi z pasją do swoich zadań. Ma obsesję na punkcie Avatara. Pracował między innymi dla Drago Entertainment, Techland, Plot Twist, Awesome Industries czy Tate Interactive. Ma na koncie udział w takich produkcjach jak: Lucky Luke, My Horse and Me 2, Lanfeust, Dying Light, Dying Light 2, Dying Light Bad Blood, Drift Zone 2, The Last Case of Benedict Fox.',
    },
    {
      name: 'Aleksandra',
      surname: 'Topolewska',
      profession: 'Character Artist',
      plProfession: 'Projektant postaci',
      description:
        'Character modeling specialist, fashion designer at Spacewalkers. Passionate about yoga and jogging. Previously she was working on Virtual Reality titles for the VR Factory. Also created assets for games: Ben The Exorcist and MonsterSoft.',
      plDescription:
        'Specjalistka w modelowaniu postaci, cyfrowa projektantka mody w Spacewalkers. Interesuje się jogą i bieganiem. Zajmowała się projektowaniem gier w technologii VR dla VR Factory. Ma również na koncie takie produkcje jak Ben The Exorcist i MonsterSoft.',
    },
    {
      name: 'Anna',
      surname: 'Wacławek',
      profession: 'HR Manager',
      plProfession: 'Kierownik ds. HR',
      description:
        'Responsible for HR and contact with business partners. A smiling and cheerful person with a kind word for everyone. Expert in all the formalities, which overwhelm the rest of us - gaming geeks.',
      plDescription:
        'Odpowiada za HR oraz kontakt z partnerami biznesowymi. Zawsze uśmiechnięta i radosna, podnosi morale naszego zespołu. Ekspertka do spraw wszystkich formalności, które przerastają geeków komputerowych.',
    },
    {
      name: 'Mateusz',
      surname: 'Mucha',
      profession: '2D Graphic Designer, Concept Artist',
      plProfession: 'Projektant graficzny 2D, konceptant',
      description: "If something doesn't exist, let me draw it! Road racing and bikepacking enthusiast.",
      plDescription:
        'Jeśli coś nie istnieje, ten człowiek i tak to narysuje. Entuzjasta wyścigów i wycieczek rowerowych.',
    },
  ];

  var member;
  var currentUrl = window.location.href;
  if (currentUrl.includes('/pl')) {
    for (member = 0; member < members.length; member++) {
      $('.team__items').append(
        `<div class='team__item'>
     <span class='team__item__title'>${members[member].name}</span>
     <div class='team__item__image'>
      <img src=${photoURL + [member + 1] + '.jpg'} alt='team-member' />
      </div>
     <div class='team__item__text'>
        <h3>${members[member].surname}</h3>
        <span class='decor'>${members[member].plProfession}</span>
       <p>
         ${members[member].plDescription}
       </p>
      </div>
    </div>`,
      );
    }
  } else {
    for (member = 0; member < members.length; member++) {
      $('.team__items').append(
        `<div class='team__item'>
     <span class='team__item__title'>${members[member].name}</span>
     <div class='team__item__image'>
      <img src=${photoURL + [member + 1] + '.jpg'} alt='team-member' />
      </div>
     <div class='team__item__text'>
        <h3>${members[member].surname}</h3>
        <span class='decor'>${members[member].profession}</span>
       <p>
         ${members[member].description}
       </p>
      </div>
    </div>`,
      );
    }
  }
});
//=============================
//  [games]
//=============================
//   const games = [
//     {
//       title: 'Signal',
//       collection: 'Interregnum Chronicles:',
//       photo: '/assets/images/png/signal.png',
//     },
//     {
//       title: 'False Prophet',
//       collection: 'Interregnum Chronicles:',
//       photo: '/assets/images/png/falseProphet.png',
//     },
//     {
//       title: 'World Collapse',
//       collection: 'Interregnum Chronicles:',
//       photo: '/assets/images/png/worldCollapse.png',
//     },
//   ];

//   var game;
//   for (game = 0; game < games.length; game++) {
//     $('.team__items').append(
//       `<div class='team__item'>
//      <span class='team__item__title'>${members[member].name}</span>
//      <div class='team__item__image'>
//       <img src=${photoURL + [member + 1] + '.jpg'} alt='team-member' />
//       </div>
//      <div class='team__item__text'>
//         <h3>${members[member].surname}</h3>
//         <span class='decor'>${members[member].profession}</span>
//        <p>
//          ${members[member].description}
//        </p>
//       </div>
//     </div>`,
//     );
//   }
// });
