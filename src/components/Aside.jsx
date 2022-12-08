import style from './Aside.module.css';
import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';

export function Aside() {
    return (
        <aside className={style.sidebar}>
            <img src="https://images.unsplash.com/photo-1603468620905-8de7d86b781e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=50" />

            <div className={style.profile}>
                <Avatar src="https://github.com/Diego3g.png" />

                <strong>Maycon Silva</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}