

import About from './About'
import Admission from './Admission'
import './App.css'
import Banner from './Banner'
import Footer from './Footer'
import Header from './Header'
import HeaderTop from './HeaderTop'
import Notice from './Notice'
import Teachers from './Teachers'

function App() {
 

  return (
   <div>
    <HeaderTop/>
    {/* Header Section */}
   <Header/>
    {/* Banner Section */}
   <Banner/>
    {/* About Section */}
   <About/>
   {/* Teachers */}
  <Teachers/>
   {/* Notice */}
   <Notice/>
  
   {/* admission */}
   <Admission/>
{/*  */}
   <Footer/>
 
   </div>
  )
}

export default App
