import SpacingGrid from "./SpacingGrid.js";

const Favorites = ({ favArray }) => {
  return (
    <div>
      <h1>Favorites</h1>
      <SpacingGrid images={favArray} />
    </div>
  );
};
export default Favorites;
