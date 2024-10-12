import Card from "./Card";
import stylesApp from "../../App.module.css";
import data from "../../data/cardsData.json";

const Main = () => {
    const cardContainer = {
        display: "flex",
        flexWrap: "wrap",
        gap: "16px",
    };

    return (
        <main className={stylesApp.main}>
            <div style={cardContainer}>
                {data.map((card) => (
                    <Card
                        key={card.id}
                        title={card.title}
                        description={card.description}
                    />
                ))}
            </div>
        </main>
    );
};

export default Main;
