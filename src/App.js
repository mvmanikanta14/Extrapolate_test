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
