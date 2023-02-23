import React from 'react';

const FiveDays = ({weather,temp,setTemp,days,weatherFive,day,setDay,setFive}) => {
    return (
        <section className={'weather-five'}>
            <div className="weather-five__current">
                <h2 className="weather-five__title">{weather.name}</h2>
                <div className={'weather__temps'}>
                    <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt=""/>
                    <p className={'weather__five--temp'}>
                        {temp === 'C'
                            ? Math.round(weather.main.temp -273.15)
                            :  Math.round((weather.main.temp -273.15) * 9/5 + 32)
                        }
                    </p>
                    <div className="weather__five--switch">
                              <span className={temp === 'C'? 'active' : ""} onClick={() => setTemp('C')}>
                                 °C
                              </span>
                        <span className={temp === 'F'? 'active' : ""} onClick={() => setTemp('F')}>
                                  | °F
                              </span>
                    </div>
                </div>
                <p className="weather__five--humidity">
                    влажность :<span> {weather.main.humidity}%</span>
                </p>
                <p className={'weather__five--humidity'}>{weather.weather[0].description}</p>
            </div>



                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className='weather-five__row'>
                {[...new Set(days)].map((item,idx) => {
                    return (
                        <div className='el' key={item}>


                                <button type="button" className={`weather-five__btn  ${idx === day ? 'active': ''}`} onClick={() => setDay(idx)}>
                                    {item}
                                </button>
                            <ul className={`weather-five__menu ${idx === day ? 'active': ''}` }>
                                {weatherFive.list.map((el) => {
                                    if (el.dt_txt.includes(item))
                                        return(
                                            <li key={el.dt_txt} className='weather-five__menu-list'>
                                                <p className={'weather--five__menu--title'}>{el.dt_txt.slice(11)}</p>
                                                <div className={'weather--five__menu-temp'}>
                                                    <img src={`https://openweathermap.org/img/wn/${el.weather[0].icon}.png`} alt=""/>
                                                    <span>{Math.round( el.main.temp -273.15)} °C</span>

                                                </div>
                                                <p className={"weather--five__menu--title"}>{el.weather[0].main}</p>
                                            </li>
                                        )
                                })}
                            </ul>
                        </div>
                    )
                })}
                </div>


            <button type="button" className='weather-five__back' onClick={() => setFive(false)}>Back</button>
        </section>

    );
};

export default FiveDays;