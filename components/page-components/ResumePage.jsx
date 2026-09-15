import {
	FaHtml5,
	FaCss3,
	FaJs,
	FaReact,
	FaFigma,
	FaNodeJs,
	FaAngular,
	FaJava,
	FaNpm,
	FaRegFilePowerpoint,
	FaRegFileWord,
	FaGitSquare,
	FaGithub,
	FaGitlab, FaFileExcel, FaBlender,
} from "react-icons/fa";

import {
	SiTailwindcss,
	SiNextdotjs,
	SiSpringboot,
	SiSpringsecurity,
	SiSpring,
	SiTypescript,
	SiApachemaven,
	SiMariadb,
	SiGimp,
	SiExpress,
	SiEslint,
	SiMocha,
	SiDbeaver,
	SiMacos,
	SiSequelize,
	SiHibernate,
	SiJest,
	SiChai,
	SiReactivex,
	SiPrettier,
	SiAutodeskrevit,
	SiApachetomcat,
	SiStylus, SiSvg, SiIos
} from "react-icons/si";

// about data
const about = {
	title: "About",
	description: "Aboutdes",
	info: [
		{
			fieldName: "Name",
			fieldValue: "Youri Janssen",
		},
		{
			fieldName: "Experience",
			fieldValue: "experienceValue",
		},
		{
			fieldName: "Nationality",
			fieldValue: "Dutch",
		},
		{
			fieldName: "Status",
			fieldValue: "statusValue",
		},
		{
			fieldName: "Email",
			fieldValue: "yourijanssen123@gmail.com",
		},
		{
			fieldName: "Languages",
			fieldValue: "English, Dutch, German",
		},
	],
};

// experience data
const experience = {
	icon: "/assets/resume/badge.svg",
	title: "experience",
	description:
		"experiencedes",
	items: [
		{
			company: "WOW media",
			position: "phpDeveloper",
			duration: "wowDuration",
		},
		{
			company: "DICTU",
			position: "iamEngineer",
			duration: "dictuDuration",
		},
		{
			company: "Working Talent",
			position: "devopsTraineeship",
			duration: "workingTalentDuration",
		},
		{
			company: "IRP",
			position: "fullStackDeveloper",
			duration: "irpDuration",
		},

	],
};

// Certifications confirmed on the LinkedIn profile as of 31 July 2026.
const certifications = {
	icon: "/assets/resume/badge.svg",
	title: "certifications",
	description: "certificationsdes",
	items: [
		{
			issuer: "Scrum.org",
			name: "Professional Scrum Master™ I (PSM I)",
			issued: "psmIssued",
		},
	],
};

// education data
const education = {
	icon: "/assets/resume/cap.svg",
	title: "education",
	description:
		"educationdes",
	items: [
		{
			institution: "HVA",
			degree: "associateSoftwareDevelopment",
			duration: "2022 - 2024",
		},
		{
			institution: "HKU",
			degree: "bachelorArtsEconomics",
			duration: "2016 - 2021",
		},
		{
			institution: "HKU",
			degree: "propaedeuticArtsEconomics",
			duration: "2017",
		},
		{
			institution: "examBoard",
			degree: "vwoDegree",
			duration: "2015",
		},
		{
			institution: "Scholengemeenschap Oost/Zuidoost",
			degree: "havoDegree",
			duration: "2009 - 2014",
		},

	],
}


