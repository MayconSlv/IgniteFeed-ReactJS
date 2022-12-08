import style from './Avatar.module.css';

// const user = {name: "Maycon"}
// const { name } = user;
// aqui, pegamos o valor Name de dentro da variavel user (desestruturação de objetos)

export function Avatar( {hasborder = true, src} ) {
    // aqui fez a mesma coisa, já definimos a propriedade hasborder como true, e mesmo se ela não for definida na hora da exportação, vai receber o valor true
    return (
        <img src={src} className={hasborder ? style.avatarWithBorder : style.avatar}/>
    )
}