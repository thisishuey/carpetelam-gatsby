const React = require("react");
const { renderToString } = require("react-dom/server");
const JssProvider = require("react-jss/lib/JssProvider").default;

const getPageContext = require("./src/utils/getPageContext").default;

function replaceRenderer({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents
}) {
  const { sheetsRegistry } = getPageContext();

  const bodyHTML = renderToString(
    <JssProvider registry={sheetsRegistry}>{bodyComponent}</JssProvider>
  );

  replaceBodyHTMLString(bodyHTML);
  setHeadComponents([
    <style
      type="text/css"
      id="jss-server-side"
      key="jss-server-side"
      dangerouslySetInnerHTML={{ __html: sheetsRegistry.toString() }}
    />
  ]);
}

exports.replaceRenderer = replaceRenderer;
