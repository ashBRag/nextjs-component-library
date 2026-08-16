import "../chunk-FJBZBVPE.mjs";
import { useState } from "react";
const useToast = () => {
  const [, setToasts] = useState([]);
  const addToast = (type, message, duration) => {
    const id = Date.now().toString();
    setToasts((prev) => [...prev, { id, type, message, duration }]);
  };
  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };
  return {
    addToast,
    removeToast,
    success: (msg, duration) => addToast("success", msg, duration),
    error: (msg, duration) => addToast("error", msg, duration),
    warning: (msg, duration) => addToast("warning", msg, duration),
    info: (msg, duration) => addToast("info", msg, duration)
  };
};
export {
  useToast
};
//# sourceMappingURL=useToast.mjs.map