// courses data
const courses = {
	icon: "/assets/resume/cap.svg",
	title: "courses",
	description:
		"coursesdes",
	items: [
		{
			icon: "/assets/resume/courses/nextjs.png",
			name: "Fluent React",
			year: "2024",
			link: "https://www.oreilly.com/library/view/nextjs-from-scratch/9781836207979/"
		},
		{
			icon: "/assets/resume/courses/fluent.png",
			name: "Fluent React",
			year: "2024",
			link: "https://www.oreilly.com/library/view/fluent-react/9781098138707/"
		},
		{
			icon: "/assets/resume/courses/18react.png",
			name: "Fluent React",
			year: "2024",
			link: ""
		},
		{
			icon: "/assets/resume/courses/security.png",
			name: "Fluent React",
			year: "2024",
			link: ""
		},
		{
			icon: "/assets/resume/courses/jakarta.png",
			name: "Fluent React",
			year: "2024",
			link: ""
		},
		{
			icon: "/assets/resume/courses/reactmaxi.png",
			name: "Fluent React",
			year: "2024",
			link: ""
		},
		{
			icon: "/assets/resume/courses/architecture.png",
			name: "Fluent React",
			year: "2024",
			link: "https://learning.oreilly.com/library/view/software-architecture-patterns/9781491971437/"
		},
		{
			icon: "/assets/resume/courses/devops.png",
			name: "Fluent React",
			year: "2024",
			link: ""
		},
		{
			icon: "/assets/resume/courses/networking.png",
			name: "Fluent React",
			year: "2024",
			link: ""
		},
		{
			icon: "/assets/resume/courses/uml.png",
			name: "Fluent React",
			year: "2024",
			link: ""
		},
		{
			icon: "/assets/resume/courses/angular.png",
			name: "Fluent React",
			year: "2024",
			link: ""
		},
		{
			icon: "/assets/resume/courses/nodejs.png",
			name: "Fluent React",
			year: "2024",
			link: ""
		},
		{
			icon: "/assets/resume/courses/modernjavascript.png",
			name: "Fluent React",
			year: "2024",
			link: ""
		},
		{
			icon: "/assets/resume/courses/mysql.png",
			name: "Fluent React",
			year: "2024",
			link: ""
		},
		{
			icon: "/assets/resume/courses/javascript.png",
			name: "Fluent React",
			year: "2024",
			link: ""
		},
		{
			icon: "/assets/resume/courses/htmlcss.png",
			name: "Fluent React",
			year: "2024",
			link: ""
		},


	],
};

