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

              <SubMenu label="Others">
                <MenuItem component={<Link to="/debt_restrutuing" />}> Debt restrutuing </MenuItem>
                <MenuItem component={<Link to="/sacrifices_or_written_off" />}>Sacrifices or written off</MenuItem>
                <MenuItem component={<Link to="/npa_status" />}>NPA Status</MenuItem>
                <MenuItem component={<Link to="/capitalisation" />}>Capitalisation</MenuItem>
                <MenuItem component={<Link to="/rescheduling_of_repayments" />}>Rescheduling of repayments</MenuItem>
                <MenuItem component={<Link to="/calender_of_loan_application" />}>	Calender of loan application</MenuItem>
                <MenuItem component={<Link to="/listed_shares_and_movement_in_share_market" />}>Listed shares and movement in Share market</MenuItem>
                <MenuItem component={<Link to="/government_policies_and_impact" />}>	Government policies and impact</MenuItem>
                <MenuItem component={<Link to="/drt_proceedings" />}>DRT proceedings</MenuItem>
                <MenuItem component={<Link to="/consortium_and_multiple_banking_arrangemnts" />}>Consortium and multiple Banking arrangemnts</MenuItem>
                <MenuItem component={<Link to="/early_warning_signals" />}>Early warning signals</MenuItem>
                <MenuItem component={<Link to="/units_inspect_and_findings" />}>Units inspect and findings</MenuItem>
                <MenuItem component={<Link to="/derivative_and_hedging" />}>Derivative and Hedging</MenuItem>
                <MenuItem component={<Link to="/sick_and_bIFR_proceddings" />}>Sick and BIFR proceddings</MenuItem>
              </SubMenu>

              <SubMenu label="Execution">
                <MenuItem component={<Link to="/memos" />}> Memos </MenuItem>
                <MenuItem component={<Link to="/sanction_term_compliances" />}>Sanction term Compliances</MenuItem>
                <MenuItem component={<Link to="/rating_systems" />}>Rating Systems</MenuItem>
                <MenuItem component={<Link to="/subsidies" />}>Subsidies</MenuItem>
                <MenuItem component={<Link to="/checklists" />}>	Checklists</MenuItem>
                <MenuItem component={<Link to="/decisions" />}>		Decisions</MenuItem>
                <MenuItem component={<Link to="/notes" />}>	Notes</MenuItem>
                <MenuItem component={<Link to="/communications" />}>	Communications</MenuItem>
                <MenuItem component={<Link to="/findings_by_others" />}>Findings by others</MenuItem>
                <MenuItem component={<Link to="/estimates_achievments_and_justification" />}>Estimates - achievments and Justification</MenuItem>
                <MenuItem component={<Link to="/projections_feasibility_and_justifictations" />}>Projections  - feasibility and Justifictations</MenuItem>
                <MenuItem component={<Link to="/loan_policy_deviations_justifications" />}>Loan policy Deviations & Justifications</MenuItem>
                <MenuItem component={<Link to="/reports" />}>Reports</MenuItem>
                <MenuItem component={<Link to="/drafts" />}>Drafts</MenuItem>
                </SubMenu>

              
              <SubMenu label="Reports">
                <MenuItem component={<Link to="/pending_jobs" />}> Pending Jobs </MenuItem>
                <MenuItem component={<Link to="/search_by_templates" />}>Search by templates</MenuItem>
                <MenuItem component={<Link to="/search_by_tags" />}>Search by Tags</MenuItem>
              </SubMenu>

                
            </Menu>   
        </Sidebar>
        
       
    )
}
export default Sidebars;