const Content = (props) => {

    const innerContent = {
        'm': {
            h1: 'Велосипед STELS Navigator 510 HD 26 2022',
            p1: 'Данный велосипед с колесами 26 дюймов хорошо подходит высоким подросткам. Прогиб рамы и небольшой размер рамы расчитан на рост от 135 до 165 см.',
            p2: 'Суммарный вес велосипеда был снижен до 16,9 кг, так как рама была изготовлена с учетом использования велосипеда подростками.'
        },
        'w': {
            h1: 'Велосипед SCHWINN Traveler women 2022',
            p1: 'Женский велосипед со стальной рамой Classic step-true lightweight позволяет девушкам без проблем его перемещать.',
            p2: 'На данном велосипеде имеется 7 скоростей с переключателями от Shimano, а жесткая вилка обеспечивает отличную управляемость. Подходит для катания по асфальтированным поверхностям.'
        }
    }

    return (
        <div className="content">
            <div className="about">
                <div className={`about-img ${props.type}`}>
                </div>

                <div className="about-desc">
                    <h1>{innerContent[props.type].h1}</h1>
                    <p>{innerContent[props.type].p1}</p>
                    <p>{innerContent[props.type].p2}</p>
                </div>
            </div>

            <hr />
        </div>
    );
}
export default Content;
