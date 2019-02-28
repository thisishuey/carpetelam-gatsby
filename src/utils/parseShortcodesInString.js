import {
  shortcodes,
  shortcodesBrackets,
  shortcodesSingleLine
} from "./shortcodes";

function parseShortcodesInString(stringToParse) {
  let sortedShortcodes = {};
  let parsedContent = [];

  function parseShortcodeAttributes(attributesString) {
    // TODO: This appears to be having issues parsing shortcode attributes e.g. [netlify-form title="Contact Form"]
    const attributePattern = /([\w-]+)\s*=\s*"([^"]*)"(?:\s|$)|([\w-]+)\s*=\s*'([^']*)'(?:\s|$)|([\w-]+)\s*=\s*([^\s'"]+)(?:\s|$)|"([^"]*)"(?:\s|$)|(\S+)(?:\s|$)/g;
    const attributesStringCleaned = attributesString
      .replace(/&#8221;/g, '"')
      .replace(/&#8243;/g, '"')
      .replace(/&#8217;/g, "'")
      .replace(/&#8242;/g, "'")
      .replace(/[\u00a0\u200b]/g, " ");
    let named = {};
    let numeric = [];
    let match;
    while ((match = attributePattern.exec(attributesStringCleaned))) {
      if (match[1]) {
        named[match[1].toLowerCase()] = match[2];
      } else if (match[3]) {
        named[match[3].toLowerCase()] = match[4];
      } else if (match[5]) {
        named[match[5].toLowerCase()] = match[6];
      } else if (match[7]) {
        numeric.push(match[7]);
      } else if (match[8]) {
        numeric.push(match[8]);
      }
    }
    return {
      named,
      numeric
    };
  }

  function returnShortcodeObject(
    name,
    indexStart,
    indexEnd,
    type,
    attributesNamed = {},
    attributesNumeric = {},
    content = ""
  ) {
    return {
      attributes: { named: attributesNamed, numeric: attributesNumeric },
      content,
      indices: { end: indexEnd, start: indexStart },
      name,
      type
    };
  }

  function findBracketShortcodes(stringToSearch) {
    const findShortcodeRegExp = new RegExp(
      "\\[(\\[?)(" +
        Object.keys(shortcodesBrackets).join("|") +
        ")(?![\\w-])([^\\]\\/]*(?:\\/(?!\\])[^\\]\\/]*)*?)(?:(\\/)\\]|\\](?:([^\\[]*(?:\\[(?!\\/\\2\\])[^\\[]*)*)(\\[\\/\\2\\]))?)(\\]?)",
      "g"
    );
    let match;
    let matches = [];
    while ((match = findShortcodeRegExp.exec(stringToSearch)) !== null) {
      if (match[1] === "[" && match[7] === "]") {
        continue;
      }
      let matchIndex = match.index;
      let matchLastIndex = findShortcodeRegExp.lastIndex - 1;
      if (match[1]) {
        matchIndex++;
      }
      if (match[7]) {
        matchLastIndex--;
      }
      const shortcodeAttributes = parseShortcodeAttributes(match[3]);
      matches.unshift(
        returnShortcodeObject(
          match[2],
          matchIndex,
          matchLastIndex,
          shortcodesBrackets[match[2]].type,
          shortcodeAttributes["named"],
          shortcodeAttributes["numeric"],
          match[5]
        )
      );
    }
    return matches;
  }

  function findSingleLineShortcodes(stringToSearch, shortcodesSingleLine) {
    let matches = [];
    for (const prop in shortcodesSingleLine) {
      if (shortcodesSingleLine.hasOwnProperty(prop)) {
        const shortcodeObject = shortcodesSingleLine[prop];
        for (const regexpString of shortcodeObject.regexp) {
          const findShortcodeRegExp = new RegExp(regexpString, "gi");
          let match;
          while ((match = findShortcodeRegExp.exec(stringToSearch)) !== null) {
            let matchIndex = match.index;
            let matchLastIndex = findShortcodeRegExp.lastIndex - 1;
            matches.unshift(
              returnShortcodeObject(
                prop,
                matchIndex,
                matchLastIndex,
                shortcodeObject.type,
                {
                  [shortcodeObject.attributesName]:
                    match[shortcodeObject.matchPosition]
                }
              )
            );
          }
        }
      }
    }
    return matches;
  }

  const foundBracketShortcodes = findBracketShortcodes(stringToParse);
  const foundSingleLineShortcodes = findSingleLineShortcodes(
    stringToParse,
    shortcodesSingleLine
  );
  const foundShortcodes = foundBracketShortcodes.concat(
    foundSingleLineShortcodes
  );

  function sortShortcodes(foundShortcodes) {
    foundShortcodes.map(item => {
      const { indices } = item;
      sortedShortcodes[indices.start] = item;
    });
  }

  sortShortcodes(foundShortcodes);

  const shortcodeListToReplace = Object.keys(sortedShortcodes);

  function returnContentObject(
    content = "",
    type = "string",
    name,
    attributesNamed = {},
    attributesNumeric = []
  ) {
    return {
      type,
      content,
      name,
      attributes: { named: attributesNamed, numeric: attributesNumeric }
    };
  }

  if (shortcodeListToReplace.length === 0) {
    parsedContent.push(returnContentObject(stringToParse));
  }

  shortcodeListToReplace.map((shortcode, i) => {
    const currentShortcode = sortedShortcodes[shortcode];
    const nextShortcode = sortedShortcodes[shortcodeListToReplace[i + 1]];
    const shortcodeFunction = shortcodes[currentShortcode.name].component;
    let replacement;
    if (currentShortcode.type === "react") {
      replacement = returnContentObject(
        currentShortcode.content,
        "component",
        currentShortcode.name,
        currentShortcode.attributes.named,
        currentShortcode.attributes.numeric
      );
    } else {
      const replacementString = shortcodeFunction(
        currentShortcode.attributes,
        currentShortcode.content
      );
      replacement = returnContentObject(replacementString);
    }
    if (i === 0) {
      parsedContent.push(
        returnContentObject(
          stringToParse.slice(0, currentShortcode.indices.start)
        )
      );
      parsedContent.push(replacement);
      if (shortcodeListToReplace.length === 1) {
        parsedContent.push(
          returnContentObject(
            stringToParse.slice(
              currentShortcode.indices.end + 1,
              stringToParse.length
            )
          )
        );
      } else {
        parsedContent.push(
          returnContentObject(
            stringToParse.slice(
              currentShortcode.indices.end + 1,
              nextShortcode.indices.start
            )
          )
        );
      }
    } else if (i === shortcodeListToReplace.length - 1) {
      parsedContent.push(replacement);
      parsedContent.push(
        returnContentObject(
          stringToParse.slice(
            currentShortcode.indices.end + 1,
            stringToParse.length
          )
        )
      );
    } else {
      parsedContent.push(replacement);
      parsedContent.push(
        returnContentObject(
          stringToParse.slice(
            currentShortcode.indices.end + 1,
            nextShortcode.indices.start
          )
        )
      );
    }
  });

  return parsedContent;
}

export default parseShortcodesInString;
