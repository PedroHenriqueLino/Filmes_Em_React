import './SelectedCategory.css';

const SelectedCategory = ({ category, onClick, active }) => {

    return (
        <div className='category-btn'>
            <button
                className={active ? "active" : ""}
                onClick={onClick}
            >{category}</button>
        </div>
    )
}

export default SelectedCategory