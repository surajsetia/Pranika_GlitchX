export default function Footer() {
    return (
      <footer>
        <div className="container">
          <div className="footer-links">
            <a href="#">About Us</a>
            <a href="#">All Resources</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Contact</a>
          </div>
          
          <div className="newsletter">
            <h3>Get Weekly Support</h3>
            <p>Personalized tips based on your postpartum stage</p>
            <input type="email" placeholder="Your email address" />
            <button className="btn btn-primary">Subscribe</button>
          </div>
          
          <p className="copyright">© 2023 Bloom Postpartum Support. All rights reserved.</p>
        </div>
      </footer>
    );
  }