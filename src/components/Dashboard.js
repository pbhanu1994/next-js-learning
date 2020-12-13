import React from 'react';
import Link from "next/link";
import { GetData } from './GetData';

const DashboardComponent = () => {
    return (
        <>
            <h1>Dashboard Page</h1>
            <GetData />
            <Link href="/">Back</Link>
        </>
    );
}

export default DashboardComponent;