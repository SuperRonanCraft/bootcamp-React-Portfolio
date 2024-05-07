import {
  FormField,
  FormItem,
  FormControl,
  FormDescription,
  FormMessage,
  FormLabel,
} from './ui/form';
import { Input } from './ui/input';

// eslint-disable-next-line react/prop-types
function NavItem({ form, link }) {
  // console.log(url, link);
  return (
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
  );
}

export default NavItem;
