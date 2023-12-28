
export const save_Edited_Person = (editedRecord, dataSource, setDataSource) => {

    const updatedDataSource = dataSource.map((item) =>
        item.id === editedRecord.id ? editedRecord : item
    )
    setDataSource(updatedDataSource)
  }