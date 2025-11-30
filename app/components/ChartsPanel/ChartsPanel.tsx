import { FirstChart } from "./FirstChart";
import { SecondChart } from "./SecondChart";
import { ThirdChart } from "./ThirdChart";

export const ChartsPanel = () => (
  <div className="w-full mt-4 grid grid-cols-2 gap-4">
    <FirstChart />
    <SecondChart />
    <ThirdChart />
  </div>
);
