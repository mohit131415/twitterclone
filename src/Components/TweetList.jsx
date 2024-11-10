import { useState, useEffect } from "react";
import TweetEngagement from "./TweetEngagement";
import PropTypes from "prop-types";

// Simulating JSON data (static data)
const tweetData = [
  {
    id: 1,
    avatar: "https://plus.unsplash.com/premium_photo-1682089892133-556bde898f2c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3R1ZGVudCUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    name: "bablu",
    username: "@missbablu",
    time: "6h",
    text: "A Ferrari tire explodes while the car hits top speed😳",
    mediaType: "image", // Specify the type of media
    media: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvVvGbOKTtnyRMPG95ffXPJ2WkLCoulvq2xA&s"
  },
  {
    id: 2,
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOFk5Xj1hHFAQOKgA51kHrb0NEpJ0R53giHg&s",
    name: "bablu",
    username: "@missbablu",
    time: "6h",
    text: "The video of the explosion is going viral! 📹",
    mediaType: "video", // Specify video type
    media: "https://www.w3schools.com/html/mov_bbb.mp4" // Example video
  },
  {
    id: 3,
    avatar: "https://plus.unsplash.com/premium_photo-1682089892133-556bde898f2c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3R1ZGVudCUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    name: "bablu",
    username: "@missbablu",
    time: "6h",
    text: "No media attached in this tweet.",
    mediaType: "image",
    media: "  "
  },
  {
    id: 4,
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZjrrPf1mmchu3DdQmLpu6Nwt-JplJQa4o4w&s",
    name: "bablu",
    username: "@missbablu",
    time: "6h",
    text: "No media attached in this tweet.",
    mediaType: "video",
    media:"/videos/ayaan_bhai.mp4"
  },
  {
    id: 5,
    avatar: "https://plus.unsplash.com/premium_photo-1682089892133-556bde898f2c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3R1ZGVudCUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    name: "bablu",
    username: "@missbablu",
    time: "6h",
    text: "No media attached in this tweet.",
    mediaType: "video",
    media: "/videos/sher.mp4"
  },
  {
    id: 6,
    avatar: "https://plus.unsplash.com/premium_photo-1682089892133-556bde898f2c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3R1ZGVudCUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    name: "bablu",
    username: "@missbablu",
    time: "6h",
    text: "No media attached in this tweet.",
    mediaType:"video",
    media: "https://cdn.api.video/vod/vi1FBKkaYe5Y2L9wNbGDYztl/mp4/720/source.mp4"
  },
  {
    id: 7,
    avatar: "https://plus.unsplash.com/premium_photo-1682089892133-556bde898f2c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3R1ZGVudCUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    name: "bablu",
    username: "@missbablu",
    time: "6h",
    text: "A Ferrari tire explodes while the car hits top speed😳",
    mediaType: "image", // Specify the type of media
    media: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvVvGbOKTtnyRMPG95ffXPJ2WkLCoulvq2xA&s"
  },
  {
    id: 9,
    avatar: "https://plus.unsplash.com/premium_photo-1682089892133-556bde898f2c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3R1ZGVudCUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    name: "bablu",
    username: "@missbablu",
    time: "6h",
    text: "A Ferrari tire explodes while the car hits top speed😳",
    mediaType: "image", // Specify the type of media
    media: ""
  },
  {
    id: 10,
    avatar: "https://plus.unsplash.com/premium_photo-1682089892133-556bde898f2c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3R1ZGVudCUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    name: "bablu",
    username: "@missbablu",
    time: "6h",
    text: "A Ferrari tire explodes while the car hits top speed😳",
    mediaType: "image", // Specify the type of media
    media: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-D1hPNfqIje75Jxr521CCx3J0PA1RpF_ntw&s"
  },
  {
    id: 16,
    avatar: "https://plus.unsplash.com/premium_photo-1682089892133-556bde898f2c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3R1ZGVudCUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    name: "bablu",
    username: "@missbablu",
    time: "6h",
    text: "A Ferrari tire explodes while the car hits top speed😳",
    mediaType: "image", // Specify the type of media
    media: "https://thumbs.dreamstime.com/b/funny-face-baby-27701492.jpg"
  },
  {
    id: 11,
    avatar: "https://i.pinimg.com/736x/39/ee/71/39ee71e4564d0a40f6c9ee4e41c7fcad.https://plus.unsplash.com/premium_photo-1682089892133-556bde898f2c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3R1ZGVudCUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    name: "bablu",
    username: "@missbablu",
    time: "6h",
    text: "The video of the explosion is going viral! 📹",
    mediaType: "video", // Specify video type
    media: "https://www.w3schools.com/html/mov_bbb.mp4" // Example video
  },
  {
    id: 15,
    avatar: "https://plus.unsplash.com/premium_photo-1682089892133-556bde898f2c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3R1ZGVudCUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    name: "bablu",
    username: "@missbablu",
    time: "6h",
    text: "The video of the explosion is going viral! 📹",
    mediaType: "video", // Specify video type
    media: "/public/videos/danish.mp4" // Example video
  },
  {
    id: 18,
    avatar: "https://plus.unsplash.com/premium_photo-1682092603230-1ce7cf8ca451?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwbWFufGVufDB8fDB8fHww",
    name: "bablu",
    username: "@missbablu",
    time: "6h",
    text: "The video of the explosion is going viral! 📹",
    mediaType: "video", // Specify video type
    media: "/public/videos/danish.mp4" // Example video
  },
  {
    id: 17,
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWjxBNPGMGSmZFPjN0KBemfAP0M87bFE5h_A&see/71/39ee71e4564d0a40f6c9ee4e41c7fcad.jpg",
    name: "bablu",
    username: "@missbablu",
    time: "6h",
    text: "The video of the explosion is going viral! 📹",
    mediaType: "video", // Specify video type
    media: "/public/videos/galti.mp4" // Example video
  }
];

