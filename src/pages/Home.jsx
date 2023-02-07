import Toggle from './Toggle';

const Type = ({ on }) => <div>{on ? '켜진' : '꺼진'}상태인 버튼이야.</div>;
// 사용하는 곳에서 state를 관리할 필요가 없어졌다!
const Home = () => (
  <Toggle>
    <Toggle.Title />
    <Toggle.Button renderProp={(on) => <Type on={on} />}>click me</Toggle.Button>
  </Toggle>
);

export default Home;
