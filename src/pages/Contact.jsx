import { Form } from '../components/ui/form';
import { Button } from '../components/ui/button';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import ContactArea from '../components/ContactField';

//Zod's API for forms
const formSchema = z.object({
  name: z.string().min(2, {
    required_error: 'Name is required',
    message: 'Name must be atleast 2 characters long.',
  }),
  email: z.string().email({
    required_error: 'Email is required',
    message: 'Please provide a valid email address.',
  }),
  message: z.string().min(5, {
    message: 'Message is required',
  }),
});

const formFields = [
  {
    name: 'name',
    title: 'Name',
    description: 'Please provide your full name',
    placeholder: 'John Doe',
  },
  {
    name: 'email',
    title: 'Email',
    description: 'Please provide your full name',
    placeholder: 'joe@email.com',
  },
  {
    name: 'message',
    title: 'Message',
    description: 'Reason for your inquiry',
    type: 'area',
  },
];

function Contact() {
  //Form effect
  const form = useForm({
    resolver: zodResolver(formSchema),
    // defaultValues: {
    //   name: '',
    // },
  });

  //Form Submit Event
  function onSubmit(values) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 mx-auto px-2 py-2 w-full md:w-5/6 bg-gray-400 dark:bg-gray-800 border rounded-md"
      >
        {formFields.map((field, index) => (
          <ContactArea key={index} {...field} form={form} />
        ))}
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </Form>
  );
}

export default Contact;
