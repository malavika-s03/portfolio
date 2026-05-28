import { motion } from 'framer-motion';
import { infoBarAppear } from '@/lib/animations';
import { useHomeState } from '@/context/HomeStateContext';

export function InfoBar() {
  const { skipAnimation } = useHomeState();

  return (
    <motion.div
      className="w-full bg-black"
      style={{ height: '2.42vw' }}
      {...skipAnimation(infoBarAppear)}
    />
  );
}

export default InfoBar;
