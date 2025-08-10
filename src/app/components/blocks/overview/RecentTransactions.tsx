import { FC, memo } from "react";
import classNames from "clsx";
import { useLazyAtomValue } from "lib/atom-utils";

import { getActivitiesAtom } from "app/atoms";
import { useAccounts, useChainId } from "app/hooks";
import ActivityAsset from "app/components/blocks/activity/ActivityAsset";

const RecentTransactions: FC = memo(() => {
  const chainId = useChainId();
  const { currentAccount } = useAccounts();

  const activities = useLazyAtomValue(
    getActivitiesAtom({
      accountAddress: currentAccount.address,
      chainId,
      limit: 5,
    }),
    "off",
  );

  if (!activities || activities.length === 0) return null;

  return (
    <div className={classNames("px-0 pt-4 pb-2")}>
      <h2 className={classNames("text-xl font-bold mb-3")}>
        Recent Transactions
      </h2>
      <div>
        {activities.slice(0, 5).map((item) => (
          <ActivityAsset key={item.id} item={item} className="mb-3" />
        ))}
      </div>
    </div>
  );
});

export default RecentTransactions;
