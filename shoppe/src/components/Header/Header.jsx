import '../Header/header.scss';
import logo from '../img/header/logo.svg';
import search from '../img/header/search.svg';
import cart from '../img/header/cart.svg';
import profile from '../img/header/profile.svg';
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__content-logo">
            <img className="logo__img" src={logo} alt="logo" />
          </div>
          <nav className="header__content-nav">
            <ul className="header__content-categories">
              <li className="header__content-category">Shop</li>
              <li className="header__content-category">Blog</li>
              <li className="header__content-category">Our Story</li>
            </ul>
            <span className="header__content-span">|</span>
            <div className="header__content-icons">
              <img className="icon__img" src={search} alt="search" />
              <img className="icon__img" src={cart} alt="cart" />
              <img className="icon__img" src={profile} alt="profile" />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
