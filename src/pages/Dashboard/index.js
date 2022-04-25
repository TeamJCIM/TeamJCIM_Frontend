import React, { useState, useEffect, useRef } from 'react';
import {Link} from 'react-router-dom';

//Navigation
import Sidebar from '../../components/Navigation/Sidebar';
import Topbar from '../../components/Navigation/Topbar';

import CardInfo from '../../components/Cards/Info';
import ChartNow from '../../components/Charts/Now';
import PageHeading from '../../components/PageHeading';

// axios
import axios from 'axios';

// class Dashboard extend Component
const Dashboard = () => {
  /* componentWillMount() {
    document.getElementById('body').className = 'page-top'
  } */

  // 요금액, 예측액, 안전, IOT
  const [iotData, setIotData] = useState()          // 사용량
  const [predictData, setPredictData] = useState()  // 예측량
  const [iotStatus, setIotStatus] = useState()    // iot state
  const [stateName, setStateName] = useState()      // iot state name (danger, warning)

  

  const [electricData, setElectricData] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])

  // (String) 오늘 날짜 반환
  let today = new Date();
  let time = {
    year: today.getFullYear(),
    month: today.getMonth() + 1,
    date: today.getDate(),
  }
  let timestring = `${time.year}-${time.month}-${time.date}`;
  
  const [iotNum, setIotNum] = useState(1227564000)
  const [date, setDate] = useState('2021-09-09')
  let postIot = {
    IotNum: iotNum,
    Date: date,
  }

  // 렌더링 될 때마다 실행
  useEffect(() => {
    document.getElementById('body').className = 'page-top';

    // '/api/overview/1227564000/2021-09-09'
    axios.get(`/api/overview/${postIot.IotNum}/${postIot.Date}`,)
    .then((response) => {
      // console.log(postIot)
      // console.log('response data : ', response.data.data)
      // console.log(response.data.data[2].AlarmVoltage)

      // 전력조회카드 데이터 GET
      if (response.data.data[0][0]) {
        setIotData(response.data.data[0][0].IotData)
      } else {
        setIotData(0)
      }

      // 전력예측카드 데이터 GET
      // setPredictData(response.data.data[1])
      const func = ((input) => {
        let answer=''
        for(let x of input) {
          if (!isNaN(x)) answer += x
        }

        return answer
      })
      setPredictData(func(response.data.data[1]))

      // 안전지수카드 데이터 GET
      if (response.data.data[2].AlarmVoltage === 4
        || response.data.data[2].AlarmElectric === 2
        || response.data.data[2].AlarmLeakage === 2
        || response.data.data[2].AlarmArc === 1
        || response.data.data[2].AlarmTemperature === 1) {
        setIotStatus('danger')
        setStateName('Danger')
      } else if (response.data.data[2].AlarmVoltage === 1
        || response.data.data[2].AlarmVoltage === 2
        || response.data.data[2].AlarmElectric === 1
        || response.data.data[2].AlarmLeakage === 1) {
        setIotStatus('warning')
        setStateName('Warning')
      } else {
        setIotStatus('success')
        setStateName('Safety')
      }
      
      // 실시간사용량 데이터 GET
      // electricData
      
      const newElectricData = electricData
      for (let i = 0; i < response.data.data[3].length; i++) {
        // console.log((Math.floor(Number(response.data.data[3][i].Date.substr(11, 2)) / 2)))
        // console.log('배열 수 : ', response.data.data[3].length)
        // console.log('실시간 사용량 : ', Number(response.data.data[3][44].Date.substr(11, 2)))
        newElectricData[Math.floor(Number(response.data.data[3][i].Date.substr(11, 2)) / 2)] += Math.floor(response.data.data[3][i].VoltageAvg)
      }
      setElectricData(newElectricData)

    })
    .catch((err)=>{console.log(err)})
  })

  /*axios.get(`/api/overview/${postIot.IotNum}/${postIot.Date}`,)
  .then(function (response) {
    for (let i = 0; i < response.data.data[3].length; i++) {

      // console.log((Math.floor(Number(response.data.data[3][i].Date.substr(11, 2)) / 2)))
      const newElectricData = electricData

      newElectricData[Math.floor(Number(response.data.data[3][i].Date.substr(11, 2)) / 2)] += Math.floor(response.data.data[3][i].VoltageAvg)
      setElectricData(newElectricData)
    }
    console.log('push', electricData)
  })
  .catch(function (err) {console.log(err)})*/
  
  return (
    <div>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar />
            <div className="container-fluid">
              <PageHeading title="Dashboard" />
              <div className="row">
                <Link className='col-xl-3 col-md-3 mb-4' to='/TodayUsage'>
                  <CardInfo title="전력 조회"
                    icon="bolt"
                    color="info"
                    value= {iotData} />
                </Link>

                <Link className='col-xl-3 col-md-3 mb-4' to='/predict'>
                  <CardInfo title="전력 예측"
                    icon="chart-bar"
                    color="warning"
                    value={predictData} />
                </Link>

                <Link className='col-xl-3 col-md-3 mb-4' to='/Safety'>
                  <CardInfo title="IOT"
                    icon="mobile-alt"
                    color="info"
                    fontsize='6'
                    value={postIot.IotNum} />
                </Link>

                <Link className='col-xl-3 col-md-3 mb-4' to='dashboard'>
                  <CardInfo title="안전 지수"
                    icon="exclamation-circle"
                    color={iotStatus}
                    value={stateName} />
                </Link>

                
              </div>
              <div className="row">
                <div className="col-xl col-lg">
                  <ChartNow electricData={electricData}/>
                </div>

              </div>

            </div>
            {/* <!-- /.container-fluid --> */}
          </div>
          {/* <!-- End of Main Content --> */}

          <footer className="sticky-footer bg-white">
            <div className="container my-auto">
              <div className="copyright text-center my-auto">
                <span>Copyright &copy; Your Website 2019</span>
              </div>
            </div>
          </footer>
          {/* <!-- End of Footer --> */}

        </div>
        {/* <!-- End of Content Wrapper --> */}

      </div>
      {/* <!-- End of Page Wrapper --> */}

      {/* <!-- Scroll to Top Button--> */}
      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a></div>
  )
}

export default Dashboard