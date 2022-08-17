/*!
=========================================================
* Muse Ant Design Dashboard - v1.0.0
=========================================================
* Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
* Coded by Creative Tim
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import {
    Row,
    Col,
    Card,
    Radio,
    Table,
    Progress,
    Avatar,
    Typography,
    Tag
  } from "antd";
  
  import { Link } from "react-router-dom";
  import '../App.css'
  
  // Images
  import pencil from "../assets/images/pencil.svg";
  
  const { Title } = Typography;
  

  // project table start
  const project = [
    {
      title: "Project Name",
      dataIndex: "name",
      width: "32%",
    },
    {
      title: "STATUS",
      dataIndex: "address",
    },
    {
      title: "COMPLETION",
      dataIndex: "completion",
    },
  ];
  const dataproject = [
    {
      key: "1",
  
      name: (
        <>
          <Avatar.Group>
            <div className="avatar-info">
              <Title level={5}>Spotify Version</Title>
            </div>
          </Avatar.Group>
        </>
      ),
      address: (
        <>
          <div className="text-sm">working</div>
        </>
      ),
      completion: (
        <>
          <div className="ant-progress-project">
            <Progress percent={30} size="small" />
            <span>
              <Link to="/">
                <img src={pencil} alt="" />
              </Link>
            </span>
          </div>
        </>
      ),
    },
  
    {
      key: "2",
      name: (
        <>
          <Avatar.Group>
            <div className="avatar-info">
              <Title level={5}>Progress Track</Title>
            </div>
          </Avatar.Group>
        </>
      ),
      address: (
        <>
          <div className="text-sm">working</div>
        </>
      ),
      completion: (
        <>
          <div className="ant-progress-project">
            <Progress percent={10} size="small" />
            <span>
              <Link to="/">
                <img src={pencil} alt="" />
              </Link>
            </span>
          </div>
        </>
      ),
    },
  
    {
      key: "3",
      name: (
        <>
          <Avatar.Group>
            <div className="avatar-info">
              <Title level={5}> Jira Platform Errors</Title>
            </div>
          </Avatar.Group>
        </>
      ),
      address: (
        <>
          <div className="text-sm">done</div>
        </>
      ),
      completion: (
        <>
          <div className="ant-progress-project">
            <Progress percent={100} size="small" format={() => "done"} />
            <span>
              <Link to="/">
                <img src={pencil} alt="" />
              </Link>
            </span>
          </div>
        </>
      ),
    },
  
    {
      key: "4",
      name: (
        <>
          <Avatar.Group>
            <div className="avatar-info">
              <Title level={5}> Launch new Mobile App</Title>
            </div>
          </Avatar.Group>
        </>
      ),
      address: (
        <>
          <div className="text-sm">canceled</div>
        </>
      ),
      completion: (
        <>
          <div className="ant-progress-project">
            <Progress
              percent={50}
              size="small"
              status="exception"
              format={() => "50%"}
            />
            <span>
              <Link to="/">
                <img src={pencil} alt="" />
              </Link>
            </span>
          </div>
        </>
      ),
    },
  
    {
      key: "5",
      name: (
        <>
          <Avatar.Group>
            <div className="avatar-info">
              <Title level={5}>Web Dev</Title>
            </div>
          </Avatar.Group>
        </>
      ),
      address: (
        <>
          <div className="text-sm">working</div>
        </>
      ),
      completion: (
        <>
          <div className="ant-progress-project">
            <Progress percent={80} size="small" />
            <span>
              <Link to="/">
                <img src={pencil} alt="" />
              </Link>
            </span>
          </div>
        </>
      ),
    },
  
    {
      key: "6",
      name: (
        <>
          <Avatar.Group>
            <div className="avatar-info">
              <Title level={5}>Redesign Online Store</Title>
            </div>
          </Avatar.Group>
        </>
      ),
      address: (
        <>
          <div className="text-sm">canceled</div>
        </>
      ),
      completion: (
        <>
          <div className="ant-progress-project">
            <Progress percent={0} size="small" />
            <span>
              <Link to="/">
                <img src={pencil} alt="" />
              </Link>
            </span>
          </div>
        </>
      ),
    },
  ];
  
  function OngoingProjects() {
  
    return (
      <>
        <div className="tabled">
          <Row gutter={[24, 0]}>
            <Col xs="24" xl={24}>
              <Card
                bordered={false}
                className="criclebox tablespace mb-24"
                title="Projects"
                
              >
                <div className="table-responsive">
                  <Table
                    columns={project}
                    dataSource={dataproject}
                    pagination={false}
                    className="ant-border-space"
                  />
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
  
  export default OngoingProjects;
  