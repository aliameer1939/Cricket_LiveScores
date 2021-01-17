import { Button,
    CardActions,
    Grid, 
    Card,
    CardContent,
    Typography , 
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,} from "@material-ui/core";
import React,{useState} from "react";
import vs from "../Img/vs.png";
import { getMatchDetail } from "../Api/Api";

const MyCard =({match})=>{

    const [detail, setDatail] = useState({});
    const [open, setOpen] = useState(false);
  
    const getMatchCard = () => (
      <div>
        <Card
          style={{
            background: match.matchStarted ? "#e2e2e2" : "",
            marginTop: 15,
          }}
        >
            <CardContent>
                <Grid container justify="center" alignItems="center" spacing ={4}>
                    <Grid item>
                        <Typography variant="h6">
                        {match["team-1"]}
                        </Typography>

                    </Grid>
                    
                    <Grid item>
                    <img 
                    style={{ width: 85 }}
                    src={vs} />
                    </Grid>
                    <Grid item>
                    <Typography variant="h6">
                    {match["team-2"]}
                        </Typography>
                        
                    </Grid>

                </Grid>
            </CardContent>
            <CardActions>
                <Grid container justify="center">
            <Button  onClick={() => {
                showDetailBtnClicked(match["unique_id"]);
              }}
              variant="contained" color="primary">
                    Show deatils
                </Button>
                <Button style={{marginLeft:5}} variant="contained" color="secondry">
                Starting time {new Date(match.dateTimeGMT).toLocaleString()}
                </Button>
                </Grid>
            </CardActions>
        </Card>
        </div>

    );
    const showDetailBtnClicked = (id) => {
        getMatchDetail(id)
          .then((data) => {
            console.log(data);
            setDatail(data);
            handleClickOpen();
          })
          .catch((error) => {
            console.log(error);
          });
      };
    
      const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
};
return (
    <>
      {match.type == "Twenty20" ? getMatchCard() : ""}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Match Detail..."}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Typography>{detail.stat}</Typography>
            <Typography>
              Match
              <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
                {detail.matchStarted ? "Started" : "Still not started"}
              </span>
            </Typography>

            <Typography>
              Match
              <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
                {detail.winner_team}
              </span>
            </Typography>

            <Typography>
              Score
              <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
                {" "}
                {detail.score}
              </span>
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  

   




  );
};
export default MyCard;  