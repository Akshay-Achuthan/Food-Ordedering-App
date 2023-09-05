import foodImg  from "../assets/food.jpg"

const ImageWrapper = () => {
  return (
    <div>
      <img src={foodImg} alt="food image" width="1350" height="300"/>
    </div>
  );
}

export default ImageWrapper;