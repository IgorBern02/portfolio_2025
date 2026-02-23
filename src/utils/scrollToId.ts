export function scrollToId(id: string): void {
  const element = document.querySelector<HTMLElement>(id);

  element?.scrollIntoView({
    behavior: "smooth",
  });
}
