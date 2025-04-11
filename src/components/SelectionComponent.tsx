'use client'

import { JobSelection, useJobSelectionContext, useMadeSelectionContext } from '@/context/SelectionContext'
import React from 'react'

const SelectionComponent = () => {
    const {setJobSelection} = useJobSelectionContext();
    const {selectionMade, setSelectionMade} = useMadeSelectionContext();

    const handleSelection = (selection: JobSelection) => {
        setJobSelection(selection);
        setSelectionMade(true);
        console.log(selectionMade)
    }

  return (
    <div className="grid grid-cols-5 gap-2 bg-black">
        <div className='min-h-screen bg-[url(/assets/larian.jpg)] bg-no-repeat bg-cover bg-center' onClick={()=>handleSelection('Larian Studios')}>
          <div className='backdrop-grayscale hover:backdrop-filter-none w-full h-full flex justify-center text-yellow-100 text-7xl hover:text-yellow-200 hover:text-[76px] hover:cursor-pointer'>
            <h1 className='rotate-270 self-center text-shadow-lg text-shadow-amber-900 whitespace-nowrap'>Larian Studios</h1>
          </div>
        </div>
        <div className='min-h-screen bg-[url(/assets/hasbro.jpg)] bg-no-repeat bg-cover bg-center' onClick={()=>handleSelection('Hasbro')}>
          <div className='backdrop-grayscale hover:backdrop-filter-none w-full h-full flex justify-center text-yellow-100 text-7xl hover:text-yellow-200 hover:text-[76px] hover:cursor-pointer'>
            <h1 className='rotate-270 self-center text-shadow-lg text-shadow-amber-900'>Hasbro</h1>
          </div>
        </div>
        <div className='min-h-screen bg-[url(/assets/lego.jpg)] bg-no-repeat bg-cover bg-center' onClick={()=>handleSelection('Lego')}>
          <div className='backdrop-grayscale hover:backdrop-filter-none w-full h-full flex justify-center text-yellow-100 text-7xl hover:text-yellow-200 hover:text-[76px] hover:cursor-pointer'>
            <h1 className='rotate-270 self-center text-shadow-lg text-shadow-amber-900'>Lego</h1>
          </div>
        </div>
        <div className='min-h-screen bg-[url(/assets/pixar.jpg)] bg-no-repeat bg-cover bg-center' onClick={()=>handleSelection('Pixar')}>
          <div className='backdrop-grayscale hover:backdrop-filter-none w-full h-full flex justify-center text-yellow-100 text-7xl hover:text-yellow-200 hover:text-[76px] hover:cursor-pointer'>
            <h1 className='rotate-270 self-center text-shadow-lg text-shadow-amber-900'>Pixar</h1>
          </div>
        </div>
        <div className='min-h-screen bg-[url(/assets/blizzard.jpg)] bg-no-repeat bg-cover bg-center' onClick={()=>handleSelection('Blizzard')}>
          <div className='backdrop-grayscale hover:backdrop-filter-none w-full h-full flex justify-center text-yellow-100 text-7xl hover:text-yellow-200 hover:text-[76px] hover:cursor-pointer'>
            <h1 className='rotate-270 self-center text-shadow-lg text-shadow-amber-900'>Blizzard</h1>
          </div>
        </div>
      </div>
  )
}

export default SelectionComponent