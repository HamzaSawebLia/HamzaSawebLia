import React from "react";

import async from "../components/Async";

import {
  BookOpen,
  Briefcase,
  Calendar as CalendarIcon,
  CheckSquare,
  CreditCard,
  Grid,
  Heart,
  Layout,
  List,
  Map,
  Monitor,
  ShoppingCart,
  PieChart,
  Sliders,
  Users,
  Activity,
} from "react-feather";

import { FiMenu } from "react-icons/fi";

// All pages that rely on 3rd party components (other than Material-UI) are
// loaded asynchronously, to keep the initial JS bundle to a minimum size

// Guards
import AuthGuard from "../components/AuthGuard";

// Auth components
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import ResetPassword from "../pages/auth/ResetPassword";
import Page404 from "../pages/auth/Page404";
import Page500 from "../pages/auth/Page500";

// Components components
import Accordion from "../pages/components/Accordion";
import Alerts from "../pages/components/Alerts";
import Avatars from "../pages/components/Avatars";
import Badges from "../pages/components/Badges";
import Buttons from "../pages/components/Buttons";
import Cards from "../pages/components/Cards";
import Chips from "../pages/components/Chips";
import Dialogs from "../pages/components/Dialogs";
import Lists from "../pages/components/Lists";
import Menus from "../pages/components/Menus";
import Pagination from "../pages/components/Pagination";
import Progress from "../pages/components/Progress";
import Snackbars from "../pages/components/Snackbars";
import Tooltips from "../pages/components/Tooltips";

// Dashboards components
const Default = async(() => import("../pages/dashboards/Default"));
const Analytics = async(() => import("../pages/dashboards/Analytics"));
const SaaS = async(() => import("../pages/dashboards/SaaS"));

// Forms components
import SelectionCtrls from "../pages/forms/SelectionControls";
import Selects from "../pages/forms/Selects";
import TextFields from "../pages/forms/TextFields";
const Pickers = async(() => import("../pages/forms/Pickers"));
const Dropzone = async(() => import("../pages/forms/Dropzone"));
const Editors = async(() => import("../pages/forms/Editors"));
const Formik = async(() => import("../pages/forms/Formik"));

// Icons components
import MaterialIcons from "../pages/icons/MaterialIcons";
const FeatherIcons = async(() => import("../pages/icons/FeatherIcons"));

// Pages components
import Blank from "../pages/pages/Blank";
import InvoiceDetails from "../pages/pages/InvoiceDetails";
import InvoiceList from "../pages/pages/InvoiceList";
import Orders from "../pages/pages/Orders";
import Pricing from "../pages/pages/Pricing";
import Settings from "../pages/pages/Settings";
import Projects from "../pages/pages/Projects";
import Chat from "../pages/pages/Chat";
const Profile = async(() => import("../pages/pages/Profile"));
const Tasks = async(() => import("../pages/pages/Tasks"));
const Calendar = async(() => import("../pages/pages/Calendar"));

// Tables components
import SimpleTable from "../pages/tables/SimpleTable";
import AdvancedTable from "../pages/tables/AdvancedTable";

// Chart components
const Chartjs = async(() => import("../pages/charts/Chartjs"));

// Maps components
const GoogleMaps = async(() => import("../pages/maps/GoogleMaps"));
const VectorMaps = async(() => import("../pages/maps/VectorMaps"));

// Documentation
import Welcome from "../pages/docs/Welcome";
import GettingStarted from "../pages/docs/GettingStarted";
import EnvironmentVariables from "../pages/docs/EnvironmentVariables";
import Deployment from "../pages/docs/Deployment";
import Theming from "../pages/docs/Theming";
import StateManagement from "../pages/docs/StateManagement";
import APICalls from "../pages/docs/APICalls";
import ESLintAndPrettier from "../pages/docs/ESLintAndPrettier";
import Support from "../pages/docs/Support";
import Changelog from "../pages/docs/Changelog";

// Landing
import Landing from "../pages/presentation/Landing";

// Protected routes
import ProtectedPage from "../pages/protected/ProtectedPage";

import Index from "../pages/Saweblia/Index";

