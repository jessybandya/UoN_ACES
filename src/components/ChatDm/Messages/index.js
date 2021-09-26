import React, { useState, useEffect, useRef } from 'react'
import { db, auth } from '../../firebase'
import SendMessage from '../../ChatDm'
import SignOut from '../../grid/Navbar'
import "../styles.css"
function Messages({message, fromId, toId, timestamp, user}) {

    const parseTimestamp = (timestamp) => {
        try {
            let date = new Date(timestamp)
            return date.toUTCString()
        } catch (error) {
            console.error(error)
            return timestamp
        }
    }


    return (
        <div>
        <div  >
        <div   class="card-body height3">
        			<ul   class="chat-list">
						{fromId !== user?.uid  &&(
                        <li class="in">
																	<>

						<div class="chat-img">
							<img class="card-img-top navbar-brand user_img  rounded-circle" alt="Avtar" src="" style={{objectFit: "cover"}}/>
						</div>
						<div class="chat-body">
							<div class="chat-message">
                                 <h5>Jaby1</h5>
								 <p>{message}</p>
								 <p>{parseTimestamp(timestamp)}</p>
							</div>
						</div>
						</>
						
					</li>
						)}
        				{fromId == user?.uid  &&(
                        <li class="out">
						<div class="chat-img">
							<img class="card-img-top navbar-brand user_img  rounded-circle" alt="Avtar" src="" style={{objectFit: "cover"}}/>
						</div>
						<div  class="chat-body">
							<div  class="chat-message">
								<h5>Me</h5>
								<p>{message}</p>
								<p>{parseTimestamp(timestamp)}</p>
							</div>
						</div>
					</li>
						)}
        				
        				
        			</ul>
        		</div>
        </div>  
        </div>
    )
}

export default Messages
