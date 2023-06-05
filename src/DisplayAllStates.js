import React,{useState,useEffect} from "react";
import { getData } from "./Component/Api/ServerServices";
import MaterialTable from "@material-table/core";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useStyles } from "./DisplayAllStatesCss";

import {Button,Grid,TextField} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Swal from "sweetalert2";
import { postData } from "./Component/Api/ServerServices";

export default function DisplayAllStates(props){

  const classes=useStyles()
  
  const [users,setUsers]=useState([])
  const [open,setOpen]=useState(false)
  const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [userId,setUserId]=useState('')
    const [mobileNo,setMobileNo]=useState('')
    const [blockUser,setBlockUser]=useState('false')

  const handleDelete=async(rowData)=>{
    
    Swal.fire({
      title: 'Do you want to delete the selected record',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: `Don't Delete`,
    }).then(async(result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        var body={userid:rowData.userid}
    var response=await postData('login/deleteuser',body)
    if(response.status)
       { Swal.fire('Record Deleted Successfully', '', 'success')
      fetchAllUser()}
       else
       { Swal.fire('Server Error', '', 'error') }
      } else if (result.isDenied) {
        Swal.fire('Your Record is Safe', '', 'info')
      }
    })
 }

  const handleBlock=()=>{
    var response=setBlockUser("true")
    setOpen(false)
    if(response.status)
    {     

        Swal.fire({
           
            icon: 'error',
            title: 'Failed to block the user',
            showConfirmButton: false,
            timer: 2000
          })

          fetchAllUser()
    }
    else{

        Swal.fire({
           
            icon: 'success',
            title: 'User has been blocked',
            showConfirmButton: false,
            timer: 2000
          })
          fetchAllUser()
    }
 }

 const handleUnblock=async()=>{
  blockUser={firstname:firstName,userid:userId,lastname:lastName,mobileno:mobileNo}
  var response=await setBlockUser("false")
  setOpen(false)
  if(response.status)
  {     

      Swal.fire({
         
          icon: 'success',
          title: 'User has been Edited',
          showConfirmButton: false,
          timer: 2000
        })

        fetchAllUser()
  }
  else{

      Swal.fire({
         
          icon: 'error',
          title: 'Failed to edit the user',
          showConfirmButton: false,
          timer: 2000
        })
  }
}

  const handleClose=()=>{
     
    setOpen(false)
  }

  const handleOpenDialog=(rowData)=>{
    setUserId(rowData.userid)
    setFirstName(rowData.firstname)
    setLastName(rowData.lastname)
    setMobileNo(rowData.mobileno)
    setOpen(true)
  }

  const editView=()=>{
    
    return(
      <div className={classes.editRoot}>
          <div className={classes.editSubdiv}>

                <Grid container spacing={2}>

                   <Grid item xs={12}>
                          <div className={classes.heading}>
                              User's Register
                          </div>
                   </Grid>
                  
                   <Grid item xs={6}>
                      <TextField value={firstName} onChange={(event)=>setFirstName(event.target.value)} label="First Name" variant="outlined" fullWidth />
                   </Grid>

                   <Grid item xs={6}>
                      <TextField value={lastName} onChange={(event)=>setLastName(event.target.value)} label="Last Name" variant="outlined" fullWidth />
                   </Grid>
                

                   <Grid item xs={12}>
                      <TextField value={userId} onChange={(event)=>setUserId(event.target.value)} label="User Id" variant="outlined" fullWidth />
                   </Grid>

                   <Grid item xs={12}>
                      <TextField value={mobileNo} onChange={(event)=>setMobileNo(event.target.value)} label="Mobile Number" variant="outlined" fullWidth />
                   </Grid>

                   <Grid item xs={12}>
                      <Button onClick={()=>handleBlock()} variant="contained" fullWidth >Block User</Button>
                   </Grid>
                   <Grid item xs={12}>
                      <Button onClick={()=>handleUnblock()} variant="contained" fullWidth >Unblock User</Button>
                   </Grid>


                </Grid>

          </div>
      </div>
  )
  }

  const openDialog=()=>{
    return(
      <div>
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          {editView()}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autofocus>Close</Button>
        </DialogActions>
      </Dialog>
      </div>
    )
  }

  function displayTable() {
    return (
      <MaterialTable
      title={"User's List"}
        data={users}
        columns={[  
          {
            title: "User Id",
            field: "userid",
          },
          {
            title: "First Name",
            field: "firstname",
          },
          {
            title: "Last Name",
            field: "lastname",
          },
          {
            title: "Mobile No",
            field: "mobileno",
          },

        ]}
        actions={[
          {
            icon: () => <EditIcon />,
            tooltip: "Edit User",
            onClick: (event, rowData) => {
             handleOpenDialog(rowData)
            },
          },
          {
            icon: () => <DeleteIcon />,
            tooltip: "Delete User",
            onClick: (event, rowData) => {
              handleDelete(rowData)
            },
          },
        ]}
      />
    );
  }



  const fetchAllUser=async()=>{
    const result=await getData('login/displayalluser')
    setUsers(result.data)
  }


    useEffect(function(){
        fetchAllUser()
    },[])


    return(
        <div className={classes.root}>
          <div className={classes.subdiv}>
             {displayTable()}
        </div>
        {openDialog()}
        </div>
    )
}