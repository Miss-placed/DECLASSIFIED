import { useContext } from "react";
import { DeclassifiedContext } from "../../contexts/DeclassifiedContext/declassifiedContextProvider";
import { DrawerMenu } from "../DrawerMenu";
import Header from "../Header";
import { MapControls } from "../MapControls";
import { AreaSwitcherContainer } from "../MapControls/AreaSwitcherContainer";
import { LayerToggleButtons } from "../MapControls/LayerToggleButtons";
import { UserInterface } from "../UserInterface";

export const ApplicationContent = () => {
    const { drawerState } = useContext(DeclassifiedContext);
    return (
        <>
            <Header />
            <MapControls />
            <AreaSwitcherContainer />
            <LayerToggleButtons />
            <UserInterface />
            <DrawerMenu>
                {drawerState.content}
            </DrawerMenu>
        </>
    );
};
