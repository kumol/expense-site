// import Box from '@mui/material/Box';
// // import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import TextField from '@material-ui/core/TextField';

const AddGroupExpense = () => {
    return(
        <Grid container spacing={2}>
                <Grid item xs={8} lg={8} mb={5}>
                    <TextField id="outlined-basic" label="amount" variant="outlined" />
                </Grid>
                <Grid item xs={4} lg={2} md={3}>
                    <div>Hels</div>
                </Grid>
        </Grid>
    )
}

export default AddGroupExpense;