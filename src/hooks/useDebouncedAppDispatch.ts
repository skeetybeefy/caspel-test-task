import { debounce } from "lodash";
import { useAppDispatch } from "../store";
import { DEBOUNCE_TIME } from "../constants";


export const useDebouncedAppDispatch = () => {
  const dispatch = useAppDispatch()
  return debounce(dispatch, DEBOUNCE_TIME)
}
