"use client";

import Image from "next/image";
import { motion, Transition } from "motion/react";
import { memo } from "react";

export const ProfileImage = memo(function ProfileImage({
  index,
}: {
  index: number;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.04, y: -8 }}
      transition={{ duration: 0.3 } as Transition}
      className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden group cursor-pointer"
    >
      <Image
        src={`/images/image${index}.jpg`}
        alt={`Perfil profissional ${index}`}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover object-top sm:object-[40%_60%] group-hover:scale-110 transition-transform duration-500"
        priority={index === 1}
        quality={85}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 shadow-[inset_0_0_40px_rgba(168,85,247,0.3)] transition-all duration-500" />
    </motion.div>
  );
});

ProfileImage.displayName = "ProfileImage";
