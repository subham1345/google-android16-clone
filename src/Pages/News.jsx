import React from 'react';
import Newsdata1 from '../componate/Newsdata1';
import GoogleEarthCards from './pagedata/GoogleEarthCards';
import Newsimgpart from './Newsimgpart';
import Newstext2 from './Newstext2';
import GeminiNews from './GeminiNews';
import StoryCardGrid from './StoryCardGrid';
import Newsfooter from './Newsfooter';
import VideoSpotlight from './VideoSpotlight';


const News = () => {
  return (
   <>
   {/* <Newsdata1/> */}
   <Newsimgpart/>
   <GoogleEarthCards/>
   <Newstext2/>
   <VideoSpotlight/>
   <GeminiNews/>
   <StoryCardGrid/>
   <Newsfooter/>
   </>
  );
};

export default News;