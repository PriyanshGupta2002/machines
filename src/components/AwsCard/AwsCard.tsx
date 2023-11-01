import React from "react";

interface AwsCardProps {
  machineName: string;
  region: string;
  descripiton: string;
}
import awsLogo from "../../assets/aws_logo.svg";
import Toogle from "../inputs/Toogle";
const AwsCard: React.FC<AwsCardProps> = ({
  machineName,
  region,
  descripiton,
}) => {
  return (
    <div className="flex flex-col gap-6 p-4 bg-white shadow-lg rounded-md ">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <img src={awsLogo} alt="" className="w-8 h-8" />
        <h3 className="text-neutral-600 font-semibold">{machineName}</h3>
        <Toogle />
      </div>
      <div className="text-neutral-400 text-base">Region - {region}</div>
      <p className="text-sm text-black">{descripiton}</p>
    </div>
  );
};

export default AwsCard;
