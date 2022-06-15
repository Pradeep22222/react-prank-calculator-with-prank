import React from "react";
import { Button } from "./Button";

export const ButonArea = ({ handleOnClick }) => {
  const buttons = [
    {
      label: "AC",
      clsNm: "box box-AC",
    },
    {
      label: "C",
      clsNm: "box pdm",
    },
    {
      label: "%",
      clsNm: "box box-percent",
    },
    {
      label: "/",
      clsNm: "box box-divide",
    },
    {
      label: "7",
      clsNm: "box box-7",
    },
    {
      label: "8",
      clsNm: "box box-8",
    },
    {
      label: "9",
      clsNm: "box box-9",
    },
    {
      label: "*",
      clsNm: "box box-x",
    },
    {
      label: "4",
      clsNm: "box box-4",
    },
    {
      label: "5",
      clsNm: "box box-5",
    },
    {
      label: "6",
      clsNm: "box box-6",
    },
    {
      label: "-",
      clsNm: "box box-minus",
    },
    {
      label: "1",
      clsNm: "box box-1",
    },
    {
      label: "2",
      clsNm: "box box-2",
    },
    {
      label: "3",
      clsNm: "box box-3",
    },
    {
      label: "+",
      clsNm: "box box-plus",
    },
    {
      label: "0",
      clsNm: "box box-zero",
    },
    {
      label: ".",
      clsNm: "box box-dot",
    },
    {
      label: "=",
      clsNm: "box box-equals",
    },
  ];

  return (
    <>
      {buttons.map((item, i) => {
        // return <Button key={i} clsNm={item.clsNm} label={item.label} />;
        return <Button handleOnClick={handleOnClick} key={i} {...item} />;
      })}
    </>
  );
};
