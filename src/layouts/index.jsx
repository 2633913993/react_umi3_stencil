import Menu from './components/menu/index';
import { history } from 'umi';
const Layouts = (props) => {
  if (history.location.pathname == '/login') {
    return <div>{props.children}</div>;
  } else {
    return <Menu {...props} />;
  }
};
export default Layouts;
