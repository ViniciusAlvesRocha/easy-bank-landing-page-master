import React from 'react';
import ImageCurrency from '../../images/image-currency.jpg';
import ImageRestaurante from '../../images/image-restaurant.jpg';
import ImagePlane from '../../images/image-plane.jpg';
import ImageConfetti from '../../images/image-confetti.jpg';
import './latest-articles-style-desktop.css';
import './style.css';

const LatestArticles = () => {
  return (
    <section className="latest-articles container">
      <h2 className="h2-style-default">Latest Articles</h2>
      <div className="articles">
      <div className="card-article">
        <img className="image-currency" src={ ImageCurrency } alt="image currency article" />
        <div className="container">
          <p className="name-author">By Clarice Robinson</p>
          <h3 className="h3-style-default">Receive money in any currency with no fees</h3>
          <p className="p-article-style-default">
            The world is getting smaller and we’re becoming more mobile. So why should you be 
            forced to only receive money in a single …
          </p>
        </div>
      </div>

      <div className="card-article">
        <img className="image-currency" src={ ImageRestaurante } alt="image currency article" />
        <div className="container">
          <p className="name-author">By Wilson Hutton</p>
          <h3 className="h3-style-default">Treat yourself without worrying about money</h3>
          <p className="p-article-style-default">
            Our simple budgeting feature allows you to separate out your spending and set 
            realistic limits each month. That means you …
          </p>
        </div>
      </div>

      <div className="card-article">
        <img className="image-currency" src={ ImagePlane } alt="image currency article" />
        <div className="container">
          <p className="name-author">By Wilson Hutton</p>
          <h3 className="h3-style-default">Take your Easybank card wherever you go</h3>
          <p className="p-article-style-default">
            We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
            while you’re abroad. We’ll even show you …
          </p>
        </div>
      </div>

      <div className="card-article">
        <img className="image-currency" src={ ImageConfetti } alt="image currency article" />
        <div className="container">
          <p className="name-author">By Claire Robinson</p>
          <h3 className="h3-style-default">Our invite-only Beta accounts are now live!</h3>
          <p className="p-article-style-default">
            After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
            It’s easy to request an invite through the site ...
          </p>
        </div>
      </div>
      </div>
    </section>
  );
}

export default LatestArticles;