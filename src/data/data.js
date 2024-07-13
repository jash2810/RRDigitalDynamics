import {
  Facebook,
  Instagram,
  LinkedIn,
  Email,
  WhatsApp,
  Call,
  Pinterest,
} from "@mui/icons-material";

export const SocialMediaLinks = [
    {
      component: <LinkedIn />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/rr-digital-dynamics/",
    },
    {
      component: <Instagram />,
      name: "Instagram",
      url: "https://www.instagram.com/rr_digitaldynamics/",
    },
    {
      component: <Facebook />,
      name: "Facebook",
      url: "https://www.facebook.com/RRDigitalDynamics/",
    },
    {
      component: <Pinterest />,
      name: 'Pinterest',
      url: 'https://in.pinterest.com/rrdigitaldynamics/',
    },
    {
      component: <Email />,
      name: "Email",
      url: "mailto:rrdigitaldynamics@gmail.com?subject=Inquiry",
    },
    // {
    //   component: <WhatsApp />,
    //   name: "WhatsApp",
    //   url: "",
    // },
    {
      component: <Call />,
      name: "Call",
      url: "tel:+91 99131 98888",
    },
];

export const EmailSecrets = {
  serviceId: 'service_roe4akw',
  templateIdGetAQuote: 'template_jiarf6r',
  publicKey: '5prgSIuaGTyxmFccH',
  templateIdContactUs: 'template_hi0tene',
}