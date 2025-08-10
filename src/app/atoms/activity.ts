import { atomFamily } from "jotai/utils";
import { dequal } from "dequal/lite";
import { atomWithRepoQuery } from "lib/atom-utils";

import * as repo from "core/repo";

export const getTokenActivityAtom = atomFamily(
  (params: repo.QueryTokenActivitiesParams) =>
    atomWithRepoQuery((query) =>
      query(() => repo.queryTokenActivities(params)),
    ),
  dequal,
);

export const getPendingActivitiesAtom = atomFamily((accountAddress: string) =>
  atomWithRepoQuery((query) =>
    query(() => repo.queryActivities({ accountAddress, pending: true })),
  ),
);

export const getActivitiesAtom = atomFamily(
  ({
    accountAddress,
    chainId,
    ...rest
  }: {
    accountAddress: string;
    chainId?: number;
    offset?: number;
    limit?: number;
  }) =>
    atomWithRepoQuery((query) =>
      query(() =>
        repo.queryActivities({ accountAddress, pending: false, chainId, ...rest }),
      ),
    ),
  dequal,
);

export const getAllPermissionsAtom = atomFamily(
  (params: { search?: string; offset?: number; limit?: number }) =>
    atomWithRepoQuery((query) => query(() => repo.queryPermissions(params))),
  dequal,
);
