import React from 'react'
import {Link, useMatch} from 'react-router-dom'


const CustomLink = ({children, to, ...props }) => {
    const match = useMatch({
        path: to,
        end: to.length === 1, 
    });
    console.log({match});

return (
    <Link 
    to = {to}
    style ={{
        color: match ? 'var(--color-active)' : 'white', 
    }}
    {...props}
    >
    {children}
    </Link> // Данный линк можно положить куда угодно и обернуть чем угодно 
)
}

export default CustomLink

// const CustomLink = ({children, to, ...props }) => {
//     // const match = useMatch(to);
//     const match = useMatch(to);
//     console.log({match});

// return (
//     <Link 
//     to = {to}
//     style ={{
//         color: match ? 'var(--color-active)' : 'white', 
//     }}
//     {...props}
//     >
//     {children}
//     </Link> // Данный линк можно положить куда угодно и обернуть чем угодно 
// )
// }
// Это первоначальный вид хука до урока 7 о вложенных роутах
// При вложенности возникла проблема, т.к. to работает с однозначным сравнением, т.е.
// по адресу http://localhost:3000/about ссылка активна, а при http://localhost:3000/about/contacts хук не работает, 
// Т.к. при to /about != about/contacts 
// Поэтому вместо to передадим объект, принимающий path и end
// end нельзя задать значение false, т.к. нашу проблему это решит, но теперь активными всегда будут гореть две ссылки:
// 1) Та, на котрой мы сейчас
// 2) Главная страница
// Поэтому решим эту проблему данным способом 