import React from 'react';
import Answers from './answers';

export default function Question({
    label,
    text, 
    type,
    choices,
    open,
    answer,
    selectedAnswer,
    onAnswer
}){
    React.useEffect(() => {
        if(!open)
            window.playSound("whoosh");
    }, [open]);
    // const activeClass = active ? "" : "pointer-events-none sopacity-0 transform -rotate-12 ";
    const activeClass = open ? "pointer-events-auto" : "pointer-events-none opacity-0 transform -translate-x-full -rotate-12 ";

    return (
        <div className={`relative w-full overflow-hidden rounded-lg border-2 border-white border-opacity-40 bg-gradient-to-br from-blue-900 via-blue-600 to-blue-900 origin-bottom-left transition duration-500 ${activeClass}`}>
            <div className="">
                <div className="z-10 mt-4 px-4">
                    <div className="px-2 flex justify-center">
                        <span className="flex-shrink-0 rounded-full bg-white text-primary text-xs tracking-wider font-semibold border-2 border-white border-opacity-20 inline-flex items-center justify-center py-0.5 px-3 transform scale-90 bg-opacity-80">
                            {label}
                        </span>
                    </div>
                    
                    <div className="mt-2.5 mb-2 px-2">
                        <h5 className="text-4xl leading-snug fancy-font tracking-tight text-center text-white">
                            {text}
                        </h5>
                    </div>
                </div>

                <div className="p-3">
                    <Answers 
                        type={type}
                        correctChoice={answer}
                        selectedChoice={selectedAnswer}
                        choices={choices} 
                        onAnswer={onAnswer} 
                    />
                </div>
            </div>
        </div>
    );
}