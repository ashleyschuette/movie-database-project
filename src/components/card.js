import React from 'react';

export default function Card (props) {
        let data = props.results

        let posterIMG = "http://image.tmdb.org/t/p/w342" + data.poster_path
        let title = data.original_title
    
    if (!data.poster_path) {
            posterIMG = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/No_image_available_400_x_600.svg/2000px-No_image_available_400_x_600.svg.png'
    }

    return (
        <div className="card-container" onClick={() => props.onCardClick(title)} >
                <div>
                    <img className="image-size" src={posterIMG} />
                </div>
                <h1 className="movie-title">{title}</h1>
                <p></p>
            </div>
        )
}
