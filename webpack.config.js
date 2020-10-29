const moduleToCdn = require("@talend/module-to-cdn");
// import cdn from "@talend/scripts-config-cdn";

function getURL(info) {
  return `https://talend-cdn.surge.sh/${info.name}/${info.version}${info.path}`;
}

// moduleToCdn.configure(getURL);

module.export = {};
