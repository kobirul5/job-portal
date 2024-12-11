import { motion } from "framer-motion";
import Team1 from "../../assets/t1.jpg"

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-96">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="flex-1">
                    <motion.img animate={{y:[50, 100, 50]}}
                         transition={{duration: 8, delay:1, repeat: Infinity}}
                        src={Team1}
                        className="max-w-sm w-64 rounded-3xl rounded-bl-none border-b-4 border-l-4 border-l-blue-500 border-b-blue-500 " />
                    <motion.img animate={{x:[50, 150, 50]}}
                         transition={{duration: 8, delay:1, repeat: Infinity}}
                        src={Team1}
                        className="max-w-sm w-64 rounded-3xl rounded-bl-none border-b-4 border-l-4 border-l-blue-500 border-b-blue-500 " />
                </div>
                <div className="flex-1">
                    <motion.h1 
                    className="text-5xl font-bold"
                    animate={{x:[0,50,0] }}
                    transition={{duration: 4, delay:1, repeat: Infinity}}
                    >Latest Job For You</motion.h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;