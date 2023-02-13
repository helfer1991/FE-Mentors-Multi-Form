import React, { useState, FormEvent, ChangeEvent } from 'react';

import { InputWrapper, Label, Input } from './styles';

import { Section } from '../../components/section';


export const FirstPage: React.FC = () => {
    const [personalInfo, setPersonalInfo] = useState({ name: '', email: '', phone: ''});

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log(personalInfo);
    }
  
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setPersonalInfo({
        ...personalInfo,
        [event.target.id]: event.target.value,
      })
    }

    return (
        <Section title="Personal info" description="Please provide your name, email address, and phone number.">
          <form onSubmit={handleSubmit}>
            <InputWrapper>
              <Label htmlFor="name">Name</Label>
              <Input id="name" value={personalInfo.name} type="text" placeholder="e.g. Stephen King" onChange={handleChange} />
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" value={personalInfo.email} type="text" placeholder="e.g. stephenking@lorem.com" onChange={handleChange} />
            </InputWrapper>
            <InputWrapper isLast>
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" value={personalInfo.phone} type="text" placeholder="e.g. +1 234 567 890" onChange={handleChange} />
            </InputWrapper>
          </form>
        </Section>
    );
}