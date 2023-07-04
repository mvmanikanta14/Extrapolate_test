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

    

    
         {/* Protected Routes */}
        <Route element={<RequireAuth />}>
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="/sidebars" element={<Sidebars/>} />
          
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





      </Route>
    </Routes>
    </>
  );
}

export default App;
