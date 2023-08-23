import * as React from "react";

const BOLD_SIGN = "**";

export function parseText(text: string) {
  const textArr = text.split(" ");
  const totalLength = textArr.length;

  const sequences = textArr.reduce((acc, s, index) => {
    const lastItem = acc[acc.length - 1];

    // ex. lastItem = **Not Completed, currentItem = Yet**
    const isLastItemNotCompleted =
      typeof lastItem === "string" &&
      lastItem.startsWith(BOLD_SIGN) &&
      !lastItem.endsWith(BOLD_SIGN);

    if (isLastItemNotCompleted) {
      const newAcc = [...acc];
      const concat = `${lastItem} ${s}`;
      newAcc.pop();
      return [...newAcc, checkIfBoldString(concat, { index, totalLength })];
    }

    return [...acc, checkIfBoldString(s, { index, totalLength })];
  }, [] as (string | React.ReactNode)[]);

  return React.createElement(React.Fragment, {}, ...sequences);
}

function checkIfBoldString(
  s: string,
  meta: { index: number; totalLength: number }
) {
  const { index, totalLength } = meta;
  const isBold = s.startsWith(BOLD_SIGN) && s.endsWith(BOLD_SIGN);

  return isBold
    ? React.createElement(
        "b",
        {},
        addSpace(s.replaceAll(BOLD_SIGN, ""), {
          index,
          totalLength,
        })
      )
    : addSpace(s, { index, totalLength });
}

function addSpace(str: string, meta: { index: number; totalLength: number }) {
  const { index, totalLength } = meta;
  return index === totalLength - 1 ? str : `${str} `;
}
