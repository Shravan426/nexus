import logo from './logo.svg';
import './App.css';
import { MantineProvider,Container } from '@mantine/core';
import Header from './components/sample/Header';
import Firstpage from './components/sample/Firstpage';
import Secondpage from './components/sample/Secondpage';
import Thirdpage from './components/sample/Thirdpage';
import Fourthpage from './components/sample/Fourthpage';
import Fifthpage from './components/sample/Fifthpage';
import Sixthpage from './components/sample/Sixthpage';
import Seventhpage from './components/sample/Seventhpage';
import Footer from './components/sample/Footer';



function App() {
  return (
    <div className="App" style={{ backgroundColor: '#F1F1F1' }}>
    
      <MantineProvider>
       
       <Header/>
       <Container fluid mx={{lg:40,md:40,sm:20,xs:10}}>
        <Firstpage/>
       <Secondpage/>
       <Thirdpage/>
       <Fourthpage/>
       <Fifthpage/>
       <Sixthpage/>
       <Seventhpage/>
        </Container>
       <Footer/>
      </MantineProvider>
      
    </div>
  );
}

export default App;
