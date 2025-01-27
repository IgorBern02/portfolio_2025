import React, { memo } from "react";

// function footer() {
//   return (
//     <div
//       id="contato"
//       className="bg-bgProjetos gap-3 text-white w-full h-auto p-3 relative top-7 flex flex-col items-center justify-center"
//     >
//       <p className="md:text-xl">©IgorBernardes</p>
//     </div>
//   );
// }

const ModelFooter = memo(() => {
  return (
    <div
      id="contato"
      className="bg-bgProjetos gap-3 text-white w-full h-auto py-5 flex flex-col items-center justify-center"
    >
      <p className="text-sm">©IgorBernardes</p>
    </div>
  );
});

const Footer = () => {
  return <ModelFooter />;
};

export default memo(Footer);
