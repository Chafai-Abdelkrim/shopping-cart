import { RiGithubLine } from 'react-icons/ri';

function Github({ username }: { username: string }) {
    const nameArray = username.split('-');

  return (
    <a
      href={`https://github.com/${username}`}
      target="_blank"
      rel="noopener noreferrer"
      className="Github Button"
      title="Check Out My Github"
    >
      <RiGithubLine />
      {`${nameArray[1]} ${nameArray[0]}`}
    </a>
  );
}

export default Github;