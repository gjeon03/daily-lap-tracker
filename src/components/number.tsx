"use client";

import { useEffect, useState } from "react";

interface Props {
  size: number;
}

const baseWidth = 8.5;
const baseBorderWidth = 6.25;
const baseBorderHeight = 5;
const baseBorder = 1;

export default function Number({ size }: Props) {
  const width = baseWidth * size;
  const borderWidth = baseBorderWidth * size;
  const borderHeight = baseBorderHeight * size;
  const border = baseBorder * size;

  return (
    <div className="flex flex-col items-center" style={{ width: `${width}px` }}>
      <div
        className="border-b-secondary border-l-transparent border-r-transparent"
        style={{
          borderBottomWidth: `${border}px`,
          borderLeftWidth: `${border}px`,
          borderRightWidth: `${border}px`,
          width: `${borderWidth}px`,
        }}
      ></div>
      <div
        className="border-t-secondary border-l-transparent border-r-transparent"
        style={{
          borderTopWidth: `${border}px`,
          borderLeftWidth: `${border}px`,
          borderRightWidth: `${border}px`,
          width: `${borderWidth}px`,
        }}
      ></div>
      <div className="flex justify-between w-full">
        <div className="flex">
          <div
            className="border-t-transparent border-r-secondary border-b-transparent"
            style={{
              borderTopWidth: `${border}px`,
              borderRightWidth: `${border}px`,
              borderBottomWidth: `${border}px`,
              height: `${borderHeight}px`,
            }}
          ></div>
          <div
            className="border-t-transparent border-l-secondary border-b-transparent"
            style={{
              borderTopWidth: `${border}px`,
              borderLeftWidth: `${border}px`,
              borderBottomWidth: `${border}px`,
              height: `${borderHeight}px`,
            }}
          ></div>
        </div>
        <div className="flex">
          <div
            className="border-t-transparent border-r-secondary border-b-transparent"
            style={{
              borderTopWidth: `${border}px`,
              borderRightWidth: `${border}px`,
              borderBottomWidth: `${border}px`,
              height: `${borderHeight}px`,
            }}
          ></div>
          <div
            className="border-t-transparent border-l-secondary border-b-transparent"
            style={{
              borderTopWidth: `${border}px`,
              borderLeftWidth: `${border}px`,
              borderBottomWidth: `${border}px`,
              height: `${borderHeight}px`,
            }}
          ></div>
        </div>
      </div>
      <div
        className="border-b-secondary border-l-transparent border-r-transparent"
        style={{
          borderBottomWidth: `${border}px`,
          borderLeftWidth: `${border}px`,
          borderRightWidth: `${border}px`,
          width: `${borderWidth}px`,
        }}
      ></div>
      <div
        className="border-t-secondary border-l-transparent border-r-transparent"
        style={{
          borderTopWidth: `${border}px`,
          borderLeftWidth: `${border}px`,
          borderRightWidth: `${border}px`,
          width: `${borderWidth}px`,
        }}
      ></div>
      <div className="flex justify-between w-full">
        <div className="flex">
          <div
            className="border-t-transparent border-r-secondary border-b-transparent"
            style={{
              borderTopWidth: `${border}px`,
              borderRightWidth: `${border}px`,
              borderBottomWidth: `${border}px`,
              height: `${borderHeight}px`,
            }}
          ></div>
          <div
            className="border-t-transparent border-l-secondary border-b-transparent"
            style={{
              borderTopWidth: `${border}px`,
              borderLeftWidth: `${border}px`,
              borderBottomWidth: `${border}px`,
              height: `${borderHeight}px`,
            }}
          ></div>
        </div>
        <div className="flex">
          <div
            className="border-t-transparent border-r-secondary border-b-transparent"
            style={{
              borderTopWidth: `${border}px`,
              borderRightWidth: `${border}px`,
              borderBottomWidth: `${border}px`,
              height: `${borderHeight}px`,
            }}
          ></div>
          <div
            className="border-t-transparent border-l-secondary border-b-transparent"
            style={{
              borderTopWidth: `${border}px`,
              borderLeftWidth: `${border}px`,
              borderBottomWidth: `${border}px`,
              height: `${borderHeight}px`,
            }}
          ></div>
        </div>
      </div>
      <div
        className="border-b-secondary border-l-transparent border-r-transparent"
        style={{
          borderBottomWidth: `${border}px`,
          borderLeftWidth: `${border}px`,
          borderRightWidth: `${border}px`,
          width: `${borderWidth}px`,
        }}
      ></div>
      <div
        className="border-t-secondary border-l-transparent border-r-transparent"
        style={{
          borderTopWidth: `${border}px`,
          borderLeftWidth: `${border}px`,
          borderRightWidth: `${border}px`,
          width: `${borderWidth}px`,
        }}
      ></div>
    </div>
  );
}
