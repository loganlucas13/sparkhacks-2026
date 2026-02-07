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
        eventTitle:
            'You are now in your second semester of school. How exciting! How do you spend your time outside of class?',
        choiceOneText:
            'Join a CS club and work on a personal project to gain more skills',
        choiceOneOutcome: () => {
            const { updateTechSkills } = useGameStore.getState();
            updateTechSkills(2);
        },
        choiceTwoText: 'Work a part-time job.',
        choiceTwoOutcome: () => {
            const { updateTechSkills, updateMoney } = useGameStore.getState();
            updateTechSkills(-2);
            updateMoney(2000);
        },
        choiceThreeText: null,
        choiceThreeOutcome: null,
    },
    {
        id: 4,
        eventTitle:
            "It's the middle of the semester. You are having a tougher time than last semester. How do you prepare for midterms?",
        choiceOneText: 'Study hard and visit office hours',
        choiceOneOutcome: () => {
            const { updateTechSkills, updateGpa } = useGameStore.getState();
            updateTechSkills(2);
            updateGpa(0.2);
        },
        choiceTwoText:
            'Skip studying and focus on social events and learning skills outside of class',
        choiceTwoOutcome: () => {
            const { updateTechSkills, updateGpa } = useGameStore.getState();
            updateTechSkills(3);
            updateGpa(-0.2);
        },
        choiceThreeText: null,
        choiceThreeOutcome: null,
    },
    {
        id: 5,
        eventTitle:
            "Your freshman year is over… it's summertime! How do you spend your summer?",
        choiceOneText: 'Enroll in summer classes at UIC',
        choiceOneOutcome: () => {
            const { updateMoney, updateTechSkills } = useGameStore.getState();
            updateMoney(-3000);
            updateTechSkills(3);
        },
        choiceTwoText: 'Work a full-time job to earn some money',
        choiceTwoOutcome: () => {
            const { updateMoney } = useGameStore.getState();
            updateMoney(3000);
        },
        choiceThreeText: null,
        choiceThreeOutcome: null,
    },
    {
        id: 6,
        eventTitle:
            'It is now your sophomore year. You are getting used to college, and you can now start to branch into different actions on top of your coursework. What do you focus on this year?',
        choiceOneText:
            'I will continue focusing on my academics and excelling in my coursework.',
        choiceOneOutcome: () => {
            const { updateGpa, updateTechSkills, updateBranch } =
                useGameStore.getState();
            updateGpa(0.2);
            updateTechSkills(3);
            updateBranch(1);
        },
        choiceTwoText:
            'I will focus on gaining technical skills outside of class through personal projects',
        choiceTwoOutcome: () => {
            const { updateTechSkills, updateNetwork, updateBranch } =
                useGameStore.getState();
            updateTechSkills(6);
            updateNetwork(5);
            updateBranch(2);
        },
        choiceThreeText:
            'I will focus on extracurricular activities through clubs',
        choiceThreeOutcome: () => {
            const { updateNetwork, updateBranch } = useGameStore.getState();
            updateNetwork(5);
            updateBranch(3);
        },
    },
    {
        id: 7,
        eventTitle: () => {
            const { branch } = useGameStore.getState();

            if (branch === 1) {
                return 'You are an excellent student and have gained the recognition of your professors. After the semester, a professor reaches out to you to offer you a position as a TA for the next semester. What do you do?';
            } else if (branch === 2) {
                return 'You have gained many new skills and have become more comfortable with working on complex projects. How do you use your new skills?';
            } else {
                return 'You want to expand your network and get involved in campus life, hackathons, or entrepreneurial projects. How do you spend your free time?';
            }
        },
        choiceOneText: () => {
            const { branch } = useGameStore.getState();

            if (branch === 1) {
                return 'Accept the offer.';
            } else if (branch === 2) {
                return 'Work on open source projects on GitHub';
            } else {
                return 'Do hackathons across Chicago, such as SparkHacks at UIC!';
            }
        },
        choiceOneOutcome: () => {
            const { branch, updateNetwork, updateTechSkills } =
                useGameStore.getState();

            if (branch === 1) {
                updateNetwork(5);
                updateTechSkills(2);
            } else if (branch === 2) {
                updateNetwork(2);
                updateTechSkills(5);
            } else {
                updateNetwork(5);
                updateTechSkills(3);
            }
        },
        choiceTwoText: () => {
            const { branch } = useGameStore.getState();

            if (branch === 1) {
                return 'Decline the offer, you need to focus on your courses';
            } else if (branch === 2) {
                return 'Build a personal portfolio or user-facing software application';
            } else {
                return 'Take leadership in a campus organization at UIC';
            }
        },
        choiceTwoOutcome: () => {
            const {
                branch,
                updateGpa,
                updateNetwork,
                updateTechSkills,
                updateMoney,
            } = useGameStore.getState();

            if (branch === 1) {
                updateGpa(0.1);
                updateTechSkills(3);
            } else if (branch === 2) {
                updateTechSkills(5);
                updateMoney(500);
            } else {
                updateNetwork(7);
                updateTechSkills(2);
            }
        },
        choiceThreeText: null,
        choiceThreeOutcome: null,
    },
    {
        id: 8,
        eventTitle: () => {
            const { branch } = useGameStore.getState();

            if (branch === 1) {
                return 'It is now the end of the sophomore year. Another one of your professors offers you a spot as a research assistant in their lab for the summer. What do you do?';
            } else if (branch === 2) {
                return 'It is the end of sophomore year and your technical work has gained the attention of a local company. After reaching out and interviewing you, they extend you an offer for a summer internship. Do you accept?';
            } else {
                return 'At the end of the year, one of the connections you made during the last two semesters offers you a chance to work on a startup idea over the summer. What do you do?';
            }
        },
        choiceOneText: () => {
            const { branch } = useGameStore.getState();

            if (branch === 1) {
                return 'Accept the offer, I want to gain experience in academia and more connections';
            } else if (branch === 2) {
                return 'Accept and spend your summer working for the company';
            } else {
                return 'Join the startup team';
            }
        },
        choiceOneOutcome: () => {
            const { branch, updateNetwork, updateTechSkills, updateMoney } =
                useGameStore.getState();

            if (branch === 1) {
                updateNetwork(10);
                updateMoney(1000);
            } else if (branch === 2) {
                updateTechSkills(6);
                updateNetwork(5);
                updateMoney(5000);
            } else {
                updateNetwork(5);
                updateTechSkills(3);
                updateMoney(1000);
            }
        },
        choiceTwoText: () => {
            const { branch } = useGameStore.getState();

            if (branch === 1) {
                return "Decline, I'm not that interested in research";
            } else if (branch === 2) {
                return 'Decline and continue to expand your application';
            } else {
                return 'Hone your own skills over the summer by working on personal projects';
            }
        },
        choiceTwoOutcome: () => {
            const { branch, updateTechSkills, updateMoney } =
                useGameStore.getState();

            if (branch === 1) {
                updateMoney(3000);
            } else if (branch === 2) {
                updateTechSkills(8);
            } else {
                updateMoney(3000);
                updateTechSkills(5);
            }
        },
        choiceThreeText: null,
        choiceThreeOutcome: null,
    },
    {
        id: 9,
        eventTitle:
            'It is now your junior year. You are a diligent student and have gained many skills necessary for success. How do you spend your free time?',
        choiceOneText:
            'Take advanced computer science courses and focus on your academics',
        choiceOneOutcome: () => {
            const { updateGpa, updateTechSkills, updateBranch } =
                useGameStore.getState();
            updateGpa(0.2);
            updateTechSkills(4);
            updateBranch(1);
        },
        choiceTwoText:
            'Work on more advanced personal projects, gaining valuable software engineering experience',
        choiceTwoOutcome: () => {
            const { updateTechSkills, updateBranch } = useGameStore.getState();
            updateTechSkills(5);
            updateBranch(2);
        },
        choiceThreeText:
            'Become the president of an organization on campus and lead large events, such as SparkHacks!',
        choiceThreeOutcome: () => {
            const { updateTechSkills, updateNetwork, updateBranch } =
                useGameStore.getState();
            updateTechSkills(3);
            updateNetwork(8);
            updateBranch(3);
        },
    },
    {
        id: 10,
        eventTitle: () => {
            const { branch } = useGameStore.getState();

            if (branch === 1) {
                return 'Your professors are impressed with your mastery of your classes. You feel ready to assist them, how do you do so?';
            } else if (branch === 2) {
                return 'Your projects are gaining attention. How do you even further grow your skills?';
            } else {
                return 'You are gaining more influence on your campus. What type of events do you prioritize?';
            }
        },
        choiceOneText: () => {
            const { branch } = useGameStore.getState();

            if (branch === 1) {
                return 'TA for an advanced CS course';
            } else if (branch === 2) {
                return 'Collaborate with others on open source and competitive coding projects';
            } else {
                return 'Events that allow you to network with other students and professors and grow your skills';
            }
        },
        choiceOneOutcome: () => {
            const { branch, updateNetwork, updateTechSkills } =
                useGameStore.getState();

            if (branch === 1) {
                updateTechSkills(2);
                updateNetwork(6);
            } else if (branch === 2) {
                updateTechSkills(5);
                updateNetwork(3);
            } else {
                updateNetwork(4);
                updateTechSkills(2);
            }
        },
        choiceTwoText: () => {
            const { branch } = useGameStore.getState();

            if (branch === 1) {
                return 'Assist them with their research';
            } else if (branch === 2) {
                return 'Focus on building a portfolio of side projects';
            } else {
                return 'Events that allow you to network with industry professionals';
            }
        },
        choiceTwoOutcome: () => {
            const { branch, updateNetwork, updateTechSkills, updateMoney } =
                useGameStore.getState();

            if (branch === 1) {
                updateTechSkills(1);
                updateNetwork(8);
            } else if (branch === 2) {
                updateTechSkills(6);
                updateMoney(500);
            } else {
                updateNetwork(6);
            }
        },
        choiceThreeText: null,
        choiceThreeOutcome: null,
    },
    {
        id: 11,
        eventTitle: () => {
            const { branch } = useGameStore.getState();

            if (branch === 1) {
                return 'After working hard on your classes and with your professors, junior year has ended and summer has come. What do you do this summer?';
            } else if (branch === 2) {
                return 'You have gained lots of experience in software development over the last year. How do you spend your summer this time?';
            } else {
                return 'You have made many new connections and friends over the past year and must decide what to do this summer. What do you do?';
            }
        },
        choiceOneText: () => {
            const { branch } = useGameStore.getState();

            if (branch === 1) {
                return 'Continue working with your professors in their research lab';
            } else if (branch === 2) {
                return 'Work an internship at a tech company';
            } else {
                return 'Join a startup accelerator with your trusted friends';
            }
        },
        choiceOneOutcome: () => {
            const { branch, updateNetwork, updateTechSkills, updateMoney } =
                useGameStore.getState();

            if (branch === 1) {
                updateNetwork(8);
                updateTechSkills(5);
            } else if (branch === 2) {
                updateTechSkills(5);
                updateNetwork(5);
                updateMoney(15000);
            } else {
                updateTechSkills(5);
                updateNetwork(2);
            }
        },
        choiceTwoText: () => {
            const { branch } = useGameStore.getState();

            if (branch === 1) {
                return 'Find a research internship with a company';
            } else if (branch === 2) {
                return 'Expand one of your projects to a product or side business';
            } else {
                return 'Take a risk at a large tech networking event';
            }
        },
        choiceTwoOutcome: () => {
            const { branch, updateNetwork, updateTechSkills, updateMoney } =
                useGameStore.getState();

            if (branch === 1) {
                updateMoney(10000);
                updateNetwork(5);
                updateTechSkills(5);
            } else if (branch === 2) {
                updateTechSkills(6);
                updateNetwork(5);
                updateMoney(3000);
            } else {
                updateNetwork(10);
            }
        },
        choiceThreeText: null,
        choiceThreeOutcome: null,
    },
    {
        id: 12,
        eventTitle:
            'It is now your final year as a CS student at UIC. Graduation is just around the corner! At this point, your skills have been specialized and well developed over the years, and you spend the last year preparing for what you will do after graduation.',
        choiceOneText:
            'Invest your time heavily in research and advanced CS courses',
        choiceOneOutcome: () => {
            const { updateNetwork, updateGpa, updateBranch } =
                useGameStore.getState();
            updateNetwork(4);
            updateGpa(0.4);
            updateBranch(1);
        },
        choiceTwoText:
            'Dedicate your last year to interview prep, refining your resume, and applying to companies',
        choiceTwoOutcome: () => {
            const { updateTechSkills, updateNetwork, updateBranch } =
                useGameStore.getState();
            updateTechSkills(5);
            updateNetwork(5);
            updateBranch(2);
        },
        choiceThreeText: 'Go all in on entrepreneurship and networking',
        choiceThreeOutcome: () => {
            const { updateTechSkills, updateNetwork, updateBranch } =
                useGameStore.getState();
            updateTechSkills(6);
            updateNetwork(8);
            updateBranch(3);
        },
    },
    {
        id: 13,
        eventTitle: () => {
            const { branch } = useGameStore.getState();

            if (branch === 1) {
                return 'You have spent lots of time working with your professors and grinding hard at your coursework. What do you focus on this year?';
            } else if (branch === 2) {
                return 'You are working hard to improve your interview skills and resume as much as you can. What do you focus on the most this year?';
            } else {
                return 'You spend your final year building connections, pitching ideas, and building your ideas. What do you commit to the most?';
            }
        },
        choiceOneText: () => {
            const { branch } = useGameStore.getState();

            if (branch === 1) {
                return 'Publishing or contributing significantly to a research paper';
            } else if (branch === 2) {
                return 'Expand your projects and learn new technologies to improve your resume';
            } else {
                return 'Fully commit to a startup with a small team';
            }
        },
        choiceOneOutcome: () => {
            const { branch, updateNetwork, updateTechSkills } =
                useGameStore.getState();

            if (branch === 1) {
                updateNetwork(3);
                updateTechSkills(1);
            } else if (branch === 2) {
                updateTechSkills(6);
            } else {
                updateTechSkills(6);
                updateNetwork(4);
            }
        },
        choiceTwoText: () => {
            const { branch } = useGameStore.getState();

            if (branch === 1) {
                return 'Focus on your GPA and graduate school applications';
            } else if (branch === 2) {
                return 'Grind LeetCode, system design, and behavioral questions for job interviews';
            } else {
                return 'Focus on pitching, demos, and networking';
            }
        },
        choiceTwoOutcome: () => {
            const { branch, updateGpa, updateNetwork, updateTechSkills } =
                useGameStore.getState();

            if (branch === 1) {
                updateGpa(0.4);
                updateNetwork(2);
            } else if (branch === 2) {
                updateTechSkills(4);
                updateNetwork(2);
            } else {
                updateNetwork(10);
            }
        },
        choiceThreeText: null,
        choiceThreeOutcome: null,
    },
    {
        id: 14,
        eventTitle:
            'Graduation is fast approaching. You have spent the last four years working hard to grow your skills and achieve your goals. What do you want to do now?',
        choiceOneText: 'Commit to academia through a graduate research program',
        choiceOneOutcome: () => {
            const { updateCareerPath } = useGameStore.getState();
            updateCareerPath('academia');
        },
        choiceTwoText: 'Commit to industry through a job in tech',
        choiceTwoOutcome: () => {
            const { updateCareerPath } = useGameStore.getState();
            updateCareerPath('industry');
        },
        choiceThreeText: 'Commit to entrepreneurship through a startup',
        choiceThreeOutcome: () => {
            const { updateCareerPath } = useGameStore.getState();
            updateCareerPath('startup');
        },
    },
];
