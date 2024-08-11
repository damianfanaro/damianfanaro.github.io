import React, { useEffect, useState } from "react";

interface Article {
    title: string;
    url: string;
}

const Articles: React.FC = () => {
    const [articles, setArticles] = useState<Article[]>([]);

    useEffect(() => {
        // Aquí podrías integrar la API de LinkedIn o listar los artículos manualmente
        setArticles([
            { title: "Artículo 1", url: "https://linkedin.com/article1" },
            { title: "Artículo 2", url: "https://linkedin.com/article2" },
            // Agrega más artículos aquí
        ]);
    }, []);

    return (
        <section id="articles">
            <h2>My LinkedIn Articles</h2>
            <ul>
                {articles.map((article, index) => (
                    <li key={index}>
                        <a href={article.url} target="_blank">
                            {article.title}
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Articles;
