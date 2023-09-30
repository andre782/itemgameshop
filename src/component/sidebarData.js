import React from "react";
import { AiFillHome } from "react-icons/ai";
import { IoIosPaper } from "react-icons/io";
import { BsFillCartPlusFill, BsEnvelopePaper, BsQuestionOctagonFill } from "react-icons/bs";
import { AiOutlineTeam } from "react-icons/ai";
import "./navbar.css"


export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiFillHome/>,
    cName: 'nav-text'
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: <IoIosPaper/>,
    cName: 'nav-text'
  },
  {
    title: 'Products',
    path: '/products',
    icon: <BsFillCartPlusFill/>,
    cName: 'nav-text'
  },
  {
    title: 'Team',
    path: '/team',
    icon: <AiOutlineTeam/>,
    cName: 'nav-text'
  },
  {
    title: 'Message',
    path: '/message',
    icon: <BsEnvelopePaper/>,
    cName: 'nav-text'
  },
  {
    title: 'Support',
    path: '/support',
    icon: <BsQuestionOctagonFill/>,
    cName: 'nav-text'
  },
]