import classes from './LoadingSpinner.module.css';

const LoadingSpinner = () => {
  return (
  <div className='h-screen'>
    <div className={classes.spinner}></div>
  </div>);
}

export default LoadingSpinner;
