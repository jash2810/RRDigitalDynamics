import React, { useRef, useState } from 'react';
import './ContactUs.css';
import { Button, Card, Fade, Grid, Link, TextField, Typography, Zoom, useTheme } from '@mui/material';
import { Call, Email, Facebook, Instagram, LinkedIn, WhatsApp } from '@mui/icons-material';
import PageSectionTitle from '../../Components/PageSectionTitle/PageSectionTitle';
import MyButton from '../../Components/Button/MyButton';
import ReactVisibilitySensor from 'react-visibility-sensor';
import emailjs from '@emailjs/browser';
import { EmailSecrets } from '../../data/data';

const SocialMediaLinks = [
    {
      component: <Facebook />,
      name: "Facebook",
      url: "https://facebook.com/",
    },
    {
      component: <Instagram />,
      name: "Instagram",
      url: "",
    },
    {
      component: <LinkedIn />,
      name: "LinkedIn",
      url: "",
    },
    {
      component: <Email />,
      name: "Email",
      url: "",
    },
    {
      component: <WhatsApp />,
      name: "WhatsApp",
      url: "",
    },
    {
      component: <Call />,
      name: "Call",
      url: "",
    },
  ];

function ContactUs() {
    const theme = useTheme();

    const form = useRef();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [comment, setComment] = useState('');
    const [contactusVisible, setContactusVisible] = useState(false);

    const submitForm = () => {
        console.log(name, email, phone, comment);
        
        console.log(form.current);
        emailjs.sendForm(EmailSecrets.serviceId, EmailSecrets.templateIdContactUs, form.current, EmailSecrets.publicKey)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        nullifyAllValues();
    }

    const nullifyAllValues = () => {
        setName('')
        setEmail('')
        setPhone('')
        setComment('')
    }

    const changeValue = (e) => {
        if (e.target.id === 'name') {
            setName(e.target.value)
        }
        if (e.target.id === 'email') {
            setEmail(e.target.value)
        }
        if (e.target.id === 'phone') {
            setPhone(e.target.value)
        }
        if (e.target.id === 'comment') {
            setComment(e.target.value)
        }
    }
    function contactusPageVisible(isVisible) {
        if(isVisible) {
            setContactusVisible(true)
        }
    }
    return ( 
        <React.Fragment>
            <div className='image_wrapper_cu' style={{marginTop: '57px', backgroundColor: theme.palette.primary.main}}>
                <img src={'contact-us.jpg'} alt="" className="overlayed-image-cu rrwhite-cu" />
                <div class="overlay-cu">
                    <Grid container className='contact-us-tabs'>
                        <Grid item sm={12} xs={12} className='contact-us-title'>
                            <ReactVisibilitySensor onChange={contactusPageVisible} >
                            <Typography variant='h4' align='center' fontSize={'40px'}>We look forward to hearing from you!</Typography>
                            </ReactVisibilitySensor>
                        </Grid>
                        <Grid item sm={6} xs={12} className='contact-us-tabs-sm'>
                            <Zoom in={contactusVisible} timeout={1000} style={{transitionDelay: `500ms`}}>
                            <div className='contact-us-tile'>
                                <Typography variant='h6' align='center'>Talk to a representative</Typography>
                                <Typography variant='h6' align='center' style={{marginTop: '10px'}}><Call /></Typography>
                                <Typography align='center'><Button variant='contained' className='contact-us-btn' style={{width: '100px'}} href='tel:+91-99131 98888'>Call</Button></Typography>
                            </div>
                            </Zoom>
                        </Grid>
                        <Grid item sm={6} xs={12} className='contact-us-tabs-sm'>
                            <Zoom in={contactusVisible} timeout={1000} style={{transitionDelay: `800ms`}}>
                            <div className='contact-us-tile'>
                                <Typography variant='h6' align='center'>Contact Customer Support</Typography>
                                <Typography variant='h6' align='center' style={{marginTop: '10px'}}><Email /></Typography>
                                <Typography align='center'><Button variant='contained' style={{width: '100px'}} href='mailto:rrdigitaldynamics@gmail.com'>Email</Button></Typography>
                            </div>
                            </Zoom>
                        </Grid>
                    </Grid>
                </div>
            </div>
            {/* <Grid container className='contact-us-box-wrapper'>
                <Grid item sm={6}>
                    <ContactUsCard title={'Talk To Representative'} icon={<Call style={{fontSize: '30px'}} />} buttonText={'Call'} />
                </Grid>
                <Grid item sm={6}>
                    <ContactUsCard title={'Contact Customer Support'} icon={<Email style={{fontSize: '30px'}} />} buttonText={'Email'} />
                </Grid>
            </Grid> */}
            <Grid container className='contact-us-tabs contact-us-tabs-lg'>
                <Grid item sm={6} xs={12}>
                    <Zoom in={contactusVisible} timeout={1000} style={{transitionDelay: `500ms`}}>
                    <div className='contact-us-tile'>
                        <Typography variant='h6' align='center'>Talk to a representative</Typography>
                        <Typography variant='h6' align='center' style={{marginTop: '10px'}}><Call /></Typography>
                        <Typography align='center'><Button variant='contained' className='contact-us-btn' style={{width: '100px'}} href='tel:+91-99131 98888'>Call</Button></Typography>
                    </div>
                    </Zoom>
                </Grid>
                <Grid item sm={6} xs={12}>
                    <Zoom in={contactusVisible} timeout={1000} style={{transitionDelay: `800ms`}}>
                    <div className='contact-us-tile'>
                        <Typography variant='h6' align='center'>Contact Customer Support</Typography>
                        <Typography variant='h6' align='center' style={{marginTop: '10px'}}><Email /></Typography>
                        <Typography align='center'><Button variant='contained' style={{width: '100px'}} href='mailto:rrdigitaldynamics@gmail.com'>Email</Button></Typography>
                    </div>
                    </Zoom>
                </Grid>
            </Grid>
            <PageSectionTitle pageTitle={'Connect with our office in Ahmedabad'} />
            <Grid container>
                <Grid item sm={12}>
                    <div className='container90'>
                        <Card variant='outlined' >
                            <Grid container>
                                <Grid item sm={6} style={{width: '100%'}}>
                                    {MapsIFrame}
                                </Grid>
                                <Grid item sm={6}>
                                    {contactussidecard}
                                </Grid>
                            </Grid>
                        </Card>
                    </div>
                </Grid>
            </Grid>
            <PageSectionTitle pageTitle={'Let us know how can we help you?'} />
            <div className='container90'>
            <form
                    headers='application/json'
                    name="contact-form"
                    style={{marginBottom: '30px'}}
                    ref={form}
                >
                    <Grid container spacing={2}>
                        <Grid item sm={2}></Grid>
                        <Grid item sm={8}>
                            <Grid container spacing={5}>
                                <Grid item xs={12} sm={6}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <TextField
                                                placeholder="Name"
                                                label="Name *"
                                                variant="outlined"
                                                size="medium"
                                                name="name"
                                                id="name"
                                                fullWidth
                                                onChange={(e) => changeValue(e)}
                                                value={name}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                placeholder="E-mail"
                                                label="E-mail *"
                                                variant="outlined"
                                                size="medium"
                                                name="email"
                                                id="email"
                                                type="email"
                                                fullWidth
                                                onChange={(e) => changeValue(e)}
                                                value={email}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                placeholder="Phone"
                                                label="Phone *"
                                                variant="outlined"
                                                size="medium"
                                                name="phone"
                                                id="phone"
                                                type="phone"
                                                fullWidth
                                                onChange={(e) => changeValue(e)}
                                                value={phone}
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        placeholder="Comment / Inquiry"
                                        label="Comment / Inquiry *"
                                        variant="outlined"
                                        size="medium"
                                        name="comment"
                                        id="comment"
                                        type="comment"
                                        fullWidth
                                        multiline
                                        rows={7}
                                        onChange={(e) => changeValue(e)}
                                        value={comment}
                                    />
                                </Grid>
                                <Grid sm={4}></Grid>
                                <Grid item sm={4} xs={12}>
                                    {/* <MyButton/> */}
                                    <Button
                                        size="large"
                                        variant="contained"
                                        type="button"
                                        color="primary"
                                        fullWidth
                                        onClick={() => {submitForm()}}
                                    >
                                    Send
                                    </Button>
                                </Grid>
                                <Grid sm={4}></Grid>
                            </Grid>
                        </Grid>
                        <Grid item sm={2}></Grid>
                    </Grid>
                </form>
            </div>
        </React.Fragment>
     );
}

