import React from "react";
import { GoogleColor } from "./content";

export const BadgeIcon = ({
  className,
  color = "black",
}: {
  className?: string;
  color?: GoogleColor | string;
}) => {
  const getController = () => {
    switch (color) {
      case "blue":
        return "blue";
      case "red":
        return "red";
      case "yellow":
        return "yellow";
      case "grey":
        return "grey";
      case "green":
        return "green";
      default:
        return "black";
    }
  };

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/assets/controllers/${getController()}-controller.webp`}
      alt={`${color} controller badge`}
      className={className}
    />
  );
};
