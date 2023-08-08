
interface ModalProps {
    onModal: boolean;
    setOnModal: (state: boolean) => boolean | void;
    children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ onModal, setOnModal, children }) => {

    return (
        <div>
            <dialog id="my_modal_2" className={`modal ${onModal ? 'modal-open' : ''}`}>
                <div className="modal-box border-2 border-black">
                    <div className="flex justify-end">
                        <button type="button" onClick={() => setOnModal(false)} className="btn-close">x</button>
                    </div>
                    {children}
                </div>
                <div className="modal-backdrop">
                    <button type="button">close for click to the background</button>
                </div>
            </dialog>
        </div>
    );
};