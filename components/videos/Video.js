import VideoContainer from './VideoContainer';
import VideoImage from './VideoImage';
import VideioDescription from './VideoDescription';
import classes from './Video.module.css';


function Video(props) {
    return (
        <VideoContainer className={classes.container}>
            <VideoImage images={props} />
            <div className={classes.content}>
                <VideioDescription channel={props} />
            </div>       
        </VideoContainer>
    );
}

export default Video;


