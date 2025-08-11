import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useMemo,
} from "react";
import { useAtomValue } from "jotai";
import { useLazyAtomValue } from "lib/atom-utils";
import { useDocumentVisibility } from "lib/react-hooks/useDocumentVisibility";

import { TokenType } from "core/types";
import { sync, syncTokenActivities } from "core/client";
import { createAccountTokenKey } from "core/common/tokens";

import { chainIdAtom, syncStatusAtom } from "app/atoms";
import { useAccounts } from "./account";
import { getReadableAddress } from "_dev/testAddress";
import * as repo from "core/repo";
import { ActivityType } from "core/types";

const ScopedChainIdContext = createContext<number | null>(null);

export function useChainId() {
  const globalChainId = useAtomValue(chainIdAtom);
  const scopedChainId = useContext(ScopedChainIdContext);

  return scopedChainId === null ? globalChainId : scopedChainId;
}

export const ChainIdProvider: FC<PropsWithChildren<{ chainId: number }>> = ({
  chainId,
  children,
}) => (
  <ScopedChainIdContext.Provider value={chainId}>
    {children}
  </ScopedChainIdContext.Provider>
);

export function useIsSyncing() {
  const { currentAccount } = useAccounts();
  const status = useSyncStatus();

  return status.includes(currentAccount.address);
}

export function useIsTokenActivitySyncing(
  chainId: number,
  accountAddress: string,
  tokenSlug?: string,
) {
  const status = useSyncStatus();
  const syncKey = useMemo(
    () =>
      tokenSlug &&
      createAccountTokenKey({ chainId, accountAddress, tokenSlug }),
    [chainId, accountAddress, tokenSlug],
  );

  return syncKey ? status.includes(syncKey) : false;
}

export function useSync(
  chainId: number,
  accountAddress: string,
  tokenType = TokenType.Asset,
) {
  const isHidden = useDocumentVisibility();

  useEffect(() => {
    let t: any;

    const syncAndDefer = async () => {
      const addr = getReadableAddress(accountAddress, chainId);
      sync(chainId, addr, tokenType);

      // Dev-only: if there are no activities for THIS WALLET address/chain,
      // seed a few read-only items so Recent Transactions renders instantly
      if (process.env.NODE_ENV === "development") {
        const existing = await repo.queryActivities({
          pending: false,
          accountAddress,
          chainId,
          limit: 1,
        });
        if (!existing || existing.length === 0) {
          const now = Date.now();
          await repo.activities.bulkPut([
            {
              id: `dev_${chainId}_1`,
              accountAddress,
              chainId,
              type: ActivityType.Transaction,
              pending: 0,
              timeAt: now - 60_000,
              txHash: `0xdevtx${chainId}1`,
              source: { type: "self" as const, kind: "swap" as const },
              txParams: {},
              txAction: { type: "TOKEN_TRANSFER", tokens: [] } as any,
              rawTx: "0x",
            } as any,
            {
              id: `dev_${chainId}_2`,
              accountAddress,
              chainId,
              type: ActivityType.Transaction,
              pending: 0,
              timeAt: now - 5 * 60_000,
              txHash: `0xdevtx${chainId}2`,
              source: { type: "self" as const, kind: "swap" as const },
              txParams: {},
              txAction: { type: "TOKEN_TRANSFER", tokens: [] } as any,
              rawTx: "0x",
            } as any,
            {
              id: `dev_${chainId}_3`,
              accountAddress,
              chainId,
              type: ActivityType.Transaction,
              pending: 0,
              timeAt: now - 15 * 60_000,
              txHash: `0xdevtx${chainId}3`,
              source: { type: "self" as const, kind: "swap" as const },
              txParams: {},
              txAction: { type: "TOKEN_TRANSFER", tokens: [] } as any,
              rawTx: "0x",
            } as any,
          ]);
        }
      }

      t = setTimeout(syncAndDefer, 3_000);
    };

    if (!isHidden) {
      t = setTimeout(syncAndDefer);
    }

    return () => clearTimeout(t);
  }, [isHidden, chainId, accountAddress, tokenType]);
}

export function useTokenActivitiesSync(
  chainId: number,
  accountAddress: string,
  tokenSlug?: string,
) {
  const isHidden = useDocumentVisibility();

  useEffect(() => {
    let t: any;

    const syncAndDefer = () => {
      const addr = getReadableAddress(accountAddress, chainId);
      if (tokenSlug) syncTokenActivities(chainId, addr, tokenSlug);

      t = setTimeout(syncAndDefer, 5_000);
    };

    if (!isHidden) {
      t = setTimeout(syncAndDefer, 500);
    }

    return () => clearTimeout(t);
  }, [chainId, accountAddress, tokenSlug, isHidden]);
}

function useSyncStatus() {
  return useLazyAtomValue(syncStatusAtom) ?? [];
}
