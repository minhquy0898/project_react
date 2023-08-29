import {useEffect, useState} from "react";
import './Payment.css'
const Payment = () => {
    const [email, emailChange]=useState("")
    const [fullName,fullNameChange]=useState("");
    const [phoneNumber,phoneNumberChange]=useState("");
    const [address,addressChange]=useState("");
    const [province, provinceChange] = useState("")
    const [provinces, provincesChange] = useState("")
    const [district, districtChange] = useState("")
    const [payOnDelivery, payOnDeliveryChange] = useState("")
    const [discountCode, discountCodeChange] = useState("")
    const [countryData,countryDataChange]=useState([])
    const [selectedCountry,selectedCountryChange]=useState("vn")

    useEffect(() => {
        fetch("http://localhost:8000/countries").then((res) => res.json())
            .then((resp) => countryDataChange(resp)).catch((err) => console.log(err.message))
    });

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json").then((res) => res.json())
            .then((resp) => {
                provincesChange(resp)
            }).catch((err) => console.log(err.message))
    });
console.log(province)
  return(
      <div className="payment" style={{marign:"0 55px"}}>
          <form style={{padding:"0 28px"}}>
              <div className="right-pay">
                  <div className="right-form">
                      <h2>Theme Trang Sức</h2>
                      <div className="d-flex">
                          <h5>Thông tin nhận hàng</h5>
                          <a href="">Đăng nhập</a>
                      </div>
                      <input type="email" placeholder="Email" value={email} onChange={(event)=>emailChange(event.target.value)}/>
                      <input type="email" placeholder="Email" value={email} onChange={(event)=>emailChange(event.target.value)}/>

                      <div className="d-flex ">
                          <input type="text"/>
                          <div className="dropdown">
                              <button
                                  className="select-country dropdown-toggle"
                                  type="button" data-bs-toggle="dropdown"
                                  aria-expanded="false">
                                  <span className={`flag-icon flag-icon-${selectedCountry}`}></span>
                              </button>
                              <ul className="dropdown-menu">
                                  {
                                      countryData && countryData.filter(x=>x.name !== "Vietnam").map((x)=>(
                                          <li><a className="dropdown-item"
                                                 href="#"onClick={()=>selectedCountryChange(x.code.toLowerCase())}>
                                              <span>{x.name} ({x.dial_code})</span></a></li>
                                      ))
                                  }
                              </ul>
                          </div>
                      </div>

                      <div>
                          <select >
                              <option selected>---</option>
                              {
                                  provinces && provinces.map((item)=>(
                                      <option key={item.Id} onChange={(e)=>provinceChange(e.target.value)} value={item.Name}>{item.Name}</option>
                                  ))
                              }
                          </select>
                          <span> ahihai ${province}</span>

                          <select name="" id="">
                              {
                                  provinces && provinces.map((item)=>(
                                     item.Name === province ? item.Districts.map((e)=>(
                                          <option>{e.Name}</option>
                                      )): null
                                  ))
                              }
                          </select>

                          {/*<select>*/}
                          {/*    <option selected>---</option>*/}
                          {/*    {*/}
                          {/*        province && province.map((item)=>(*/}
                          {/*            item.Districts.map((e)=>(*/}
                          {/*                <option>{e.Name}</option>*/}
                          {/*            ))*/}
                          {/*        ))*/}
                          {/*    }*/}
                          {/*</select>*/}

                      </div>
                  </div>
                  <div className="left-form"></div>
              </div>
              <div className="left-pay"></div>
          </form>
      </div>
  )
}
export default Payment