// Comptes imports
import Comptes from "../pages/Saweblia/Comptes/Comptes";
import CreerCompte from "../pages/Saweblia/Comptes/CreerCompte";
import EditClient from "../pages/Saweblia/Comptes/EditClient";
import EditArtisan from "../pages/Saweblia/Comptes/EditArtisan";
import CoordinateurEdit from "../pages/Saweblia/Comptes/CoordinateurEdit";
import EditFournisseur from "../pages/Saweblia/Comptes/EditFournisseur";
import ClientDisplay from "../pages/Saweblia/Comptes/ClientDisplay"
import ArtisanDisplay from "../pages/Saweblia/Comptes/ArtisanDisplay"

//Catalogues imports
import Services from "../pages/Saweblia/catalogue/Display/Services";
import Categories from "../pages/Saweblia/catalogue/Display/Categories"
import Prestations from "../pages/Saweblia/catalogue/Display/Prestations"
import Add_categorie from "../pages/Saweblia/catalogue/Add/Add_categorie"
import Add_service from "../pages/Saweblia/catalogue/Add/Add_service";
import Add_prestation from "../pages/Saweblia/catalogue/Add/Add_prestation"


//Catalogues Routes
const CatalogueRoutess = {
  id: "Catalogues",
  path: "/Catalogues",
  header: "Catalogues",
  icon: <FiMenu />,
  containsHome: true,
  children: [
    {
      path: "/Catalogues/services",
      name: "Services",
      component: Services,
    },
    {
      path: "/Catalogues/Categories",
      name: "Categories",
      component: Categories,
    },
    {
      path: "/Catalogues/Prestations",
      name: "Prestations",
      component: Prestations,
    },
    {
      path: "/Catalogues/Add_categorie",
      name: "Ajouter categorie",
      component: Add_categorie,
    },
    {
      path: "/Catalogues/Add_service",
      name: "Ajouter service",
      component: Add_service,
    },
    {
      path: "/Catalogues/Add_prestation",
      name: "Ajouter prestation",
      component: Add_prestation,
    }
  ]
}



// Comptes Routes
const CompteRoutes = {
  id: "Comptes",
  path: "/Comptes",
  header: "Comptes ",
  icon: <Users />,
  containsHome: true,

  children: [
    {
      path: "/Comptes/comptes",
      name: "Comptes",
      component: Comptes
    },
    {
      path: "/Comptes/creer_compte",
      name: "Creer Compte",
      component: CreerCompte,

    },
  ]
};

const Client_Display = {
  id: "ClientDisplay",
  path: "/Comptes/ClientDisplay",
  component: ClientDisplay,
  children: null,
};

const Artisan_Display = {
  id: "ArtisanDisplay",
  path: "/Comptes/ArtisanDisplay",
  component: ArtisanDisplay,
  children: null,
};

const Client_Edit = {
  id: "Edit_client",
  path: "/Comptes/Edit_client",
  component: EditClient,
  children: null,
};

const Fournisseur_Edit = {
  id: "Edit_fournisseur",
  path: "/Comptes/Edit_Fournisseur",
  component: EditFournisseur,
  children: null,
};

const Coordinateur_Edit = {
  id: "Edit_coordinateur",
  path: "/Comptes/Edit_coordinateur",
  component: CoordinateurEdit,
  children: null,
};

const Artisan_Edit = {
  id: "Edit_artisan",
  path: "/Comptes/Edit_artisan",
  component: EditArtisan,
  children: null,
};

const dashboardsRoutes = {
  id: "Dashboard",
  path: "/dashboard",
  header: "Pages",
  icon: <Sliders />,
  containsHome: true,
  children: [
    {
      path: "/dashboard/default",
      name: "Default",
      component: Default,
    },
    {
      path: "/dashboard/analytics",
      name: "Analytics",
      component: Analytics,
    },
    {
      path: "/dashboard/saas",
      name: "SaaS",
      component: SaaS,
    },
  ],
  component: null,
};

const pagesRoutes = {
  id: "Pages",
  path: "/pages",
  icon: <Layout />,
  children: [
    {
      path: "/pages/profile",
      name: "Profile",
      component: Profile,
    },
    {
      path: "/pages/settings",
      name: "Settings",
      component: Settings,
    },
    {
      path: "/pages/pricing",
      name: "Pricing",
      component: Pricing,
    },
    {
      path: "/pages/chat",
      name: "Chat",
      component: Chat,
    },
    {
      path: "/pages/blank",
      name: "Blank Page",
      component: Blank,
    },
  ],
  component: null,
};

