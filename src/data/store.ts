import { create } from 'zustand';

interface GameStore {
    techSkills: number;
    network: number;
    gpa: number;
    money: number;

    updateTechSkills: (value: number) => void;
    updateNetwork: (value: number) => void;
    updateGpa: (value: number) => void;
    updateMoney: (value: number) => void;
}

export const useGameStore = create<GameStore>((set) => ({
    techSkills: 0,
    network: 0,
    gpa: 0,
    money: 0,
    updateTechSkills: (value) =>
        set((state) => ({ techSkills: state.techSkills + value })),
    updateNetwork: (value) =>
        set((state) => ({ network: state.network + value })),
    updateGpa: (value) => set((state) => ({ gpa: state.gpa + value })),
    updateMoney: (value) => set((state) => ({ money: state.money + value })),
}));
