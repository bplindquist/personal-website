import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { AboutPage } from "@/pages/About";
import { HomePage } from "@/pages/Home";
import { ProjectsPage } from "@/pages/Projects";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/projects", element: <ProjectsPage /> },
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
