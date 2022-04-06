import "./rightbar.css";
import { Users } from "../../dummyData";

export default function Rightbar({ profile }) {
  

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">NG0 information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Name:</span>
            <span className="rightbarInfoValue">Janseva</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Mumbai</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Type:</span>
            <span className="rightbarInfoValue">Education</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {<ProfileRightbar/>}
      </div>
    </div>
  );
}
