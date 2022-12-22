import React from "react";
import "./Overlay.css";

export default function Overlay({ children, ...props }) {
  const overlayRef = React.useRef(null);

  React.useEffect(() => {
    if (!props.isOpen) return;
    const closeByClick = (e) => {
      if (e.target.classList.contains("overlay")) props.closePopups();
    };
    const closeByKey = (e) => {
      if (e.key === "Escape") props.closePopups();
    };
    window.addEventListener("keydown", closeByKey);
    overlayRef.current.addEventListener("mousedown", closeByClick);
    return () => {
      window.removeEventListener("keydown", closeByKey);
      overlayRef.current.removeEventListener("mousedown", closeByClick);
    };
  }, [props.isOpen]);

  return (
    <div
      className={props.isOpen ? "overlay overlay_opened" : "overlay"}
      ref={overlayRef}
    >
      {children}
    </div>
  );
}
