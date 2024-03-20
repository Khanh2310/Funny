import { Button } from '../../atoms/Button';

export const Header = () => {
  return (
    <div className="parallax">
      <header className="primary-header">
        <div className="wrapper">
          <div className="primary-header__inner">
            <div className="logo">
              <img src="assets/Logo.webp" alt="" />
            </div>
            <nav className="primary-nav">
              <ul role="list">
                <li>
                  <a href="#">Why join us</a>
                </li>
                <li>
                  <a href="#">The founders</a>
                </li>
                <li>
                  <a href="#">Beta info</a>
                </li>
              </ul>
            </nav>
            <div className="flex-group" aria-label="social links">
              <a href="#">X</a>
              <a href="#">IG</a>
              <a href="#">YT</a>
            </div>
          </div>
        </div>
      </header>
      <div className="hero">
        <div className="wrapper">
          <h1 className="hero__title">
            <span>Gear up!</span> We're going monster hunting!
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
