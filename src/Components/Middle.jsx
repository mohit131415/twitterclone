import React from "react";
import {
  Image,
  FileText,
  BarChart2,
  Smile,
  Calendar,
  MapPin,
} from "lucide-react";
import TweetList from "./TweetList";
import ClientTweets from "./ClientTweets";

export default function Middle() {
  const [value, setValue] = React.useState("");
  const [list, setList] = React.useState([]);

  const handlePost = () => {
    if (value.trim()) {
      const newTweet = {
        id: Date.now(),
        text: value,
      };
      setList([newTweet, ...list]);
      setValue("");
    }
  };

  return (
    <div className="middle-container">
      <div className="midHead">
        <span className="active">
          <b>For you</b>
        </span>
        <span>
          <b>Following</b>
        </span>
      </div>
      <div className="upload">
        <div className="write">
          <img
            className="dp"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXK50_He6FefRJX9bL996m2gGhkKsUzWbDnA&s"
            alt="Profile"
          />
          <input
            type="text"
            className="tweet-input"
            placeholder="What's happening?!"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div className="tweet-actions">
          <div className="tweet-icons">
            <Image size={20} />
            <FileText size={20} />
            <BarChart2 size={20} />
            <Smile size={20} />
            <Calendar size={20} />
            <MapPin size={20} />
          </div>
          <button
            className="post-button"
            onClick={handlePost}
            disabled={!value.trim()}
          >
            Post
          </button>
        </div>
      </div>
      <div className="show-posts">
        <span>Show {list.length} posts</span>
      </div>
      <ClientTweets tweets={list} />
      <TweetList tweets={list} />
    </div>
  );
}
