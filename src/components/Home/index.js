import { Grid, makeStyles } from "@material-ui/core";
import Add from "../grid/Add";
import Feed from "../grid/Feed";
import Leftbar from "../grid/Leftbar";
import Navbar from "../grid/Navbar";
import Rightbar from "../grid/Rightbar";

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <h1>hello </h1>

      <Grid container>
        <Grid item sm={2} xs={2}>
          <Leftbar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed />
        </Grid>
        <Grid item sm={3} className={classes.right}>
          <Rightbar />
        </Grid>
      </Grid>
      <Add />
    </div>
  );
};

export default Home;