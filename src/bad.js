/**
 * Please, improve this component and fix all problems.
 *
 * What is important:
 * - design (extensibility, testability)
 * - code cleanliness, following best practices
 * - bugs
 * - consistency
 * - naming
 * - formatting
 *
 * Write your perfect code!
 */

import React, { useEffect, useState } from 'react';

function Card({title, text, target, linkTitle, href, rel, onClick, linkClassName}) {
  return (
    <div className="card">
        <div className="card__title">{title}</div>
        <div className="card__text">{text}</div>
        <a 
          className={`default-link card__link ${linkClassName}`}
          target={target}
          rel={rel}
          href={href}
          onClick={onClick}
        >
          {linkTitle}
        </a>
    </div>
  );
}

export default function Page () {
  const [cards, setCards] = useState([]);


  useEffect(() => {
    async function fetchPosts () {
      const data = await fetch('https://my-json-server.typicode.com/savayer/demo/posts');
      const json = await data.json();

      let updatedPosts = [];
      json.forEach((item) => {
        let newData = {
          id: item.id,
          title: item.title,
          link_title: item.link_title,
          link: item.link,
          text: item.body?.en.substr(0, 50) + '...',
        };
        updatedPosts.push(newData);
      });
      setCards(updatedPosts);
    }
  
    fetchPosts();
  }, []);

  function analyticsTrackClick(url) {
    // sending clicked link url to analytics
    console.log("analyticsTrackClick =>", url);
  }

  return (
    <div>
      { cards.map((item) => {
        return (
          <Card 
            key={item.id}
            title={item.title?.en}
            linkTitle={item.link_title}
            href={item.link}
            text={item.text}
            linkClassName={item.id === 1 ? 'card__link--red' : ''}
            target={item.id === 1 ? '_blank' : ''}
            onClick={() => analyticsTrackClick(item.link)} />
        );
      })}
    </div>
  );
}
