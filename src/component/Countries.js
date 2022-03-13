import ReactApexChart from "react-apexcharts";
import { useEffect, useState } from "react";
import axios from 'axios';
import Loading from './Loading';
import { Card, Container, Row, Col } from "react-bootstrap";
import styles from './Card.module.css';
import arrow from '../arrow.png'

export default function Countries(props){
    const [loading, setLoading] = useState(true);
    const [Data, setData] = useState([]);
    useEffect(()=>{
      axios.get('https://api.covid19api.com/total/dayone/country/'+props.country)
                .then(res =>{
                  setData(res.data);
                  setLoading(false);
                })
      },[props])

    //카드데이터
    const cardData = Data.reduce(function(acc, cur){
    const confirmed = cur.Confirmed;
    const active = cur.Active;
    const deaths = cur.Deaths;
    const recovered = cur.Recovered;
    const date = cur.Date;
    acc.push({confirmed, active, deaths, recovered, date})
      return acc;
    }, [])
    const cardConfirmed = cardData.map(function(item){
      return item.confirmed;
    })
    const cardActive = cardData.map(function(item){
      return item.active;
    })
    const cardDeaths = cardData.map(function(item){
      return item.deaths;
    })
    const cardRecovered = cardData.map(function(item){
      return item.recovered;
    })
    const cardDate = cardData.map(function(item){
      return item.date;
    })
    //차트데이터
    const arr = Data.reduce(function(acc, cur){
        const currentDate = new Date(cur.Date);
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const date = currentDate.getDate();
        const confirmed = cur.Confirmed;
        const active = cur.Active;
        const deaths = cur.Deaths;
        const recovered = cur.Recovered;
        if(date === 1){
          acc.push({year, month, date, confirmed, active, deaths, recovered, currentDate:cur.Date})
        }
      return acc;
    }, [])
    
    const confirmed = arr.map(function(item){
      return item.confirmed;
    })
    const recentConfirmed = cardConfirmed.slice(-9, -1);
    const getToday = recentConfirmed.map(function(item, index, array){
        const arr = array[index+1]-array[index];
      return arr
    })
    const recentMovement =getToday.slice(0,7);
    const active = arr.map(function(item){
      return item.active;
    })
    const deaths = arr.map(function(item){
      return item.deaths;
    })
    const recovered = arr.map(function(item){
      return item.recovered;
    })
    const currentDate = arr.map(function(item){
      return item.currentDate;
    })
    //차트
    const series1 = [{
        name: '확진자',
        data: confirmed
      }, {
        name: '격리자',
        data: active
      }];
      const series2 = [{
        name: '사망자',
        data: deaths
      }]
      const series3 = [{
        name: '일일 확진자',
        data: recentMovement
      }];
      const options = {
        chart: {
          height: 350,
          type: 'area',
          toolbar: {
            show: false}
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: currentDate
        },
        yaxis: {
          labels: {
            formatter: function (value) {
              return value/1000 + "K";
            }
          },
        },
        tooltip: {
          x: {
            format: 'yy/MM/dd'
          },
          y: {
            formatter: function(value) {
              return value
            }
          }
        },
      }
      const options2 = {
        chart: {
          height: 350,
          type: 'area',
          toolbar: {
            show: false}
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: cardDate.slice(-8, -1)
        },
        yaxis: {
          labels: {
            formatter: function (value) {
              return value/1000 + "K";
            }
          },
        },
        tooltip: {
          x: {
            format: 'yy/MM/dd'
          },
          y: {
            formatter: function(value) {
              return value
            }
          }
        },
      }

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
                                {cardConfirmed[cardConfirmed.length-2]}명
                                </Card.Text>
                                <Card.Text className={'today'}>
                                {cardConfirmed[cardConfirmed.length-2]-cardConfirmed[cardConfirmed.length-3]}<span><img className={styles.arrow} src={arrow} alt='arrow'/></span>
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
                                {cardDeaths[cardDeaths.length-2]}명
                                </Card.Text>
                                <Card.Text className={'today'}>
                                {cardDeaths[cardDeaths.length-2]-cardDeaths[cardDeaths.length-3]}<span><img className={styles.arrow} src={arrow} alt='arrow'/></span>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="item" lg="3" md="6">
                        <Card className={styles.card}>
                            <Card.Body>
                                <Card.Subtitle className={'sub'}>Active</Card.Subtitle>
                                <Card.Title className='title_nmb'>격리자</Card.Title>
                                <hr className={'line'}></hr>
                                <Card.Text className={'number'}>
                                {cardActive[cardActive.length-2]}명
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
                                <Card.Subtitle className={'sub'}>Recovered</Card.Subtitle>
                                <Card.Title className='title_nmb'>완치자</Card.Title>
                                <hr className={'line'}></hr>
                                <Card.Text className={'number'}>
                                {cardRecovered[cardRecovered.length-2]}명
                                </Card.Text>
                                <Card.Text className={'blank'}>
                                    &nbsp;
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            <Row>
              <Col className="item" md='12'>
                <Card className={styles.card}>
                  <Card.Body>
                    <Card.Subtitle className={'sub'}>Total Case Trend</Card.Subtitle>
                    <Card.Title className='title_nmb'>확진자 추이</Card.Title>
                    
                  </Card.Body>
                  <ReactApexChart className={styles.chart} options={options} series={series1} type="area" height={350} />        
                </Card>
              </Col>
            </Row>
            <Row>
              <Col className="item" md='12'>
                <Card className={styles.card}>
                <Card.Body>
                    <Card.Subtitle className={'sub'}>Recently Movement</Card.Subtitle>
                    <Card.Title className='title_nmb'>최근 동향</Card.Title>
                  </Card.Body>
                  <ReactApexChart className={styles.chart} options={options2} series={series3} type="area" height={350} />
                </Card>
              </Col>
            </Row>
            <Row>
              <Col className="item" md='12'>
                <Card className={styles.card}>
                <Card.Body>
                    <Card.Subtitle className={'sub'}>Death Trend</Card.Subtitle>
                    <Card.Title className='title_nmb'>사망자 추이</Card.Title>
                  </Card.Body>
                  <ReactApexChart className={styles.chart} options={options} series={series2} type="area" height={350} />
                </Card>
              </Col>
            </Row>
          </Container>}
        </>
    )
}