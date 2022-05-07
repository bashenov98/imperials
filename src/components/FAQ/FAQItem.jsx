import React, {useState} from 'react';
import './FAQItem.css';

const data = {
    questions: [
        {id: 1, visible: true, question: 'What is Imperials all about?', answer: 'Imperials are unique NFT Collection with P2E Game on Solana blockchain.'},
        {id: 2, visible: true, question: 'How much is the supply?', answer: 'NFTs will be reserved for the founding members, advisors, partners, private investors, collaborations, and promos.'},
        {id: 3, visible: true, question: 'How do I get whitelisted?', answer: 'Whitelist roles for those, who joined us early are already been given. Don’t be upset, we have allocated special roles for DAOs and for active people in social networks. Feel free to be creative on your own way.'},
        {id: 4, visible: true, question: 'What privileges gives me a special role, like WL?', answer: 'Whitelisted members are guaranteed to mint 2 imperials each whereas OG and DAO roles are guaranteed to mint 1 each.'},
        {id: 5, visible: true, question: 'How much of the supply will be available for the Presale?', answer: '??? of the supply has been reserved for the presale.'},
        {id: 6, visible: true, question: 'How much and when is mint day/time?', answer: '1 SOL for both presale and Public sale. \n' +
                                                                                        'Presale: ??? of April, 2022  @ ??:?? AM/PM UTC\n' +
                                                                                        'Public Sale: ??? of April, 2022  @ ??:?? AM/PM UTC\n'},
        {id: 7, visible: true, question: 'How to receive $??? Token?', answer: 'You will need to login to our staking platform using your wallet, select which Imperials you want to stake, then stake them. The Imperials NFT will not leave your wallet, but listing your NFT on the secondary market or transferring it to another wallet will reset your staking period, and you will need to re-stake your NFT to requalify for $??? rewards.\n' +
                                                                               'Also, you can earn it in our P2E game, there is a lot possibility to claim them. Full instruction how to play you can check here. Or in our Whitepaper.\n'},
        {id: 8, visible: true, question: 'Where can I buy Imperials after mint?', answer: 'We confirmed Magic Eden as the official secondary marketplace for Imperials NFTs.'},
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
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                <p className="questions">{post.question}</p>
                                <button style={styles.arrowBtn}>{data.questions[i].visible ? <img src="https://i.ibb.co/cYZsbf8/Frame-177.png"/>: <img src="https://i.ibb.co/McDQb75/Group-159.png"/>}</button>
                            </div>
                            {!data.questions[i].visible ?<p className="answers">{post.answer}</p>: null}
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
        background: 'transparent',
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