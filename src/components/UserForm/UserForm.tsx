import { FC } from "react"
import { Form, FormProps, Input } from "antd"
import { debounce } from "lodash"
import { useSelector } from "react-redux"
import { DEBOUNCE_TIME } from "../../constants"
import { selectModalUserFields } from "../../selectors/modalUserSelector"
import { updateModalUser } from "../../slices/modalUserSlice"
import { User } from "../../types"
import { useAppDispatch } from "../../store"


const UserForm: FC<FormProps> = ({ form }) => {
  const dispatch = useAppDispatch()
  const fields = useSelector(selectModalUserFields)
  const onValuesChange = debounce(((values: Partial<User>) => {
    const copiedValues = {...values}
    if (copiedValues.points) {
      copiedValues.points = Number(copiedValues.points)
    }
    dispatch(updateModalUser(copiedValues))
  }), DEBOUNCE_TIME)

  return (
    <Form 
      form={form}
      fields={fields}
      onValuesChange={onValuesChange}
    >
      <Form.Item
        label="Имя"
        name="name"
        rules={[
          {
            required: true,
            message: 'Введите имя',
          },
        ]}
      >
        <Input type="text"/>
      </Form.Item>
      <Form.Item
        label="Дата рождения"
        name="birthdate"
        rules={[
          {
            required: true,
            message: 'Введите дату рождения',
          },
        ]}
      >
        <Input type="date"/>
      </Form.Item>
      <Form.Item
        label="Количество очков"
        name="points"
        rules={[
          {
            required: true,
            message: 'Введите количество очков',
          },
        ]}
      >
        <Input type="number" inputMode="decimal"/>
      </Form.Item>
    </Form>
  )
}

export default UserForm
