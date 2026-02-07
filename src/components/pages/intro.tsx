import { useNavigate } from 'react-router-dom';
import NextButton from '../../assets/Complete_UI_Essential_Pack_Free/01_Flat_Theme/Sprites/UI_Flat_ButtonArrow01a.png';
import InnerButtonBackground from '../../assets/Complete_UI_Essential_Pack_Free/01_Flat_Theme/Sprites/UI_Flat_Frame02a.png';
import HoverAnimationPicture from '../../assets/Complete_UI_Essential_Pack_Free/01_Flat_Theme/Sprites/UI_Flat_Select01a_1.png';

const Intro = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="h-screen flex flex-col items-center gap-16 pt-10">
                <div className="relative inline-block w-1/2 group">
                    <img
                        src={InnerButtonBackground}
                        className="pixelated w-full"
                        alt=""
                    />
                    <span className="absolute inset-0 flex items-center justify-center text-black text-3xl p-8 text-center">
                        <div className="w-fit bg-white border-8 border-black flex flex-col gap-4">
                            <div className="px-4 py-2">
                                Welcome to UIC! You are a new freshman on
                                campus, ready to learn everything there is to
                                know about Computer Science!
                            </div>
                            <div className="px-4 py-2">
                                Your stats (located at the bottom of the page)
                                are Tech Skills, your Network, GPA, and money.
                                The decisions you make throughout your UIC
                                journey will affect these skills and your
                                future.
                            </div>
                            <div className="px-4 py-2">
                                Click below to get started!
                            </div>
                        </div>
                    </span>
                </div>
                <div
                    className="relative inline-block w-32 cursor-pointer group"
                    onClick={() => navigate('/events')}
                >
                    <img src={NextButton} className="pixelated w-full" />
                    <img
                        src={HoverAnimationPicture}
                        className="pixelated w-full absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none scale-110"
                        alt=""
                    />
                </div>
            </div>
        </>
    );
};

export default Intro;
