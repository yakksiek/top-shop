import { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar';

interface SidebarModalProps {
    content: ReactNode;
    closeModal: () => void;
    isOpen: boolean;
    slideFrom?: 'right' | 'left';
}

function SidebarModal({ content, closeModal, isOpen, slideFrom = 'right' }: SidebarModalProps) {
    const portalRoot = document.getElementById('modal-root');

    if (!portalRoot) {
        throw new Error('The portal root element does not exist in the DOM.');
    }

    return ReactDOM.createPortal(
        <Sidebar toggleSidebarNavigation={closeModal} isOpen={isOpen} children={content} slideFrom={slideFrom} />,
        portalRoot,
    );
}

export default SidebarModal;
