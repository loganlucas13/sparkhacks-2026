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
    {
        id: 3,
        eventTitle: 'You are now in your second semester of school. How exciting! How do you spend your time outside of class?.',
        choiceOneText:
            ' Join a CS club and work on a personal project to gain more skills',
        choiceOneOutcome: () => {
            const { updateTechSkills } = useGameStore.getState();
            updateTechSkills(2);
        },
        choiceTwoText:
            'Work a part-time job.',
        choiceTwoOutcome: () => {
            const { updateTechSkills, updateMoney } = useGameStore.getState();
            updateTechSkills(-2)
            updateMoney(2000);
        },
        choiceThreeText: null,
        choiceThreeOutcome: null,
    },
    {
        id: 4,
        eventTitle: 'It’s the middle of the semester. You are having a tougher time than last semester. How do you prepare for midterms?',
        choiceOneText:
            'Study hard and visit office hours',
        choiceOneOutcome: () => {
            const { updateTechSkills,updateGpa } = useGameStore.getState();
            updateTechSkills(2);
            updateGpa(0.2)
        },
        choiceTwoText:
            'Skip studying and focus on social events and learning skills outside of class',
        choiceTwoOutcome: () => {
            const { updateTechSkills, updateGpa } = useGameStore.getState();
            updateTechSkills(2)
            updateGpa(-0.2);
        },
        choiceThreeText: null,
        choiceThreeOutcome: null,
    },
    {
        id: 5,
        eventTitle: 'Your freshman year is over… it’s summertime! How do you spend your summer?',
        choiceOneText:
            'Enroll in summer classes at UIC',
        choiceOneOutcome: () => {
            const { updateMoney,updateTechSkills } = useGameStore.getState();
            updateMoney(-3000);
            updateTechSkills(3)
        },
        choiceTwoText:
            'Work a full-time job to earn some money',
        choiceTwoOutcome: () => {
            const { updateMoney } = useGameStore.getState();
            updateMoney(3000)
        },
        choiceThreeText: null,
        choiceThreeOutcome: null,
    },
    {
        id: 6,
        eventTitle: 'It is now your sophomore year. You are getting used to college, and you can now start to branch into different actions on top of your coursework. What do you focus on this year?',
        choiceOneText:
            ' I will continue focusing on my academics and excelling in my coursework.',
        choiceOneOutcome: () => {
            const { updateGpa,updateTechSkills,updateBranch } = useGameStore.getState();
            updateGpa(0.2);
            updateTechSkills(3)
            updateBranch(1)
        },
        choiceTwoText:
            ' I will focus on gaining technical skills outside of class through personal projects',
        choiceTwoOutcome: () => {
            const { updateTechSkills,updateNetwork,updateBranch } = useGameStore.getState();
            updateTechSkills(6)
            updateNetwork(5)
            updateBranch(2)
        },
        choiceThreeText: 'I will focus on extracurricular activities through clubs',
        choiceThreeOutcome: () => {
            const { updateNetwork,updateBranch } = useGameStore.getState();
            updateNetwork(5)
            updateBranch(3)
        },
    },
    {
        id: 7,
        eventTitle: 'It is now your sophomore year. You are getting used to college, and you can now start to branch into different actions on top of your coursework. What do you focus on this year?',
        choiceOneText:
            ' I will continue focusing on my academics and excelling in my coursework.',
        choiceOneOutcome: () => {
            const { updateGpa,updateTechSkills,updateBranch } = useGameStore.getState();
            updateGpa(0.2);
            updateTechSkills(3)
            updateBranch(1)
        },
        choiceTwoText:
            ' I will focus on gaining technical skills outside of class through personal projects',
        choiceTwoOutcome: () => {
            const { updateTechSkills,updateNetwork,updateBranch } = useGameStore.getState();
            updateTechSkills(6)
            updateNetwork(5)
            updateBranch(2)
        },
        choiceThreeText: 'I will focus on extracurricular activities through clubs',
        choiceThreeOutcome: () => {
            const { updateNetwork,updateBranch, branch } = useGameStore.getState();
            updateNetwork(5)
            updateBranch(3)
            console.log(branch);
        },
    },
];
