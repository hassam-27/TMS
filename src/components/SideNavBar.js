import {
    DesktopOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
    DashboardOutlined
  } from '@ant-design/icons';
  import { Layout, Menu } from 'antd';
  import React, { useState } from 'react';
  import 'antd/dist/antd.css';
  import '../index.css';
  import { Link } from 'react-router-dom';


  import { Avatar, Col, Row, Image } from "antd";
import {
    ProjectTwoTone,
    CarryOutTwoTone,
    ProfileTwoTone,
    ContactsTwoTone,
    ContainerTwoTone,
    SoundTwoTone,
    SafetyCertificateTwoTone,
  } from '@ant-design/icons';

  const { Sider } = Layout;
  
  
  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }
  
  const items = [
    getItem(<Link to='/dashboard'>Dashboard</Link>, '1', <DashboardOutlined />),
    getItem(<Link to='/attendance'>Attendance</Link>, '2', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
      getItem('Tom', '3'),
      getItem('Bill', '4'),
      getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
  ];
  
  const SideNavBar = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
     
        <Sider trigger={null} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div>
          {/*<Image src= {image} height = {150} width = {150} style = {{borderRadius : 70, margin : 10, marginLeft : 25}}></Image> */}



          <div style={{flexDirection : "row", justifyContent : "end", backgroundColor : "#362d26", borderRadius : 0, marginTop : 20}} className='dashboard-link' >
          <Avatar size={40} style = {{marginLeft : 10, marginBottom : 10}} src="https://joeschmoe.io/api/v1/random">Avataer</Avatar>
            <Link to= "/profile" style={{ fontSize : 15, fontWeight : "bold", color: "	#6C7293", marginLeft : 10}}>Asaad Khan</Link>
          </div>

          <div style={{flexDirection : "row", justifyContent : "end"}} className='dashboard-link' >
            <ProjectTwoTone style={{ fontSize : '20px', margin : 17, marginRight : 15 , marginTop : 16}} twoToneColor= "#CC00FF" className='dashboard-link' />
            <Link to= "/" style={{fontSize : 15, fontWeight : "bold"}} className = "link-color">Dashboard</Link>
          </div>

          <div style={{flexDirection : "row", justifyContent : "end"}} className='dashboard-link'>
            <SoundTwoTone style={{ fontSize : '20px', margin : 17, marginRight : 15 , marginTop : 15}} twoToneColor= "#33FFFF" className='dashboard-link' />
            <Link to= "/announcement" style={{fontSize : 15, fontWeight : "bold"}} className = "link-color">Announcements</Link>
          </div>

          <div style={{flexDirection : "row", justifyContent : "end"}} className='dashboard-link'>
            <CarryOutTwoTone style={{ fontSize : '20px', margin : 17, marginRight : 15 , marginTop : 15}} twoToneColor= "	#009933" className='attendance' />
            <Link to= "/attendance" style={{fontSize : 15, fontWeight : "bold"}} className = "link-color">Attendance</Link>
          </div>

          <div style={{flexDirection : "row", justifyContent : "end"}} className='dashboard-link'>
            <ProfileTwoTone style={{ fontSize : '20px', margin : 17, marginRight : 15 , marginTop : 15}} twoToneColor= "#FFCC99" className='dashboard-link' />
            <Link to= "/profile" style={{fontSize : 15, fontWeight : "bold"}} className = "link-color">Profile</Link>
          </div>

          <div style={{flexDirection : "row", justifyContent : "end"}} className='dashboard-link'>
            <ContactsTwoTone style={{ fontSize : '20px', margin : 17, marginRight : 15 , marginTop : 15}} twoToneColor= "#FFFF00" className='dashboard-link' />
            <Link to= "/about" style={{fontSize : 15, fontWeight : "bold"}} className = "link-color">About</Link>
          </div>

          <div style={{flexDirection : "row", justifyContent : "end"}} className='dashboard-link'>
            <ContainerTwoTone style={{ fontSize : '20px', margin : 17, marginRight : 15 , marginTop : 15}} twoToneColor= "	#FF6699" className='dashboard-link' />
            <Link to= "/termsconditions" style={{fontSize : 15, fontWeight : "bold"}} className = "link-color">Terms/Cond</Link>
          </div>

          <div style={{flexDirection : "row", justifyContent : "end"}} className='dashboard-link'>
            <SafetyCertificateTwoTone style={{ fontSize : '20px', margin : 17, marginRight : 15 , marginTop : 15}} twoToneColor= "#6633FF" className='dashboard-link' />
            <Link to= "/policy" style={{fontSize : 15, fontWeight : "bold"}} className = "link-color">Policy</Link>
          </div>









        </div>
        </Sider>
        
    );
  };
  
  export default SideNavBar;