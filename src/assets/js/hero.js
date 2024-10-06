// import './anime.min.js';

/** @type {import('animejs')} */
const anime = window.anime;

// IIFE for animation setup
(function () {
  // ANCHOR - Mobile Hero Swap

  function swapHeroAtMobile(animationsToToggle = []) {
    const hero = document.querySelector('.hero');
    const heroMobile = document.querySelector('.hero-mobile');
    const isMobile = window.matchMedia('(max-width: 550px)').matches;
    if (isMobile) {
      animationsToToggle.forEach((animation) => animation.pause());
      hero.style.display = 'none';
      heroMobile.style.display = 'block';
      return;
    }
    hero.style.display = 'block';
    heroMobile.style.display = 'none';
    animationsToToggle.forEach((animation) => animation.play());
  }

  // if user doesn't want animation, stop here
  if (window.matchMedia('(prefers-reduced-motion)').matches) {
    swapHeroAtMobile();
    window.addEventListener('resize', () => swapHeroAtMobile());
    return;
  }

  // ANCHOR - Solar System Animation

  const solarSystem = document.getElementById('solar-system');

  const solarSystemAnim = anime({
    targets: [...solarSystem.children].map((body) => body.children[0]),
    translateY: () => [anime.random(-20, 10), anime.random(10, 30)],
    duration: () => anime.random(2500, 4000),
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
  });

  // ANCHOR - Sparkle Animation

  const sparkles = document.getElementById('sparkle');

  const sparklesAnim = anime({
    targets: [...sparkles.children].reverse(),
    opacity: [0, 1, 0],
    duration: 4500,
    loop: true,
    easing: 'steps(1)',
    delay: anime.stagger(500),
  });

  // ANCHOR - Rocket Animation

  const rocket = document.getElementById('rocket');
  const cloud = document.getElementById('cloud');
  const exhaust = document.getElementById('exhaust');
  const exhaustLeft = exhaust.children[0];
  const exhaustCenter = exhaust.children[1];
  const exhaustRight = exhaust.children[2];

  rocket.addEventListener('click', () => {
    rocket.style.transform = 'translateX(229.67px) translateY(206.93px)';
    exhaust.style.transform = 'translateX(6.88px) translateY(583.62px)';

    anime({
      targets: cloud,
      translateX: [5, -5],
      loop: true,
      direction: 'alternate',
      easing: 'linear',
      duration: 100,
    });

    anime({
      targets: [exhaustLeft, exhaustRight],
      translateY: [-10, 10],
      fill: ['#fff', '#ffffe6'],
      loop: true,
      direction: 'alternate',
      easing: 'linear',
      duration: 100,
    });

    const tl = anime.timeline();

    tl.add({
      targets: cloud,
      opacity: 1,
      duration: 100,
      easing: 'linear',
    });

    tl.add({
      targets: rocket,
      translateY: -1100,
      duration: 4000,
      easing: 'easeInSine',
    });

    tl.add(
      {
        targets: cloud,
        opacity: 0,
        duration: 400,
        easing: 'linear',
      },
      2000,
    );

    tl.add(
      {
        targets: exhaust,
        translateY: 680,
        duration: 1,
        easing: 'linear',
      },
      1000,
    );
  });

  // ANCHOR - Donut Animation

  const donutBefore = document.getElementById('donut-before');
  const donutAfter = document.getElementById('donut-after');

  donutAfter.addEventListener('click', () => {
    donutAfter.style.transformOrigin = '150px 200px';
    donutBefore.style.transformOrigin = '150px 200px';

    donutAfter.style.transform = 'translate(667.33px, 1245.92px)';
    donutBefore.style.transform = 'translate(667.33px, 1245.92px)';

    let fired = false;

    anime({
      targets: [donutAfter, donutBefore],
      scale: [1, 1.2, 1],
      easing: 'easeOutSine',
      duration: 250,
      update: (anim) => {
        if (Math.round(anim.progress) >= 50 && !fired) {
          donutAfter.style.opacity =
            donutAfter.style.opacity === '1' ? '0' : '1';
          donutBefore.style.opacity =
            donutAfter.style.opacity === '1' ? '0' : '1';
          fired = true;
        }
      },
    });
  });

  // ANCHOR - Coffee Animation

  const coffeeBefore = document.getElementById('coffee-before');
  coffeeBefore.style.opacity = '1';
  const coffeeAfter = document.getElementById('coffee-after');
  coffeeAfter.style.opacity = '0';

  coffeeAfter.addEventListener('click', () => {
    coffeeBefore.style.opacity = coffeeBefore.style.opacity === '1' ? '0' : '1';
    coffeeAfter.style.opacity = coffeeAfter.style.opacity === '1' ? '0' : '1';
  });

  // ANCHOR - Mobile Hero Swap on resize

  swapHeroAtMobile([solarSystemAnim, sparklesAnim]);
  window.addEventListener('resize', () =>
    swapHeroAtMobile([solarSystemAnim, sparklesAnim]),
  );
})();
