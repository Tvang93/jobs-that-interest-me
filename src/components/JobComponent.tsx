'use client'

import { useJobSelectionContext, useMadeSelectionContext } from '@/context/SelectionContext'
import React from 'react'
import JobInfo from "@/utils/jobinfo.json"

const JobComponent = () => {
    const {setSelectionMade} = useMadeSelectionContext();
    const {jobSelection, setJobSelection} = useJobSelectionContext();

    const jobData = JobInfo.filter(items => items.jobLocation == jobSelection)
    console.log(jobData)

    const handleCloseButton = () => {
        setJobSelection(null);
        setSelectionMade(false);
    } 

  return (
    <div>
        <h1>Job Component</h1>
        <button className='bg-white rounded-full w-2.5 text-black border-1' onClick={handleCloseButton}>X</button>
    </div>
  )
}

export default JobComponent