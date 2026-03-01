import { memo } from "react";
import { motion } from "framer-motion";
import { ModalSkillsProps } from "@/src/types/types";
import { arrayskills } from "./arrayskills";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ModalSkills = memo(({ skills }: ModalSkillsProps) => {
  return (
    <section className=" w-full h-auto p-2 grid grid-cols-2 gap-5 z-10 md:grid-cols-4 xl:w-3/4">
      {skills.map((tec, index) => (
        <motion.div
          key={tec.name}
          className="w-30 h-30 bg-bgProjetos  rounded-xl gap-2 p-3  flex flex-col items-center justify-center md:w-32 md:h-32 md:ml-5 md:p-8 lg:ml-20 xl:p-8 xl:w-28 xl:h-28 hover:scale-110 hover:duration-200"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: index * 0.1, duration: 0.5 }}
        >
          <img
            src={tec.icon}
            alt={tec.name}
            className="w-12 h-12 md:w-20 md:h-20 xl:w-12 xl:h-12"
          />
          <p className="text-lg md:text-xl text-white xl:text-base">
            {tec.name}
          </p>
        </motion.div>
      ))}
    </section>
  );
});

const SkillsSection = () => {
  return (
    <section className="w-full h-2/4 p-2 flex flex-col justify-around items-center gap-10 z-20 ">
      <ModalSkills skills={arrayskills} />
    </section>
  );
};

export default memo(SkillsSection);
