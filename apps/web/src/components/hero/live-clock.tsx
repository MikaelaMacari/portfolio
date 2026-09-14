"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const CHISINAU_TIME_ZONE = "Europe/Chisinau";

const timeFormatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: CHISINAU_TIME_ZONE,
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hourCycle: "h23",
});

function formatTime(date: Date) {
  return timeFormatter.format(date);
}

export function LiveClock() {
  const t = useTranslations("Hero");
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(formatTime(new Date()));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <span>
      {time ?? "--:--:--"} {t("clockLabel")}
    </span>
  );
}
