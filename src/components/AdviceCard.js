import divider from '../images/pattern-divider-desktop.svg'
import '../stylesheets/AdviceCard.css'

function adviceCard ( {advice} ) {
    return (
        <div className="advice-card">
            <h1 className="advice-id">ADVICE #{advice.id}</h1>
            <p className="advice-text">
                "{advice.advice}"
            </p>
            <img className='divider-icon' src={divider} alt="divider icon"></img>
        </div>
    );
}

export default adviceCard;