import { useState } from "react";

import { CloseButton } from "../CloseButton";

import bugImageUrl from '../../images/bug.svg'
import ideaImageUrl from '../../images/idea.svg'
import vectorImageUrl from '../../images/vector.svg'

import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de uma minhoca'
        }
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de uma lâmpada'
        }
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: vectorImageUrl,
            alt: 'Imagem de uma nuvem'
        }
    },
}

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm( ) {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    const [feedbackSent, setFeedbackSent] = useState(false)

    function handleRestartFeedback() {
        setFeedbackSent(false)
        setFeedbackType(null)
    }
    

    return (
        <div className={` bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto`}>

            {feedbackSent ? (
                <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback} />
            ) : (
                <>
                    {!feedbackType ? (
                        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
                    ) : (
                        <FeedbackContentStep onFeedbackSent={() => setFeedbackSent(true)} feedbackType={feedbackType} onFeedbackRestartRequested={handleRestartFeedback} />
                    )}
                </>
            )}

            <footer>
                Feito com ♥ pela <a className="underline underline-offset-2" href="">RocketSeat</a>
            </footer>

        </div>
    )
}