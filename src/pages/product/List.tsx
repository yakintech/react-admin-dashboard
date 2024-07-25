import { Button, Stack } from '@mui/material'
import { trTR } from '@mui/x-data-grid/locales';
import { DataGrid, GridToolbar, GridToolbarColumnsButton, GridToolbarContainer, GridToolbarFilterButton, useGridApiContext } from '@mui/x-data-grid'
import { BaseService } from '../../api/config/baseService';
import { useBaseQuery } from '../../api/query/useBaseQuery';
import { queryClient } from '../../api/query/queryClient';
import { Link } from 'react-router-dom';


function List() {

  const { data: products } = useBaseQuery<any>("products")


  const deleteProduct = (item: any) => {

    const result = window.confirm("Are you sure you want to delete this product?")
    if (result) {
      BaseService.delete(`products/${item.id}`)
        .then(() => {
          queryClient.invalidateQueries({ queryKey: ['products'] })
        })
    }
  }

  // queryClient.invalidateQueries({ queryKey: ['products'] })

  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 0.1
    },
    {
      field: "name",
      headerName: "Name",
      flex: 0.3
    },
    {
      field: "unitPrice",
      headerName: "Price",
      flex: 0.2,
      renderCell: (params: any) => {
        let unitPrice = 0
        if(params.row.unitPrice){
          let unitPrice = params.row.unitPrice;
          if(isNaN(unitPrice)){
            unitPrice = 0;
          }
          else{
            unitPrice = parseFloat(unitPrice).toFixed(2);
          }
        }
        return <>{unitPrice}</>
      }
    },
    {
      field: "unitsInStock",
      headerName: "Stock",
      flex: 0.2
    },
    {
      field: "delete",
      headerName: "Delete",
      flex: 0.2,
      renderCell: (params: any) => {
        return <Button onClick={() => deleteProduct(params.row)} variant="contained" color="error">Delete</Button>
      }
    }
  ]


  return <>
    <Stack direction="row" justifyContent="space-between" alignItems={"center"}>
      <h1>Product List</h1>
      <Link to="/products/add">Add New Product</Link>
    </Stack>
    <hr />
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={products}
        columns={columns}
        slots={{
          toolbar: GridToolbar
        }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}
        localeText={trTR.components.MuiDataGrid.defaultProps.localeText}
        initialState={{
          pagination: { paginationModel: { pageSize: 5 } },
        }}
        pageSizeOptions={[5, 10, 25]}
      />
    </div>


  </>
}

export default List


function CustomToolBar() {
  return <GridToolbarContainer>
    <GridToolbarColumnsButton
      slotProps={{
        button: { variant: 'outlined' },
      }
      }
    />
    <GridToolbarFilterButton />
  </GridToolbarContainer>
}