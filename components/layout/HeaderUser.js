import Image from 'next/image';
import classes from './HeaderUser.module.css';
import { HeaderUserIcons } from '../data/data';


function HeaderUser() {
   
    const Icon1 = HeaderUserIcons[0];
    const Icon2 = HeaderUserIcons[1];
    const Icon3 = HeaderUserIcons[2];
    const Icon4 = HeaderUserIcons[3];

    const myLoader = ({ src, width, quality }) => {
        return `${src}?w=${width}&q=${quality || 75}`
    }

    function HeaderIcon (props) {
        return (
            <Image
                loader={myLoader}
                src={props.images.image}
                alt={props.images.title}
                width={props.images.Width}
                height={props.images.Height}
            />
        )
    };
    
    return (
        <div className={classes.top}>
            <HeaderIcon images={Icon1} />
            <HeaderIcon images={Icon2} />
            <HeaderIcon images={Icon3} />
            <img 
                src={Icon4.image} 
                alt={Icon4.title} 
                style={{width: '32px', height: '32px', borderRadius: '16px'}} 
            />
        </div>
    );
}

export default HeaderUser;
