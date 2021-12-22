import styles from './Card.module.css'
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next"

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
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
            "Mexico": '멕시코',
            "Poland": '폴란드',
            "South Africa": '남아프리카 공화국',
            "Ukraine": '우크라이나',
            "Peru": '페루',
            "Netherlands": '네덜란드',
            "Iraq": '이라크',
            "Philippines": '필리핀',
            "Czechia": '체코',
            "Chile": '칠레',
            "Canada": '캐나다',
            "Bangladesh": '방글라데시',
            "Malaysia": '말레이시아',
            "Belgium": '벨기에',
            "Japan": '일본',
            "Sweden": '스웨덴',
            "Pakistan": '파키스탄',
            "Romania": '루마니아',
            "Portugal": '포르투갈',
            "Israel": '이스라엘',
            "Thailand": '태국',
            "Hungary": '헝가리',
            "Jordan": '요르단',
            "Morocco": '모로코',
            "Switzerland": '스위스',
            "Nepal": '네팔',
            "Serbia": '세르비아',
            "UAE": '아랍 에미리트',
            "Kazakhstan": '카자흐스탄',
            "Austria": '오스트리아',
            "Tunisia": '튀니지',
            "Lebanon": '레바논',
            "Saudi Arabia": '사우디아라비아',
            "Greece": '그리스',
            "Cuba": '쿠바',
            "Ecuador": '에콰도르',
            "Bolivia": '볼리비아',
            "Georgia": '조지아',
            "Belarus": '벨라루스',
            "Paraguay": '파라과이',
            "Panama": '파나마',
            "Bulgaria": '불가리아',
            "Costa Rica": '코스타리카',
            "Guatemala": '과테말라',
            "Kuwait": '쿠웨이트',
            "Slovakia": '슬로바키아',
            "Uruguay": '우루과이',
            "Croatia": '크로아티아',
            "Azerbaijan": '아제르바이잔',
            "Myanmar": '미얀마',
            "Sri Lanka": '스리랑카',
            "Dominican Republic": '도미니카 공화국',
            "Denmark": '덴마크',
            "Ireland": '아일랜드',
            "Palestine": '팔레스타인',
            "Venezuela": '베네수엘라',
            "Honduras": '온두라스',
            "Oman": '오만',
            "Lithuania": '리투아니아',
            "Ethiopia": '에티오피아',
            "Egypt": '이집트',
            "Libyan Arab Jamahiriya": '리비아',
            "Vietnam": '베트남',
            "Bahrain": '바레인',
            "Moldova": '몰도바',
            "Slovenia": '슬로베니아',
            "Armenia": '아르메니아',
            "Qatar": '카타르',
            "S. Korea": '대한민국',
            "Kenya": '케냐',
            "Bosnia": '보스니아',
            "Zambia": '잠비아',
            "Algeria": '알제리',
            "Mongolia": '몽골',
            "Nigeria": '나이지리아',
            "Kyrgyzstan": '키르기스스탄',
            "Macedonia": '마케도니아',
            "Afghanistan": '아프가니스탄',
            "Norway": '노르웨이',
            "Uzbekistan": '우즈베키스탄',
            "Latvia": '라트비아',
            "Mozambique": '모잠비크',
            "Estonia": '에스토니아',
            "Botswana": '보츠와나',
            "Albania": '알바니아',
            "Namibia": '나미비아',
            "Zimbabwe": '짐바브웨',
            "Finland": '핀란드',
            "Ghana": '가나',
            "Cyprus": '키프로스',
            "Montenegro": '몬테네그로',
            "Uganda": '우간다',
            "China": '중국',
            "El Salvador": '엘살바도르',
            "Cambodia": '캄보디아',
            "Cameroon": '카메룬',
            "Rwanda": '르완다',
            "Maldives": '몰디브',
            "Luxembourg": '룩셈부르크',
            "Senegal": '세네갈',
            "Singapore": '싱가포르',
            "Malawi": '말라위',
            "Jamaica": '자메이카',
            "DRC": '콩고 민주 공화국',
            "Côte d'Ivoire": '코트디부아르',
            "Angola": '앙골라',
            "Réunion": '레위니옹',
            "Madagascar": '마다가스카르',
            "Trinidad and Tobago": '트리니다드 토바고',
            "Fiji": '피지',
            "Australia": '호주',
            "Sudan": '수단',
            "Swaziland": '에스와티니',
            "Malta": '몰타',
            "Cabo Verde": '카보베르데',
            "Guadeloupe": '과들루프',
            "French Guiana": '프랑스령 기아나',
            "Mauritania": '모리타니',
            "French Polynesia": '프랑스령 폴리네시아',
            "Guinea": '기니',
            "Martinique": '마르티니크',
            "Suriname": '수리남',
            "Syrian Arab Republic": '시리아',
            "Gabon": '가봉',
            "Guyana": '가이아나',
            "Haiti": '아이티',
            "Mayotte": '마요테',
            "Seychelles": '세이셸',
            "Papua New Guinea": '파푸아뉴기니',
            "Togo": '토고',
            "Somalia": '소말리아',
            "Bahamas": '바하마',
            "Tajikistan": '타지키스탄',
            "Taiwan": '타이완',
            "Andorra": '안도라',
            "Belize": '벨리즈',
            "Mali": '말리',
            "Curaçao": '퀴라소',
            "Lesotho": '레소토',
            "Burkina Faso": '부르키나파소',
            "Congo": '콩고',
            "Aruba": '아루바',
            "Timor-Leste": '티모르 레스테',
            "Hong Kong": '홍콩',
            "Djibouti": '지부티',
            "Central African Republic": '중앙아프리카 공화국',
            "South Sudan": '남수단',
            "Nicaragua": '니카라과',
            "Lao People's Democratic Republic": '라오스',
            "Channel Islands": '채널 제도',
            "Burundi": '부룬디',
            "Iceland": '아이슬란드',
            "Benin": '베냉',
            "Equatorial Guinea": '적도 기니',
            "Gambia": '감비아',
            "Yemen": '예멘',
            "Eritrea": '에리트레아',
            "Sierra Leone": '시에라리온',
            "Saint Lucia": '세인트루시아',
            "Isle of Man": '맨 섬',
            "Niger": '니제르',
            "Mauritius": '모리셔스',
            "Liberia": '라이베리아',
            "Gibraltar": '지브롤터',
            "San Marino": '산마리노',
            "Guinea-Bissau": '기니비사우',
            "Chad": '차드',
            "Barbados": '바베이도스',
            "Comoros": '코모로',
            "Sint Maarten": '신트마르텐',
            "Liechtenstein": '리히텐슈타인',
            "Monaco": '모나코',
            "New Zealand": '뉴질랜드',
            "Saint Martin": '생마르탱',
            "Bermuda": '버뮤다',
            "Bhutan": '부탄',
            "Turks and Caicos Islands": '투르크카이코스 제도',
            "British Virgin Islands": '영국령 버진아일랜드',
            "Sao Tome and Principe": '상투메와 프린시페',
            "Saint Vincent and the Grenadines": '세인트빈센트 그레나딘',
            "Caribbean Netherlands": '카리브 네덜란드',
            "Antigua and Barbuda": '앤티가 바부다',
            "Tanzania": '탄자니아',
            "St. Barth": '생바르텔레미',
            "Faroe Islands": '페로 제도',
            "Dominica": '도미니카',
            "Brunei": '브루나이',
            "Diamond Princess": '다이아몬드 프린세스호',
            "Saint Kitts and Nevis": '세인트키츠 네비스',
            "Cayman Islands": '케이맨 제도',
            "Wallis and Futuna": '왈리스와 후투나',
            "Greenland": '그린란드',
            "Grenada": '그레나다',
            "New Caledonia": '뉴칼레도니아',
            "Anguilla": '앵귈라',
            "Falkland Islands (Malvinas)": '포클랜드 제도',
            "Macao": '마카오',
            "Saint Pierre Miquelon": '생피에르 미켈롱',
            "Holy See (Vatican City State)": '교황청',
            "Montserrat": '몬트세랫',
            "Solomon Islands": '솔로몬 제도',
            "Western Sahara": '서사하라',
            "MS Zaandam": 'MS 잔담호',
            "Marshall Islands": '마셜 제도',
            "Vanuatu": '바누아투',
            "Samoa": '사모아',
            'Saint Helena': '세인트헬레나',
            "Micronesia": '미크로네시아'
          }
      }
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });

