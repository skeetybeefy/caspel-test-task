import { FC, useEffect, useMemo, useState } from "react"
import { Modal, Form } from "antd"
import { useSelector } from "react-redux"
import { addUser, editUser } from "../../slices/usersSlice"
import { useAppDispatch } from "../../store"
import UserForm from "../UserForm"
import { selectUserState } from "../../selectors/usersStateSelector.ts"
import { selectModalUserState } from "../../selectors/modalUserSelector.ts"
import { selectSearchQueriesState } from "../../selectors/searchQueriesSelector.ts"
import UsersScoreboardTable from "../UsersScoreboardTable"
import { ModalStatus } from "../../constants/index.ts"
import UsersScoreboardSearch from "../UsersScoreboardSearch"
import UsersAddNew from "../UsersAddNew"
import styles from "./UsersScoreboardWidget.module.css"


const UsersScoreBoardWidget: FC = () => {
  const searchQueries = useSelector(selectSearchQueriesState)
  const { name: nameQuery, birthdate: birthdateQuery, points: pointsQuery} = searchQueries

  const usersState = useSelector(selectUserState)
  const modalUser = useSelector(selectModalUserState)
  const dispatch = useAppDispatch()

  const users = useMemo(() => {
    return usersState.users.map(user => ({...user, key: user.id}))
  }, [usersState])

  const filteredUsers = useMemo(() => {
    return users
      .filter(user => user.name.toLocaleLowerCase().includes(nameQuery.toLocaleLowerCase()))
      .filter(user => user.birthdate.includes(birthdateQuery))
      .filter(user => user.points === Number(pointsQuery) || !pointsQuery)
  }, [users, nameQuery, birthdateQuery, pointsQuery])

  const [modalStatus, setModalStatus] = useState(ModalStatus.Closed)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSubmitButtonLoading, setIsSubmitButtonLoading] = useState(false)

  useEffect(() => {
    setIsModalOpen(!(modalStatus === ModalStatus.Closed))
  }, [modalStatus])

  const [form] = Form.useForm()

  const handleSubmit = async () => {
    setIsSubmitButtonLoading(true)
    try {
      await form.validateFields()
      switch(modalStatus) {
        case ModalStatus.Add: 
          dispatch(addUser(modalUser))
          break
        case ModalStatus.Edit:
          dispatch(editUser(modalUser))
          break
      }
      setModalStatus(ModalStatus.Closed)
    } catch (e) {

    } finally {
      setIsSubmitButtonLoading(false)
    }
  }

  return (
    <div className={styles.widgetContainer}>
      <h2>Таблица лидеров</h2>
      <UsersScoreboardSearch />
      <UsersAddNew setModalStatus={setModalStatus}/>
      <UsersScoreboardTable dataSource={filteredUsers} setModalStatus={setModalStatus}/>
      <Modal
        title={(modalStatus === ModalStatus.Add ? "Добавление" : "Изменение") + " пользователя"}
        open={isModalOpen}
        okText={modalStatus === ModalStatus.Add ? "Добавить" : "Изменить"}
        cancelText="Отмена"
        onOk={handleSubmit}
        confirmLoading={isSubmitButtonLoading}
        onCancel={() => setModalStatus(ModalStatus.Closed)}
        destroyOnClose={true}
      >
        <UserForm form={form}/>
      </Modal>
    </div>
  )
}

export default UsersScoreBoardWidget
