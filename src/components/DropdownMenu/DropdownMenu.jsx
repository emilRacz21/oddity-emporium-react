import "./DropdownMenu.scss";
export default function DropdownMenu({
  children,
  toggle,
  selectedSectionId = 0,
  index = 0,
}) {
  return (
    <section
      className={`shop-details ${
        toggle && selectedSectionId === index ? "active" : ""
      }`}
    >
      {children}
    </section>
  );
}
