import { DeleteOutlined } from '@ant-design/icons'
import EditModal from './EditModal'

export const columns = (onDelete, onSave) => [
    {
        key: '1',
        title: 'ID',
        dataIndex: 'id'
    },
    {
        key: '2',
        title: 'Name',
        dataIndex: 'name'
    },
    {
        key: '3',
        title: 'Email',
        dataIndex: 'email'
    },
    {
        key: '4',
        title: 'Delete',
        render: (record) => 
            <DeleteOutlined 
                style={{ color: 'red', fontSize: 20, marginLeft: 15 }} 
                onClick={() => onDelete(record)}
            /> 
    },
    {
        key: '5',
        title: 'Edit',
        render: (record) => <EditModal record={record} onSave={onSave} />
    }
]