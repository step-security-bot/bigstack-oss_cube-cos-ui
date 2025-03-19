import { useEffect, useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { StoryLayout } from '../../../../internal/components/StoryLayout/StoryLayout'
import { mockTemplates, TemplateTable } from './utils'

const meta = {
  title: 'organisms/Tables/Batch Action',
  component: TemplateTable,
} satisfies Meta

export default meta

export const Gallery: StoryObj = {
  render: () => (
    <StoryLayout title="Table - Batch Action">
      <StoryLayout.Section title="Default">
        <Default />
      </StoryLayout.Section>
    </StoryLayout>
  ),
}

const Default = () => {
  const [selectedRowIds, setSelectedRowIds] = useState<string[]>([])

  const [isAllSelected, setIsAllSelected] = useState(false)

  const isRowSelected = (rowId: string) => selectedRowIds.includes(rowId)

  const handleSelectedRowsChange = (id: string) => {
    const newSelectedRows = isRowSelected(id)
      ? selectedRowIds.filter((selectedId) => id !== selectedId)
      : [...selectedRowIds, id]

    setSelectedRowIds(newSelectedRows)
  }

  const handleAllCheckChange = () => {
    setIsAllSelected((prev) => !prev)
  }

  const allNodeIds = () => {
    return mockTemplates.map((template) => template.id)
  }

  useEffect(() => {
    if (isAllSelected) {
      setSelectedRowIds(allNodeIds())
    } else {
      setSelectedRowIds([])
    }
  }, [isAllSelected])

  return (
    <TemplateTable
      rows={mockTemplates}
      selectedRowIds={selectedRowIds}
      onCheckChange={handleSelectedRowsChange}
      onAllCheckChange={handleAllCheckChange}
    >
      <TemplateTable.Column label="Template" property="template" />
      <TemplateTable.Column label="Description" property="description" />
    </TemplateTable>
  )
}
