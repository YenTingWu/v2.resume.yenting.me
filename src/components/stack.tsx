import * as React from "react";

interface StackProps {
  category: string;
  items: string[];
}

export const Stack = ({ category, items }: StackProps) => {
  return (
    <div
      className="
      flex 
      w-full 
      lg:[&:not(:first-child)]:mt-2
      sm:[&:not(:first-child)]:mt-1
    "
    >
      <span
        className="
        md:min-w-[73px]
        min-w-[66px]
        font-bold
        text-right
        whitespace-nowrap	
      "
      >
        {category}
      </span>
      <span
        className="
        lg:ml-5
        sm:ml-3
        ml-2
        flex-[1]
      "
      >
        {items.map((v, i) => (i === items.length - 1 ? `${v}` : `${v}, `))}
      </span>
    </div>
  );
};
