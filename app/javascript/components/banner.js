import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["All you need is cocktail!", "Drink, drink and drink again"],
    typeSpeed: 50,
    loop: true
  });
};

export { loadDynamicBannerText };
