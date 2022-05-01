import Link from 'next/link';
import classes from './MainNavigation.module.css';
import SearchBar from './SearchBar';
import HeaderUser from './HeaderUser';


function MainNavigation() {

  return (
    <header className={classes.header}>

      <div className={classes.left}>
        <img className={classes.menu_icon} src="menu.svg" alt="Menu" />
        <div className={classes.logo}>
          <img className={classes.logo_icon} src="my-yt-logo.png" alt="Logo" />
          <div className={classes.logo_txt}>MyYouTube</div>
        </div>
      </div>

      <div className={classes.middle}>
        <SearchBar />
        <nav>
          <ul>
            <li>
              <Link href='/'>Collections</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className={classes.right}>
        <HeaderUser />
      </div>

    </header>
  );
}

export default MainNavigation;
