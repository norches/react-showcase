const updatePathHook = (setState: () => void) => {
  const onLocationChange = () => {
    setState();
  };
  window.addEventListener("popstate", onLocationChange);
  return () => {
    window.removeEventListener("popstate", onLocationChange);
  };
};

export default updatePathHook;
