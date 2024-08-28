

export default function DashboardLayout({
    children,
    users,
    revenue,
    notifications
}: {
    children: React.ReactNode;
    users: React.ReactNode;
    revenue: React.ReactNode;
    notifications: React.ReactNode;
}) {




    return (
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
    )
}

