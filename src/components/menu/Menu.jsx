import { v4 } from "uuid";
import { menuLinks } from "../../constants/menu";

// Esta constante menuLinks nos la vamos a llevar a la carpeta constants y creamos un archivo llamado por ejemplo menu.js
// const menuLinks = ['home', 'about', 'blog', 'contact']

const Menu = () => {
    // Manera larga de pintar un menú
    // return (
    //     <nav>
    //         <ul>
    //             <li>
    //                 <a href="#">{menuLinks[0]}</a>
    //             </li>
    //             <li>
    //                 <a href="#">{menuLinks[1]}</a>
    //             </li>
    //             <li>
    //                 <a href="#">{menuLinks[2]}</a>
    //             </li>
    //             <li>
    //                 <a href="#">{menuLinks[3]}</a>
    //             </li>
    //         </ul>
    //     </nav>
    // );
    
    // Ahora lo hacemos con un bucle. Lo que tenemos que repetir es los li con los anclas.
    return (
        <nav>
            <ul>
                {/* al porner las llaves podemos escribir algo que no es jsx, por ejemplo lógica de javascript.
                Dentro de un return NO PODEMOS PONER UN BUCLE QUE NO DEVUELVA NADA p. e. Bucle for of. Tendríamos que poner un map, filter, cualquier bucle que devuelva algo */}
                {menuLinks.map(menu => {
                        return (
                            <li key={v4()}>
                                <a href={menu.menuLink}>{menu.menuText}</a>
                            </li>

                            // Aqui devolveriamos las cosas que se repiten como los componentes
                            // <MenuLink key={v4()} props.title={lo que sea} />
                       );
                })}
            </ul>
        </nav>
    );
};

export default Menu;
