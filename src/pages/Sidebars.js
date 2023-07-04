import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import Navbar from "../pages/Navbar";
import { Link } from 'react-router-dom';
import Clients from "./listing/BasicDetails";



const Sidebars =()=>{



    return(
       
        

      <Sidebar >
            <Menu>
              <SubMenu label="About the Entity">
                <MenuItem component={<Link to="/basic_details" />}> Basic Details </MenuItem>
                <MenuItem component={<Link to="/share_holding_pattern" />}>Share Holding Pattern</MenuItem>
                <MenuItem component={<Link to="/management" />}>Management</MenuItem>
                <MenuItem component={<Link to="/banking_arrangment_credit_limits" />}>Banking Arrangment & Credit Limits</MenuItem>
                <MenuItem component={<Link to="/company_group_exposure" />}>Company and Group  exposure</MenuItem>
                <MenuItem component={<Link to="/related_parties_controlling_interest" />}>Related parties and controlling interest</MenuItem>
                <MenuItem component={<Link to="/audited_financial_statements" />}>Audited Financial Statements</MenuItem>
                <MenuItem component={<Link to="/credit_history" />}>Credit History</MenuItem>

              </SubMenu>
              <SubMenu label="Cost of project">
              <MenuItem>  Land  </MenuItem>
              <MenuItem>    buildings</MenuItem>
              </SubMenu>
            </Menu>
        </Sidebar>
        
       
    )
}
export default Sidebars;