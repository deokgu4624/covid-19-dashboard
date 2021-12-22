const request = require('request')
const NAVER_CLIENT_ID     = 'fMLrMldIXwbezuzzp1MS'
const NAVER_CLIENT_SECRET = 'IA8UDKtPxe'
const option = {
  query  :'어벤져스', //이미지 검색 텍스트
  display:10, //가져올 이미지 갯수
}

request.get({
  uri:'https://openapi.naver.com/v1/search/movie.json', //xml 요청 주소는 https://openapi.naver.com/v1/search/image.xml
  qs :option,
  headers:{
    'X-Naver-Client-Id':NAVER_CLIENT_ID,
    'X-Naver-Client-Secret':NAVER_CLIENT_SECRET
  }
}, function(err, res, body) {
  let json = JSON.parse(body) //json으로 파싱
  console.log(json)
})