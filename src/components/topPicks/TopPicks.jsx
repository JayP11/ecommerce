import React from "react";
import images from "../../constants/images";
import "./TopPicks.css";
import { FaSearch } from "react-icons/fa";

const TopPicks = () => {
  return (
    <div className="TopPicks_main">
      <div>
        <div>
          <h1 className="heading">Our Top Picks For You</h1>
        </div>
        <div className="underline"></div>
      </div>
      <div className="TopPicks_block_main">
        {/* <div className="TopPicks_block_inner">
          <div className="topPicks_img">
            <img src={images.pista} className="topPicks_img_inner" alt="" />
          </div>
          <div>
            <h5>Pista</h5>
          </div>
        </div>
        <div className="TopPicks_block_inner">
          <div className="topPicks_img">
            <img src={images.cake} className="topPicks_img_inner" alt="" />
          </div>
          <div>
            <h5>Pista</h5>
          </div>
        </div>
        <div className="TopPicks_block_inner">
          <div className="topPicks_img">
            <img
              src={images.peanutButterCream}
              className="topPicks_img_inner"
              alt=""
            />
          </div>
          <div>
            <h5>Pista</h5>
          </div>
        </div>
        <div className="TopPicks_block_inner">
          <div className="topPicks_img">
            <img src={images.poha} className="topPicks_img_inner" alt="" />
          </div>
          <div>
            <h5>Pista</h5>
          </div>
        </div> */}
        <div className="TopPicks_block_inner">
          <img
            src={images.poha}
            alt="Avatar"
            className="topPicks_img_inner"
            style={{ height: "200px", width: "350px", objectFit: "cover" }}
          />
          <div className="FaSearch_top">
            <div className="FaSearch_main">
              <FaSearch className="IoSearchCircle_stying" />
            </div>
          </div>
          <div>
            <h5 className="trendingproName">Poha</h5>
          </div>
        </div>
        <div className="TopPicks_block_inner">
          <img
            src={images.pista}
            alt="Avatar"
            className="topPicks_img_inner"
            style={{ height: "200px", width: "350px", objectFit: "cover" }}
          />
          <div className="FaSearch_top">
            <div className="FaSearch_main">
              <FaSearch className="IoSearchCircle_stying" />
            </div>
          </div>
          <div>
            <h5 className="trendingproName">Pista</h5>
          </div>
        </div>
        <div className="TopPicks_block_inner">
          <img
            src={images.peanutButter}
            alt="Avatar"
            className="topPicks_img_inner"
            style={{ height: "200px", width: "350px", objectFit: "cover" }}
          />
          <div className="FaSearch_top">
            <div className="FaSearch_main">
              <FaSearch className="IoSearchCircle_stying" />
            </div>
          </div>
          <div>
            <h5 className="trendingproName">Peanut Butter</h5>
          </div>
        </div>
        <div className="TopPicks_block_inner">
          <img
            src={images.peanutButterCream}
            alt="Avatar"
            className="topPicks_img_inner"
            style={{ height: "200px", width: "350px", objectFit: "cover" }}
          />
          <div className="FaSearch_top">
            <div className="FaSearch_main">
              <FaSearch className="IoSearchCircle_stying" />
            </div>
          </div>
          <div>
            <h5 className="trendingproName">Peanut Butter Cream</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPicks;
