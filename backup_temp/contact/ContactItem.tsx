import { motion } from "framer-motion";
import { ModalContactProps } from "@/src/types/types";

export const ContactItem: React.FC<ModalContactProps> = ({ contact }) => (
  <motion.div
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 30 }}
    transition={{ duration: 0.8 }}
    className="w-3/4 flex items-center border border-white/20 rounded-lg backdrop-blur-xl cursor-pointer md:w-2/4 xl:w-2/5 hover:border-white transition duration-300"
  >
    <a
      href={contact.url}
      className="w-full flex items-center gap-3 px-5 py-2 md:py-4 xl:py-2"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="text-3xl">{contact.img}</span>
      <span className="text-base text-white md:text-lg xl:text-sm">
        {contact.name}
      </span>
    </a>
  </motion.div>
);
