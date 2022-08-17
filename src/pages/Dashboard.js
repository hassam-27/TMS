import { Col, Row } from 'antd';
import Highlights from './Highlights';
import OngoingProjects from './OngoingProjects';
import Stats from "./stats";
import Todos from './Todos';
import "../App.css"


const Dashboard = () => {
    
   return(
    <>
        <Row gutter={[48, 24]}>
            <Col span={2} >  </Col>
            <Col span={20} ><Stats /> </Col>
            <Col span={2} />
        </Row>
        <Row gutter={[48, 48]}>
            <Col span={1} >  </Col>
            <Col span={22} > <OngoingProjects /> </Col>
            <Col span={1} />
        </Row>
        <Row gutter={[48, 48]}>
            <Col span={22} className="highlights" > <Todos /> </Col>
        </Row>
    </>
   
   )
}

export default Dashboard;