import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
// import './Home.css'

class Home extends Component {
    render() {
      return (
        <div>
            <Header />
            <div className='home'>
                <div className='row'>
                    <div className='content'>
                        <p>Reprehenderit sit ad anim enim tempor culpa ex deserunt amet. Esse nulla ea cillum occaecat id deserunt esse consequat sit. Officia proident consequat irure et enim sint occaecat qui excepteur magna. Nulla cillum adipisicing deserunt laborum elit ea sint adipisicing eiusmod exercitation voluptate ad do id.</p>
                    </div>
                    <div className='col'>
                        <p>Reprehenderit cupidatat sint nostrud nisi est dolore eu aliqua excepteur. Velit proident minim mollit pariatur incididunt sit. Velit ea exercitation fugiat anim nostrud reprehenderit ad Lorem velit labore cupidatat proident anim. Dolore reprehenderit et nostrud minim deserunt pariatur qui dolore. Aliquip ut exercitation exercitation ut cillum.</p>
                    </div>
                </div>
            </div>
            <Footer />
            </div>
      );
    }
  }
  
  export default Home;
  