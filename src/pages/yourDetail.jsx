import {Col, Container, FormGroup, Input, Label, List, Row} from "reactstrap";
import quote from "../images/quote.png";
import requirement from "../images/requirment.png";
import contact_us from "../images/contact_us.png";
import '../styles/form.css';


export const YourDetail = () => {
    return (
        <div id="requirement">
            <Container>
                <div className="d-flex justify-content-center mb-5 mt-5">
                    <div className="card" style={{background: 'transparent', border: 'none', width: '35rem'}}>
                        <img src={quote} className="card-img-top" alt="..."/>
                    </div>
                </div>
                <Row className="d-flex justify-content-center align-items-center">
                    <Col lg={6} md={12} sm={12}>
                        <h4>Requirements</h4>
                        <FormGroup>
                            <Input type="textarea" placeholder="write a message" className="rounded-0"
                                   style={{height: '420px', borderColor: '#fbb034'}}></Input>
                        </FormGroup>
                    </Col>
                    <Col lg={6} md={12} sm={12}>
                        <h4>Your Detail</h4>
                        <FormGroup>
                            <Label>Name</Label>
                            <Input className="form-control" placeholder="Name here" type="text"></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label>Email</Label>
                            <Input className="form-control" placeholder="Your email" type="email"></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label>Contact Number</Label>
                            <Input className="form-control" placeholder="Your contact no" type="text"></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label>Company Name</Label>
                            <Input className="form-control" placeholder="Company name" type="text"></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label>How did you hear about us?</Label>
                            <Input type="text"></Input>
                        </FormGroup>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}