import React from 'react'
import { NavLink, Outlet} from 'react-router-dom';
import CustomLink from './CustomLink';

const setActive = ({isActive}) => isActive ? 'active-link' : ''; 

const Layout = () => {
return (
    <>
    <div className='header'>
        <NavLink  to='/' className={({isActive}) => isActive ? 'active-link' : ''} > Home </NavLink>
        <NavLink to='/posts' className={setActive} > Blog </NavLink>
        {/* <NavLink to='/about' style={({isActive}) => ({color: isActive ? 'activ-link' : 'white'})} > About </NavLink> */}
        <CustomLink to='/about'> About </CustomLink>
    </div>
    <Outlet/>
    <footer>2022</footer>
    </>
)
}

export default Layout


// NavLink по умолчанию добавляет css класс active 
// Если нас не устраивает этот класс или нам, например, нужны разные классы, отвечающие за активные стили компонентов,
//  то мы можем указать className у NavLink
// Есть несколько способов реализации данного процесса 
// 1) Прописать всю логику внутри className NavLink
// 2) Прописать логику в отдельную переменную и передавать её в className NavLink
// 3) Через prop style (аналогично пункту 1)
// 4) Через prop style, но используем переменную (аналогично пункту 2)
// 5) Последний способ реализации - реализация через кастомный Link (для примера)