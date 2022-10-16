import React from "react";
import Referralcss from "./assets/css/Referral.module.css";
import "./assets/css/referral.css";
import headerImg from "./assets/images/header-img.png";
import search from "./assets/images/search.png";
import man from "./assets/images/man.png";
import greyMan from "./assets/images/grey-man.png";
import tick from "./assets/images/tick.png";
import reward from "./assets/images/reward.png";

function Referral() {
  return (
    <div>
      <div className={Referralcss.referral}>
        <div className={Referralcss.heading}>
          <div className={Referralcss.headinginner}>
            <h1>
              Referral Status <img src={headerImg} alt="Header" />
            </h1>
            <div className={Referralcss.search}>
              <input type="text" name="search" placeholder="Search" />
              <img src={search} alt="Search" />
            </div>
          </div>
        </div>

        <div className={Referralcss.referralTable}>
          <div className={Referralcss.referralTableInner}>
            <table>
              <tr>
                <th>Candidate</th>
                <th>Referred</th>
                <th>Interviewed</th>
                <th>Hired</th>
                <th>Joined</th>
                <th>Reward</th>
              </tr>
              <tbody>
                <tr>
                  <td>
                    <div className="personDetail">
                      <div className="img">
                        <img src={man} alt="Man" />
                      </div>
                      <div className="detail">
                        <p>Anmol Mahajan</p>
                        <span>Sr.Engineer</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="progress-point">
                      <div className="sep"></div>
                      <span className="active">
                        <img src={tick} alt="Passed" />
                      </span>
                      <div className="sep"></div>
                    </div>
                  </td>
                  <td>
                    <div className="progress-point">
                      <div className="sep"></div>
                      <span className="active">
                        <img src={tick} alt="Passed" />
                      </span>
                      <div className="sep"></div>
                    </div>
                  </td>
                  <td>
                    <div className="progress-point">
                      <div className="sep"></div>
                      <span className="active">
                        <img src={tick} alt="Passed" />
                      </span>
                      <div className="sep"></div>
                    </div>
                  </td>
                  <td>
                    <div className="progress-point">
                      <div className="sep"></div>
                      <span className="man active">
                        <img src={man} alt="Passed" />
                      </span>

                      <div className="inner-sep"></div>
                      <p>
                        $ <br /> <span>20 days to go!</span>
                      </p>
                      {/* <div className="days-to-go"><span>20 days to go!</span></div> */}
                    </div>
                  </td>
                  <td>
                    <div className="progress-point">
                      <div className="dotted-sep">- - - - -</div>
                      <p className="reward-amount">$2000</p>
                    </div>
                  </td>
                </tr>
                {/* <tr style={{padding:"10px",display:"block"}}></tr> */}
                <tr>
                  <td>
                    <div className="personDetail">
                      <div className="img">
                        <img src={man} alt="Man" />
                      </div>
                      <div className="detail">
                        <p>Anmol Mahajan</p>
                        <span>Sr.Engineer</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="progress-point">
                      <div className="sep"></div>
                      <span className="active">
                        <img src={tick} alt="Passed" />
                      </span>
                      <div className="sep"></div>
                    </div>
                  </td>
                  <td>
                    <div className="progress-point">
                      <div className="sep"></div>
                      <span className="man active">
                        <img src={man} alt="Passed" />
                      </span>
                      <div className="sep grey-bg"></div>
                    </div>
                  </td>
                  <td>
                    <div className="progress-point">
                      <div className="sep grey-bg"></div>
                      <span className="inactive">
                        
                      </span>
                      <div className="sep grey-bg"></div>
                    </div>
                  </td>
                  <td>
                    <div className="progress-point">
                      <div className="sep grey-bg"></div>
                      <span className="inactive">
                        <img src={tick} alt="Passed" />
                      </span>

                      <div className="inner-sep">- - - - - - - -</div>
                      {/* <p>
                       
                      </p> */}
                      {/* <div className="days-to-go"><span>20 days to go!</span></div> */}
                    </div>
                  </td>
                  <td>
                    <div className="progress-point">
                      <div className="dotted-sep">- - - - -</div>
                      <p className="reward-amount inactive-reward">$2000</p>
                    </div>
                  </td>
                </tr>

                 <tr>
                  <td>
                    <div className="personDetail">
                      <div className="img">
                        <img src={man} alt="Man" />
                      </div>
                      <div className="detail">
                        <p>Anmol Mahajan</p>
                        <span>Sr.Engineer</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="progress-point">
                      <div className="sep"></div>
                      <span className="active">
                        <img src={tick} alt="Passed" />
                      </span>
                      <div className="sep"></div>
                    </div>
                  </td>
                  <td>
                    <div className="progress-point">
                      <div className="sep"></div>
                      <span className="active">
                        <img src={tick} alt="Passed" />
                      </span>
                      <div className="sep grey-bg"></div>
                    </div>
                  </td>
                  <td>
                    <div className="progress-point">
                      <div className="sep grey-bg"></div>
                      <span className="man active">
                        <img src={man} alt="Passed" />
                      </span>
                      <div className="sep grey-bg"></div>
                    </div>
                  </td>
                  <td>
                    <div className="progress-point">
                      <div className="sep grey-bg"></div>
                      <span className="inactive">
                        <img src={tick} alt="Passed" />
                      </span>

                      <div className="inner-sep">- - - - - - - -</div>
                      {/* <p>
                       
                      </p> */}
                      {/* <div className="days-to-go"><span>20 days to go!</span></div> */}
                    </div>
                  </td>
                  <td>
                    <div className="progress-point">
                      <div className="dotted-sep">- - - - -</div>
                      <p className="reward-amount inactive-reward">$20000</p>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div className="personDetail">
                      <div className="img">
                        <img src={man} alt="Man" />
                      </div>
                      <div className="detail">
                        <p>Anmol Mahajan</p>
                        <span>Sr.Engineer</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="progress-point">
                      <div className="sep"></div>
                      <span className="active">
                        <img src={tick} alt="Passed" />
                      </span>
                      <div className="sep"></div>
                    </div>
                  </td>
                  <td>
                    <div className="progress-point">
                      <div className="sep"></div>
                      <span className="man active">
                        <img src={man} alt="Passed" />
                      </span>
                      <div className="sep grey-bg"></div>
                    </div>
                  </td>
                  <td>
                    <div className="progress-point">
                      <div className="sep grey-bg"></div>
                      <span className="inactive">
                       
                      </span>
                      <div className="sep grey-bg"></div>
                    </div>
                  </td>
                  <td>
                    <div className="progress-point">
                      <div className="sep grey-bg"></div>
                      <span className="inactive">
                        
                      </span>

                      <div className="inner-sep">- - - - - - - -</div>
                      {/* <p>
                       
                      </p> */}
                      {/* <div className="days-to-go"><span>20 days to go!</span></div> */}
                    </div>
                  </td>
                  <td>
                    <div className="progress-point">
                      <div className="dotted-sep">- - - - -</div>
                      <p className="reward-amount inactive-reward">$200</p>
                    </div>
                  </td>
                </tr> 

                  <tr>
                  <td>
                    <div className="personDetail">
                      <div className="img">
                        <img src={man} alt="Man" />
                      </div>
                      <div className="detail">
                        <p>Anmol Mahajan</p>
                        <span>Sr.Engineer</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="progress-point">
                      <div className="sep"></div>
                      <span className="man active">
                        <img src={man} alt="Passed" />
                      </span>
                      <div className="sep grey-bg"></div>
                    </div>
                  </td>
                  <td>
                    <div className="progress-point">
                      <div className="sep grey-bg"></div>
                      <span className="inactive">
                       
                       </span>
                      <div className="sep grey-bg"></div>
                    </div>
                  </td>
                  <td>
                    <div className="progress-point">
                      <div className="sep grey-bg"></div>
                      <span className="inactive">
                       
                      </span>
                      <div className="sep grey-bg"></div>
                    </div>
                  </td>
                  <td>
                    <div className="progress-point">
                      <div className="sep grey-bg"></div>
                      <span className="inactive">
                        
                      </span>

                      <div className="inner-sep">- - - - - - - -</div>
                      {/* <p>
                       
                      </p> */}
                      {/* <div className="days-to-go"><span>20 days to go!</span></div> */}
                    </div>
                  </td>
                  <td>
                    <div className="progress-point">
                      <div className="dotted-sep">- - - - -</div>
                      <p className="reward-amount inactive-reward">$2000</p>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div className="personDetail">
                      <div className="img">
                        <img src={man} alt="Man" />
                      </div>
                      <div className="detail">
                        <p>Anmol Mahajan</p>
                        <span>Sr.Engineer</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="progress-point">
                      <div className="sep"></div>
                      <span className="active">
                        <img src={tick} alt="Passed" />
                      </span>
                      <div className="sep"></div>
                    </div>
                  </td>
                  <td>
                    <div className="progress-point">
                      <div className="sep"></div>
                      <span className="active">
                        <img src={tick} alt="Passed" />
                      </span>
                      <div className="sep"></div>
                    </div>
                  </td>
                  <td>
                    <div className="progress-point">
                      <div className="sep"></div>
                      <span className="active">
                        <img src={tick} alt="Passed" />
                      </span>
                      <div className="sep"></div>
                    </div>
                  </td>
                  <td>
                    <div className="progress-point">
                      <div className="sep"></div>
                      <span className="active">
                        <img src={tick} alt="Passed" />
                      </span>

                      <div className="inner-sep"></div>
                      {/* <p>
                       
                      </p> */}
                      {/* <div className="days-to-go"><span>20 days to go!</span></div> */}
                    </div>
                  </td>
                  <td>
                    <div className="progress-point">
                    <div className="sep"></div>
                      <p className="reward-amount green-color fw-600">$2000 <img src={reward} alt="Reward" /></p>
                    </div>
                  </td>
                </tr>  

                <tr>
                  <td>
                    <div className="personDetail">
                      <div className="img">
                        <img src={man} alt="Man" />
                      </div>
                      <div className="detail">
                        <p>Anmol Mahajan</p>
                        <span>Sr.Engineer</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="progress-point">
                      <div className="sep"></div>
                      <span className="active">
                        <img src={tick} alt="Passed" />
                      </span>
                      <div className="sep"></div>
                    </div>
                  </td>
                  <td>
                    <div className="progress-point">
                      <div className="sep"></div>
                      <span className="active">
                        <img src={tick} alt="Passed" />
                      </span>
                      <div className="sep grey-bg"></div>
                    </div>
                  </td>
                  <td>
                    <div className="progress-point">
                      <div className="sep grey-bg"></div>
                      <span className="man active">
                        <img src={man} alt="Passed" />
                      </span>
                      <div className="sep grey-bg"></div>
                    </div>
                  </td>
                  <td>
                    <div className="progress-point">
                      <div className="sep grey-bg"></div>
                      <span className="inactive">
                        
                      </span>

                      <div className="inner-sep">- - - - - - - -</div>
                      {/* <p>
                       
                      </p> */}
                      {/* <div className="days-to-go"><span>20 days to go!</span></div> */}
                    </div>
                  </td>
                  <td>
                    <div className="progress-point">
                      <div className="dotted-sep">- - - - -</div>
                      <p className="reward-amount inactive-reward">$20000</p>
                    </div>
                  </td>
                </tr>  

                 <tr>
                  <td>
                    <div className="personDetail">
                      <div className="img">
                        <img src={man} alt="Man" />
                      </div>
                      <div className="detail">
                        <p>Anmol Mahajan</p>
                        <span>Sr.Engineer</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="progress-point">
                      <div className="sep"></div>
                      <span className="paused">
                        
                      </span>
                      <div className="sep paused-bg"></div>
                    </div>
                  </td>
                  <td>
                    <div className="progress-point">
                      <div className="sep paused-bg"></div>
                      <span className="paused">
                        
                      </span>
                      <div className="sep paused-bg"></div>
                    </div>
                  </td>
                  <td>
                    <div className="progress-point">
                      <div className="sep paused-bg"></div>
                      <span className="man paused">
                        <img src={greyMan} alt="Passed" />
                      </span>
                      <div className="sep paused-bg"></div>
                    </div>
                  </td>
                  <td>
                    <div className="progress-point">
                      <div className="sep paused-bg"></div>
                      <span className="paused">
                        
                      </span>

                      <div className="inner-sep">- - - - - - - -</div>
                      {/* <p>
                       
                      </p> */}
                      {/* <div className="days-to-go"><span>20 days to go!</span></div> */}
                    </div>
                  </td>
                  <td>
                    <div className="progress-point">
                      <div className="dotted-sep">- - - - -</div>
                      <p className="reward-amount inactive-reward">$20000</p>
                    </div>
                  </td>
                </tr>

                   <tr>
                  <td>
                    <div className="personDetail">
                      <div className="img">
                        <img src={man} alt="Man" />
                      </div>
                      <div className="detail">
                        <p>Anmol Mahajan</p>
                        <span>Sr.Engineer</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="progress-point">
                      <div className="sep"></div>
                      <span className="active">
                        <img src={tick} alt="Passed" />
                      </span>
                      <div className="sep"></div>
                    </div>
                  </td>
                  <td>
                    <div className="progress-point">
                      <div className="sep"></div>
                      <span className="active">
                        <img src={tick} alt="Passed" />
                      </span>
                      <div className="sep"></div>
                    </div>
                  </td>
                  <td>
                    <div className="progress-point">
                      <div className="sep"></div>
                      <span className="active">
                        <img src={tick} alt="Passed" />
                      </span>
                      <div className="sep"></div>
                    </div>
                  </td>
                  <td>
                    <div className="progress-point">
                      <div className="sep"></div>
                      <span className="active">
                        <img src={tick} alt="Passed" />
                      </span>

                      <div className="inner-sep"></div>
                      {/* <p>
                       
                      </p> */}
                      {/* <div className="days-to-go"><span>20 days to go!</span></div> */}
                    </div>
                  </td>
                  <td>
                    <div className="progress-point">
                    <div className="sep"></div>
                      <p className="reward-amount green-color fw-600">$2000 <img src={reward} alt="Reward" /></p>
                    </div>
                  </td>
                </tr>

              </tbody>
            </table>
            {/* <div className={Referralcss.referralHeader}>
                  <p>Candidate</p>
                  <ul>
                    <li>Referred</li>
                    <li>Interviewed</li>
                    <li>Hired</li>
                    <li>Joined</li>
                  </ul>
                  <p>Reward</p>
              </div>
              <div className={Referralcss.referralCard}>
                <div className={Referralcss.personDetail}>
                  <div className={Referralcss.img}>
                    <img src={man} alt="Man" />
                  </div>
                  <div className={Referralcss.detail}>
                    <p>Anmol Mahajan</p>
                    <span>Sr.Engineer</span>
                  </div>
                </div>
                <div className={Referralcss.processProgress}>
                  <span>
                    <img src={tick} alt="Passed" />
                  </span>
                  <span>
                    <img src={tick} alt="Passed" />
                  </span>
                  <span>
                    <img src={tick} alt="Passed" />
                  </span>
                  <span>
                    <img src={tick} alt="Passed" />
                  </span>
                </div>
                <div className={Referralcss.reward}>
                  <p>$2000</p>
                </div>
              </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Referral;
