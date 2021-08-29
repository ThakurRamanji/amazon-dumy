import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { ShoppingBasket } from '@material-ui/icons';
import { Link } from "react-router-dom";
import { useStateValue } from './StateProvider';


function Header() {

    const [{basket}, dispatch ] = useStateValue();

    return (
        <div className="header">
           <Link to='/'>
           <img 
                className="header-logo"
                src="https://i.pinimg.com/originals/47/b7/bd/47b7bdac4285ee24654ca7d68cf06351.png"
            />
           </Link>
            
            <div className="header_search">
            <input className="header_searchInput" type="text">  
            </input>
            <SearchIcon className="header_searchIcon"/>
            </div>
            
            <div className="header_nav">
              <Link to='/login'>
                <div className="header_option">
                   <span className="header_option_line1">
                       Hello,
                       User
                   </span>
                   <span className="header_option_line2">
                       Sigh In
                   </span>
                </div>
              </Link>
                <div className="header_option">
                <span className="header_option_line1">
                       Returns
                   </span>
                   <span className="header_option_line2">
                       & Orders
                   </span>

                </div>
                 <Link to='/checkout'>
                 <div className="header_option_basket">
                   <ShoppingBasket/>
                   <span className="header_optionLineTwo header_basketCount">
                      {basket?.length}
                   </span>
                 </div>
                 </Link>
                 

                {/* <div className="header_option">
                <span className="header_option_line1">
                       Your
                   </span>
                   <span className="header_option_line2">
                       Prime
                   </span>

                </div> */}
            </div>
        </div>
    )
}

export default Header;
