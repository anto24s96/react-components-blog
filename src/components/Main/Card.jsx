import styles from "./Card.module.css";
import newPostImg from "../../assets/newPost.jpg";
import Button from "./Button";
import PropTypes from "prop-types";

const Card = ({ title, description }) => {
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <img src={newPostImg} alt={title} className={styles.image} />
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
                <Button />
            </div>
        </div>
    );
};

//validazione props
Card.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default Card;
