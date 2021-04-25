import React, {useEffect, useState} from 'react';
import { NavLink, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {loadModal, sendComments, sendName} from "../redux/action";
import ReactLoading from 'react-loading';

function ModalWindow(props) {
    const params = useParams().id;
    const dispatch = useDispatch();
    const photos = useSelector(state => state.modal.items);
    const loading = useSelector(state => state.modal.loading);
    const [text, setText] = useState('');


    const [comments, setComments] = useState([
        {
            comments: 'Продаю бананы'
        }
    ]);


    const handleClick = () => {
        setComments([...comments, {
          comments: text
        }])
        setText('')
    }

    useEffect(() => {
            dispatch(loadModal(params))
    },[dispatch,params])


    return (
        params ? (
            <div className="modal_back">
                <div className={'modal_window'}>
                    {loading ? (
                            <div className="loading">
                                <ReactLoading type='spin' color='#0044ff' height={50} width={50}/>
                            </div>
                        )
                        :
                        (
                            <div className="feedback">
                                <div>
                                    <img src={photos.url} className="big_photo"/>
                                    <input type="text" className="input"
                                           placeholder="Ваше имя"
                                    />
                                    <input type="text" className="input"
                                           placeholder="Ваш комментарий"
                                           value={text}
                                           onChange={(e) => setText(e.target.value)}
                                    />
                                    <button className='add_comment'
                                            onClick={handleClick}
                                    >Оставить коментарий
                                    </button>
                                </div>
                                <div className="comments">
                                    {
                                        photos.comments.map(item => {
                                            return (
                                                <div key={item.id}>
                                                    <p>{item.text}</p>
                                                </div>
                                            )
                                        })
                                    }
                                    {comments.map(item => {
                                        return (
                                            <p>{item.comments}</p>
                                        )
                                    })}
                                </div>
                                <div className="btn">
                                    <NavLink to="/" activeClassName="selected">✖</NavLink>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        ) : ''
    );

}

export default ModalWindow;