import style from "./HeroSection.module.css"

export const HeroSection = () => {
    return (
        <div className={style.hero}>
            <div className={style.time}>
                <img src="./clock.svg" alt="clock" />
                <p>15 Minutes</p>
            </div>
            <h1>The Big Five: Your Gateway to Greater Discoveries!</h1>
            <p>Before we embark on this thrilling journey to uncover your unique career path, we need to get to know you a little better. And what better way than through the 'Big Five Personality Assessment'?</p>
            <p>The Big Five is a well-respected psychological model that helps us understand your unique personality traits. No, we're not mind-readers (though that would be cool), we simply use science to help you discover the best career paths suited to your personality.</p>
            <p>This isn't a test, so there are no right or wrong answers. Just be honest, because the more truthful you are, the more accurate your career matches will be. And don't worry, we value your privacy and your responses will be kept confidential. This introspective journey will take about 15 minutes of your time. So, grab a snack, settle into your favorite chair, and get ready to dive deep into the fascinating world of you!</p>
            <button className={style.btn}>Enter</button>
        </div>
    )
}
