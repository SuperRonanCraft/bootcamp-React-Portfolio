import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormDescription,
  FormMessage,
  FormLabel,
} from '../components/ui/form';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

//Zod's API for forms
const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be atleast 2 characters long.',
  }),
  email: z.string().email({
    message: 'Please provide a valid email address.',
  }),
});

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
        className="space-y-8 mx-auto px-2 w-full md:w-5/6 bg-gray-400 border rounded-md"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <>
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormDescription>Please provide your full name</FormDescription>
                <FormMessage />
              </FormItem>
            </>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <>
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="joe@email.com" {...field} />
                </FormControl>
                <FormDescription>
                  Please provide your professional email
                </FormDescription>
                <FormMessage />
              </FormItem>
            </>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

export default Contact;
