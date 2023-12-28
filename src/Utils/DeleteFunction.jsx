import { Modal } from 'antd'

export const on_Delete_Person = (record, dataSource, setDataSource) => {
    Modal.confirm({ 
        title:"Are you sure, you want to delete this person?",
        okText: "Yes",
        okType: "danger",
        onOk: () => { setDataSource(dataSource.filter((item) => item.id !== record.id)) }
    })
}