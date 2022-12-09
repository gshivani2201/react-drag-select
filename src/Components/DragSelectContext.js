import React, { createContext, useState, useEffect, useContext } from "react";
import DragSelect from "dragselect";

const Context = createContext(undefined);

function DragSelectProvider({ children, settings = {} }) {
  const [ds, setDS] = useState();
  useEffect(() => {
    setDS((prevState) => {
      if (prevState) return prevState;
      return new DragSelect({});
    });
    return () => {
      if (ds) {
        ds.stop();
        setDS(undefined);
      }
    };
  }, [ds]);

  useEffect(() => {
    ds && ds.setSettings(settings);
  }, [ds, settings]);

  return <Context.Provider value={ds}>{children}</Context.Provider>;
}

function useDragSelect() {
  return useContext(Context);
}

export { DragSelectProvider, useDragSelect };
