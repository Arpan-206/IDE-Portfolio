import { useState, useEffect } from "react";

interface ResizeValues {
  sidebarMin: number;
  sidebarMax: number;
  minSize: number;
  fontSize: number;
}

/**
 * Hook to handle responsive sizing based on window width
 * Returns sidebar constraints and editor sizing
 */
export function useWindowResize(): ResizeValues {
  const [sidebarMin, setSidebarMin] = useState(160);
  const [sidebarMax, setSidebarMax] = useState(420);
  const [minSize, setMinSize] = useState(200);
  const [fontSize, setFontSize] = useState(14);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setSidebarMin(Math.max(160, width * 0.1));
      setSidebarMax(Math.min(420, width * 0.3));
      setMinSize(Math.max(200, width * 0.15));
      setFontSize(Math.max(14, Math.min(18, width * 0.01)));
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { sidebarMin, sidebarMax, minSize, fontSize };
}
