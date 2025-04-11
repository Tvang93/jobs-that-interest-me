"use client";

import {
  useJobSelectionContext,
  useMadeSelectionContext,
} from "@/context/SelectionContext";
import React, { useState } from "react";
import JobInfo from "@/utils/jobinfo.json";

interface IJobData {
  id: number;
  jobCompany: string;
  jobImage: string;
  jobCulture: string;
  jobBenefit: string;
  jobHybrid: string;
  jobLocation: string;
  jobStackAndSkill: string;
  jobAchieve: string;
  jobCurrentSkillset: string;
  jobCompanyLink: string;
  jobPositionLink: string
}

const JobComponent = () => {
  const { setSelectionMade } = useMadeSelectionContext();
  const { jobSelection, setJobSelection } = useJobSelectionContext();
  const [jobData, setJobData] = useState<IJobData[]>(JobInfo);

  console.log(jobData);
  const filteredJobData = jobData.filter(
    (items) => items.jobCompany == jobSelection
  );
  console.log(filteredJobData);

  const handleCloseButton = () => {
    setJobSelection(null);
    setSelectionMade(false);
  };

  return (
    <div>
      <div
        className="relative bg-no-repeat bg-cover bg-center h-40"
        style={{ backgroundImage: `url(${filteredJobData[0].jobImage})` }}
      >
        <div className="w-full h-full flex justify-center text-yellow-200 text-7xl">
          <h1 className="self-center text-shadow-lg text-shadow-amber-900 whitespace-nowrap underline">
            {filteredJobData[0].jobCompany}
          </h1>
        </div>
        <button
          className="absolute top-2 right-10 bg-white rounded-full w-20 text-black border-1 hover:cursor-pointer hover:bg-[#868686] hover:text-white hover:border-white"
          onClick={handleCloseButton}
        >
          Go Back
        </button>
      </div>
      <div className="px-4 py-2">
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="text-2xl font-bold">Why I want to work there?</h2>
            <div className="grid grid-cols-4 gap-5">
              <div className="flex flex-col border-1 rounded-2xl p-4">
                <h3 className="text-xl font-bold">Culture:</h3>
                <p>{filteredJobData[0].jobCulture}</p>
              </div>
              <div className="flex flex-col border-1 rounded-2xl p-4">
                <h3 className="text-xl font-bold">Benefits:</h3>
                <p>{filteredJobData[0].jobBenefit}</p>
              </div>
              <div className="flex flex-col border-1 rounded-2xl p-4">
                <h3 className="text-xl font-bold">Hybrid:</h3>
                <p>{filteredJobData[0].jobHybrid}</p>
              </div>
              <div className="flex flex-col border-1 rounded-2xl p-4">
                <h3 className="text-xl font-bold">Location:</h3>
                <p>{filteredJobData[0].jobLocation}</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold">
              Does the job require the current stack that you know? Would you
              have learn new skills?
            </h2>
            <div className="flex flex-col border-1 rounded-2xl p-4">
              <p>{filteredJobData[0].jobStackAndSkill}</p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold">
              What goals would you like to achieve in the hypothetical position?
            </h2>
            <div className="flex flex-col border-1 rounded-2xl p-4">
              <p>{filteredJobData[0].jobAchieve}</p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold">
              Do you currently have the skillsets for the job?
            </h2>
            <div className="flex flex-col border-1 rounded-2xl p-4">
              <p>{filteredJobData[0].jobCurrentSkillset}</p>
            </div>
          </div>
          <div className="flex justify-around">
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-bold">Company</h3>
              <a href="" className="text-blue-700 hover:text-blue-400 underline">{filteredJobData[0].jobCompanyLink}</a>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-bold">Position</h3>
              <a href="" className="text-blue-700 hover:text-blue-400 underline">{filteredJobData[0].jobPositionLink}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobComponent;
