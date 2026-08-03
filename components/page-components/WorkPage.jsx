import {motion} from "framer-motion";
import React, {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import {BsArrowUpRight} from "react-icons/bs";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import {useTranslation} from "next-i18next/pages";

const projects = [
	{
		id: "bim-builder",
		num: "01",
		category: "bim",
		title: "",
		icon: "",
		description:
			"bimdes",
		stack: [{name: "Tailwind"}, {name: "Three"}, {name: "MongoDB"}],
		image: "/assets/work/bimBuilder.png",
		live: "",
		github: "",
	},
	{
		id: "ticket-system",
		num: "02 ",
		category: "ticket",
		title: "",
		description:
			"ticketdes",
		stack: [{name: "Spring MVC"}, {name: "React"}, {name: "MariaDB"}],
		image: "/assets/work/ticketSystem.png",
		live: "",
		github: "",
	},
	{
		id: "leroy-grau",
		num: "03",
		category: "leroyGrau",
		title: "Leroygrau.nl",
		description: "leroyGrauDescription",
		stack: [{name: "websiteManagement"}],
		image: null,
		live: "https://leroygrau.nl",
		github: "",
	},
	{
		id: "de-zorgheuvel",
		num: "04",
		category: "deZorgheuvel",
		title: "Dezorgheuvel.nl",
		description: "deZorgheuvelDescription",
		stack: [{name: "websiteManagement"}],
		image: null,
		live: "https://dezorgheuvel.nl",
		github: "",
	},
	{
		id: "i-kozijn",
		num: "05",
		category: "iKozijn",
		title: "I-kozijn.nl",
		description: "iKozijnDescription",
		stack: [{name: "websiteManagement"}],
		image: null,
		live: "https://i-kozijn.nl",
		github: "",
	},
	// {
	//   num: "03",
	//   category: "School and hobby Projects",
	//   title: "project 2",
	//   description:
	//       "In the first year of my eduction, had to follow several courses to get a grasp of webdevelopment history",
	//   stack: [{ name: "HTML 5" }, { name: "CSS" }, { name: "MySql" }, { name: "Node.js" }],
	//   image: "/assets/work/avontuurMobile1.png",
	//   live: "",
	//   github: "",
	// },
];


	const Work = ({t}) => {
	const {t: translate} = useTranslation('common');

	const [project, setProject] = useState(projects[0]);

	const handleSlideChange = (swiper) => {
		// get current slide index
		const currentIndex = swiper.realIndex;
		// update project state based on current slide index
		setProject(projects[currentIndex]);
	};

	return (
		<>
			<motion.section
				initial={{opacity: 0}}
				animate={{
					opacity: 1,
					transition: {delay: 0.2, duration: 0.3, ease: "easeIn"},
				}}
				className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
			>
				<div className="container mx-auto">
					<div className="flex flex-col xl:flex-row xl:gap-[30px]">
						<div
							className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none"
						>
							<div className="flex flex-col gap-[30px] h-[50%]">
								{/* outline num */}
								<div className="text-5xl font-extrabold text-text-light dark:text-text-dark">
									{project.num}
								</div>
								{/* project category */}
								<h2 className="text-[42px] font-bold leading-none text-text-light dark:text-text-dark group-hover:text-accent transition-all duration-500 capitalize">
									{translate(project.category)}
								</h2>
								{/* project description */}
								<p className="text-text-light/60 dark:text-text-dark/60">{translate(project.description)}</p>
								{project.live && (
									<Link
										href={project.live}
										target="_blank"
										rel="noopener noreferrer"
										className="w-fit text-accent underline underline-offset-4 hover:text-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
									>
										{project.live.replace(/^https?:\/\//, "")}
										<span className="sr-only"> — {translate("opensInNewTab")}</span>
									</Link>
								)}
								{/* stack */}
								<ul className="flex gap-3">
									{project.stack.map((item, index) => {
										return (
											<li key={index} className="text-xl text-accent">
												{translate(item.name)}
												{/* remove the last comma */}
												{index !== project.stack.length - 1 && ","}
											</li>
										);
									})}
								</ul>
								{/* border */}
								<div className="border border-dark/80 dark:border-light/80"></div>
								{/* buttons */}
								<div className="flex items-center gap-4">
									{/* Opens the published website for portfolio entries with a public URL. */}
									{project.live && (
										<TooltipProvider delayDuration={100}>
											<Tooltip>
												<TooltipTrigger asChild>
													<Link
														href={project.live}
														target="_blank"
														rel="noopener noreferrer"
														aria-label={`${translate("visitWebsite")} ${project.title}`}
														className="w-[70px] h-[70px] rounded-full bg-black/5 dark:bg-white/5 flex justify-center items-center group"
													>
														<BsArrowUpRight className="text-text-light dark:text-text-dark text-3xl group-hover:text-accent" />
													</Link>
												</TooltipTrigger>
												<TooltipContent><p>{translate("visitWebsite")}</p></TooltipContent>
											</Tooltip>
										</TooltipProvider>
									)}
									{/* Github project button */}
									{/*<Link href={project.github}>*/}
									{/*  <TooltipProvider delayDuration={100}>*/}
									{/*    <Tooltip>*/}
									{/*      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">*/}
									{/*        <BsGithub className="text-white text-3xl group-hover:text-accent" />*/}
									{/*      </TooltipTrigger>*/}
									{/*      <TooltipContent>*/}
									{/*        <p>Github repository</p>*/}
									{/*      </TooltipContent>*/}
									{/*    </Tooltip>*/}
									{/*  </TooltipProvider>*/}
									{/*</Link>*/}
								</div>
							</div>
						</div>
						<div className="w-full xl:w-[50%]">
							<Swiper
								spaceBetween={30}
								slidesPerView={1}
								className="xl:h-[520px] mb-12"
								onSlideChange={handleSlideChange}
								loop={true}  // Enable loop for cyclic navigation
							>
								{projects.map((project) => {
									return (
										<SwiperSlide key={project.id} className="w-full">
											<div
												className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
												{/* overlay */}
												<div
													className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
												{/* image */}
												<div className="relative w-full h-full">
													{project.image ? <Image
														src={project.image}
														fill
														className="object-cover"
														alt={translate(project.category)}
														sizes="(max-width: 1280px) 100vw, 50vw"
													/> : (
														<div className="h-full flex items-center justify-center bg-gradient-to-br from-accent/20 via-white to-black/10 dark:from-accent/20 dark:via-[#27272c] dark:to-black">
															<span className="px-6 text-center text-3xl sm:text-5xl font-bold text-text-light dark:text-text-dark">
																{project.title}
															</span>
														</div>
													)}
												</div>
											</div>
										</SwiperSlide>
									);
								})}
								{/* slider buttons */}
								<WorkSliderBtns
									containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
									btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
									previousLabel={translate("previousProject")}
									nextLabel={translate("nextProject")}
								/>
							</Swiper>
						</div>
					</div>
				</div>
			</motion.section>
		</>
	);
};

export default Work;
