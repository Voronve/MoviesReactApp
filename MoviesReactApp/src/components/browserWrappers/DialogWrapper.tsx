import { Dialog, dialogProps } from '../Dialog/dialog';
import { BrowserRouter, Route, Routes} from "react-router-dom";

export default function DialogWrapper({ title, children }: dialogProps) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/*' element={<Dialog title={title} children={children}/>}/>
            </Routes>
        </BrowserRouter>
    );
}