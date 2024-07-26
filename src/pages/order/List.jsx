import { DataGrid } from '@mui/x-data-grid'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { axiosInstance2 } from '../../api/config/axiosInstance2'

function List() {

    const [orders, setorders] = useState([])

    useEffect(() => {

        axiosInstance2.get("/orders")
            .then((res) => {
                setorders(res.data)
            })
            .catch((err) => {
                console.log("errr", err)
            })

    }, [])

    return <>
        <DataGrid
            rows={orders}
            columns={[
                { field: 'id', headerName: 'ID', width: 90 },
                { field: 'customerId', headerName: 'Customer ID', width: 150 },
                { field: 'employeeId', headerName: 'Employee ID', width: 150 },
                { field: 'orderDate', headerName: 'Order Date', width: 150 },
                { field: 'requiredDate', headerName: 'Required Date', width: 150 }
            ]}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
        />
    </>
}

export default List