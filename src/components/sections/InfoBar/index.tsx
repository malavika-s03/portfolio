import { motion } from 'framer-motion';
import { infoBarAppear } from '@/lib/animations';
import { useHomeState } from '@/context/HomeStateContext';

export function InfoBar() {
  const { hasVisitedHome } = useHomeState();

  return (
    <motion.div
      className="w-full bg-black"
      style={{ height: '2.42vw' }}
      {...(hasVisitedHome ? {} : infoBarAppear)}
    />
  );
}

export default InfoBar;
