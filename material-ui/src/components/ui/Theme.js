
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const arcblue="#0B72B9";
const arcOrange="#FFBA60";

export default createMuiTheme({
palette:{
    common:{
        blue: `${arcblue}`,
        orange: `${arcOrange}`
    },
    primary:{
        main: `${arcblue}`
    },
    secondary:{
        main: `${arcOrange}`
    }
},

typography:{

    tab:{
       
        fontFamily:"Raleway",
        textTransform:"none",
        fontWeight:700,
        fontSize:"1rem",
    },
    estimate:{
        fontFamily:"Pacifico",
        fontSize:"1rem",
        textTransform:"none",
    
        color:"white"
    }
}

});