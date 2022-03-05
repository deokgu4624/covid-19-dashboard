# 코로나 19 대시보드
## 목차
1. [개요](#개요)
2. [과정](#과정)  
  2.1. [Axios로 데이터 받아오기](#axios로-데이터-받아오기)  
  2.2. [필요한 데이터 가공](#필요한-데이터-가공)  
  2.3. [차트에 데이터 넣기](#차트에-데이터-넣기)  
  2.3. [번역](#번역)  
3. [사용한 라이브러리](#사용한-라이브러리)
## 개요
React, Axios, 코로나 API를 사용한 코로나 현황 대시보드 사이트입니다.

![제목 없음](https://user-images.githubusercontent.com/37141223/147278046-f695d191-5496-4217-9764-418e2cd45156.png)
확진자 추이 차트입니다. `reduce`, `map`함수를 사용했습니다.
![제목 없음](https://user-images.githubusercontent.com/37141223/147287373-f9a4290a-a048-4cee-980e-f6db4c4f0123.png)
국가별 현황표 입니다. `reduce`, `map`함수를 사용했습니다.
![제목 없음](https://user-images.githubusercontent.com/37141223/147287926-f5bd47be-ed3f-4ec4-ade6-2b57dba2aa74.png)

## 과정
### Axios로 데이터 받아오기
### 필요한 데이터 가공
### 차트에 데이터 넣기
### 번역
```javascript
function App() {
  const country = ['kr', 'us', 'in', 'br', 'ru', 'fr', 'uk', 'tr'];
  return (
    <BrowserRouter>
      <div className="App">
      <div className='background'></div>
      <Header />
        <Notice />
        <Switch>
          <Route exact path={process.env.PUBLIC_URL+'/'}>
            <Redirect to='kr' />
          </Route>
          {country.map(function(item){
            return (
              <Route key={item} path={process.env.PUBLIC_URL+'/'+item}>
                <Countries country={item} />
              </Route>
            )
          })}
          <Route path={process.env.PUBLIC_URL+'/global'}>
            <Global />
          </Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
```

`react-router`를 사용하여 `<Header />`와 `<Notice />`부분은 바뀌지 않고 `<Switch />` 안에 있는 것만 바뀌도록 하였습니다. 

```javascript
{country.map(function(item){
  return (
    <Route key={item} path={process.env.PUBLIC_URL+'/'+item}>
      <Countries country={item} />
    </Route>
  )
})}
```

이 부분은 <Countries /> 가 형식은 똑같고 데이터만 다르기 때문에 `map()`을 사용하여 반복을 해주고 `item`으로 주소의 끝부분만 `prop`로 전달하였습니다.
예를 들어 주소가 'https://api.covid19api.com/total/dayone/country/' 일 때 맨 뒤에 국가코드를 붙여주면 해당 국가의 데이터를 불러올 수 있기 때문입니다.

## Countries.js

```javascript
const [loading, setLoading] = useState(true);
const [Data, setData] = useState([]);
useEffect(()=>{
const fetchEvents = async ()=>{
  await axios
          .get('https://api.covid19api.com/total/dayone/country/'+props.country)
          .then(res =>{
            setData(res.data);
            setLoading(false);
          })
}
fetchEvents();
}, [props])
```

`axios`를 사용해서 api주소에서 데이터를 받아왔고, `useState`를 사용해서 `Data`에 데이터 배열을 담았습니다. `setLoading`은 데이터를 아직 다 불러오지 못해서 대시보드는 있는데 숫자만 없는 상황을 막기 위해서 만들어놨습니다. `true`일 때는 로딩스피너가 돌아가고 대시보드가 표시되지 않습니다.

```javascript
const cardData = Data.reduce(function(acc, cur){
const confirmed = cur.Confirmed;
const active = cur.Active;
const deaths = cur.Deaths;
const recovered = cur.Recovered;
const date = cur.Date;
acc.push({confirmed, active, deaths, recovered, date})
  return acc;
}, [])
```

받아온 데이터를 가공하는 부분입니다. 쓸모없는 데이터는 버리고 필요한 부분만 가져오기 위해서 `reduce()`를 사용해서 데이터 내 처음부터 마지막날 까지 순회하여 `Confirmed`, `Active`, `Deaths`, `Recovered`, `Date` 값을 가져오며 `push`를 사용하여 그 값들로 채워진 배열을 만들었습니다.

```javascript
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
```

만든 배열에서 `confirmed`, `active`, `deaths` 등 사용하기 편리하게 항목별로 분리하여 배열을 만들었습니다.

```javacript
<Card.Text className={'number'}>
  {cardConfirmed[cardConfirmed.length-2]}명
</Card.Text>
```

이런식으로 만들어놓은 배열 중에서 필요한 순서를 골라서 넣었습니다.

```javascript
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
```

똑같은 방식으로 차트에 넣을 데이터를 가공하였습니다. 차트에는 1달 간격의 데이터가 필요했기때문에 조건문을 사용하여 날짜가 1일때만 `push`하도록 했습니다.

```javascript
<ReactApexChart className={styles.chart} options={options} series={series1} type="area" height={350} />
```

```javascript
const series1 = [{
  name: '확진자',
  data: confirmed
}, {
  name: '격리자',
  data: active
}];
```

배열형식의 데이터를 `data`에 그대로 넣어주었고 옵션은 딱히 건드리지 않았습니다.


## Global.js

```javascript
const [data1, setData1] = useState([]);
const [data2, setData2] = useState([]);
const [loading, setLoading] = useState(true);
useEffect(()=>{
    const fetchEvents = async ()=>{
        await axios
                    .all([axios.get('https://corona.lmao.ninja/v2/all?today='), axios.get('https://corona.lmao.ninja/v2/countries?yesterday=&sort=cases')])
                    .then(
                        axios.spread((res1, res2) => {
                            setData1(res1.data);
                            setData2(res2.data);
                            setLoading(false);
                        }))
    }
    fetchEvents();
}, []);
```

전세계 현황은 한 곳에서 데이터를 가져오는게 아니기때문에 `spread`를 통해서 데이터를 `data1`과 `data2`에 각각 넣어주었습니다. 방식은 `Countries.js`와 동일하므로 생략하겠습니다.

## Table.js



```javascript
<div className={styles.countryName}>
    <div className={styles.category}>국가명</div>
    {props.data.map(el => {
        return (<div key={el.country} className={styles.country}>
            {t(el.country)}
        </div>)
    })}
</div>
```

`Global.js`에서 `props`로 받아온 data중에서 수많은 국가명을 나열하기 위해 `map()`으로 반복시켜 `<div />`를 반환하는식으로 만들었습니다.

```javascript
"USA": '미국',
"India": '인도',
"Brazil": '브라질',
"Russia": '러시아',
"France": '프랑스',
"UK": '영국',
"Turkey": '터키',
"Argentina": '아르헨티나',
"Colombia": '콜롬비아',
"Spain": '스페인',
"Italy": '이탈리아',
"Iran": '이란',
"Indonesia": '인도네시아',
"Germany": '독일',
```

데이터의 국가명은 영어였기때문에 `i18next`로 한글명을 대응시켜주었습니다.
## 사용한 라이브러리
`react` `axios` `react-router-dom` `react-bootstrap` `apexcharts` `i18next`
