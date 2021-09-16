import React from 'react'

export default function ArticleContent({title, image, children, ...rest}) {
    return (
        <article className="article">
            <div className={image ? "article-content" : "article-content article-content__max"}>
                <h3 className="article-content__title">{title}</h3>
                {children}
            </div>
            {
                image &&  <div className="article-content_image">
                <img className="article-image" src={image} alt={title} {...rest} />
            </div>
            }
        </article>
    )
}
