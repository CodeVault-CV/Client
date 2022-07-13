import { useState } from "react";

export default function useView(initialView: string) {
  const [view, setView] = useState(initialView);

  const changeView = (event: React.MouseEvent<HTMLElement>, newView: string) => {
    if (newView !== null) {
      setView(newView);
    }
  };

  return { view, changeView };
}
