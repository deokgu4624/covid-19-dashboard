import { Card, Container, Row, Col } from "react-bootstrap";
import styles from './Card.module.css'
import { ReactComponent as Girl} from '../girl.svg'

export default function Notice(){
    return(
        <>
            <Container className={styles.notice}>
                <Row>
                    <Col className="item" lg="6">
                        <Card className={styles.card}>
                            <Card.Body>
                                <Card.Subtitle className={'sub'}>Notice</Card.Subtitle>
                                <Card.Title className='title'>공지사항</Card.Title>
                                <Card.Text className={styles.desc}>
                                한-미 감염병 대응 협력체계 강화 목적으로 국내 도입
                                품질검사 등 관련 절차 거쳐 1회 접종으로 완료되는 이점 살려 신속하게 접종
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="item" lg="6">
                        <Card className={styles.card}>
                            <Card.Body>
                                <Girl className={styles.img} />
                                <div className={styles.wrapper}>
                                    <Card.Subtitle className={'sub'}>Social Distance</Card.Subtitle>
                                    <Card.Title className='title'>사회적 거리두기 4단계</Card.Title>
                                    <Card.Text className={styles.desc}>
                                    외출은 가급적 자제해 주시길 바랍니다.
                                    </Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}