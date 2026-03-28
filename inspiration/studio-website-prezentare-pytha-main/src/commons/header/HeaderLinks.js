import MainAppRouter from "../../router/MainAppRouter";

let headerLinks = [
    {
        link: MainAppRouter.home,
        text: "Acasă",
        hasDropdown: false,
    },
    {
        link: "#",
        text: "PYTHA",
        hasDropdown: true,
        dropdownCategories: [
            {
                title: 'Module PYTHA',
                items: [
                    {text: 'Modeler Basic Package', link: MainAppRouter.pythaModules + "#c-0"},
                    {text: 'Generators & Plug-Ins', link: MainAppRouter.pythaModules + "#c-1"},
                    {text: 'Workshop', link: MainAppRouter.pythaModules + "#c-2"},
                    {text: 'Parts List', link: MainAppRouter.pythaModules + "#c-3"},
                    {text: 'Parametrics', link: MainAppRouter.pythaModules + "#c-4"},
                    {text: 'Library', link: MainAppRouter.pythaModules + "#c-5"},
                    {text: 'Freeform', link: MainAppRouter.pythaModules + "#c-6"},
                    {text: 'Nesting', link: MainAppRouter.pythaModules + "#c-7"},
                    {text: 'CAM Interface', link: MainAppRouter.pythaModules + "#c-8"},
                    {text: 'RadioLab', link: MainAppRouter.pythaModules + "#c-9"},
                ]
            },
            {
                title: 'Despre Noi',
                items: [
                    {text: 'Cine suntem?', link: MainAppRouter.detailsPytha},
                ]
            },
        ]
    },
    {
        link: MainAppRouter.prices,
        text: "Prețuri",
        hasDropdown: false,
    },
    {
        link: MainAppRouter.contact,
        text: "Asistență tehnică",
        hasDropdown: false,
    },
];

export default headerLinks;