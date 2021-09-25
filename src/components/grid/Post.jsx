import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    makeStyles,
    Typography,
    Avatar
  } from "@material-ui/core";
  import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
  import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
  import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
  import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
  const useStyles = makeStyles((theme) => ({
    card: {
      marginBottom: theme.spacing(5),
    },
    media: {
      height: 250,
      [theme.breakpoints.down("sm")]: {
        height: 150,
      },
    },
  }));
  
  const Post = ({ img, title }) => {
    const classes = useStyles();
    return (
      <Card className={classes.card}>
        <CardActionArea>
          <div style={{display: "flex",marginBottom:0,justifyContent:"space-between",padding:5}}>
            <div style={{display: "flex"}}>
              <Avatar src="https://ict.uonbi.ac.ke/sites/ict.uonbi.ac.ke/files/2020-06/UniversityOfNairobiTowersProject_banner.jpg" alt="Jessy Bandya"/>
              <div style={{marginLeft:10}}>
              <div style={{fontWeight:"600"}}>Jessy Bandya</div>
              <div style={{fontWeight:"100",color:"#AEAEAE"}}>@jessybandya</div>
              <div style={{fontWeight:"600",color:"#808080",marginTop:12,fontSize:15}}>10 hours ago</div>
            </div>
            </div>

            <div>
              <MoreHorizIcon/>
            </div>
          </div>
          <CardMedia className={classes.media} image={img} title="My Post" />
          <CardContent>
            <Typography gutterBottom variant="h5">
              {title}
              <hr />
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              consectetur earum est....
            </Typography>
          </CardContent>
        </CardActionArea>
      <hr/>
        <>
         <div style={{display:"flex",justifyContent:"space-between",padding:8}}>
           <div style={{alignItems:"center"}}><div style={{fontWeight:"600"}}>4.5K</div><ThumbUpAltOutlinedIcon style={{color: "#3f51b5"}}/></div>
           <div style={{alignItems:"center"}}><div style={{fontWeight:"600"}}>10K</div><ChatBubbleOutlineOutlinedIcon style={{color: "#3f51b5"}}/></div>
           <div style={{alignItems:"center"}}><div style={{fontWeight:"600"}}>share</div><ShareOutlinedIcon style={{color: "#3f51b5"}}/></div>
         </div>
        </>
        {/* <CardContent>
          <div style={{display:"flex",border:"1px solid #808080",height:80,padding:8,borderRadius:10}}>
             <div>
             <Avatar src="https://ict.uonbi.ac.ke/sites/ict.uonbi.ac.ke/files/2020-06/UniversityOfNairobiTowersProject_banner.jpg" alt="Jessy Bandya"/>
             </div>
             <div style={{marginLeft:5,marginTop:-8}}>
             <div style={{fontWeight:"600"}}>Odero Phelix</div>
             <div style={{fontWeight:"600",color:"#808080",marginLeft:5,fontSize:15}}>Great work manzee I really appreciate!</div>

             </div>
          </div>
        </CardContent> */}
      </Card>
    );
  };
  
  export default Post;