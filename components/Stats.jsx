import {useTranslation} from 'next-i18next/pages';

/** Renders meaningful statistics immediately, including when motion is disabled. */
export default function Stats() {
  const {t} = useTranslation('common');
  return <div className="shell"><dl className="stats-strip">{[['4+', 'yearsOfExperience'], ['20+', 'projectsCompleted'], ['10+', 'technologiesMastered']].map(([value, key]) =>
    <div key={key}><dd>{value}</dd><dt>{t(key)}</dt></div>
  )}</dl></div>;
}
