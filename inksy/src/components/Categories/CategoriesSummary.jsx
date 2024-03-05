import Search from "../search/Search";
import {useNavigate, Link} from 'react-router-dom';
import Popup from './CategoriesPopup';
import { useState } from "react";

const cardData = [
    {
        entertainment: [
            {
                img: 'https://t4.ftcdn.net/jpg/02/42/89/53/360_F_242895340_l82pcAD259Gmm0CD1sc2DTrqnEUibgKC.jpg',
                tag: 'Recently Added',
                avatar: 'assets/images/avatar.png',
                cardTitle: 'The Shadow of the Wind',
                cardText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                hearts: '28',
                comments: '10',
        
            },
            {
                img: 'https://t4.ftcdn.net/jpg/02/42/89/53/360_F_242895340_l82pcAD259Gmm0CD1sc2DTrqnEUibgKC.jpg',
                tag: '',
                avatar: 'assets/images/avatar.png',
                cardTitle: 'The Shadow of the Wind',
                cardText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                hearts: '28',
                comments: '10',
        
            },
            {
                img: 'https://t4.ftcdn.net/jpg/02/42/89/53/360_F_242895340_l82pcAD259Gmm0CD1sc2DTrqnEUibgKC.jpg',
                tag: 'Recently Added',
                avatar: 'assets/images/avatar.png',
                cardTitle: 'The Shadow of the Wind',
                cardText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                hearts: '28',
                comments: '10',
        
            },
            {
                img: 'https://t4.ftcdn.net/jpg/02/42/89/53/360_F_242895340_l82pcAD259Gmm0CD1sc2DTrqnEUibgKC.jpg',
                tag: '',
                avatar: 'assets/images/avatar.png',
                cardTitle: 'The Shadow of the Wind',
                cardText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                hearts: '28',
                comments: '10',
        
            },
            {
                img: 'https://t4.ftcdn.net/jpg/02/42/89/53/360_F_242895340_l82pcAD259Gmm0CD1sc2DTrqnEUibgKC.jpg',
                tag: 'Recently Added',
                avatar: 'assets/images/avatar.png',
                cardTitle: 'The Shadow of the Wind',
                cardText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                hearts: '28',
                comments: '10',
        
            },
            {
                img: 'https://t4.ftcdn.net/jpg/02/42/89/53/360_F_242895340_l82pcAD259Gmm0CD1sc2DTrqnEUibgKC.jpg',
                tag: '',
                avatar: 'assets/images/avatar.png',
                cardTitle: 'The Shadow of the Wind',
                cardText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                hearts: '28',
                comments: '10',
        
            },
        ],
        other: [
            {
                img: 'https://t4.ftcdn.net/jpg/02/42/89/53/360_F_242895340_l82pcAD259Gmm0CD1sc2DTrqnEUibgKC.jpg',
                tag: 'Recently Added',
                avatar: 'assets/images/avatar.png',
                cardTitle: 'The Shadow of the Wind',
                cardText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                hearts: '28',
                comments: '10',
        
            },
            {
                img: 'https://t4.ftcdn.net/jpg/02/42/89/53/360_F_242895340_l82pcAD259Gmm0CD1sc2DTrqnEUibgKC.jpg',
                tag: '',
                avatar: 'assets/images/avatar.png',
                cardTitle: 'The Shadow of the Wind',
                cardText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                hearts: '28',
                comments: '10',
        
            },
            {
                img: 'https://t4.ftcdn.net/jpg/02/42/89/53/360_F_242895340_l82pcAD259Gmm0CD1sc2DTrqnEUibgKC.jpg',
                tag: 'Recently Added',
                avatar: 'assets/images/avatar.png',
                cardTitle: 'The Shadow of the Wind',
                cardText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                hearts: '28',
                comments: '10',
        
            },
            {
                img: 'https://t4.ftcdn.net/jpg/02/42/89/53/360_F_242895340_l82pcAD259Gmm0CD1sc2DTrqnEUibgKC.jpg',
                tag: '',
                avatar: 'assets/images/avatar.png',
                cardTitle: 'The Shadow of the Wind',
                cardText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                hearts: '28',
                comments: '10',
        
            },
            {
                img: 'https://t4.ftcdn.net/jpg/02/42/89/53/360_F_242895340_l82pcAD259Gmm0CD1sc2DTrqnEUibgKC.jpg',
                tag: 'Recently Added',
                avatar: 'assets/images/avatar.png',
                cardTitle: 'The Shadow of the Wind',
                cardText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                hearts: '28',
                comments: '10',
        
            },
            {
                img: 'https://t4.ftcdn.net/jpg/02/42/89/53/360_F_242895340_l82pcAD259Gmm0CD1sc2DTrqnEUibgKC.jpg',
                tag: '',
                avatar: 'assets/images/avatar.png',
                cardTitle: 'The Shadow of the Wind',
                cardText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                hearts: '28',
                comments: '10',
        
            },
        ],
    },        
]


