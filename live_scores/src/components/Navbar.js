import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import react from "react";

const Navbar=()=>{
    return (

        <AppBar position="static">
            <Toolbar>
                <IconButton color="inherit">
                    <MenuIcon/>

                </IconButton>
                <Typography variant="h6">Lives Scores</Typography>
            </Toolbar>
        

        </AppBar>
    )



};
export default Navbar;