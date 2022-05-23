import  './Userlist.css';
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { userRows } from '../../Dumydata'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Userlist = () => {
    const [data,setData] = useState(userRows);
    const handleDelete = (id)=>{
        setData(data.filter((item)=>item.id !== id))
    };
    const columns = [
        { field: 'id', headerName: 'ID', width: 120},
        { field: 'user', headerName: 'User', width: 200 , renderCell:(params)=>{
            return(
                
                <div className='userListUser'>
                    <img className='userListImg' src={params.row.avatar} alt=""/>
                    {params.row.username}
                </div>
            )
        }},
        { field: 'email', headerName: 'Email', width: 200 },
        {
          field: 'status',
          headerName: 'status',
          width: 120,
        },
        {
          field: 'transaction',
          headerName: 'transaction',
          width: 160,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 160,
            renderCell:(params)=>{
                return(
                    <>
                    <Link to={"/user/" + params.row.id}>
                    <button className='userlistedit'>Edit</button>
                    </Link>
                    <DeleteOutlineIcon  className='userlistdelete' onClick={()=>handleDelete(params.row.id)}/>
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