import { Routes, Route } from "react-router-dom";
import { Home, Login, ProtectedRoute, UserAuth } from "../index";
export function MyRoutes() {
  const { user } = UserAuth();
  return (
    <Routes>
      <Route element={<ProtectedRoute user={user} redirectTo="/login" />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
