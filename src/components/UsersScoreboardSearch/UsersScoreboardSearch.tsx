import { FC } from "react"
import { useDebouncedAppDispatch } from "../../hooks/useDebouncedAppDispatch"
import { setNameQuery, setBirthdateQuery, setPointsQuery } from "../../slices/searchQueriesSlice"
import InputWithHeaderText from "../InputWithHeaderText/InputWithHeaderText"
import styles from "./UsersScoreboardSearch.module.css"

const UsersScoreboardSearch: FC = () => {
  const dispatch = useDebouncedAppDispatch()
  return (
    <div className={styles.searchInputsContainer}>
      <InputWithHeaderText
        onChange={e => dispatch(setNameQuery(e.target.value))}
      >
        Поиск по имени
      </InputWithHeaderText>
      <InputWithHeaderText
        type="date"
        onChange={e => dispatch(setBirthdateQuery(e.target.value))}
      >
        Поиск по дате
      </InputWithHeaderText>
      <InputWithHeaderText
        type="number"
        inputMode="decimal"
        onChange={e => dispatch(setPointsQuery(e.target.value))}
      >
        Поиск по количеству очков
      </InputWithHeaderText>
    </div>
  )
}

export default UsersScoreboardSearch
