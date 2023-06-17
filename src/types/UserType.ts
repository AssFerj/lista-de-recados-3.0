import TaskType from './TaskType';

interface UserType {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  tasks?: TaskType[];
}

export default UserType;