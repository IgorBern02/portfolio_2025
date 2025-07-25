import React, { memo } from "react";
import { motion } from "framer-motion";

const numberWpp = "5513991246604";

const contacts = [
  {
    name: "Whatsapp",
    url: `https://api.whatsapp.com/send?phone=${numberWpp}`,
    img: (
      <svg
        className="w-8 h-8 text-white md:w-10 md:h-10 xl:w-8 xl:h-8"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4Zm-10 8c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"
        />
      </svg>
    ),
  },
  {
    name: "GitHub",
    url: "https://github.com/IgorBern02",
    img: (
      <svg
        className="w-8 h-8 text-white md:w-10 md:h-10 xl:w-8 xl:g-8"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.22-.252-4.555-1.112-4.555-4.945 0-1.091.39-1.984 1.03-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.376.202 2.394.1 2.647.64.7 1.028 1.592 1.028 2.683 0 3.841-2.339 4.69-4.566 4.938.359.308.678.917.678 1.852 0 1.337-.012 2.415-.012 2.743 0 .268.18.58.688.482A10.013 10.013 0 0022 12c0-5.523-4.477-10-10-10z"
        />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/igor-bernardes-05aa05204/",
    img: (
      <svg
        className="w-8 h-8 text-white md:w-10 md:h-10 xl:w-8 xl:h-8"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
        />
        <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
      </svg>
    ),
  },
];

const ModalContact = memo(() => (
  <section
    className="w-full h-auto p-3 flex flex-col justify-center items-center z-50"
    id="contato"
  >
    <div>
      <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent md:text-5xl xl:text-4xl">
        Contato
      </h1>
    </div>
    <div className="w-full h-full flex flex-col items-center p-3 gap-5 rounded-lg mt-5 md:bg-transparent">
      {contacts.map((item) => (
        <motion.div
          key={item.name}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="w-3/4 h-auto flex flex-row items-center border border-white/20 rounded-lg backdrop-blur-xl cursor-pointer md:w-2/4 xl:w-2/5 hover:border-white hover:duration-300"
        >
          <a
            href={item.url}
            className="w-full h-full flex flex-row items-center gap-3 px-5 p-2 md:p-4 xl:p-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-3xl">{item.img}</span>
            <span className="text-base text-white md:text-lg xl:text-sm">
              {item.name}
            </span>
          </a>
        </motion.div>
      ))}
    </div>
  </section>
));

const Contact = () => <ModalContact />;

export default memo(Contact);
