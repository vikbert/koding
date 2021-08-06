import classNames from 'classnames';
import './index.css';
import SvgClose from './SvgClose';

type PropsT = {
    hide: any;
    visible: boolean;
    children: any;
};

export default function Popup(props: PropsT) {
    return (
        <>
            <div className={classNames('popup-overlay', {'scale-in-ver-center': props.visible})}>
                <div className="close-icon" onClick={() => props.hide()}>
                    <SvgClose width={40} height={40}/>
                </div>
                {props.children}
            </div>
        </>
    );
}
