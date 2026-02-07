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
    {
        id: 2,
        eventTitle: 'How do you go about your first semester of college?',
        choiceOneText:
            'Show up to all of your classes on time, only missing when necessary.',
        choiceOneOutcome: () => {
            const { updateGpa } = useGameStore.getState();
            updateGpa(4);
        },
        choiceTwoText:
            'College should be fun, I can skip some classes to meet people!',
        choiceTwoOutcome: () => {
            const { updateGpa, updateNetwork } = useGameStore.getState();
            updateGpa(3);
            updateNetwork(5);
        },
        choiceThreeText: null,
        choiceThreeOutcome: null,
    },
];
