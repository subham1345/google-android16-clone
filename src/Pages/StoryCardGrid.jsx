import React from 'react';
import './StoryCardGrid.css';
// import Storyimg1 from "./assets/Storyimg.png"

const stories = [
  {
    date: "JUN 25",
    tag: "AI",
    title: "5 tips for getting started with Flow",
    image: "/Storyimg1.png"
  },
  {
    date: "JUN 25",
    tag: "SHOPPING",
    title: "4 ways to shop and save this summer",
    image: "/images/story2.png"
  },
  {
    date: "JUN 25",
    tag: "DEVELOPERS",
    title: "Gemini CLI: your open-source AI agent",
    image: "/images/story3.png"
  },
  {
    date: "JUN 24",
    tag: "CHROME",
    title: "You can now move your Chrome address bar to the bottom of your Android screen.",
    image: "/images/story4.png"
  },
  {
    date: "JUN 24",
    tag: "GOOGLE EARTH",
    title: "Guess the city skyline in Google Earth",
    image: "/images/story5.png"
  },
  {
    date: "JUN 24",
    tag: "GOOGLE EARTH",
    title: "See these 10 cities transform over time in Google Earth.",
    image: "/images/story6.png"
  },
  {
    date: "JUN 24",
    tag: "GOOGLE EARTH",
    title: "Our favorite moments from 20 years of Google Earth",
    image: "/images/story7.png"
  },
  {
    date: "JUN 24",
    tag: "UK",
    title: "Protecting innovation and growth in the UK",
    image: "/images/story8.png"
  },
  {
    date: "JUN 23",
    tag: "AI",
    title: "Ask a Techspert: What is inference?",
    image: "/images/story9.png"
  }
];

const StoryCardGrid = () => {
  return (
    <div className="story-wrapper">
      <h2>All stories</h2>
      <div className="story-grid">
        {stories.map((story, index) => (
          <div className="story-card" key={index}>
            <div className="story-text">
              <span className="story-date">{story.date} · <span className="story-tag">{story.tag}</span></span>
              <p>{story.title}</p>
            </div>
            <img src={story.image} alt="IMG" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoryCardGrid;
