import { FC } from "react";

import OverviewContent from "app/components/blocks/OverviewContent";
import NetworksList from "app/components/blocks/NetworksList";
import RecentTransactions from "app/components/blocks/overview/RecentTransactions";

const Overview: FC = () => {
  return (
    <>
      <NetworksList />
      <RecentTransactions />
      <OverviewContent />
    </>
  );
};

export default Overview;
