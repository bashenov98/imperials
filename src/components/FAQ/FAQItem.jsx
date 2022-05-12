import React, {useState} from 'react';
import './FAQItem.css';

const data = {
    questions: [
        {id: 1, visible: true, question: 'What Imperials is all about?', answer: 'Imperials are unique NFT Collection with P2E Game on Solana blockchain.'},
        {id: 2, visible: true, question: 'How much is the supply?', answer: '2.222 Imperials. 77 NFTs will be reserved for the founding members, advisors, partners, private investors, collaborations, and promos.'},
        {id: 3, visible: true, question: 'How do I get whitelisted?', answer: 'Whitelist roles for those, who joined us early are already been given. Don’t be upset, we have allocated special roles for DAOs and for active people in social networks. Feel free to be creative on your own way.'},
        {id: 4, visible: true, question: 'What privileges gives me a special role, like WL?', answer: 'Whitelisted members are guaranteed to mint 2 imperials each whereas OG and DAO roles are guaranteed to mint 1 each.'},
        {id: 5, visible: true, question: 'How much of the supply will be available for the Presale?', answer: '1200 of the supply has been reserved for the presale.'},
        {id: 6, visible: true, question: 'How much and when is mint day/time?', answer: '2 SOL for both presale and Public sale. \n' +
                                                                                        'Presale: TBA\n' +
                                                                                        'Public Sale: TBA\n'},
        {id: 7, visible: true, question: 'How to receive $IMPR Token?', answer: 'You will need to login to our staking platform using your wallet, select which Imperials you want to stake, then stake them. The Imperials NFT will not leave your wallet, but listing your NFT on the secondary market or transferring it to another wallet will reset your staking period, and you will need to re-stake your NFT to requalify for $IMPR rewards.\n' +
                                                                               'Also, you can earn it in our P2E game, there is a lot possibility to claim them.\n'},
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
        <div className='faq-section'>
            <div className="faq-header">
                <h3 style={{textAlign: 'center'}}>FAQ</h3>
                <h2>FAQ</h2><br/>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                <div className="grid-table">
                    {data.questions.map((post,i)=>(
                        <div >
                            <a style={{cursor: 'pointer', margin: 0}} onClick={() => toggle(i+1) }>
                                <div className="content-box" key={i}>
                                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                        <p className="questions">{post.question}</p>
                                        <button style={styles.arrowBtn}>{data.questions[i].visible ? <img className="img-x" src="https://i.ibb.co/cYZsbf8/Frame-177.png"/>: <img className="img-x" src="https://i.ibb.co/McDQb75/Group-159.png"/>}</button>
                                    </div>
                                    {!data.questions[i].visible ?<p className="answers">{post.answer}</p>: null}
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <br/><br/><br/>
        </div>
    );
};

export default FaqItem;

const styles = {
    


    arrowBtn: {
        width: '30px',
        height: '30px',
        background: 'transparent', 
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        border: 'none', 
        outline: 'none', 
        cursor: 'pointer',
        marginRight: '20px'
    }


}