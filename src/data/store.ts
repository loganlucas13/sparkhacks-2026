import { create } from 'zustand';

interface GameStore {
    techSkills: number;
    network: number;
    gpa: number;
    money: number;
    branch: number;
    careerPath: string;
    gpaHasDropped: boolean;

    updateTechSkills: (value: number) => void;
    updateNetwork: (value: number) => void;
    updateGpa: (value: number) => void;
    updateMoney: (value: number) => void;
    updateBranch: (value: number) => void;
    updateCareerPath: (value: string) => void;
    updateGpaHasDropped: (value: boolean) => void;
}

export const useGameStore = create<GameStore>((set) => ({
    techSkills: 0,
    network: 0,
    gpa: 0,
    money: 0,
    branch: 0,
    careerPath: '',
    gpaHasDropped: false,
    updateTechSkills: (value) =>
        set((state) => ({ techSkills: state.techSkills + value })),
    updateNetwork: (value) =>
        set((state) => ({ network: state.network + value })),
    updateGpa: (value) =>
        set((state) => ({
            gpa: Math.min(state.gpaHasDropped ? 3.9 : 4, state.gpa + value),
        })),
    updateMoney: (value) => set((state) => ({ money: state.money + value })),
    updateBranch: (value) => set({ branch: value }),
    updateCareerPath: (value) => set({ careerPath: value }),
    updateGpaHasDropped: (value) => set({ gpaHasDropped: value }),
}));
