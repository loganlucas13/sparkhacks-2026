import { useNavigate } from 'react-router-dom';
import { useGameStore } from '../../data/store';

import NextButton from '../../assets/Complete_UI_Essential_Pack_Free/01_Flat_Theme/Sprites/UI_Flat_ButtonArrow01a.png';
import InnerButtonBackground from '../../assets/Complete_UI_Essential_Pack_Free/01_Flat_Theme/Sprites/UI_Flat_Frame02a.png';

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

const Results = () => {
    const navigate = useNavigate();

    const {
        techSkills,
        network,
        gpa,
        money,
        careerPath,
        updateMoney
    } = useGameStore();

    const calculateAcademiaScore = ({ gpa, techSkills, network }) => {
        return gpa * 10 + techSkills * 0.6 + network * 0.3;
    };

    const calculateIndustryScore = ({ gpa, techSkills, network }) => {
        return techSkills * 1.0 + network * 0.6 + gpa * 5;
    };

    const calculateStartupScore = ({ techSkills, network, money }) => {
        return (
            techSkills * 0.8 +
            network * 1.0 +
            clamp(money / 1000, 0, 20)
        );
    };

    const resolveAcademiaOutcome = (stats) => {
        const score = calculateAcademiaScore(stats);
    
        if (score >= 90) {
            return {
                title: 'Legendary Academic',
                text: `Your excellent tech skills and GPA have served you well as you apply to graduate programs. You went on to earn a PhD in computer science and your work is cited by many. Your genius knows no bounds and you have become famous for your research, including solving the P vs. NP problem. For having solved a millennium prize problem, you earn $1 million and your name appears on textbooks for years to come.`,
            };
        }
    
        if (score >= 70) {
            return {
                title: 'Respected Researcher',
                text: `Your strong academic record earns you admission into a solid graduate research program. You complete your PhD and contribute meaningful work to your field, publishing papers that influence future research. You go on to become a respected professor and researcher, mentoring the next generation of computer scientists.`,
            };
        }
    
        if (score >= 50) {
            return {
                title: 'Academic Contributor',
                text: `You complete graduate school and contribute to research as part of a larger team.
                        Your work supports important discoveries.`,
            };
        }
    
        return {
            title: 'Academic Pivot',
            text: `Graduate school proves more challenging than expected. While you gain valuable experience, research is not the right long-term path for you. After completing a master’s degree, you transition into an industry research or engineering role, applying what you learned in a more practical setting.`,
        };
    };

    const resolveIndustryOutcome = (stats) => {
        const score = calculateIndustryScore(stats);
    
        if (score >= 95) {
            return {
                title: 'Elite Software Engineer',
                text: `Your technical ability and strong network land you multiple offers from top tech companies. You accept a role at a leading firm, working on products used by millions. Your career accelerates quickly, and you rise to senior and leadership positions earlier than most.`,
            };
        }
    
        if (score >= 75) {
            return {
                title: 'Strong Software Engineer',
                text: `You secure a solid software engineering or analyst role at a well-known company. Your work is challenging and rewarding, and you steadily grow your career through experience and promotions.`,
            };
        }
    
        if (score >= 55) {
            return {
                title: 'Entry-Level Engineer',
                text: `You break into tech through an entry-level role
    and continue learning on the job.`,
            };
        }
    
        return {
            title: 'Industry Grind',
            text: `Breaking into the industry takes time, but persistence pays off. You land an entry-level role or contract position and gradually build experience, using your foundation to move forward step by step.`,
        };
    };
        
    const resolveStartupOutcome = (stats) => {
        const score = calculateStartupScore(stats);
    
        const successChance = clamp(0.15 + score / 150, 0.15, 0.85);
        const roll = Math.random();
    
        if (roll > successChance) {
            return {
                title: 'Startup Failure',
                text: `Despite your best efforts, your startup struggles to gain traction. While the company eventually shuts down, the experience sharpens your skills and expands your network. You re-enter the tech industry stronger and more resilient than before.`,
            };
        }
    
        if (score >= 90) {
            updateMoney(10000000000)
            
            return {
                title: 'Tech Billionaire',
                text: `Your startup rapidly takes off, being used by millions of people globally. Your company becomes the hottest buy on the market, and every investor wants a piece. The stock price skyrockets, and you become a tech billionaire while leaving a lasting mark on the tech world.`,
            };
        }
    
        if (score >= 70) {
            return {
                title: 'Successful Founder',
                text: `Your startup doesn’t become the next unicorn, but it succeeds enough to sustain itself. You gain invaluable experience as a founder, and your journey opens doors to future ventures or high-level roles in tech.`,
            };
        }
    
        return {
            title: 'Small Exit',
            text: `Your startup survives and is quietly acquired.
    Not a blockbuster—but a win.`,
            };
    };    

    const getOutcome = () => {
        const stats = { techSkills, network, gpa, money };
    
        if (careerPath === 'academia') {
            return resolveAcademiaOutcome(stats);
        }
    
        if (careerPath === 'industry') {
            return resolveIndustryOutcome(stats);
        }
    
        if (careerPath === 'startup') {
            return resolveStartupOutcome(stats);
        }
    
        return {
            title: 'Journey Complete',
            text: 'Your journey at UIC comes to an end.',
        };
    };

    const outcome = getOutcome();

    return (
        <div className="h-screen flex flex-col items-center gap-16 pt-10">
            <div className="relative inline-block w-1/2">
                <img src={InnerButtonBackground} className="pixelated w-full" />

                <span className="absolute inset-0 flex items-center justify-center text-black text-3xl p-8 text-center">
                    <div className="w-fit bg-white border-8 border-black flex flex-col gap-4">
                        <div className="px-4 py-2 font-bold">
                            🎓 Graduation Results
                        </div>

                        <div className="px-4 py-2">
                            {outcome.title}
                        </div>

                        <div className="px-4 py-2 whitespace-pre-line">
                            {outcome.text}
                        </div>

                        <div className="px-4 py-2 text-sm">
                            Final Stats —  
                            Tech: {techSkills} | Network: {network} | GPA: {gpa.toFixed(2)} | Money: ${money}
                        </div>
                    </div>
                </span>
            </div>

            <div
                className="relative inline-block w-32 cursor-pointer"
                onClick={() => navigate('/')}
            >
                <img src={NextButton} className="pixelated w-full" />
            </div>
        </div>
    );
};

export default Results;
