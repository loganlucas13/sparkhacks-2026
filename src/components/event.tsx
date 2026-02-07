import Banner from '../assets/Complete_UI_Essential_Pack_Free/01_Flat_Theme/Sprites/UI_Flat_Bar01a.png';
import ButtonBackground from '../assets/Complete_UI_Essential_Pack_Free/01_Flat_Theme/Sprites/UI_Flat_FrameSlot03a.png';
import InnerButtonBackground from '../assets/Complete_UI_Essential_Pack_Free/01_Flat_Theme/Sprites/UI_Flat_Button01a_2.png';
import HoverAnimationPicture from '../assets/Complete_UI_Essential_Pack_Free/01_Flat_Theme/Sprites/UI_Flat_Select01a_1.png';

interface ChoiceProps {
    choiceText: string;
    choiceOutcome: (() => void) | null;
}

const Choice = ({ choiceText, choiceOutcome }: ChoiceProps) => {
    return (
        <div
            className="relative inline-block w-96 cursor-pointer group"
            onClick={() => choiceOutcome?.()}
        >
            <img src={ButtonBackground} className="pixelated w-full" alt="" />

            {/* border animation */}
            <img
                src={HoverAnimationPicture}
                className="pixelated w-full absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none scale-110"
                alt=""
            />

            <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="relative w-4/5 -translate-y-2">
                    <img
                        src={InnerButtonBackground}
                        className="pixelated w-full"
                        alt=""
                    />
                    <span className="absolute inset-0 flex items-center justify-center text-black text-3xl px-4 text-center">
                        {choiceText}
                    </span>
                </div>
            </div>
        </div>
    );
};

interface EventProps {
    eventText: string;
    choiceOneText: string;
    choiceOneOutcome: () => void;
    choiceTwoText: string;
    choiceTwoOutcome: () => void;
    choiceThreeText: string | null;
    choiceThreeOutcome: (() => void) | null;
}

const Event = ({
    eventText,
    choiceOneText,
    choiceOneOutcome,
    choiceTwoText,
    choiceTwoOutcome,
    choiceThreeText,
    choiceThreeOutcome,
}: EventProps) => {
    return (
        <>
            <div className="w-screen flex flex-col gap-10">
                {/* event text*/}
                <div className="relative flex justify-center pt-10">
                    <img
                        src={Banner}
                        className="pixelated w-1/2 h-auto"
                        alt=""
                    />
                    <span className="absolute inset-0 flex items-center justify-center text-black text-3xl text-center pointer-events-none px-8">
                        <span className="max-w-[40%] text-center translate-y-4">
                            {eventText}
                        </span>
                    </span>
                </div>

                {/* choices */}
                <div className="flex flex-row items-center justify-center gap-20 w-full">
                    <Choice
                        choiceText={choiceOneText}
                        choiceOutcome={choiceOneOutcome}
                    />
                    <Choice
                        choiceText={choiceTwoText}
                        choiceOutcome={choiceTwoOutcome}
                    />
                    {choiceThreeText && (
                        <Choice
                            choiceText={choiceThreeText}
                            choiceOutcome={choiceThreeOutcome}
                        />
                    )}
                </div>
            </div>
        </>
    );
};

export default Event;
