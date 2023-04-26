import "./content.css"

const Content = (props) => {

    const innerContent = {
        'm': {
            img: require('./images/image1.png'),
            h1: 'Велосипед STELS Navigator 510 HD 26 2022',
            p1: `Данный велосипед c колесами 26 дюймов хорошо подходит высоким подросткам. 
                        Прогиб рамы и небольшой размер рамы расчитан на рост от 135 до 165 см.`,
            p2: `Суммарный вес велосипеда был снижен до 16,9 кг, так как рама была изготовлена c
                        учетом использования велосипеда подростками.`
        },
        'w': {
            img: require('./images/image2.png'),
            h1: 'Велосипед SCHWINN Traveler women 2022',
            p1: `Женский велосипед со стальной рамой Classic step-true lightweight позволяет девушкам без
                        проблем его перемещать.`,
            p2: `На данном велосипеде имеется 7 скоростей с переключателями от Shimano, 
                        а жесткая вилка обеспечивает отличную управляемость. Подходит для катания по 
                        асфальтированным поверхностям.`
        }
    }

    return (
        <div className={props.cls}>
            <div className="about">
                <div className="about-img">
                    <img src={innerContent[props.type].img} className="img-desk" alt="cyclet" />
                </div>

                <div className="about-desc">
                    <h1>{innerContent[props.type].h1}</h1>
                    <p>
                        {innerContent[props.type].p1}
                    </p>
                    <p>
                        {innerContent[props.type].p2}
                    </p>
                </div>


            </div>
            <hr />
        </div>
    )
}

export default Content;