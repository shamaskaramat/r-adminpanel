import  './Productlist.css';
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { productRows } from '../../Dumydata'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Userlist = () => {
    const [data,setData] = useState(productRows);
    const handleDelete = (id)=>{
        setData(data.filter((item)=>item.id !== id))
    };
    const columns = [
        { field: 'id', headerName: 'ID', width: 120},
        { field: 'product', headerName: 'Product', width: 200 , renderCell:(params)=>{
            return(
                
                <div className='productListUser'>
                    <img className='productListImg' src={params.row.img} alt=""/>
                    {params.row.name}
                </div>
            )
        }},
        { field: 'Stock', headerName: 'stock', width: 200 },
        {
          field: 'status',
          headerName: 'status',
          width: 120,
        },
        {
          field: 'price',
          headerName: 'Price',
          width: 160,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 160,
            renderCell:(params)=>{
                return(
                    <>
                    <Link to={"/product/" + params.row.id}>
                    <button className='productlistedit'>Edit</button>
                    </Link>
                    <DeleteOutlineIcon  className='productlistdelete' onClick={()=>handleDelete(params.row.id)}/>
                    </>
                )
            }
          },
      ];
      
     
  return (
    <>
        <div className="userlist" >
        <DataGrid
        rows={data}
        columns={columns} disableSelectionOnClick
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
        </div>
    </>
  )
}

export default Userlist