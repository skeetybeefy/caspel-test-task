import { Button, Table } from "antd"
import { FC } from "react"
import { useAppDispatch } from "../../store"
import { EditOutlined, DeleteOutlined } from "@ant-design/icons"
import { ColumnsType, TableProps } from "antd/es/table"
import { setModalUser } from "../../slices/modalUserSlice"
import { removeUser } from "../../slices/usersSlice"
import { ModalStatus } from "../../constants"
import styles from "./UsersScoreboardTable.module.css"
import { TableRow } from "../../types"

interface UsersScoreboardTableProps extends TableProps<TableRow> {
  setModalStatus: React.Dispatch<React.SetStateAction<ModalStatus>>
}

const UsersScoreboardTable: FC<UsersScoreboardTableProps> = ({ dataSource, setModalStatus }) => {
  const dispatch = useAppDispatch()
  const columns: ColumnsType<TableRow> = [
    {
      title: "Имя",
      dataIndex: "name",
      key: "name",
      sorter: {
        compare: (a, b) => a.name.localeCompare(b.name),
        multiple: 1,
      }
    },
    {
      title: "Дата",
      dataIndex: "birthdate",
      key: "birthdate",
      sorter: {
        compare: (a, b) => (Number(new Date(a.birthdate)) - Number(new Date(b.birthdate))),
        multiple: 2,
      }
    },
    {
      title: "Очки",
      dataIndex: "points",
      key: "points",
      sorter: {
        compare: (a, b) => a.points - b.points,
        multiple: 3,
      }
    },
    {
      title: "Действия",
      dataIndex: "actions",
      key: "actions",
      width: "72px",
      render: (_, record) => 
        (
          <div className={styles.controlsTableRow}>
            <Button onClick={() => {
              dispatch(setModalUser(record))
              setModalStatus(ModalStatus.Edit)
            }}>
              <EditOutlined />
            </Button>
            <Button onClick={() => dispatch(removeUser(record.id))}>
              <DeleteOutlined />
            </Button>
          </div>
        )
    }
  ]
  
  return (
    <Table 
      columns={columns}
      dataSource={dataSource}
      size="small"
    />
  )
}

export default UsersScoreboardTable
