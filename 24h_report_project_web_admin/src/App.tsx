import { Admin, CustomRoutes, Resource } from "react-admin";
import { Route } from "react-router";
import jsonServerProvider from "ra-data-json-server";
import { useTranslation } from "react-i18next";
import { lightTheme } from "./layout/themes";
import { Dashboard } from "./pages/dashboard";
import { Layout } from "./layout";
import authProvider from "./auth/authProvider";
import Configuration from "./pages/configuration/configuration";
//translate

//get the fake API
const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => {
  const translate = useTranslation();
  return (
    <Admin
    title=""
    theme={lightTheme}
      dataProvider={dataProvider}
      dashboard={Dashboard}
      layout={Layout}
      authProvider={authProvider}
      disableTelemetry
      
  >
    <CustomRoutes>
        <Route path="/configuration" element={<Configuration />}/>
      <Route path="/segments" />
    </CustomRoutes>
      <Resource name="Reports" />
      <Resource name="Posts" />
      <Resource name="Users"  />
      <Resource name="Media"  />
      <Resource name="Reviews" />
    </Admin>
  );
};

export default App;
