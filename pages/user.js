import Header from "../components/UI/Header";
//  import Button from '@mui/material/Button';
import axios from "axios";
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
              return <li>m.name</li>
            })
          }
        </ul>
        </>
    )
}

export async function getStaticProps() {
  let id = 1;
  let response = await axios.get(`localhost:5000/user/group/${id}`);
  let members = response.members;
  console.log(members);
  return {
    props: {
      members,
    },
  }
}

export default  User