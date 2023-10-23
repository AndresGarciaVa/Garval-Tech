import "./navbar.scss"

const navbar = () => {
  return (
    <div className="navbar">
        {/* Sidebar */}
        <div className="wrapper">
            <span>Garval Technologies</span>
            <div className="social">
                <a href="#"><img src="/facebook.png" alt="Facebook" /></a>
                <a href="#"><img src="/instagram.png" alt="Instagram"/></a>
                <a href="#"><img src="/tiktok.png" alt="Tiktok" /></a>

            </div>
        </div>
    </div>
  )
}

export default navbar
