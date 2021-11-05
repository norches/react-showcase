import React, { useState, useEffect } from "react";
import updatePathHook from "../../hooks/updatePathHook";

interface RouteProps {
  path: string;
  children: React.ReactNode;
}

const Route = (props: RouteProps) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    updatePathHook(() => setCurrentPath(window.location.pathname));
  }, []);
  return <>{currentPath === props.path ? props.children : null}</>;
};

export default Route;
