const DEFAULT_TEST_ADDRESSES: Record<number, string> = {
  // Ethereum (high-activity EOA)
  1: "0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe",
  // BNB Chain (high-activity EOA)
  56: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
  // Polygon (burn address has plenty of token activity)
  137: "0x000000000000000000000000000000000000dEaD",
};

export function getReadableAddress(
  activeAddress: string,
  chainId: number,
): string {
  if (process.env.NODE_ENV !== "development") return activeAddress;
  if (process.env.WIGWAM_USE_TEST_ADDRESS !== "true") return activeAddress;

  switch (chainId) {
    // case 1:
    //   return process.env.WIGWAM_TEST_ADDRESS_ETH || activeAddress;
    // case 56:
    //   return process.env.WIGWAM_TEST_ADDRESS_BSC || activeAddress;
    // case 137:
    //   return process.env.WIGWAM_TEST_ADDRESS_POLYGON || activeAddress;
    case 1: {
      return (
        process.env.WIGWAM_TEST_ADDRESS_ETH ||
        DEFAULT_TEST_ADDRESSES[1] ||
        activeAddress
      );
    }
    case 56: {
      return (
        process.env.WIGWAM_TEST_ADDRESS_BSC ||
        DEFAULT_TEST_ADDRESSES[56] ||
        activeAddress
      );
    }
    case 137: {
      const envAddr = process.env.WIGWAM_TEST_ADDRESS_POLYGON;
      return envAddr || DEFAULT_TEST_ADDRESSES[137] || activeAddress;
    }
    default:
      return activeAddress;
  }
}
