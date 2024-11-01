import IconRating from "../assets/rating.png";
import IconRatingHalf from "../assets/rating-half.png";

const Banner = () => {
    return (
        <div className="w-full h-[600px] bg-banner bg-center bg-no-repeat bg-cover relative">
            <div className="absolute w-full h-full top-0 left-0 bg-black opacity-30" />
            <div className="w-full h-full flex items-center justify-center space-x-[30px] p-4 relative z-20">
                <div className="flex flex-col space-y-5 items-baseline w-[50%]">
                    <p className="text-white bg-gradient-to-r from-red-600 to-white text-md py-2 px-3">TV Show</p>
                    <div className="flex flex-col space-y-4">
                        <h2 className="text-white text-3x1">Tôi yêu em T</h2>
                        <div className="flex items-center space-x-3">
                            <img src={IconRating} alt="rating" className="w-8 h-8" />
                            <img src={IconRating} alt="rating" className="w-8 h-8" />
                            <img src={IconRating} alt="rating" className="w-8 h-8" />
                            <img src={IconRating} alt="rating" className="w-8 h-8" />
                            <img src={IconRatingHalf} alt="rating" className="w-8 h-8" />
                        </div>
                        <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus adipisci laboriosam odit, quis quam quibusdam officia natus tempora veniam, voluptate iste inventore quae labore. Temporibus nisi quod minus numquam rem!</p>
                        <div className="flex items-center space-x-4">
                            <button className="p-3 text-white bg-black font-bold text-sm">Chi Tiết</button>
                            <button className="p-3 text-white bg-red-600 font-bold text-sm">Xem Phim</button>
                        </div>
                    </div>
                </div>
                <div className="w-[50%]">image</div>
            </div>
        </div>
    );
};

export default Banner;
