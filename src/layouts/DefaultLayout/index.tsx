import { Outlet } from "react-router-dom";
import { LayoutContainer } from "./styles";
import Cover from '../../assets/Cover.svg'

export function DefaultLayout() {
    return (
        <LayoutContainer>
            <img src={Cover} />
            <Outlet />
        </LayoutContainer>
    )
}