import React from "react";

const MainTech = () => {
  const about = ["Owerview", "Tech Specs", "Compare", "Buy"];
  return (
    <>
      <div className="about_section">
        <h1 className="title_airpods">AirPods Pro</h1>
        <ul className="list_aboute">
          {about.map((aboutItem) => (
            <li className="aipods_about">{aboutItem}</li>
          ))}
        </ul>
      </div>
      <div className="hr_aboute"></div>
      {/* <div className="bg_cover_container">

  </div> */}
    </>
  );
};

export default MainTech;
