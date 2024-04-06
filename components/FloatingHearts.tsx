"use client";
import { useMemo, useState, useRef, useLayoutEffect, useContext } from "react";
import { HeartIcon } from "./icons/HeartIcon";
import "./FloatingHearts.css";
import { FloatingHeartsContext } from "@/app/floatingHeartsContext";

const MIN_ICON_SIZE = 14;
const MAX_ICON_SIZE = 48;
const ICONS_NUMBER = 35;
const ICON_MARGIN = 20;
const MAX_DELAY = 5;
const MIN_DURATION = 5;
const MAX_DURATION = 15;

function getRandomNumber(min: number, max: number) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);

  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

export const FloatingHearts = () => {
  const { isFloatingHeartsShow } = useContext(FloatingHeartsContext) || {};
  const ref = useRef<HTMLDivElement | null>(null);
  const [boundingWidth, setBoundingRect] = useState(0);

  const icons = useMemo(() => {
    const _icons = [];

    for (let i = 0; i < ICONS_NUMBER; i++) {
      const size = getRandomNumber(MIN_ICON_SIZE, MAX_ICON_SIZE);
      const x = getRandomNumber(0, boundingWidth);
      const y = -(MAX_ICON_SIZE + ICON_MARGIN);
      const delay = getRandomNumber(0, MAX_DELAY);
      const duration = getRandomNumber(MIN_DURATION, MAX_DURATION);

      _icons.push(
        <span
          style={{
            left: x,
            bottom: y,
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
          }}
          className="icon"
          key={`${size}-${x}-${i}`}
        >
          <HeartIcon size={String(size)} color="#f67e7e" />
        </span>
      );
    }

    return _icons;
  }, [boundingWidth]);

  useLayoutEffect(() => {
    if (ref.current) {
      const { width } = ref.current.getBoundingClientRect();
      setBoundingRect(width);
    }
  }, []);

  return (
    <div className="floating-hearts" ref={ref}>
      {isFloatingHeartsShow && icons}
    </div>
  );
};
