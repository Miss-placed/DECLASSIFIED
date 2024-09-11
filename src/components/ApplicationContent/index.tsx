import { useContext } from "react";
import { DeclassifiedContext } from "../../contexts/DeclassifiedContext/declassifiedContextProvider";
import { DrawerMenu } from "../DrawerMenu";
import Header from "../Header";
import { MapControls } from "../MapControls";
import { UserInterface } from "../UserInterface";

export const ApplicationContent = () => {
    const { drawerState } = useContext(DeclassifiedContext);
    return (
        <>
            <Header />
            <MapControls />
            <UserInterface />
            <DrawerMenu>
                {drawerState.content}
            </DrawerMenu>
        </>
    );
};
