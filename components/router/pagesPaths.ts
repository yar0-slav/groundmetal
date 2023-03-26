import { NextRouter } from "next/router";

const getCurrentPath = (router: NextRouter) => {
  return router.pathname.includes("bagrovanie") ? "bagrovanie" : "strojarina";
};
const getOppositePath = (router: NextRouter) => {
  return router.pathname.includes("bagrovanie") ? "strojarina" : "bagrovanie";
};
export { getCurrentPath, getOppositePath };
