import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/home/Home";
import MarketPlace from "./views/marketplace/MarketPlace";
import DataTables from "./views/datatables/DataTables";
import Profile from "./views/profile/Profile";
import Signin from "./views/signin/Signin";
import Layout from "./components/layout/Layout";
import LayoutNone from "./components/layout/LayoutNone";

// const routeArr = [
//   {
//     path: "/",
//     element: <Home />,
//     background: "red",
//   },
//   {
//     path: "/marketplace",
//     element: <MarketPlace />,
//   },
//   {
//     path: "/datatables",
//     element: <DataTables />,
//   },
//   {
//     path: "/profile",
//     element: <Profile />,
//   },
//   //   {
//   //     path: "/signin",
//   //     element: <Signin />,
//   //   },
// ];

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
        {/* 각각의 페이지에 layout을 감싸주지 않고, ROUTERS에서 감싸주기 */}
        {/* {routeArr.map((item, index) => (
            <Route key={index} path={item.path} element={item.element} />
          ))} */}
        {/* </Route> */}
        {/* 하나씩 만들어주어 관리 용이성을 높임 */}

        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/" element={<Layout />}>
          <Route path="/marketplace" element={<MarketPlace />} />
        </Route>
        <Route path="/" element={<Layout />}>
          <Route path="/datatables" element={<DataTables />} />
        </Route>
        <Route path="/" element={<Layout />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/" element={<LayoutNone />}>
          <Route path="/signin" element={<Signin />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
