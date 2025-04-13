/* eslint-disable @typescript-eslint/no-explicit-any */
export const buildQueryString = (params: Record<string, any>) => {
  const query = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (
      value !== undefined &&
      value !== null &&
      value !== "" &&
      !(typeof value === "number" && isNaN(value))
    ) {
      query.append(key, value.toString());
    }
  });

  return `?${query.toString()}`;
};
