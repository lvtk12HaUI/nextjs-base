import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Theme } from '@mui/material/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
    itemText: {
        color: 'Red'
    }
}));

export default useStyles;