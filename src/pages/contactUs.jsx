import contact_us from "../images/contact_us.png";
import {Container, FormGroup, Label} from "reactstrap";

export const ContactUs = () => {
    return (
        <div id="contactus">
            <div className="d-flex justify-content-center mb-5 mt-5">
                <div className="card" style={{background: 'transparent', border: 'none', width: '30rem'}}>
                    <img src={contact_us} className="card-img-top" alt="..."/>
                </div>
            </div>
            <Container style={{marginLeft:"450px"}}>
                <FormGroup>
                    <Label>Phone/Whatsapp</Label>
                    <Label className="ms-5">+1 (913) 392-5021</Label>
                </FormGroup>
                <FormGroup>
                    <Label>Phone/Whatsapp</Label>
                    <Label className="ms-5">+92 (345) 501-0258</Label>
                </FormGroup>
                <FormGroup>
                    <Label>Email</Label>
                    <Label className="ms-5">info@kstalliances.com</Label>
                </FormGroup>
            </Container>
            <div className="text-center">
                <Container className="d-flex justify-content-center mb-3">
                    <div style={{borderBottom: '2px solid #fbb034', width: '400px'}}></div>
                </Container>
                <p>We look forward to exceeding your expectations</p>
                <Container className="d-flex justify-content-center mb-5">
                    <div style={{borderBottom: '2px solid #fbb034', width: '400px'}}></div>
                </Container>
            </div>
        </div>
    )
}