const projectsRoutes = {
  id: "Projects",
  path: "/projects",
  icon: <Briefcase />,
  badge: "8",
  component: Projects,
  children: null,
};

const invoiceRoutes = {
  id: "Invoices",
  path: "/invoices",
  icon: <CreditCard />,
  children: [
    {
      path: "/invoices",
      name: "List",
      component: InvoiceList,
    },
    {
      path: "/invoices/detail",
      name: "Details",
      component: InvoiceDetails,
    },
  ],
  component: null,
};

const orderRoutes = {
  id: "Orders",
  path: "/orders",
  icon: <ShoppingCart />,
  component: Orders,
  children: null,
};

const tasksRoutes = {
  id: "Tasks",
  path: "/tasks",
  icon: <CheckSquare />,
  badge: "17",
  component: Tasks,
  children: null,
};

const calendarRoutes = {
  id: "Calendar",
  path: "/calendar",
  icon: <CalendarIcon />,
  component: Calendar,
  children: null,
};

const authRoutes = {
  id: "Auth",
  path: "/auth",
  icon: <Users />,
  children: [
    {
      path: "/auth/sign-in",
      name: "Sign In",
      component: SignIn,
    },
    {
      path: "/auth/sign-up",
      name: "Sign Up",
      component: SignUp,
    },
    {
      path: "/auth/reset-password",
      name: "Reset Password",
      component: ResetPassword,
    },
    {
      path: "/auth/404",
      name: "404 Page",
      component: Page404,
    },
    {
      path: "/auth/500",
      name: "500 Page",
      component: Page500,
    },
  ],
  component: null,
};

const componentsRoutes = {
  id: "Components",
  path: "/components",
  header: "Elements",
  icon: <Grid />,
  children: [
    {
      path: "/components/alerts",
      name: "Alerts",
      component: Alerts,
    },
    {
      path: "/components/accordion",
      name: "Accordion",
      component: Accordion,
    },
    {
      path: "/components/avatars",
      name: "Avatars",
      component: Avatars,
    },
    {
      path: "/components/badges",
      name: "Badges",
      component: Badges,
    },
    {
      path: "/components/buttons",
      name: "Buttons",
      component: Buttons,
    },
    {
      path: "/components/cards",
      name: "Cards",
      component: Cards,
    },
    {
      path: "/components/chips",
      name: "Chips",
      component: Chips,
    },
    {
      path: "/components/dialogs",
      name: "Dialogs",
      component: Dialogs,
    },
    {
      path: "/components/lists",
      name: "Lists",
      component: Lists,
    },
    {
      path: "/components/menus",
      name: "Menus",
      component: Menus,
    },
    {
      path: "/components/pagination",
      name: "Pagination",
      component: Pagination,
    },
    {
      path: "/components/progress",
      name: "Progress",
      component: Progress,
    },
    {
      path: "/components/snackbars",
      name: "Snackbars",
      component: Snackbars,
    },
    {
      path: "/components/tooltips",
      name: "Tooltips",
      component: Tooltips,
    },
  ],
  component: null,
};

const formsRoutes = {
  id: "Forms",
  path: "/forms",
  icon: <CheckSquare />,
  children: [
    {
      path: "/forms/pickers",
      name: "Pickers",
      component: Pickers,
    },
    {
      path: "/forms/selection-controls",
      name: "Selection Controls",
      component: SelectionCtrls,
    },
    {
      path: "/forms/selects",
      name: "Selects",
      component: Selects,
    },
    {
      path: "/forms/text-fields",
      name: "Text Fields",
      component: TextFields,
    },
    {
      path: "/forms/dropzone",
      name: "Dropzone",
      component: Dropzone,
    },
    {
      path: "/forms/editors",
      name: "Editors",
      component: Editors,
    },
    {
      path: "/forms/formik",
      name: "Formik",
      component: Formik,
    },
  ],
  component: null,
};

const tablesRoutes = {
  id: "Tables",
  path: "/tables",
  icon: <List />,
  children: [
    {
      path: "/tables/simple-table",
      name: "Simple Table",
      component: SimpleTable,
    },
    {
      path: "/tables/advanced-table",
      name: "Advanced Table",
      component: AdvancedTable,
    },
  ],
  component: null,
};

