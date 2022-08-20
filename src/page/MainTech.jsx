import React from "react";
import airpodsImg from "../Components/img/bg_01.png";

const MainTech = () => {
  const about = ["Owerview", "Tech Specs", "Compare", "Buy"];
  return (
    <>
      <div className="about_section">
        <h1 className="title_airpods">AirPods Pro</h1>
        <nav>
          <ul className="list_aboute">
            {about.map((aboutItem) => (
              <li key={aboutItem.toString()} className="aipods_about">
                {aboutItem}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="hr_aboute"></div>

      <div className="bg_cover_container">
        <img className="airpods_img" src={airpodsImg} alt="airpods black img" />
      </div>
    </>
  );
};

export default MainTech;
