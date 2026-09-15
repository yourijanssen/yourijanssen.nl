import Image from 'next/image';
import Link from 'next/link';
import {ArrowUpRight, Plus, Minus} from 'lucide-react';
import {useTranslation} from 'next-i18next/pages';

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

/** Makes every project discoverable, with expandable details and genuine live links. */
export default function WorkPage({embedded = false}) {
  const {t} = useTranslation('common');
  const Heading = embedded ? 'h2' : 'h1';
  return <section className="section work-section shell">
    <div className="section-heading"><div><p className="section-label">{t('workPageTitle')}</p><Heading>{t('workHeadline')}</Heading></div>
      {embedded ? <Link className="text-link" href="/work">{t('viewAllProjects')}<ArrowUpRight size={17} /></Link> : <p>{t('workIntro')}</p>}
    </div>
    <div className="featured-projects">{projects.slice(0, 2).map(project => <article className="project" key={project.id}>
      <div className="project-image"><Image src={project.image} alt={t(project.category)} fill sizes="(max-width: 700px) 90vw, 45vw" className="object-contain" /></div>
      <div className="project-meta"><span>{project.num.trim()}</span><span>{project.stack.map(item => item.name).join(' / ')}</span></div>
      <h3>{t(project.category)}</h3>
      <details className="project-details"><summary>{t('projectDetails')}<Plus className="details-plus" size={18} /><Minus className="details-minus" size={18} /></summary><p>{t(project.description)}</p></details>
    </article>)}</div>
    <div className="client-projects">{projects.slice(2).map(project => <article className="client-project" key={project.id}>
      <span className="project-index">{project.num}</span><div><h3><a href={project.live} target="_blank" rel="noopener noreferrer">{t(project.category)}<ArrowUpRight size={21} /><span className="sr-only"> — {t('opensInNewTab')}</span></a></h3><p>{t(project.description)}</p></div><span className="project-type">{t('websiteManagement')}</span>
    </article>)}</div>
  </section>;
}