// skills data
const skills = {
	title: "skills",
	description1:
		"skillsdes",
	description2:
		"skillsdes2",
	year: "2022",
	skillList: [
		{
			icon: <FaHtml5/>,
			name: "html 5",
			year: 2022,
			link: "https://en.wikipedia.org/wiki/HTML5",
		},
		{
			icon: <DiMongodb/>,
			name: "MongoDB",
			year: 2024,
			link: "https://en.wikipedia.org/wiki/MongoDB",
		},
		{
			icon: <SiPrettier/>,
			name: "Prettier",
			year: 2023,
			link: "https://prettier.io/docs/en/",
		},
		{
			icon: <SiJest/>,
			name: "Jest",
			year: 2023,
			link: "https://jestjs.io/",
		},
		{
			icon: <FaCss3/>,
			name: "css 3",
			year: 2022,
			link: "https://en.wikipedia.org/wiki/CSS",
		},
		{
			icon: <FaJs/>,
			name: "javascript",
			year: 2022,
			link: "https://en.wikipedia.org/wiki/JavaScript",
		},
		{
			icon: <SiTypescript/>,
			name: "Typescript",
			year: 2022,
			link: "https://en.wikipedia.org/wiki/TypeScript",
		},
		{
			icon: <SiMariadb/>,
			name: "MariaDB",
			year: 2023,
			link: "https://en.wikipedia.org/wiki/MariaDB",
		},
		{
			icon: <BiTerminal/>,
			name: "Terminal",
			year: 2022,
			link: "https://en.wikipedia.org/wiki/Computer_terminal",
		},
		{
			icon: <BsAndroid/>,
			name: "Android OS",
			year: 2021,
			link: "https://en.wikipedia.org/wiki/Android_(operating_system)",
		},

		{
			icon: <DiLinux/>,
			name: "Linux OS",
			year: 2021,
			link: "https://en.wikipedia.org/wiki/Linux",
		},
		{
			icon: <SiIos/>,
			name: " IOS",
			year: 2016,
			link: "https://en.wikipedia.org/wiki/IOS",
		},
		{
			icon: <SiStylus/>,
			name: "Stylus",
			year: 2024,
			link: "https://en.wikipedia.org/wiki/Stylus_(style_sheet_language)",
		},
		{
			icon: <SiSvg/>,
			name: "SVG",
			year: 2024,
			link: "https://en.wikipedia.org/wiki/SVG",
		},
		{
			icon: <SiAutodeskrevit/>,
			name: "Revit",
			year: 2024,
			link: "https://en.wikipedia.org/wiki/Autodesk_Revit",
		},
		{
			icon: <SiApachetomcat/>,
			name: "Tomcat",
			year: 2023,
			link: "https://en.wikipedia.org/wiki/Apache_Tomcat",
		},
		{
			icon: <SiGimp/>,
			name: "Gimp",
			year: 2020,
			link: "https://en.wikipedia.org/wiki/GIMP",
		},
		{
			icon: <TbBrandAdobePremiere/>,
			name: "Premier Pro",
			year: 2020,
			link: "https://en.wikipedia.org/wiki/Adobe_Premiere_Pro",
		},
		{
			icon: <TbBrandAdobePhotoshop/>,
			name: "Photoshop",
			year: 2020,
			link: "https://en.wikipedia.org/wiki/Adobe_Photoshop",
		},
		{
			icon: <FaBlender/>,
			name: "Blender",
			year: 2020,
			link: "https://en.wikipedia.org/wiki/Blender_(software)",
		},
		{
			icon: <SiDbeaver/>,
			name: "DBeaver",
			year: 2023,
			link: "https://en.wikipedia.org/wiki/DBeaver",
		},
		{
			icon: <GiJasmine/>,
			name: "Jasmine",
			year: 2023,
			link: "https://en.wikipedia.org/wiki/Jasmine_(software)",
		},
		{
			icon: <SiEslint/>,
			name: "ESlint",
			year: 2023,
			link: "https://en.wikipedia.org/wiki/ESLint",
		},
		{
			icon: <SiMocha/>,
			name: "Mocha",
			year: 2023,
			link: "https://en.wikipedia.org/wiki/Mocha_(JavaScript_framework)",
		},
		{
			icon: <TbBrandThreejs/>,
			name: "Three.js",
			year: 2024,
			link: "https://en.wikipedia.org/wiki/Three.js",
		},
		{
			icon: <SiExpress/>,
			name: "Express.Js",
			year: 2023,
			link: "https://en.wikipedia.org/wiki/Express.js",
		},
		{
			icon: <GrMysql/>,
			name: "MySql",
			year: 2022,
			link: "https://en.wikipedia.org/wiki/MySQL",
		},
		{
			icon: <FaReact/>,
			name: "react.js",
			year: 2023,
			link: "https://en.wikipedia.org/wiki/React_(JavaScript_library)",
		},
		{
			icon: <SiNextdotjs/>,
			name: "next.js",
			year: 2024,
			link: "https://en.wikipedia.org/wiki/Next.js",
		},
		{
			icon: <SiTailwindcss/>,
			name: "tailwind.css",
			year: 2024,
			link: "https://en.wikipedia.org/wiki/Tailwind_CSS",
		},
		{
			icon: <FaNodeJs/>,
			name: "node.js",
			year: 2023,
			link: "https://en.wikipedia.org/wiki/Node.js",
		},
		{
			icon: <FaFigma/>,
			name: "figma",
			year: 2022,
			link: "https://en.wikipedia.org/wiki/Figma",
		},
		{
			icon: <FaAngular/>,
			name: "angular",
			year: 2023,
			link: "https://en.wikipedia.org/wiki/AngularJS",
		},
		{
			icon: <FaJava/>,
			name: "java",
			year: 2023,
			link: "https://en.wikipedia.org/wiki/Java_(programming_language)",
		},
		{
			icon: <BsWindows/>,
			name: "Windows OS",
			year: 2015,
			link: "https://en.wikipedia.org/wiki/Microsoft_Windows",
		},
		{
			icon: <DiScrum/>,
			name: "Scrum",
			year: 2017,
			link: "https://en.wikipedia.org/wiki/Scrum_(software_development)",
		},
		{
			icon: <SiSequelize/>,
			name: "Sequelize",
			year: 2023,
			link: "https://sequelize.org/",
		},
		{
			icon: <SiHibernate/>,
			name: "Hibernate",
			year: 2024,
			link: "https://en.wikipedia.org/wiki/Hibernate_(framework)",
		},
		{
			icon: <TbFileTypeXml/>,
			name: "XML",
			year: 2023,
			link: "https://en.wikipedia.org/wiki/XML",
		},
		{
			icon: <SiChai/>,
			name: "Chai",
			year: 2023,
			link: "https://www.chaijs.com/",
		},
		{
			icon: <PiMicrosoftTeamsLogo/>,
			name: "Teams",
			year: 2022,
			link: "https://en.wikipedia.org/wiki/Microsoft_Teams",
		},
		{
			icon: <SiReactivex/>,
			name: "RxJS",
			year: 2023,
			link: "https://rxjs.dev/",
		},

		{
			icon: <SiMacos/>,
			name: "Mac OS",
			year: 2015,
			link: "https://en.wikipedia.org/wiki/MacOS",
		},
		{
			icon: <SiApachemaven/>,
			name: "Apache Maven",
			year: 2023,
			link: "https://en.wikipedia.org/wiki/Apache_Maven",
		},
		{
			icon: <SiSpring/>,
			name: "Spring",
			year: 2023,
			link: "https://en.wikipedia.org/wiki/Spring_Framework",
		},
		{
			icon: <SiSpringboot/>,
			name: "Spring Boot",
			year: 2023,
			link: "https://en.wikipedia.org/wiki/Spring_Boot",
		},
		{
			icon: <SiSpringsecurity/>,
			name: "Spring Security",
			year: 2024,
			link: "https://en.wikipedia.org/wiki/Spring_Security",
		},
		{
			icon: <VscVscode/>,
			name: "VSCode",
			year: 2022,
			link: "https://en.wikipedia.org/wiki/Visual_Studio_Code",
		},
		{
			icon: <DiIntellij/>,
			name: "Intellij",
			year: 2023,
			link: "https://en.wikipedia.org/wiki/IntelliJ_IDEA",
		},
		{
			icon: <FaNpm/>,
			name: "NPM",
			year: 2022,
			link: "https://en.wikipedia.org/wiki/Npm",
		},
		{
			icon: <FaGitSquare/>,
			name: "Git",
			year: 2022,
			link: "https://en.wikipedia.org/wiki/Git",
		},
		{
			icon: <FaGithub/>,
			name: "GitHub",
			year: 2023,
			link: "https://en.wikipedia.org/wiki/GitHub",
		},
		{
			icon: <FaGitlab/>,
			name: "GitLab",
			year: 2022,
			link: "https://en.wikipedia.org/wiki/GitLab",
		},
		{
			icon: <FaRegFilePowerpoint/>,
			name: "Powerpoint",
			year: 2016,
			link: "https://en.wikipedia.org/wiki/Microsoft_PowerPoint",
		},
		{
			icon: <FaRegFileWord/>,
			name: "Word",
			year: 2015,
			link: "https://en.wikipedia.org/wiki/Microsoft_Word",
		},
		{
			icon: <FaFileExcel/>,
			name: "Excel",
			year: 2016,
			link: "https://en.wikipedia.org/wiki/Microsoft_Excel",
		},
	],
};

