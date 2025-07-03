import "./VideoSpotlight.css";

const VideoSpotlight = () => {
  return (
    <div className="video-data">
      <h2>Video spotlight</h2>
      <div className="left-side1">
        <div className="leftside-text">
          <iframe
            width="640"
            height="360"
            src="https://www.youtube.com/embed/HEs9miwtwh4?si=9bzFTHXf1kdwwMWI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="rightside-text">
          <h4>Darren Aronofsky x Google DeepMind: The making of "ANCESTRA"</h4>
          <p>
            {" "}
            Director Darren Aronofsky is embarking on a collaboration with
            Google DeepMind to produce three films that push the boundaries of
            AI and filmmaking.
          </p>
        </div>
      </div>

      <div className="morevideo">
        <h4>More Video</h4>
        <div className="moreContainer">
          <div >
            {" "}
            <iframe
              width="340"
              height="260"
              src="https://www.youtube.com/embed/HEs9miwtwh4?si=9bzFTHXf1kdwwMWI"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <div className="desc">
              <p>
                Darren Aronofsky x Google DeepMind: The making of "ANCESTRA"
              </p>
            </div>
          </div>

          <div>
            <iframe
              width="340"
              height="260"
              src="https://www.youtube.com/embed/HEs9miwtwh4?si=9bzFTHXf1kdwwMWI"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <div className="desc">

            <p>Reflection Point: Inside an AI-inspired sculpture</p>
            </div>
          </div>

          <div>
            <iframe
              width="340"
              height="260"
              src="https://www.youtube.com/embed/HEs9miwtwh4?si=9bzFTHXf1kdwwMWI"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
             <div className="desc" >

            <p>Project Astra's visual interpreter </p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSpotlight;
