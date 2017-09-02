import React from 'react';

export default function PopUp(props) {
    let data = props

    let posterIMG = "http://image.tmdb.org/t/p/w500" + data.currentMovie.poster_path
    let title = data.currentMovie.original_title
    let details = data.currentMovie.overview
    let votes = data.currentMovie.vote_average  + "/10"
    let releaseDate = data.currentMovie.release_date

    return (
            <div className="pop-up-container">
                <div className="pop-up-image-container">
                    <img className="pop-up-image" src={posterIMG} />
            </div>
                <div className="pop-up-text-container">
                
                <div className="pop-up-header">
                <div>
                    <h1 className="pop-up-movie-title">{title}</h1>
                </div>
                <div>
                    <button className="close-button" onClick={props.onClose}>X</button>
                    </div>
                </div>    

                <div className="details">
                    {details}
                </div>
                <div className="release-votes">
                    <div className="original-release">
                        <p className="release-text">Original Release:</p>
                        <span className="green-detail">{releaseDate}</span>
                    </div>
                    <div>
                        <p className="vote-average">Vote Average:</p>
                        <span className="green-detail">{votes}</span>
                    </div>
                </div>
                
                </div>
            </div>
        )
}