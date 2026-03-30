"use client";

import { motion } from "framer-motion";

export function MotionSection({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, amount: 0.4 }}
      className={className ?? "space-y-6"}
    >
      {children}
    </motion.section>
  );
}

