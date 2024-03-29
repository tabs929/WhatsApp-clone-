import React, { useEffect,useState } from 'react';
import './Sidebar.css';
import {Avatar, IconButton} from  '@material-ui/core';
import DonutLargeicon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import SidebarChat from "./SidebarChat";
import db from "./firebase";
import { useStateValue } from './StateProvider';



function Sidebar() {
const [rooms,setRooms]=useState([]);
const [{user},dispatch] = useStateValue();

useEffect(() => {
   const unsubscribe = db.collection('rooms').onSnapshot(snapshot => (
        setRooms(snapshot.docs.map((doc) => 
            ({
                id: doc.id,
                data: doc.data(),
            })
        ))
    ))

    return () => {
        unsubscribe();
    };
},[])


    return (
        <div className="sidebar">
          
            <div className="sidebar__header">
                <Avatar src={user?.photoURL}/>
                <div className="sidebar__rightheader">
                    <IconButton>
                        <DonutLargeicon />
                    </IconButton>   
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>
            
            <div className="sidebar__search">
                <div                className="sidebar__searchcontainer">
                    <SearchOutlined/>
                    <input placeholder="Search or start new Chat" type="text"/>
                </div>
            </div>
            <div className="sidebar__chat">
                <SidebarChat addNewChat />
                {rooms.map((room) => (
                    <SidebarChat key={room.id} id={room.id}
                    name={room.data.name}/>
                    ))}
            </div>
        </div>
    )
}

export default Sidebar
