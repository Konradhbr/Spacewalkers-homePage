$(document).ready(function () {
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
  //  [Hero-carrousel]
  //=============================
  var $carousel = $('.main-carousel').flickity({
    contain: true,
    pageDots: false,
    prevNextButtons: false,
    groupCells: true,
    groupCells: 2,
    pageDots: false,
    prevNextButtons: false,
  });

  $('.button-group').on('click', '.button-carrousel', function () {
    var index = $(this).index();
    $carousel.flickity('select', index);
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
      description: 'Designer and coder with extensive industry experience. Making games for fun and profit!',
    },
    {
      name: 'Patryk',
      surname: 'Karwat',
      profession: 'Audio Production',
      description: 'Composer and Sound Designer with focus on games and animations. Great watermelon enjoyer.',
    },
    {
      name: 'Mateusz',
      surname: 'Stolarczyk',
      profession: 'Level Artist',
      description: 'Geek, guitarist and sabre fencer. Responsible for level design and environment art.',
    },
    {
      name: 'Maksymilian',
      surname: 'Strzelecki',
      profession: 'Senior Programmer',
      description:
        'Makes sure the AI doesn’t kill us all (yet). Huge nerd, loves playing League of Legends in his spare time.',
    },
    {
      name: 'Maciej',
      surname: 'Szajkowski',
      profession: '2D/3D Graphic Designer',
      description: 'Concept artist, illustrator and aspiring 3D artist. A man who never gives up.',
    },
    {
      name: 'Kamil',
      surname: 'Błaszkiewicz',
      profession: 'Marketing Manager',
      description:
        'Responsible for content creation, social media, and marketing related operations. Gamer, streamer and a cat dad. Rock music addict.',
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
      description: 'Experienced coder with a calm attitude. Enjoys seeing his creations come to life.',
    },
    {
      name: 'Jarosław',
      surname: 'Jaźwiecki',
      profession: 'Programmer',
      description:
        'Creates Machine Learning models, makes sure the AI will take our jobs. Tries to play football and make music.',
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
        'Passionate about creating immersive in-game solutions and PC hardware. In his spare time busy developing his own game projects and cooking.',
    },
    {
      name: 'Artur',
      surname: 'Kulczycki',
      profession: 'Art Director',
      description: 'Artist with many years of experience in the industry. People person, a man with a big heart!',
    },
    {
      name: 'Aleksandra',
      surname: 'Topolewska',
      profession: 'Character Artist',
      description:
        'Character modeling specialist, fashion designer at Spacewalkers. Passionate about yoga and jogging.',
    },
    {
      name: 'Anna',
      surname: 'Wacławek',
      profession: 'HR Manager',
      description:
        'Responsible for HR and contact with business partners. A smiling and cheerful person with a kind word for everyone.',
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
