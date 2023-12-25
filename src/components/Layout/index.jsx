import { Outlet } from 'react-router-dom';

import { LayoutProvider, LayoutContext } from "./LayoutContext";

import Sidebar from "../Sidebar/";
import Account from "../Account";
import { NewTransactionModal } from "../../pages/List/components/Modals/NewTransactionModal";
import NewAccountModal from "../Account/modals/NewAccountModal";
import { EditAccountModal } from "../Account/modals/EditAccountModal";
import { NewTransferModal } from '../../pages/List/components/Modals/NewTransferModal';

import "./styles.css"

export function Layout () {
    return ( 
        <LayoutProvider>
            <LayoutContext.Consumer>
                {({ accountBeingEdited, isNewTransferModalOpen }) => (
                    <>                        
                        <div id='layout' className='bg-white dark:bg-primary-950'>
                            <div className="sidebar" id="left-sidebar">
                                <Sidebar />
                            </div>

                            <div className="content">
                                <Outlet />
                            </div>

                            <div className="sidebar" id="right-sidebar">
                                <Account />
                            </div>
                        </div>

                        <NewAccountModal />
                        <NewTransactionModal />
                        {isNewTransferModalOpen && <NewTransferModal />}
                        {accountBeingEdited && <EditAccountModal />}
                    </>
                )}
                
            </LayoutContext.Consumer>
        </LayoutProvider>
    );
}