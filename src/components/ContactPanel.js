import { useState } from "react";
import { Form, Header, Segment, TransitionablePortal } from "semantic-ui-react";
import * as emailjs from "emailjs-com"

export default function ContactPanel() {

    const defaultContactFormState = { name: "", email: "", phone: "", message: "" };

    const [ contactForm, updateContactForm ] = useState( defaultContactFormState );

    const [ showEmailError, toggleShowEmailError ] = useState( false );
    
    const [ showPhoneError, toggleShowPhoneError ] = useState( false );

    const [ showConfirmation, toggleShowConfirmation ] = useState( false );

    function handleContactFormChange( changeEvent ) {
        const updatedContactFormState = { ...contactForm };
        updatedContactFormState[ changeEvent.target.name ] = changeEvent.target.value;
        updateContactForm( updatedContactFormState );
    }

    function handleFormSubmission() {
        const validateEmail = new RegExp( /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i );
        const validatePhoneNumber = new RegExp( /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s]{0,1}[0-9]{3}[-\s]{0,1}[0-9]{4}$/ );
        if ( !validateEmail.test( contactForm.email ) ) {
            toggleShowEmailError( true );
        } else if ( !!contactForm.phone.length && !validatePhoneNumber.test( contactForm.phone ) ) {
            toggleShowPhoneError( true );
        } else {
            const emailParams = {
                from_name: contactForm.name,
                reply_to: contactForm.email,
                reply_phone: contactForm.phone,
                message: contactForm.message
            };
            emailjs.send( "gmail", "template_b34uw5n", emailParams, "user_nKvQ1C56RUsJYMhCzmv2d" );
            updateContactForm( defaultContactFormState );
            toggleShowEmailError( false );
            toggleShowPhoneError( false );
            toggleShowConfirmation( true );
            setTimeout( () => toggleShowConfirmation( false ), 4000 );
        }
    }

    function MessagePortal() {
        return <TransitionablePortal open={ showConfirmation }>
          <Segment inverted color="teal" style={ { left: "50%", position: "fixed", top: "0", zIndex: 1000 } }>
            <Header>Email sent! Thanks for getting in touch!</Header>
          </Segment>
        </TransitionablePortal>;
      }

    return <Segment raised>
        <MessagePortal />
        <h1 className="header">Contact me!</h1>
        <Form onSubmit={ handleFormSubmission }>
            <Form.Group widths="equal">
            <Form.Input
                fluid
                required
                name="name"
                label="Name"
                placeholder="Name"
                value={ contactForm.name }
                onChange={ handleContactFormChange }
            />
            <Form.Input
                fluid
                required
                name="email"
                label="Email"
                placeholder="Email"
                value={ contactForm.email }
                onChange={ handleContactFormChange }
                error={ showEmailError ? { content: "Please enter a valid email address" } : null }
            />
            <Form.Input
                fluid
                name="phone"
                label="Phone"
                placeholder="Phone"
                value={ contactForm.phone }
                onChange={ handleContactFormChange }
                error={ showPhoneError ? { content: "Please enter a valid US phone number" } : null }
            />
            </Form.Group>
            <Form.TextArea
                required
                name="message"
                label="Message"
                placeholder="Tell me more about you..."
                value={ contactForm.message }
                onChange={ handleContactFormChange }
            />
            <Form.Button>Submit</Form.Button>
        </Form>
    </Segment>;

}