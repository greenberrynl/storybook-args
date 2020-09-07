import isType from "./utils/isType";
const defaultConfig = {};

const basicConfig = {
  children: {
    control: {
      type: null,
    },
  },
  styles: {
    control: {
      type: null,
    },
  },
};

const isColor = (string) => /\b[0-9A-F]{6}\b/gi.test(string);

const isRange = (array) => array.length === 2 && !array.some(isNaN);

const aliasType = (value) => {
  const types = {
    single: "radio",
    multi: "multi-select",
    "single-pick": "radio",
    "multi-pick": "multi-select",
  };

  return value in types ? types[value] : null;
};

const convertType = (value) => {
  let type = isType(value);

  type = (type === "string" && isColor(value) && "color") || type;
  type = (type === "array" && isRange(value) && "range") || type;

  const types = {
    array: "select",
    color: "color",
    range: "range",
  };

  return type in types ? types[type] : null;
};

const arg = ({ control, desc, name, options, required, settings, value }) => {
  name = name.toLowerCase();

  const config = {
    [name]: {
      defaultValue: value || "",
      type: {
        name: isRange(value) ? value[0] : typeof value,
        required: required || false,
      },
      control: {
        type:
          control || aliasType(control) || convertType(value) || typeof value,
        ...settings,
        options: value || options,
      },
      description: desc || null,
    },
  };

  return config;
};

const args = (array) => {
  const config = Object.assign(...array.map(arg));

  return {
    argTypes: {
      ...defaultConfig,
      ...config,
      ...basicConfig,
    },
  };
};

export { arg, args };
