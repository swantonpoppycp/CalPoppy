/** @jsxImportSource @emotion/react */
import '../style/chatMsg.css';
import '../style/colors.css';
import { synthesizeText } from './SpeechProcessing';
import { poppyDir } from '../App';

export default function MessageBubble({
    text,
    /* senderID: SENDER_USER when false, SENDER_BOT when true */
    senderID,
    showFeedback,
    onFeedbackGiven,
    feedback,
    timestamp,
    }) {

    const playMsg = (text) => {
        const path = require('path');

        // output file for audio
        // maybe add ogg files later since those are smaller
        const outputFile = path.join(poppyDir, "msg.mp3");

        // call TTS synthesize function from Google's API
        synthesizeText(text, outputFile);

        // play audio file
        <audio autoplay>
            <source src={{ outputFile }} type="audio/mpeg" />
        </audio>
    }

    return (
        /* wrapper div for messages */
        <div className={`msgWrapper ${senderID ? "msgWrapperBot" : "msgWrapperUser"} `}>
            {/* actual message text */}
            <p className={` msg ${senderID ? "msgBot" : "msgUser"} `}>
                {text}
            </p>
            <br></br>

            {/* extra bot buttons */}
            {senderID && (
                <div className=" feedbackOpts ">
                    {/* feedback buttons */}
                    {showFeedback && (
                        <div>
                            <button type="button"
                            className={` feedbackIcon ${typeof feedback !== "undefined" && feedback ? "feedbackIconPos" : ""} `}
                            onClick={() => onFeedbackGiven(timestamp, true)}>
                                <i class="bi bi-hand-thumbs-up"></i>
                            </button>
                            <button type="button"
                                className={` feedbackIcon ${typeof feedback !== "undefined" && !feedback ? "feedbackIconNeg" : ""} `}
                                onClick={() => onFeedbackGiven(timestamp, false)}>
                                <i class="bi bi-hand-thumbs-down"></i>
                            </button>
                        </div>
                    )}

                    {/* play bot message -- can be expanded to user msgs as well */}
                    <button type="button" className="feedbackIcon" onClick={() => playMsg(text)}>
                        <i class="bi bi-megaphone"></i>
                    </button>
                </div>
            )}
        </div>
    );
}
