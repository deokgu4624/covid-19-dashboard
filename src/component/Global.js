
import { useState, useEffect } from "react"
import { Card, Container, Row, Col } from "react-bootstrap";
import styles from './Card.module.css'
import arrow from '../arrow.png'
import Table from './Table'
import Loading from "./Loading";


export default function Global(){   
    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        const axios = require('axios');
        async function getData(){
            const res1 = await axios.get('https://corona.lmao.ninja/v2/all?today=');
            setData1(res1.data);
            const res2 = await axios.get('https://corona.lmao.ninja/v2/countries?yesterday=&sort=cases');
            setData2(res2.data);
            setLoading(false);
        }
        getData();
    },[]);
    return(
        <>
            {loading ? <Loading /> :
            <Container className={styles.container}>
                <Row>
                    <Col className="item" lg="3" md="6">
                        <Card className={styles.card}>
                            <Card.Body>
                                <Card.Subtitle className={'sub'}>Confirmed Cases</Card.Subtitle>
                                <Card.Title className='title_nmb'>누적 확진자</Card.Title>
                                <hr className={'line'}></hr>
                                <Card.Text className={'number'}>
                                {data1['cases']}명
                                </Card.Text>
                                <Card.Text className={'today'}>
                                {data1['todayCases']}<span><img className={styles.arrow} src={arrow} alt='arrow'/></span>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="item" lg="3" md="6">
                        <Card className={styles.card}>
                            <Card.Body>
                                <Card.Subtitle className={'sub'}>Deaths</Card.Subtitle>
                                <Card.Title className='title_nmb'>누적 사망자</Card.Title>
                                <hr className={'line'}></hr>
                                <Card.Text className={'number'}>
                                {data1['deaths']}명
                                </Card.Text>
                                <Card.Text className={'today'}>
                                {data1['todayDeaths']}<span><img className={styles.arrow} src={arrow} alt='arrow'/></span>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="item" lg="3" md="6">
                        <Card className={styles.card}>
                            <Card.Body>
                                <Card.Subtitle className={'sub'}>Tests</Card.Subtitle>
                                <Card.Title className='title_nmb'>검사 수</Card.Title>
                                <hr className={'line'}></hr>
                                <Card.Text className={'number'}>
                                {data1['tests']}건
                                </Card.Text>
                                <Card.Text className={'blank'}>
                                    &nbsp;
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="item" lg="3" md="6">
                        <Card className={styles.card}>
                            <Card.Body>
                                <Card.Subtitle className={'sub'}>Affected Countries</Card.Subtitle>
                                <Card.Title className='title_nmb'>발생국</Card.Title>
                                <hr className={'line'}></hr>
                                <Card.Text className={'number'}>
                                {data1['affectedCountries']}개국
                                </Card.Text>
                                <Card.Text className={'blank'}>
                                    &nbsp;
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col className="item" md="12">
                        <Card className={styles.card}>
                            <Card.Body>
                                <Card.Subtitle className={'sub'}>Country Situation<span>{new Date().getMonth()+1+'.'+new Date().getDate()}업데이트</span></Card.Subtitle>
                                <Card.Title className={'title'}>국가별 현황</Card.Title>
                                <div className={styles.tableWrapper}>
                                    <hr className={styles.tableLine}></hr>
                                    <Table data={data2}/>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>}
        </>
    )
}