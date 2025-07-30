import React, { memo } from "react";

export const Footer = () => {
  return (
    <footer className="bg-bgProjetos gap-3 text-white w-full h-auto py-5 flex flex-col items-center justify-center xl:py-3">
      <p className="text-sm md:text-base xl:text-sm">
        © {new Date().getFullYear()} Igor Bernardes. Todos os direitos
        reservados.
      </p>
    </footer>
  );
};
