import {Container, List} from "reactstrap";
import why from "../images/why-kst.png";
import 'bootstrap-icons/font/bootstrap-icons.css';

export const WhyKST = () => {
    return (
        <div id="whyKst">
            <Container>
                <div style={{borderBottom: '2px solid #fbb034'}}/>
                <div className="d-flex justify-content-center mb-5 mt-5">
                    <div className="card" style={{background: 'transparent', border: 'none', width: '22rem'}}>
                        <img src={why} className="card-img-top" alt="..."/>
                    </div>
                </div>
                <List>
                    <li>Auxiliary team for operational or administrative support</li>
                    <li>Scaling for new or existing projects</li>
                    <li>Chat, phone or email Support</li>
                    <li>Transition of an existing team</li>
                    <li>Offshore staff size flexibility from one person (such as a virtual assistant) to a whole
                        team.</li>
                    <li>Eliminate the time and resource burden of active employee management, while also
                        reducing the turnover rate.</li>
                </List>
            </Container>
        </div>
    )
}