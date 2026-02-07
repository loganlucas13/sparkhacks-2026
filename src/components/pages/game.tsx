import { useState } from 'react';
import Event from '../event';
import { events } from '../../data/events';
import { useGameStore } from '../../data/store';
import SkillBackground from '../../assets/Complete_UI_Essential_Pack_Free/01_Flat_Theme/Sprites/UI_Flat_FrameSlot02a.png';
import MotherboardPicture from '../../assets/motherboard.png';
import NetworkPicture from '../../assets/network.png';
import GraduationPicture from '../../assets/graduation-cap.png';
import WalletPicture from '../../assets/wallet.png';

const GamePage = () => {
    const [currentEventIndex, setCurrentEventIndex] = useState(0);
    const { techSkills, network, gpa, money } = useGameStore();

    const currentEvent = events[currentEventIndex];

    const handleChoice = (outcomeFunction: () => void) => {
        outcomeFunction();

        if (currentEventIndex < events.length - 1) {
            setCurrentEventIndex(currentEventIndex + 1);
        } else {
            // all events shown, display end of game?
            console.log('game finished');
        }
    };

    return (
        <>
            <div className="h-screen flex flex-col items-center gap-16">
                <Event
                    eventText={currentEvent.eventTitle}
                    choiceOneText={currentEvent.choiceOneText}
                    choiceOneOutcome={() =>
                        handleChoice(currentEvent.choiceOneOutcome)
                    }
                    choiceTwoText={currentEvent.choiceTwoText}
                    choiceTwoOutcome={() =>
                        handleChoice(currentEvent.choiceTwoOutcome)
                    }
                    choiceThreeText={currentEvent.choiceThreeText || null}
                    choiceThreeOutcome={
                        currentEvent.choiceThreeOutcome
                            ? () =>
                                  handleChoice(currentEvent.choiceThreeOutcome!)
                            : null
                    }
                />

                <div className="flex flex-col gap-2">
                    <span className="text-center text-white text-3xl underline decoration-[4]">
                        Your Skills
                    </span>
                    <div className="flex flex-row gap-8">
                        <div className="relative w-32">
                            <img
                                src={SkillBackground}
                                className="pixelated w-32"
                                alt=""
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <img
                                    src={MotherboardPicture}
                                    className="pixelated w-3/4 h-3/4 translate-y-2"
                                    alt=""
                                />
                                <span className="text-white text-2xl -translate-y-2">
                                    {techSkills}
                                </span>
                            </div>
                        </div>

                        <div className="relative w-32">
                            <img
                                src={SkillBackground}
                                className="pixelated w-32"
                                alt=""
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <img
                                    src={NetworkPicture}
                                    className="pixelated w-3/4 h-3/4 translate-y-2"
                                    alt=""
                                />
                                <span className="text-white text-2xl -translate-y-2">
                                    {network}
                                </span>
                            </div>
                        </div>

                        <div className="relative w-32">
                            <img
                                src={SkillBackground}
                                className="pixelated w-32"
                                alt=""
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <img
                                    src={GraduationPicture}
                                    className="pixelated w-3/4 h-3/4 translate-y-2"
                                    alt=""
                                />
                                <span className="text-white text-2xl -translate-y-2">
                                    {gpa === 0
                                        ? 'N/A'
                                        : `${gpa.toFixed(1)}/4.0`}
                                </span>
                            </div>
                        </div>

                        <div className="relative w-32">
                            <img
                                src={SkillBackground}
                                className="pixelated w-32"
                                alt=""
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <img
                                    src={WalletPicture}
                                    className="pixelated w-3/4 h-3/4 translate-y-2"
                                    alt=""
                                />
                                <span className="text-white text-2xl -translate-y-2">
                                    ${money}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GamePage;
