/** Presents a translated section name as a small syntax-highlighted declaration. */
export default function SectionLabel({section, name = 'section'}) {
  return <>
    <p className="section-label" aria-hidden="true"><code><span className="section-code-keyword">const</span>{' '}<span className="section-code-variable">{name}</span>{' = '}<span className="section-code-function">createSection</span>(<span className="section-code-string">{JSON.stringify(section.label)}</span>);</code></p>
    <p className="section-readable-label">{section.label}</p>
  </>;
}
