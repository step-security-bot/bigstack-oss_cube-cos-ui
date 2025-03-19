import {
  CosBasicTable,
  CosBasicTableProps,
} from '../CosBasicTable/CosBasicTable'
import { CosTableRow } from '../CosBasicTable/cosTableUtils'
import { CreateCosTableColumn } from '../CosBasicTable/rendering/CosTableColumn'
import { CosCheckbox } from '../CosCheckbox/CosCheckbox'
import { useCheckboxStatus } from './useCheckboxStatus'

export type CosBatchActionTableProps<Row extends CosTableRow> =
  CosBasicTableProps<Row> & {
    selectedRowIds: string[]
    onCheckChange: (rowId: string) => void
    onAllCheckChange: () => void
  }

const CosBatchActionTable = <Row extends CosTableRow>(
  props: CosBatchActionTableProps<Row>,
) => {
  const {
    children,
    rows,
    selectedRowIds = [],
    onCheckChange,
    onAllCheckChange,
    ...restProps
  } = props

  const isRowSelected = (rowId: string) => selectedRowIds.includes(rowId)

  const checkboxStatus = useCheckboxStatus(rows, selectedRowIds)

  const renderHeaderCheckbox = () => {
    return (
      <CosCheckbox
        checked={checkboxStatus}
        onChange={() => onAllCheckChange()}
      />
    )
  }

  return (
    <CosBasicTable {...restProps} rows={rows}>
      <CosBasicTable.Column label={renderHeaderCheckbox()} property="id">
        {(id) => (
          <CosCheckbox
            checked={isRowSelected(id)}
            onChange={() => onCheckChange(id)}
          />
        )}
      </CosBasicTable.Column>
      {children}
    </CosBasicTable>
  )
}

CosBatchActionTable.Column = CosBasicTable.Column

type CosBatchActionTableWithColumn<Row extends CosTableRow> =
  typeof CosBatchActionTable<Row> & {
    Column: ReturnType<typeof CreateCosTableColumn<Row>>
  }

export const GetCosBatchActionTable = <
  Row extends CosTableRow,
>(): CosBatchActionTableWithColumn<Row> => {
  return CosBatchActionTable as CosBatchActionTableWithColumn<Row>
}
