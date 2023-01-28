import Link from 'next/link';
import { VscSourceControl } from 'react-icons/vsc';

const ProjectItem = ({
  title, body, tags, source, demo,
}) => (
  <div className="bg-accentSoft p-6 rounded-lg border-2 border-accentDark">
    <button className="bg-accentDark rounded-full w-fit p-2 text-background hover:bg-font">
      <Link href={source} target="_blank">
        <VscSourceControl />
      </Link>
    </button>
    <div className="my-8">
      <Link href={demo} target="_blank">
        <h3 className="font-bold text-xl mb-2 hover:underline">{title}</h3>
      </Link>
      <p>{body}</p>
    </div>
    <div className="flex gap-2">
      {
        tags.map((tag, index) => (
          <p key={index} className="bg-accentDark rounded-lg py-1 px-2 text-xs text-background font-bold">{tag}</p>
        ))
      }
    </div>
  </div>
);

export default ProjectItem;
