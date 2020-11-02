const moduleToCdn = require("@talend/module-to-cdn");
// import cdn from "@talend/scripts-config-cdn";

function getURL(info) {
  return `https://jmfrancois.github.io/cdn-assets/dist/${info.name}/${info.version}${info.path}`;
}

moduleToCdn.configure(getURL);

module.export = {};
