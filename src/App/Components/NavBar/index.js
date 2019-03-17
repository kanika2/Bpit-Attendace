import React, {Component} from 'react';
import './index.css'

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.Title
        }
    }

    render() {
        return (
            // <div>
                <div className='navHeader'>
                    <div className='navLogo'>
                        <img src='http://www.indiajobvaccancies.com/wp-content/uploads/2017/10/bpit-logo.png' 
                            alt='Bpit-Logo'/>
                    </div>
                    <div className='navTitle'>
                        <p>{this.state.title}</p>
                    </div>
                </div>
            // </div>
        )
    }
}

export default NavBar;