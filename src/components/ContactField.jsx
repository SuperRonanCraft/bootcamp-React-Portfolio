import PropTypes from "prop-types";
import {
  FormField,
  FormItem,
  FormControl,
  FormDescription,
  FormMessage,
  FormLabel,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

function ContactArea(props) {
  // console.log(url, link);
  return props.type !== "area" ? Field(props) : Text(props);
}
function Field({ form, name, title, placeholder, description }) {
  // console.log(url, link);
  return (
    <FormField
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

ContactArea.propTypes = {
  type: PropTypes.string,
};

Field.propTypes = {
  form: PropTypes.shape({ control: PropTypes.object.isRequired }).isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  placeholder: PropTypes.string,
  description: PropTypes.string,
};

Text.propTypes = {
  form: PropTypes.shape({ control: PropTypes.object.isRequired }).isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  placeholder: PropTypes.string,
  description: PropTypes.string,
};
