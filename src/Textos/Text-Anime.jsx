import { useState, useEffect } from "react";
import "./Text-anime.css";

export default function TextAnime() {
    const texts = ["Freelancer", "PJ", "Dev"];
    const [currentText, setCurrentText] = useState(texts[0]);

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            index = (index + 1) % texts.length;
            setCurrentText(texts[index]);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="container-text-anime">
            <span className="text first-text">I'm</span>
            <span className="text sec-text">{currentText}</span>
        </div>
    );
}
