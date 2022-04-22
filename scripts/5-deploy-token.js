import { AddressZero } from "@ethersproject/constants";
import sdk from "./1-initialize-sdk.js";

(async () => {
  try {
    // Deploy a standard ERC-20 contract.
    const tokenAddress = await sdk.deployer.deployToken({
      // What's your token's name? Ex. "Ethereum"
      name: "GGCoin",
      // What's your token's symbol? Ex. "ETH"
      symbol: "GGC",
      // This will be in case we want to sell our token,
      // because we don't, we set it to AddressZero again.
      primary_sale_recipient: AddressZero, // what does this do exactly??
    });
    console.log(
      "✅ Successfully deployed token module, address:",
      tokenAddress,
    );
  } catch (error) {
    console.error("failed to deploy token module", error);
  }
})();