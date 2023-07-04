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

              <SubMenu label="Financials">
                <MenuItem component={<Link to="/profit_and_loss_account" />}> Profit and loss account </MenuItem>
                <MenuItem component={<Link to="/balance_Sheet" />}> Balance Sheet </MenuItem>
                <MenuItem component={<Link to="/cash_flow_statemnet" />}> Cash Flow Statemnet </MenuItem>
                <MenuItem component={<Link to="/working_capital_requiremnt" />}> Working Capital Requiremnt</MenuItem>
                <MenuItem component={<Link to="/dscr_g" />}> DSCR_G</MenuItem>
                <MenuItem component={<Link to="/dscr_n" />}> DSCR_N</MenuItem>
                <MenuItem component={<Link to="/svp_analysis" />}> SVP Analysis</MenuItem>
                <MenuItem component={<Link to="/npv" />}> NPV</MenuItem>
                <MenuItem component={<Link to="/payback" />}> Payback</MenuItem>
                <MenuItem component={<Link to="/irr" />}>IRR </MenuItem>
                <MenuItem component={<Link to="/bepanalysis" />}>BEP Analysis </MenuItem>
                <MenuItem component={<Link to="/borrowing_costs" />}>Borrowing Costs </MenuItem>
                <MenuItem component={<Link to="/fixed_assets_schedule" />}>Fixed assets Schedule </MenuItem>
                <MenuItem component={<Link to="/computation_of_taxes" />}>computation of Taxes </MenuItem>
                <MenuItem component={<Link to="/performance_ratios" />}>Performance  Ratios </MenuItem>
                <MenuItem component={<Link to="/efficiency_ratios" />}>Efficiency Ratios </MenuItem>
                <MenuItem component={<Link to="/capital_strucuture_ratios" />}> Capital Strucuture Ratios</MenuItem>
                <MenuItem component={<Link to="/loans_and_security_cover" />}> Loans and Security Cover</MenuItem>
                <MenuItem component={<Link to="/cma_form1" />}> CMA_Form1</MenuItem>
                <MenuItem component={<Link to="/cma_form2" />}> CMA_Form2</MenuItem>
                <MenuItem component={<Link to="/cma_form3" />}> CMA_Form3</MenuItem>
                <MenuItem component={<Link to="/cma_form4" />}> CMA_Form4</MenuItem>
                <MenuItem component={<Link to="/cma_form5" />}> CMA_Form5</MenuItem>
                <MenuItem component={<Link to="/cma_form6" />}> CMA_Form6</MenuItem>
                <MenuItem component={<Link to="/performance_indicators" />}> Performance Indicators</MenuItem>
                <MenuItem component={<Link to="/intermin_financials" />}> Intermin Financials</MenuItem>
                <MenuItem component={<Link to="/movementofTNW" />}> Movement of TNW</MenuItem>
                <MenuItem component={<Link to="/efficiency_ratios" />}> Efficiency Ratios</MenuItem>
                <MenuItem component={<Link to="/synopsis_of_balance_sheet" />}> Synopsis of Balance Sheet</MenuItem>
                <MenuItem component={<Link to="/moemnet_of_long_term_funds" />}> Moemnet of Long term Funds</MenuItem>
                <MenuItem component={<Link to="/cash_flow" />}> Cash flow</MenuItem>
                <MenuItem component={<Link to="/inventory_and_receivables_levels" />}> Inventory and receivables Levels</MenuItem>

                <MenuItem component={<Link to="/assessed_bank_finance" />}> Assessed Bank Finance</MenuItem>
                </SubMenu> 

                <SubMenu label="Assessemnt of Limits">

                <MenuItem component={<Link to="/term_loan"/>}> Term Loans </MenuItem>

                <MenuItem component={<Link to="/assessment_of_cc" />}>Assessment of CC </MenuItem>

                <MenuItem component={<Link to="/assessment_of_Overdraft_limits" />}>Assessment of Overdraft Limits</MenuItem>

                <MenuItem component={<Link to="/epc_fbd_limits" />}>EPC / FBD Limits</MenuItem>

                <MenuItem component={<Link to="/assessment_of_lc_limits" />}>Assessment of LC Limits</MenuItem>

                <MenuItem component={<Link to="/assessment_of_bg_limits" />}>Assessment of BG Limits</MenuItem>

                <MenuItem component={<Link to="/assessment_of_bg_limits_for_epc_contractors" />}>Assessment of BG Limits for EPC Contractors</MenuItem>

              </SubMenu>




              <SubMenu label="Planing and Work Allocation">

                <MenuItem component={<Link to="/program"/>}> Program </MenuItem>

                <MenuItem component={<Link to="/team_and_permissions" />}>Team and Permissions </MenuItem>

                <MenuItem component={<Link to="/calenderinsing" />}>calenderinsing</MenuItem>

                <MenuItem component={<Link to="/sign_off" />}>Sign-off</MenuItem>

                <MenuItem component={<Link to="/review" />}>Review</MenuItem>

              </SubMenu>




              <SubMenu label="Assumptions & Metrics">

                <MenuItem component={<Link to="/entity_locations"/>}> Entity_locations </MenuItem>

                <MenuItem component={<Link to="/entity_businsses" />}>Entity_Businsses </MenuItem>

                <MenuItem component={<Link to="/products" />}>Products</MenuItem>

                <MenuItem component={<Link to="/co_efficients" />}>co-efficients</MenuItem>

                <MenuItem component={<Link to="/factors" />}>Factors</MenuItem>

                <MenuItem component={<Link to="/business_fss" />}>Business_FSS</MenuItem>

                <MenuItem component={<Link to="/product_mixture" />}>Prduct Mixture</MenuItem>

                <MenuItem component={<Link to="/yield" />}>Yiled</MenuItem>

                <MenuItem component={<Link to="/transactional_arragments" />}>Transactional Arragments</MenuItem>

                <MenuItem component={<Link to="/Capacity_and_utilisation" />}>Capacity and utilisation</MenuItem>

              </SubMenu>




              <SubMenu label="About Persons">

                <MenuItem component={<Link to="/personal_profile"/>}> Personal Profile </MenuItem>

                <MenuItem component={<Link to="/education_background" />}>Education Background </MenuItem>

                <MenuItem component={<Link to="/work_experience" />}>Work Experience</MenuItem>

                <MenuItem component={<Link to="/credit_score" />}>Credit Score</MenuItem>

                <MenuItem component={<Link to="/present_networth" />}>Present Net-worth</MenuItem>

                <MenuItem component={<Link to="/income_and_tax_history" />}>Income and tax history</MenuItem>

                <MenuItem component={<Link to="/due_deligence_and_deliquency" />}>Due deligence and deliquency</MenuItem>

                <MenuItem component={<Link to="/present_positions" />}>Present Positions</MenuItem>

              </SubMenu>




              <SubMenu label="About the Security">

                <MenuItem component={<Link to="/primary_security"/>}> Primary security </MenuItem>

                <MenuItem component={<Link to="/collateralsecurity" />}>collateral Security </MenuItem>

                <MenuItem component={<Link to="/guarantee" />}>Garuantees </MenuItem>

                <MenuItem component={<Link to="/security_coverage" />}>Security Coverage</MenuItem>

                <MenuItem component={<Link to="/asset_valuation" />}>Asset Valuation</MenuItem>

                <MenuItem component={<Link to="/legal_verificaiton_of_title" />}>Legal Verificaiton of Title</MenuItem>

                <MenuItem component={<Link to="/asset_profile" />}>Asset Profile</MenuItem>

                <MenuItem component={<Link to="/insurance" />}>Insurance </MenuItem>

              </SubMenu>
            </Menu>   
     
        </Sidebar>
        
       
    )
}
export default Sidebars;