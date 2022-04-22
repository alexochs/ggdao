import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x036b4972163A3d3297E94Ec8fB15BBD6a335887b");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Cool License",
        description: "This NFT will give you access to the GG DAO!",
        image: readFileSync("scripts/assets/cool.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();