import Header from "../components/UI/Header";
//  import Button from '@mui/material/Button';
import { DataGrid } from '@material-ui/data-grid';
import axios from "axios";
const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
  },
  {
    field: 'group',
    headerName: 'Deposite',
    width: 150,
    editable: true,
    valueGetter: (params) => {
      console.log( params.value );
      return params.value.deposite;
    }
  }
]
const User = ({ members })=>{
    return (
        // <Button variant="contained" >
        //   Go to the main page
        // </Button>
        <>
        <h4>

          User
        </h4>

        <ul>
          {
            members.map(m=>{
              return <li key={m.group.id}>{m.group.id}</li>
            })
          }
        </ul>

        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={members}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
          />
        </div>
        </>
    )
}

export async function getServerSideProps() {
  let id = 1;
  console.log("loaded for ",id);
  let response = await axios.get(`http://localhost:5000/user/group/${id}`);
  let members = response.data.members;
  members = members ? members : []
  return {
    props: {
      members,
    },
  }
}

export default  User