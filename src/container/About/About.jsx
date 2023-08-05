import React, {useEffect, useState} from 'react';
import {motion} from "framer-motion";

import {AppWrap, MotionWrap} from "../../wrapper";
import './About.scss';

import {db} from '../../firebase';
import {collection, getDocs} from 'firebase/firestore';

const About = () => {
    const [abouts, setAbouts] = useState([]);

    useEffect(() => {
        const getAbouts = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "abouts"));
                setAbouts(querySnapshot.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id
                })));
            } catch (e) {
                console.log(e);
            }
        };
        getAbouts()
    }, []);


    return (<>
        <h2 className="head-text">I Know that <span>Good Development</span><br/> means <span>Good Business</span>
        </h2>

        <div className="app__profiles">
            {abouts.map((about, index) => (
                <motion.div
                    whileInView={{opacity: 1}}
                    whileHover={{scale: 1.1}}
                    transition={{duration: 0.5, type: 'tween'}}
                    className="app__profile-item"
                    key={about.title + index}
                >
                    <img src={about.imgUrl} alt="about.title"/>
                    <h2 className="bold-text"
                        style={{marginTop: 20}}>{about.title}</h2>
                    <p className="p-text"
                       style={{marginTop: 10}}>{about.description}</p>
                </motion.div>))}
        </div>
    </>)
}

export default AppWrap(
    MotionWrap(About, 'app_about'),
    'about',
    "app__whitebg"
);