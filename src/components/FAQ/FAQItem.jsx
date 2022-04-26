import React, {useState} from 'react';

const data = {
    questions: [
        {id: 1, visible: true, question: 'What is Imperials all about?', answer: 'Imperials is a simple revenue – generating project on the Solana blockchain.'},
        {id: 2, visible: true, question: 'How do I know I can Trust Imperials?', answer: 'ХЗ пока что'},
        {id: 3, visible: true, question: 'How many Imperials are there?', answer: 'There is and will only ever be 2000 Imperials.'},
        {id: 4, visible: true, question: 'What blockchain are you using?', answer: 'Solana'},
        {id: 5, visible: true, question: 'What are your secondary royalty fees?', answer: '5%'},
        {id: 6, visible: true, question: 'Marketplace:', answer: 'Magic Eden '},
        {id: 7, visible: true, question: 'What is the mint price?', answer: '0.9 sol'}
    ]
}

const FaqItem = (props) => {

    const [show, setShow] = useState(false);

    const toggle = (id) => {
        const newData = data.questions.map(item => {
            if(item.id === id) {
            return { ...item, visible: !item.visible};
            }

            return item;
        })
        setShow(val => !val);
        data.questions = newData;
    }

    return (
        <div style={styles.grid}>
            {data.questions.map((post,i)=>(
                <div >
                    <a style={{cursor: 'pointer', margin: 0}} onClick={() => toggle(i+1) }>
                        <div style={styles.contentBox} key={i}>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                                <p style={styles.question}>{post.question}</p>
                                <button style={styles.arrowBtn}>{data.questions[i].visible ? <img  />: <img />}</button>
                            </div>
                            {!data.questions[i].visible ?<p style={styles.answer}>{post.answer}</p>: null}
                        </div>
                    </a>
                </div>
            ))}
        </div>
    );
};

export default FaqItem;

const styles = {
    grid: {
        display: 'grid',
        width: '52.5%',
        mx: 'auto',
        display: 'flex',
        flexDirection: 'column',
        border: "2px solid #FFFFFF",
        borderRadius: "8px"
    },

    contentBox: {
        width: '100%', 
        height: 'auto',
        display: 'flex', 
        flexDirection: 'column', 
        padding: '14px 10px',
        margin: 0,
        borderBottom: '2px solid #FFFFFF',
        background: 'transparent'
    },

    question: {
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: "20px",
        lineHeight: "20px",
        letterSpacing: "0.02em",
        color: "#FFFFFF",
    },

    answer: {
        paddingTop: '16px',
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "16px",
        lineHeight: "130%",
        letterSpacing: "0.02em",
        color: "#FFFFFF",
    },

    arrowBtn: {
        width: '30px',
        height: '30px',
        background: 'transparent', 
        border: 'none', 
        outline: 'none', 
        cursor: 'pointer',
    }


}