// Minimal document polyfill for Node.js environment
// Only includes methods actually used in this project

const camelToKebabCase = (str) => str.replace(/([A-Z])/g, "-$1").toLowerCase();
const filterKeys = (obj) => Object.keys(obj).filter((key) => key !== "toString");

const tagsWithSelfEnclosing = ["img", "source"];
const objectProperties = {
  dataset: {
    toString: function () {
      const filteredKeys = filterKeys(this);
      if (filteredKeys.length === 0) return "";

      return ' ' + filteredKeys
        .map((key) => `${camelToKebabCase(key)}=${this[key]}`)
        .join(" ");
    },
  },
  style: {
    toString: function () {
      const filteredKeys = filterKeys(this);
      if (filteredKeys.length === 0) return "";

      return ' ' + filteredKeys
        .map((key) => `${camelToKebabCase(key)}:${this[key]}`)
        .join(";");
    },
  },
};

const objectPropertiesKeys = Object.keys(objectProperties);
const genericElementAttributes = {
  target: "",
  href: "",
  type: "",
  loading: "",
  decoding: "",
  alt: "",
  srcset: "",
  src: "",
  ...objectProperties,
};

const isObjectEmpty = (obj) =>
  typeof obj === "object" && Object.keys(obj).length === 0;

if (typeof global !== "undefined" && !global.document) {
  // Create a minimal document object
  global.document = {
    // createElement - creates a minimal element object
    createElement: function (tag) {
      return {
        cached: null,
        tagName: tag.toLowerCase(),
        synthetic: true,
        className: "",
        innerText: "",
        ...genericElementAttributes,
        append: function (...children) {
          const childrenToString = children
            .map((child) => child.toString())
            .join("");

          const element = this.toString();
          const endTag = `</${this.tagName}>`;

          this.cached =
            element.slice(0, -endTag.length) + childrenToString + endTag;
          return this.cached;
        },
        replaceChildren: function (...children) {
          const childrenToString = children
            .map((child) => child.toString())
            .join("");
          const element = `<${this.tagName}>${childrenToString}</${this.tagName}>`;
          this.cached = element;
          return this.cached;
        },
        toString: function () {
          if (this.cached) {
            return this.cached;
          }

          let element = `<${this.tagName}`;
          if (this.className) {
            element += ` class=${this.className}`;
          }
          Object.keys(genericElementAttributes).forEach((key) => {
            if (objectPropertiesKeys.includes(key)) {
              if (isObjectEmpty(this[key])) return;
              element += this[key].toString();
            } else if (this[key]) {
              element += ` ${key}=${this[key]}`;
            }
          });
          if (tagsWithSelfEnclosing.includes(this.tagName)) {
            element += " />";
            this.cached = element;
            return this.cached;
          }

          element += ">";
          if (this.innerText) {
            element += this.innerText;
          }

          element += `</${this.tagName}>`;
          this.cached = element;
          return this.cached;
        },
      };
    },

    // createDocumentFragment - creates a minimal fragment
    createDocumentFragment: function () {
      return {
        cached: null,
        append: function (...children) {
          const childrenToString = children
            .map((child) => child.toString())
            .join("");
          const element = this.toString();

          this.cached = element + childrenToString;
          return this.cached;
        },
        toString: function () {
          if (this.cached) {
            return this.cached;
          }
          this.cached = "";
          return this.cached;
        },
      };
    },

    // getElementsByTagName - returns empty array
    getElementsByTagName: function (tag) {
      return [this.createElement(tag)];
    },
  };
}
