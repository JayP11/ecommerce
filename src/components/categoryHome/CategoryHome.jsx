import React from "react";
import "./CategoryHome.css";
import images from "../../constants/images";

const CategoryHome = ({ homeCategory }) => {
  return (
    <div className="CategoryHome_main">
      <div>
        <h1 className="heading">Categories</h1>
        <div className="underline"></div>
      </div>
      <div className="CategoryHome_images_main">
        {homeCategory.map((item) => {
          return (
            <div className="CategoryHome_image">
              <img
                className="CategoryHome_image_inner"
                src={item.image_full_path}
                alt={item.name}
              />
              <h1 className="category_name">{item.name}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryHome;
