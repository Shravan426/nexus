import {  Center, createStyles, Group } from "@mantine/core";
const useStyles = createStyles((theme) => ({
//  container {
//   BackgroundImage:URL("mantinetwo/images/Group 3.png");
//  }
//  Header {
//     align-items:
//  }
booking:{
    background: 'linear-gradient(93deg, #1D2950 0%, #1A2546 100%)',
    border: '1px solid #243363',
    borderRadius: '6px',
    opacity: 1,
},
info:{
    background: '#FFFFFF',
    border: '1px solid #ECEEF5',
    borderRadius: 6,
    opacity: 1,
},
airline:{
    background: 'transparent linear-gradient(136deg, #243364 0%, #131B33 50%, #233161 100%) 0% 0% no-repeat padding-box',
    borderRadius: 6,
    opacity: 1,
},
arrow:{
    background: 'rgba(255, 255, 255, 0.09)', 
    border: '1px solid rgba(255, 255, 255, 0.11)',  
    borderRadius: '6px',
    opacity: 1,
    width:"86%",
    padding: 'your-padding-value',  
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '0% 0%',
    
},
book:{
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '55px',
    lineHeight: '21px',
    fontFamily: 'Poppins, sans-serif', 
    letterSpacing: '0px',
    textAlign: 'left',
    color: '#FFFFFF',
    opacity: 0.12,
    [theme.fn.smallerThan('sm')]: {
        fontSize: '50px', 
        lineHeight: '30px',
      },
      [theme.fn.smallerThan('xs')]: {
        fontSize: '42px', 
        lineHeight: '16px',
},
},
cairo:{
    background: '#F7F7F7',
    border: '1px solid #F1F1F1',
    opacity: 1,
},
alignGrid:{
    display:'grid',
    gridTemplateColumns: 'auto auto auto auto',
    gap:'30%',
},
flightGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)', // Desktop: 3 columns
    gap: '100px',

    
  },

  flightGridItem: {
    display: 'flex',
    flexDirection: 'column',
  },

  tablehead:{
    backgroundColor:'#E6E6E6'
  }
}));
export default useStyles;