export default function Table(props){
    const [t, i18n] = useTranslation();

    return(
        <>  
            <div className={styles.countryName}>
                <div className={styles.category}>국가명</div>
                {props.data.map(el => {
                    return (<div key={el.country} className={styles.country}>
                        {t(el.country)}
                    </div>)
                })}
            </div>
            <div className={styles.cases}>
                <div className={styles.category}>확진자</div>
                {props.data.map(el => {
                    return (<div key={el.country} className={styles.country}>
                        {el.cases}
                    </div>)
                })}
            </div>
            <div className={styles.deaths}>
                <div className={styles.category}>사망자</div>
                {props.data.map(el => {
                    return (<div key={el.country} className={styles.country}>
                        {el.deaths}
                    </div>)
                })}
            </div>
            <div className={styles.active}>
                <div className={styles.category}>격리자</div>
                {props.data.map(el => {
                    return (<div key={el.country} className={styles.country}>
                        {el.active}
                    </div>)
                })}
            </div>
            <div className={styles.recovered}>
                <div className={styles.category}>완치자</div>
                {props.data.map(el => {
                    return (<div key={el.country} className={styles.country}>
                        {el.recovered}
                    </div>)
                })}
            </div>
            <div className={styles.critical}>
                <div className={styles.category}>치명률</div>
                {props.data.map(el => {
                    return (<div key={el.country} className={styles.country}>
                        {Math.floor(el.deaths / el.cases * 1000)/10}%
                    </div>)
                })}
            </div>
        </>
    )
}