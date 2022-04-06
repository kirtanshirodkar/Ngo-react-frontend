import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
      <Topbar />
      <div className="profile">
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="assets/post/3.jpeg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="assets/person/7.jpeg"
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">JansevaKalyaan</h4>
                <span className="profileInfoDesc">Connect with NGOs, world around you on Janseva.</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}
