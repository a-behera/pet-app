import styles from '../styles/styles.module.css';

const Display = ({ data }) => {
    return (
        <div className={styles.displayCard}>
            {data && (
                <>{data.animal == "default" ? (<p>Please Choose an Animal</p>) : (<>
                    {data.animal == "cat" ? (<>
                        <h2 className={styles.displayTitle}>{data.title}</h2>
                        <p>{data.fact}</p>

                    </>) : (<>
                        <h2 className={styles.displayTitle}>{data.title}</h2>
                        <img className={styles.displayImage} src={data.image} alt={data.title} />
                    </>)}
                </>)}</>

            )}
        </div>
    );
};

export default Display;

