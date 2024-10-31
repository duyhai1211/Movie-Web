import IconRating from "../assets/rating.png";
import IconRatingHalf from "../assets/rating-half.png";

const Banner = () => {
    return (
        <div className="w-[full] h-[600px] bg-banner bg-center bg-no-repeat bg-cover relative">
            <div className="absolute w-full h-full top-0 left-0 bg-black opacity-30" />
            <div className="w-full h-full fle items-center justify-center space-x-[30] p-4 relative z-20"></div>
            <div className="flex flex-col space-y-5 itmes-baselines">
                <p className="text-white bg-gradient-to-r from-red-600 to white py-1 px-3">TV Show</p>
                <div className="flex flex-col space-y-4">
                    <h2 className="text-white text-3x1">Nghe nói em thích tôi</h2>
                    <div className="flex items-center space-x-3">
                        <img src={IconRating} alt="rating" className="w-8 h-8" />
                        <img src={IconRating} alt="rating" className="w-8 h-8" />
                        <img src={IconRating} alt="rating" className="w-8 h-8" />
                        <img src={IconRating} alt="rating" className="w-8 h-8" />
                        <img src={IconRatingHalf} alt="rating" className="w-8 h-8" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
