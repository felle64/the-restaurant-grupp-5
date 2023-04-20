import "./Footer.css"
export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-content-left">
                    <h3>THI RESTUARNT</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                        euismod, nisl ut aliquam aliquam, nunc nisl aliquet nisl, eget
                    </p>
                </div>
                <div className="footer-content-right">
                    <h3>Location:</h3>
                    <p>1234 Street Name</p>
                    <p>City, ST 12345</p>
                    <p>Phone:123 456 789</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2021 THI RESTUARNT</p>
            </div>
        </footer>
    );
};



