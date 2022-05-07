import React from 'react';
import { useState } from 'react';
import DrawerComponent from './drawer-component';
import CloseIcon from '../../media/header/close-icon.svg';
import DrawerIcon from '../../media/header/drawer-icon.svg';
import { Scrollbars } from 'react-custom-scrollbars';

import {Link} from "react-router-dom";


const Drawer = () => {

    const [isDrawerOpen, setIsDrawerOpen] = useState( false );

    return (
        <DrawerComponent
            width="100%"
            drawerHandler={
                <div>
                    <p>BAR</p>
                </div>
        
            }
            open={isDrawerOpen}
            toggleHandler={()=> setIsDrawerOpen((prevState) =>!prevState)}
            closeButton={<image src={CloseIcon} size="18px" color="white"/>}
            drawerStyle={styles.drawer}
            closeBtnStyle={styles.close}
       >
         <Scrollbars autoHide>
           <div sx={styles.content}>
              <div sx={styles.menu}>
                    <Link to="/"><p className="tabs">About</p></Link>
                    <Link to="/mint"><p className="tabs">Mint</p></Link>
                    <Link to="/game"><p className="tabs">Game</p></Link>
                    <Link to="/staking"><p className="tabs">Staking</p></Link>
              </div>
           </div>
    
         </Scrollbars>
       </DrawerComponent>
    );
};

const styles = {
    imgLogo: {
        width: '120px'
    },

    drawer: {
        width: '100%',
        height: '100%',
        backgroundColor: 'red',
      },
    
      close: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: '25px',
        right: '30px',
        zIndex: '1',
        cursor: 'pointer',
      },

    content: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        pt: '100px',
        pb: '40px',
        px: '30px',
        backgroundColor: '#1F1F1F'
      },

    menu: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        a: {
          fontSize: '16px',
          fontWeight: '500',
          color: 'white',
          py: '15px',
          cursor: 'pointer',
          transition: 'all 0.25s',
          '&:hover': {
            color: 'secondary',
          },
          '&.active': {
            color: 'secondary',
          },
        },
      },
}

export default Drawer;


