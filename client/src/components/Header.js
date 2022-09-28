import React from "react";
import './Header.css';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ForumIcon from '@mui/icons-material/Forum';

const Header = () => {
    return (
        <div className="header">
        <EmojiEmotionsIcon>
            <PersonAddIcon fontSize="large" className="header__icon" />
        </EmojiEmotionsIcon>
        <h1> Perfect Candidates </h1>
        
            <ForumIcon fontSize="large" className="header__icon" />
        
        </div>
    );
    };
export default Header;  

