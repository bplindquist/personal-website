import { Navigation } from "@/components/Navigation";
import { BlogPage } from "@/pages/BlogPage";
import { ProfilePage } from "@/pages/ProfilePage";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navigation />
      <main id="main-content" className="min-h-screen">
        <Outlet />
      </main>
    </>
  );
};

const ROUTER = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <ProfilePage />,
      },
      {
        path: "/blog",
        element: <BlogPage />,
      },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={ROUTER} />;
};
