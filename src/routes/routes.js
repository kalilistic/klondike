import Default from "../components/Default/Default";
import Encounter from "../components/Encounter/Encounter";
import Settings from "../components/Settings/Settings";
import General from "../components/Settings/General/General";
import Numbers from "../components/Settings/Numbers/Numbers";
import Names from "../components/Settings/Names/Names";
import JobIcons from "../components/Settings/JobIcons/JobIcons";
import PercentBar from "../components/Settings/PercentBar/PercentBar";
import Advanced from "../components/Settings/Advanced/Advanced";
import PercentBarRole from "../components/Settings/PercentBarRole/PercentBarRole";

const routes = [
  {
    path: "/",
    component: Default
  },
  {
    path: "/encounter",
    component: Encounter
  },
  {
    path: "/settings",
    component: Settings,
    children: [
      {
        path: "general",
        component: General
      },
      {
        path: "names",
        component: Names
      },
      {
        path: "numbers",
        component: Numbers
      },
      {
        path: "job-icons",
        component: JobIcons
      },
      {
        path: "percent-bar",
        component: PercentBar
      },
      {
        path: "percent-bar-role",
        component: PercentBarRole
      },
      {
        path: "advanced",
        component: Advanced
      }
    ]
  },
  {
    path: "*",
    component: Default
  }
];

export default routes;
