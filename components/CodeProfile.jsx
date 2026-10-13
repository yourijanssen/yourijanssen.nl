import {useRef, useState} from 'react';
import Link from 'next/link';
import {ArrowUpRight, FileCode2} from 'lucide-react';
import {useTranslation} from 'next-i18next/pages';
import {portfolioStack} from '@/lib/portfolio-stack';

const files = ['profile.ts', 'stack.json', 'projects.ts'];

/** Highlights plain text without executing code or downloading an editor library. */
function CodeLine({text}) {
  return text.split(/("(?:[^"\\]|\\.)*"|\b(?:const|export|default)\b)/g).map((part, index) =>
    <span key={index} className={part.startsWith('"') ? 'code-string' : /^(const|export|default)$/.test(part) ? 'code-keyword' : undefined}>{part}</span>
  );
}

/** Keeps edits in memory and overlays a native input on the highlighted code. */
function EditableSample({lines, label, hint}) {
  const [draft, setDraft] = useState(null);
  const highlight = useRef(null);
  const text = draft ?? lines.join('\n');

  /** Synchronizes the highlighted text and line numbers with native input scrolling. */
  function syncScroll(event) {
    highlight.current.scrollTop = event.currentTarget.scrollTop;
    highlight.current.scrollLeft = event.currentTarget.scrollLeft;
  }

  return <>
    <pre ref={highlight} className="editor-highlight" aria-hidden="true"><code>{text.split('\n').map((line, number) => <span className="editor-line" key={number}><span className="line-number">{number + 1}</span><span><CodeLine text={line || ' '} />{'\n'}</span></span>)}</code></pre>
    <textarea className="editor-input" aria-label={label} title={hint} value={text} onChange={event => setDraft(event.target.value)} onScroll={syncScroll} spellCheck={false} autoComplete="off" autoCorrect="off" autoCapitalize="off" wrap="off" />
  </>;
}

/** Presents real portfolio information as accessible, keyboard-operable code tabs. */
export default function CodeProfile({playback}) {
  const {t, i18n} = useTranslation('common');
  const [activeFile, setActiveFile] = useState(0);
  const tabRefs = useRef([]);
  const profile = {
    name: 'Youri Janssen',
    role: t('codeFullStackEngineer'),
    location: t('amsterdam'),
    email: 'yourijanssen123@gmail.com',
    website: 'https://yourijanssen.nl',
    remote: true,
    hoursPerWeek: t('codeWorkingHours'),
    focus: [t('codeWebApplications'), t('codeCmsIntranets'), t('agentDevelopment'), t('identityAccessManagement'), 'DevOps'],
    languages: t('codeCvLanguages'),
    experience: [
      {company: 'WOW Media', role: t('phpDeveloper'), period: t('wowDuration')},
      {company: 'DICTU', role: t('iamEngineer'), period: t('dictuDuration')},
      {company: 'Working Talent', role: t('devopsTraineeship'), period: t('workingTalentDuration')},
      {company: 'IRP (BIMkeeper)', role: t('codeSoftwareIntern'), period: '2023–2024'},
      {role: t('codeRentalManagement'), period: '2017–2024'},
    ],
    education: [
      {institution: t('HVA'), degree: t('associateSoftwareDevelopment'), period: '2022–2024', grade: '8.5/10'},
      {institution: t('HKU'), degree: t('bachelorArtsEconomics'), period: '2016–2020'},
      {institution: 'Amsterdamsche School', degree: t('vwoCertificates'), period: '2015–2016'},
      {institution: 'Pieter Nieuwland College', degree: t('havoDegree'), period: '2009–2014', grade: '7/10'},
    ],
    certifications: ['Red Hat System Administration I (RH124) — 2025', 'Professional Scrum Master I (PSM I) — 2025'],
  };
  const profileLines = JSON.stringify(profile, null, 2).split('\n');
  profileLines[0] = 'const engineer = {';
  profileLines[profileLines.length - 1] = '};';
  const samples = [
    [...profileLines, '', 'export default engineer;'],
    JSON.stringify({...portfolioStack, ai: ['OpenAI Codex', t('codeAiTools'), t('codeAiAgents')]}, null, 2).split('\n'),
    ['const projects = [', '  "Get2getherproject.com",', '  "I-kozijn.nl",', '  "Zoipantou.com",', '  "Intranet.dezorgheuvel.nl",', '  "BIM Salesviewer",', '  "Support Ticket System"', '];'],
  ];

  /** Moves focus and selection together using the standard tab keyboard pattern. */
  function handleTabKey(event, index) {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % files.length;
    if (event.key === 'ArrowLeft') next = (index + files.length - 1) % files.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = files.length - 1;
    if (next === undefined) return;
    event.preventDefault();
    setActiveFile(next);
    tabRefs.current[next]?.focus();
  }

  return <div className="code-editor">
    <div className="editor-chrome" aria-hidden="true"><i /><i /><i /><span>youri / portfolio</span></div>
    <div className="editor-tabs" role="tablist" aria-label={t('codeProfileTabs')}>
      {files.map((file, index) => <button key={file} ref={element => {tabRefs.current[index] = element;}} type="button" role="tab" id={`code-tab-${index}`} aria-controls={`code-panel-${index}`} aria-selected={index === activeFile} tabIndex={index === activeFile ? 0 : -1} onClick={() => setActiveFile(index)} onKeyDown={event => handleTabKey(event, index)}><FileCode2 size={14} aria-hidden="true" />{file}</button>)}
    </div>
    {samples.map((lines, index) => <div key={files[index]} role="tabpanel" id={`code-panel-${index}`} aria-labelledby={`code-tab-${index}`} hidden={index !== activeFile} className="editor-panel editor-editable">
      <div className="editor-desktop-playground"><EditableSample key={`${files[index]}:${i18n.language}`} lines={lines} label={t('codeEditLabel', {file: files[index]})} hint={t('codeEditHint')} /></div>
      <pre className="editor-mobile-display"><code>{lines.map((line, number) => <span className="editor-line" key={number}><span className="line-number" aria-hidden="true">{number + 1}</span><span><CodeLine text={line || ' '} />{'\n'}</span></span>)}</code></pre>
    </div>)}
    <div className="editor-status"><span>{activeFile === 1 ? 'JSON' : 'TypeScript'}</span><span>UTF-8</span><Link href={activeFile === 2 ? '/work' : '/resume'}>{t(activeFile === 2 ? 'viewAllProjects' : 'codeViewProfile')}<ArrowUpRight size={12} aria-hidden="true" /></Link></div>
    {playback}
  </div>;
}
