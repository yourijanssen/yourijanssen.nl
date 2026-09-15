import {FaGithub, FaLinkedinIn, FaYoutube} from 'react-icons/fa';

/** Labels every social link for screen-reader and keyboard users. */
export default function Social({containerStyles = 'social-links', iconStyles = 'social-link'}) {
  return <div className={containerStyles}>{[
    ['GitHub', 'https://github.com/yourijanssen', FaGithub],
    ['LinkedIn', 'https://www.linkedin.com/in/youri-janssen/', FaLinkedinIn],
    ['YouTube', 'https://www.youtube.com/channel/UCffd8pAfDbo0fjChE3ZKxaA', FaYoutube],
  ].map(([name, href, Icon]) => <a key={name} href={href} className={iconStyles} aria-label={name}><Icon aria-hidden="true" /></a>)}</div>;
}
