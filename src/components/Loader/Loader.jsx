import PropTypes from 'prop-types';
// import { useSelector } from 'react-redux';
import { Container, Ellipse } from './Loader.styles';

export default function Loader({ absolute = false, isLoading }) {
  // const isLoading = useSelector(state => state.loader.status);

  return (
    <Container
      absolute={absolute}
      isLoading={isLoading}
    >
      <Ellipse></Ellipse>
      <Ellipse></Ellipse>
      <Ellipse></Ellipse>
      <Ellipse></Ellipse>
    </Container>
  );
}

Loader.propTypes = {
  absolute: PropTypes.bool,
};
