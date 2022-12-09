import React from "react";

import { DragSelectProvider } from "./Components/DragSelectContext";
import { DragSelectComp } from "./Components/DragSelectComp";

export const App = () => (
  // you can add initial settings by passing a settings object
  <DragSelectProvider settings={{}}>
    <DragSelectComp />
  </DragSelectProvider>
);