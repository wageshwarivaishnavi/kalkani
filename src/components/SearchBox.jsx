import ZoomInIcon from "@mui/icons-material/ZoomIn";
import BoxCard from "./card";

function SearchBox(props) {
  return (
    <div className="search-box">
      <span className="icon-box">
        <ZoomInIcon />
      </span>
      <input
        className="searchbox"
        value={props.searchQuery}
        onChange={(e) => props.handleChange(e.target.value)}
      ></input>
    </div>
  );
}

export default SearchBox;
