import Xlogo from "../assets/Xlogo.svg";
import homelogo from "../assets/Home.svg";
import explore from "../assets/Explore.svg";
import notifications from "../assets/Notifications.svg";
import messages from "../assets/Messages.svg";
import grok from "../assets/Grok.svg";
import bookmarks from "../assets/Bookmarks.svg";
import jobs from "../assets/Jobs.svg";
import communities from "../assets/Communities.svg";
import business from "../assets/Business.svg";
import profile from "../assets/Profile.svg";
import more from "../assets/more.svg";
import ThreeDots from "../assets/ThreeDots.svg";
import "../App.css";

function Header() {
  return (
    <>
      <div className="header">
        <div className="sideBar">
          <ul className="list flex flex-col">
            <li className="listItem">
              <div>
                <img className="Logo" src={Xlogo} alt="X logo" />
              </div>
            </li>
            <li className="listItem">
              <div>
                <img className="Logo" src={homelogo} alt="Home logo" />
              </div>
              <span>Home</span>
            </li>
            <li className="listItem">
              <div>
                <img className="Logo" src={explore} alt="Explore logo" />
              </div>
              <span>Explore</span>
            </li>
            <li className="listItem">
              <div>
                <img
                  className="Logo"
                  src={notifications}
                  alt="Notifications logo"
                />
              </div>
              <span>Notifications</span>
            </li>
            <li className="listItem">
              <div>
                <img className="Logo" src={messages} alt="Messages logo" />
              </div>
              <span>Messages</span>
            </li>
            <li className="listItem">
              <div>
                <img className="Logo" src={grok} alt="Grok logo" />
              </div>
              <span>Grok</span>
            </li>
            <li className="listItem">
              <div>
                <img className="Logo" src={bookmarks} alt="Bookmarks logo" />
              </div>
              <span>Bookmarks</span>
            </li>
            <li className="listItem">
              <div>
                <img className="Logo" src={jobs} alt="Jobs logo" />
              </div>
              <span>Jobs</span>
            </li>
            <li className="listItem">
              <div>
                <img
                  className="Logo"
                  src={communities}
                  alt="Communities logo"
                />
              </div>
              <span>Communities</span>
            </li>
            <li className="listItem">
              <div>
                <img className="Logo" src={Xlogo} alt="Premium logo" />
              </div>
              <span>Premium</span>
            </li>
            <li className="listItem">
              <div>
                <img className="Logo" src={business} alt="Business logo" />
              </div>
              <span>Business</span>
            </li>
            <li className="listItem">
              <div>
                <img className="Logo" src={profile} alt="Profile logo" />
              </div>
              <span>Profile</span>
            </li>
            <li className="listItem">
              <div>
                <img className="Logo" src={more} alt="More logo" />
              </div>
              <span>More</span>
            </li>
          </ul>
          <div className="Button-cont">
            <button className="PostBtn">Post</button>
          </div>
          <div className="ProfileBar">
            <div>
              <span className="dpcont">
                <img
                  className="dp"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXK50_He6FefRJX9bL996m2gGhkKsUzWbDnA&s"
                  alt="Profile picture"
                />
              </span>
            </div>
            <div>
              <div className="name">
                <b>Shree Deepak</b>
              </div>
              <span className="name">ShreeDeepak.com</span>
            </div>
            <div>
              <span>
                <img className="ThreeDots name" src={ThreeDots} alt="Three dots" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
