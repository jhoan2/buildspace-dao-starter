import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x58014666A557e254201fF7403393ffa6194be268",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Reader",
        description: "This NFT will give you access to BookLoversDAO!",
        image: readFileSync("scripts/assets/onebook.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()