import BannerImage from "../../assets/banner.png";
import Img from '../../assets/dot.png'
import ImgPlay from '../../assets/play.png'

const Banner = () => {
    return (
        <div className="relative min-h-162.5 flex items-center overflow-hidden container mx-auto">
            <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
                {/* Left Content */}
                <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 bg-[#E1E7FF] bg- text-sm font-medium px-5 py-2 rounded-full">
                        <img src={Img} alt="" />
                        <p className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">New: AI-Powered Tools Available</p>

                    </div>

                    <h1 className="text-4xl lg:text-6xl font-bold text-[#101727] leading-21">Superharge your digital workfollow </h1>

                    <p className="text-lg text-zinc-700 max-w-lg ">
                        Access premium AI tools, design assets, templates, and productivity
                        software—all in one place. Start creating faster today.
                        Explore Products
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <button className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] transition-all px-8 py-4 rounded-full font-semibold text-lg  text-white">
                            Explore Products
                        </button>
                        <button className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent border border-[#4F39F6] transition-all px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-3 ">
                            <img src={ImgPlay} alt="" />
                            Explore Products
                            
                        </button>
                    </div>

                    <div className="flex items-center gap-8 text-sm text-zinc-600 pt-6">
                        <div>✓ 50+ Frontier Models</div>
                        <div>✓ No Usage Limits</div>
                        <div>✓ Cancel Anytime</div>
                    </div>
                </div>

                {/* Right Image */}
                <div className="relative flex justify-center lg:justify-end">
                    <div className="relative">
                        <img
                            className="relative h-130 w-auto object-contain drop-shadow-2xl rounded-3xl"
                            src={BannerImage}
                            alt="AI Models Banner"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;