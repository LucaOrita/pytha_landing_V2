'use client';

import { ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';

import Noise from '@/components/noise';
import { Button } from '@/components/ui/button';
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion';
import { WaitlistModal } from '../payload/WaitlistModal';
import localFont from 'next/font/local';

export default function Hero() {
  const prefersReducedMotion = usePrefersReducedMotion();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      filter: 'blur(2px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 25,
        mass: 1,
        duration: 0.3,
      },
    },
  };

  const overlayVariants = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 120,
        damping: 20,
        duration: 0.4,
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95,
      filter: 'blur(3px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        type: 'spring' as const,
        stiffness: 80,
        damping: 20,
        delay: 0.4,
        duration: 0.4,
      },
    },
  };

  return (
    <section className="section-padding relative flex flex-col items-center bg-[url(/images/gradient.webp)] bg-cover bg-bottom bg-no-repeat !pb-0 dark:bg-[url(/images/gradient.webp)]">
      <motion.div
        variants={overlayVariants}
        initial={prefersReducedMotion ? 'visible' : 'hidden'}
        animate="visible"
        className="from-background/30 pointer-events-none absolute inset-0 bg-gradient-to-b to-transparent"
      />
      <Noise />
      <motion.div
        className="z-1 container text-center"
        variants={containerVariants}
        initial={prefersReducedMotion ? 'visible' : 'hidden'}
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-xl font-medium tracking-tight text-balance opacity-90 md:text-3xl lg:text-4xl"
        >
          AI pentru Documentele de Transport
        </motion.h1>

        <motion.h3
          variants={itemVariants}
          className="mt-2 text-3xl leading-tight font-semibold tracking-tight text-balance md:text-5xl lg:text-6xl"
        >
          <span className="block">Verificare Automată</span>
          {/* <span className="block">Riscuri Vizibile.</span>  */}
          <span className="block">Decizii mai sigure</span>
        </motion.h3>

        <motion.p
          variants={itemVariants}
          className="text-muted-foreground mt-3 mb-1 text-sm text-balance md:mt-4 md:mb-2 md:text-lg lg:mt-5 lg:mb-2 lg:text-xl"
        >
          {/* <span className="text-secondary font-semibold">DOCO</span> evidențiază
          modificări, extrage automat date esențiale și ghidează echipele într-o
          procedură sigură de verificare a furnizorilor. */}
        </motion.p>

        <motion.div className="" variants={itemVariants}>
          <WaitlistModal>
            <Button
              size="xl"
              className="mt-2 rounded-full !pl-5.5 before:rounded-full"
            >
              Înscrie-te acum
              <div className="bg-background/15 border-background/10 grid size-5.5 place-items-center rounded-full border">
                <ChevronRight className="size-4" />
              </div>
            </Button>
          </WaitlistModal>
        </motion.div>

        <motion.div
          variants={imageVariants}
          className="bg-background/45 border-background relative mt-10 justify-self-end overflow-hidden rounded-t-xl border p-2 md:mt-20 md:rounded-t-3xl md:p-4 lg:mt-25"
        >
          <Image
            src="/images/hero.png"
            alt="Doco Workspace"
            width={1056}
            height={752.5}
            priority
            fetchPriority="high"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1056px"
            quality={90}
            className="border-background/45 rounded-t-sm md:rounded-t-xl"
          />
        </motion.div>
        <div className="from-background pointer-events-none absolute inset-0 bg-gradient-to-t via-transparent via-25% to-transparent" />
      </motion.div>
    </section>
  );
}
