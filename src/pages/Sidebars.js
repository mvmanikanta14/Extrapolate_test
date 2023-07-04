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
              <MenuItem component={<Link to="/land" />}>  Land  </MenuItem>
              <MenuItem>  buildings</MenuItem>
              <MenuItem component={<Link to="/plant_machinery" />}>  Plant and Machinery </MenuItem>

              </SubMenu>
              <SubMenu label="About the Loan">
              <MenuItem component={<Link to="/drawdown" />}>  Draw down or disbursal schedule  </MenuItem>
              <MenuItem component={<Link to="/repayment" />}>  Repayment </MenuItem>
              <MenuItem component={<Link to="/margin_monies" />}>  Margin Monies </MenuItem>
              <MenuItem component={<Link to="/terms_condition" />}>  Other Terms and conditions </MenuItem>
              <MenuItem component={<Link to="/interst_charge" />}>  Interst and charges </MenuItem>
              <MenuItem component={<Link to="/security" />}>  Security </MenuItem>
              </SubMenu>
              <SubMenu label="Maters Data">
              <MenuItem component={<Link to="/users" />}>  Users </MenuItem>
              <MenuItem component={<Link to="/external_users" />}>  External Users </MenuItem>
              <MenuItem component={<Link to="/business_entities" />}> Business Entities </MenuItem>
              <MenuItem component={<Link to="/persons" />}>  Persons </MenuItem>
              <MenuItem component={<Link to="/assets" />}>  Assets </MenuItem>
              </SubMenu>

              <SubMenu label="Settings ">
              <MenuItem component={<Link to="/user_permissions" />}>  User Permissions </MenuItem>
              <MenuItem component={<Link to="/risk_types" />}>  Risk_types </MenuItem>
              <MenuItem component={<Link to="/terms_condition_types" />}>  Terms and Conditions Types </MenuItem>
              <MenuItem component={<Link to="/banks" />}>  Banks </MenuItem>
              <MenuItem component={<Link to="/rating_systems" />}>  Rating_systems </MenuItem>
              <MenuItem component={<Link to="/agencies" />}>  Agencies </MenuItem>
              <MenuItem component={<Link to="/subsidies" />}>  Subsidies </MenuItem>
              <MenuItem component={<Link to="/loan_Products" />}>  Loan Products </MenuItem>
              <MenuItem component={<Link to="/model_swot" />}>  Model_Swot </MenuItem>
              <MenuItem component={<Link to="/model_pestel" />}>  Model_PESTeL </MenuItem>
              <MenuItem component={<Link to="/model_vmg" />}>  Model_VMG </MenuItem>
              <MenuItem component={<Link to="/model_eic" />}>  Model_EIC </MenuItem>
              <MenuItem component={<Link to="/checklists" />}>  Checklists </MenuItem>
              <MenuItem component={<Link to="/decisions" />}>  Decisions </MenuItem>
              <MenuItem component={<Link to="/model_drafts" />}>  Model Drafts </MenuItem>
              <MenuItem component={<Link to="/reports" />}>  Reports </MenuItem>
              <MenuItem component={<Link to="/annexures_forms" />}>  Annexures/Forms </MenuItem>
              <MenuItem component={<Link to="/timeLines" />}>  TimeLines </MenuItem>
              <MenuItem component={<Link to="/plan_templates" />}>  Plan_templates </MenuItem>
              <MenuItem component={<Link to="/units_measurements" />}>  Units of measurements </MenuItem>
              <MenuItem component={<Link to="/transactional_arragement_types" />}>  Transactional Arragement types </MenuItem>

              </SubMenu>
              </Menu>
     
        </Sidebar>
        
       
    )
}
export default Sidebars;