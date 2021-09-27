import React from "react";
import ArticleCard from "../components/ArticleCard";
import Data from "../components/data.json";

function ArticleListing() {
  const articlesTitle = "Articles";
  return (
    <div className="PageWrapper">
      <h2 className="HeaderOneStyle ArticleListingHeader">{articlesTitle}</h2>

      {Data.map((article, key) => (
        <ArticleCard article={article} key={key} />
      ))}
    </div>
  );
}

export default ArticleListing;