const iconsRoutes = {
  id: "Icons",
  path: "/icons",
  icon: <Heart />,
  children: [
    {
      path: "/icons/material-icons",
      name: "Material Icons",
      component: MaterialIcons,
    },
    {
      path: "/icons/feather-icons",
      name: "Feather Icons",
      component: FeatherIcons,
    },
  ],
  component: null,
};

const chartRoutes = {
  id: "Charts",
  path: "/charts",
  icon: <PieChart />,
  component: Chartjs,
  children: null,
};

const mapsRoutes = {
  id: "Maps",
  path: "/maps",
  icon: <Map />,
  children: [
    {
      path: "/maps/google-maps",
      name: "Google Maps",
      component: GoogleMaps,
    },
    {
      path: "/maps/vector-maps",
      name: "Vector Maps",
      component: VectorMaps,
    },
  ],
  component: null,
};

const landingRoutes = {
  id: "Landing Page",
  path: "/",
  header: "Docs",
  icon: <Monitor />,
  component: Landing,
  children: null,
};

const documentationRoutes = {
  id: "Documentation",
  path: "/documentation",
  header: "Material App",
  icon: <BookOpen />,
  children: [
    {
      path: "/documentation/welcome",
      name: "Welcome",
      component: Welcome,
    },
    {
      path: "/documentation/getting-started",
      name: "Getting Started",
      component: GettingStarted,
    },
    {
      path: "/documentation/environment-variables",
      name: "Environment Variables",
      component: EnvironmentVariables,
    },
    {
      path: "/documentation/deployment",
      name: "Deployment",
      component: Deployment,
    },
    {
      path: "/documentation/theming",
      name: "Theming",
      component: Theming,
    },
    {
      path: "/documentation/state-management",
      name: "State Management",
      component: StateManagement,
    },
    {
      path: "/documentation/api-calls",
      name: "API Calls",
      component: APICalls,
    },
    {
      path: "/documentation/eslint-and-prettier",
      name: "ESLint & Prettier",
      component: ESLintAndPrettier,
    },
    {
      path: "/documentation/support",
      name: "Support",
      component: Support,
    },
  ],
  component: null,
};

const changelogRoutes = {
  id: "Changelog",
  path: "/changelog",
  badge: "v2.0.3",
  icon: <List />,
  component: Changelog,
  children: null,
};

// This route is only visible while signed in
const protectedPageRoutes = {
  id: "Private",
  path: "/private",
  component: ProtectedPage,
  children: null,
  guard: AuthGuard,
};

// Routes using the Dashboard layout
export const dashboardLayoutRoutes = [
  CatalogueRoutess,
  Coordinateur_Edit,
  Fournisseur_Edit,
  Artisan_Edit,
  Artisan_Display,
  Client_Edit,
  Client_Display,
  CompteRoutes,
  dashboardsRoutes,
  pagesRoutes,
  projectsRoutes,
  orderRoutes,
  invoiceRoutes,
  tasksRoutes,
  calendarRoutes,
  componentsRoutes,
  chartRoutes,
  formsRoutes,
  tablesRoutes,
  iconsRoutes,
  mapsRoutes,
  documentationRoutes,
  changelogRoutes,
];

// Routes using the Auth layout
export const authLayoutRoutes = [authRoutes];

// Routes using the Presentation layout
export const presentationLayoutRoutes = [landingRoutes];

// Routes that are protected
export const protectedRoutes = [protectedPageRoutes];

// Routes visible in the sidebar
export const sidebarRoutes = [
  CatalogueRoutess,
  Coordinateur_Edit,
  Fournisseur_Edit,
  Artisan_Edit,
  Artisan_Display,
  Client_Edit,
  Client_Display,
  CompteRoutes,
  dashboardsRoutes,
  pagesRoutes,
  projectsRoutes,
  orderRoutes,
  invoiceRoutes,
  tasksRoutes,
  calendarRoutes,
  authRoutes,
  componentsRoutes,
  chartRoutes,
  formsRoutes,
  tablesRoutes,
  iconsRoutes,
  mapsRoutes,
  documentationRoutes,
  changelogRoutes,
];
