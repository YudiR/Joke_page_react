import React from "react";
import { Badge, Card, Container, Col, Row } from "react-bootstrap";
import { connect } from "react-redux";

function layout(props) {
  const colour = props.playerOne === props.name ? 'primary' : 'danger'
  return (
    <div
      style={{
       
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Container>
        <Row>
            <Col md={{ span: 12, offset: 0 }}>
          <h1>
          {/* style={{ width: "1050px" }} */}
            <Badge variant="primary">
              {props.title}
            </Badge>
            <Badge style={{marginLeft:'2.5vh'}}variant={colour}>
              {props.name}
            </Badge>
          </h1>
          </Col>
        </Row>

        <Row>
          <Col md={{ span: 11, offset: 0 }}>
            <Card>
              <h3>
                <Card.Body style={{  }}>
                  {props.body}
                </Card.Body>
                
              </h3>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    playerOne: state.forms.playerOneName
  }
}
export default connect(mapStateToProps)(layout);
