import { TypeAnimation } from 'react-type-animation';
import { Button } from '../../atoms/Button';

const listMenu = [
  {
    link: '#',
    title: 'Why join us',
  },
  {
    link: '#',
    title: 'The founders',
  },
  {
    link: '#',
    title: 'Beta info',
  },
];

const listSocial = [
  {
    link: '#',
    title: 'X',
  },
  {
    link: '#',
    title: 'IG',
  },
  {
    link: '#',
    title: 'YT',
  },
];
export const Header = () => {
  return (
    <div className="parallax">
      <header className="primary-header">
        <div className="wrapper-app">
          <div className="primary-header__inner">
            <div className="logo">
              <img src="assets/Logo.webp" alt="" />
            </div>
            <nav className="primary-nav">
              <ul role="list">
                {listMenu.map((item) => (
                  <li className="cursor-pointer hover:opacity-50">
                    <a href={item.link}>{item.title}</a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex-group" aria-label="social links">
              {listSocial.map((item) => (
                <a href={item.link}>{item.title}</a>
              ))}
            </div>
          </div>
        </div>
      </header>
      <div className="hero">
        <div className="wrapper-app">
          <h1 className="hero__title">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ">
              Hi, I'm
            </span>
            <TypeAnimation
              sequence={[
                'Dolor tenetur error similique',
                1000,
                'Sequi laudantium quaerat',
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '4rem', display: 'inline-block' }}
              repeat={Infinity}
            />
          </h1>
          <Button type="submit">Sign up for beta</Button>
        </div>
      </div>

      <img className="parallax__bg" src="assets/bg.jpg" alt="" />
      <img className="parallax__dust" src="assets/dust.webp" alt="" />
      <img
        className="parallax__foreground-back"
        src="assets/foreground-back.webp"
        alt=""
      />
      <img
        className="parallax__foreground-front"
        src="assets/foreground-front.webp"
        alt=""
      />
      <img className="parallax__jax" src="assets/jax.webp" alt="" />
      <img className="parallax__luna" src="assets/luna.webp" alt="" />
      <img className="parallax__manny" src="assets/manny.webp" alt="" />
      <img className="parallax__rays" src="assets/rays.webp" alt="" />
    </div>
  );
};
