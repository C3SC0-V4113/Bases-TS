import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface HookProps {
  maxCount?: number;
}

export const useCounter = ({ maxCount = 10 }: HookProps) => {
  const [counter, setCounter] = useState(5);

  const elementToAnimate = useRef<HTMLHeadingElement>(null);

  const timeLine = useRef(gsap.timeline());

  const handleClick = () => {
    setCounter((prev) => Math.min(prev + 1, maxCount));
  };

  useLayoutEffect(() => {
    if (!elementToAnimate.current) return;

    timeLine.current
      .to(elementToAnimate.current, {
        y: -10,
        duration: 0.2,
        ease: "ease.out",
      })
      .to(elementToAnimate.current, {
        y: 0,
        duration: 1,
        ease: "bounce.out",
      })
      .pause();
  }, []);

  useEffect(() => {
    if (counter < maxCount) return;

    timeLine.current.play(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);

  return {
    // properties
    counter,
    elementToAnimate,
    //methods
    handleClick,
  };
};