const groupSkillsByYear = (skillList) => {
	return skillList.reduce((acc, skill) => {
		const {year} = skill;
		if (!acc[year]) {
			acc[year] = [];
		}
		acc[year].push(skill);
		return acc;
	}, {});
};

const skillsByYear = groupSkillsByYear(skills.skillList);

const handleSkillClick = (link) => {
	if (link) {
		window.open(link, '_blank');
	}
};

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";

import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

import {ScrollArea} from "@/components/ui/scroll-area";
import {motion} from "framer-motion";
import {VscVscode} from "react-icons/vsc";
import {DiIntellij, DiLinux, DiMongodb, DiScrum} from "react-icons/di";
import {GrMysql} from "react-icons/gr";
import {GiJasmine} from "react-icons/gi";
import {
	TbBrandAdobePhotoshop,
	TbBrandAdobePremiere,
	TbBrandThreejs,
	TbFileTypeXml,
} from "react-icons/tb";
import {BsAndroid, BsWindows} from "react-icons/bs";
import {PiMicrosoftTeamsLogo} from "react-icons/pi";
import {BiTerminal} from "react-icons/bi";
import Image from "next/image";
import TypingAnimation from "@/components/TypingAnimation";
import dynamic from 'next/dynamic';

// Load the chart library only when the skills panel is opened.
const BarExample = dynamic(() => import('@/components/bar'), {ssr: false});
import {useTranslation} from "next-i18next/pages";


