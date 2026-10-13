/** Presents a translated section name as a small syntax-highlighted declaration. */
export default function SectionLabel({children, name = 'section'}) {
  return <p className="section-label" aria-label={children}><code aria-hidden="true"><span className="section-code-keyword">const</span>{' '}<span className="section-code-variable">{name}</span>{' = '}<span className="section-code-string">{'"'}{children}{'"'}</span>;</code></p>;
}
