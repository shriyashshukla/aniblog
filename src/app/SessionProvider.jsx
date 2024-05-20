"use client";

import React from 'react';
import { Session } from 'next-auth';
import { SessionProvider as Provider, SessionProvider } from 'next-auth/react';

export default function SessionProvider() {
    return (
        <Provider session={session}>
        <SessionProvider>
            {children}
        </SessionProvider>
        </Provider>
    );
}