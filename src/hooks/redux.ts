import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState } from 'store';
import { AnyAction } from 'redux';

export const useAppDispatch = (): any => useDispatch<AnyAction | Promise<any>>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
