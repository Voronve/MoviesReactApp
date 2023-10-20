import './dialog.css';
import { Portal } from "react-portal";
import { Link, useSearchParams } from 'react-router-dom';
import formQueryParamString from '../../helpers/formQueryParamsString';
export interface dialogProps {
    title: JSX.Element | string,
    children: JSX.Element
}

/**
 * Custom dialog window
 */
export function Dialog( { title, children }: dialogProps ) {
    const [searchParams] = useSearchParams();
    const resultString = formQueryParamString(searchParams);

    return (
        <Portal node={document.getElementById('dialogContainer')} >
            <div className={`dialogWindow`}>
                <div className="dialogHeader">{title}</div>
                {children}
                <Link to={`/${resultString}`}>X</Link>
            </div>
        </Portal>
    );
}