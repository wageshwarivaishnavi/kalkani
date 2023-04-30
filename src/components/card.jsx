import { Avatar, Chip } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ForwardSharpIcon from "@mui/icons-material/ForwardSharp";
import React from "react";

export default function BoxCard(props) {
  const handleRedirect = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="cardbox-main">
      <div>
        <div className="avatar">
          <Avatar src={props.avImage} sx={{ width: 24, height: 24 }} />
        </div>
      </div>
      <div className="card-data">
        <div>
          <p>{props.avName} </p>
        </div>
        <div className="anime-tags">
          {props.nickName.map((name) => (
            <Chip
              sx={{ fontSize: 10, height: 15, fontWeight: "light" }}
              variant="outlined"
              label={name}
            />
          ))}
        </div>
      </div>
      <div className="fav-box">
        <FavoriteIcon color="error" />
        <span>{props.likes}</span>
      </div>
      <div>
        <div className="arrow-box">
          <ForwardSharpIcon onClick={() => handleRedirect(props.url)} />
        </div>
      </div>
    </div>
  );
}
