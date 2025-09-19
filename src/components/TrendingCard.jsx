

const TrendingCard = ({imgUrl="./assets/images/7.webp",srNo=1}) => {
  return (
   
      <div className=" relative m-6 rounded-md h-[196px] min-h-[196px] w-[140px] min-w-[140px] bg-gray-500">
        <img
          className="h-full w-full rounded-md object-cover object-top"
          src={imgUrl}
          alt="inpector zende"
        />
        <p className="text-8xl font-bold absolute bottom-8 -left-6 numberStroke">
          {srNo}
        </p>
      </div>
    
  );
};

export default TrendingCard;