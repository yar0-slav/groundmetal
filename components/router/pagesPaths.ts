import { NextRouter } from "next/router";

const getCurrentPath = (router: NextRouter) => {
  return router.pathname.includes("zemne-prace") ? "zemne-prace" : "kovoobrabanie";
};
const getOppositePath = (router: NextRouter) => {
  return router.pathname.includes("zemne-prace") ? "kovoobrabanie" : "zemne-prace";
};
export { getCurrentPath, getOppositePath };
