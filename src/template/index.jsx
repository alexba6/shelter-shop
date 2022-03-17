import {IonMdCart} from "../icons/MdiLightCart";

import '../styles/template.css'
import {useHistory} from "react-router-dom";

export const Template = ({children}) => {
    const history = useHistory()

    return (
            <div id="app">
                <div className="header">
                    <div onClick={() => {
                        history.push('/')
                    }}>
                        <img src="https://seeklogo.com/images/B/bunker-logo-812A1F5510-seeklogo.com.gif" alt="bumker"/>
                    </div>
                    <div>
                        <h1>Nardine bunker</h1>
                    </div>
                    <div className="car-frame" onClick={() => {
                        history.push('/car')
                    }}>
                        <IonMdCart  />
                        {/*<div className="count-frame">*/}
                        {/*    <label>{}</label>*/}
                        {/*</div>*/}
                    </div>
                </div>
                <div className="content">
                    {children}
                </div>
            </div>
        )
}