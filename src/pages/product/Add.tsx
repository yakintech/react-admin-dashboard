import { Autocomplete, Button, TextField } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useBaseQuery } from '../../api/query/useBaseQuery'
import { BaseService } from '../../api/config/baseService'
import { useNavigate } from 'react-router-dom'
import { useBaseMutation } from '../../api/query/useBaseMutation'
import { useRouter } from '../../hooks/router/useRouter'

function Add() {

  const [open, setopen] = useState(false)

  const { data: categories } = useBaseQuery<CategoryModel[]>("categories")
  const { mutate: getAllSuppliers, data: suppliers } = useBaseMutation('suppliers', 'GET')

  
  useEffect(() => {
      getAllSuppliers()

  }, [])


  const router = useRouter()

  const [formData, setformData] = useState({
    name: '',
    unitPrice: '',
    categoryId: '',
    unitsInStock: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()
    BaseService.post('products', formData)
      .then(res => {
        router.push('/products')
      })
  }

  return <>
    <h1>Add Product</h1>
    <hr />
    <form onSubmit={handleSubmit}>
      <Stack spacing={2}>
        <Stack direction="row" spacing={2}>
          <TextField fullWidth name='name' label="Name" onChange={handleChange} />
          <TextField fullWidth name='unitPrice' label="Unit Price" onChange={handleChange} />
        </Stack>
        <Stack direction="row" spacing={2}>
          <Autocomplete
            fullWidth
            options={categories || []}
            renderInput={(params) => <TextField {...params} label="Category" />}
            isOptionEqualToValue={(item: any) => item.id}
            getOptionLabel={(item: any) => item.name}
            onChange={(e, value) => handleChange({ target: { name: 'categoryId', value: value?.id } } as any)}

          />
          <TextField
            fullWidth
            name="unitsInStock"
            label="Units In Stock"
            onChange={handleChange}
          />
        </Stack>
   
        <Stack>
          <Button type="submit" variant="contained" color="primary">Add</Button>
        </Stack>
      </Stack>
    </form>
  </>
}

export default Add



interface CategoryModel {
  id: number;
  name: string;
  description: string
}