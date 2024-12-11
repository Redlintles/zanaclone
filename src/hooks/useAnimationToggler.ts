import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface UseAnimationInViewOptions {
  threshold?: number;
  triggerOnce?: boolean;
  animationClass?: string;
}
export default function useAnimationToggler({
  threshold = 0.1,
  triggerOnce = false,
  animationClass,
}: UseAnimationInViewOptions) {
  const { inView, ref } = useInView({ threshold, triggerOnce });

  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    if (animationClass) {
      if (inView) {
        setShowAnimation(true);
      } else {
        setShowAnimation(false);
      }
    }
  }, [inView, animationClass]);

  return { ref, showAnimation, animationClass };
}
