"use client";

import { useEffect, useState } from "react";

interface Props {
  size: number;
  number: number | string;
}

/* Constants */
const baseWidth = 8.5;
const baseBorderWidth = 7;
const baseBorderHeight = 5;
const baseBorder = 1;
const baseMiddleHeight = 0.66;

export default function DigitalNumber({ size, number }: Props) {
  /* Sizes */
  const width = baseWidth * size;
  const borderWidth = baseBorderWidth * size;
  const borderHeight = baseBorderHeight * size;
  const border = baseBorder * size;
  const middleHeight = baseMiddleHeight * size;

  /* Colors */
  const [topColor, setTopColor] = useState("#F2F2F2");
  const [topLeftColor, setTopLeftColor] = useState("#F2F2F2");
  const [topRightColor, setTopRightColor] = useState("#F2F2F2");
  const [middleColor, setMiddleColor] = useState("#F2F2F2");
  const [bottomLeftColor, setBottomLeftColor] = useState("#F2F2F2");
  const [bottomRightColor, setBottomRightColor] = useState("#F2F2F2");
  const [bottomColor, setBottomColor] = useState("#F2F2F2");

  useEffect(() => {
    if (number === 0 || number === "0") {
      setTopColor("#F2F2F2");
      setTopLeftColor("#F2F2F2");
      setTopRightColor("#F2F2F2");
      setMiddleColor("#1E1E1E");
      setBottomLeftColor("#F2F2F2");
      setBottomRightColor("#F2F2F2");
      setBottomColor("#F2F2F2");
    } else if (number === 1 || number === "1") {
      setTopColor("#1E1E1E");
      setTopLeftColor("#1E1E1E");
      setTopRightColor("#F2F2F2");
      setMiddleColor("#1E1E1E");
      setBottomLeftColor("#1E1E1E");
      setBottomRightColor("#F2F2F2");
      setBottomColor("#1E1E1E");
    } else if (number === 2 || number === "2") {
      setTopColor("#F2F2F2");
      setTopLeftColor("#1E1E1E");
      setTopRightColor("#F2F2F2");
      setMiddleColor("#F2F2F2");
      setBottomLeftColor("#F2F2F2");
      setBottomRightColor("#1E1E1E");
      setBottomColor("#F2F2F2");
    } else if (number === 3 || number === "3") {
      setTopColor("#F2F2F2");
      setTopLeftColor("#1E1E1E");
      setTopRightColor("#F2F2F2");
      setMiddleColor("#F2F2F2");
      setBottomLeftColor("#1E1E1E");
      setBottomRightColor("#F2F2F2");
      setBottomColor("#F2F2F2");
    } else if (number === 4 || number === "4") {
      setTopColor("#1E1E1E");
      setTopLeftColor("#F2F2F2");
      setTopRightColor("#F2F2F2");
      setMiddleColor("#F2F2F2");
      setBottomLeftColor("#1E1E1E");
      setBottomRightColor("#F2F2F2");
      setBottomColor("#1E1E1E");
    } else if (number === 5 || number === "5") {
      setTopColor("#F2F2F2");
      setTopLeftColor("#F2F2F2");
      setTopRightColor("#1E1E1E");
      setMiddleColor("#F2F2F2");
      setBottomLeftColor("#1E1E1E");
      setBottomRightColor("#F2F2F2");
      setBottomColor("#F2F2F2");
    } else if (number === 6 || number === "6") {
      setTopColor("#F2F2F2");
      setTopLeftColor("#F2F2F2");
      setTopRightColor("#1E1E1E");
      setMiddleColor("#F2F2F2");
      setBottomLeftColor("#F2F2F2");
      setBottomRightColor("#F2F2F2");
      setBottomColor("#F2F2F2");
    } else if (number === 7 || number === "7") {
      setTopColor("#F2F2F2");
      setTopLeftColor("#1E1E1E");
      setTopRightColor("#F2F2F2");
      setMiddleColor("#1E1E1E");
      setBottomLeftColor("#1E1E1E");
      setBottomRightColor("#F2F2F2");
      setBottomColor("#1E1E1E");
    } else if (number === 8 || number === "8") {
      setTopColor("#F2F2F2");
      setTopLeftColor("#F2F2F2");
      setTopRightColor("#F2F2F2");
      setMiddleColor("#F2F2F2");
      setBottomLeftColor("#F2F2F2");
      setBottomRightColor("#F2F2F2");
      setBottomColor("#F2F2F2");
    } else if (number === 9 || number === "9") {
      setTopColor("#F2F2F2");
      setTopLeftColor("#F2F2F2");
      setTopRightColor("#F2F2F2");
      setMiddleColor("#F2F2F2");
      setBottomLeftColor("#1E1E1E");
      setBottomRightColor("#F2F2F2");
      setBottomColor("#F2F2F2");
    }
  }, [number]);

  return (
    <div className="flex flex-col items-center" style={{ width: `${width}px` }}>
      {/* <div
        className="border-l-transparent border-r-transparent"
        style={{
          borderBottomWidth: `${border}px`,
          borderLeftWidth: `${border}px`,
          borderRightWidth: `${border}px`,
          width: `${borderWidth}px`,
          borderBottomColor: topColor,
        }}
      ></div> */}
      <div
        className="border-l-transparent border-r-transparent"
        style={{
          borderTopWidth: `${border}px`,
          borderLeftWidth: `${border}px`,
          borderRightWidth: `${border}px`,
          width: `${borderWidth}px`,
          borderTopColor: topColor,
        }}
      />
      <div className="flex justify-between w-full">
        <div className="flex">
          {/* <div
            className="border-t-transparent border-b-transparent"
            style={{
              borderTopWidth: `${border}px`,
              borderRightWidth: `${border}px`,
              borderBottomWidth: `${border}px`,
              height: `${borderHeight}px`,
              borderRightColor: topLeftColor,
            }}
          ></div> */}
          <div
            className="border-t-transparent border-b-transparent"
            style={{
              borderTopWidth: `${border}px`,
              borderLeftWidth: `${border}px`,
              borderBottomWidth: `${border}px`,
              height: `${borderHeight}px`,
              borderLeftColor: topLeftColor,
            }}
          />
        </div>
        <div className="flex">
          <div
            className="border-t-transparent border-b-transparent"
            style={{
              borderTopWidth: `${border}px`,
              borderRightWidth: `${border}px`,
              borderBottomWidth: `${border}px`,
              height: `${borderHeight}px`,
              borderRightColor: topRightColor,
            }}
          />
          {/* <div
            className="border-t-transparent border-b-transparent"
            style={{
              borderTopWidth: `${border}px`,
              borderLeftWidth: `${border}px`,
              borderBottomWidth: `${border}px`,
              height: `${borderHeight}px`,
              borderLeftColor: topRightColor,
            }}
          ></div> */}
        </div>
      </div>
      <div
        className="border-l-transparent border-r-transparent"
        style={{
          borderBottomWidth: `${middleHeight}px`,
          borderLeftWidth: `${border}px`,
          borderRightWidth: `${border}px`,
          width: `${borderWidth}px`,
          borderBottomColor: middleColor,
        }}
      />
      <div
        className="border-l-transparent border-r-transparent"
        style={{
          borderTopWidth: `${middleHeight}px`,
          borderLeftWidth: `${border}px`,
          borderRightWidth: `${border}px`,
          width: `${borderWidth}px`,
          borderTopColor: middleColor,
        }}
      />
      <div className="flex justify-between w-full">
        <div className="flex">
          {/* <div
            className="border-t-transparent border-b-transparent"
            style={{
              borderTopWidth: `${border}px`,
              borderRightWidth: `${border}px`,
              borderBottomWidth: `${border}px`,
              height: `${borderHeight}px`,
              borderRightColor: bottomLeftColor,
            }}
          ></div> */}
          <div
            className="border-t-transparent border-b-transparent"
            style={{
              borderTopWidth: `${border}px`,
              borderLeftWidth: `${border}px`,
              borderBottomWidth: `${border}px`,
              height: `${borderHeight}px`,
              borderLeftColor: bottomLeftColor,
            }}
          />
        </div>
        <div className="flex">
          <div
            className="border-t-transparent border-b-transparent"
            style={{
              borderTopWidth: `${border}px`,
              borderRightWidth: `${border}px`,
              borderBottomWidth: `${border}px`,
              height: `${borderHeight}px`,
              borderRightColor: bottomRightColor,
            }}
          />
          {/* <div
            className="border-t-transparent border-b-transparent"
            style={{
              borderTopWidth: `${border}px`,
              borderLeftWidth: `${border}px`,
              borderBottomWidth: `${border}px`,
              height: `${borderHeight}px`,
              borderLeftColor: bottomRightColor,
            }}
          ></div> */}
        </div>
      </div>
      <div
        className="border-l-transparent border-r-transparent"
        style={{
          borderBottomWidth: `${border}px`,
          borderLeftWidth: `${border}px`,
          borderRightWidth: `${border}px`,
          width: `${borderWidth}px`,
          borderBottomColor: bottomColor,
        }}
      />
      {/* <div
        className="border-l-transparent border-r-transparent"
        style={{
          borderTopWidth: `${border}px`,
          borderLeftWidth: `${border}px`,
          borderRightWidth: `${border}px`,
          width: `${borderWidth}px`,
          borderTopColor: bottomColor,
        }}
      ></div> */}
    </div>
  );
}