const CategoriesSummary = () => {   
    
    const Navigate = useNavigate();
    const [popupVisible, setPopupVisible] = useState(false);    
    
    const handleSearch=()=>{    
        console.log('im focused');
        setPopupVisible(true);        
    }
    const onHide=(isClosed)=>{            
        setPopupVisible(!setPopupVisible);
        // document.querySelector('.search-container input').dispatchEvent(new Event('focusout'));
        console.log('im closed');                    
    }

    return(
        <div className='home-comp'>
            { popupVisible ? <Popup onHide={onHide && onHide} /> : null}
            
             <div className="journals-search-container mb-5">
                <Search
                    type="text"
                    placeholder="Search"
                    method={handleSearch && handleSearch}
                />
             </div>
             <div className="heading-container mb-3">
                <h3 className="heading">Entertainment</h3>
             </div>
             <div className="journals-container">
                {
                    cardData[0].entertainment.map((ite,i)=>{
                        return(
                            <div className="card" key={i}>
                            <img src={ite.img} className="card-img-top" alt="journal image" />
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between">
                                    {ite.tag?<div className="tag">{ite.tag}</div>: <div></div>}
                                    <div className="avatar align-self-end">
                                        <img src={ite.avatar} className="card-img-top" alt="journal image" />
                                    </div>
                                </div>
                                <Link to="/journals/testJournal">
                                    <h5 className="card-title">{ite.cardTitle}</h5>
                                </Link>
                                <p className="card-text">{ite.cardText}</p>
                                <div className="action-btns-container d-flex align-items-center">
                                    <button href="#" className="active">
                                        <span className="icon icon-heart"></span>
                                        {ite.hearts}
                                    </button>
                                    <button href="#" className="">
                                        <span className="icon icon-comment"></span>
                                    </button>
                                    <button href="#" className="">
                                        <span className="icon icon-pin"></span>
                                    </button>
                                    <button href="#" className="">
                                        <span className="icon icon-share"></span>
                                    </button>
                                </div>
                            </div>
                            </div>
                        )
                    })
                }
             </div>
             <div className="d-flex justify-content-center mb-5">
                <button type="button" className="btn btn-outline" onClick={() => Navigate('/categories')}>See All</button>
             </div>
             <div className="heading-container mb-3">
                <h3 className="heading">Other</h3>
             </div>
             <div className="journals-container">
                {
                    cardData[0].other.map((ite,i)=>{
                        return(
                            <div className="card" key={i}>
                            <img src={ite.img} className="card-img-top" alt="journal image" />
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between">
                                    {ite.tag?<div className="tag">{ite.tag}</div>: <div></div>}
                                    <div className="avatar align-self-end">
                                        <img src={ite.avatar} className="card-img-top" alt="journal image" />
                                    </div>
                                </div>
                                <Link to="/journals/testJournal">
                                    <h5 className="card-title">{ite.cardTitle}</h5>
                                </Link>
                                <p className="card-text">{ite.cardText}</p>
                                <div className="action-btns-container d-flex align-items-center">
                                    <button href="#" className="active">
                                        <span className="icon icon-heart"></span>
                                        {ite.hearts}
                                    </button>
                                    <button href="#" className="">
                                        <span className="icon icon-comment"></span>
                                    </button>
                                    <button href="#" className="">
                                        <span className="icon icon-pin"></span>
                                    </button>
                                    <button href="#" className="">
                                        <span className="icon icon-share"></span>
                                    </button>
                                </div>
                            </div>
                            </div>
                        )
                    })
                }
             </div>
             <div className="d-flex justify-content-center mb-5">
                <button type="button" className="btn btn-outline" onClick={() => Navigate('/categories')}>See All</button>
             </div>
        </div>
    )
}

export default CategoriesSummary;