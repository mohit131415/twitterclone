import { useState, useEffect } from "react";
import TweetEngagement from "./TweetEngagement";
import PropTypes from "prop-types";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap
  }
  return array;
}

function TweetList({ tweets: initialTweets }) {
  TweetList.propTypes = {
    tweets: PropTypes.array.isRequired,
  };

  const [tweets, setTweets] = useState(initialTweets);
  const [loadedMedia, setLoadedMedia] = useState({});

  // Simulate fetching data
  useEffect(() => {
    const fetchTweets = () => {
      setTimeout(() => {
        const shuffledTweets = shuffleArray([...initialTweets]); // Shuffle tweets
        setTweets(shuffledTweets); // Simulate API fetching
      }, 1000); // Simulate a 1-second loading time
    };

    fetchTweets();
  }, [initialTweets]);

  const handleMediaLoaded = (id) => {
    setLoadedMedia((prev) => ({ ...prev, [id]: true }));
  };

  // Utility function to determine if the media is an image or video
  const isImage = (url) => /\.(jpg|jpeg|png|gif|webp)$/i.test(url);
  const isVideo = (url) => /\.(mp4|webm|ogg)$/i.test(url);

  return (
    <div>
      <ul className="tweet-list">
        {tweets.map((tweet) => (
          <li key={tweet.id} className="tweet-item">
            <img
              className="tweet-avatar"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXK50_He6FefRJX9bL996m2gGhkKsUzWbDnA&s"
              alt={`${tweet.name}'s avatar`}
            />
            <div className="tweet-content">
              <div className="tweet-header">
                <span className="tweet-name">ShreeDeepak Kalal</span> 
                <span className="tweet-username">@ShreeDeepak</span>
                <span className="tweet-time">· 1s</span>
              </div>
              <p className="tweet-text">{tweet.text}</p>

              {tweet.image ? (
                <>
                  {!loadedMedia[tweet.id] && (
                      <svg
                        className="animate-spin h-5 w-5 text-gray-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        ></path>
                      </svg>
                  )}

                  {isImage(tweet.image) && (
                    <img
                      className="tweet-image"
                      src={tweet.image}
                      alt="Tweet visual"
                      onLoad={() => handleMediaLoaded(tweet.id)}
                      style={{ display: loadedMedia[tweet.id] ? "block" : "none" }}
                    />
                  )}
                  {isVideo(tweet.image) && (
                    <video
                      className="tweet-video"
                      controls
                      onLoadedData={() => handleMediaLoaded(tweet.id)}
                      style={{ display: loadedMedia[tweet.id] ? "block" : "none" }}
                    >
                      <source src={tweet.image} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </>
              ) : (
                <p className="no-media"></p>
              )}

              <TweetEngagement />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TweetList;
