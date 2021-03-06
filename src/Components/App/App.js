import React, { useState } from "react";
import NavBar from "../NavBar/navBar.js";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import Home from "../Home/home.js";
import GitHub from "../../Icons/github-mark.svg";
import Linkedin from "../../Icons/linkedin.png";
import Gmail from "../../Icons/gmail.svg";
import Contact from "../Contact/contact.js";
import Resume from "../../PDF/Resume.pdf";
import Snackbar from "../Snackbars/Snackbars.js";

export default function App() {
    const [snackbar, setSnackbar] = useState({});
    const [timer, setTimer] = useState(null);

    const styles = {
        childrenText: {
            fontFamily: "Open Sans",
            fontWeight: 700,
            width: "100%",
            whiteSpace: "pre",
            fontSize: "1.8em",
            cursor: "pointer",
            textDecoration: "none",
            color: "white",
            textShadow:
                "-1px -1px 0 #000,  1px -1px 0 #000,-1px 1px 0 #000, 1px 1px 0 #000"
        },
        childrenImg: {
            minWidth: "24px",
            maxWidth: "32px",
            width: "3vmax",
            minHeight: "24px",
            maxHeight: "32px",
            Height: "3vmax"
        },
        icons: {
            display: "flex",
            flexWrap: "nowrap",
            justifyContent: "center"
        }
    };
    const icons = (
        <div style={styles.icons}>
            <a
                style={{ padding: 2 }}
                href="https://github.com/RyanCallahan312"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img style={styles.childrenImg} src={GitHub} alt="GitHub" />
            </a>
            <a
                style={{ padding: 2 }}
                href="https://www.linkedin.com/in/ryancallahan312/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img style={styles.childrenImg} src={Linkedin} alt="Linkedin" />
            </a>
            <a
                style={{ padding: 2 }}
                href="mailto:r1callahan@student.bridgew.edu"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img style={styles.childrenImg} src={Gmail} alt="Gmail" />
            </a>
        </div>
    );

    const addSnackbar = async props => {
        if (timer) {
            setTimer(clearTimeout(timer));
        }
        setSnackbar(props);
        setTimer(
            setTimeout(() => {
                setSnackbar({});
                setTimer(null);
            }, 2000)
        );
    };

    return (
        <div>
            <Switch basename={process.env.PUBLIC_URL}>
                <NavBar>
                    <Link style={styles.childrenText} to="/#title">
                        Home
                    </Link>
                    <Link style={styles.childrenText} to="/#projects">
                        Projects
                    </Link>
                    <a
                        style={styles.childrenText}
                        href={Resume}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Resume
                    </a>
                    <Link style={styles.childrenText} to="/contact">
                        Contact
                    </Link>
                    {icons}
                </NavBar>
                <Route
                    exact
                    path="/"
                    component={addSnackbar => <Home props={addSnackbar} />}
                />
                <Route
                    exact
                    path="/#title"
                    component={() => <Home addSnackbar={addSnackbar} />}
                />
                <Route
                    path="/#projects"
                    component={() => <Home addSnackbar={addSnackbar} />}
                />
                <Route
                    path="/contact"
                    component={() => <Contact addSnackbar={addSnackbar} />}
                />
            </Switch>

            <Snackbar message={snackbar.message} open={timer !== null} />
        </div>
    );
}
