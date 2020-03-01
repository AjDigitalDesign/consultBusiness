import React, {useState} from 'react';
import {StyledNavigationHeader} from "./Navigation.styled";
import Topbar from "./Topbar/Topbar";
import Burger from "./Burger/Burger";
import NavLink from "./NavLinks/NavLinks";
import NavMenu from "./NavLinks/NavMenu";


const Index = () =>{
    const [open, setOpen] = useState(false);

    return (
        <StyledNavigationHeader>
            <Topbar/>
            <Burger open={open} setOpen={setOpen}/>
            <NavLink open={open} setOpen={setOpen}/>
            <NavMenu/>
        </StyledNavigationHeader>
    )
};
export default Index;