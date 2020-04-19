import React from 'react';
import BannerAnim from 'rc-banner-anim';
import QueueAnim from 'rc-queue-anim';
// import TweenOne from 'rc-tween-one';
// import ReactDOM from 'react-dom';
import "../styles/header.css";

const { Element } = BannerAnim;
const BgElement = Element.BgElement;

const imageComp = (data) => {
    return (
        <Element key={data.id}
            prefixCls="banner-user-elem"
        >
            <BgElement
                key="bg"
                className="bg showBanner"
                style={{
                    backgroundImage: `url(${data.path})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
            <div className="header-center-text">
                <h1>a SHENGA FILMS ARPISUVA</h1>
                <p>We don't make movies to make money, we make money to make more movies. - <cite>Walt Disney</cite></p>
            </div>
            {/* <QueueAnim className="banner-txt" name="QueueAnim">
                <h1 key="h1">{data.title}</h1>
                <p key="p">{data.desc}</p>
            </QueueAnim> */}
            {/* <TweenOne animation={{ y: 50, opacity: 0, type: 'from', delay: 200 }} name="TweenOne">
                Ant Motion Demo.Ant Motion Demo
            </TweenOne> */}
        </Element>
    );
};

const videoComp = (data) => {
    return (
        <Element key={data.id}
            prefixCls="banner-user-elem"
        >
            <BgElement key="bg" className="bg">
                <video className="video-banner" loop autoPlay>
                    <source src={data.path} type="video/mp4" />
                </video>
            </BgElement>
            <QueueAnim className="banner-txt" name="QueueAnim">
                <h1 key="h1">{data.title}</h1>
                <p key="p">{data.desc}</p>
            </QueueAnim>
            {/* <TweenOne animation={{ y: 50, opacity: 0, type: 'from' }} name="TweenOne">
                Ant Motion Demo.Ant MotionDemo
            </TweenOne> */}
        </Element>
    );
};

function Demo(props) {

    const bannerImages = props.data.data.map(item => {
        if (item.type === "image") {
            return imageComp(item);
        } else {
            return videoComp(item);
        }
    });

    return (
        <BannerAnim arrow={false} autoPlay={true} autoPlaySpeed={5000}>
            {bannerImages}
        </BannerAnim>
    );
}

export default Demo;