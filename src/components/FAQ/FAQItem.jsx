import React, {useState} from 'react';

const FaqItem = (props) => {

    const [active, setActive] = useState(0);

    const questions = [
        {id: 1, question: 'What is Imperials all about?', answer: 'Imperials is a simple revenue – generating project on the Solana blockchain.'},
        {id: 2, question: 'How do I know I can Trust Imperials?', answer: 'ХЗ пока что'},
        {id: 3, question: 'How many Imperials are there?', answer: 'There is and will only ever be 2000 Imperials.'},
        {id: 4, question: 'What blockchain are you using?', answer: 'Solana'},
        {id: 5, question: 'What are your secondary royalty fees?', answer: '5%'},
        {id: 6, question: 'Marketplace:', answer: 'Magic Eden '},
        {id: 7, question: 'What is the mint price?', answer: '0.9 sol'}
    ];

    return (
        <div>
            {active === 0
                ?
                (<div >
                    <div onClick={() => setActive(1)}>
                        <h1>{questions[1].question}</h1>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/WH1xjKq/Group-159.png" alt="Group-159"/>
                    </div>
                </div>)
                :
                (<div>
                    <div>
                        <div>
                            <h1>{questions[ 1].question}</h1>
                        </div>
                        <div onClick={() => setActive(0)}>
                            <img src="https://i.ibb.co/Lh9vpKG/Group-159-1.png" alt="Group-159-1" border="0"/>
                        </div>
                    </div>
                    <div>
                        <h1>{questions[1].answer}</h1>
                    </div>
                </div>)}
        </div>
    );
};

export default FaqItem;