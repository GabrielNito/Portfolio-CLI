import { useEffect } from "react";

import General from "./scripts/General.js";

function JS() {
  useEffect(() => {
    General();
  }, []);
  return null;
}

export default JS;
