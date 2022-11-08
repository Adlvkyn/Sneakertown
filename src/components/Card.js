function Card() {
    return (
        <div className="card">
            <div className="favorite">
                <img src="/img/unsaved.svg" alt="unsaved" />
            </div>
            <img width={133} height={112} src="/img/sneakers/1.jpg" alt="sneakers" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="sneakersDescription">
                <div className="sneakersInfo">
                    <span>цена:</span>
                    <b>19990 тенге</b>
                </div>
                <button className="button">
                    <img width={11} height={11} src="/img/add.svg" alt="add" />
                </button>
            </div>
        </div>
    );
}

export default Card;