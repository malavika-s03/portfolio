import { motion } from 'framer-motion';
import { infoBarAppear } from '@/lib/animations';

export function InfoBar() {
  return (
    <motion.div
      className="w-full bg-black"
      style={{ height: '2.42vw' }}
      {...infoBarAppear}
    />
  );
}

export default InfoBar;
