'use client';
import { DonateFlow } from "@/components/DonateFlow";
import { FloatingHearts } from "@/components/FloatingHearts";
import { FloatingHeartsContext, FloatingHeartsDispatchContext } from "./floatingHeartsContext";
import { floatingHeartsReducer } from "./floatingHeartsReducer";
import { useReducer } from "react";

export default function Home() {
  const [state, dispatch] = useReducer(floatingHeartsReducer, { isFloatingHeartsShow: false })

  return (
    <FloatingHeartsContext.Provider value={state}>
      <FloatingHeartsDispatchContext.Provider value={dispatch}>
        <DonateFlow />
        <FloatingHearts />
      </FloatingHeartsDispatchContext.Provider>
    </FloatingHeartsContext.Provider>
  );
}
