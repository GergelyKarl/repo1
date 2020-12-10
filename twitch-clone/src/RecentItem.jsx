import React from "react";

function RecentItem({ url, title }) {
  return (
    <div className="item">
      <iframe
        width="640"
        height="360"
        src="https://www.youtube.com/embed/Hiq6fkSgphI"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="item__details">
          
      </div>
    </div>
  );
}

export default RecentItem;
