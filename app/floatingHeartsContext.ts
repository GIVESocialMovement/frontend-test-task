import { createContext, Dispatch } from 'react';
import { Actions, State } from './floatingHeartsReducer';

export const FloatingHeartsContext = createContext<State | null>(null);
export const FloatingHeartsDispatchContext = createContext<Dispatch<Actions> | null>(null);
