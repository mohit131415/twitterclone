import { Search } from 'lucide-react';
import { useState } from 'react';

function Right() {
  // State to manage following status for each user
  const [followStatus, setFollowStatus] = useState({
    Anika: false,
    Rajesh: false,
    Leena: false,
  });

  // State to manage subscription status
  const [subscribed, setSubscribed] = useState(false);

  // Handler for follow button
  const handleFollow = (user) => {
    setFollowStatus((prevState) => ({
      ...prevState,
      [user]: !prevState[user],
    }));
  };

  // Handler for subscribe button
  const handleSubscribe = () => {
    setSubscribed(true);
    alert('You have subscribed successfully!');
  };

  return (
    <div className="right-container">
      {/* Search Bar */}
      <div className="search-bar">
        <Search size={20} className="search-icon" />
        <input type="text" placeholder="Search" />
      </div>

      {/* Subscribe Section */}
      <div className="subscribe-section">
        <h2>Subscribe to Premium</h2>
        <p>Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
        <button className="subscribe-button" onClick={handleSubscribe} disabled={subscribed}>
          {subscribed ? 'Subscribed' : 'Subscribe'}
        </button>
      </div>

      {/* What's Happening Section */}
      <div className="whats-happening">
        <h2>What&lsquo;s happening</h2>
        <div className="trending-topic">
          <span className="topic-category">Music Festival · LIVE</span>
          <h3>Portola Festival 2024</h3>
        </div>
        <div className="trending-topic">
          <span className="topic-category">Sports · Trending</span>
          <h3>World Cup 2024</h3>
        </div>
        <div className="trending-topic">
          <span className="topic-category">Technology · New</span>
          <h3>iPhone 15 Launch Event</h3>
        </div>
        <div className="trending-topic">
          <span className="topic-category">Entertainment · News</span>
          <h3>Latest Marvel Movie</h3>
        </div>
      </div>

      {/* Who to Follow Section */}
      <div className="who-to-follow">
        <h2>Who to follow</h2>

        {/* Follow Suggestion for Anika Pandey */}
        <div className="follow-suggestion">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Photos-Shilpa-Shetty-and-Raj-Kundra-at-Bastian-in-Lower-Parel-2_%28cropped%29.jpg/220px-Photos-Shilpa-Shetty-and-Raj-Kundra-at-Bastian-in-Lower-Parel-2_%28cropped%29.jpg" alt="User avatar" className="user-avatar" />
          <div className="user-info">
            <h3>raj kundra</h3>
            <span>@rajkundra</span>
          </div>
          <button
            className="follow-button"
            onClick={() => handleFollow('Anika')}
            style={{
              backgroundColor: followStatus.Anika ? 'black' : 'blue',
              color: followStatus.Anika ? 'white' : 'white',
              transition: '0.3s ease',
              border: "1px solid white",
            }}
          >
            {followStatus.Anika ? 'Following' : 'Follow'}
          </button>
        </div>

        {/* Follow Suggestion for Rajesh Kumar */}
        <div className="follow-suggestion">
          <img src="https://c.ndtvimg.com/2024-05/93ba19j_chahat-fateh-ali-khan-viral-video_625x300_05_May_24.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605" alt="User avatar" className="user-avatar" />
          <div className="user-info">
            <h3>Bado badi</h3>
            <span>@chahat_fateh_ali_khan</span>
          </div>
          <button
            className="follow-button"
            onClick={() => handleFollow('Rajesh')}
            style={{
              backgroundColor: followStatus.Rajesh ? 'black' : 'blue',
              color: followStatus.Rajesh ? 'white' : 'white',
              transition: '0.3s ease',
              border: "1px solid white",
            }}
          >
            {followStatus.Rajesh ? 'Following' : 'Follow'}
          </button>
        </div>

        {/* Follow Suggestion for Leena Verma */}
        <div className="follow-suggestion">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Photos-Shilpa-Shetty-and-Raj-Kundra-at-Bastian-in-Lower-Parel-2_%28cropped%29.jpg/220px-Photos-Shilpa-Shetty-and-Raj-Kundra-at-Bastian-in-Lower-Parel-2_%28cropped%29.jpg" alt="User avatar" className="user-avatar" />
          <div className="user-info">
            <h3>Rajat Dalal</h3>
            <span>@Rajat_Dalal</span>
          </div>
          <button
            className="follow-button"
            onClick={() => handleFollow('Leena')}
            style={{
              backgroundColor: followStatus.Leena ? 'black' : 'blue',
              color: followStatus.Leena ? 'white' : 'white',
              transition: '0.3s ease',
              border: "1px solid white",
            }}
          >
            {followStatus.Leena ? 'Following' : 'Follow'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Right;
