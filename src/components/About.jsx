// Count up
import CountUp from "react-countup";

// Intersection observer hook
import { useInView } from "react-intersection-observer";

// Motion
import { motion } from "framer-motion";

// Variant
import { fadeIn } from "../variants";

const About = () => {
	const [ref, inView] = useInView({
		threshold: 0.5,
	});

	return (
		<section className="section" id="about">
			<div className="container mx-auto">
				<div>
					{/* Image */}
					<div className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"></div>

					{/* Text */}
					<div>
            <h2>About me.</h2>
            <h3>I'm a Freelance Frontend Developer with over5 years of experience.</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

            {/* Stats */}
            <div className="flex">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                 {inView ? <CountUp start={0} end={13} duration={9} /> : ""}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br />
                  Experience.
                </div>
              </div>
            </div>
          </div>
				</div>
			</div>
		</section>
	);
};

export default About;
