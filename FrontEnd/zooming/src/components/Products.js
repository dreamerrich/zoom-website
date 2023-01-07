import React, { Component } from 'react';
import '../App.css';

class Product extends Component {
    render(){
        return (
            <div>
                <div className='vmeet'>
                    Virtualmeet
                </div>
                <div className='teamchat'>
                    TeamChat
                </div>
                <div className='VolP Phone'>
                    VolP Phone System
                </div>
                <div className='online whiteboard'>
                    Online WhiteBoard
                </div>
            </div>
        )
    }
};

export default Product;