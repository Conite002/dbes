import './ExploreContainer.css';
import Forms from './Forms/Forms';

interface ContainerProps {
  name: string;
}


const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div>
      <Forms />
    </div>
  );
};

export default ExploreContainer;
