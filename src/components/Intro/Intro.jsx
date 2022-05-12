import React, {useRef, useEffect, useState} from 'react';
import gsap from "gsap";

import './Intro.css';
import {ReactComponent as Logo} from "../../media/Logo.svg";
import volumeOff from "../../media/sound/volume_off.svg";
import volumeOn from "../../media/sound/volume_on.svg";
import skip from "../../media/sound/skip.png";
import graySkip from "../../media/sound/gray_skip.png";
import logo from "../../media/reallogo.PNG";


const Intro = (props) => {
    const intro = useRef();
    const title = useRef();
    const content = useRef();
    const audio = useRef();

    const [muted, setMuted] = useState(true);

    useEffect(() => {
        let tl = new gsap.timeline();

        tl
            .to(intro.current, { opacity: 1, delay: 1, duration: 4.5 })
            .to(intro.current, {
                opacity: 0,
                duration: 1.5,
                onComplete: () => {
                    audio.current.play(); // autoplay the theme music
                }
            })
            // add a short delay on the next step to sync better with the audio
            .set(title.current, { opacity: 1, scale: 2.75, delay: 0.5 })
            .to(title.current, { scale: 0.05, ease: "power2", duration: 8 })
            .to(title.current, { opacity: 0, duration: 1.5 }, "-=1.5")
            .to(content.current, { top: "-300%", duration: 100 });
    }, []);

    const handleLangChange = () => {
        props.onIntro();
    }

    return (
        <div className="introduction">
            <div className="container">
                <section className="intro" ref={intro}>
                    <p>
                        A long time ago, in a galaxy far,
                        <br /> far away....
                    </p>
                </section>
                <section className="title" ref={title}>
                    <img src={logo}/>
                </section>
                <section className="crawl">
                    <div className="content" ref={content}>
                        <h1 className="episode-number">Episode I</h1><br/>
                        <h2 className="episode-title">Imperials</h2><br/>
                        <p>2,222 brave and courageous Imperials rebelled and marched against the tyrant Andron.</p><br/>
                        <p>Possessing such qualities as loyalty, justice and courage are inherent in each of them, a warrior will go to the end for truth and honor and will give his life without delay, if necessary.</p><br/>
                    </div>
                </section>
                <audio ref={audio} muted>
                    <source
                        type="audio/mpeg" src="https://ia801501.us.archive.org/23/items/StarWars_20180709/Star%20Wars.mp3" />
                </audio>
                <div className="intro-buttons">
                    <button
                        className="volume"
                        type="button"
                        onClick={() => {
                            audio.current.muted = !muted;
                            setMuted(!muted);
                        }}
                    >
                        {muted ? (
                            <img src={volumeOff} alt="Volume is off" />
                        ) : (
                            <img src={volumeOn} alt="Volume is on" />
                        )}
                    </button>
                    <button
                        className="skip-button"
                        type="button"
                        onClick={() => {handleLangChange()}}>
                        <img src={graySkip} alt="skip" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Intro;