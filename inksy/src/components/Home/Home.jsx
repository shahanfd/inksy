import Search from "../search/Search";

const cardData = [
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
]


const Home = () => {    

    return(
        <div className='home-comp'>
             <div className="journals-search-container mb-5">
                <Search
                    type="text"
                    placeholder="Search"
                />
             </div>
             <div className="journals-buttons-container d-flex justify-content-between mb-3">
                <button className="btn btn-primary"><span className="icon-Ellipse"></span>My Journals</button>
                <button className="btn btn-outline"><span className="icon-Ellipse"></span>Journals Followed</button>
                <button className="btn btn-primary"><span className="icon">+</span>Create Journals</button>
             </div>
             <div className="journals-container">
                {
                    cardData.map((ite,i)=>{
                        return(
                            <div className="card">
                            <img src={ite.img} className="card-img-top" alt="journal image" />
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between">
                                    {ite.tag?<div className="tag">{ite.tag}</div>: <div></div>}
                                    <div className="avatar align-self-end">
                                        <img src={ite.avatar} className="card-img-top" alt="journal image" />
                                    </div>
                                </div>
                                <h5 className="card-title">{ite.cardTitle}</h5>
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
        </div>
    )
}

export default Home;