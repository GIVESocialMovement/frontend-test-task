import { useContext } from "react";
import { FloatingHeartsDispatchContext } from "@/app/floatingHeartsContext";
import { ActionKind } from '@/app/floatingHeartsReducer'

export const DonateButton = () => {
  const dispatch = useContext(FloatingHeartsDispatchContext);

  const handleHover = () => {
    dispatch!({type: ActionKind.SHOW});
  }

  const handleLeave = () => {
    dispatch!({type: ActionKind.HIDE});
  }

  return (
    <button onMouseEnter={handleHover} onMouseLeave={handleLeave}>Donate</button>
  );
}