
import { Route, Routes } from "react-router-dom";
import {LoginPage} from "../auth";
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes";
import { PRivateRoute } from "./PRivateRoute";
import { PUblicRoute } from "./PUblicRoute";



export const AppRouter = () => {
  return (
      <>

          <Routes>

            <Route path="/login" element={
              <PUblicRoute>
                <LoginPage />
              </PUblicRoute>
            }

            />


            <Route path="/*" element={
              <PRivateRoute>
                <HeroesRoutes />
              </PRivateRoute>
            } />

            {/* <Route path="login" element={ <LoginPage /> } /> */}
            {/* <Route path="/*" element={ <HeroesRoutes /> } /> */}

        </Routes>
      </>
  )
}
