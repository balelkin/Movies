function Footer() {
    return <footer className="page-footer blue lighten-1">
    <div className="container">
        <div className="row">
            <div className="col l6 s12">
                <h5 className="white-text"></h5>
                <br />
                <p className="grey-text text-lighten-4">"Forget all the reasons it won’t work and believe the one reason that it will."
                </p>
            </div>
            <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Contacts:</h5>
                <ul>
                    <li><a className="grey-text text-lighten-3" href="tel: +380683335467">+38-(068)-333-54-76</a></li>
                    <li><a className="grey-text text-lighten-3" href="mailto: balelkin@gmail.com">balelkinn@gmail.com</a></li>
                    <li><a className="grey-text text-lighten-3" href="https://www.facebook.com/balielov/" target="_blank">Facebook</a></li>
                    
                </ul>
            </div>
        </div>
    </div>
    <div className="footer-copyright">
        <div className="container">
            © 2021 Mykola Balielov
            <a className="grey-text text-lighten-4 right" href="https://github.com/balelkin">GitHub</a>
        </div>
    </div>
</footer>

}

export { Footer }