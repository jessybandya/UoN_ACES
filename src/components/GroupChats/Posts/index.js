import React from 'react'
import "./styles.css"
import {
    alpha,
    AppBar,
    Avatar,
    Badge,
    InputBase,
    makeStyles,
    Toolbar,
    Typography,
  } from "@material-ui/core";
  import { Cancel, Mail, Notifications, Search } from "@material-ui/icons";
  import { useState,useEffect } from "react";
//   import { db,auth } from "../firebase"
  import { useParams } from "react-router";


function Posts() {
    return (
        <>
        
        <div style={{display:"flex",marginTop:15,flex:1}}>
            <div>

            <Avatar
              alt="Jessy Bandya"
              src="data:image/jpeg;base64,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"
            />
  </div>

            <div style={{marginLeft:20,borderBottom: "1px solid #C5C5C5"}}>
                <div style={{display: "flex",justifyContent:"space-between",width:200,alignItems:"center"}}>
                <div style={{marginTop:-10,fontWeight:"600"}}>UoN ACES</div>
                {/* <div style={{marginTop:-10,color:"#979797",fontWeight:"600"}}>9:06 PM</div>  */}
                </div>
        <Badge badgeContent={2} color="secondary">
                <div style={{color: "#AEAEAE",marginLeft:10}}>@nyatieng': Hello,everyone let's meet today evening...</div>
                </Badge>

            </div>
        </div>

        </>
    )
}

export default Posts
