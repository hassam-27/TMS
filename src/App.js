import { Layout } from 'antd';
import 'antd/dist/antd.css';
import './index.css';
import SideNavBar from './components/SideNavBar';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Attendance from './pages/attendance';
const { Header } = Layout;

const App = () => {
  
  return (
    <BrowserRouter>
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <SideNavBar />
      <Layout className="site-layout">
        <Header
        
          className="site-layout-background"
          style={{
            padding: 0,
            backgroundColor: "#FFFFFF4D"
          }}
        />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/attendance" element={<Attendance />} />

        </Routes>
       
      </Layout>
    </Layout>
    </BrowserRouter>
    
  );
};

export default App;
