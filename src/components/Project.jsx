import { Skill } from './Skills';
import {
  Card,
  CardTitle,
  CardHeader,
  CardDescription,
  CardContent,
  CardFooter,
} from './ui/card';
import { Github, Server } from 'lucide-react';
import images from '../../public/images/tech/index';

// eslint-disable-next-line react/prop-types
function Project({ title, github, deployment, image, description, tech }) {
  return (
    <Card
      className="project group"
      style={{ backgroundImage: `url(./images/${image})` }}
    >
      <div className="bg-gray-100/70 hover:bg-gray-200/90 dark:bg-gray-700/70 dark:hover:bg-gray-900/90 rounded-md border transition duration-300 w-full flex flex-wrap">
        <CardHeader className="mx-auto basis-full">
          <CardTitle className="text-center">
            <h2>{title}</h2>
          </CardTitle>
          {/* Quick Links */}
          <div className="flex flex-col-2 justify-center gap-4 py-3 basis-full">
            <a className="has-tooltip" href={github}>
              <span className="tooltip rounded shadow-lg p-1 bg-gray-100 dark:bg-gray-900 text-red-500 -mt-8">
                Github Repository
              </span>
              <Github size={24} className="hover:text-red-500" />
            </a>
            {deployment && (
              <a className="has-tooltip" href={deployment}>
                <span className="tooltip rounded shadow-lg p-1 bg-gray-100 dark:bg-gray-900 text-red-500 -mt-8">
                  Deployment
                </span>
                <Server size={24} className="hover:text-red-500" />
              </a>
            )}
          </div>
        </CardHeader>

        {/* Description */}
        <CardDescription className="mx-2 text-center text-md text-gray-900 dark:text-gray-200 basis-full self-end">
          <a>{description}</a>
          <div className="flex flex-wrap justify-end content-end">
            {tech &&
              tech.map((item, index) => {
                const image = searchArray(images, item);
                console.log(image);
                return (
                  <Skill key={index} {...image} size="32px" margin="m-1" />
                );
              })}
          </div>
        </CardDescription>
      </div>
    </Card>
  );
}

function searchArray(array, valuetofind) {
  for (let i = 0; i < array.length; i++) {
    if (array[i]['id'] === valuetofind) {
      return array[i];
    }
  }
  return -1;
}

export default Project;
