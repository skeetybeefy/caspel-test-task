import { FC } from "react"
import styles from "./UsersAddNew.module.css"
import { Button } from "antd"
import { ModalStatus } from "../../constants"
import { useAppDispatch } from "../../store"
import { clearModalUser } from "../../slices/modalUserSlice"

interface UsersAddNewProps {
  setModalStatus: React.Dispatch<React.SetStateAction<ModalStatus>>
}

const UsersAddNew: FC<UsersAddNewProps> = ({ setModalStatus }) => {
  const dispatch = useAppDispatch()
  
  return (
    <div className={styles.addNewUserContainer}>
      <p>Добавить нового пользователя</p>
      <Button 
        type="primary" 
        onClick={() => {
          dispatch(clearModalUser())
          setModalStatus(ModalStatus.Add)
        }}
      >
        Добавить
      </Button>
    </div>
  )
}

export default UsersAddNew
