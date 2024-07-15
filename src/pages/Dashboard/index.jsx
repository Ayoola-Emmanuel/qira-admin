import React from "react";
import CardOverview from "./components/CardOverview";
import PropertyView from "./components/PropertyView";
import DashboardLayout from "../../components/DashboardLayout";
import DataTable from "./components/DataTable";
import Pagination from "../../components/Pagination";

const Dashboard = () => {
  return (
    <DashboardLayout header="Dashboard">
      <CardOverview />
      <PropertyView />
      <DataTable />
      <Pagination />
    </DashboardLayout>
  );
};

export default Dashboard;
