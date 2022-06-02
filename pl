<!DOCTYPE html>
<html lang="pl">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="Spacewalkers is a group of experienced developers working on their debut game inspired by the world created by Polish sci-fi."
    />
    <meta name="keywords" content="spacewalkers, spacewalkers games" />

    <script
      src="https://code.jquery.com/jquery-3.6.0.js"
      integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
      crossorigin="anonymous"
    ></script>
    <script src="https://npmcdn.com/flickity@2/dist/flickity.pkgd.js"></script>
    <script type="text/javascript" src="scripts/index.js"></script>
    <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css" />
    <link rel="stylesheet" href="/css/main.css" />
    <link rel="icon" type="image/jpg" href="assets/images/jpg/header.jpg" />
    <title>Spacewalkers games</title>
  </head>
  <body>
    <div id="home" class="home">
      <header>
        <nav class="nav container">
          <div class="logo">
            <img src="/assets/images/png/logo-spacewalkers.png" alt="logo" class="logo" />
          </div>
          <div class="menu__button">
            <h4 class="menu__text -desktop">menu</h4>

            <div class="hamburger-menu">
              <input id="menu__toggle" type="checkbox" />
              <label class="menu__btn" for="menu__toggle">
                <span></span>
              </label>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <div class="menu__mobile">
          <div class="menu__mobile__wrapper">
            <ul class="menu__mobile__links">
              <li><a href="#hero" class="menu-link">start</a></li>
              <li><a href="#about" class="menu-link">o nas</a></li>
              <li><a href="#interregnum" class="menu-link">interregnum</a></li>
              <li><a href="#games" class="menu-link">nasze gry</a></li>
              <li><a href="#team" class="menu-link">zespół</a></li>
              <li><a href="#eu-projects" class="menu-link">projekty unijne</a></li>
              <li><a href="#banner" class="menu-link">inwestuj</a></li>

              <!-- <li><a href="">career</a></li>
              <li><a href="">blog</a></li>
              <li><a href="">contact</a></li> -->
            </ul>
            <div class="menu__mobile__items">
              <div class="items__wrapper">
                <div class="socials">
                  <h4>Śledź nas</h4>
                  <div class="socials__links">
                    <a href="https://www.facebook.com/SpacewalkersGames" target="_blank">
                      <img src="/assets/images/svg/facebook.svg" alt="facebook" />
                    </a>
                    <a href="https://twitter.com/spcwlkrs" target="_blank">
                      <img src="/assets/images/svg/twitter.svg" alt="twitter" />
                    </a>
                    <a href="https://www.instagram.com/spacewalkers_games/" target="_blank">
                      <img src="/assets/images/svg/instagram.svg" alt="instagram" />
                    </a>
                  </div>
                </div>
                <div class="languages">
                  <h4>Zmiana języka</h4>
                  <table class="lang">
                    <tr>
                      <td class="tdlang">
                        <a href="/">
                          <div id="en" class="button button--lang current_lang">
                            <span> <img src="/assets/images/png/united-states.png" alt="English-flag" /></span>
                          </div>
                        </a>
                      </td>
                      <td class="tdlang">
                        <a href="javascript:window.location.reload(true)">
                          <div id="pl" class="button button--lang">
                            <span><img src="/assets/images/png/poland.png" alt="Polish-flag" /></span>
                          </div>
                        </a>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
              <div class="logos container">
                <p>Projekt współfinansowany przez Unię Europejską</p>
                <div class="logos__items">
                  <img src="/assets/images/png/logo1.png" alt="European logo" />
                  <img src="/assets/images/png/logo2.png" alt="European logo" />
                  <img src="/assets/images/png/logo4.png" alt="European logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="hero-section container" id="hero">
          <div class="hero-section__text hero-section__text--pl">
            <h1>Spradź niezwykłą fabułę <span class="text--gradient">naszych gier</span></h1>
            <p>
              Nasze gry powstają w świecie wykreowanym przez autora bestsellerowej powieści sci-fi "Interregnum"
              Przemysława Kardę. W tym uniwersum chodzi tylko o przetrwanie. Ziemia została skuta lodem, a pozostałe
              przy życiu szczątki ludzkości walczą żeby dożyć następnego dnia. Wszystkiemu przyglądają się zaawansowane,
              obce cywilizacje, które toczą wojnę o dużo większą stawkę niż nasza planeta.
            </p>
            <a href="https://tecra.space/spacewalkers-project" target="_blank">
              <div class="button">
                <span>inwestuj</span>
              </div>
            </a>
          </div>
          <div class="socials">
            <a href="https://www.facebook.com/SpacewalkersGames" target="_blank">
              <img src="/assets/images/svg/facebook.svg" alt="facebook" />
            </a>
            <a href="https://twitter.com/spcwlkrs" target="_blank">
              <img src="/assets/images/svg/twitter.svg" alt="twitter" />
            </a>
            <a href="https://www.instagram.com/spacewalkers_games/" target="_blank">
              <img src="/assets/images/svg/instagram.svg" alt="instagram" />
            </a>
          </div>
        </section>
        <div class="page-content">
          <section class="about container" id="about">
            <div class="about__text">
              <span class="decor">O nas</span>
              <h2>Tworzenie gier <span class="text--gradient">dla rozrywki </span><br />i korzyści!</h2>
              <p>
                Spacewalkers to grupa doświadczonych game developerów pracująca nad debiutancką grą osadzoną w świecie
                Interregnum, stworzonym przez polskiego pisarza.
              </p>
              <p>
                Jako zespół mamy łącznie dekady doświadczenia zdobyte przy pracy nad wieloma komercyjnymi projektami, w
                czołowych polskich studio. Zdecydowaliśmy się połączyć nasze umiejętności i pasje żeby wspólnie osiągnąć
                jeszcze więcej i wydawać najlepsze, niezależne gry.
              </p>
              <a href="https://www.spacewalkers.games/blog" target="_blank">
                <div class="button">
                  <span>sprawdź nasz blog</span>
                </div>
              </a>
            </div>
            <div class="about__image">
              <img src="/assets/images/png/imagesComposition.png" alt="" />
            </div>
          </section>

          <section id="interregnum" class="about about__book container" id="about">
            <div class="about__text">
              <span class="decor">Na temat książki</span>
              <h2>Gry w zapierającym dech w piersiach <span class="text--gradient">świecie Interregnum</span></h2>
              <p>
                Rok 2013, Genewa, Europejski ośrodek badań jądrowych CERN. Dwoje naukowców, doktor Monika Eden i doktor
                Robert Jarecki, rozpędza neutrina mionowe powyżej prędkości światła, podważając tym samym trafność
                teorii względności Einsteina. Ich odkrycie burzy obowiązujące prawa fizyki, a wzmagający się sprzeciw
                środowiska naukowego jest silniejszy, niż się spodziewali. Wkrótce się okazuje, że to zaledwie początek
                ich problemów.
              </p>
              <p>
                Postępujący rozkład cywilizacji staje się faktem, a w miejsce starego ładu wkraczają nowe paradygmaty.
                Fala zmian przelewa się przez świat, który nieuchronnie pogrąża się w Interregnum.
              </p>
              <a href="https://www.youtube.com/watch?v=hdLl2lqtAdc" target="_blank">
                <div class="button">
                  <span>sprawdź zwiastun</span>
                </div>
              </a>
            </div>
            <div class="about__image">
              <img src="/assets/images/jpg/interregnum.jpg" alt="interregnum" />
            </div>
          </section>

          <section class="games container" id="games">
            <div class="games__text">
              <h2>nasze gry</h2>
              <p>
                Jesteśmy zdeterminowani, aby dostarczyć graczom innowacyjną i znaczącą rozgrywkę zarówno na PC, jak i na
                konsolach. Naszym celem jest tworzenie gier w jakości premium AA przy jednoczesnym zachowaniu swobody w
                tworzeniu niekonwencjonalnych doświadczeń.
              </p>
            </div>
            <div class="-mobile">
              <div class="game__items">
                <div class="game__item">
                  <div class="game__item__text">
                    <span class="decor">Interregnum Chronicles:</span>
                    <h2>signal</h2>
                    <a href="https://store.steampowered.com/app/1640710/Interregnum_Chronicles_Signal/" target="_blank">
                      <div class="buttonSimple"></div>
                    </a>
                  </div>
                  <div class="game__item__image">
                    <img src="/assets/images/png/signal.png" alt="signal" />
                  </div>
                </div>
                <div class="game__item">
                  <div class="game__item__text">
                    <span class="decor">Interregnum Chronicles:</span>
                    <h2>False Prophet</h2>
                    <a href="https://www.youtube.com/watch?v=aiAID0BTpSw" target="_blank">
                      <div class="buttonSimple"></div>
                    </a>
                  </div>
                  <div class="game__item__image">
                    <img src="/assets/images/png/falseProphet.png" alt="False Prophet" />
                  </div>
                </div>
                <!-- <div class="game__item">
                <div class="game__item__text">
                  <span class="decor">Interregnum Chronicles:</span>
                  <h2>World Collapse</h2>
                  <div class="buttonSimple"></div>
                </div>
                <div class="game__item__image">
                  <img src="/assets/images/png/worldCollapse.png" alt="False Prophet" />
                </div>
              </div> -->
              </div>
            </div>
            <div class="-desktop">
              <div class="main-carousel game__items">
                <div class="carousel-cell">
                  <div class="game__item">
                    <div class="game__item__text">
                      <span class="decor">Interregnum Chronicles:</span>
                      <h2>signal</h2>
                      <a
                        href="https://store.steampowered.com/app/1640710/Interregnum_Chronicles_Signal/"
                        target="_blank"
                      >
                        <div class="buttonSimple"></div>
                      </a>
                    </div>
                    <div class="game__item__image">
                      <img src="/assets/images/png/signal.png" alt="signal" />
                    </div>
                  </div>
                </div>
                <div class="carousel-cell">
                  <div class="game__item">
                    <div class="game__item__text">
                      <span class="decor">Interregnum Chronicles:</span>
                      <h2>False Prophet</h2>
                      <a href="https://www.youtube.com/watch?v=aiAID0BTpSw" target="_blank">
                        <div class="buttonSimple"></div>
                      </a>
                    </div>
                    <div class="game__item__image">
                      <img src="/assets/images/png/falseProphet.png" alt="False Prophet" />
                    </div>
                  </div>
                </div>
                <!-- <div class="carousel-cell">
                <div class="game__item">
                  <div class="game__item__text">
                    <span class="decor">Interregnum Chronicles:</span>
                    <h2>World Collapse</h2>
                    <div class="buttonSimple"></div>
                  </div>
                  <div class="game__item__image">
                    <img src="/assets/images/png/worldCollapse.png" alt="False Prophet" />
                  </div>
                </div>
              </div> -->
              </div>
            </div>
          </section>
          <section class="team container" id="team">
            <div class="team__text">
              <div class="team__text__wrapper">
                <span class="decor">Spacewalkers</span>
                <h2>zespół</h2>
              </div>
              <div class="team__text__wrapper">
                <p>
                  Jesteśmy zdeterminowani, aby dostarczyć graczom innowacyjną i znaczącą rozgrywkę zarówno na PC, jak i
                  na konsolach. Naszym celem jest tworzenie gier w jakości premium AA przy jednoczesnym zachowaniu
                  swobody w tworzeniu niekonwencjonalnych doświadczeń.
                </p>
              </div>
            </div>
            <div class="team__items"></div>
          </section>

          <section class="eu-projects container" id="eu-projects">
            <div class="eu-projects__text">
              <span class="decor">dofinansowania</span>
              <h2>Projekty Unijne</h2>
              <p>
                SPACEWALKERS Sp. z o.o. realizuje innowacyjny projekt badawczy pn.
                <span class="eu-projects__text--bold"
                  >„Inteligentny system kreacji map do gier 3D oparty na platformie Unreal Engine wykorzystujący
                  techniki uczenia maszynowego”</span
                >
                w ramach programu sektorowego GAME INN (POIR 1.2. GAME INN), współfinansowanego przez Narodowe Centrum
                Badań i Rozwoju ze środków Unii Europejskie.
              </p>
              <p>
                <span class="eu-projects__text--bold">
                  SPACEWALKERS – projekt badawczy:<br />
                  Koszt całkowity projektu (koszty kwalifikowalne): 11 013 701,62 PLN <br />
                  Łączna kwota dofinansowania: 8 255 262,71 PLN <br
                /></span>
              </p>
              <p>
                W ramach projektu prowadzone są badania przemysłowe, eksperymentalne prace rozwojowe oraz prace
                przedwdrożeniowe. Rezultatem projektu będzie innowacyjne narzędzie pozwalające na półautomatyczne
                tworzenie nowych poziomów do gier we współpracy z projektantem poziomów. System będzie unikalnym
                rozwiązaniem na skalę międzynarodową.
              </p>
              <p>
                Odbiorcami projektu będą przede wszystkim producenci gier komputerowych, dla których to narzędzie będzie
                sposobem na zmniejszenie kosztów produkcji oraz tworzenie gier opartych o dynamiczną kreacje map w
                trakcie rozgrywki. Inteligentny system kreacji map zostanie wykorzystany przy produkcji gry
                <span class="eu-projects__text--bold">Interregnum Chronicles: False Prophet</span> , Odbiorcami projektu
                będą przede wszystkim producenci gier komputerowych, dla których to narzędzie będzie sposobem na
                zmniejszenie kosztów produkcji oraz tworzenie gier opartych o dynamiczną kreacje map w trakcie
                rozgrywki. Inteligentny system kreacji map zostanie wykorzystany przy produkcji gry.
              </p>
              <p>
                W skład kadry zarządzającej wchodzi
                <span class="eu-projects__text--bold">Tomasz Wacławek</span> (Kierownik zarządzający projektem, CEO)
                oraz <span class="eu-projects__text--bold">Maksymilian Strzelecki</span> (Zastępca Kierownika
                zarządzającego). Oboje posiadają bogate doświadczenie w świecie produkcji gier. Czerpiąc ze swojego
                doświadczenia z branży gier komputerowych od ponad roku kierują projektem, gdzie wraz z zespołem tworzą
                rozwiązanie na tyle modularne i uniwersalne, a jednocześnie dostatecznie sprecyzowane, aby trafić do
                odpowiednio dużej grupy odbiorców, tj. producentów gier gatunku Action/Shooter/RPG/Strategy.
              </p>
              <p>Realizacja projektu ma zakończyć się w II kwartale 2023 roku.</p>
              <div class="eu-projects__wrapper">
                <img class="eu-projects__image" src="/assets/images/png/Flag_of_Europe.png" alt="eu-flag" />
              </div>
            </div>
          </section>
          <div class="banner" id="banner">
            <div class="banner__wrapper container">
              <div class="banner__top">
                <span class="decor">Zainwestuj w gry </span>
                <h2>
                  gry stanowią<br />
                  duży potencjał <span class="text--gradient">inwestycyjny</span>
                </h2>
                <a href="https://tecra.space/spacewalkers-project" target="_blank">
                  <div class="button">
                    <span>inwestuj</span>
                  </div>
                </a>
              </div>
              <div class="banner__bottom">
                <p>
                  Nasze gry w Spacewalkers Studio powstają z pomocą zaangażowanej społeczności na platformie
                  crowdfundingowej <a href="https://tecra.space/spacewalkers-project">tecra.space</a>. Sprawdź w jaki
                  sposób możesz zarobić na tworzeniu gier!
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer class="footer container" id="footer">
        <div class="footer__outer">
          <div class="sitemap">
            <h4>mapa strony</h4>
            <div class="sitemap__links">
              <ul>
                <li><a href="#about">O nas</a></li>
                <li><a href="#interregnum">interregnum</a></li>
                <li><a href="#games">Nasze gry</a></li>
                <li><a href="#team">zespół</a></li>
                <li><a href="#eu-projects">projekty unijne</a></li>
              </ul>
              <ul>
                <li><a href="#hero">start</a></li>
                <li><a href="https://tecra.space/spacewalkers-project" target="_blank">inwestuj</a></li>
                <!-- <li><a href="">career</a></li>
                <li><a href="">contact</a></li> -->
              </ul>
            </div>
          </div>
          <div class="footer__inner">
            <div class="keepInTouch">
              <h4>Kontakt</h4>
              <p>Masz pytania? Poniżej znajdują się nasze dane kontaktowe.</p>
              <a href="mailto: hello@spacewalkers.games">
                <div class="button">
                  <span>napisz do nas</span>
                </div>
              </a>
            </div>
            <div class="footer__wrapper">
              <div class="location">
                <h4>Lokalizacja biura</h4>
                <p>
                  Spacewalkers Studios <br />
                  ul. Zabłocie 25/10, <br />
                  30-701 Kraków, Poland
                </p>
                <a href="mailto: hello@spacewalkers.games" class="link">hello@spacewalkers.games</a><
              </div>
              <div class="socials">
                <h4>Śledź nas</h4>
                <div class="socials__links">
                  <a href="https://www.facebook.com/SpacewalkersGames" target="_blank">
                    <img src="/assets/images/svg/facebook.svg" alt="facebook" />
                  </a>
                  <a href="https://twitter.com/spcwlkrs" target="_blank">
                    <img src="/assets/images/svg/twitter.svg" alt="twitter" />
                  </a>
                  <a href="https://www.instagram.com/spacewalkers_games/" target="_blank">
                    <img src="/assets/images/svg/instagram.svg" alt="instagram" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer__inner footer__inner--copyright">
          <div class="logo">
            <img src="/assets/images/png/logo-spacewalkers.png" alt="spacewalkers-logo" class="logo" />
          </div>
          <div class="copyright">
            <p>© 2022 Spacewalkers Studios. Wszystkie prawa zastrzeżone.</p>
            <p>
              Design: <a href="https://rebornlab.com/" target="_blank"><span>REBORN</span></a>
            </p>
          </div>
        </div>
      </footer>
      <div class="logos container">
        <p>Projekt współfinansowany przez Unię Europejską</p>
        <div class="logos__items">
          <img src="/assets/images/png/logo1.png" alt="European logo" />
          <img src="/assets/images/png/logo2.png" alt="European logo" />
          <img src="/assets/images/png/logo4.png" alt="European logo" />
        </div>
      </div>
    </div>
  </body>
</html>
