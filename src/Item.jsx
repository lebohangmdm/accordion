import { useState } from "react";

const Item = ({ item }) => {
  const { number, text, description } = item;
  const [open, setOpen] = useState(false);
  return (
    <div class={`item ${open ? "open" : ""}`}>
      <p class="number">{number}</p>
      <p class="text">{text}</p>
      <button className="icon" onClick={() => setOpen((open) => !open)}>
        {open ? "-" : "+"}
      </button>

      <div class="hidden-box">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Item;
