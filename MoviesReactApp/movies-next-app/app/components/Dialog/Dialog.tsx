'use client'
import styles from './Dialog.module.css';
import { Portal } from "react-portal";
import Link from 'next/link';
import formQueryParamString from '@/helpers/formQueryParamsString';
import { useEffect, useState } from 'react';

export interface dialogProps {
    title: JSX.Element | string,
    children: JSX.Element,
    searchParams: { [key: string]: string }
}

/**
 * Custom dialog window
 */
export function Dialog( { title, children, searchParams }: dialogProps ) {
    const resultString = formQueryParamString(searchParams);
    let dialogContainer = '' as unknown as HTMLElement | null;
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);

        return () => {
          setIsMounted(false);
        };
    }, []);

      if (isMounted && typeof document !== 'undefined') {
        dialogContainer = document.getElementById('dialogContainer')
      } else {
        return null;
      }

    return (
        <Portal node={dialogContainer} >
            <div className={styles.dialogWindow}>
                <div className={styles.dialogHeader}>
                    {title}
                </div>
                {children}
                <Link href={`/${resultString}`}>X</Link>
            </div>
        </Portal>
    );
}