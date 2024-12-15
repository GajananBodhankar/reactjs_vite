import { Ref, useState, useRef, useEffect } from "react";

export function useHover<T extends HTMLElement>(): [Ref<T>, boolean] {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<any>();
  useEffect(() => {
    setHovered(false);

    ref.current.addEventListener("mouseenter", () => {
      setHovered(true);
    });
    ref.current.addEventListener("mouseleave", () => {
      setHovered(false);
    });
    return () => {
      ref.current.removeEventListener("mouseenter", () => {
        setHovered(true);
      });
      ref.current.removeEventListener("mouseleave", () => {
        setHovered(false);
      });
    };
  }, [ref.current]);
  return [ref, hovered];
}
