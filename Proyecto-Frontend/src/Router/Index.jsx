
import IndexMenu from '../components/FormularioMenu/IndexMenu';
import IndexPag from '../components/IndexPag/IndexPag';
import IndexUsuario from '../components/FormularioInicio/IndexUsuario';
import PerfilUsuario from '../components/PerfilUsuario/PerfilUsuario';
import PerfilMenu from '../components/PerfilMenu/PerfilMenu';
import TituloUsuario from '../components/FormularioInicio/TituloUsuario';
var indexRoutes = [
    {path: "/IndexMenu", name: "IndexMenu", component: IndexMenu},
    {path: "/FormularioInicio", name: "FormularioInicio", component: IndexUsuario},
    {path: "/Index", name:"Index", component: IndexPag},
    {path: "/PerfilUsuario", name:"PerfilUsuario", component: PerfilUsuario},
    {path: "/PerfilMenu", name:"PerfilMenu", component: PerfilMenu},
    {path: "/Login", name:"PerfilMenu", component: TituloUsuario}

];

export default indexRoutes;