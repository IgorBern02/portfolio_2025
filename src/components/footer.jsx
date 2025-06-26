import React, { memo } from "react";

const ModelFooter = memo(() => {
  return (
    <footer className="bg-bgProjetos gap-3 text-white w-full h-auto py-5 flex flex-col items-center justify-center xl:py-3">
      <p className="text-sm md:text-base xl:text-sm">
        © {new Date().getFullYear()} Igor Bernardes
      </p>
    </footer>
  );
});

const Footer = () => <ModelFooter />;

export default memo(Footer);
