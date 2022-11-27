import {
  Dashboard,
  PeopleAlt,
  ImportContacts,
} from "@material-ui/icons";

export const mainNavigation = [
  {
    name: "Dashboard",
    icon: Dashboard,
    url: `/dashboard`,
  },
  {
    name: "Tasks",
    icon: ImportContacts,
    url: `/tasks`,
  },
  {
    name: "Beds",
    icon: PeopleAlt,
    url: `/beds`,
  },
];
