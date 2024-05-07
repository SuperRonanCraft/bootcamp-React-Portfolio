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
function Project({ title, github, deployment, image, description, techlist }) {
  return (
    <Card
      className="project group"
      style={{ backgroundImage: `url(./images/${image})` }}
    >
      <div className="opacity-90 hover:opacity-100 rounded-md border bg-gray-100/90 dark:bg-gray-900/90 transition duration-300 w-full">
        <CardHeader className="">
          <CardTitle className="text-center">
            <h2>{title}</h2>
          </CardTitle>
          {/* Quick Links */}
          <div className="flex flex-col-2 justify-center gap-4 py-3">
            <a className="has-tooltip" href={github}>
              <span className="tooltip rounded shadow-lg p-1 bg-gray-100 dark:bg-gray-900 text-red-500 -mt-8">
                Github Repository
              </span>
              <Github size={24} className="hover:text-red-500" />
            </a>
            <a className="has-tooltip" href={deployment}>
              <span className="tooltip rounded shadow-lg p-1 bg-gray-100 dark:bg-gray-900 text-red-500 -mt-8">
                Deployment
              </span>
              <Server size={24} className="hover:text-red-500" />
            </a>
          </div>
        </CardHeader>

        {/* Description */}
        <CardDescription className="mx-2 text-center text-md text-gray-900 dark:text-gray-200">
          <a>{description}</a>
          {/* <div>
            {techlist?.map(tech => ()) || ''}
          </div> */}
        </CardDescription>
        <CardContent className="grid gap-4"></CardContent>
        <CardFooter></CardFooter>
      </div>
    </Card>
  );
}

export default Project;
