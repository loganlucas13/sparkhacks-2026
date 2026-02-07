import { useGameStore } from './store';

export const events = [
    {
        id: 1,
        eventTitle: 'How do you want to begin your first semester at UIC?',
        choiceOneText:
            'Enroll in CS 111, I want to start programming immediately!',
        choiceOneOutcome: () => {
            const { updateTechSkills } = useGameStore.getState();
            updateTechSkills(5);
        },
        choiceTwoText:
            'CS classes can wait until next semester, I want to get some gen-eds done first.',
        choiceTwoOutcome: () => {},
        choiceThreeText: null,
        choiceThreeOutcome: null,
    },
];