const MapsIFrame = <iframe 
    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d917.6572546088015!2d72.64912676955059!3d23.07405863251152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDA0JzI2LjYiTiA3MsKwMzgnNTkuMiJF!5e0!3m2!1sen!2sca!4v1705629730899!5m2!1sen!2sca" 
    width="100%" 
    height="350" 
    style={{border: 0}} 
    allowfullscreen={"true"} 
    loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade"
></iframe>
const contactussidecard = <div style={{width: '90%', margin: '20px auto'}} className='contactus-sidecard'>
    <Typography variant='h6' style={{fontWeight: 'bold'}}>Office Address</Typography>
    <Typography variant='p'>17, Vishvakarma Estate, Galaxy Cinema Rd,<br/>NH8, Naroda, Ahmedabad,<br/>Gujarat-382330</Typography>
    <Typography variant='h6' style={{fontWeight: 'bold'}}>General Enquiries</Typography>
    <Typography variant='p'><Link href='mailto:rrdigitaldynamics@gmail.com' >rrdigitaldynamics@gmail.com</Link></Typography>
    <Typography variant='h6' style={{fontWeight: 'bold'}}>Call Us</Typography>
    <Typography variant='p'><Link href='tel:+91-99131 98888'>+91-99131 98888</Link></Typography>
    <Typography variant='h6' style={{fontWeight: 'bold'}}>Our Timings</Typography>
    <Typography variant='p'>Mon - Fri : 09:00 AM - 06:00 PM</Typography>
</div>

// const Form = ({changeValue, submitForm, name, email, phone, comment}) => {
//     return(
        
//     )
// }

const ContactUsCard = ({title, icon, buttonText}) => {
    const theme = useTheme();

    return(
        <div className='contact-us-box' style={{backgroundColor: theme.palette.primary.light}}>
            <div style={{width: '100%', display: 'flex', justifyContent: 'center', padding: '20px 0 10px 0'}} >{icon}</div>
            <Typography variant='h6' component={'h6'} align='center'>{title}</Typography>
            {/* <Typography variant='p' align='center'>Interested in RRDigitalDynamics? Just pick up the phone to chat with a member of our sales team.</Typography> */}
            <div style={{width: '100%', display: 'flex', justifyContent: 'center', padding: '20px 0 10px 0'}} >
            <Button variant='contained' >{buttonText}</Button>
            </div>
        </div>
    )
}
export default ContactUs;