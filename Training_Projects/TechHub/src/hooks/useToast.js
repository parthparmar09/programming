import { useCallback } from "react";
import toast from "react-hot-toast";

const useToast = () => {
  const showError = useCallback((message) => {
    toast.error(message);
  }, []);

  const showSuccess = useCallback((message) => {
    toast.success(message);
  }, []);

  return { showError, showSuccess };
};

export default useToast;
