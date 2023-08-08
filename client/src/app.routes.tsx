import React, { FC, Suspense } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";

// ======= private route ======= //
const PrivateRoute: FC<{ element: any }> = ({ element: Element }) => {
    return Cookies.get('access_token') ? (
        <Suspense fallback={<div />}>
            <div><Element /></div>
        </Suspense>
    ) : (
        <Navigate to={"/app/auth/sign-in"} />
    );
};

// ======= public route ======= //
    const PublicRoute: FC<{ element: any }> = ({element: Element}) => (
        <Suspense fallback={<div/>}>
            <Element/>
        </Suspense>
    );

// ======= pages ======= //
const ChatPage = React.lazy(() => import("app/chat"));
const AuthPage = React.lazy(() => import("app/auth"));

const AppRoutes = () => {
    return (
        <Routes>
            <Route path={"/app/*"} element={<PrivateRoute element={ChatPage}/>}/>
            <Route path={"/app/auth/*"} element={<PublicRoute element={AuthPage}/>}/>            

            {/* DEFAULT */}
            <Route path='*' element={<Navigate to="/app"/>}/>
        </Routes>
    );
};

export default AppRoutes;