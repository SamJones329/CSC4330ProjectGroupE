import * as React from 'react';
import { Link } from 'react-router-dom';

interface FooterProps {
    
}
 
interface FooterState {
    
}
 
class Footer  extends React.Component<FooterProps, FooterState> {
    constructor(props: FooterProps) {
        super(props);
        this.state = {   };
    }
    render() { 
        return (
            <div className="footer">
              <ul>
                  <li><Link to ="/about">About</Link></li>
                  <li><Link to ="/Contact Us">Contact Us</Link></li>
                  <li></li>
              </ul>  
            </div>
        );
    }
}
 
export default Footer;