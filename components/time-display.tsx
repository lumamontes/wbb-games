import React from "react";

interface TimeDisplayProps {
  gametime: string;
  locale: string;
  flag: string;
  timeZone: string;
}

const TimeDisplay: React.FC<TimeDisplayProps> = ({
  gametime,
  locale,
  flag,
  timeZone,
}) => {
  return (
    <p className="mx-2 text-xs text-gray-800 dark:text-gray-300 font-medium gap-1 flex items-center">
      <span className="text-lg">{flag}</span>
      {new Date(gametime)
        .toLocaleTimeString(locale, {
          hour: "numeric",
          minute: "numeric",
          timeZone: timeZone,
        })
        .split(" ")
        .join("")
        .toLowerCase()}
    </p>
  );
};

export default TimeDisplay;
