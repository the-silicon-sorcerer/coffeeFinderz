import styles from '../../styles/Header.module.css'

const Header = () => {
    return (
        <div className={styles.header}>
            <h1>Coffee Finderz</h1>
            <p>Find local coffee shops that you will love!</p>
            <button>Find local stores</button>
        </div>
    )
}

export default Header;