import { Fragment } from "react";
import Head from 'next/head';
import classes from '../styles/Home.module.css';
import Menu from "../components/sidebar/Menu";
import VideoList from "../components/videos/VideoList";
import { DUMMY_VIDEOS } from '../components/data/data';


function HomePage() {
  return (
    <Fragment>
      <Head>
          <title>My Youtube</title>
          <meta 
              name="description" 
              content="Practice creating my own youtube homepage." 
          />
      </Head>
      <div className={classes.body}>
        <div>
          <Menu/>
        </div>
        <div className={classes.videos}>
          <VideoList videos={DUMMY_VIDEOS} />
        </div>
      </div>
    </Fragment>
  )
};


export default HomePage;