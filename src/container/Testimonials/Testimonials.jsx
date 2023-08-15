import React, {useEffect, useState} from 'react';
import {motion} from 'framer-motion';
import {HiChevronLeft, HiChevronRight} from 'react-icons/hi';

import {AppWrap, MotionWrap} from '../../wrapper';
import {client, urlFor} from '../../client';
import './Testimonials.scss';
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../firebase";

const Testimonials = () => {

    const [brands, setBrands] = useState([]);
    const [testimonials, setTestimonials] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleClick = (index) => {
        setCurrentIndex(index);
    }

    useEffect(() => {
        const query = '*[_type == "testimonials"]';
        // const brandsQuery = '*[_type == "brands"]';

        /*client.fetch(query)
            .then((data) => {
                setTestimonials(data);
            })*/

        /*client.fetch(brandsQuery)
            .then((data) => {
                setBrands(data);
            })*/
    }, []);

    useEffect(() => {
        const getData = async () => {
            try {
                const brandsQuery = await getDocs(collection(db, "brands"));
                setBrands(brandsQuery.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id
                })));
                const testQuery = await getDocs(collection(db, "testimonials"));
                setTestimonials(testQuery.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id
                })));

            } catch (e) {
                console.log(e);
            }
        };
        getData()
    }, []);


    const test = testimonials[currentIndex];
    return (
        <>
            {/*{testimonials.length && (
                <>
                    <div className="app__testimonial-item app__flex">
                        <img src={test.imgurl} alt="testimonials"/>
                        <div className="app__testimonial-content">
                            <p className="p-text">{test.feedback}</p>
                            <div>
                                <h4 className="bold-text">{test.name}</h4>
                                <h5 className="p-text">{test.company}</h5>
                            </div>
                        </div>
                    </div>

                    <div className="app__testimonial-btns app__flex">
                        <div className="app__flex"
                             onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
                            <HiChevronLeft/>
                        </div>

                        <div className="app__flex"
                             onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
                            <HiChevronRight/>
                        </div>

                    </div>
                </>
            )}*/}

            <div className="app__testimonials-brands app__flex">
                {brands.map((brand) => (
                    <motion.div
                        whileInView={{opacity: [0, 1]}}
                        transition={{duration: 0.5, type: 'tween'}}
                        key={brand._id}
                    >
                        <img src={brand.imgUrl} alt={brand.name}/>
                    </motion.div>
                ))}
            </div>
        </>
    )
}

export default AppWrap(
    MotionWrap(Testimonials, 'app__testimonials'),
    'testimonials',
    "app__primarybg"
);


//3:41:02