import React, { useEffect, useRef } from "react";
import { useDragSelect } from "./DragSelectContext";

export const DragSelectComp = () => {
  const ds = useDragSelect();
  const inputEl = useRef(null);

  // adding a selectable element
  useEffect(() => {
    const element = inputEl.current;
    if (!element || !ds) return;
    ds.addSelectables(element);
  }, [ds, inputEl]);

  // subscribing to a callback
  useEffect(() => {
    const id =
      ds &&
      ds.subscribe("callback", (e) => {
        // do something
        console.log(e);
      });

    return () => {
      ds && ds.unsubscribe("callback", null, id);
    };
  }, [ds]);

  return (
    <button ref={inputEl} aria-labelledby="Selectable">
      Selectable
    </button>
  );
};