import React, { useState, useEffect } from 'react'
import { Button, Modal, Input } from 'antd'
import { EditOutlined } from '@ant-design/icons'

const EditModal = ({ record, onSave }) => {

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({})

  useEffect(() => {
    setFormData(record)
  }, [record])

  const handleInputChange = (e, fieldName) => {
    setFormData({ ...formData, [fieldName]: e.target.value })
  }

  const handleSave = () => {
    onSave(formData)
    setIsModalOpen(false)
  }

  return (
    <>
    <Button onClick={() => { setIsModalOpen(true) }}>
      <EditOutlined style={{ color: 'blue', fontSize: 20 }} />
    </Button>
    <Modal 
      title="Edit" 
      open={isModalOpen} 
      footer={[
        <Button key="back" onClick={() => setIsModalOpen(false)}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={handleSave}>
          Save
        </Button>
      ]}
    >
      <Input
        value={formData.name || ''}
        onChange={(e) => handleInputChange(e, 'name')}
        placeholder="Name"
      />
      <Input
        value={formData.email || ''}
        onChange={(e) => handleInputChange(e, 'email')}
        placeholder="Email"
      />
    </Modal>
    </>
  )
}

export default EditModal