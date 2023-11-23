import { useState } from "react";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Homepage from "./components/Homepage";
import ButtonLogin from "./components/ButtonLogin";
import ButtonExplore from "./components/ButtonExplore";
import SignInForm from "./components/SignInForm";
import SignUpForm from "./components/SignUp/SignUpForm";
import PublicEvents from "./components/PublicEventsSection/PublicEvents"
import ArtistsPage from "./components/ArtistsSection/ArtistsPage" 
import ArtistDashboard from "./components/ArtistDashboard/ArtistDashboard";
import EventPlannerDashboard from "./components/EventPlannerDashboard/EventPlannerDashboard"
import UserContext from "./components/UserContext";
import AdminDashboard from "./components/AdminDashboard";

const App = () => {
  const [role, setRole] = useState(localStorage.getItem("role") || '')

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage/>,
    },
    {
      path: "/artistsPage", 
      element: <ArtistsPage/>
    },
    {
      path: "/sign-in",
      element: <SignInForm/>,
    },
    {
      path: "/sign-up",
      element: <SignUpForm />
    },
    {
      path: "/admin-dashboard",
      element: <AdminDashboard/>
    },
    {
      path:"/artists/artists",
      element: <ArtistDashboard/>
    },
    {
      path:"/organizers/organizer",
      element: <EventPlannerDashboard/>
    },
    {
      path:"/events/events",
      element: <EventPlannerDashboard/>
    },
    {
      path: "/events",
      element: <PublicEvents/>
    }
  ])

  return (
    <UserContext.Provider value={{role, setRole}}>
        <RouterProvider router={router}>
          <ButtonLogin />
          <Homepage />
          <ButtonExplore/>
          <ArtistsPage/>
          <SignInForm/>
          <AdminDashboard/>
        </RouterProvider>
    </UserContext.Provider>
  );
}

export default App
