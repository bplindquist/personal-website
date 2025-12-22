import { Navigation } from "@/components/Navigation";
import { BlogPage } from "@/pages/BlogPage";
import { ProfilePage } from "@/pages/ProfilePage";
import { ExperiencePage } from "@/pages/ExperiencePage";
import { ProjectsPage } from "@/pages/ProjectsPage";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navigation />
      <main id="main-content" className="min-h-screen">
        <Outlet />
      </main>
      <ScrollRestoration />
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
        path: "/experience",
        element: <ExperiencePage />,
      },
      {
        path: "/projects",
        element: <ProjectsPage />,
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