/** Presents the existing career data in accessible tabs and open, readable timelines. */
export default function ResumePage({embedded = false}) {
  const {t: translate} = useTranslation('common');
  const Heading = embedded ? 'h2' : 'h1';
  return <section className="section resume-section"><div className="shell">
    <div className="section-heading"><div><p className="section-label">{translate('resumePageTitle')}</p><Heading>{translate('resumeHeadline')}</Heading></div><p>{translate('resumeIntro')}</p></div>
    <Tabs defaultValue="experience" className="resume-layout">
      <TabsList className="resume-tabs" aria-label={translate('resumePageTitle')}>
        {['experience', 'about', 'education', 'certifications', 'skills', 'courses'].map(key => <TabsTrigger value={key} key={key}>{translate(key + 'Tab')}</TabsTrigger>)}
      </TabsList>
      <div className="resume-content">
        <TabsContent value="experience"><h3 className="panel-title">{translate(experience.title)}</h3><ol className="timeline">
          {experience.items.map(item => <li key={item.company}><span className="timeline-date">{translate(item.duration)}</span><div><h4>{item.company}</h4><p>{translate(item.position)}</p></div></li>)}
        </ol></TabsContent>
        <TabsContent value="education"><h3 className="panel-title">{translate(education.title)}</h3><ol className="timeline">
          {education.items.map(item => <li key={item.degree}><span className="timeline-date">{item.duration}</span><div><h4>{translate(item.degree)}</h4><p>{translate(item.institution)}</p><small>{translate('credentialAvailableOnRequest')}</small></div></li>)}
        </ol></TabsContent>
        <TabsContent value="certifications"><h3 className="panel-title">{translate(certifications.title)}</h3><ol className="timeline">
          {certifications.items.map(item => <li key={item.name}><span className="timeline-date">{translate(item.issued)}</span><div><h4>{item.name}</h4><p>{item.issuer}</p></div></li>)}
        </ol></TabsContent>
        <TabsContent value="about"><h3 className="panel-title">{translate(about.title)}</h3><p className="about-copy">{translate(about.description)}</p><dl className="about-facts">
          {about.info.map(item => <div key={item.fieldName}><dt>{translate(item.fieldName)}</dt><dd>{translate(item.fieldValue)}</dd></div>)}
        </dl></TabsContent>
        <TabsContent value="skills"><h3 className="panel-title">{translate(skills.title)}</h3><p className="panel-description">{translate(skills.description1)}</p><BarExample />
          <p className="panel-description">{translate(skills.description2)}</p>
          {Object.keys(skillsByYear).sort((a, b) => b - a).map(year => <div className="skill-year" key={year}><h4>{year}</h4><ul className="skill-list">
            {skillsByYear[year].map((skill, index) => <li key={index}><a href={skill.link} target="_blank" rel="noopener noreferrer">{skill.icon}<span>{skill.name}</span><span className="sr-only"> — {translate('opensInNewTab')}</span></a></li>)}
          </ul></div>)}
        </TabsContent>
        <TabsContent value="courses"><h3 className="panel-title">{translate(courses.title)}</h3><p className="panel-description">{translate(courses.description)}</p><ul className="course-list">
          {courses.items.map((item, index) => <li key={index}>{item.link ? <a href={item.link} target="_blank" rel="noopener noreferrer" aria-label={translate('openCourse') + ' ' + (index + 1)}><Image src={item.icon} alt={translate('courseCover') + ' ' + (index + 1)} width={196} height={257} /></a> : <Image src={item.icon} alt={translate('courseCover') + ' ' + (index + 1)} width={196} height={257} />}</li>)}
        </ul></TabsContent>
      </div>
    </Tabs>
  </div></section>;
}