// Utility function to shuffle the array
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

  // Simulate fetching data (dynamic fetching)
  useEffect(() => {
    const fetchTweets = () => {
      setTimeout(() => {
        const shuffledTweets = shuffleArray([...tweetData]); // Shuffle tweets
        setTweets(shuffledTweets); // Simulate API fetching
      }, 1000); // Simulate a 1-second loading time
    };

    fetchTweets();
  }, []);

  const handleMediaLoaded = (id) => {
    setLoadedMedia((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div>
      <ul className="tweet-list">
        {tweets.map((tweet) => (
          <li key={tweet.id} className="tweet-item">
            <img
              className="tweet-avatar"
              src={tweet.avatar}
              alt={`${tweet.name}'s avatar`}
            />
            <div className="tweet-content">
              <div className="tweet-header">
                <span className="tweet-name">{tweet.name}</span>
                <span className="tweet-username">{tweet.username}</span>
                <span className="tweet-time">· {tweet.time}</span>
              </div>
              <p className="tweet-text">{tweet.text}</p>
              {/* Display media: image, video, or nothing */}
              {tweet.mediaType === "image" && (
                <img
                  className="tweet-image"
                  src={tweet.media}
                  alt="Tweet visual"
                  onLoad={() => handleMediaLoaded(tweet.id)}
                  style={{ display: loadedMedia[tweet.id] ? "block" : "none",
                    width: "400px",
                    height: "300px",
                   }}
                />
              )}

              {tweet.mediaType === "video" && (
                <video
                  className="tweet-video"
                  controls
                  onLoadedData={() => handleMediaLoaded(tweet.id)}
                  style={{ display: loadedMedia[tweet.id] ? "block" : "none",
                    width: "100%",
                    height: "350px",
                   }}
                >
                  <source src={tweet.media} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}

              {tweet.mediaType === null && (
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
