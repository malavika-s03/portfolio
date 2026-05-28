import { motion } from 'framer-motion';
import { profile } from '@/data/profile';
import { SCROLL_EASE } from '@/lib/animations';
import { useHomeState } from '@/context/HomeStateContext';

const VIEWPORT = { once: true, margin: '0px 0px -30px 0px' as const };

function footerStagger(delay: number) {
  return {
    initial: { opacity: 0, y: 25 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: SCROLL_EASE },
    viewport: VIEWPORT,
  };
}

export function Footer() {
  const { hasVisitedHome } = useHomeState();
  const s = (props: Record<string, unknown>) => hasVisitedHome ? {} : props;

  return (
    <footer
      id="contact"
      className="w-full z-[1] relative"
      style={{ backgroundColor: '#000000', height: '40.23vw' }}
    >
      <motion.h2
        className="absolute font-medium"
        style={{
          left: '3.98vw',
          top: '4.06vw',
          width: '66.48vw',
          fontSize: '3.75vw',
          lineHeight: '7.03vw',
          letterSpacing: '-0.142vw',
          color: '#fffefe',
        }}
        {...s(footerStagger(0))}
      >
        GET IN TOUCH
      </motion.h2>

      <motion.a
        href={`mailto:${profile.email}`}
        className="absolute font-normal hover:text-white transition-colors"
        style={{
          left: '4.61vw',
          top: '12.97vw',
          fontSize: '1.17vw',
          lineHeight: '1.90vw',
          color: '#99a1af',
        }}
        {...s(footerStagger(0.1))}
      >
        {profile.email}
      </motion.a>

      {profile.social.linkedin && (
        <motion.a
          href={profile.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute font-normal hover:text-white transition-colors"
          style={{
            left: '4.61vw',
            top: '16.17vw',
            fontSize: '1.17vw',
            lineHeight: '1.90vw',
            color: '#99a1af',
          }}
          {...s(footerStagger(0.2))}
        >
          LInkedIn
        </motion.a>
      )}

      {profile.social.behance && (
        <motion.a
          href={profile.social.behance}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute font-normal hover:text-white transition-colors"
          style={{
            left: '4.53vw',
            top: '19.38vw',
            fontSize: '1.17vw',
            lineHeight: '1.90vw',
            color: '#99a1af',
          }}
          {...s(footerStagger(0.3))}
        >
          Behance
        </motion.a>
      )}
    </footer>
  );
}

export default Footer;
