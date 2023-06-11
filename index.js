

function run() {
  const action = process.argv
  const asset = process.argv[3];
  let assets = readJSONFile("./data/assets.json")

  let updatedAssets = [];
  switch (action) {
    case "index":
      const assetsView = index();
      break;
    case "create":
      updatedAssets = create(assets);
      writeToFile = true;
      break;
    case "show":
      const assetView = show( sset);
      break;
    case "destroy":
      updatedAssets = destroy(assets, asset);
    break;

    default:
      console.log("There was an error.");
  }
  if (writeToFile) {
    writeJSONFile("data/ssets.json", data);
  }
}

