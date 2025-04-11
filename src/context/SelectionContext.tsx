"use client";

import { createContext, useContext, useReducer, useState } from "react";

export type JobSelection = "Larian Studios" | "Hasbro" | "Lego" | "Pixar" | "Blizzard" | null;

// interface State {
//   activeJobSelection: JobSelection;
// }

// type ActionType = "Set_JobSelection";

// interface Action {
//   type: ActionType;
//   payload: JobSelection;
// }

// const initialState: State = {
//   activeJobSelection: null,
// };

// const JobSelectionReducer = (state: State, action: Action) => {
//   switch (action.type) {
//     case "Set_JobSelection":
//       return { activeJobSelection: action.payload };
//     default:
//       return state;
//   }
// };

interface IJobSelection {
  jobSelection: JobSelection;
  setJobSelection: (job: JobSelection)=>void;
}

interface IMadeSelection {
  selectionMade: boolean;
  setSelectionMade: (bool: boolean) => void;
}

const JobSelectionContext = createContext<IJobSelection | undefined>(undefined);
const MadeSelectionContext = createContext<IMadeSelection | undefined>(
  undefined
);

export function JobSelectionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [jobSelection, setJobSelection] = useState<JobSelection>(null);
  const [selectionMade, setSelectionMade] = useState<boolean>(false);

  return (
    <MadeSelectionContext.Provider value={{ selectionMade, setSelectionMade }}>
      <JobSelectionContext.Provider value={{ jobSelection, setJobSelection }}>
        {children}
      </JobSelectionContext.Provider>
    </MadeSelectionContext.Provider>
  );
}

export function useJobSelectionContext() {
  const context = useContext(JobSelectionContext);
  if (!context) {
    throw new Error("useJobSelectionContext must be used witihin wrapper.");
  }
  return context;
}

export function useMadeSelectionContext() {
  const context = useContext(MadeSelectionContext);
  if (!context) {
    throw new Error("useMadeSelectionContext must be used within wrapper.");
  }
  return context;
}
