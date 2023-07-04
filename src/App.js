import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { Dashboard } from "./pages/Dashboard";
import Clients from "./pages/listing/BasicDetails";
import AddClients from "./pages/AddEdit/AddEditClient";

import AddAssignment from "./pages/AddEdit/AddEditAssignment";
import Management from "./pages/listing/Management";
import AddMilestone from "./pages/AddEdit/AddEditMilestone";
import BankingArrangmentCreditLimits from "./pages/listing/BankingArrangmentCreditLimits";
import AddEditPlan from "./pages/AddEdit/AddEditPlans";
import RequireAuth from "./pages/RequireAuth";
import CompanyGroupexposure from "./pages/listing/CompanyGroupexposure";
import AddEditUser from "./pages/AddEdit/AddEditUser";
import Appp from "./Appp";
import { Sidebar } from "react-pro-sidebar";
import Sidebars from "./pages/Sidebars";
import Header from "./pages/Header";
import Shareholding from "./pages/listing/Shareholding";
import RelatedPartiesControllingInterest from "./pages/listing/RelatedPartiesControllingInterest";
import AuditedFinancialStatements from "./pages/listing/AuditedFinancialStatements";
import CreditHistory from "./pages/listing/CreditHistory";
import DebtRestrutuing from "./pages/listing/DebtRestrutuing";
import SacrificesOrWrittenOff from "./pages/listing/SacrificesOrWrittenOff";
import NPAStatus from "./pages/listing/NPAStatus";
import Capitalisation from "./pages/listing/Capitalisation";
import ReschedulingOfRepayments from "./pages/listing/ReschedulingOfRepayments";
import CalenderOfLoanApplication from "./pages/listing/CalenderOfLoanApplication";
import ListedSharesAndMovementinShareMarket from "./pages/listing/ListedSharesAndMovementinShareMarket";
import GovernmentPoliciesAndImpact from "./pages/listing/GovernmentPoliciesAndImpact";
import DRTProceedings from "./pages/listing/DRTProceedings";
import ConsortiumAndMultipleBankingArrangemnts from "./pages/listing/ConsortiumAndMultipleBankingArrangemnts";
import EarlyWarningSignals from "./pages/listing/EarlyWarningSignals";
import UnitsInspectAndFindings from "./pages/listing/UnitsInspectAndFindings";
import DerivativeAndHedging from "./pages/listing/DerivativeAndHedging";
import SickAndBIFRProceddings from "./pages/listing/SickAndBIFRProceddings";
import Memos from "./pages/listing/Memos";
import SanctionTermCompliances from "./pages/listing/SanctionTermCompliances";

import RatingSystems from "./pages/listing/RatingSystems";
import Subsidies from "./pages/listing/Subsidies";
import Checklists from "./pages/listing/Checklists";
import Decisions from "./pages/listing/Decisions";
import Notes from "./pages/listing/Notes";
import Communications from "./pages/listing/Communications";
import FindingsByOthers from "./pages/listing/FindingsByOthers";
import EstimatesAchievmentsAndJustification from "./pages/listing/EstimatesAchievmentsAndJustification";
import ProjectionsFeasibilityAndJustifictations from "./pages/listing/ProjectionsFeasibilityAndJustifictations";
import LoanPolicyDeviationsJustifications from "./pages/listing/LoanPolicyDeviationsJustifications";
import Reports from "./pages/listing/Reports";
import Drafts from "./pages/listing/Drafts";
import PendingJobs from "./pages/listing/PendingJobs";
import SearchByTemplates from "./pages/listing/SearchByTemplates";
import SearchByTags from "./pages/listing/SearchByTags";
import Profitandlossaccount from "./pages/listing/Profitandlossaccount";
import BalanceSheet from "./pages/listing/BalanceSheet";
import CashFlowStatemnet from "./pages/listing/CashFlowStatemnet";
import WorkingCapitalRequiremnt from "./pages/listing/WorkingCapitalRequiremnt";
import DSCR_G from "./pages/listing/DSCR_G";
import DSCR_N from "./pages/listing/DSCR_N";
import SVPAnalysis from "./pages/listing/SVPAnalysis";
import NPV from "./pages/listing/NPV";
import Payback from "./pages/listing/Payback";
import IRR from "./pages/listing/IRR";
import BEPAnalysis from "./pages/listing/BEPAnalysis";
import BorrowingCosts from "./pages/listing/BorrowingCosts";
import FixedassetsSchedule from "./pages/listing/FixedassetsSchedule";
import ComputationofTaxes from "./pages/listing/ComputationofTaxes";
import PerformanceRatios from "./pages/listing/PerformanceRatios";
import EfficiencyRatios from "./pages/listing/EfficiencyRatios";
import CapitalStrucutureRatios from "./pages/listing/CapitalStrucutureRatios";
import LoansandSecurityCover from "./pages/listing/LoansandSecurityCover";
import CMA_Form1 from "./pages/listing/CMA_Form1";
import CMA_Form2 from "./pages/listing/CMA_Form2";
import CMA_Form3 from "./pages/listing/CMA_Form3";
import CMA_Form4 from "./pages/listing/CMA_Form4";
import CMA_Form5 from "./pages/listing/CMA_Form5";
import CMA_Form6 from "./pages/listing/CMA_Form6";
import PerformanceIndicators from "./pages/listing/PerformanceIndicators";
import InterminFinancials from "./pages/listing/InterminFinancials";
import MovementofTNW from "./pages/listing/MovementofTNW";
// import EfficiencyRatios from "./pages/listing/EfficiencyRatios"
import SynopsisofBalanceSheet from "./pages/listing/SynopsisofBalanceSheet";
import MoemnetofLongtermFunds from "./pages/listing/MoemnetofLongtermFunds";
import Cashflow from "./pages/listing/Cashflow";
import InventoryandreceivablesLevels from "./pages/listing/InventoryandreceivablesLevels";
import AssessedBankFinance from "./pages/listing/AssessedBankFinance";
import TermLoans from "./pages/listing/TermLoans";

