import { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";

interface SlideShowProps {
  images: string[];
  timeout?: number;
}

const SlideShowContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
  & > .slide-show__controllers {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
  }
`;

const SlideShowContent = styled.div`
  position: relative;
  overflow: hidden;
  aspect-ratio: 1;
  margin: 0 auto;
  height: 400px;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-100%);
  }
`;

const SlideImage = styled.img<{ isActive: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  transition: opacity 1s ease, transform 1s ease;

  ${({ isActive }) =>
    isActive
      ? css`
          animation: ${fadeIn} 1s forwards;
        `
      : css`
          animation: ${fadeOut} 1s forwards;
        `}
`;

const SlideController = styled.button<{ isActive: boolean }>`
  background-color: gray;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  margin: 0 0.5rem;
  cursor: pointer;
  ${({ isActive }) =>
    isActive
      ? css`
          background-color: var(--color-dark-bg);
        `
      : css`
          background-color: var(--color-gray);
        `};
`;

export default function SlideShow({ images, timeout = 3000 }: SlideShowProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const startInterval = () => {
    if (intervalId) {
      clearInterval(intervalId);
    }

    const newIntervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, timeout);

    setIntervalId(newIntervalId);
  };

  const handleButtonClick = (index: number) => {
    setCurrentIndex(index);
    startInterval();
  };

  useEffect(() => {
    startInterval();

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images.length, timeout]);

  return (
    <SlideShowContainer>
      <SlideShowContent>
        {images.map((src, index) => (
          <SlideImage key={index} src={src} isActive={index === currentIndex} />
        ))}
      </SlideShowContent>

      <div className="slide-show__controllers">
        {images.map((_, index) => (
          <SlideController
            isActive={index === currentIndex}
            onClick={() => handleButtonClick(index)}
          />
        ))}
      </div>
    </SlideShowContainer>
  );
}
