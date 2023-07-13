import { makeStyles } from 'tss-react/mui';

export default makeStyles()({

    root:{
        background: '#000000',
        height: 64,
    },
    button: {
        background: 'white',
        color: '#000000',
        marginRight: 10,
        '@media (max-width: 475px)': {
            fontSize: 12,
        },
    },
    typography: {
        cursor: 'pointer',
        '@media (max-width: 475px)': {
            marginRight: 10,
        },
    },
    link:{
        color: 'white',
        textDecoration: 'none',
    },

})