import Assessmentof_CC from "./pages/listing/Assessmentof_CC";

import AssessmentOfOverdraftLimits from "./pages/listing/AssessmentOfOverdraftLimits";

import EpcFbdLimits from "./pages/listing/EpcFbdLimits";

import AssessmentOfLcLimits from "./pages/listing/AssessmentOfLcLimits";

import AssessmentOfBgLimits from "./pages/listing/AssessmentOfBgLimits";

import AssessmentofBgLimitsForEpcContractors from "./pages/listing/AssessmentofBgLimitsForEpcContractors";

import Program from "./pages/listing/Program";

import TeamAndPermissions from "./pages/listing/TeamAndPermissions";

import Calenderinsing from "./pages/listing/Calenderinsing";

import SignOff from "./pages/listing/SignOff";

import Review from "./pages/listing/Review";

import EntityLocations from "./pages/listing/EntityLocations";

import EntityBusinsses from "./pages/listing/EntityBusinsses";

import Products from "./pages/listing/Products";

import CoEfficients from "./pages/listing/CoEfficients";

import Factors from "./pages/listing/Factors";

import BusinessFss from "./pages/listing/BusinessFss";

import ProductMixture from "./pages/listing/ProductMixture";

import Yield from "./pages/listing/Yield";

import TransactionalArragments from "./pages/listing/TransactionalArragments";

import CapacityAndUtilisation from "./pages/listing/CapacityAndUtilisation";

import PersonalProfile from "./pages/listing/PersonalProfile";

import EducationBackground from "./pages/listing/EducationBackground";

import WorkExperience from "./pages/listing/WorkExperience";

import CreditScore from "./pages/listing/CreditScore";

import PresentNetworth from "./pages/listing/PresentNetworth";

import IncomeAndTaxHistory from "./pages/listing/IncomeAndTaxHistory";

import DueDeligenceAndDeliquency from "./pages/listing/DueDeligenceAndDeliquency";

import PresentPositions from "./pages/listing/PresentPositions";

import PrimarySecurity from "./pages/listing/PrimarySecurity";

import CollateralSecurity from "./pages/listing/CollateralSecurity";

import Garuantees from "./pages/listing/Garuantees";

import SecurityCoverage from "./pages/listing/SecurityCoverage";

import AssetValuation from "./pages/listing/AssetValuation";

import LegalVerificaitonofTitle from "./pages/listing/LegalVerificaitonofTitle";
import 'bootstrap/dist/css/bootstrap.min.css'
import AssetProfile from "./pages/listing/AssetProfile";

import Insurance from "./pages/listing/Insurance";

import CashCredit from "./pages/listing/CashCredit";
import BillsFacility  from "./pages/listing/BillsFacility";
import LettersOfCredit  from "./pages/listing/LettersOfCredit";
import BankGaurantee  from "./pages/listing/BankGaurantee";
import LevelOfUtilisation  from "./pages/listing/LevelOfUtilisation";
import TermLoan_facility  from "./pages/listing/TermLoan_facility";

