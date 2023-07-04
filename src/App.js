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
import Land from "./pages/listing/Land";
import PlantandMachinery from "./pages/listing/PlantandMachinery";
import Drawdown  from "./pages/listing/Drawdown";
import Repayment from "./pages/listing/Repayment";
import Margin from "./pages/listing/Margin";
import OtherTermsandConditions from "./pages/listing/OtherTermsandConditions";
import InterstandCharges from "./pages/listing/InterstandCharges";
import Security from "./pages/listing/Security";
import Loans from "./pages/listing/Loans";
import Assets from "./pages/listing/Assets";
import Persons from "./pages/listing/Persons";
import BusinessEntities from "./pages/listing/BusinessEntities";
import ExternalUsers from "./pages/listing/ExternalUsers";
import Users from "./pages/listing/Users";
import Userpermissions from "./pages/listing/Userpermissions";
import Risk_types from "./pages/listing/Risk_types";
import TermsConditionsTypes from "./pages/listing/TermsConditionsTypes";
import Banks from "./pages/listing/Banks";
import RatingSystems from "./pages/listing/RatingSystems";
import Agencies from "./pages/listing/Agencies";
import Subsidies from "./pages/listing/Subsidies";
import LoanProducts from "./pages/listing/LoanProducts";

import ModelSwot from "./pages/listing/ModelSwot";
import Model_PESTel from "./pages/listing/Model_PESTel";
import Model_VMG from "./pages/listing/Model_VMG";
import Model_EIC from "./pages/listing/Model_EIC";
import Decisions from "./pages/listing/Decisions";
import Model_drafts from "./pages/listing/Model_drafts";
import Checklists from "./pages/listing/Checklists";
import Reports from "./pages/listing/Reports";
import AnnexuresForms from "./pages/listing/AnnexuresForms";
import TimeLines from "./pages/listing/TimeLines";
import Plan_templates from "./pages/listing/Plan_templates";
import UnitsMeasurements from "./pages/listing/UnitsMeasurements";
import TransactionalArragementTypes from "./pages/listing/TransactionalArragementTypes";




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
          <Route path="/land" element={<Land/>} />
          <Route path="/plant_machinery" element={<PlantandMachinery/>} />
          <Route path="/drawdown" element={<Drawdown/>} />
          <Route path="/repayment" element={<Repayment/>} />
          <Route path="/margin_monies" element={<Margin/>} />
          <Route path="/terms_condition" element={<OtherTermsandConditions/>} />
          <Route path="/interst_charge" element={<InterstandCharges/>} />
          <Route path="/security" element={<Security/>} />
          <Route path="/users" element={<Users/>} />
          <Route path="/external_users" element={<ExternalUsers/>} />
          <Route path="/business_entities" element={<BusinessEntities/>} />
          <Route path="/persons" element={<Persons/>} />
          <Route path="/assets" element={<Assets/>} />
          <Route path="/loans" element={<Loans/>} />
          <Route path="/user_permissions" element={<Userpermissions/>} />
          <Route path="/risk_types" element={<Risk_types/>} />
          <Route path="/terms_condition_types" element={<TermsConditionsTypes/>} />
          <Route path="/banks" element={<Banks/>} />
          <Route path="/rating_systems" element={<RatingSystems/>} />
          <Route path="/agencies" element={<Agencies/>} />
          <Route path="/subsidies" element={<Subsidies/>} />
          <Route path="/loan_Products" element={<LoanProducts/>} />
          <Route path="/model_swot" element={<ModelSwot/>} />
          <Route path="/model_pestel" element={<Model_PESTel/>} />
          <Route path="/model_vmg" element={<Model_VMG/>} />
          <Route path="/model_eic" element={<Model_EIC/>} />
          <Route path="/checklists" element={<Checklists/>} />
          <Route path="/decisions" element={<Decisions/>} />
          <Route path="/model_drafts" element={<Model_drafts/>} />
          <Route path="/reports" element={<Reports/>} />
          <Route path="/annexures_forms" element={<AnnexuresForms/>} />
          <Route path="/timeLines" element={<TimeLines/>} />
          <Route path="/plan_templates" element={<Plan_templates/>} />
          <Route path="/units_measurements" element={<UnitsMeasurements/>} />
          <Route path="/transactional_arragement_types" element={<TransactionalArragementTypes/>} />




    
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
