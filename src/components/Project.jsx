import {
  Card,
  CardTitle,
  CardHeader,
  CardDescription,
  CardContent,
  CardFooter,
} from './ui/card';
import { Github, Server } from 'lucide-react';

// eslint-disable-next-line react/prop-types
function Project({ title, github, deployment, image, description }) {
  return (
    <Card
      className="project group"
      style={{ backgroundImage: `url(./images/${image})` }}
    >
      <div className="invisible group-hover:visible opacity-0 hover:opacity-100 rounded-md border bg-gray-900/90 transition duration-300">
        <CardHeader className="">
          <CardTitle className="text-center">{title}</CardTitle>
          <div className="flex flex-col-2 justify-center gap-4 py-3">
            <a className="has-tooltip" href={github}>
              <span className="tooltip rounded shadow-lg p-1 bg-gray-900 text-red-500 -mt-8">
                Github Repo
              </span>
              <Github size={24} className="hover:text-red-500" />
            </a>
            <a href={deployment}>
              <Server size={24} className="hover:text-red-500" />
            </a>
          </div>
        </CardHeader>
        <CardDescription className="mx-2 text-justify">
          {description}
        </CardDescription>
        <CardContent className="grid gap-4"></CardContent>
        <CardFooter></CardFooter>
      </div>
    </Card>
  );
}

export default Project;