function App(props) {
  return (
   <>
   <section>
   <Header/>

       <div className="container-fluid"> 
      <div className="aside">  <Sidebars/> </div>

      {/* <div className="content">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>  */}
            </div>
     </section>
   
    <Routes>
 
      {/* Unprotected Routes */}
      <Route path="/" element={<LoginPage />} />
      <Route path="/app" element={<Appp />} />
      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/share_holding_pattern" element={<Shareholding />} />
          <Route path="/assignment/add" element={<AddAssignment />} />
          <Route path="/assignment/edit/:id" element={<AddAssignment />} />

          <Route path="/basic_details" element={<Clients />} />
          <Route path="/clients/add" element={<AddClients />} />
          <Route path="/clients/edit/:id" element={<AddClients />} />

          <Route path="/management" element={<Management />} />
          <Route path="/milestone/add" element={<AddMilestone />} />
          <Route path="/milestone/edit/:id" element={<AddMilestone />} />

          <Route path="/banking_arrangment_credit_limits" element={<BankingArrangmentCreditLimits />} />
          <Route path="/plans/add" element={<AddEditPlan />} />
          <Route path="/plans/edit/:id" element={<AddEditPlan />} />

          <Route path="/company_group_exposure" element={<CompanyGroupexposure/>} />
          <Route path="/user/add" element={<AddEditUser/>} />

          <Route path="/related_parties_controlling_interest" element={<RelatedPartiesControllingInterest/>} />

          <Route path="/audited_financial_statements" element={<AuditedFinancialStatements/>} />

          <Route path="/credit_history" element={<CreditHistory/>} />
          

          <Route path="/debt_restrutuing" element={<DebtRestrutuing/>} />
          <Route path="/sacrifices_or_written_off" element={<SacrificesOrWrittenOff/>} />
          <Route path="/npa_status" element={<NPAStatus/>} />
          <Route path="/capitalisation" element={<Capitalisation/>} />
          <Route path="/rescheduling_of_repayments" element={<ReschedulingOfRepayments/>} />
          <Route path="/calender_of_loan_application" element={<CalenderOfLoanApplication/>} />
          <Route path="/listed_shares_and_movement_in_share_market" element={<ListedSharesAndMovementinShareMarket/>} />
          <Route path="/government_policies_and_impact" element={<GovernmentPoliciesAndImpact/>} />
          <Route path="/drt_proceedings" element={<DRTProceedings/>} />
          <Route path="/consortium_and_multiple_banking_arrangemnts" element={<ConsortiumAndMultipleBankingArrangemnts/>} />
          <Route path="/early_warning_signals" element={<EarlyWarningSignals/>} />
          <Route path="/units_inspect_and_findings" element={<UnitsInspectAndFindings/>} />
          <Route path="/derivative_and_hedging" element={<DerivativeAndHedging/>} />
          <Route path="/sick_and_bIFR_proceddings" element={<SickAndBIFRProceddings/>} />
          <Route path="/memos" element={<Memos/>} />
          <Route path="/sanction_term_compliances" element={<SanctionTermCompliances/>} />
          <Route path="/rating_systems" element={<RatingSystems/>} />
          <Route path="/subsidies" element={<Subsidies/>} />
          <Route path="/checklists" element={<Checklists/>} />
          <Route path="/decisions" element={<Decisions/>} />
          <Route path="/notes" element={<Notes/>} />
          <Route path="/communications" element={<Communications/>} />
          <Route path="/findings_by_others" element={<FindingsByOthers/>} />
          <Route path="/estimates_achievments_and_justification" element={<EstimatesAchievmentsAndJustification/>} />
          <Route path="/projections_feasibility_and_justifictations" element={<ProjectionsFeasibilityAndJustifictations/>} />
          <Route path="/loan_policy_deviations_justifications" element={<LoanPolicyDeviationsJustifications/>} />
          <Route path="/reports" element={<Reports/>} />
          <Route path="/drafts" element={<Drafts/>} />
          <Route path="/pending_jobs" element={<PendingJobs/>} />
          <Route path="/search_by_templates" element={<SearchByTemplates/>} />
          <Route path="/search_by_tags" element={<SearchByTags/>} />

          <Route path="/profit_and_loss_account" element={<Profitandlossaccount/>} />
          <Route path="/balance_Sheet" element={<BalanceSheet/>} />
          <Route path="/cash_flow_statemnet" element={<CashFlowStatemnet/>} />
          <Route path="/working_capital_requiremnt" element={<WorkingCapitalRequiremnt/>} />
          <Route path="/dscr_g" element={<DSCR_G/>} />
          <Route path="/dscr_n" element={<DSCR_N/>} />
          <Route path="/svp_analysis" element={<SVPAnalysis/>} />
          <Route path="/npv" element={<NPV/>} />
          <Route path="/payback" element={<Payback/>} />
          <Route path="/irr" element={<IRR/>} />
          <Route path="/bepanalysis" element={<BEPAnalysis/>} />
          <Route path="/borrowing_costs" element={<BorrowingCosts/>} />
          <Route path="/fixed_assets_schedule" element={<FixedassetsSchedule/>} />
          <Route path="/computation_of_taxes" element={<ComputationofTaxes/>} />
          <Route path="/performance_ratios" element={<PerformanceRatios/>} />
          <Route path="/efficiency_ratios" element={<EfficiencyRatios/>} />
          <Route path="/capital_strucuture_ratios" element={<CapitalStrucutureRatios/>} />
          <Route path="/loans_and_security_cover" element={<LoansandSecurityCover/>} />
          <Route path="/cma_form1" element={<CMA_Form1/>} />
          <Route path="/cma_form2" element={<CMA_Form2/>} />
          <Route path="/cma_form3" element={<CMA_Form3/>} />
          <Route path="/cma_form4" element={<CMA_Form4/>} />
          <Route path="/cma_form5" element={<CMA_Form5/>} />
          <Route path="/cma_form6" element={<CMA_Form6/>} />
          <Route path="/performance_indicators" element={<PerformanceIndicators/>} />
          <Route path="/intermin_financials" element={<InterminFinancials/>} />
          <Route path="/movementofTNW" element={<MovementofTNW/>} />
          <Route path="/efficiency_ratios" element={<EfficiencyRatios/>} />
          <Route path="/synopsis_of_balance_sheet" element={<SynopsisofBalanceSheet/>} />
          <Route path="/moemnet_of_long_term_funds" element={<MoemnetofLongtermFunds/>} />
          <Route path="/cash_flow" element={<Cashflow/>} />
          <Route path="/inventory_and_receivables_levels" element={<InventoryandreceivablesLevels/>} />
          <Route path="/assessed_bank_finance" element={<AssessedBankFinance/>} />

          <Route path="/term_loan" element={<TermLoans/>} />

<Route path="/assessment_of_cc" element={<Assessmentof_CC/>}/>

<Route path="/assessment_of_Overdraft_limits" element={<AssessmentOfOverdraftLimits/>}/>

<Route path="/epc_fbd_limits" element={<EpcFbdLimits/>}/>

<Route path="/assessment_of_lc_limits" element={<AssessmentOfLcLimits/>}/>

<Route path="/assessment_of_bg_limits" element={<AssessmentOfBgLimits/>}/>

<Route path="/assessment_of_bg_limits_for_epc_contractors" element={<AssessmentofBgLimitsForEpcContractors/>}/>




<Route path="/program" element={<Program/>}/>

<Route path="/team_and_permissions" element={<TeamAndPermissions/>}/>

<Route path="/calenderinsing" element={<Calenderinsing/>}/>

<Route path="/sign_off" element={<SignOff/>}/>

<Route path="/review" element={<Review/>}/>




<Route path="/entity_locations" element={<EntityLocations/>}/>

<Route path="/entity_businsses" element={<EntityBusinsses/>}/>

<Route path="/products" element={<Products/>}/>

<Route path="/co_efficients" element={<CoEfficients/>}/>

<Route path="/factors" element={<Factors/>}/>

<Route path="/business_fss" element={<BusinessFss/>}/>

<Route path="/product_mixture" element={<ProductMixture/>}/>

<Route path="/yield" element={<Yield/>}/>

<Route path="/transactional_arragments" element={<TransactionalArragments/>}/>
<Route path="/Capacity_and_utilisation" element={<CapacityAndUtilisation/>}/>
<Route path="/personal_profile" element={<PersonalProfile/>}/>
<Route path="/education_background" element={<EducationBackground/>}/>
<Route path="/work_experience" element={<WorkExperience/>}/>
<Route path="/credit_score" element={<CreditScore/>}/>
<Route path="/present_networth" element={<PresentNetworth/>}/>
<Route path="/income_and_tax_history" element={<IncomeAndTaxHistory/>}/>
<Route path="/due_deligence_and_deliquency" element={<DueDeligenceAndDeliquency/>}/>
<Route path="/present_positions" element={<PresentPositions/>}/>  
<Route path="/primary_security" element={<PrimarySecurity/>}/>
<Route path="/collateralsecurity" element={<CollateralSecurity/>}/>
<Route path="/guarantee" element={<Garuantees/>}/>
<Route path="/security_coverage" element={<SecurityCoverage/>}/>
<Route path="/asset_valuation" element={<AssetValuation/>}/>
<Route path="/legal_verificaiton_of_title" element={<LegalVerificaitonofTitle/>}/>
<Route path="/asset_profile" element={<AssetProfile/>}/>
<Route path="/insurance" element={<Insurance/>}/>
              
         {/* Protected Routes */}
        <Route element={<RequireAuth />}>
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="/sidebars" element={<Sidebars/>} />
          
          
          
          




      </Route>
    </Routes>
    </>
  );
}

export default App;
