import "./style.css";

const NewsLetter = () => {
  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="newsletter-content">
          <h2>Subscribe To Our Newsletter</h2>
          <p>
            Subscribe to our newsletter to stay updated with our latest news
          </p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter Your Email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
