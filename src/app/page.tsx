'use client';

export default function Page() {
    return (
        <div
            className="relative w-screen h-screen flex justify-center items-center"
            data-oid="sc:w-u2"
        >
            {/* Dog's head */}
            <div
                className="relative w-[600px] h-[500px] rounded-[50px] bg-[#D4002E]"
                data-oid="72lmsqo"
            >
                {/* Left ear */}
                <div
                    className="absolute -top-20 left-10 w-[150px] h-[200px] rounded-t-[100px] transform -rotate-12 hover:rotate-[-20deg] transition-transform bg-[#D4002E]"
                    data-oid="hv-cmj6"
                ></div>
                {/* Right ear */}
                <div
                    className="absolute -top-20 right-10 w-[150px] h-[200px] rounded-t-[100px] transform rotate-12 hover:rotate-[20deg] transition-transform bg-[#D4002E]"
                    data-oid="rsjbrx-"
                ></div>
                {/* Left eye */}
                <div
                    className="absolute top-[140px] left-[140px] w-[80px] h-[85px] bg-black rounded-full transform -rotate-6 hover:scale-110 transition-transform"
                    data-oid="erxulml"
                >
                    <div
                        className="absolute top-[15px] left-[15px] w-[35px] h-[35px] bg-white rounded-full animate-pulse"
                        data-oid="14zxntc"
                    ></div>
                    <div
                        className="absolute bottom-[15px] right-[20px] w-[15px] h-[15px] bg-white rounded-full opacity-70"
                        data-oid=".d126g_"
                    ></div>
                </div>
                {/* Left blush */}
                <div
                    className="absolute top-[220px] left-[120px] w-[60px] h-[25px] bg-[#FF4D6D] rounded-full opacity-40"
                    data-oid="fs61tlo"
                ></div>
                {/* Right eye */}
                <div
                    className="absolute top-[140px] right-[140px] w-[80px] h-[85px] bg-black rounded-full transform rotate-6 hover:scale-110 transition-transform"
                    data-oid="azagi.y"
                >
                    <div
                        className="absolute top-[15px] left-[15px] w-[35px] h-[35px] bg-white rounded-full animate-pulse"
                        data-oid="ml:1132"
                    ></div>
                    <div
                        className="absolute bottom-[15px] right-[20px] w-[15px] h-[15px] bg-white rounded-full opacity-70"
                        data-oid="eqw4kn5"
                    ></div>
                </div>
                {/* Right blush */}
                <div
                    className="absolute top-[220px] right-[120px] w-[60px] h-[25px] bg-[#FF4D6D] rounded-full opacity-40"
                    data-oid="r66hdcr"
                ></div>
                {/* Snout */}
                <div
                    className="absolute bottom-[100px] left-1/2 transform -translate-x-1/2 w-[180px] h-[140px] bg-[#FFA5B5] rounded-[60px] hover:scale-105 transition-transform"
                    data-oid="9d7xpkp"
                >
                    {/* Nose */}
                    <div
                        className="absolute top-[20px] left-1/2 transform -translate-x-1/2 w-[50px] h-[35px] bg-black rounded-[25px] hover:scale-95 transition-transform"
                        data-oid="2jep_r6"
                    ></div>
                    {/* Mouth */}
                    <div
                        className="absolute bottom-[30px] left-1/2 transform -translate-x-1/2 w-[100px] h-[40px] border-b-8 border-black rounded-b-[50px] hover:border-b-[10px] transition-all"
                        data-oid="-ok982b"
                    >
                        {/* Tongue */}
                        <div
                            className="absolute bottom-[-45px] left-1/2 transform -translate-x-1/2 w-[40px] h-[40px] bg-[#FF597D] rounded-b-full animate-bounce hover:bg-[#FF4D6D]"
                            data-oid=":gvsk3b"
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
