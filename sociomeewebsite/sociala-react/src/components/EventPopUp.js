import React from 'react';
import "./eventPopup.css"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Friends from '../components/Friends';
import { GroupAdd } from '@material-ui/icons';

export default () => (
  <Popup trigger={<button>
      <GroupAdd  className="onLineFrinds"/>
      <span className="onlinetxt">Friend Request</span>
  </button>} position="left bottom">
    <div>
    <Friends />
    </div>
  </Popup>

  
);