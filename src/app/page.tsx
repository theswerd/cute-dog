'use client';

export default function Page() {
    return (
        <div
            className="relative w-screen h-screen flex justify-center items-center"
            data-oid="b2jyvuu"
        >
            {/* Dog's head */}
            <div
                className="relative w-[600px] h-[500px] rounded-[50px] bg-[#D4012D] hover:scale-[1.02] transition-all duration-300 cursor-pointer group"
                data-oid="ixlnyk-"
            >
                {/* Left ear */}
                <div
                    className="absolute -top-20 left-10 w-[150px] h-[200px] rounded-t-[100px] transform -rotate-12 hover:rotate-[-20deg] transition-transform bg-[#D4002E] animate-[wiggle_1s_ease-in-out_infinite] hover:animate-[wiggle_0.5s_ease-in-out_infinite]"
                    data-oid="4roy:-x"
                ></div>
                {/* Right ear */}
                <div
                    className="absolute -top-20 right-10 w-[150px] h-[200px] rounded-t-[100px] transform rotate-12 hover:rotate-[20deg] transition-transform bg-[#D4002E] animate-[wiggle_1s_ease-in-out_infinite] hover:animate-[wiggle_0.5s_ease-in-out_infinite]"
                    data-oid="6ktgfp2"
                ></div>
                {/* Left eye */}
                <div
                    className="absolute top-[140px] left-[140px] w-[80px] h-[85px] bg-black rounded-full transform -rotate-6 hover:scale-110 transition-transform group-hover:scale-105"
                    data-oid="p4btq.y"
                >
                    <div
                        className="absolute top-[15px] left-[15px] w-[35px] h-[35px] bg-white rounded-full animate-[blink_4s_ease-in-out_infinite]"
                        data-oid="vbl4498"
                    ></div>
                    <div
                        className="absolute bottom-[15px] right-[20px] w-[15px] h-[15px] bg-white rounded-full opacity-70"
                        data-oid="8framq6"
                    ></div>
                </div>
                {/* Left blush */}
                <div
                    className="absolute top-[220px] left-[120px] w-[60px] h-[25px] bg-[#FF4D6D] rounded-full opacity-40 hover:opacity-60 group-hover:animate-pulse transition-opacity"
                    data-oid="0mg_pbv"
                ></div>
                {/* Right eye */}
                <div
                    className="absolute top-[140px] right-[140px] w-[80px] h-[85px] bg-black rounded-full transform rotate-6 hover:scale-110 transition-transform group-hover:scale-105"
                    data-oid="k.42ybr"
                >
                    <div
                        className="absolute top-[15px] left-[15px] w-[35px] h-[35px] bg-white rounded-full animate-[blink_4s_ease-in-out_infinite]"
                        data-oid="0lq.1fc"
                    ></div>
                    <div
                        className="absolute bottom-[15px] right-[20px] w-[15px] h-[15px] bg-white rounded-full opacity-70"
                        data-oid="_m7tl_7"
                    ></div>
                </div>
                {/* Right blush */}
                <div
                    className="absolute top-[220px] right-[120px] w-[60px] h-[25px] bg-[#FF4D6D] rounded-full opacity-40 hover:opacity-60 group-hover:animate-pulse transition-opacity"
                    data-oid="fpq8yfj"
                ></div>
                {/* Snout */}
                <div
                    className="absolute bottom-[100px] left-1/2 transform -translate-x-1/2 w-[180px] h-[140px] bg-[#FFA5B5] rounded-[60px] hover:scale-105 transition-transform group-hover:bg-[#FFB8C5]"
                    data-oid="qc3cp0v"
                >
                    {/* Nose */}
                    <div
                        className="absolute top-[20px] left-1/2 transform -translate-x-1/2 w-[50px] h-[35px] bg-black rounded-[25px] hover:scale-95 transition-transform hover:animate-[wiggle_0.5s_ease-in-out]"
                        data-oid="3nzl_jc"
                    ></div>
                    {/* Mouth */}
                    <div
                        className="absolute bottom-[30px] left-1/2 transform -translate-x-1/2 w-[100px] h-[40px] border-b-8 border-black rounded-b-[50px] hover:border-b-[10px] transition-all group-hover:border-b-[12px]"
                        data-oid="um25-jm"
                    >
                        {/* Tongue */}
                        <div
                            className="absolute bottom-[-45px] left-1/2 transform -translate-x-1/2 w-[40px] h-[40px] bg-[#FF597D] rounded-b-full animate-bounce hover:bg-[#FF4D6D] group-hover:animate-[bounce_0.5s_infinite]"
                            data-oid=".vadvic"
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
