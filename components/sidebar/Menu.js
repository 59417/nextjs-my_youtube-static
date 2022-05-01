import classes from './Menu.module.css';
import MenuIcon from './MenuIcon';
import { MenuIcons } from '../data/data';


function Menu() {
   
    const Icon1 = MenuIcons[0];
    const Icon2 = MenuIcons[1];
    const Icon3 = MenuIcons[2];
    const Icon4 = MenuIcons[3];
    
    return (
        <div className={classes.top}>
            <ul className={classes.container}>
                <MenuIcon className={classes.icon} images={Icon1} />
                <span><b>{Icon1.title}</b></span>
            </ul>
            <ul className={classes.container}>
                <MenuIcon className={classes.icon} images={Icon2} />
                <span><b>{Icon2.title}</b></span>
            </ul>
            <ul className={classes.container}>
                <MenuIcon className={classes.icon} images={Icon3} />
                <span><b>{Icon3.title}</b></span>
            </ul>
            <ul className={classes.container}>
                <MenuIcon className={classes.icon} images={Icon4} />
                <span><b>{Icon4.title}</b></span>
            </ul>
        </div>
    );
}

export default Menu;
