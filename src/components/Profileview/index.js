import React from 'react'
import "./styles.css"
import {
  Link,
  Avatar,
  Container,
  ImageList,
  ImageListItem,
  makeStyles,
  Typography,
  Divider,
} from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    position: "sticky",
    top: 0,
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    color: "#555",
  },
  link: {
    marginRight: theme.spacing(2),
    color: "#555",
    fontSize: 16,
  },
}));


function Profileview() {
  const classes = useStyles();

    return (
<div class="container">
    <div class="main-body">
    
          <nav aria-label="breadcrumb" class="main-breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="index.html">Home</a></li>
              <li class="breadcrumb-item"><a href="javascript:void(0)">User</a></li>
              <li class="breadcrumb-item active" aria-current="page">User Profile</li>
            </ol>
          </nav>
    
          <div class="row gutters-sm">
            <div class="col-md-4 mb-3">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150"/>
                    <div class="mt-3">
                      <h4>Jessy Bandya</h4>
                      <p class="text-secondary mb-1">@jessybandya</p>
                      <p class="text-muted font-size-sm">Year 3</p>
                      <button style={{backgroundColor: "#3f51b5",color: "#fff"}} class="btn ">Follow</button>
                      <button style={{marginLeft:10,color: "#3f51b5",border: "1px solid #3f51b5",backgroundColor: "#fff"}} class="btn ">Message</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mt-3">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-globe mr-2 icon-inline"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>Website</h6>
                    <span class="text-secondary">www.jessybandya.com</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github mr-2 icon-inline"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>Github</h6>
                    <span class="text-secondary">jessybandya</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter mr-2 icon-inline text-info"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>Twitter</h6>
                    <span class="text-secondary">@jessybandya</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram mr-2 icon-inline text-danger"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>Instagram</h6>
                    <span class="text-secondary">jessybandya</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook mr-2 icon-inline text-primary"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>Facebook</h6>
                    <span class="text-secondary">Jessy Alex</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-8">
              <div class="card mb-3">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Full Name</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      Uwimana Jessy Bandya
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Email</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      bandya@students.uonbi.ac.ke
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Phone</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      +254 (0)746749307
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Reg No.</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      F16/137437/2019
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Gender</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      M
                    </div>
                  </div>
                  <hr/>

                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Other Professional levels</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      Software Web Dev.
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-12">
                      <a class="btn" style={{backgroundColor: "#3f51b5",color: "#fff"}}  href={`/profileedit`}>Edit</a>
                    </div>
                  </div>
                </div>
              </div>
              

              <div class="" class="row gutters-sm" style={{display:"flex",flexWrap: "wrap"}}>
                      
				<div class="grid">
					<figure class="effect-marley">
						<img src="https://tympanus.net/Development/HoverEffectIdeas/img/11.jpg" alt="img11"/>
						<figcaption>
							{/* <h2>UoN <span>Aces</span></h2> */}
							<div>
              <div style={{display:"flex",padding:10,alignItems: "center"}}>
           <div style={{alignItems:"center",display:"flex"}}><ThumbUpAltOutlinedIcon style={{color: "#fff"}}/><span style={{fontWeight:"600",marginLeft:3,fontSize:18}}>4.5K</span></div>
           <div style={{alignItems:"center",display:"flex",marginLeft:80}}><a style={{marginTop:10}} href={`/postview`}><ChatBubbleOutlineOutlinedIcon style={{color: "#fff"}}/></a><span style={{fontWeight:"600",marginLeft:3,fontSize:18,marginTop:8}}>4.5K</span></div>
         </div> 

              </div>
						</figcaption>			
					</figure>
					<figure class="effect-marley">
						<img src="https://tympanus.net/Development/HoverEffectIdeas/img/11.jpg" alt="img11"/>
						<figcaption>
							{/* <h2>UoN <span>Aces</span></h2> */}
							<div>
              <div style={{display:"flex",padding:10,alignItems: "center"}}>
           <div style={{alignItems:"center",display:"flex"}}><ThumbUpAltOutlinedIcon style={{color: "#fff"}}/><span style={{fontWeight:"600",marginLeft:3,fontSize:18}}>4.5K</span></div>
           <div style={{alignItems:"center",display:"flex",marginLeft:80}}><a style={{marginTop:10}} href={`/postview`}><ChatBubbleOutlineOutlinedIcon style={{color: "#fff"}}/></a><span style={{fontWeight:"600",marginLeft:3,fontSize:18,marginTop:8}}>4.5K</span></div>
         </div> 

              </div>
						</figcaption>			
					</figure>
          <figure class="effect-marley">
						<img src="https://tympanus.net/Development/HoverEffectIdeas/img/11.jpg" alt="img11"/>
						<figcaption>
							{/* <h2>UoN <span>Aces</span></h2> */}
							<div>
              <div style={{display:"flex",padding:10,alignItems: "center"}}>
           <div style={{alignItems:"center",display:"flex"}}><ThumbUpAltOutlinedIcon style={{color: "#fff"}}/><span style={{fontWeight:"600",marginLeft:3,fontSize:18}}>4.5K</span></div>
           <div style={{alignItems:"center",display:"flex",marginLeft:80}}><a style={{marginTop:10}} href={`/postview`}><ChatBubbleOutlineOutlinedIcon style={{color: "#fff"}}/></a><span style={{fontWeight:"600",marginLeft:3,fontSize:18,marginTop:8}}>4.5K</span></div>
         </div> 

              </div>
						</figcaption>			
					</figure>
				</div>



{/* <div class="hover04 column" style={{display: "flex",flexWrap: "wrap"}}>
  <div style={{padding:10}}>
    <figure><img src="https://media.istockphoto.com/photos/nairobi-cityscape-capital-city-of-kenya-picture-id637912692?k=20&m=637912692&s=612x612&w=0&h=uHa90J-jGXws6mo7yeOKLI-ta_RYGErtbsqhtPVxBHk=" /></figure>
    <span>    
      <div>Hover </div> 
       <div style={{display:"flex",padding:8}}>
           <div style={{alignItems:"center",display:"flex"}}><ThumbUpAltOutlinedIcon style={{color: "#3f51b5"}}/><div style={{fontWeight:"600",marginLeft:3}}>4.5K</div></div>
           <div style={{alignItems:"center",display:"flex",marginTop:10,marginLeft:50}}><a href={`/postview`}><ChatBubbleOutlineOutlinedIcon style={{color: "#3f51b5"}}/></a><div style={{fontWeight:"600",marginLeft:3,marginBottom:10}}>10K</div></div>
         </div>
         </span>
  </div>
  <div style={{padding:10}}>
    <figure><img src="https://media.istockphoto.com/photos/nairobi-cityscape-capital-city-of-kenya-picture-id637912692?k=20&m=637912692&s=612x612&w=0&h=uHa90J-jGXws6mo7yeOKLI-ta_RYGErtbsqhtPVxBHk=" /></figure>
    <span>      <div style={{display:"flex",padding:8}}>
           <div style={{alignItems:"center",display:"flex"}}><ThumbUpAltOutlinedIcon style={{color: "#3f51b5"}}/><div style={{fontWeight:"600",marginLeft:3}}>4.5K</div></div>
           <div style={{alignItems:"center",display:"flex",marginTop:10,marginLeft:50}}><a href={`/postview`}><ChatBubbleOutlineOutlinedIcon style={{color: "#3f51b5"}}/></a><div style={{fontWeight:"600",marginLeft:3,marginBottom:10}}>10K</div></div>
         </div></span>
  </div>
  <div style={{padding:10}}>
    <figure><img src="https://media.istockphoto.com/photos/nairobi-cityscape-capital-city-of-kenya-picture-id637912692?k=20&m=637912692&s=612x612&w=0&h=uHa90J-jGXws6mo7yeOKLI-ta_RYGErtbsqhtPVxBHk=" /></figure>
    <span>      <div style={{display:"flex",padding:8}}>
           <div style={{alignItems:"center",display:"flex"}}><ThumbUpAltOutlinedIcon style={{color: "#3f51b5"}}/><div style={{fontWeight:"600",marginLeft:3}}>4.5K</div></div>
           <div style={{alignItems:"center",display:"flex",marginTop:10,marginLeft:50}}><a href={`/postview`}><ChatBubbleOutlineOutlinedIcon style={{color: "#3f51b5"}}/></a><div style={{fontWeight:"600",marginLeft:3,marginBottom:10}}>10K</div></div>
         </div></span>
  </div>
</div> */}
                    </div>
                  </div>
                </div>

              </div>
              </div>


    )
}

export default Profileview
