import { create } from 'zustand';

type NewAppointmentState = {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

export const useNewAppointment = create<NewAppointmentState>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));
