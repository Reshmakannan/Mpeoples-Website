import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollToTop = () => {
      // 1. window scroll (normal case)
      window.scrollTo(0, 0);

      // 2. fallback for scrollable layouts
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;

      // 3. if app uses custom scroll container
      const app = document.querySelector("#root");
      if (app) {
        app.scrollTop = 0;
      }
    };

    requestAnimationFrame(() => {
      scrollToTop();
    });

  }, [pathname]);

  return null;
}

export default ScrollToTop;