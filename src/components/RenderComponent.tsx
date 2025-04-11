'use client'

import { useMadeSelectionContext } from '@/context/SelectionContext'
import React from 'react'
import JobComponent from './JobComponent';
import SelectionComponent from './SelectionComponent';

const RenderComponent = () => {
    const {selectionMade} = useMadeSelectionContext();

  return (
    <div>
        {
            selectionMade ? <JobComponent /> : <SelectionComponent />
        }
    </div>
  )
}

export default RenderComponent