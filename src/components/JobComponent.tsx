'use client'

import { useJobSelectionContext, useMadeSelectionContext } from '@/context/SelectionContext'
import React, { useState } from 'react'
import JobInfo from "@/utils/jobinfo.json"

interface IJobData {
  id: number,
  jobLocation: string,
  jobImage: string
}

const JobComponent = () => {
    const {setSelectionMade} = useMadeSelectionContext();
    const {jobSelection, setJobSelection} = useJobSelectionContext();
    const [jobData, setJobData] = useState<IJobData[]>(JobInfo)

    console.log(jobData)
    const filteredJobData = jobData.filter(items => items.jobLocation == jobSelection)
    console.log(filteredJobData)

    const handleCloseButton = () => {
        setJobSelection(null);
        setSelectionMade(false);
    }



  return (
    <div>
        <div className='relative bg-no-repeat bg-cover bg-center h-40' style={{ backgroundImage: `url(${filteredJobData[0].jobImage})`}}>
          <div className='w-full h-full flex justify-center text-yellow-200 text-7xl'>
            <h1 className='self-center text-shadow-lg text-shadow-amber-900 whitespace-nowrap'>{filteredJobData[0].jobLocation}</h1>
          </div>
          <button className='absolute top-2 right-10 bg-white rounded-full w-10 text-black border-1 hover:cursor-pointer hover:bg-black hover:text-white hover:border-white' onClick={handleCloseButton}>X</button>
        </div>
    </div>
  )
}

export default JobComponent