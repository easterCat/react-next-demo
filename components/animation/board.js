import React, { useRef } from "react";
import { clamp } from "lodash";
import swap from "lodash-move";
import { useGesture } from "react-use-gesture";
import { useSprings, animated, interpolate } from "react-spring";
import { Icon } from "antd";

const defaultHeight = 70;

const fn = (order, down, originalIndex, curIndex, y) => index => {
  return down && index === originalIndex
    ? {
        y: curIndex * defaultHeight + y,
        scale: 1.05,
        zIndex: "1",
        shadow: 15,
        immediate: n => n === "y" || n === "zIndex"
      }
    : { y: order.indexOf(index) * defaultHeight, scale: 1, zIndex: "0", shadow: 1, immediate: false };
};

export default function DraggableList({ items }) {
  const order = useRef(items.map((_, index) => index)); // Store indicies as a local ref, this represents the item order
  const [springs, setSprings] = useSprings(items.length, fn(order.current)); // Create springs, each corresponds to an item, controlling its transform, scale, etc.

  const bind = useGesture({
    onDrag: state => {
      const {
        args: [originalIndex],
        down,
        delta: [, y]
      } = state;
      const curIndex = order.current.indexOf(originalIndex);
      const curRow = clamp(Math.round((curIndex * defaultHeight + y) / 100), 0, items.length - 1);
      const newOrder = swap(order.current, curIndex, curRow);
      setSprings(fn(newOrder, down, originalIndex, curIndex, y)); // Feed springs new style data, they'll animate the view without causing a single render
      if (!down) order.current = newOrder;
    }
  });

  const renderChildre = item => {
    return (
      <div>
        {item}
        <span style={{ marginLeft: "6px" }}>
          {item === "文章" && <Icon type="yuque" />}
          {item === "动态" && <Icon type="bulb" />}
          {item === "评论" && <Icon type="coffee" />}
          {item === "热门" && <Icon type="fire" />}
        </span>
      </div>
    );
  };

  return (
    <div className="board" style={{ height: items.length * defaultHeight }}>
      {springs.map(({ zIndex, shadow, y, scale }, i) => (
        <animated.div
          {...bind(i)}
          key={i}
          style={{
            zIndex,
            boxShadow: shadow.interpolate(s => `rgba(0, 0, 0, 0.15) 0px ${s}px ${2 * s}px 0px`),
            transform: interpolate([y, scale], (y, s) => {
              return `translate3d(0,${y}px,0) scale(${s})`;
            })
          }}
          children={renderChildre(items[i])}
        />
      ))}
      <style jsx global>{`
        .board {
          position: relative;
          width: 260px;
          min-height: 240px;
        }

        .board > div {
          position: absolute;
          width: 100%;
          height: 60px;
          overflow: visible;
          pointer-events: auto;
          transform-origin: 50% 50% 0px;
          border-radius: 5px;
          color: white;
          line-height: 60px;
          font-size: 14.5px;
          background: lightblue;
          text-transform: uppercase;
          letter-spacing: 2px;
          cursor: pointer;
          font-weight: 700;
          letter-spacing: 6px;
          text-align: center;
        }

        .board > div:nth-child(1) {
          background: linear-gradient(135deg, #f6d365 0%, #fda085 100%);
        }
        .board > div:nth-child(2) {
          background: linear-gradient(135deg, #c3cfe2 0%, #c3cfe2 100%);
        }
        .board > div:nth-child(3) {
          background: linear-gradient(135deg, #5ee7df 0%, #b490ca 100%);
        }
        .board > div:nth-child(4) {
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
        }
      `}</style>
    </div>
  );
}
