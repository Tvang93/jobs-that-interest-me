'use client'

import { useMadeSelectionContext } from '@/context/SelectionContext'
import React from 'react'
import JobComponent from './JobComponent';
import SelectionComponent from './SelectionComponent';

const RenderComponent = () => {
    const {selectionMade} = useMadeSelectionContext();

  return (
    <div>
      <header className={`bg-black text-white text-center text-6xl w-full z-1 ${selectionMade ? `static` : `absolute`}`}>Jobs That Interest Me</header>
        {
            selectionMade ? <JobComponent /> : <SelectionComponent />
        }
    </div>
  )
}

export default RenderComponent