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
      description:
        'Making games for fun and profit! Designer and coder with extensive industry experience gained in well-known studios like Devolver Digital and Flying Wild Hog. Tomasz navigates our space ship and leads the way in everyday’s work at Spacewalkers. He is an expert in the indie gaming genre. Developed such titles as Ronin, Immortal Planet and Door in the Woods.',
    },
    {
      name: 'Patryk',
      surname: 'Karwat',
      profession: 'Audio Production',
      description:
        'Composer and Sound Designer with focus on games and animations. Great watermelon enjoyer. His career was forged on the passion for percussion instruments. He gained experience as a music composer, and later as a sound effects creator working on games, trailers and animations for: Succubus, Arboria, Helltaker, Tormentor, Paranoid, Succubus Prologue, Daystone Episode Three, We the Revolution, Agony, Daystone, Immortal Planet and Galaxy of Freaks.',
    },
    {
      name: 'Mateusz',
      surname: 'Stolarczyk',
      profession: 'Level Artist',
      description:
        'Geek, guitarist and saber fencer. Responsible for level design and environment art. Before joining Spacewalkers he was working as a Quality Assurance Specialist and Game Tester for such titles as Going Under and One Shell Straight to Hell. He also co-created mod to the Witcher 3: Wild Hunt: Farewell of the White Wolf.',
    },
    {
      name: 'Maksymilian',
      surname: 'Strzelecki',
      profession: 'Senior Programmer',
      description:
        ' Makes sure the AI doesn’t kill us all (yet). Huge nerd, loves playing League of Legends in his spare time. Founder of the Ancient Forge Studio, which published such games as The Tenants and Glorious Companions.',
    },
    {
      name: 'Maciej',
      surname: 'Szajkowski',
      profession: '2D/3D Graphic Designer',
      description:
        "Concept artist, illustrator and aspiring 3D artist. A man who never gives up. He participated in such projects as: The House of Fables, Eventide 2: Sorcerer's Mirror, Eventide 3: Legacy of Legends, Chronicles of Magic: Divided Kingdoms, Dreamwalker: Never Fall Asleep, Trains VR, Wrath of Loki, Fields of Glory, Potion Master, Belly Rumble, Depths of Atlantis, The Knights of Unity, Tools up! - Garden Party.",
    },
    {
      name: 'Kamil',
      surname: 'Błaszkiewicz',
      profession: 'Marketing Manager',
      description:
        'Responsible for content creation, social media, and marketing related operations. Gamer, streamer and a cat dad. Rock music addict. Made a transition from a corporate job to game development to make a living off his biggest passion. Previously worked as a Project Manager and was responsible for processes optimization. Also was working on the projects for Amazon’s clients.',
    },
    {
      name: 'Joseph',
      surname: 'Hartman',
      profession: 'Story Writer',
      description: 'Writes the story and the dialogue in our games. Pretty fun stuff!',
    },
    {
      name: 'Jarosław',
      surname: 'Ksybek',
      profession: 'Lead Programmer',
      description:
        'Experienced coder with a calm attitude. Enjoys seeing his creations come to life. He published games both independently and working for well established studios in the industry. You can check his work while playing: Ben The Exorcist, Guns & Notes, Space Camp, Desert Dream, Bartender VR Simulator, Horror Bar VR, czy MonsterSoft.',
    },
    {
      name: 'Jarosław',
      surname: 'Jaźwiecki',
      profession: 'Programmer',
      description:
        'Creates Machine Learning models, makes sure the AI will take our jobs. In his free time plays football and makes music. Previously he was working for Aptiv to create 3D Gesture Recognition for BMW.',
    },
    {
      name: 'Jakub',
      surname: 'Lang',
      profession: 'Junior Programmer',
      description: 'Ambitious, junior programmer, who abandoned biotechnology for gamedev.',
    },
    {
      name: 'Hubert',
      surname: 'Popławski',
      profession: 'Gameplay Designer',
      description:
        'Passionate about creating immersive in-game solutions and PC hardware. In his spare time busy developing his own game projects and cooking. He created The Before Darkness Falls which was showcased at the BlizzConline event in the User Generated Content Section in 2021. When working on projects, he follows the rule to create games that he would like to play himself.',
    },
    {
      name: 'Artur',
      surname: 'Kulczycki',
      profession: 'Art Director',
      description:
        'Artist with many years of experience in the industry. People person, a man with a big heart! He was working for many established companies, such as Drago Entertainment, Techland, Plot Twist, Awesome Industries and Tate Interactive. He took part in production of the following titles: Lucky Luke, My Horse and Me 2, Lanfeust, Dying Light, Dying Light 2, Dying Light Bad Blood, Drift Zone 2, The Last Case of Benedict Fox.',
    },
    {
      name: 'Aleksandra',
      surname: 'Topolewska',
      profession: 'Character Artist',
      description:
        'Character modeling specialist, fashion designer at Spacewalkers. Passionate about yoga and jogging. Previously she was working on Virtual Reality titles for the VR Factory. Also created assets for games: Ben The Exorcist and MonsterSoft.',
    },
    {
      name: 'Anna',
      surname: 'Wacławek',
      profession: 'HR Manager',
      description:
        'Responsible for HR and contact with business partners. A smiling and cheerful person with a kind word for everyone. Expert in all the formalities, which overwhelm the rest of us - gaming geeks.',
    },
    {
      name: 'Mateusz',
      surname: 'Mucha',
      profession: '2D Graphic Designer, Concept Artist',
      description: "If something doesn't exist, let me draw it! Road racing and bikepacking enthusiast.",
    },
  ];

  var member;
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
