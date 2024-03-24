/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import NewsItem from './NewsItem'
import Loader from './Loader';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState } from 'react';
import { useEffect } from 'react';

export default function News(props) {
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    document.title = `News Monkey - ${props.category.charAt(0).toUpperCase() + props.category.slice(1)} News`;

    const fetchArticles = async () => {
        await props.setProgress(10)
        let url = await `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}`
        // let url = await `https://saurav.tech/NewsAPI/top-headlines/category/${props.category.toLowerCase()}/${props.country.toLowerCase()}.json`
        await props.setProgress(50)
        let response = await fetch(url);
        let parsedData = await response.json();
        await setArticles(articles.concat(parsedData.articles))
        await setTotalResults(parsedData.totalResults)
        await props.setProgress(100);
    }


    const fetchMoreArticles = async () => {
        props.setRefreshThemeElements(page)
        const nextPage = page + 1;
        let url = await `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${nextPage}`
        // let url = await `https://saurav.tech/NewsAPI/top-headlines/category/${props.category.toLowerCase()}/${props.country.toLowerCase()}.json`
        let response = await fetch(url);
        let parsedData = await response.json();
        await setArticles(articles.concat(parsedData.articles))
        await setPage(nextPage)
        props.setRefreshThemeElements(page + 1)
    }

    useEffect(() => {
        fetchArticles();
    }, []);
    return (
        <>
            <div className="container text-center" style={{ marginTop: "75px" }}><h1 className="headingTitle">News Monkey - {props.category.charAt(0).toUpperCase() + props.category.slice(1)} News</h1></div>
            <div className="container mb-4">
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreArticles}
                    hasMore={articles.length < totalResults}
                    loader={<Loader />}
                >
                    <div className="row container" style={{ width: "100%", display: "flex", justifyContent: "space-evenly", gap: "5px", margin: "0px", padding: "0px" }}>
                        {
                            articles && articles.map((news) => {
                                if (news.title && news.description && news.url && news.urlToImage) {
                                    let reversedTitle = (news.title).split("").reverse().join("");
                                    let newTitle = reversedTitle.slice(reversedTitle.indexOf("-") + 2).split("").reverse().join("");
                                    return (
                                        <NewsItem key={news.url} title={newTitle + "..."} description={news["description"] + "..."} url={news["url"]} image={news["urlToImage"]} />
                                    )
                                }
                                else {
                                    return null;
                                }
                            })}
                    </div>
                </InfiniteScroll>
            </div>
        </>
    )
}

News.defaultProps = {
    category: "general",
    country: "in"
}

News.propTypes = {
    category: PropTypes.string,
    country: PropTypes.string,
}
