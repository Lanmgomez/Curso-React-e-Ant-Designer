import { Button, Table } from 'antd'
import React, { useState } from 'react'
import { columns } from './Columns'
import { initial_states } from '../Utils/InitialStates'
import { on_Delete_Person } from '../Utils/DeleteFunction'
import { save_Edited_Person } from '../Utils/EditFunction'
import { add_new_person } from '../Utils/AddNewPersonFunction'

const TodoList = () => {

  const [dataSource, setDataSource] = useState(initial_states)

  return (
    <>
    <Button onClick={() => add_new_person(setDataSource)}>Add new person</Button>
    <Table
        columns={columns(
            (record) => on_Delete_Person(record, dataSource, setDataSource),
            (editedRecord) => save_Edited_Person(editedRecord, dataSource, setDataSource)
            )}
        dataSource={dataSource}
    >
    </Table>
    </>
  )
}

export default TodoList