const gPath = '/navigator/gestion'
const gePath = '/navigator/general'
const nPath = '/navigator/notificaciones'
const cPath = '/navigator/chat'

export const tabs = {
    main: [
        { href: `${gPath}`, icon: 'play', title: 'Gestion' },
        { href: `${cPath}`, icon: 'list', title: 'Chat' },
        { href: `${nPath}`, icon: 'list', title: 'Notificaciones' },
        { href: `${gePath}`, icon: 'book', title: 'General' }
    ],
    general:[
        { href: `${gPath}/eventos`, title: 'Eventos' },
        { href: `${gPath}/planes`, title: 'Planes' },
        { href: `${gPath}/clubs`, title: 'Clubs' },
        { href: `${gPath}/entradas`, title: 'Entradas' },
        { href: `${gPath}/empleados`, title: 'Empleados' },
        { href: `${gPath}/promos`, title: 'Promos' }
    ],
    gestion: [
        { href: `${gePath}/info`, title: 'Info' },
        { href: `${gePath}/preferencias`, title: 'Preferencias' },
        { href: `${gePath}/estadisticas`, title: 'Estadisticas' },
        { href: `${gePath}/bans`, title: 'Bans' }
    ],
    default: [{}]
}
