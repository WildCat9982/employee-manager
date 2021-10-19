import { makeStyles } from '@mui/styles';
import { useHistory, useLocation } from 'react-router-dom'
import {
    Drawer,
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    AppBar,
    Toolbar,
    Avatar,
    Button,
    ButtonGroup
} from '@mui/material'
import { AddCircleOutlined, SubjectOutlined } from '@mui/icons-material';


const drawerWidth = 240

const useStyle = makeStyles((theme) => {
    return {
        root: {
            display: 'flex'
        },
        page: {
            background: '#f9f9f9',
            width: '100%',
            padding: theme.spacing(3)
        },
        drawer: {
            width: drawerWidth
        },
        drawerPaper: {
            width: drawerWidth
        },
        active: {
            background: '#f4f4f4'
        },
        title: {
            padding: theme.spacing(2)
        },
        appbar: {
            color: "inherit", 
            wdith: `calc(100% - ${drawerWidth}px)`,
            paddingLeft: `${drawerWidth}px`
        },
        toolbar: theme.mixins.toolbar,
        date: {
            flexGrow: 1
        },
        avatar: {
            marginRight: theme.spacing(2)
            
        },
        button: {
            textTransform: 'none',
            marginRight: theme.spacing(2)
        },
        profile: {
            flexGrow: 1,
        }

    }
})

export const Layout = ({children}) => {
    const classes = useStyle()
    const history = useHistory()
    const location = useLocation()
    const menuItems = [
        {
            id: 1,
            text: 'Employees',
            icon: <SubjectOutlined color="secondary" />,
            path: '/'
        },
        {
            id: 2,
            text: 'Add',
            icon: <AddCircleOutlined color="secondary" />,
            path: '/add'
        }
    ]
    return (
        <>
        <div className={classes.root}>
            { /* app bar */}
            <AppBar 
                className={classes.appbar}    
            >
                <Toolbar>
                    <Avatar className={classes.avatar} />
                     <Typography className={classes.profile}>
                        Kelvin Lee
                    </Typography>

                    <ButtonGroup variant="outlined" aria-label="outlined button group">
                        {
                            menuItems?.map( item => (
                                <Button key={item.id} style={{textTransform: 'none'}}
                                    variant= "outlined" 
                                    color="secondary" 
                                    endIcon={item.icon}
                                    onClick={() => history.push(item.path)}
                                >{item.text}</Button>
                            ))
                            
                        }
                    </ButtonGroup>
                   
                </Toolbar>
            </AppBar>

            {/* side drawer*/ }
            <Drawer 
                className={classes.drawer}
                variant="permanent"
                anchor="left"     
                classes={{ paper: classes.drawerPaper}}
            >
                <div>
                    <Typography variant="h5" className={classes.title}>
                        Employee Manager
                    </Typography>
                </div>
                
                {/* list / links */}
                <List>
                    {menuItems.map( item => (
                        <ListItem key={item.id}
                            button
                            key={item.text}
                            onClick={() => history.push(item.path)}
                            className={location.pathname == item.path ? classes.active : null}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <div className={classes.page}>
                <div className={classes.toolbar}></div>
                {children}
            </div>
        </div>
        </>
    )
}

