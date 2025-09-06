// eslint-disable-next-line import/prefer-default-export
export const isDataValid = (value) => {
  return typeof value === "string" && value && value.trim().length > 0;
};
