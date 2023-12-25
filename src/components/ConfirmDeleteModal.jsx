// import cx from "classnames"
import propTypes from "prop-types"

import { Modal } from "./Modal";
import { Button } from "./Button";

export function ConfirmDeleteModal ({
    onClose,
    title,
    onConfirm,
    isLoading,
    description
}) {

    return ( 
        <Modal open onClose={onClose} >
            <div className="flex flex-col gap-8">
                <div className="text-center flex flex-col gap-3">
                    <h4 className="font-bold text-gray-900 dark:text-gray-50 text-xl">{title}</h4>
                    <p className="text-gray-500">{description}</p>
                </div>

                <div className="flex flex-col gap-4">
                    <Button 
                        danger
                        isLoading={isLoading} 
                        handleClick={onConfirm}
                    >
                        Excluir
                    </Button>
                    <Button variant="secondary" handleClick={onClose}>Cancelar</Button>
                </div>
            </div>
        </Modal>
     );
}

ConfirmDeleteModal.propTypes = {
    title: propTypes.string,
    onClose: propTypes.func,
    description: propTypes.string,
    onConfirm: propTypes.func,
    isLoading: propTypes.bool
}