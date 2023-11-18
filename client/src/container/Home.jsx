import { Route, Routes } from "react-router-dom";
import {
  Sidebar,
  Navbar,
  Dashboard,
  Downbar,
  Wings,
  Assignments,
  AddNewFeed,
  AddNewAnnouncement,
} from "../components";
import ProtectedRoute from "../components/authentication/ProtectedRoutes";

import Announcements from "./Announcements";
import Feeds from "./Feeds";

export default function Home() {
  return (
    <>
      <div className="flex gap-3 w-full min-h-screen bg-bgTertiary text-white p-3 max-md:p-2">
        <div className="max-md:hidden">
          <Sidebar />
        </div>
        <div className="flex flex-col gap-3 w-full">
          <Navbar />
          <ProtectedRoute>
            <Routes>
              <Route path="/announcements" element={<Announcements />} />
              <Route path="/feeds" element={<Feeds />} />
              <Route path="/wings" element={<Wings />} />
              <Route path="/assignments" element={<Assignments />} />
              <Route path="/add-feeds" element={<AddNewFeed />} />
              <Route
                path="/add-announcement"
                element={<AddNewAnnouncement />}
              />
            </Routes>
          </ProtectedRoute>
        </div>
      </div>
      <div className="flex fixed bottom-2 px-2 w-full md:hidden">
        <Downbar />
      </div>
    </>
  );
}
