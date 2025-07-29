export function scrollToId(id) {
  const element = document.querySelector(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}
