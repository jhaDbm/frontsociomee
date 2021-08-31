import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import "./showallcomments.css";

export default function GroupAvatars() {
  return (
    <div className="showComments">
    <AvatarGroup max={8} >
      <Avatar className="avtargroup" alt="Remy Sharp" src="/assets/images/ajay.jpg" />
      <Avatar className="avtargroup" alt="Travis Howard" src="/assets/images/prince.jpg" />
      <Avatar className="avtargroup" alt="Cindy Baker" src="/assets/images/priyanshu.jpg" />
      <Avatar className="avtargroup" alt="Agnes Walker" src="/assets/images/vivek.jpg" />
      <Avatar className="avtargroup"alt="Trevor Henderson" src="/assets/images/saddy.jpg" />
      <Avatar className="avtargroup" alt="Remy Sharp" src="/assets/images/ajay.jpg" />
      <Avatar className="avtargroup" alt="Travis Howard" src="/assets/images/prince.jpg" />
      <Avatar className="avtargroup" alt="Cindy Baker" src="/assets/images/priyanshu.jpg" />
      <Avatar className="avtargroup" alt="Agnes Walker" src="/assets/images/vivek.jpg" />
      <Avatar alt="Trevor Henderson" src="/assets/images/saddy.jpg" />
    </AvatarGroup>
    </div>
  );
}