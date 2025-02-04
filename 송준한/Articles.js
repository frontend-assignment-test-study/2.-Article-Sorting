import React from "react";

function Articles({articles = []}) {
    return (
        <div className="card w-50 mx-auto">
            <table>
                <thead>
                <td>Title</td>
                <td>Upvotes</td>
                <td>Date</td>
                </thead>
                <tbody>
                {articles.map((articles, index) => (
                    <tr data-testid="article" key={index}>
                        <td data-testid="article-title">{article.title}</td>
                        <td data-testid="article-upvotes">{article.upvotes}</td>
                        <td data-testid="article-date">{article.date}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}