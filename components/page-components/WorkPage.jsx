import Link from 'next/link';
import {ArrowUpRight} from 'lucide-react';
import {useTranslation} from 'next-i18next/pages';

const projects = [
	{
		id: "de-zorgheuvel-intranet",
		endDate: "2026-04",
		category: "deZorgheuvelIntranet",
		description: "deZorgheuvelIntranetDescription",
		type: "intranetDevelopment",
		live: "https://intranet.dezorgheuvel.nl",
	},
	{
		id: "zoi-pantou",
		endDate: "2026-08",
		category: "zoiPantou",
		description: "zoiPantouDescription",
		type: "projectWebsite",
		live: "https://zoipantou.com",
	},
	{
		id: "get2gether",
		endDate: null,
		ongoing: true,
		category: "get2gether",
		description: "get2getherDescription",
		type: "projectWebsite",
		live: "https://get2getherproject.com",
	},
	{
		id: "bim-builder",
		endDate: "2024-12",
		category: "bim",
		title: "",
		icon: "",
		description:
			"bimdes",
		stack: [{name: "Tailwind"}, {name: "Three"}, {name: "MongoDB"}],
		live: "",
		github: "",
	},
	{
		id: "ticket-system",
		endDate: "2024-03",
		category: "ticket",
		title: "",
		description:
			"ticketdes",
		stack: [{name: "Spring MVC"}, {name: "React"}, {name: "MariaDB"}],
		live: "",
		github: "",
	},
	{
		id: "leroy-grau",
		endDate: "2026-07",
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
		endDate: "2026-04",
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
		endDate: null,
		ongoing: true,
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

// endDate accepts YYYY, YYYY-MM or YYYY-MM-DD, preserving the known precision.
// null means unknown, unless ongoing is true. Undated projects appear last.
const undatedOrder = ['leroy-grau', 'de-zorgheuvel', 'de-zorgheuvel-intranet', 'i-kozijn', 'bim-builder', 'ticket-system', 'zoi-pantou', 'get2gether'];

/** Shows ongoing projects first, then newest end dates, then undated projects. */
function sortProjectsByEndDate(items) {
  return [...items].sort((a, b) => {
    if (Boolean(a.ongoing) !== Boolean(b.ongoing)) return a.ongoing ? -1 : 1;
    if (a.endDate && b.endDate) return b.endDate.localeCompare(a.endDate);
    if (a.endDate) return -1;
    if (b.endDate) return 1;
    return undatedOrder.indexOf(a.id) - undatedOrder.indexOf(b.id);
  });
}

/** Displays project status without implying more date precision than is known. */
function ProjectStatus({project}) {
  const {t, i18n} = useTranslation('common');
  let dateLabel = project.endDate;
  if (project.endDateNote) dateLabel = t(project.endDateNote);
  else if (project.endDate?.length > 4) {
    const [year, month, day] = project.endDate.split('-').map(Number);
    dateLabel = new Intl.DateTimeFormat(i18n.language || 'en', {
      year: 'numeric', month: 'long', ...(day ? {day: 'numeric'} : {}), timeZone: 'UTC',
    }).format(new Date(Date.UTC(year, month - 1, day || 1)));
  }
  return <p className="project-status" data-ongoing={Boolean(project.ongoing)}>
    {project.ongoing ? t('projectOngoing') : project.endDate ? <>{t('projectCompleted')} · <time dateTime={project.endDate}>{dateLabel}</time></> : t('projectStatusUnknown')}
  </p>;
}

/** Makes every project discoverable, ordered by end date rather than presentation type. */
export default function WorkPage({embedded = false}) {
  const {t} = useTranslation('common');
  const Heading = embedded ? 'h2' : 'h1';
  const sortedProjects = sortProjectsByEndDate(projects);
  const visibleProjects = embedded ? sortedProjects.slice(0, 4) : sortedProjects;
  return <section className="section work-section shell">
    <div className="section-heading"><div><p className="section-label">{t('workPageTitle')}</p><Heading>{t('workHeadline')}</Heading></div>
      {embedded ? <Link className="text-link" href="/work">{t('viewAllProjects')}<ArrowUpRight size={17} /></Link> : <p>{t('workIntro')}</p>}
    </div>
    <div className="project-timeline">{visibleProjects.map((project, index) => <article className="client-project" key={project.id}>
      <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
      <div>
        <h3>{project.live ? <a href={project.live} target="_blank" rel="noopener noreferrer">{t(project.category)}<ArrowUpRight size={21} /><span className="sr-only"> — {t('opensInNewTab')}</span></a> : t(project.category)}</h3>
        <ProjectStatus project={project} />
        <p>{t(project.description)}</p>
      </div>
      <span className="project-type">{project.live ? t(project.type || 'websiteManagement') : project.stack.map(item => item.name).join(' / ')}</span>
    </article>)}</div>
  </section>;
}
