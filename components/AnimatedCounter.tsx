"use client";

import CountUp from "react-countup";

type AnimatedCounterProps = {
  amount: number;
};
const AnimatedCounter = ({ amount }: AnimatedCounterProps) => {
  return (
    <div className="w-full">
      <CountUp end={amount} decimal="," prefix="$" decimals={2} />
    </div>
  );
};

export default AnimatedCounter;
