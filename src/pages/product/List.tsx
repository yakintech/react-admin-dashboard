import { Button, Stack } from '@mui/material'
import { trTR } from '@mui/x-data-grid/locales';
import { DataGrid, GridToolbar, useGridApiContext } from '@mui/x-data-grid'
import axios from 'axios'
import React, { useEffect, useState } from 'react'


function List() {

  const [products, setproducts] = useState([])
  const [isLoad, setisLoad] = useState(true)

  // const apiRef = useGridApiContext();

  useEffect(() => {
    loadProducts()
  }, [isLoad])

  const loadProducts = () => {
    axios.get("https://northwind.vercel.app/api/products")
      .then((response) => {
        setproducts(response.data)
      })
  }


  const deleteProduct = (item: any) => {

    const result = window.confirm("Are you sure you want to delete this product?")
    if (result) {
      axios.delete(`https://northwind.vercel.app/api/products/${item.id}`)
        .then((response) => {
          setisLoad(!isLoad)
        })
    }
  }

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
        return <>{params.row.unitPrice.toFixed(2)}</>
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
    <h1>Product List</h1>
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