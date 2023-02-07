import Toggle from './Toggle';

// 사용하는 곳에서 state를 관리할 필요가 없어졌다!
const Home = () => (
  <Toggle>
    <Toggle.Title />
    <Toggle.Button>click me</Toggle.Button>
  </Toggle>
);

export default Home;
