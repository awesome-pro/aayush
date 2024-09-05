import { create } from 'zustand';

type OpenAppointmentState = {
    id?: string;
    isOpen: boolean;
    onOpen: (id: string) => void;
    onClose: () => void;
}

export const useOpenAppointment = create<OpenAppointmentState>((set) => ({
    id: undefined,
    isOpen: false,
    onOpen: (id: string) => set({ isOpen: true, id}),
    onClose: () => set({ isOpen: false, id: undefined }),
}));
