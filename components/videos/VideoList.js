//import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Fragment } from 'react';
import Video from './Video';
import classes from './VideoList.module.css';


function VideoList(props) {
  return (
    <Fragment>
      <div className={classes.video_container}>
        <div className="columns is-multiline is-desktop pr-5">
            {props.videos.map((video) => (
                <div className="column is-3" key={video.id}>
                  <div className={classes.container}>
                    <span className={classes.videotime}>
                        <p>{video.time}</p>
                    </span>
                    <Video
                      key={video.id}
                      id={video.id}
                      image={video.image}
                      title={video.title}
                      channel={video.channel}
                      description={video.description}
                      time={video.time}
                      icon={video.icon}
                    />
                  </div>
                </div>
            ))}
        </div>
      </div>
    </Fragment>
  );
};


export default VideoList;
