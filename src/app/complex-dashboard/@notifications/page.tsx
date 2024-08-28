'use client';

import Link from "next/link";
import Card from "../../../components/card";

export default function Notifications() {

    return <>
        <Card>

            Notifications
            <Link href="/complex-dashboard/archived">Archived</Link>
        </Card>

    </>
}