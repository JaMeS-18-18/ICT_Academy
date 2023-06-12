import React, { Component } from "react";
import Slider from "react-slick";
import './mentor.css'
import { GitHubIcon, TelegramIcon, YoutubeIcon, RoundIcon, LinkedinWhiteIcon, LongArrowIcon } from "../../assets/images/Index";
export default class SliderExample extends React.Component {
  render() {
    let settings = {
      className: 'sample',
      accessibility: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        }
      ]
    }

    return (
      <div className="container mx-auto px-4 place-self-auto">
        <div className="section_mentor bg-bg_black place-content-between">
          <div className="section_dots dots_1"></div>
          <div className="section_dots dots_2"></div>
          <div className="section_dots dots_3"></div>
          <div className="section_dots dots_4"></div>
          <h2 className="section_mentor_txt">Bizning malakali <br /> mentorlarimiz</h2>
          <Slider {...settings} >
            <div className="carusel">
              <div className="card_carusel">
                <div className="flex card-border">
                  <GitHubIcon />
                  <LinkedinWhiteIcon />
                  <TelegramIcon />
                  <RoundIcon />
                </div>
              <div>
                <h3 className="mentor_name">Qosimov Samandar</h3>
                <p className="mentor_Stack">FrontEnd Mentor</p>
              </div>
              </div>
            </div>
            <div className="carusel">
              <div className="card_carusel">
                <div className="flex card-border">
                  <GitHubIcon />
                  <LinkedinWhiteIcon />
                  <TelegramIcon />
                  <RoundIcon />
                </div>
              <div>
                <h3 className="mentor_name">Qosimov Samandar</h3>
                <p className="mentor_Stack">FrontEnd Mentor</p>
              </div>
              </div>
            </div>
            <div className="carusel">
              <div className="card_carusel">
                <div className="flex card-border">
                  <GitHubIcon />
                  <LinkedinWhiteIcon />
                  <TelegramIcon />
                  <RoundIcon />
                </div>
              <div>
                <h3 className="mentor_name">Qosimov Samandar</h3>
                <p className="mentor_Stack">FrontEnd Mentor</p>
              </div>
              </div>
            </div>
            <div className="carusel">
              <div className="card_carusel">
                <div className="flex card-border">
                  <GitHubIcon />
                  <LinkedinWhiteIcon />
                  <TelegramIcon />
                  <RoundIcon />
                </div>
              <div>
                <h3 className="mentor_name">Qosimov Samandar</h3>
                <p className="mentor_Stack">FrontEnd Mentor</p>
              </div>
              </div>
            </div>
            <div className="carusel">
              <div className="card_carusel">
                <div className="flex card-border">
                  <GitHubIcon />
                  <LinkedinWhiteIcon />
                  <TelegramIcon />
                  <RoundIcon />
                </div>
              <div>
                <h3 className="mentor_name">Qosimov Samandar</h3>
                <p className="mentor_Stack">FrontEnd Mentor</p>
              </div>
              </div>
            </div>
            <div className="carusel">
              <div className="card_carusel">
                <div className="flex card-border">
                  <GitHubIcon />
                  <LinkedinWhiteIcon />
                  <TelegramIcon />
                  <RoundIcon />
                </div>
              <div>
                <h3 className="mentor_name">Qosimov Samandar</h3>
                <p className="mentor_Stack">FrontEnd Mentor</p>
              </div>
              </div>
            </div>
            <div className="carusel">
              <div className="card_carusel">
                <div className="flex card-border">
                  <GitHubIcon />
                  <LinkedinWhiteIcon />
                  <TelegramIcon />
                  <RoundIcon />
                </div>
              <div>
                <h3 className="mentor_name">Qosimov Samandar</h3>
                <p className="mentor_Stack">FrontEnd Mentor</p>
              </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    )
  }
}
