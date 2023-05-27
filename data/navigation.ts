import {NavigationSidebar} from "~/types/dashboard";

const childrenDefaultProps = {
    activeColor: "secondary",
    density: "compact",
    prependIcon: "$point",
}
const sampleChild = [
    {
      title: "Configuración",
      group: "children",
      props: {
        prependIcon: "$settings",
        class: "leftPadding"
      },
      children: [
        {
          title: "Usuarios",
          props: childrenDefaultProps,
          group: "sub_children",
        },
        {
          title: "Roles",
          props: childrenDefaultProps
        },
        {
          title: "Permisos",
          props: childrenDefaultProps
        }
      ]
    },
    {
      title: "Parque",
      group: "children",
      props: {
        prependIcon: "",
        class: "leftPadding"
      },
      modalType: "image",
      modalContent: {
        image: "data:image/jpeg;base64,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"
      },
    },
    {
      title: "Pagina demo",
      group: "children",
      props: {
        prependIcon: "",
        class: "leftPadding"
      },
      modalType: "text",
      modalContent: {
        title: "Pagina demo",
        text: "Hola mundo"
      },
    },
  ];
  

const nav: NavigationSidebar[] = [
    {
        title: "Dashboard",
        props: {
            activeColor: "secondary",
            prependIcon: "$dashboard",
            to: {
                name: "index",
            },
        }
    },
    ...sampleChild
]

export default nav