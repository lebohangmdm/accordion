import Item from "./Item";
import { accordions } from "./data";

const Accordion = () => {
  return (
    <div className="accordion">
      {accordions.map((item) => (
        <Item key={item.number} item={item} />
      ))}
    </div>
  );
};

export default Accordion;
