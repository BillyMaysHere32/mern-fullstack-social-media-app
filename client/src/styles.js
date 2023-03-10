import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    },
  heading: {
    color: 'rgba(0,183,255, 1)',
  },
  image: {
    marginBottom: '15px',
    marginTop: '15px',
    borderRadius: 10,
  },
//   [theme.breakpoints.down('sm')]: {
//   maincontainer: {
//     flexDirection: 'column-reverse',
//   },
// },
}));