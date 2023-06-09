// Count up
import CountUp from "react-countup";

// Intersection observer hook
import { useInView } from "react-intersection-observer";

// Motion
import { motion } from "framer-motion";

// Variant
import { fadeIn } from "../variants";

import aboutImg from "../assets/about.png"

const About = () => {
	const [ref, inView] = useInView({
		threshold: 0.5,
	});

	return (
		<section className="section" id="about">
			<div className="container mx-auto">
				<div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-sm">
					{/* Image */}
					<motion.div
						variants={fadeIn("right", 0.3)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.3 }}
						className="flex-1 h-[640px] mix-blend-lighten bg-top"
					>
						<img src={aboutImg} alt="" />
					</motion.div>
    
					{/* Text */}
					<motion.div
						variants={fadeIn("left", 0.3)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.3 }}
						className="flex-1"
					>
						<h2 className="h2 text-accent">About me.</h2>
						<h3 className="h3 mb-4">
							I'm a Freelance Frontend Developer with over 5 years
							of experience.
						</h3>

						<p className="mb-6">
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit.
						</p>

						{/* Stats */}
						<div className="flex gap-x-6 lg:gap-x-12 mb-12">
							<div>
								<div
									ref={ref}
									className="text-[40px] font-tertiary text-gradient mb-2"
								>
									{inView ? (
										<CountUp
											start={0}
											end={13}
											duration={9}
										/>
									) : (
										""
									)}
								</div>
								<div className="font-primary text-sm tracking-[2px]">
									Years of <br />
									Experience.
								</div>
							</div>
							<div>
								<div
									ref={ref}
									className="text-[40px] font-tertiary text-gradient mb-2"
								>
									{inView ? (
										<CountUp
											start={0}
											end={13}
											duration={9}
										/>
									) : (
										""
									)}
									k+
								</div>
								<div className="font-primary text-sm tracking-[2px]">
									projects <br /> Completed
								</div>
							</div>
							<div>
								<div
									ref={ref}
									className="text-[40px] font-tertiary text-gradient mb-2"
								>
									{inView ? (
										<CountUp
											start={0}
											end={12}
											duration={9}
										/>
									) : (
										""
									)}
									k+
								</div>
								<div className="font-primary text-sm tracking-[2px]">
									Satisfied <br /> Clients
								</div>
							</div>
						</div>

						<div className="flex items-center gap-x-8">
							<button className="btn btn-lg">Contact me</button>
							<a href="#" className="text-gradient btn-link">
								My Porfolio
							</a>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default About;
