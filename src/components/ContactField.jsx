import {
  FormField,
  FormItem,
  FormControl,
  FormDescription,
  FormMessage,
  FormLabel,
} from './ui/form';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

function ContactArea(props) {
  // console.log(url, link);
  return props.type !== 'area' ? Field(props) : Text(props);
}

// eslint-disable-next-line react/prop-types
function Field({ form, name, title, placeholder, description }) {
  // console.log(url, link);
  return (
    <FormField
      // eslint-disable-next-line react/prop-types
      control={form.control}
      name={name}
      render={({ field }) => (
        <>
          <FormItem>
            <FormLabel>{title}</FormLabel>
            <FormControl>
              <Input placeholder={placeholder} {...field} />
            </FormControl>
            <FormDescription>{description}</FormDescription>
            <FormMessage />
          </FormItem>
        </>
      )}
    />
  );
}

function Text({ form, name, title, placeholder, description }) {
  // console.log(url, link);
  return (
    <FormField
      // eslint-disable-next-line react/prop-types
      control={form.control}
      name={name}
      render={({ field }) => (
        <>
          <FormItem>
            <FormLabel>{title}</FormLabel>
            <FormControl>
              <Textarea placeholder={placeholder} {...field} />
            </FormControl>
            <FormDescription>{description}</FormDescription>
            <FormMessage />
          </FormItem>
        </>
      )}
    />
  );
}

export default ContactArea;
