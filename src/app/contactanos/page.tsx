'use client';
import React from 'react';
import { Button, Form, Input, TextArea } from 'components/ui';
import { ReCAPTCHA } from 'components/app';

export default function ContactanosPage() {
  return (
    <section className="container my-8">
      <Form onSubmit={() => {}}>
        <div className="row md:vg-16">
          <div className="col-12 md:col-6">
            <Form.Item
              label="First name"
              name="first_name"
              rules={{
                required: true,
                max: 50,
                type: 'text',
                message: 'First name is a required field',
              }}
            >
              <Input />
            </Form.Item>
          </div>
          <div className="col-12 md:col-6">
            <Form.Item
              label="Last name"
              name="last_name"
              rules={{
                required: true,
                max: 50,
                type: 'text',
                message: 'Last name is a required field',
              }}
            >
              <Input />
            </Form.Item>
          </div>
          <div className="col-12">
            <Form.Item
              label="Email"
              name="email"
              rules={{
                type: 'email',
                required: true,
                message: 'Email is a required field',
              }}
            >
              <Input />
            </Form.Item>
          </div>
          <div className="col-12">
            <Form.Item
              label="Your message"
              name="message"
              rules={{
                type: 'text',
                required: true,
                message: 'Your message is a required field',
                max: 500,
              }}
            >
              <TextArea style={{ resize: 'none', height: '250px' }} />
            </Form.Item>
          </div>
          <div className="col-12">
            <ReCAPTCHA />
          </div>
          <div className="col-12 my-4">
            <Button block htmlType="submit" type="primary">
              Send
            </Button>
          </div>
        </div>
      </Form>
    </section>
  );
}
