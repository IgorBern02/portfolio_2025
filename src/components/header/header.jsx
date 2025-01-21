import MenuHamburguer from "./menuHamburguer";

function header() {
  return (
    <div className="w-screen h-auto fixed top-0 z-30 p-2 backdrop-blur-xl">
      <MenuHamburguer />
    </div>
  );
}

export default header;
