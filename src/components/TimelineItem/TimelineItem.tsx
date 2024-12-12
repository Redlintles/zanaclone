import React from "react";
import styled from "styled-components";
import { SlideInFromLeft, SlideInFromRight } from "../../Animations/SlideIn";
import useAnimationToggler from "../../hooks/useAnimationToggler";

const StyledTimelineItem = styled.div`
  position: relative;
  width: 17rem;
  & > div {
    position: relative;
    background-color: var(--color-yellow);
    border-radius: 10px;
    border: 1px solid var(--color-yellow-dark);
    padding: 1.5rem;
    top: -2rem;

    & > h6 {
      font-weight: 500;
      margin-bottom: 0.5rem;
    }
  }

  &.timeline__item--left {
    left: 12%;
    & > div::before {
      --height: 1rem;
      content: "";
      position: absolute;
      border-top: var(--height) solid transparent;
      border-bottom: var(--height) solid transparent;
      border-left: var(--height) solid var(--color-yellow);
      top: calc(50% - calc(var(--height)));
      right: calc(var(--height) * -1);
    }

    &::after {
      content: "";
      position: absolute;
      width: 1rem;
      height: 1rem;
      background-color: white;
      border: 2px solid var(--color-gray);
      z-index: 3;
      border-radius: 50%;
      top: -60%;
      right: -26.8%;
    }
  }
  &.timeline__item--right {
    left: 58%;

    & > div::before {
      --height: 1rem;
      content: "";
      position: absolute;
      border-top: var(--height) solid transparent;
      border-bottom: var(--height) solid transparent;
      border-right: var(--height) solid var(--color-yellow);
      top: calc(50% - calc(var(--height)));
      left: calc(var(--height) * -1);
    }

    &::after {
      content: "";
      position: absolute;
      width: 1rem;
      height: 1rem;
      background-color: white;
      border: 2px solid var(--color-gray);
      z-index: 3;
      border-radius: 50%;
      top: -60%;
      left: -29.2%;
    }
  }

  &.timeline__item--slide-in-left > div {
    animation: ${SlideInFromLeft(100)} 0.5s ease;
  }
  &.timeline__item--slide-in-right > div {
    animation: ${SlideInFromRight(100)} 0.5s ease;
  }
`;

interface TimelineItemProps {
  type: "left" | "right";
  text: string;
  year: number;
}
export default function TimelineItem({ type, text, year }: TimelineItemProps) {
  const { ref, animationClass, showAnimation } = useAnimationToggler({
    animationClass:
      type === "left"
        ? "timeline__item--slide-in-left"
        : "timeline__item--slide-in-right",
  });

  return (
    <StyledTimelineItem
      ref={ref}
      className={
        (type === "left" ? "timeline__item--left" : "timeline__item--right") +
        (showAnimation ? " " + animationClass : "")
      }
    >
      <div>
        <h6>{year}</h6>
        <span>{text}</span>
      </div>
    </StyledTimelineItem>
  );
}
