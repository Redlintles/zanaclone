import styled from "styled-components";
import useAnimationToggler from "../../hooks/useAnimationToggler";

const StyledTimelineItem = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: flex-start;

  & > div {
    flex: 1;
    max-width: 7rem;
    overflow-wrap: break-word;
    word-wrap: break-word;
    padding: 0.9rem;
    @media (min-width: 768px) {
      max-width: 10.88rem;
      padding: 1.5rem;
    }
    @media (min-width: 996px) {
      max-width: 14.11rem;
    }
    @media (min-width: 1200px) {
      max-width: 17rem;
    }
    opacity: 0;
    visibility: hidden;

    transition: 0.5s ease opacity, 0.5s ease transform, 0.5s ease visibility;
    position: relative;
    background-color: var(--color-yellow);
    border-radius: 10px;
    border: 1px solid var(--color-yellow-dark);
    top: -2rem;

    & > h6 {
      font-weight: 500;
      margin-bottom: 0.5rem;
    }
  }

  &.timeline__item--left {
    & > div {
      margin-left: 10%;
      transform: translate(-100%, 0%);
    }

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
      left: calc(50% - 0.55rem);
      top: -5rem;
      width: 1rem;
      height: 1rem;
      background-color: white;
      border: 2px solid var(--color-gray);
      z-index: 3;
      border-radius: 50%;
    }
  }
  &.timeline__item--right {
    justify-content: flex-end;

    & > div {
      margin-right: 10%;
      transform: translate(100%, 0%);
    }

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
      top: -5rem;
      left: calc(50% - 0.55rem);

      background-color: white;
      border: 2px solid var(--color-gray);
      z-index: 3;
      border-radius: 50%;
    }
  }

  &.timeline__item--slide-in-left > div {
    opacity: 1;
    transform: translate(0%);
    visibility: visible;
  }
  &.timeline__item--slide-in-right > div {
    opacity: 1;
    transform: translate(0%);
    visibility: visible;
  }
`;

interface TimelineItemProps {
  type: "left" | "right";
  text: string;
  year: number;
}
export default function TimelineItem({ type, text, year }: TimelineItemProps) {
  const { ref, animationClass, showAnimation } = useAnimationToggler({
    threshold: 0.75,
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
