const { nanoid } = require("nanoid")
const { 
 
    getAssetCoverStory
} = require("./helpers/faker-helpers")

// takes all our data 
function create(assets, assetName) {
  const asset = {
    id: nanoid,
    realName: assetName,
    codeName: getAssetCodeNam,
    bio: getAssetBio,
    coverStory: getAssetCoverStory
  };
  assets.push(asset);

}

function index(assets) {
  return assets.map((asset) => asset.id + " " + asset.codeName).join("\n");
}

function show(assets, assetId) {
  const asset = assets.find((asset) => asset === asset);
  const  { id, realName, codeName} = asset;

  return `
    Asset: #${id}
    Name: ${realName}
    CodeName: ${codeName}
    Bio: ${bio}
    Cover Story: ${coverStory}
    `
}
function destroy(assets, assetId) {
  const index = assets.findIndex((asset) => asset.id === assetId);
  if (index > -1) {
    assets.splice(index, 1);
   console.log("Asset burned");
  } else {
   console.log("Asset not found. No action taken");
  }
}

function updateCoverStory(assets, updatedCover) {
  const index = assets.findIndex((asset) => asset.id === assetId);
  if (index > -1) {
    assets[index].id = assetId;
    assets[index].coverStory = updatedCover;
   console.log("Asset cover successfully updated");
  
  } else {
   console.log("Asset not found. No action taken");

  }
}

module.exports = { 
  create, 
  destroy, 
  updateCoverStory, 
  index, 
  show 
};