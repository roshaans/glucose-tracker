import { lazy } from "react";

function importView(...args) {
  const path = args
    .map((arg) => {
      if (Array.isArray(arg)) {
        const nestPath = new Array(arg[1])
          .fill(0)
          .map(() => arg[0])
          .join("/");
        arg = nestPath;
      }
      return arg;
    })
    .join("/");
  return import(`../views/${path}.js`);
}

export const mainRoutes = [
  {
    path: `/dashboard`,
    component: lazy(() => importView(["Dashboard", 2])),
  },
  {
    path: `/tasks`,
    component: lazy(() => importView(["Tasks", 2])),
  },
  {
    path: `/beds`,
    component: lazy(() => importView(["Beds", 2])),
  },
];
