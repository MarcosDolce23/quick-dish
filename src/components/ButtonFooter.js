import './ButtonFooter.css';

import { Link, useRouteMatch } from 'react-router-dom';

function ButtonFooter({ label, to, activeOnlyWhenExact, onClickFooter, imagen }) {
    let match = useRouteMatch({
        path: to,
        exact: activeOnlyWhenExact
    });

    return (
        <Link to={to} onClick={onClickFooter}>
            <div className={match ? "button-img-active button-footer" : "button-footer"}>
                <img src={imagen} alt={label} />
                <div className="text-button-footer">{label}</div>
            </div>
        </Link>
    );
}

export default ButtonFooter;