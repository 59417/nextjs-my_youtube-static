import { Fragment } from 'react';
import classes from './VideoDescription.module.css';

function VideioDescroption(props) {
    const channel = props.channel;
    return (
        <Fragment>
            <div className={classes.container}>
                <div className={classes.channel_icon}>
                    <img 
                        src={channel.icon} 
                        alt={channel.channel} 
                        style={{width: '36px', height: '36px', borderRadius: '25px'}} 
                    />
                </div>
                <div className={classes.channel_data}>
                    <h6 style={{marginBottom: '2px'}}>{channel.title}</h6>
                    <p>{channel.description}</p>
                    <p>20萬人觀看・3小時前</p>
                </div>
            </div>
        </Fragment>
    );
};

export default VideioDescroption;