import React from "react";


export default function DashboardLayout({
    children,
    users,
    revenue,
    notifications,
    login
}: {
    children: React.ReactNode;
    users: React.ReactNode;
    revenue: React.ReactNode;
    notifications: React.ReactNode;
    login: React.ReactNode
}) {

    const isLoggedIn = false;


    return isLoggedIn ?  (
        <>
            <div>{children}</div>
            <div>
                <div>
                    <div>{users}</div>
                    <div>{revenue}</div>
                </div>
                <div>{notifications}</div>
            </div>
        </>
    ) : (
        login
    )
}

