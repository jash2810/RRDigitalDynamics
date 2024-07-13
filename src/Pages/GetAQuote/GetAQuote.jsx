import React, { useRef, useState } from 'react';
import './GetAQuote.css';
import { Button, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import GetAQuoteImage from '../../Images/getaquote.png';
import emailjs from '@emailjs/browser';
import { EmailSecrets } from '../../data/data';

function GetAQuote() {

    const form = useRef();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [company, setCompany] = useState('');
    const [service, setService] = useState('');
    const [website, setWebsite] = useState('');
    const [comment, setComment] = useState('');

    function submitForm() {
        console.log('submit', firstName, lastName, email, phone, company, website, service, comment)

        console.log(form.current);
        emailjs.sendForm(EmailSecrets.serviceId, EmailSecrets.templateIdGetAQuote, form.current, EmailSecrets.publicKey)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        nullifyAllValues();
    }

    function nullifyAllValues() {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setCompany('');
        setWebsite('');
        setService('');
        setComment('');
    }

    const changeValue = (e) => {
        if (e.target.id === 'firstName') {
            setFirstName(e.target.value)
        }
        if (e.target.id === 'lastName') {
            setLastName(e.target.value)
        }
        if (e.target.id === 'email') {
            setEmail(e.target.value)
        }
        if (e.target.id === 'phone') {
            setPhone(e.target.value)
        }
        if (e.target.id === 'company') {
            setCompany(e.target.value)
        }
        if (e.target.id === 'website') {
            setWebsite(e.target.value)
        }
        if (e.target.name === 'service') {
            setService(e.target.value)
        }
        if (e.target.id === 'comment') {
            setComment(e.target.value)
        }
    }

    return ( 
        <React.Fragment>
            <div className='get-a-quote-title-wrapper'>
                <Typography variant='h2' className='get-a-quote-title'>Let's get you a quote</Typography>
            </div>
            <form
                headers='application/json'
                name="contact-form"
                style={{marginBottom: '30px'}}
                ref={form}
            >
                <Grid container spacing={2} style={{width: '90%', margin: 'auto'}}>
                    <Grid item xs={12} sm={6}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sx={{display: {xs: 'block', sm: 'none'}}}>
                                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    <img src={GetAQuoteImage} />
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    placeholder="First Name"
                                    label="First Name *"
                                    variant="outlined"
                                    size="medium"
                                    name="firstName"
                                    id="firstName"
                                    fullWidth
                                    onChange={(e) => changeValue(e)}
                                    value={firstName}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    placeholder="Last Name"
                                    label="Last Name *"
                                    variant="outlined"
                                    size="medium"
                                    name="lastName"
                                    id="lastName"
                                    fullWidth
                                    onChange={(e) => changeValue(e)}
                                    value={lastName}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    placeholder="Email"
                                    label="Email *"
                                    variant="outlined"
                                    size="medium"
                                    name="email"
                                    id="email"
                                    fullWidth
                                    onChange={(e) => changeValue(e)}
                                    value={email}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    placeholder="Phone"
                                    label="Phone *"
                                    variant="outlined"
                                    size="medium"
                                    name="phone"
                                    id="phone"
                                    fullWidth
                                    onChange={(e) => changeValue(e)}
                                    value={phone}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    placeholder="Name Of Your Company"
                                    label="Name Of Your Company *"
                                    variant="outlined"
                                    size="medium"
                                    name="company"
                                    id="company"
                                    fullWidth
                                    onChange={(e) => changeValue(e)}
                                    value={company}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    placeholder="Current Web Address"
                                    label="Current Web Address *"
                                    variant="outlined"
                                    size="medium"
                                    name="website"
                                    id="website"
                                    fullWidth
                                    onChange={(e) => changeValue(e)}
                                    value={website}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <InputLabel id="interested-in">I am interested in *</InputLabel>
                                    <Select
                                        labelId="interested-in"
                                        id="interested-in-menu"
                                        name='service'
                                        value={service}
                                        label="I am interested in *"
                                        onChange={(e) => changeValue(e)}
                                        style={{width: '100%'}}
                                    >
                                        <MenuItem value={'Social Media Marketing'}>Social Media Marketing</MenuItem>
                                        <MenuItem value={'SEO'}>SEO</MenuItem>
                                        <MenuItem value={'PPC'}>PPC</MenuItem>
                                        <MenuItem value={'Web Development'}>Web Development</MenuItem>
                                    </Select>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6} sx={{display: {xs: 'none', sm: 'block'}}}>
                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <img src={GetAQuoteImage} />
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            placeholder="Tell us a little more about your project"
                            label="Tell us a little more about your project *"
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
                        <Button
                            size="large"
                            variant="contained"
                            type="button"
                            color="primary"
                            fullWidth
                            onClick={() => {submitForm()}}
                            sx={{marginTop: '20px', width: {xs: '100%', sm: '300px'}}}
                        >
                        Send Enquiry
                        </Button>
                    </Grid>
                </Grid>
            </form>
{/*             
            <form
                headers='application/json'
                name="contact-form"
                style={{marginBottom: '30px'}}
            >
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
            </form> */}
        </React.Fragment>
     );
}

export default GetAQuote;